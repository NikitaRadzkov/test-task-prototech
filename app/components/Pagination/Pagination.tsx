import { TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { IQuote } from '../../types/data';
import Text from '../Text';
import colors from '../../config/colors';
import styles from './styles';

interface IPagination {
  loading: boolean;
  totalQuotes: IQuote[];
  currentPage: number;
  quotesPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setQuotesPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: FC<IPagination> = (props) => {
  const { loading, totalQuotes, quotesPerPage, setCurrentPage, setQuotesPerPage } = props;

  const handleLeft = () => {
    if (quotesPerPage !== 10) {
      setQuotesPerPage(quotesPerPage - 10);
      setCurrentPage(props.currentPage--);
    }
  };

  const handleRight = () => {
    const total = totalQuotes.length;
    const lastDigitNum = Number(String(total).slice(-1));
    const allPages = Math.ceil(total / 10);

    if (props.currentPage < allPages) {
      setCurrentPage(props.currentPage++);
    }

    if (quotesPerPage < total - lastDigitNum) {
      setQuotesPerPage(quotesPerPage + 10);
    } else {
      setQuotesPerPage(total);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={loading} onPress={handleLeft}>
        <MaterialCommunityIcons style={styles.icon} name="arrow-left-drop-circle" size={40} color={colors.black} />
      </TouchableOpacity>
      <Text style={styles.text}>{`${loading ? 0 : quotesPerPage} of ${totalQuotes.length}`}</Text>
      <TouchableOpacity disabled={loading} onPress={handleRight}>
        <MaterialCommunityIcons style={styles.icon} name="arrow-right-drop-circle" size={40} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
