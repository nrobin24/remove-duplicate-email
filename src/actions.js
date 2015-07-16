import removeDuplicates from './removeDuplicates';
import toCsv from './toCsv';
import tree from './tree';

var emailAddressesCursor = tree.select('emailAddresses');

export default {
  generateArray() {
    emailAddressesCursor.set(removeDuplicates.generateArray(10));
    console.log(emailAddressesCursor.get());
  },
  filter() {
    emailAddressesCursor.apply(removeDuplicates.filter);
    console.log(emailAddressesCursor.get());
  }
};
