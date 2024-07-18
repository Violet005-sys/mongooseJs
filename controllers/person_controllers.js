const Person = require('../model/person');
const personsData = [{
    "name": "Angela O'Boyle",
    "age": 36,
    "favoriteFoods": [
      "fries",
      "tortilla chips",
      "jam",
      "oats"
    ]
  }, {
    "name": "Earle Benoix",
    "age": 47,
    "favoriteFoods": [
      "jam",
      "oats"
    ]
  }, {
    "name": "Maryrose Pudney",
    "age": 34,
    "favoriteFoods": [
      "grilled cheese",
      "burrito",
      "fries"
    ]
  }, {
    "name": "Carma Bilbrooke",
    "age": 36,
    "favoriteFoods": [
      "oats"
    ]
  }, {
    "name": "Ferdinand Choat",
    "age": 27,
    "favoriteFoods": [
      "burrito",
      "fries",
      "grilled cheese",
      "oats"
    ]
  }, {
    "name": "Chiarra Fortnum",
    "age": 34,
    "favoriteFoods": [
      "tortilla chips",
      "kale",
      "jam",
      "burrito"
    ]
  }, {
    "name": "Harp Gainor",
    "age": 16,
    "favoriteFoods": [
      "fries",
      "tortilla chips",
      "oats"
    ]
  }, {
    "name": "Netti Burgiss",
    "age": 5,
    "favoriteFoods": [
      "tortilla chips",
      "kale",
      "burrito"
    ]
  }, {
    "name": "Doloritas McRinn",
    "age": 49,
    "favoriteFoods": [
      "oats"
    ]
  }, {
    "name": "Jessi Carlesi",
    "age": 108,
    "favoriteFoods": [
      "grilled cheese",
      "tortilla chips",
      "jam"
    ]
  }, {
    "name": "Lise Braikenridge",
    "age": 67,
    "favoriteFoods": [
      "oats"
    ]
  }, {
    "name": "Rudolf MacCaffrey",
    "age": 64,
    "favoriteFoods": [
      "tortilla chips",
      "oats",
      "kale"
    ]
  }, {
    "name": "Maighdiln Laundon",
    "age": 19,
    "favoriteFoods": [
      "burrito",
      "kale",
      "oats",
      "jam",
      "tortilla chips"
    ]
  }, {
    "name": "Sarine Bengtson",
    "age": 12,
    "favoriteFoods": [
      "tortilla chips",
      "burrito",
      "oats",
      "fries",
      "kale"
    ]
  }, {
    "name": "Terrijo Waycot",
    "age": 69,
    "favoriteFoods": [
      "oats",
      "fries"
    ]
  }, {
    "name": "Devondra Walter",
    "age": 13,
    "favoriteFoods": [
      "burrito",
      "fries",
      "jam",
      "kale"
    ]
  }, {
    "name": "Lucita Lorroway",
    "age": 112,
    "favoriteFoods": [
      "grilled cheese",
      "kale",
      "oats",
      "fries",
      "burrito"
    ]
  }, {
    "name": "Lynett Treneman",
    "age": 80,
    "favoriteFoods": [
      "grilled cheese",
      "burrito",
      "jam"
    ]
  }, {
    "name": "Alwin Ostrich",
    "age": 113,
    "favoriteFoods": [
      "oats",
      "fries",
      "tortilla chips",
      "kale",
      "burrito"
    ]
  }, {
    "name": "Kym Antoniutti",
    "age": 25,
    "favoriteFoods": [
      "fries",
      "grilled cheese"
    ]
  }];
  
const id = '669967d6ce9c1940149b6724';
 

const createPerson = async() => {

    const person = {
        name: 'John Doe',
        age: 30,
        favoriteFoods: ['pizza', 'burrito']
    }

    const newPerson = await Person.create( person );

    await newPerson.save();
    console.log('New person created:', newPerson);
   
}

const createPeople = async() => {

    const newPeople = await Person.create(people);
    
    console.log('New people created:', newPeople);
}
 const findSomeone = async() => {
    const person = await Person.find({ name: 'John' });

    console.log(`Found: ${person}`);
 }

 const findOnePerson = async() => {
   const person = await Person.findOne({ favoriteFoods: 'kale'});
   console.log(`Found one: ${person}`);

 }

 const findById = async() => {
    const person = await Person.findById(id);

    console.log(`Found by ID: ${person}`);
 }

 const finByIdAndUpdate = async() => {
    const person = await Person.findByIdAndUpdate(
        id,
        { $push : { favoriteFoods: 'hamburger'}},
        { new: true }
    )

    await person.save();
    console.log(`Updated person: ${person}`);
 }

 const findOneAndUpdate = async() => {
    const personName = 'Sarah Wilson';
    const person = await Person.findOneAndUpdate(
        { name: personName},
        { $set : {age : 20}},
        {new : true}
    )

    await person.save();
    console.log(`Updated personOne: ${person}`);
 };

 const deleteOne = async() => {
    const id = 9 ;
    const person = await Person.findByIdAndDelete(id);

    console.log(`Deleted person: ${person}`);
 };

 const deleteMany = async() => {
    const people = await Person.deleteMany({ name: `Mary`});
    console.log(`Deleted people: ${people.deletedCount}`);
 }


module.exports = { createPerson, createPeople, findSomeone, findOnePerson, findById, finByIdAndUpdate, findOneAndUpdate, deleteOne, deleteMany };