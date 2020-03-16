import React from 'react';

import { contacts } from './contacts.data';
import Title from '../../components/title/title.component';
import Bubble, {
  BubbleSize,
  LabelPosition,
} from '../../components/bubble/bubble.component';

const Contacts: React.FC = () => (
  <section className="contacts">
    <Title title="Contacts" />
    <nav>
      <ul className="contacts__container">
        {contacts.map(contact => (
          <li key={contact.label}>
            <Bubble
              link={contact.url}
              label={contact.tooltip}
              icon={contact.icon}
              bubbleSize={BubbleSize.Small}
              labelPosition={LabelPosition.Top}
            />
          </li>
        ))}
      </ul>
    </nav>
  </section>
);

export default Contacts;
