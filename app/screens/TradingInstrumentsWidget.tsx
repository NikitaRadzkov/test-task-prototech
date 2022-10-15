import { FlatList, NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';

import colors from '../config/colors';
import Screen from '../components/Screen';
import TextInput from '../components/TextInput';
import { IQuote } from '../types/data';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItem from '../components/lists/ListItem';
import Pagination from '../components/Pagination';
import Text from '../components/Text';

const TradingInstrumentsWidget: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [quotesList, setQuotesList] = useState<IQuote[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [quotesPerPage, setQuotesPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  const indexOfLastQuote = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
  const currentQuotes = quotesList.slice(indexOfFirstQuote, indexOfLastQuote).filter((val) => {
    if (inputValue === '') {
      return val;
    } else if (val.symbol.toLowerCase().includes(inputValue.toLowerCase())) {
      return val;
    }
  });

  useEffect(() => {
    fetch('https://quotes.instaforex.com/api/quotesList')
      .then((response) => response.json())
      .then((json) => {
        setQuotesList(json.quotesList);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    setInputValue(e.nativeEvent.text);
  };

  return (
    <Screen style={styles.screen}>
      <TextInput icon="magnify" placeholder="Search Trading Instrument" value={inputValue} onChange={handleChange} />
      <>{loading && <Text style={styles.loading}>Loading...</Text>}</>
      <FlatList
        data={currentQuotes}
        keyExtractor={(quote) => quote.symbol}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => <ListItem symbol={item.symbol} />}
      />
      <Pagination
        loading={loading}
        totalQuotes={quotesList}
        currentPage={currentPage}
        quotesPerPage={quotesPerPage}
        setCurrentPage={setCurrentPage}
        setQuotesPerPage={setQuotesPerPage}
      />
    </Screen>
  );
};

export default TradingInstrumentsWidget;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
  loading: {
    fontSize: 30,
    margin: 10,
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  button: {
    marginTop: 10,
    fontSize: 22,
  },
});
