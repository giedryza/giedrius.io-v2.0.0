import React from 'react';

import { ReactComponent as Css } from '../../assets/icons/css.svg';
import { ReactComponent as Express } from '../../assets/icons/express.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Gatsby } from '../../assets/icons/gatsby.svg';
import { ReactComponent as Html } from '../../assets/icons/html.svg';
import { ReactComponent as Javascript } from '../../assets/icons/javascript.svg';
import { ReactComponent as Mongo } from '../../assets/icons/mongo.svg';
import { ReactComponent as Node } from '../../assets/icons/node.svg';
import { ReactComponent as ReactJs } from '../../assets/icons/react.svg';
import { ReactComponent as Redux } from '../../assets/icons/redux.svg';
import { ReactComponent as Sass } from '../../assets/icons/sass.svg';
import { ReactComponent as Typescript } from '../../assets/icons/typescript.svg';

export enum IconName {
  CSS,
  EXPRESS,
  FACEBOOK,
  GATSBY,
  HTML,
  JAVASCRIPT,
  MONGO,
  NODE,
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
    case IconName.CSS:
      return <Css />;
    case IconName.EXPRESS:
      return <Express />;
    case IconName.FACEBOOK:
      return <Facebook />;
    case IconName.GATSBY:
      return <Gatsby />;
    case IconName.HTML:
      return <Html />;
    case IconName.JAVASCRIPT:
      return <Javascript />;
    case IconName.MONGO:
      return <Mongo />;
    case IconName.NODE:
      return <Node />;
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
