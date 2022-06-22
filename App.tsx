import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/pages/HomeScreen';
import DetailScreen from './src/pages/DetailScreen';
import HeaderlessScreen from './src/pages/HeaderlessScreen';

export type RootStackParamList = {
  Home: undefined;
  Detail: {id: number} | undefined;
  Headerless: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: '홈',
              headerStyle: {
                backgroundColor: '#29b6f6',
              },
              headerTintColor: '#FFFFFF',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
          {/* if you want to throw params in title, you must to use function returning object  */}
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={({route}) => ({
              title: `상세 정보 - ${route.params?.id}`,
              headerBackVisible: false, // android 화살표 제거
              headerLeft: ({onPress}: any) => (
                <TouchableOpacity onPress={onPress}>
                  <Text>Left</Text>
                </TouchableOpacity>
              ),
              headerTitle: ({children}) => (
                <View>
                  <Text>{children}</Text>
                </View>
              ),
              headerRight: () => (
                <View>
                  <Text>Right</Text>
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="Headerless"
            component={HeaderlessScreen}
            options={{
              headerShown: false, // 헤더 제거
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
});

export default App;
