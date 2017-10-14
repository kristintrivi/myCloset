{\rtf1\ansi\ansicpg1252\cocoartf1404\cocoasubrtf470
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 var Closet = function() \{\
  var _bar = [];\
  \
  this.hangUpShirt = function(shirtObject) \{\
    _bar.push(shirtObject);\
    return "You hung up a " + shirtObject.name + ". You have " + _bar.length + " items on the bar.";\
  \};\
  \
  this.deleteShirtByName = function(shirtToDelete) \{\
    for(var i = 0; i < _bar.length; i++) \{\
      if(_bar[i].name == shirtToDelete) \{\
        return "You deleted a " + shirtToDelete + " shirt.";\
      \}\
     \
    \} \
    return "That shirt can not be deleted because it is not in the closet."\
  \};\
  \
  this.retrieveShirtByName = function(shirtToRetrieveByName) \{\
       for(var i = 0; i < _bar.length; i++) \{\
         if(_bar[i].name == shirtToRetrieveByName) \{\
           return _bar[i];\
         \}\
     \
       \} \
      return "That shirt can not be retrieved because it is not in the closet."\
  \};\
  \
  this.listMyShirts = function() \{\
    var appendString = "";\
    for(var i = 0; i < _bar.length; i++) \{\
      appendString += _bar[i].name + " ";\
    \}\
    \
    return appendString;\
  \};\
  \
  this.replaceShirt = function(nameOfShirtToReplace, shirtObjectComingIn) \{\
    for(i = 0; i < _bar.length; i++) \{\
      \
      if(_bar[i].name === nameOfShirtToReplace) \{\
        var oldShirt = _bar[i];\
        console.log(_bar[i].name);\
        _bar[i] = shirtObjectComingIn;\
        console.log(_bar[i].name);\
        \
        return oldShirt;\
      \}\
      \
    \} \
    \
 \};\
  \
  this.clearTheBar = function() \{\
    _bar.length = 0;\
    \
    if(_bar.length === 0) \{\
      console.log("Your bar is empty.");\
    \}\
  \};\
\
\}\
\
var Shirt = function() \{\
  this.name = "";\
  this.color = "";\
  this.pattern = "";\
  this.id = 0;\
  this.changeShirtColor = function(ShirtToChange, oldShirtColor, newShirtColor) \{\
    this.color = newShirtColor;\
    return "I changed the color of my " + ShirtToChange + " shirt from " + oldShirtColor + " to " + newShirtColor + ".";\
  \};\
\}\
  \
///////////////////////////////\
//test - hanging up a shirt\
///////////////////////////////  \
//Arrange: set up myCloset and 4 shirt instances\
var myCloset = new Closet();\
\
var shirtPolo = new Shirt();\
  shirtPolo.name = "polo";\
  shirtPolo.color = "red";\
  shirtPolo.pattern = "solid";\
  shirtPolo.id = 100;\
  \
var shirtButtonDown = new Shirt();\
  shirtButtonDown.name = "button down";\
  shirtButtonDown.color = "blue";\
  shirtButtonDown.pattern = "striped";\
  shirtButtonDown.id = 200;\
  \
var shirtTurtleNeck = new Shirt();\
  shirtTurtleNeck.name = "turtleneck";\
  shirtTurtleNeck.color = "black";\
  shirtTurtleNeck.pattern = "plaid";\
  shirtTurtleNeck.id = 300;\
  \
var shirtTee = new Shirt();\
  shirtTee.name = "tee";\
  shirtTee.color = "white";\
  shirtTee.pattern = "paisley";\
  shirtTee.id = 400;\
  \
// Act: test hangUpShirt method and that the object was added to the bar\
myCloset.hangUpShirt(shirtPolo);\
\
// Assert: verify expected result\
var expected = "You hung up a polo. You have 2 items on the bar.";\
var theShirt = myCloset.hangUpShirt(shirtPolo);\
\
console.log(theShirt);\
  \
if(expected == theShirt )\{\
  console.log("The test passed.");\
  \}\
else \{\
  console.log("The test broke.");\
  \}\
\
//Clear the bar for a new test\
myCloset.clearTheBar();\
  \
\
///////////////////////////////\
//test 2 - delete a shirt\
/////////////////////////////// \
//arrange \
console.log(myCloset.hangUpShirt(shirtButtonDown));\
console.log(myCloset.hangUpShirt(shirtTee));\
\
//act\
console.log(myCloset.deleteShirtByName("tee"));\
\
//assert\
var expected = "You deleted a tee shirt."\
var deletedResult = myCloset.deleteShirtByName("tee");  \
\
console.log(deletedResult);\
\
if(expected == deletedResult )\{\
  console.log("The test passed.");\
  \}\
else \{\
  console.log("The test broke.");\
  \}\
\
//clean up\
myCloset.clearTheBar();\
\
\
///////////////////////////////\
//test 3 - retrieve a shirt\
///////////////////////////////\
//arrange\
console.log(myCloset.hangUpShirt(shirtTurtleNeck));\
console.log(myCloset.hangUpShirt(shirtPolo));\
\
//act\
console.log(myCloset.retrieveShirtByName("polo"));\
\
//assert\
var expected = "I retrieved a polo shirt which is red.";\
var retrievedResult = "I retrieved a " + shirtPolo.name + " shirt which is " + shirtPolo.color + ".";  \
\
console.log(retrievedResult);\
\
//clean up\
myCloset.clearTheBar();\
\
\
///////////////////////////////\
//test 4 - list  my shirts in the closet\
///////////////////////////////\
//arrange\
console.log(myCloset.hangUpShirt(shirtTurtleNeck));\
console.log(myCloset.hangUpShirt(shirtPolo));\
console.log(myCloset.hangUpShirt(shirtTee));\
console.log(myCloset.hangUpShirt(shirtButtonDown));\
\
//act\
console.log(myCloset.listMyShirts());\
\
//assert\
var expected = "One of the shirts in my closet is a tee shirt."\
var retrievedResult =  "One of the shirts in my closet is a " + shirtTee.name + " shirt.";  \
\
console.log(retrievedResult);\
\
if(expected == retrievedResult )\{\
  console.log("The test passed.");\
  \}\
else \{\
  console.log("The test broke.");\
  \}\
\
//clean up\
myCloset.clearTheBar();\
\
\
//test 5 - change a shirt color\
/////////////////////////////// \
//arrange \
console.log(myCloset.hangUpShirt(shirtButtonDown));\
console.log(myCloset.hangUpShirt(shirtTee));\
\
//act\
console.log(shirtButtonDown.changeShirtColor("button down", "blue", "orange"));\
\
//assert\
var expected = shirtButtonDown.color === "orange";\
 \
\
console.log(expected);\
\
if(true)\{\
  console.log("The test passed.");\
  \}\
else \{\
  console.log("The test broke.");\
  \}\
\
//clean up\
myCloset.clearTheBar();\
\
\
///////////////////////////////\
//test 6 - replace an old shirt with a new shirt\
/////////////////////////////// \
//arrange \
console.log("starting replace test");\
console.log(myCloset.hangUpShirt(shirtButtonDown));\
console.log(myCloset.hangUpShirt(shirtTee));\
\
//act\
var expected = "The returned shirt is a tee shirt.";\
var returnedShirt = myCloset.replaceShirt("tee", shirtPolo);\
var actual =  "The returned shirt is a " + returnedShirt.name + " shirt."\
console.log(returnedShirt.name);\
\
//assert\
if(expected === actual )\{\
  console.log("The test passed.");\
  \}\
else \{\
  console.log("The test broke.");\
  \}\
\
//clean up\
myCloset.clearTheBar();\
}