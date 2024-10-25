// import logo from './logo.svg';
import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [value, setValue] = useState(0)

  return (
    <div className="App">
      <Navbar logoText="RamLAL.com"/>
      <div className='value'>{value}</div>
      <button onClick={() => { setValue(value + 1) }}>Click me</button>
      <Footer/>
    </div>
  );
}

export default App;