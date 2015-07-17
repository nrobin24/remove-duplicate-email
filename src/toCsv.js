import tree from './tree';




export default function(){
    let csvData = tree.select('emailAddresses').get();

    // download stuff
    let fileName = 'data.csv';
    let buffer = csvData.join('\n');
    let blob = new Blob([buffer], {
      'type': 'text/csv;charset=utf8;'
    });
    let link = document.createElement('a');

    if (link.download !== undefined) { // feature detection
      // Browsers that support HTML5 download attribute
      link.setAttribute('href', window.URL.createObjectURL(blob));
      link.setAttribute('download', fileName);
     } else if(navigator.msSaveBlob) { // IE 10+
      link.setAttribute('href', '#');
      link.setAttribute('hidden', true);
      link.addEventListener('click', function(event) {
        navigator.msSaveBlob(blob, fileName);
      }, false);
    }
    else {
      // it needs to implement server side export
      alert('Sorry, CSV download not supported in this browser');
    }
    link.innerHTML = 'Export to CSV';
    document.body.appendChild(link);
    link.click();
	}
