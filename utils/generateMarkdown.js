

//This function returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license) {
    const licenseBadges = {
      'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      'Mozilla Public License 2.0': 'https://img.shields.io/badge/Mozilla%20Public%20License%202.0',
      'The Unlicense': 'https://img.shields.io/badge/The%20Unlicense',
      'Eclipse Public License 2.0': 'https://img.shields.io/badge/Eclipse%20Public%20License%202.0',
      'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    }

    if (licenseBadges [license]) {
    return `![license Badge](${licenseBadges[license]})`;
    } else {
    return ''; //this is to return an empty string if there is no badge URL.
    }
} else {
  return ''; //this is to return an empty string if there is no license provided
}}


// A function that returns the license link
function renderLicenseLink(license) {
  if (license) {
    const licenseLinks = {
      'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
      'Mozilla Public License 2.0': 'https://www.mozilla.org/en-US/MPL/2.0/',
      'The Unlicense': 'http://unlicense.org/',
      'Eclipse Public License 2.0': 'https://www.eclipse.org/legal/epl-2.0/',
      'MIT': 'https://opensource.org/licenses/MIT',
    }

    if (licenseLinks[license]) {
      return licenseLinks[license];
    } else {
      return ''; // this is to return an empty string if there is not a license link
    }
  
    } else {
      return ''; // this is to return an empty string if there is no license provided
  }
}



// A function that returns the license section of README
function renderLicenseSection(license) {
  if (license) {
    const licenseSections = {
      'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
      'Mozilla Public License 2.0': 'https://www.mozilla.org/en-US/MPL/2.0/',
      'The Unlicense': 'http://unlicense.org/',
      'Eclipse Public License 2.0': 'https://www.eclipse.org/legal/epl-2.0/',
      'MIT': 'https://opensource.org/licenses/MIT',
    }

    if (licenseSections[license]) {
      return licenseSections[license];
      } else {
        return '';
      }
    } else {
      return '';
    }
}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title: 
  ${data.title}

  ## Project Description:
  ${data.description}
  
  ## Installation Instructions:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contributors:
  ${data.contributing}

  ## Test Instructions:
  ${data.test}

  ## Licenses:
  ${data.license}

  ## Github Information: 
  ${data.ghusername}
  ${data.ghlink}
  ${data.email}
`;
}

module.exports = {generateMarkdown};
