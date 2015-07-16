function randomString(length) {
  let str = '',
      chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++ ) {
    //TODO: use randomIndex
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
}

function randomTld() {
  let tlds = ['.com', '.net', '.edu', '.gov', '.limo', '.party'];
  //TODO: use randomIndex
  return tlds[Math.floor(Math.random() * tlds.length)];
}

function randomLength() {
  return 3 + Math.floor(Math.random() * 12);
}

function generateEmailAddress() {
  return randomString(randomLength()) +
    '@' +
    randomString(randomLength()) +
    randomTld();
}

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

export default {
  generateArray(length) {
    let result = [];

    //generate a half length array with all unique entries
    for (let i = 0; i < length / 2; i++) {
      result.push(generateEmailAddress());
    }

    //clone it
    let clone = result.slice(0);

    //randomly insert duplicates
    for (let i = 0; i < length / 2; i++) {
      let j = randomIndex(clone),
          k = randomIndex(result),
          randomDuplicate = clone.splice(j, 1)[0];

      result.splice(k, 0, randomDuplicate);
    }

    return result;
  },
  filter(input) {
    let output = [],
        cache = {};
    //TODO: try using map instead of forEach
    input.forEach(element => {
      if (!cache[element]) {
        output.push(element);
        cache[element] = true;
      }
    });
    return output;
  }
};
