/**
 * Generate a sequence of fibonacci numbers, with a given length
 *
 * @export
 * @param {any} length length of sequence to generate
 * @returns {number[]} fibonacci sequence
 */

export function getFibSequence(rawLength) {
  let length = parseInt(rawLength, 10);
  if (isNaN(length) || length < 0) {
    return undefined;
  }
  let twoAgo = 1;
  let oneAgo = 0;
  let fibArr = [];

  while (length > 0) {
    const current = twoAgo + oneAgo;
    fibArr.push(current);
    twoAgo = oneAgo;
    oneAgo = current;
    length--;
  }

  return fibArr;
}
