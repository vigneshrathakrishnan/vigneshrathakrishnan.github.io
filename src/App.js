import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Introduction from './components/Introduction';
import GettingStarted from './components/GettingStarted';
import Usage from './components/Usage';
import Support from './components/Support';
import Samples from './components/Samples';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
      <div className="app">
        <Navbar />
        <div className="main-content">
          <div className="content">
            <Introduction />
            <GettingStarted />
            <Usage />
            <Samples />
            <Support />
          </div>
          <Sidebar />
        </div>
        <Footer/>
      </div>
  );
}

export default App;
