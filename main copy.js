// console.log("Script attached");
// /*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// // Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
 var node1 = document.getElementById('node1').innerText
 = `I used the getElementById("node1") method to access this`
// // Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

var node2 = document.getElementsByClassName('node2')[0]
node2.innerText = `I used the getElementByClassName("node2") method to access this`

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

var tag3 = document.getElementsByTagName('h3')
for (i=0; i<tag3.length; i++){
    tag3[i].innerText = "change!"
}



/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"


var p = document.createElement("p");
p.textContent = "P tag created";

var parent = document.getElementById("parent");

parent.appendChild(p)

const small = document.createElement('h1');
small.innerText = "this goes first"
parent.insertBefore(small, p)

console.log(small)

var createP = document.createElement('p')
createP.innerText = "try new"

parent.insertBefore(createP, p)
// var pPlace = document.getElementById('createP')

// var createA = document.createElement("a");
// createA.textContent = ' I am a <p> tag. should be first line';
// createA.id = 'createA';
// var aPlace = document.getElementById('createA')

// parent.insertBefore(pPlace, aPlace)



// TODO: Append the created node to the parent node using the element.appendChild() method

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

// TODO: Remove the "New Child Node"

var parentExcercise3 = document.getElementById('exercise-container3')
var childNode1 = document.getElementById('N1');
var childNode2 = document.createElement('p')
childNode2.textContent = 'reaplce 됨'


parentExcercise3.replaceChild(childNode2, childNode1)


/*----------- Exercise #4: ANIMATIONS ----------- */
// TODO: Write your JavaScript here to make the red box go from left to right
// let interval = setInterval(move, 10);

    const box = document.getElementById('box');
    var x = 0;
    var y = 0;
    let boxMover = setInterval(move, 100)

    box.style.backgroundColor = 'yellow'

    function move(){
        if (x < 150){
        x = x + 5
        box.style.left = x + 'px'
        }else if (x >= 150){
            if( y < 150){
            y =  y + 5;
            box.style.top = y + 'px'
            }else if(y >= 150){
                clearInterval(boxMover)
            }
        }

    }


// BONUS - Make the red box go all the way around the perimeter of the green box

/*----------- Exercise #5: DOM EVENTS --------------*/

// var parent5 = document.getElementsByClassName('exercise-container exercise5');
var parent5 = document.getElementById('exercise5');
var button = document.getElementById('btn');
var divCreation = document.createElement('div');
divCreation.textContent = 'Clicking the button triggers onclick event, which calls the JS function show()... which alerts the user'
divCreation.id = 'divCreation'
var createdDiv = document.getElementById('divCreation')

console.log(createdDiv);
console.log(divCreation);


function show(){
    parent5.appendChild(divCreation)

    parent5.insertBefore(divCreation, button)
}
button.addEventListener('click',show)


// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
