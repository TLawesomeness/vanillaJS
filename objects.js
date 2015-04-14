// this is an object tutorial

var dog = {};
dog.name = 'fido';
dog.age = 3;

var cat = {name: 'fluffy', age: 5};
console.log(dog, cat);
cat.toys = ['fluff', 'scratch', 'mouse'];
console.log(cat);
cat.toys.push('small box');
console.log(cat);
cat.toys.splice(1, 1);
console.log(cat);

function Cat(name, age) {
  this.name = name;
  this.age = age;
}

var cat = new Cat('SassyPants', 5);

Cat.prototype.purr = function() {
  console.log(this.name + ' is purring and ' + this.name + ' is ' + this.age);
}

var cats = [];
for (var i = 1; i < 11; i++) {
  var cat = new Cat('cat' + i, i);
  cats.push(cat);
}

cats.forEach(function(c) {
  if (c.age > 5) {
    c.purr();
  }
})
