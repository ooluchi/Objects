/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
// Question 1 InstagramPost() constructor function
function InstagramPost(authorHandle, content, imageLink, views, likes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
  }

const post1 = new InstagramPost("@ooluchi", "It was an interactive session at Stutern!", "https://image.com/image.jpg", 10000, 500);
const post2 = new InstagramPost("@ooluchi", "The mentors at Stutern are the best!", "https://image.com/image2.jpg", 20000, 1000);

// Question 2 Instagram Post
console.log(post1)
console.log(post2)

//Question 3 a
function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location,
    };
  }
  
  const musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");
  console.log(musa)

  //Question 3b
  function createJambScores(ENG, GOVT, LIT, CRK) {
    return {
        ENG: ENG,
        GOVT: GOVT,
        LIT: LIT,
        CRK: CRK
    };
  }
  const MusaJambScores = createJambScores(70, 85, 82, 94);
  console.log(MusaJambScores)

//  Question 4 Different ways to clone an object
// There are different methods used to clone an object. These method include:
// a. Object.assign method()
// b. Using the Spread Synthax i.e ...
//c. Using JSON.parse()

//object.assign()
const car1 = {
    model: 'toyota',
    year: 2019,
    color: 'black',
}

const car2 = Object.assign({}, car1)
car2.model = 'Honda';

console.log(car1)
console.log(car2)

// spread synthax ...
const car3 = {...car1};
console.log({car3})

car3.model = 'Lexus';
console.log({car1})
console.log({car3})

// Using JSON.parse(JSON.stringify())
const car4 = JSON.parse(JSON.stringify(car1));
car4.model = 'Jeep';
console.log({car4})

// Question 5
