'use strict';

const user = {
  firstName: 'Test',
  lastName: 'Testovich',
  age:18,
  isMale:true,
  sayHello:function(){
    //Выводит в alert фамилию и имя пользователя.
    alert(`Hello!!! My name is  ${this.firstName} ${this.lastName}`)
  },
 isAdult: function(){
   // >= 18 - true, < 18 -false
   return this.age >= 18;
  
 },
}
user.sayHello();
user.isAdult();

const User = function(firstName, lastName, age, isMale){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
  this.sayHello = function(){
    alert(`My name is  ${this.firstName} ${this.lastName} 
    Me is ${age}`)
  };
  this.isAdult = function(){
    return this.age >= 18;
  };
}

const user1 = new User("John", "Doe", 19, true);
const user2 = new User("Elizabeth", "Smith", 17, false);

