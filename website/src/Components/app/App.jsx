import React, { useState } from 'react';
import Terminal from 'terminal-in-react';
import Modal from '../modal/Modal';

import './App.scss';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [website, setWebsite] = useState('');

  const openModal = website => {
    setIsOpen(!isOpen);
    setWebsite(website);
  };

  return (
    <div className="grid">
      <div className="sidebar" />
      <div className="interactive">
        <Terminal
          msg="Welcome! Enter the command 'help' to get a list of available commands."
          allowTabs={false}
          hideTopBar={true}
          color="#26EA20"
          prompt="#26EA20"
          startState="maximised"
          commands={{
            linkedin: () =>
              openModal('https://www.linkedin.com/in/dakotafeight/'),
            github: () => openModal('https://github.com/DFeight')
          }}
          descriptions={{
            linkedin: 'Visit my LinkedIn profile',
            github: 'Visit my GitHub page or lack thereof',
            help: 'List all of the commands',
            clear: 'Clear the terminal',
            show: 'Show the welcome message'
          }}
        />
        {isOpen && <Modal website={website} />}
      </div>
      <div className="about">About</div>
    </div>
  );
}

export default App;
