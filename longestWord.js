let sample =
  'Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers';

//replace or remove every char expect letter
sample = sample.replace(/[^a-zA-Z ]/g, '');

const word = sample.split(' ');

let longest = '';

for (let i = 0; i < word.length; i++) {
  if (longest.length < word[i].length) {
    longest = word[i];
  } else if (longest.length == word[i].length) {
    longest =
      longest.match(/[aeiou]/g).lenght > word[i].match(/[aeiou]/g).length
        ? longest
        : word[i];
  }
}

console.log(longest);
