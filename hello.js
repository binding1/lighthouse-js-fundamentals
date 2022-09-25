const sayHello = function(name){
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

const sayHelloToConsole = function(name){
   console.log("Hello, " + name);
}

sayHelloToConsole("John");

const sayHelloToConsole1 = function(name){
  return ("Hello, " + name);
}

sayHelloToConsole1("John");
console.log(sayHelloToConsole1("Jason"))

const returnSayHello = function(name){
  return "Hello, " + name;
}

const greeting = returnSayHello('John');
console.log(greeting);