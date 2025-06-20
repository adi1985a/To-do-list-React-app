import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  Clock, 
  Calendar,
  Star,
  Filter,
  Search,
  Sun,
  Moon,
  Settings,
  Bell,
  Target,
  TrendingUp,
  X,
  Palette,
  Database,
  Download,
  Upload,
  Trash
} from 'lucide-react';
import './App.css';

// Function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
};

// Function to format date with time
const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return date.toLocaleDateString('en-US', options);
};

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [showCompleted, setShowCompleted] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Add new task
  const addTask = () => {
    if (task.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: task,
        completed: false,
        priority: priority,
        dueDate: dueDate,
        createdAt: new Date().toISOString(),
        completedAt: null
      };
      setTodos([...todos, newTodo]);
      setTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  // Delete task
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Mark as completed
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { 
            ...todo, 
            completed: !todo.completed,
            completedAt: !todo.completed ? new Date().toISOString() : null
          }
        : todo
    ));
  };

  // Edit task
  const editTask = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  // Filter tasks
  const filteredTodos = todos.filter(todo => {
    const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || 
                         (filter === 'completed' && todo.completed) ||
                         (filter === 'active' && !todo.completed) ||
                         (filter === 'high' && todo.priority === 'high');
    return matchesSearch && matchesFilter;
  });

  // Statistics
  const stats = {
    total: todos.length,
    completed: todos.filter(todo => todo.completed).length,
    active: todos.filter(todo => !todo.completed).length,
    highPriority: todos.filter(todo => todo.priority === 'high' && !todo.completed).length
  };

  // Save to localStorage
  useEffect(() => {
    if (autoSave) {
      localStorage.setItem('todos', JSON.stringify(todos));
      localStorage.setItem('settings', JSON.stringify({
        darkMode,
        autoSave,
        notifications,
        soundEnabled
      }));
    }
  }, [todos, darkMode, autoSave, notifications, soundEnabled]);

  // Load from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    const savedSettings = localStorage.getItem('settings');
    
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
    
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setDarkMode(settings.darkMode || false);
      setAutoSave(settings.autoSave !== false);
      setNotifications(settings.notifications !== false);
      setSoundEnabled(settings.soundEnabled || false);
    }
  }, []);

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // Export data
  const exportData = () => {
    const data = {
      todos,
      settings: {
        darkMode,
        autoSave,
        notifications,
        soundEnabled
      },
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `todo-master-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Import data
  const importData = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const data = JSON.parse(event.target.result);
            if (data.todos) {
              setTodos(data.todos);
            }
            if (data.settings) {
              setDarkMode(data.settings.darkMode || false);
              setAutoSave(data.settings.autoSave !== false);
              setNotifications(data.settings.notifications !== false);
              setSoundEnabled(data.settings.soundEnabled || false);
            }
            alert('Data imported successfully!');
          } catch (error) {
            alert('Error importing data. Please check the file format.');
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  // Clear all data
  const clearAllData = () => {
    if (window.confirm('Are you sure you want to delete all data? This action cannot be undone.')) {
      setTodos([]);
      localStorage.removeItem('todos');
      alert('All data has been cleared.');
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <div className="title-section">
              <Target className="title-icon" />
              <h1>Todo Master</h1>
            </div>
            <div className="header-actions">
              <button
                className="theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
                title="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                className="settings-btn"
                onClick={() => setShowSettings(true)}
                title="Settings"
              >
                <Settings size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Settings Modal */}
        {showSettings && (
          <div className="modal-overlay" onClick={() => setShowSettings(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Settings</h2>
                <button 
                  className="modal-close"
                  onClick={() => setShowSettings(false)}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="modal-body">
                <div className="settings-section">
                  <h3>Appearance</h3>
                  <div className="setting-item">
                    <label>
                      <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={(e) => setDarkMode(e.target.checked)}
                      />
                      Dark mode
                    </label>
                  </div>
                </div>

                <div className="settings-section">
                  <h3>Data</h3>
                  <div className="setting-item">
                    <label>
                      <input
                        type="checkbox"
                        checked={autoSave}
                        onChange={(e) => setAutoSave(e.target.checked)}
                      />
                      Auto-save
                    </label>
                  </div>
                  <div className="setting-item">
                    <button className="settings-btn-secondary" onClick={exportData}>
                      <Download size={16} />
                      Export data
                    </button>
                  </div>
                  <div className="setting-item">
                    <button className="settings-btn-secondary" onClick={importData}>
                      <Upload size={16} />
                      Import data
                    </button>
                  </div>
                  <div className="setting-item">
                    <button className="settings-btn-danger" onClick={clearAllData}>
                      <Trash size={16} />
                      Clear all data
                    </button>
                  </div>
                </div>

                <div className="settings-section">
                  <h3>Notifications</h3>
                  <div className="setting-item">
                    <label>
                      <input
                        type="checkbox"
                        checked={notifications}
                        onChange={(e) => setNotifications(e.target.checked)}
                      />
                      Enable notifications
                    </label>
                  </div>
                  <div className="setting-item">
                    <label>
                      <input
                        type="checkbox"
                        checked={soundEnabled}
                        onChange={(e) => setSoundEnabled(e.target.checked)}
                      />
                      Sound effects
                    </label>
                  </div>
                </div>

                <div className="settings-section">
                  <h3>Information</h3>
                  <div className="info-item">
                    <strong>Version:</strong> 1.0.0
                  </div>
                  <div className="info-item">
                    <strong>Tasks:</strong> {stats.total}
                  </div>
                  <div className="info-item">
                    <strong>Completed:</strong> {stats.completed}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="stats">
          <div className="stat-card">
            <TrendingUp className="stat-icon" />
            <div className="stat-content">
              <span className="stat-number">{stats.total}</span>
              <span className="stat-label">Total</span>
            </div>
          </div>
          <div className="stat-card">
            <Check className="stat-icon completed" />
            <div className="stat-content">
              <span className="stat-number">{stats.completed}</span>
              <span className="stat-label">Completed</span>
            </div>
          </div>
          <div className="stat-card">
            <Clock className="stat-icon active" />
            <div className="stat-content">
              <span className="stat-number">{stats.active}</span>
              <span className="stat-label">Active</span>
            </div>
          </div>
          <div className="stat-card">
            <Star className="stat-icon high" />
            <div className="stat-content">
              <span className="stat-number">{stats.highPriority}</span>
              <span className="stat-label">High Priority</span>
            </div>
          </div>
        </div>

        {/* Add form */}
        <div className="add-form">
          <div className="input-group">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add new task..."
              className="task-input"
            />
            <select 
              value={priority} 
              onChange={(e) => setPriority(e.target.value)}
              className="priority-select"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="date-input"
            />
            <button 
              onClick={addTask}
              className="add-btn"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Filters and search */}
        <div className="filters">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-buttons">
            {['all', 'active', 'completed', 'high'].map(filterType => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`filter-btn ${filter === filterType ? 'active' : ''}`}
              >
                {filterType === 'all' && 'All'}
                {filterType === 'active' && 'Active'}
                {filterType === 'completed' && 'Completed'}
                {filterType === 'high' && 'High Priority'}
              </button>
            ))}
          </div>
        </div>

        {/* Tasks list */}
        <div className="todos-container">
          {filteredTodos.map((todo, index) => (
            <div
              key={todo.id}
              className={`todo-item ${todo.completed ? 'completed' : ''} priority-${todo.priority}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="todo-content">
                <button
                  className={`complete-btn ${todo.completed ? 'completed' : ''}`}
                  onClick={() => toggleComplete(todo.id)}
                >
                  {todo.completed && <Check size={16} />}
                </button>
                
                <div className="todo-text">
                  <span className={`task-text ${todo.completed ? 'completed' : ''}`}>
                    {todo.text}
                  </span>
                  {todo.dueDate && (
                    <div className="due-date">
                      <Calendar size={14} />
                      <span>{formatDate(todo.dueDate)}</span>
                    </div>
                  )}
                  {todo.completedAt && (
                    <div className="completed-date">
                      Completed: {formatDateTime(todo.completedAt)}
                    </div>
                  )}
                </div>
                
                <div className="todo-actions">
                  <button
                    className="action-btn edit"
                    onClick={() => {
                      const newText = prompt('Edit task:', todo.text);
                      if (newText !== null) editTask(todo.id, newText);
                    }}
                  >
                    <Edit3 size={16} />
                  </button>
                  <button
                    className="action-btn delete"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {filteredTodos.length === 0 && (
            <div className="empty-state">
              <Target size={48} />
              <h3>No tasks</h3>
              <p>Add your first task to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App; 