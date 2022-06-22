import React, {useEffect} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

import type {RootStackParamList} from '../../App';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

// navigate 같은 페이지일 경우 이동
// push 스택
export default function DetailScreen(props: Props) {
  const {route, navigation} = props;

  useEffect(() => {
    // little bit slow
    navigation.setOptions({title: `상세 - ${route.params?.id}`});
  }, [navigation]);

  return (
    <View style={styles.block}>
      <Text style={styles.text}>id: {route.params?.id}</Text>
      <View style={styles.buttons}>
        <Button
          title="다음"
          onPress={() => {
            navigation.push('Detail', {id: (route.params?.id as number) + 1});
          }}
        />
        <Button
          title="뒤로가기"
          onPress={() => {
            navigation.pop();
            // 한칸 뒤로
          }}
        />
        <Button
          title="처음으로"
          onPress={() => {
            navigation.popToTop();
            // 스택 맨 밑으로
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: 'row',
  },
});
