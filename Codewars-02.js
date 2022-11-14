function duplicateCount(text){
  var res = 0
  const store = []
  text = text.toUpperCase();

  for(const i in text) {
    l = text[i];
    if (text.indexOf(l) < i && text.indexOf(l)!=-1) {
      if (store.includes(l)) continue;
      store.push(l);
      res++;}
  }

  return res;
}

var text = '112222234567899'
console.log(text)
console.log(duplicateCount(text));