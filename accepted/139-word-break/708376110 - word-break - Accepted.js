/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  if (wordDict == null || wordDict.length === 0) return false;
  const set = new Set(wordDict);

  // When s = 'catsandog', wordDict = ['cats', 'ca', 'ts']
  // After 'cats' and 'ca', it will become 'andog', 'tsandog'
  // For 'tsandog', after 'ts', it will become 'andog' again, visited set here is for memoization
  const visited = new Set();
  const queue = [0];

  while (queue.length) {
    const begin = queue.pop();

    if (!visited.has(begin)) {
    visited.add(begin);
      for (let end = begin + 1; end <= s.length; end++) {
        if (set.has(s.slice(begin, end))) {
          if (end === s.length) return true;
          queue.push(end);
        }
      }
    }
  }
  return false;
};