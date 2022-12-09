import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/SuccessStyle';

const SuccessScreen: React.FC = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.firstText}>You’re all set!</Text>

      <Text style={styles.secondText}>
        You can now start exploring the app or choose your benefits.
      </Text>
    </View>
  );
};

export default SuccessScreen;
