
function reverseWords(s) {
  const ret = [];
  let word = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
  // We found the space, put word in front (if there is any)
        if (word.length > 0) {
            ret.unshift(word);
        } 
  // Reset the current word
        word = '';
      }
    else {
  // Add characters to the current word
      word+=(s[i]);
    }
  }
  // If there is current word exists, add it in front
  if (word.length > 0) {
            ret.unshift(word);
        }
  return ret.join(' ');

};