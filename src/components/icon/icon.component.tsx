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
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
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
  Avatar,
  Close,
  Css,
  Express,
  Facebook,
  GLogo,
  Gatsby,
  Github,
  Gmail,
  Hometogo,
  Html,
  Javascript,
  Jest,
  LinkedIn,
  Mediapark,
  Mongo,
  Nfq,
  Node,
  Phone,
  ReactJs,
  Redux,
  Sass,
  Typescript,
}

interface Props {
  name: IconName;
}

const Icon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case IconName.Avatar:
      return <Avatar />;
    case IconName.Close:
      return <Close />;
    case IconName.Css:
      return <Css />;
    case IconName.Express:
      return <Express />;
    case IconName.Facebook:
      return <Facebook />;
    case IconName.GLogo:
      return <GLogo />;
    case IconName.Gatsby:
      return <Gatsby />;
    case IconName.Github:
      return <Github />;
    case IconName.Gmail:
      return <Gmail />;
    case IconName.Hometogo:
      return <Hometogo />;
    case IconName.Html:
      return <Html />;
    case IconName.Javascript:
      return <Javascript />;
    case IconName.Jest:
      return <Jest />;
    case IconName.LinkedIn:
      return <LinkedIn />;
    case IconName.Mediapark:
      return <Mediapark />;
    case IconName.Mongo:
      return <Mongo />;
    case IconName.Nfq:
      return <Nfq />;
    case IconName.Node:
      return <Node />;
    case IconName.Phone:
      return <Phone />;
    case IconName.ReactJs:
      return <ReactJs />;
    case IconName.Redux:
      return <Redux />;
    case IconName.Sass:
      return <Sass />;
    case IconName.Typescript:
      return <Typescript />;
    default:
      return null;
  }
};

export default Icon;
