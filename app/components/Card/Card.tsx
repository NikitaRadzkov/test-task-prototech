import React, { FC } from 'react';
import { Button, View, Modal } from 'react-native';

import Text from '../Text';
import Screen from '../Screen';
import { IQuotesTick } from '../../types/data';
import styles from './styles';

interface ICard {
  item: IQuotesTick | undefined;
  isModalVisible: boolean;
  onPress: () => void;
}

const Card: FC<ICard> = (props) => {
  const { item, isModalVisible, onPress } = props;

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <Screen>
        <Button title="Close" onPress={onPress} />
        <View style={styles.card}>
          <View style={styles.detailsContainer}>
            <Text>{`Symbol: ${item?.symbol}`}</Text>
            <Text>{`Digits: ${item?.digits}`}</Text>
            <Text>{`Ask: ${item?.ask}`}</Text>
            <Text>{`Bid: ${item?.bid}`}</Text>
            <Text>{`Change: ${item?.change}`}</Text>
            <Text>{`Last time: ${item?.lasttime}`}</Text>
            <Text>{`Change24h: ${item?.change24h}`}</Text>
          </View>
        </View>
      </Screen>
    </Modal>
  );
};

export default Card;
