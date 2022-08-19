function hello (){
    return "hello"
}
function receivesAFunction(hello){
hello()
}

function fn (name){
   console.log(name)
}
function returnsANamedFunction(){
   return fn
}

function returnsAnAnonymousFunction(){
  return function(){
    return fn
  }
};  var fn = function(name){
    return name
    } 