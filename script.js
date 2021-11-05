/**
 * 
 * Chapter two 
 * what is defer ?
 * Browser downloads JavaScript in parallel while HTML renders,
 * then defers execution of JavaScript until HTML rendering is complete
 *     <script src="script.js" defer></script>

 * what is async?
 * Browser downloads JavaScript in parallel while HTML renders. 
 * When JavaScript is fully loaded, rendering stops while JavaScript is executed
 *     <script src="script.js" async></script>
 * 
 * 
 * JavaScript modules allow us to break pieces out of  a JavaScript 
 * <script type="module" src="backpack.js"></script>
 * <script type="module" src="script.js"></script>
 * 
 * you can make the object as a constant, then export default object at the end of the script module
 * and in the other module import backpack from "./backpack.js"
 * 
 * const backpack 
 * export default backpack;
 * 
 * 
*/



//chapter 3: Objects: 

const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLenght:{
        left: 25,
        right: 25,
    },
    lidOpen: false,
    toggleLid: function(lidStatus){
        this.lidOpen = lidStatus;
    },
    newStrapLength: function(lengthLeft,lengthRight){
        this.strapLenght.left = lengthLeft;
        this.strapLenght.right = lengthRight;
    },

};

console.log("the backpack object:", backpack)

//this keyword refers to the current object "this object right here."

//Object as contatiners constants that we cannot assign any other variable to it.
// but sure we can assign values to its properties bc they are not constants 

//Object Properties:
//-------------------
//accessing an object.
//accessing properties in object. 
// dot notation ,  bracket notation 

// Object Methods:
//-----------------





































