import React, { useState } from 'react';
import Floater, { Position } from 'components/floater/floater.component';
import Icon, { IconName } from 'components/icon/icon.component';
import { contacts } from 'sections/contacts/contacts.data';
import { IDs } from 'components/menu/menu.constants';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(prevState => !prevState);

  return (
    <Floater position={Position.TOP}>
      <nav className="menu" aria-labelledby={IDs.menuButton}>
        <button
          className="menu__btn"
          onClick={handleClick}
          type="button"
          id={IDs.menuButton}
          aria-label="Menu"
          aria-haspopup="true"
          aria-controls={IDs.menuNav}
          aria-expanded={isOpen}
        >
          <Icon name={IconName.Phone} />
        </button>
        <ul
          className="menu__nav"
          id={IDs.menuNav}
          aria-labelledby={IDs.menuButton}
          aria-hidden={!isOpen}
        >
          {contacts.map(contact => (
            <li className="menu__nav-item" key={contact.label}>
              <Icon name={contact.icon} />
              <a
                className="menu__nav-link heading__xs"
                href={contact.url}
                aria-label={contact.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Floater>
  );
};

export default Menu;
