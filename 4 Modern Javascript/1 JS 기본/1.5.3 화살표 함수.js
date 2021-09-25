let func = (arg1, arg2, ...argN) => expression //본문이 한 줄인 함수를 작성할 때 유용

let func = function(arg1, arg2, ...argN) {
  return expression;
};

//
parsedToDos.forEach((item) => console.log("this is the turn of", item));

function sayHello(item){
  console.log("this is the turn of", item)
}