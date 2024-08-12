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

## Links

[GFG factory functions](https://www.geeksforgeeks.org/what-are-factory-functions-in-javascript/)
