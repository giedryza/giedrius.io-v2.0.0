import React from 'react';

import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';

export enum IconName {
  FACEBOOK,
}

interface Props {
  name: IconName;
}

const Icon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case IconName.FACEBOOK:
      return <Facebook />;
    default:
      return null;
  }
};

export default Icon;
