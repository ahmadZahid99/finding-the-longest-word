function longestWord(sample) {
  //replace or remove every char expect letter
  sample = sample.replace(/[^a-zA-Z ]/g, '');
  const words = sample.split(' ');
  let longest = '';

  for (let i = 0; i < words.length; i++) {
    if (longest.length < words[i].length) {
      longest = words[i];
    } else if (longest.length == words[i].length) {
      longest =
        longest.match(/[aeiou]/g).lenght > words[i].match(/[aeiou]/g).length
          ? longest
          : words[i];
    }
  }
  return longest;
}
console.log(
  longestWord(
    'Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers'
  )
);
console.log(longestWord("Don't be trapped in someone else's dream."));

console.log(
  longestWord(
    'Like an echo in the forest The day will come back around As if nothing happened.'
  )
);
