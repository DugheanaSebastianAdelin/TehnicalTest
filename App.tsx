import FormScreen from './src/screens/FormScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SuccessScreen from './src/screens/SuccessScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'FormScreen'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="FormScreen" component={FormScreen} />
          <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
