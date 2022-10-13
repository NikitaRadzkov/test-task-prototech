import React, { FC } from 'react';
import { View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../../config/styles';
import styles from './styles';

interface IAppTextInput {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  width?: string;
  [x: string]: any;
}

const AppTextInput: FC<IAppTextInput> = ({ icon, width = '100%', ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
      <TextInput placeholderTextColor={defaultStyles.colors.medium} style={defaultStyles.text} {...otherProps} />
    </View>
  );
};

export default AppTextInput;
