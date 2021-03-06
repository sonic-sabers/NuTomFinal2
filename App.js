import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Formscreen from './screens/Formscreen';
import Detailsscreen from './screens/Detailsscreen';


function info({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"  options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Formscreen"  options={{ headerShown: false }} component={Formscreen} />
        <Stack.Screen name="Detailsscreen"  options={{ headerShown: false }} component={Detailsscreen} />
        <Stack.Screen name="info" component={info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
