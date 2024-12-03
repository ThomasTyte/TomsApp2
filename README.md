# Thomas Tyte's Game Rating App

## Overview

Welcome to my Game Rating App! This project allows users to easily rate their favorite games, provide feedback through a contact form, and manage a to-do list. The app is designed with user experience in mind, enabling quick navigation between features.

## Features

- **Game Rating:** Users can rate games from a provided list, helping them remember their favorites and assist others with informed opinions.
- **Contact Form:** Users can submit their contact information and comments to provide feedback or ask questions to the app's developers.
- **To-Do List Management:** Users can keep track of tasks or games they want to try, ensuring they never forget what’s next on their list.

## How to Use

1. **Navigating the App:** Use the navigation bar to quickly switch between the contact form and the to-do list.
2. **Rating Games:** Browse the list of games displayed in the app. Click on the rating buttons next to each game to submit your rating.
3. **Contact Submission:** Access the contact form by navigating via the navbar. Fill out the form with your first name, last name, email, and any comments or questions before submitting.

## Technologies Used

- **HTML:** For structuring the web application.
- **CSS:** For styling the application and ensuring it is visually appealing and user-friendly.
- **JavaScript:** For building interactive features.
- **React:** For creating reusable components and managing the application’s state.
- **DOM Manipulation:** For dynamically updating the UI based on user interactions.

## Future Improvements

1. **Enhanced API Integration:** Implement a better API from the Steam website for more comprehensive game data and real-time updates.
2. **Advanced User Interface:** Develop a more intuitive user interface that enhances the rating process, including visual feedback and improved ratings management.
3. **Bot Prevention Security System:** Introduce a security system to prevent bots from submitting ratings to ensure that all ratings come from genuine users.
4. **Game Updates Feature:** Add a section within the app to provide updates on games being rated, such as new releases, patches, and expansion content, keeping users informed about their favorite titles.

Thank you for checking out my project! Your feedback and suggestions are always welcome.

User Stories

User Story 1: As a user, I want to quickly navigate between the contact form and the to-do list so that I can easily access the feature I want to use without fussing around with menus.

User Story 2: As a user, I want to be able to rate games from a provided list so that I can keep track of my favorite games and help others by sharing my opinion.

User Story 3: As a user, I want to submit my contact information and comments through a form so that I can provide feedback or ask questions to the app's developers.

Wire Frame:

![Screenshot 2024-12-02 191438](https://github.com/user-attachments/assets/4e150628-9dce-4deb-a55e-a300a131efb1)
![Screenshot 2024-12-02 191453](https://github.com/user-attachments/assets/578f39bb-b06a-4bda-91ca-2b32e8810ed3)
![tomsapp mobile view](https://github.com/user-attachments/assets/fe4c191c-8bb5-49a8-b126-1d376933b4ce)

App State Tree
├── showContact (boolean)
└── TodoList State
├── ratedGames (array)
├── unratedGames (array)
├── currentGames (array)
├── games (array)
├── search (string)
├── ratings (array of numbers)
└── view (string: 'rated' or 'unrated')

Contact Form State
└── formData (object)
├── firstName (string)
├── lastName (string)
├── email (string)
└── comments (string)

List of Container and Presentational Components
Container Components:

App (Manages the visibility of other components)
TodoList (Manages the game rating functionality and state)
Contact (Manages the contact form functionality and state)
Presentational Components:

Navbar (Displays navigation options)
GameCard (Displays individual game details and rating options)
ContactForm (Renders form fields for user input)
RatingButton (For individual ratings on games if separated)
This structure will enable clear separation of concerns, where containers handle the logic and state, and presentational components focus on rendering UI elements.

