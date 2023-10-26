import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Collection from './Collection';
import Settings from './Settings';

const tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
    <tab.Navigator>
      <tab.Screen name="Home" component={Home}/>
      <tab.Screen name="Collection" component={Collection}/>
      <tab.Screen name="Setting" component={Settings}/>
    </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#373737',
  },
});
