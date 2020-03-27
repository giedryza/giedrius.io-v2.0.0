import React from 'react';

import { ReactComponent as IAvatar } from 'assets/icons/avatar.svg';
import { ReactComponent as IClose } from 'assets/icons/close.svg';
import { ReactComponent as ICss } from 'assets/icons/css.svg';
import { ReactComponent as IESLint } from 'assets/icons/eslint.svg';
import { ReactComponent as IExpress } from 'assets/icons/express.svg';
import { ReactComponent as IFacebook } from 'assets/icons/facebook.svg';
import { ReactComponent as IGLogo } from 'assets/icons/g-logo.svg';
import { ReactComponent as IGatsby } from 'assets/icons/gatsby.svg';
import { ReactComponent as IGithub } from 'assets/icons/github.svg';
import { ReactComponent as IGmail } from 'assets/icons/gmail.svg';
import { ReactComponent as IHometogo } from 'assets/icons/hometogo.svg';
import { ReactComponent as IHtml } from 'assets/icons/html.svg';
import { ReactComponent as IJavaScript } from 'assets/icons/javascript.svg';
import { ReactComponent as IJest } from 'assets/icons/jest.svg';
import { ReactComponent as ILinkedIn } from 'assets/icons/linkedin.svg';
import { ReactComponent as IMediapark } from 'assets/icons/mediapark.svg';
import { ReactComponent as IMongo } from 'assets/icons/mongo.svg';
import { ReactComponent as INfq } from 'assets/icons/nfq.svg';
import { ReactComponent as INode } from 'assets/icons/node.svg';
import { ReactComponent as IPhone } from 'assets/icons/phone.svg';
import { ReactComponent as IReactJs } from 'assets/icons/react.svg';
import { ReactComponent as IRedux } from 'assets/icons/redux.svg';
import { ReactComponent as ISass } from 'assets/icons/sass.svg';
import { ReactComponent as ITypeScript } from 'assets/icons/typescript.svg';
import { ReactComponent as IWebpack } from 'assets/icons/webpack.svg';

export enum IconName {
  Avatar,
  Close,
  Css,
  ESLint,
  Express,
  Facebook,
  GLogo,
  Gatsby,
  Github,
  Gmail,
  Hometogo,
  Html,
  JavaScript,
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
  TypeScript,
  Webpack,
}

interface Props {
  name: IconName;
}

const Icon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case IconName.Avatar:
      return <IAvatar />;
    case IconName.Close:
      return <IClose />;
    case IconName.Css:
      return <ICss />;
    case IconName.ESLint:
      return <IESLint />;
    case IconName.Express:
      return <IExpress />;
    case IconName.Facebook:
      return <IFacebook />;
    case IconName.GLogo:
      return <IGLogo />;
    case IconName.Gatsby:
      return <IGatsby />;
    case IconName.Github:
      return <IGithub />;
    case IconName.Gmail:
      return <IGmail />;
    case IconName.Hometogo:
      return <IHometogo />;
    case IconName.Html:
      return <IHtml />;
    case IconName.JavaScript:
      return <IJavaScript />;
    case IconName.Jest:
      return <IJest />;
    case IconName.LinkedIn:
      return <ILinkedIn />;
    case IconName.Mediapark:
      return <IMediapark />;
    case IconName.Mongo:
      return <IMongo />;
    case IconName.Nfq:
      return <INfq />;
    case IconName.Node:
      return <INode />;
    case IconName.Phone:
      return <IPhone />;
    case IconName.ReactJs:
      return <IReactJs />;
    case IconName.Redux:
      return <IRedux />;
    case IconName.Sass:
      return <ISass />;
    case IconName.TypeScript:
      return <ITypeScript />;
    case IconName.Webpack:
      return <IWebpack />;
    default:
      return null;
  }
};

export default Icon;
