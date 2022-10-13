import { TouchableHighlight, View } from 'react-native';
import React, { FC } from 'react';

import colors from '../../../config/colors';
import styles from './styles';
import Text from '../../Text';

interface IListItem {
  title: string;
  onPress: () => void;
}

const ListItem: FC<IListItem> = (props) => {
  const { title, onPress } = props;

  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;
