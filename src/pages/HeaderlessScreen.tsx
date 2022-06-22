import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Headerless'>;

export default function HeaderlessScreen({navigation}: Props) {
  return (
    <View>
      <Text>no header</Text>
      <Button onPress={() => navigation.pop()} title="뒤로가기" />
    </View>
  );
}
