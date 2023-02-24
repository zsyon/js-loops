const person = [{
  name: "Adem",
  age: 25,
  languages: ["JavaScript", "CSS"],
},
{
  name: "Oğuz",
  age: 33,
  languages: ["Java", "HTML"],
  }
];

let age = person.filter(user => user.age > 30);
console.log(age)

let language = person.filter((user,index) => user.languages[index] == "JavaScript");
console.log(language)

