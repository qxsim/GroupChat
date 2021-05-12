import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>GroupChat <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with <span role="img" aria-label="emoji">❤️</span> using ReactJS, ExpressJS, <br/> NodeJS and Socket.IO</h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Who's in this group:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <img src={onlineIcon} className="mr-10" alt="online icon" />
                    {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;