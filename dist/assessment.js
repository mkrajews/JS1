// Create a var called left that says right.
var left = "right";
// Use todayIWill to create a new var called todayIWillCode that says "Today I will code!!!"
            var todayIWill = 'Today I will';
            var todayIWillCode = todayIWill + " code!!!";

// Make an object called Urban// Urban has height 7ft (string)
// Urban has age 83 (number)
// Urban has shirt with color turquoise and size M (object)
// Urban likes Incredible Granite Shoes, Fantastic Frozen Shirt and Handmade Plastic Sausages (array of strings)
// Urban is not clean(boolean)
var Urban = {
  height: "7ft",
  age: 83,
  shirt: {
    color: "turquoise",
    size: "M"
  },
  likes: ["Incredible Granite Shoes", "Fantastic Frozen Shirt", "Handmade Plastic Sausages"],
  clean: Boolean(false)
};


// Change myShirt type to polyester and color to tan using dot notation.
  var myShirt = {
    type: 'mediocre',
		color: 'turquoise',

  };
  myShirt.type = "polyester";
  myShirt.color = "tan";

// Change myOtherShirt type to cotton and color to tan using square bracket notation
  var myOtherShirt = {
  	type: 'heavy',
		color: 'lavender',

  };
myOtherShirt["type"] = "cotton";
myOtherShirt["color"] = "tan";

// Create an object that tracks a count of animals in a zoo. Call it 'zoo'
    // The key should be the animal name(string) and the value should be how many there are.
    // Our zoo has 14 capybaras, 77 sloths and 53 mules
var zoo = {
  capybaras: 14,
  sloths: 77,
  mules: 53
};


// Loop through this object and change all properties that start with the letter t to have a value of 't'

    var kinesthesia = {
      trampoline: "boudoirs",
      racketiest: "ammelide",
      truthtelling: "canalising",
      taxor: "unduplicated",
      eavesdropping: "nonromantic"
    };

    function loop() {
      for(var key in kinesthesia) {
        if(key[0] === "t") {
          kinesthesia[key] = "t";
        }
      }
    }
    loop(kinesthesia);


// Create an array of strings containing colors of the rainbow (roygbiv) called rainbowColors.
// There are 7.
var rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];


//  Using this array do the following
var heroes = ['Marauders', 'Hellfire Club', 'Cyborg'];
// add 'Kim' to the end
heroes.push("Kim");
// remove 'Marauders' and store him in a var called firstHero
var firstHero = heroes.shift();
// add 'Spellbinder' to the start of the array
heroes.unshift("Spellbinder");
// remove 'Cyborg' from the array and store him in a var called secondHero

// leave 'Hellfire Club' in the array but put a copy of him on a var called thirdHero
var thirdHero = heroes[1];
// Write a function called addItem, that takes in an array, and an item, and adds the item to
// the array.
function addItem(arr, item) {
  arr.push(item);
  return arr;
}

// Write function called nonupleTheFun that takes 1 parameter: A number or a string. It nonuples (x9) numbers, and repeats strings. Example: 4 -> 36, 'Awesome' -> AwesomeAwesomeAwesomeAwesomeAwesomeAwesomeAwesomeAwesomeAwesome'
function nonupleTheFun(p) {
  if(isNaN(p) === true) {
    return p + p + p + p + p + p + p + p + p;
  } else {
    parseFloat(p);
    return p * 9;
  }
}


// #14 Create a function called spiderTest that takes in an object that is an actor, it looks to see if the actor's name is Andrew Garfield and changes the actor object to have a property called spiderRating with a value of 10.  If their name is Tobey Maguire set spiderRating to 0.  otherwise set spiderRating to 'not a spiderman'.

function spiderTest(actor) {
  if(actor.name === "Andrew Garfield") {
    actor.spiderRating = 10;
  } else if(actor.name === "Tobey Maguire") {
    actor.spiderRating = 0;
  } else {
    actor.spiderRating = "not a spiderman";
  }
}


// #15 Create a function called whatIsItOutside that takes in a temperature (number), a humidity(number), and a cloudiness(number), in that order. Using the following to return the correct values
/*
    temperature over 85 and humidity over 45 - return "I'm all sweat"
    temperature under 40 and cloudiness over 60 - return "I have icicles"
    temperature over 85 and humidity under 45 and cloudiness under 20 - return "I'm literally in the desert"
    temperature over 90 or humidity over 55 or cloudiness over 65 - return "Hmm, probably not"
    Otherwise - return "I love outside"
*/
function whatIsItOutside(temp, hum, cld) {
  if(temp > 85 && hum > 45){
    return "I'm all sweat";
  }
  if(temp < 40 && cld > 60){
    return "I have icicles";
  }
  if(temp > 85 && hum < 45 && cld < 20){
    return "I'm literally in the desert";
  }
  if(temp > 90 || hum > 55 || cld > 65){
    return "Hmm, probably not";
  }else{
    return "I love outside";
  }
}


    // #16 Create a function called callerBack that takes in a function (holla) and a string parameter(back) and invokes it(holla) with the string(back) + ' back'.
// IE - If I call you with 'Give it' you should invoke holla with 'Give it back'
function callerBack(holla, back) {
  return holla(back + " back");
}


    // Write a function called clockIn that takes in an employee and department name
    // and returns an object with a name, department, and timestamp which is
    // the current time as a Date object
    function clockIn(empl, dept) {
      obj = {
        name: empl,
        department: dept,
        timestamp: new Date()
      };
      return obj;
    }
