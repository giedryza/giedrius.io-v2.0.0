import React from 'react';

import { contacts } from './contacts.data';
import Title from '../../components/title/title.component';
import Icon from '../../components/icon/icon.component';
import Tooltip, { Position } from '../../components/tooltip/tooltip.component';

const Contacts: React.FC = () => (
  <section className="contacts section-container">
    <Title title="Contacts" />
    <nav>
      <ul className="contacts__container">
        {contacts.map(contact => (
          <li key={contact.label}>
            <Tooltip popup={contact.tooltip} position={Position.TOP}>
              <a
                href={contact.url}
                className="contacts__link"
                aria-label={contact.tooltip}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={contact.icon} />
              </a>
            </Tooltip>
          </li>
        ))}
      </ul>
    </nav>
  </section>
);

export default Contacts;
