import React from 'react';
import {View, Button} from 'react-native';

import type {RootStackParamList} from '../../App';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen(props: Props) {
  const {navigation} = props;
  return (
    <View>
      <Button title="Detail 열기" />
    </View>
  );
}
