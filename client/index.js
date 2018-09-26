 /*
 * Author : Dustin Shropshire
 * description : client side implementation. Will check with server about current version
 * (how it will do this is currently undecided, can we use packjson version?)
 * Using websockket we will check for the version mismatch and then have using communication
 * we will check for which files have been modified or what files we dont have and update issues
 */


//this works for now using node , however client browser we will need
// babel to be able to grab it like this , also consider potential security issues.
//however we are building this for our electron app which uses node so not an issue
var pjVersion = require("./package.json");
console.log(pjVersion.version);


// 1) connect to server

// 2) ask server for version

//3) if version mismatch decide what to do
//  a) should we update
//  b) etc

//4) should we send server our project structure or have the client sugggest what files it needs
//  a) for security it might be best to send the server the clients structure and let the server undecided

// how do we know if a file has been modified should we keep keep some sort of hash and just have the client
// send a hash and check it compared to ours


//so we may want to send the server hash's and have it check those how do we model this so it knows
//what is what?

//maybe send an object of all the files and the last modified date?

var fileSystem = require('fs');

fileSystem.stat("./package.json", (err,stats)=>{
  if (err) throw err;
  console.log(`stats: ${stats.mtime}`);

  //so we can check the string it self , this means though that even if some space changes
  // and not even the actual functionality then the server will try to update shouldent
  //be an issue if we arnt pushing up anything but build files 
  if(stats.mtime = "Wed Sep 26 2018 12:05:06 GMT-0600 (Mountain Daylight Time)") console.log("this works");
})
