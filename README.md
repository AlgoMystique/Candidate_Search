# Candidate Search Application

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

## Description

The **Candidate Search Application** is a web-based tool designed to help employers streamline their hiring process by browsing GitHub profiles. Using a personal GitHub token, the application fetches candidate information and enables users to decide whether to save or skip candidates for further review. Saved candidates are stored persistently for easy access.

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

Open the application in your browser.

2.Review Candidates

Use the "+" button to save a candidate to the list of potential hires.
Use the "-" button to skip to the next candidate without saving.

3.View Saved Candidates
Navigate to the Potential Candidates page to view all saved candidates.

4.Persistent Data
Saved candidates will remain available even after the page reloads.

##Environment Variables
This application requires a GitHub token for accessing candidate information.

** 1.Generate a GitHub Token

-Log in to GitHub.
-Navigate to Settings > Developer Settings > Personal Access Tokens > Tokens (Classic).
-Generate a new token with the following permissions:
-```read:user```
-Copy the token.

** 2.Set Up .env File
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

##License
-This project is licensed under the MIT License.---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
