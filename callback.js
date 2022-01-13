function setState(value) {
  this.state = value;
}

// 字面物件 parent
const parent = {
  state: '1',
  setState: null
}

// call ,apply, bind
// function
parent.setState = setState.bind(parent);

// setState(123141351);

// childA
const childA = {
  props: null,
  privateData: 'Child A Data',
}


// childB
const childB ={
  props: null,
  data: null,
}

childA.props = parent.setState;

console.log(parent.state); // 1
childA.props('Child A Data');
console.log(parent.state); // Child A Data

