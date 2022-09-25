// how to compare two JSON have same properties without order
var isEqual = require('lodash.isequal');
const object1 = {
    name: 'Person1',
    age: 5
  };
      
  const object2 = {
    age: 5,
    name: 'Person1'
  };
      
  let result = isEqual(object1, object2)
  console.log(result)