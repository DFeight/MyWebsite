import React from 'react';
import Sidebar from '../sidebar/Sidebar';

import './App.scss';

function App() {
  return (
    <div className="grid">
      <Sidebar />
      <div className="interactive">Interactive</div>
      <div className="about">About</div>
    </div>
  );
}

export default App;
