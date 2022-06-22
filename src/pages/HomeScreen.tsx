import React from 'react';
import {View, Button} from 'react-native';

import type {RootStackParamList} from '../../App';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen(props: Props) {
  const {navigation} = props;
  return (
    <View>
      <Button
        title="Detail 1 열기"
        onPress={() => {
          navigation.navigate('Detail', {id: 1});
        }}
      />
      <Button
        title="Detail 2 열기"
        onPress={() => {
          navigation.navigate('Detail', {id: 2});
        }}
      />
      <Button
        title="Detail 3 열기"
        onPress={() => {
          navigation.navigate('Detail', {id: 3});
        }}
      />
      <Button
        title="Headerless 열기"
        onPress={() => {
          navigation.push('Headerless');
        }}
      />
    </View>
  );
}
