import removeDuplicates from './removeDuplicates';
import toCsv from './toCsv';

export default {
  generateArray() {
    let array = removeDuplicates.generateArray(10);
    console.log(array);
    toCsv();
  }
};
