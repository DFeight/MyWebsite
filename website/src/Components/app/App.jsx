import React, { useState } from 'react';
import Terminal from 'terminal-in-react';
import { MdPictureAsPdf } from 'react-icons/md';
import { IoIosMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import Modal from '../modal/Modal';
import Pdf from '../../documents/Resume.pdf';
import Portrait from '../../images/PortraitPic.png';

import './App.scss';

function App() {
  const linkedin = 'https://www.linkedin.com/in/dakotafeight/';
  const github = 'https://github.com/DFeight';

  const [isOpen, setIsOpen] = useState(false);
  const [website, setWebsite] = useState('');

  const openModal = website => {
    setIsOpen(!isOpen);
    setWebsite(website);
  };

  return (
    <div className="grid">
      <div className="sidebar">
        <h1>Dakota Feight</h1>
        <div className="portrait">
          <img src={Portrait} alt="" />
        </div>
        <div className="contactInfo">
          <IoIosMail
            title="Email"
            size="2em"
            color="#29ff62"
            className="icons"
          />
          <IoLogoLinkedin
            title="LinkedIn"
            size="2em"
            color="#1399ff"
            className="icons"
            onClick={() => openModal(linkedin)}
          />
          <IoLogoGithub
            title="GitHub"
            size="2em"
            color="#000203"
            className="icons"
            onClick={() => openModal(github)}
          />
          <MdPictureAsPdf
            title="Resume"
            size="2em"
            color="#ff0634"
            className="icons"
            onClick={() => openModal(Pdf)}
          />
        </div>
      </div>
      <div className="interactive">
        <Terminal
          msg="Welcome! Enter the command 'help' to get a list of available commands."
          allowTabs={false}
          hideTopBar={true}
          color="#26EA20"
          prompt="#26EA20"
          startState="maximised"
          commands={{
            linkedin: () => openModal(linkedin),
            github: () => openModal(github)
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
      <div className="about">
        <button id="btnProjects">Projects</button>
      </div>
    </div>
  );
}

export default App;
