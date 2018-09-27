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
// var pjVersion = require("./package.json");
// console.log(pjVersion.version);


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

// var fileSystem = require('fs');
//
// fileSystem.stat("./package.json", (err,stats)=>{
//   if (err) throw err;
//   console.log(`stats: ${stats.mtime}`);

  //so we can check the string it self , this means though that even if some space changes
  // and not even the actual functionality then the server will try to update shouldent
  //be an issue if we arnt pushing up anything but build files
//   if(stats.mtime = "Wed Sep 26 2018 12:05:06 GMT-0600 (Mountain Daylight Time)") console.log("this works");
// })



// so lets talk flow again :

// 1) user will call in our client module and give the top project root to check all files withen
// 2) also the user will provide the location to the server that checks for proper building
// 3) client module will then build an object of all file names and their last modifed date
// 4) it will send this to server
// 5) server will check this object agaisnt what it has
// 6) any mismatchs will be added to an object that describes what will be sent back
// 7) send that back to the clients
// 9) client will then take those files and overwrite exsisting ones
// ...

const fileSystem = require('fs').promises;
async function clientUpdate(projectPath, serverLocation){

    let dirStructure = await fileSystem.readdir(projectPath).then(function(value){

        return value;
        //value seems to an array of strings

    })

    //this works we get the top level structure so now we need to check
    //if what we get back is files and what is a directory if its a directory
    //then we need to get the files in those directorys and then merge it back into the array to return

    console.log(dirStructure)



}

clientUpdate("/Users/dshrops1/Desktop/auto-update");

//what to export?
