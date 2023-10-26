import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function PokeFullScreen(props) {
  return(props.trigger) ? (
    <View style={styles.pokemonPopup}>

        </View>
  ) : "";
}

const styles = StyleSheet.create({
  pokemonPopup: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: '#373737',
  },
});
