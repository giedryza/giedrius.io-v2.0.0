import React from 'react';

import FloatingContainer, {
  Position,
} from '../floatingContainer/floatingContainer.component';
import Icon, { IconName } from '../icon/icon.component';
import { contacts } from '../contacts/contacts.data';
import { IDs } from './menu.constants';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <FloatingContainer position={Position.TOP}>
      <nav className="menu">
        <button
          className="menu__btn"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          id={IDs.menuButton}
          aria-label="Menu"
          aria-haspopup="true"
          aria-controls={IDs.menuNav}
          aria-expanded={isOpen}
        >
          <Icon name={IconName.PHONE} />
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
    </FloatingContainer>
  );
};

export default Menu;
