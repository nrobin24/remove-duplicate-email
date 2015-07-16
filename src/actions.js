import removeDuplicates from './removeDuplicates';
import toCsv from './toCsv';
import tree from './tree';

var emailAddressesCursor = tree.select('emailAddresses');

export default {
  generateArray(length) {
    emailAddressesCursor.set(removeDuplicates.generateArray(length));
    console.log(emailAddressesCursor.get());
  },
  filter() {
    let t0 = performance.now();
    emailAddressesCursor.apply(removeDuplicates.filter);
    let delta = performance.now() - t0;
    console.log(emailAddressesCursor.get());
    console.log('operation performed in: ' + delta);
  }
};
