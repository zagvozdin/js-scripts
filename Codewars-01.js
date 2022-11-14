console.log("Hello, world!");

function duplicateEncode(word){
  const res = []
  word = word.toUpperCase();
  for(const i in word) res[i] = '(';
  let l = null;
  for(const i in word) {
    l = word[i];
    if (word.indexOf(l) != word.lastIndexOf(l)) duplicate(l);
  }

  function duplicate(l){
    for(let i in word) if (word[i]==l) res[i] = ')'
  }
  
  console.log(res.join(''))

}

duplicateEncode('hello, world!');