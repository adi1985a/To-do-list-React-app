import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Krok 1 - Inicjalizacja zmiennych
  const [todos, setTodos] = useState([]); // Tablica przechowująca elementy do zrobienia
  const [task, setTask] = useState(''); // Zmienna przechowująca wartość wpisaną w inpucie

  // Krok 2 - Funkcja do dodawania zadania
  const addTask = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]); // Dodanie elementu do tablicy
      setTask(''); // Wyczyszczenie inpucia
    }
  };

  // Krok 3 - Funkcja do usuwania zadania na podstawie indeksu
  const deleteTodo = index => {
    // Krok 3.1: Utworzenie kopii bieżącej listy zadań
    const newTodos = [...todos];
    // Krok 3.2: Usunięcie elementu o określonym indeksie
    newTodos.splice(index, 1);
    // Krok 3.3: Aktualizacja listy zadań na podstawie zmodyfikowanej listy
    setTodos(newTodos);
  };

  // Krok 8: Funkcja oznaczająca zadanie jako wykonane
  const markAsDone = index => {
    const newTodos = [...todos];
    newTodos[index] = <s>{newTodos[index]}</s>; // Oznaczenie zadania przekreśleniem
    setTodos(newTodos);
  };

  // Krok 9: Funkcja edytująca zadanie
  const editTask = index => {
    const updatedTask = prompt('Edytuj zadanie:', todos[index]);
    if (updatedTask !== null) {
      const newTodos = [...todos];
      newTodos[index] = updatedTask;
      setTodos(newTodos);
    }
  };

  // Krok 10: Zapisywanie listy zadań w lokalnym przechowywaniu
  const saveToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // Krok 11: Wczytywanie listy zadań z lokalnego przechowywania
  const loadFromLocalStorage = () => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  };

  // Dodaj te funkcje do useEffect, aby automatycznie wczytywały i zapisywały dane
  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  useEffect(() => {
    saveToLocalStorage();
  }, [todos]);

  return (
    <div>
      <h1>Lista zadań</h1>

      {/* Krok 4: Pole wprowadzania nowego zadania */}
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Dodaj zadanie"
      />

      {/* Krok 5: Przycisk dodawania nowego elementu do listy zadań */}
      <button onClick={addTask}>Dodaj</button>

      {/* Krok 6: Lista elementów do zrobienia */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            {/* Krok 7: Przycisk usuwania elementu z listy zadań */}
            <button onClick={() => markAsDone(index)}>Oznacz jako wykonane</button>
            <button onClick={() => editTask(index)}>Edytuj</button>
            <button onClick={() => deleteTodo(index)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
