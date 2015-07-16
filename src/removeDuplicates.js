function randomString(length) {
  let str = '',
      chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++ ) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
}

function randomTld() {
  let tlds = ['.com', '.net', '.edu', '.gov', '.limo', '.party'];
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

function coinFlip() {
    return (Math.floor(Math.random() * 2) === 0);
}

function randomDuplicate(results) {
  return results[(Math.floor(Math.random() * results.length))];
}

export default {
  generateArray(length) {
    let results = [generateEmailAddress()];
    for (let i = 0; i < 2 * length; i++) {
      if (coinFlip()) {
        results.push(generateEmailAddress());
      } else {
        results.push(randomDuplicate(results));
      }
    }
    return results;
  },
  filter(input) {
    let output = [],
        cache = {};
    input.forEach(element => {
      if (!cache[element]) {
        output.push(element);
        cache[element] = true;
      }
    });
    return output;
  }
};
