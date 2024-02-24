/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  function isSubsequence(s, word) {
    let index = -1
    for (let ch of word) {
      index = s.indexOf(ch, index + 1)
      if (index < 0) return false
    }
    return true
  }

  return words.reduce((count, word) => {
    return count + isSubsequence(s, word)
  }, 0)
};