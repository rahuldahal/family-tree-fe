import './App.css';
import Home from './components/Home';
import PersonForm from './components/PersonForm';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<PersonForm />} />
      </Routes>
    </div>
  );
}

export default App;
