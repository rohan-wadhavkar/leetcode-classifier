var minTransfers = function(transactions) {

  // here we are finding out how much each person owes the "group"
  // because if the person is at 0 he doesn't owe any money or needs any money
  // and the balance can be settled between the other individuals
  const accountsPayable = {};
  for (let [from, to, amount] of transactions) {
    // this person needs money
    accountsPayable[from] = (accountsPayable[from] || 0) - amount
	// this person owes money
    accountsPayable[to] = (accountsPayable[to] || 0) + amount
  }
  
  // now since we don't need to reference the person anymore
  // we can strip that away and just use the values
  const payables = Object.values(accountsPayable)
  let numTransactions = 0;
  // now that we have minimized all the branches that will occur
  // we backtrack
  return numTransactions + backtrack(0, payables)
};

function backtrack(idx, amountOwed) {

  // we skipp all values equaling 0
  while (amountOwed[idx] === 0) idx++;
  
  // return 0 if there are no values left to be examined
  if (idx >= amountOwed.length) return 0;
  
  // get the amount

  // since we don't need the value of idx anymore and only will be
  // examining values further in line
  const amount = amountOwed[idx++];
  
  // find if there is a recipient that we can balance out with
  const recipient = amountOwed.indexOf(-amount, idx);
  
  let min = Infinity;
  
  // if the recipient exists (this can also be written a recipient > 0 but this is good for explanation
  if (recipient > 0) {
    // store the value so that we can put it back while backtracking
    const val = amountOwed[recipient];
	// balance out the recipient
    amountOwed[recipient] = 0;
	
	// continue the backtracking sequence
    min = backtrack(idx, amountOwed);
	
	// replace the value (needed for valid backtracking algorithm)
    amountOwed[recipient] = val;
  } else {
  
    // if there is no easy recipient we need to give our money owed
	// to the person that has the opposite amount so we try each to get the minimum trasactions
    for (let i = idx; i < amountOwed.length; i++) {
      if (amountOwed[i] * amount < 0) {
        amountOwed[i] += amount;
        min = Math.min(min, backtrack(idx, amountOwed))
        amountOwed[i] -= amount;
      }
    }
  }
  
  // we add 1 to the minimum because we executed a transaction
  return min + 1;
}