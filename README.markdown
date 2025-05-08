# To-Do List App

## Overview
To-Do List App is a React-based web application for managing tasks. Users can add, edit, mark as completed, and delete tasks, with persistence via localStorage. Built with React hooks (`useState`, `useEffect`), it features a simple UI and custom CSS styling.

## Features
- **Task Management**: Add, edit, mark as done (strikethrough), and delete tasks.
- **LocalStorage**: Saves tasks to browser storage for persistence across sessions.
- **Responsive Input**: Text input for adding tasks with validation (non-empty).
- **Interactive UI**: Buttons for each task to mark as done, edit, or delete.
- **State Management**: Uses `useState` for tasks and input, `useEffect` for storage sync.
- **Simple Styling**: Custom CSS (`App.css`) for layout and visual appeal.

## Requirements
- Node.js (v14 or higher)
- npm or yarn
- Web browser (e.g., Chrome, Firefox)
- Local assets:
  - `src/App.js`: Main React component.
  - `src/App.css`: Stylesheet for the app.

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Access the app at `http://localhost:3000`.

## Usage
1. Open the app in a browser to view the to-do list.
2. **Interface**:
   - **Input Field**: Enter a task and click "Dodaj" to add it.
   - **Task List**: Displays tasks with buttons for actions.
   - **Buttons**:
     - "Oznacz jako wykonane": Strikethrough to mark as done.
     - "Edytuj": Prompt to edit the task.
     - "Usuń": Remove the task.
3. **Actions**:
   - Tasks are saved to localStorage automatically.
   - Reload the page to retrieve saved tasks.
   - Empty inputs are ignored when adding tasks.

## File Structure
- `src/App.js`: Main React component with task logic and UI.
- `src/App.css`: CSS styles for the app’s layout and design.
- `README.md`: This file, providing project documentation.

## Notes
- The app uses Polish text (e.g., "Dodaj", "Edytuj") but is easily translatable.
- Tasks marked as done use HTML `<s>` tags for strikethrough; consider a boolean flag for more robust state management.
- The edit feature uses `prompt`, which is simple but could be replaced with a modal for better UX.
- No backend; data persists in the browser’s localStorage.
- Ensure `App.css` exists and is styled for optimal appearance.
- Add error handling for localStorage quotas or invalid JSON for production.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or feedback, open an issue on GitHub or contact the repository owner.