import React from 'react'; 
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContext from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContext>
        <Navbar/>
        <BookList/>
      </ThemeContext>
    </div>
  );
}

export default App;
