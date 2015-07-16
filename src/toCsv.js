var test_array = [["name1", 2, 3], ["name2", 4, 5], ["name3", 6, 7], ["name4", 8, 9], ["name5", 10, 11]];

export default function(){
    let csvContent;
		test_array.forEach(function(infoArray, index){
			let dataString = infoArray.join(",");
			csvContent += dataString+ "\n";
		});

		var encodedUri = encodeURI(csvContent);
		window.open(encodedUri);
	}
