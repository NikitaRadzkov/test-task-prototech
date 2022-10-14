import { TouchableHighlight, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';

import colors from '../../../config/colors';
import styles from './styles';
import Text from '../../Text';
import Card from '../../Card/Card';
import { IQuotesTick } from '../../../types/data';

interface IListItem {
  symbol: string;
}

const ListItem: FC<IListItem> = ({ symbol }) => {
  const [quotesTick, setQuotesTick] = useState<IQuotesTick>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetch(`https://quotes.instaforex.com/api/quotesTick?q=${symbol}`)
      .then((response) => response.json())
      .then((json) => {
        setQuotesTick(json[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={() => {
          setIsModalVisible(true);
        }}
      >
        <View style={styles.container}>
          <Text>{symbol}</Text>
        </View>
      </TouchableHighlight>
      <Card item={quotesTick} isModalVisible={isModalVisible} onPress={() => setIsModalVisible(false)} />
    </>
  );
};

export default ListItem;
