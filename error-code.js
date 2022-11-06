console.log("Hello, world!");

try{
  let x=0;
  console.log(x.prop.prop);
} catch(e)
{
  console.log('e.name', e.name);
  console.log('e.message', e.message);
}

try{
  throw new Error("Just an error")
} catch(e)
{
  console.log('e.name', e.name);
  console.log('e.message', e.message);
  // throw(e)
} finally {
  console.log('finally');
}


class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try{
  throw new ValidationError('My err');
} catch (e) {
  console.log(e.name);
  console.log(e.message);
}

