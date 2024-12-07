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
**2.Install Dependencies
```
npm install
```
**3.Set Up Environment Variables

Create a .env file in the root directory and configure it as outlined in the Environment Variables section.

**4.Start the Application
```
npm start
```



---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
