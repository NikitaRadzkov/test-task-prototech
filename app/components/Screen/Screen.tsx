import { SafeAreaView, View } from 'react-native';
import React, { FC } from 'react';

import styles from './styles';

interface IScreen {
  children: JSX.Element;
  style: Record<string, unknown>;
}

const Screen: FC<IScreen> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;
