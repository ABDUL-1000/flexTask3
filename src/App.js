import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import FunctionalComponent from './components/FuntionalComponent';
import ClassComponent from './components/ClassComponent';
import UserCard from './components/UserCard';
import Counter from './components/Counter';
import './styles/App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [users] = useState([
    { id: 1, name: 'John Doe', age: 25, role: 'Developer' },
    { id: 2, name: 'Jane Smith', age: 30, role: 'Designer' },
    { id: 3, name: 'Mike Johnson', age: 28, role: 'Manager' }
  ]);

  const renderContent = () => {
    switch(currentView) {
      case 'virtual-dom':
        return (
          <div className="content-section">
            <h2>Virtual DOM</h2>
            <p>The Virtual DOM is a programming concept where a "virtual" representation of the UI is kept in memory.</p>
            <div className="demo-box">
              <h3>How it works:</h3>
              <ol>
                <li>When state changes, a new virtual DOM tree is created</li>
                <li>The new tree is compared with the previous one (diffing)</li>
                <li>Only the changed elements are updated in the real DOM</li>
              </ol>
              <Counter />
            </div>
          </div>
        );
      
      case 'state-props':
        return (
          <div className="content-section">
            <h2>State vs Props</h2>
            <div className="comparison">
              <div className="state-section">
                <h3>State (Mutable)</h3>
                <FunctionalComponent />
              </div>
              <div className="props-section">
                <h3>Props (Immutable)</h3>
                <div className="users-grid">
                  {users.map(user => (
                    <UserCard 
                      key={user.id}
                      name={user.name}
                      age={user.age}
                      role={user.role}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'jsx':
        return (
          <div className="content-section">
            <h2>JSX (JavaScript XML)</h2>
            <p>JSX allows us to write HTML-like syntax in JavaScript</p>
            <div className="code-example">
              <h3>JSX Features:</h3>
              <ul>
                <li>Embed expressions with &#123;&#125;</li>
                <li>Use className instead of class</li>
                <li>Self-close tags</li>
                <li>JavaScript expressions work inside JSX</li>
              </ul>
              <div className="jsx-demo">
                <p>Current time: {new Date().toLocaleTimeString()}</p>
                <p>Math calculation: 5 + 3 = {5 + 3}</p>
                <button 
                  className="jsx-button"
                  onClick={() => alert('JSX event handled!')}
                >
                  Click me (JSX Event)
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'components':
        return (
          <div className="content-section">
            <h2>Components</h2>
            <div className="components-demo">
              <div className="functional-comp">
                <h3>Functional Component</h3>
                <FunctionalComponent />
              </div>
              <div className="class-comp">
                <h3>Class Component</h3>
                <ClassComponent />
              </div>
            </div>
          </div>
        );
      
      case 'events':
        return (
          <div className="content-section">
            <h2>Event Handlers</h2>
            <div className="events-demo">
              <Counter />
              <div className="event-buttons">
                <button onClick={() => alert('Button clicked!')}>
                  Click Event
                </button>
                <input 
                  type="text" 
                  placeholder="Type something..."
                  onChange={(e) => console.log('Input:', e.target.value)}
                />
                <button 
                  onMouseOver={() => console.log('Mouse over!')}
                  onMouseOut={() => console.log('Mouse out!')}
                >
                  Hover over me
                </button>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="home-section">
            <h1>React Learning Outcomes</h1>
            <p>Select a topic from the navigation to learn more about React concepts</p>
            <div className="topics-grid">
              <div className="topic-card" onClick={() => setCurrentView('virtual-dom')}>
                <h3>Virtual DOM</h3>
                <p>Understanding React's rendering mechanism</p>
              </div>
              <div className="topic-card" onClick={() => setCurrentView('state-props')}>
                <h3>State & Props</h3>
                <p>Data management in React components</p>
              </div>
              <div className="topic-card" onClick={() => setCurrentView('jsx')}>
                <h3>JSX</h3>
                <p>JavaScript XML syntax</p>
              </div>
              <div className="topic-card" onClick={() => setCurrentView('components')}>
                <h3>Components</h3>
                <p>Functional & Class components</p>
              </div>
              <div className="topic-card" onClick={() => setCurrentView('events')}>
                <h3>Event Handlers</h3>
                <p>Handling user interactions</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1>React Learning</h1>
          <div className="nav-links">
            <button onClick={() => setCurrentView('home')}>Home</button>
            <button onClick={() => setCurrentView('virtual-dom')}>Virtual DOM</button>
            <button onClick={() => setCurrentView('state-props')}>State & Props</button>
            <button onClick={() => setCurrentView('jsx')}>JSX</button>
            <button onClick={() => setCurrentView('components')}>Components</button>
            <button onClick={() => setCurrentView('events')}>Events</button>
          </div>
        </nav>
        
        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </Router>
  );
}

export default App;