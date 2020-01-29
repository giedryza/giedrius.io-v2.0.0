import React from 'react';

import { ReactComponent as Avatar } from '../../assets/icons/avatar.svg';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { ReactComponent as Css } from '../../assets/icons/css.svg';
import { ReactComponent as Express } from '../../assets/icons/express.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as GLogo } from '../../assets/icons/g-logo.svg';
import { ReactComponent as Gatsby } from '../../assets/icons/gatsby.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as Gmail } from '../../assets/icons/gmail.svg';
import { ReactComponent as Hometogo } from '../../assets/icons/hometogo.svg';
import { ReactComponent as Html } from '../../assets/icons/html.svg';
import { ReactComponent as Javascript } from '../../assets/icons/javascript.svg';
import { ReactComponent as Jest } from '../../assets/icons/jest.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';
import { ReactComponent as Mediapark } from '../../assets/icons/mediapark.svg';
import { ReactComponent as Mongo } from '../../assets/icons/mongo.svg';
import { ReactComponent as Nfq } from '../../assets/icons/nfq.svg';
import { ReactComponent as Node } from '../../assets/icons/node.svg';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as ReactJs } from '../../assets/icons/react.svg';
import { ReactComponent as Redux } from '../../assets/icons/redux.svg';
import { ReactComponent as Sass } from '../../assets/icons/sass.svg';
import { ReactComponent as Typescript } from '../../assets/icons/typescript.svg';

export enum IconName {
  AVATAR,
  CLOSE,
  CSS,
  EXPRESS,
  FACEBOOK,
  GLOGO,
  GATSBY,
  GITHUB,
  GMAIL,
  HOMETOGO,
  HTML,
  JAVASCRIPT,
  JEST,
  LINKEDIN,
  MEDIAPARK,
  MONGO,
  NFQ,
  NODE,
  PHONE,
  REACT,
  REDUX,
  SASS,
  TYPESCRIPT,
}

interface Props {
  name: IconName;
}

const Icon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case IconName.AVATAR:
      return <Avatar />;
    case IconName.CLOSE:
      return <Close />;
    case IconName.CSS:
      return <Css />;
    case IconName.EXPRESS:
      return <Express />;
    case IconName.FACEBOOK:
      return <Facebook />;
    case IconName.GLOGO:
      return <GLogo />;
    case IconName.GATSBY:
      return <Gatsby />;
    case IconName.GITHUB:
      return <Github />;
    case IconName.GMAIL:
      return <Gmail />;
    case IconName.HOMETOGO:
      return <Hometogo />;
    case IconName.HTML:
      return <Html />;
    case IconName.JAVASCRIPT:
      return <Javascript />;
    case IconName.JEST:
      return <Jest />;
    case IconName.LINKEDIN:
      return <Linkedin />;
    case IconName.MEDIAPARK:
      return <Mediapark />;
    case IconName.MONGO:
      return <Mongo />;
    case IconName.NFQ:
      return <Nfq />;
    case IconName.NODE:
      return <Node />;
    case IconName.PHONE:
      return <Phone />;
    case IconName.REACT:
      return <ReactJs />;
    case IconName.REDUX:
      return <Redux />;
    case IconName.SASS:
      return <Sass />;
    case IconName.TYPESCRIPT:
      return <Typescript />;
    default:
      return null;
  }
};

export default Icon;
