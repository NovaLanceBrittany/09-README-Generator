const inquirer = require("inquirer");
const fs = require('fs');
const { generateMarkdown } = require("./utils/generateMarkdown");



//The Questions that will fill out the README
const askQuestions = (callback) => inquirer.prompt([
  {
    type: 'input',
    message: "What is the Title of your Project?",
    name: 'title',
  },

  {
    type: 'input',
    message: "What is your Project's Description?",
    name: 'description',
  },

  {
    type: 'input',
    message: "How do you Install your Project?",
    name: 'installation',
  },

  {
    type: 'input',
    message: "What will this Project be Used for?",
    name: 'usage',
  },

  {
    type: 'input',
    message: 'Who will be Contributing to your Project?',
    name: 'contributing',
  },

  {
    type: 'input',
    message: "What are your Test Instructions for your Project?",
    name: 'test',
  },

  {
    type: 'list',
    message: "What Licenses are needed for your Project?",
    name: 'license',
    choices: ['Apache License 2.0', 'Mozilla Public License 2.0', 'The Unlicense', 'Eclipse Public License 2.0', 'MIT License' ]
  },

  {
    type: 'input',
    message: 'What is your Github Username?',
    name: 'ghusername',
  },

  {
    type: 'input',
    message: 'Please enter in your GitHub Profile Link:',
    name: 'ghlink',
  },

  {
    type: 'input',
    message: 'What is the best email address to reach you about this Project?',
    name: 'email',
  },


]).then ( ({ title, description, installation, usage, contributing, test, license, ghusername, ghlink, email }) => {
  console.log("The Questions from index.js are working")

  const result = `
  Here are your answers, please review: 
  Project Title: ${title}
  Description: ${description}
  How to Install: ${installation}
  How is it Used: ${usage}
  Who is Contributing: ${contributing}
  The Test Instructions: ${test}
  Licenses Needed: ${license}
  Project Manager GitHub Username: ${ghusername}
  Project Manager Github Profile Link: ${ghlink}
  Project Manager Contact Email: ${email}`;
  callback(result)
})



module.exports = {
  askQuestions,
  writeREADME: writeREADME
}



// TODO: Create a function to write README file
function writeREADME(fileName, contents) {
  fs.writeFile(fileName, contents, (err) =>
     if ( err ) console.log("Something went wrong at the writeREADME Funcation", err)
  )
};



// TODO: Create a function to initialize app
function init() {
  console.log("The app is being initialized!")
}

// Function call to initialize app
init(
  askQuestions( (contents) => generateMarkdown('log.txt', contents) )
);



