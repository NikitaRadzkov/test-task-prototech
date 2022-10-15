import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import React, { FC, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

import Screen from '../components/Screen';
import Text from '../components/Text';
import Quote from '../components/Quote';
import { Quotes } from '../config/constants';
import { RealTimeQuotesContext } from '../context/Quotes/context';
import colors from '../config/colors';

const RealTimeQuotes: FC = () => {
  const context = useContext(RealTimeQuotesContext);
  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - 20);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const client = io('https://qrtm1.ifxdb.com:8443/', { forceNew: true });

    client.on('connect', () => {
      client.emit('subscribe', [Object.values(Quotes)]);
      setConnected(true);
    });

    client.on('quotes', (data) => {
      context.setData(data.msg);
    });

    return () => {
      client.on('connect', () => {
        client.emit('unsubscribe', [Object.values(Quotes)]);
        setConnected(false);
      });
    };
  }, []);

  useEffect(() => {
    const update = () => {
      const width = Dimensions.get('window').width - 20;
      setDeviceWidth(width);
    };

    const subscription = Dimensions.addEventListener('change', update);

    return () => {
      subscription.remove();
    };
  });

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.tableName}>
          <Text
            style={{
              ...styles.common,
              ...styles.bold,
              width: deviceWidth * 0.24 - 10,
              marginLeft: 5,
              textAlign: 'left',
            }}
          >
            Pair
          </Text>
          <Text style={{ ...styles.common, ...styles.bold, width: deviceWidth * 0.25 - 10 }}> Bid </Text>
          <Text style={{ ...styles.common, ...styles.bold, width: deviceWidth * 0.25 - 10 }}> Change </Text>
          <Text style={{ ...styles.common, ...styles.bold, width: deviceWidth * 0.21 - 10 }}> % </Text>
        </View>
        {!connected && <Text style={styles.loading}>Loading...</Text>}
        <ScrollView>
          <Quote currency={context.GOLD} deviceWidth={deviceWidth} />
          <Quote currency={context.USDRUR} deviceWidth={deviceWidth} />
          <Quote currency={context.EURUSD} deviceWidth={deviceWidth} />
          <Quote currency={context.GBPUSD} deviceWidth={deviceWidth} />
          <Quote currency={context.USDJPY} deviceWidth={deviceWidth} />
          <Quote currency={context.USDCHF} deviceWidth={deviceWidth} />
          <Quote currency={context.USDCAD} deviceWidth={deviceWidth} />
          <Quote currency={context.AUDUSD} deviceWidth={deviceWidth} />
          <Quote currency={context.AUDCAD} deviceWidth={deviceWidth} />
          <Quote currency={context.GBPCHF} deviceWidth={deviceWidth} />
          <Quote currency={context.GBPCAD} deviceWidth={deviceWidth} />
          <Quote currency={context.NZDDKK} deviceWidth={deviceWidth} />
          <Quote currency={context.AUDHKD} deviceWidth={deviceWidth} />
        </ScrollView>
      </View>
    </Screen>
  );
};

export default RealTimeQuotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    fontSize: 22,
  },
  tableName: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  common: {
    marginRight: 10,
    textAlign: 'center',
    fontSize: 15,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  arrows: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    fontSize: 30,
    marginBottom: 20,
  },
});
