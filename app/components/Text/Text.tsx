import React, { FC } from 'react';
import { Text } from 'react-native';

import defaultStyles from '../../config/styles';

interface IAppText {
  children: string;
  style?: Record<string, unknown>;
}

const AppText: FC<IAppText> = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
