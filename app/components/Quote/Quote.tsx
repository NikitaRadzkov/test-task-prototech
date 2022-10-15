import React, { FC } from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Text from '../Text';
import { IQuotesTick } from '../../types/data';
import styles from './styles';

interface IQuote {
  currency: IQuotesTick;
  deviceWidth: number;
}

const Quote: FC<IQuote> = ({ currency, deviceWidth }) => {
  return (
    <View style={styles.tableName}>
      <Text style={{ ...styles.pair, ...styles.common, width: deviceWidth * 0.24 - 10, textAlign: 'left' }}>
        {currency.symbol}
      </Text>
      <Text style={{ ...styles.common, width: deviceWidth * 0.25 - 10 }}>{currency.bid}</Text>
      <Text
        style={{
          ...styles.common,
          width: deviceWidth * 0.25 - 10,
          color: currency.change >= 0 ? 'green' : 'red',
        }}
      >
        {currency.change}
      </Text>
      <Text
        style={{
          ...styles.common,
          width: deviceWidth * 0.21 - 10,
          color: currency.change >= 0 ? 'green' : 'red',
        }}
      >
        {currency.change && `${(currency.change / (currency.bid / 100)).toFixed(2)}%`}
      </Text>
      <View style={{ ...styles.arrows, width: deviceWidth * 0.03 }}>
        <AntDesign name="caretup" size={10} color={currency.change >= 0 ? 'green' : 'black'} />
        <AntDesign name="caretdown" size={10} color={currency.change < 0 ? 'red' : 'black'} />
      </View>
    </View>
  );
};

export default Quote;
