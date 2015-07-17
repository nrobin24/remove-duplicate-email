import removeDuplicates from './removeDuplicates';
import toCsv from './toCsv';
import tree from './tree';

var emailAddressesCursor = tree.select('emailAddresses'),
    resultsCursor = tree.select('results');

export default {
  generateArray(length) {
    let t0 = performance.now();
    emailAddressesCursor.set(removeDuplicates.generateArray(length));
    let delta = (performance.now() - t0).toFixed(2);
    resultsCursor.push({
      delta,
      type: 'generate',
      length
    });
  },
  filter() {
    let startLength = emailAddressesCursor.get().length;
    let t0 = performance.now();
    emailAddressesCursor.apply(removeDuplicates.filter);
    let delta = (performance.now() - t0).toFixed(2);
    let endLength = emailAddressesCursor.get().length;
    resultsCursor.push({
      delta,
      type: 'filter',
      startLength,
      endLength
    });
  },
  clearData() {
    emailAddressesCursor.set([]);
    resultsCursor.set([]);
  },
  downloadCsv() {
    toCsv();
  }
};
