# Factory functions

issue: [#37](https://github.com/ConnecMent/bank/issues/37)

## What are factory functions in JavaScript ?

In JavaScript, a factory function is a function that returns an object. It is a way of creating and returning objects in a more controlled and customizable manner. Factory functions are a form of design pattern that enables the creation of objects with specific properties and behaviors.

### Why it is useful?

If we have complex logic, and we have to create multiple objects again and again that have the same logic, we can write the logic once in a function and use that function as a factory to create our objects. It’s the same as a real-world factory producing products.

Example 1: We have a factory function that will produce new robots with a single logic. Using this we can produce as many objects/robots as we want.

### Example

We have a factory function that will produce new robots with a single logic. Using this we can produce as many objects/robots as we want.

```js
// Function creating new objects 
// without use of 'new' keyword
function createRobot(name) {
 return {
  name: name,
  talk: function () {
   console.log('My name is '
    + name + ', the robot.');
  }
 };
}

//Create a robot with name Chitti
const robo1 = createRobot('Chitti');
robo1.talk();
// output => My name is Chitti, the robot.

// Create a robot with name Chitti 2.O Upgraded
const robo2 = createRobot('Chitti 2.O Upgraded');
robo2.talk();
// output => My name is Chitti 2.O Upgraded, the robot. 
```

## Closure

 A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

## Factory Pattern

With the factory pattern we can use factory functions in order to create new objects. A function is a factory function when it returns a new object without the use of the new keyword!

Say that we need many users for our application. We can create new users with a `firstName`, `lastName`, and `email` property. The factory function adds a `fullName` property to the newly created object as well, which returns the `firstName` and the `lastName`.

```js
const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});
```

## Links

[GFG factory functions](https://www.geeksforgeeks.org/what-are-factory-functions-in-javascript/)
⁕
[MDN Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
⁕
[Factory Pattern](https://www.patterns.dev/vanilla/factory-pattern)
