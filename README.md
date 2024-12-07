# Candidate Search Application

The **Candidate Search Application** is a web-based tool designed to help employers streamline their hiring process by browsing GitHub profiles. Using a personal GitHub token, the application fetches candidate information and enables users to decide whether to save or skip candidates for further review. Saved candidates are stored persistently for easy access.

The application is live and deployed on **Render**. 

Check it out here: [Candidate Search Application](https://candidate-search-zxf7.onrender.com).

### Screenshot of Deployed Application  
![Deployed Application Screenshot](https://via.placeholder.com/800x450.png?text=Deployed+Application)

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---


## Features

- Displays candidate details such as:
  - Name
  - Username
  - Location
  - Avatar
  - Email
  - GitHub profile (html_url)
  - Company
- Allows users to:
  - Save a candidate using the "+" button.
  - Skip a candidate using the "-" button.
- Displays a list of saved candidates.
- Persistent storage for saved candidates.
- Informative messages when:
  - No more candidates are available for review.
  - No candidates have been saved.

---

## Setup

**1. Clone the Repository**  
   ```bash
   git clone <repository-url>
   cd candidate-search-app
```
**2. Install Dependencies
```
npm install
```
**3. Set Up Environment Variables

Create a .env file in the root directory and configure it as outlined in the Environment Variables section.

** 4.Start the Application
```
npm start
```
## Usage

1.Run the Application

--Open the application in your browser.

2.Review Candidates

--Use the "+" button to save a candidate to the list of potential hires.

--Use the "-" button to skip to the next candidate without saving.

3.View Saved Candidates
--Navigate to the Potential Candidates page to view all saved candidates.

4.Persistent Data
--Saved candidates will remain available even after the page reloads.

## Environment Variables
This application requires a GitHub token for accessing candidate information.

## 1.Generate a GitHub Token

--Log in to GitHub.

--Verify your email address, if it hasn't been verified yet.

--In the upper-right corner of any page on GitHub, click your profile photo, then click  Settings.

--In the left sidebar, click  Developer settings.

--In the left sidebar, under  Personal access tokens, click Tokens (classic).

--Select Generate new token, then click Generate new token (classic).

--In the "Note" field, give your token a descriptive name.

--To give your token an expiration, select Expiration, then choose a default option or click Custom to enter a date.

--Select the scopes you'd like to grant this token. To use your token to access repositories from the command line, select repo. A token with no assigned scopes can only access public information. -

--Click Generate token.

-Copy the token.

--Read more here- [(https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)]

## 2.Set Up .env File

-Create a .env file in the root directory and add the following:

```
REACT_APP_GITHUB_TOKEN=<your-github-token>
```

## Technologies Used

-Frontend: React, TypeScript, Vite

-API: GitHub REST API

-State Management: React Context API

-Environment Configuration: dotenv

## Contributing

-Fork the repository.

-Create a new branch for your feature or fix.

-Submit a pull request with a detailed explanation of your changes.

## License

-This project is licensed under the MIT License.---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
