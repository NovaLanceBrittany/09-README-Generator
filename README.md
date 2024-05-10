# 09 Node.js Challenge: Professional README Generator

## The Challenge: 

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

The application will be invoked by using the following command:

```bash
node index.js
```



## Technology Stacks:
- Day.js Library


## npm Packages:
- inquirer


## Project Conduction:
As a developer, I want a README generator to quickly create a professional README for a new project. 


## Acceptance Criteria:

The Application should perform the following:

- The command-line application accepts user input when they are prompted for information about my application repository that produces a high-quality, professional README.md that is  generated with the following Sections:
	- Title of the project
	- Description
	- Table of Contents
	- Installation
	- Usage
	- License
	- Contributing
	- Test Instructions
	- Questions



- The user enters the project title then it is displayed as the title of the README.

- The user enters a description, installation instructions, usage information, contribution guidelines, and test instructions - the information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.

- The user chooses a license for my application from a list of options, then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

- The user enters their GitHub username then it is added to the section of the README entitled Questions, with a link to their GitHub profile.

- The user enters their email address then it is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.

The user clicks on the links in the Table of Contents, then they are taken to the corresponding section of the README.


## Mock-Up:
The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Woodbury.](./assets/img/start-page.png)

![This displays the results](./assets/img/search-results-png.png)


## The Deployment:

[The Repo:](https://github.com/NovaLanceBrittany/HW-09-README-Generator)

[The Deployment:](pages-link)


==============================================











### Walkthrough Video: 27%

* A walkthrough video that demonstrates the functionality of the README generator must be submitted, and a link to the video should be included in your README file.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

	* Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).



* Repository contains a high-quality README with description and a link to walkthrough video.


## Review

You are required to submit the following for review:

* A walkthrough video demonstrating the functionality of the application.

* A sample README.md file for a project repository generated using your application



## The Deployment:

[The Repo:](https://github.com/NovaLanceBrittany/HW-09-README-Generator)

[The Deployment:](pages-link)


## Getting Started


* Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

* Refer to the [Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

* Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.
