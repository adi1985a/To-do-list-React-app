# ✅📋 React To-Do Master: Task Management App 🇵🇱
_A responsive web application for managing tasks (add, edit, complete, delete) built with React Hooks and leveraging localStorage for persistence, featuring a Polish user interface._

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-Hooks-61DAFB.svg?logo=react)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Node.js](https://img.shields.io/badge/Node.js-v14%2B-339933.svg?logo=node.js)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-CB3837.svg?logo=npm)](https://www.npmjs.com/)

## 📋 Table of Contents
1.  [Overview](#-overview)
2.  [Key Features](#-key-features)
3.  [Screenshots (Conceptual)](#-screenshots-conceptual)
4.  [Technical Stack & Requirements](#-technical-stack--requirements)
5.  [Local Development Setup](#️-local-development-setup)
6.  [Application Usage](#️-application-usage)
7.  [File Structure (Typical Create React App)](#-file-structure-typical-create-react-app)
8.  [Important Notes & Considerations](#-important-notes--considerations)
9.  [Contributing](#-contributing)
10. [License](#-license)
11. [Contact](#-contact)

## 📄 Overview

**React To-Do Master** is a client-side web application developed by Adrian Lesniak for managing daily tasks. Built with **React** and utilizing core **React Hooks** (`useState` for state management, `useEffect` for side effects like localStorage synchronization), it allows users to seamlessly add new tasks, edit existing ones, mark tasks as completed (visually indicated by a strikethrough), and delete tasks. A key feature is its use of the browser's **localStorage** to persist tasks, ensuring that the to-do list remains available across browser sessions. The application features a simple, clean user interface styled with custom CSS (`App.css`) and presents its UI elements in Polish.

<br><br>
<p align="center">
  <img src="screenshots/1.gif" width="85%">
</p>

## ✨ Key Features

*   📝 **Full Task CRUD Operations**:
    *   **Add Tasks**: Input new tasks via a text field; non-empty validation applied.
    *   **Edit Tasks**: Modify the text of existing tasks using a `prompt()` dialog.
    *   **Mark as Completed**: Toggle task completion status, visually represented by a strikethrough (`<s>` tag).
    *   **Delete Tasks**: Remove tasks from the list.
*   💾 **LocalStorage Persistence**:
    *   Automatically saves the current list of tasks to the browser's localStorage.
    *   Tasks are loaded from localStorage when the application starts or the page is reloaded, ensuring data persistence across sessions.
*   ⚛️ **React Hooks for State Management**:
    *   `useState`: Manages the state of the tasks list and the current input field value.
    *   `useEffect`: Synchronizes the tasks state with localStorage whenever the tasks list changes and on initial load.
*   🎨 **Simple & Interactive User Interface**:
    *   A dedicated input field for adding new tasks.
    *   Each task in the list is displayed with action buttons:
        *   "Oznacz jako wykonane" (Mark as done)
        *   "Edytuj" (Edit)
        *   "Usuń" (Delete)
*   💅 **Custom Styling**:
    *   Styled with custom CSS rules defined in `src/App.css` to provide a clean layout and visual appeal.
*   🇵🇱 **Polish Language Interface**: All user-facing buttons and prompts are in Polish (e.g., "Dodaj", "Edytuj", "Usuń").

## 🖼️ Screenshots (Conceptual)

_Screenshots of: the main application interface with the input field and task list, a task being edited, a task marked as completed (strikethrough), and how the list looks after a page reload (demonstrating localStorage persistence)._

<p align="center">
  <img src="screenshots\1.jpg" width="300"/>
  <img src="screenshots\2.jpg" width="300"/>
  <img src="screenshots\3.jpg" width="300"/>
  <img src="screenshots\4.jpg" width="300"/>
  <img src="screenshots\5.jpg" width="300"/>
  <img src="screenshots\6.jpg" width="300"/>
  <img src="screenshots\7.jpg" width="300"/>
  <img src="screenshots\8.jpg" width="300"/>
  <img src="screenshots\9.jpg" width="300"/>
  <img src="screenshots\10jpg" width="300"/>
</p>

## 🛠️ Technical Stack & Requirements

### Core Technologies:
*   **Frontend Library**: React (v17+ recommended, utilizing Hooks)
*   **Language**: JavaScript (ES6+)
*   **Styling**: CSS3 (`src/App.css`)
*   **State Management**: React Hooks (`useState`, `useEffect`)
*   **Persistence**: Browser localStorage API

### Development Environment:
*   **Node.js**: Version 14 or higher (for running `npm`/`yarn` and the development server).
*   **Package Manager**: `npm` (Node Package Manager) or `yarn`.
*   **Web Browser**: Any modern web browser with JavaScript and localStorage support (e.g., Chrome, Firefox, Safari, Edge).

### Local Assets (within a Create React App structure):
*   `src/App.js`: The main React component containing the application logic and JSX for the UI.
*   `src/App.css`: The stylesheet for custom styling of the application.
*   (Typically also `src/index.js` to render `App` and `public/index.html` as the entry point).

## ⚙️ Local Development Setup

1.  **Clone the Repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
    *(Replace `<repository-url>` and `<repository-directory>` with your specific details).*

2.  **Install Dependencies**:
    Navigate to the project's root directory in your terminal and run:
    ```bash
    npm install
    ```
    or if you prefer yarn:
    ```bash
    yarn install
    ```

3.  **Start the Development Server**:
    Once dependencies are installed, start the React development server:
    ```bash
    npm start
    ```
    or with yarn:
    ```bash
    yarn start
    ```

4.  **Access the Application**:
    *   The development server will typically open the application automatically in your default web browser.
    *   If not, navigate to `http://localhost:3000` (or the port indicated in your terminal).

## 💡 Application Usage

1.  Open the **React To-Do Master** application in your web browser (e.g., `http://localhost:3000`).
2.  **Interface**:
    *   **Input Field**: At the top (or a designated area), you'll find a text input field and an "Dodaj" (Add) button.
    *   **Task List**: Below the input field, any existing tasks will be displayed. If it's your first time or localStorage is empty, this list will be empty.
3.  **Actions**:
    *   **Adding a Task**:
        *   Type your task description into the input field.
        *   Click the "Dodaj" button.
        *   The new task will appear in the list below. Empty inputs are ignored.
    *   **Marking a Task as Done**:
        *   Click the "Oznacz jako wykonane" button next to a task.
        *   The task text will be struck through to indicate completion. Clicking again might toggle this status.
    *   **Editing a Task**:
        *   Click the "Edytuj" button next to a task.
        *   A `prompt()` dialog will appear, pre-filled with the current task text.
        *   Modify the text and click "OK." The task in the list will update.
    *   **Deleting a Task**:
        *   Click the "Usuń" button next to a task.
        *   The task will be removed from the list.
4.  **Persistence**:
    *   All changes (additions, edits, completions, deletions) are automatically saved to your browser's localStorage.
    *   If you reload the page or close and reopen the browser, your tasks will be retrieved from localStorage and displayed.

## 🗂️ File Structure (Typical Create React App)

The project is expected to follow a structure similar to that created by `create-react-app`:

*   `public/`:
    *   `index.html`: The main HTML shell for the React application.
    *   Other static assets (favicon, manifest, etc.).
*   `src/`:
    *   `App.js`: The main React component containing the to-do list logic, state management, and JSX for rendering the UI.
    *   `App.css`: The CSS file for styling the `App` component and its children.
    *   `index.js`: The JavaScript entry point that renders the `App` component into the DOM.
    *   (Potentially other component files if the app is broken down further).
*   `package.json`: Lists project dependencies, scripts (like `start`, `build`), etc.
*   `README.md`: This documentation file.

## 📝 Important Notes & Considerations

*   **Polish UI**: The application's user interface (button labels, prompts) is in Polish. It can be easily translated by modifying the string literals in `App.js`.
*   **Task Completion State**: Marking tasks as done uses HTML `<s>` tags for a visual strikethrough. A more robust approach would be to add a boolean `isCompleted` flag to each task object in the state, and then conditionally apply a CSS class for styling completed tasks. This provides better state management and flexibility.
*   **Edit Feature UX**: The edit functionality uses the browser's native `prompt()`. While simple, this offers a limited user experience. For a more polished application, consider replacing this with an inline editing input field or a custom modal dialog component.
*   **Client-Side Only**: This is a purely client-side application. All data is stored in the user's browser via `localStorage`. There is no backend server or database involved.
*   **`App.css` Styling**: The visual appearance relies on the styles defined in `App.css`. Ensure this file exists and contains appropriate styling rules.
*   **localStorage Limitations**:
    *   `localStorage` has storage limits (typically 5-10MB per origin).
    *   Data is stored as strings, so `JSON.stringify()` and `JSON.parse()` are used for saving and retrieving the tasks array.
    *   It's synchronous, which can block the main thread if data is very large (though unlikely for a typical to-do list).
    *   Consider adding error handling for scenarios where `localStorage` might be full or unavailable, or if stored JSON is corrupt.

## 🤝 Contributing

Contributions to **React To-Do Master** are highly encouraged! If you have ideas for:

*   Implementing a more robust state management for task completion (e.g., boolean flag).
*   Replacing `prompt()` for edits with a better UI (inline editing or modal).
*   Adding features like task prioritization, due dates, or categories.
*   Improving styling or responsiveness.
*   Adding unit or integration tests.
*   Implementing backend synchronization for multi-device access.

1.  Fork the repository.
2.  Create a new branch for your feature (`git checkout -b feature/YourToDoEnhancement`).
3.  Make your changes to the React components and CSS.
4.  Commit your changes (`git commit -m 'Feature: Implement YourToDoEnhancement'`).
5.  Push to the branch (`git push origin feature/YourToDoEnhancement`).
6.  Open a Pull Request.

## 📃 License

This project is licensed under the **MIT License**.
(If you have a `LICENSE` file in your repository, refer to it: `See the LICENSE file for details.`)

## 📧 Contact

Project developed by **Adrian Lesniak**.
For questions, feedback, or issues, please open an issue on the GitHub repository or contact the repository owner.

---
🚀 _Organize your life, one React task at a time!_
