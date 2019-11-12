import React from 'react';

import { contacts } from '../contacts/contacts.data';
import Icon, { IconName } from '../icon/icon.component';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="menu container">
      <button
        className={`menu__btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        id="menu-btn"
        aria-haspopup="true"
        aria-controls="menu-nav"
        aria-expanded={isOpen}
      >
        <Icon name={IconName.PHONE} />
      </button>
      <ul
        className={`menu__nav ${isOpen ? 'open' : ''}`}
        id="menu-nav"
        aria-labelledby="menu-btn"
      >
        {contacts.map(contact => (
          <li className="menu__nav-item" key={contact.label}>
            <Icon name={contact.icon} />
            <a
              className="menu__nav-link heading__xs"
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
