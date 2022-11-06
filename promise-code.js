console.log("Hello, world!");

let p = null;
setInterval(()=>{
    p = createPromise();
    p.then(good, bad);
  }
  ,500);

function good(p){
  console.log('good result', p);
}

function bad(p){
  console.log('bad result', p);
}

function createPromise(){
  return new Promise(function(res, rej){
    setTimeout(()=>{
      if (Math.random()>.5)
       res('big')
      else
       rej('small');}
      ,1000);
    })
 };
  
