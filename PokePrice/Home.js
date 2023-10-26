import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import PokeFullScreen from './PokeFullScreen';


export default function Home() {

  const[pokemon, setPokemon] = useState([
    {image: require('./assets/pokemontestpics/CharizardVMAX.jpg'), name: 'Charizard VMAX', rarity: '020/189 / Ultra Rare', marketPrice: '$397.09', key: '1'},
    {image: require('./assets/pokemontestpics/VenusaurEX.jpg'), name: 'Venusaur EX', rarity: 'XY123 / Promo', marketPrice: '$64.94', key: '2'},
    {image: require('./assets/pokemontestpics/BlastoiseEX.jpg'), name: 'Blastoise EX', rarity: 'XY122 / Promo', marketPrice: '$55.23', key: '3'},
    {image: require('./assets/pokemontestpics/Heracross.jpg'), name: 'Heracross', rarity: '194/193 / Illustration Rare', marketPrice: '$5.82', key: '4'},
    {image: require('./assets/pokemontestpics/MRayquazaEX(ShinyFullArt).jpg'), name: 'M Rayquaza EX', rarity: '98/98 / Ultra Rare', marketPrice: '$153.20', key: '5'},
    {image: require('./assets/pokemontestpics/DialgaEX(122SecretRare).jpg'), name: 'Dialga EX', rarity: '122/119 / Secret Rare', marketPrice: '$183.21', key: '6'},
    {image: require('./assets/pokemontestpics/Pikachu(FullArt).jpg'), name: 'Pikachu', rarity: 'RC29/RC32 / Ultra Rare', marketPrice: '$24.71', key: '7'},
    {image: require('./assets/pokemontestpics/ArceusLVX.jpg'), name: 'Arceus LV.X', rarity: 'DP53 / Promo', marketPrice: '$26.39', key: '8'},
    {image: require('./assets/pokemontestpics/MewtwoEX(164SecretFullArt).jpg'), name: 'Mewtwo EX', rarity: '164/162 / Secret Rare', marketPrice: '$56.96', key: '9'},
  ])
  
  const [search, setSearch] = useState('');
  const [pokemonPop, setPokemonPop] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.overall}>
        <Text style={styles.text}>Collection Total</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search} 
          placeholder="Search!"
          onChangeText={newSearch => setSearch(newSearch)}
          defaultValue={search}/>
      <ScrollView contentContainerStyle={styles.searchResults}>

        {pokemon.filter((item) => {
            return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search) || item.name.includes(search);
          }).map((item)=>{
          return(
            <View
              style={styles.listView} key={item.key}>
            <Image style={styles.images} source={item.image}/> 
              <View style={styles.infoView}>
                <View style={styles.textView}>
                <View style={styles.xTextView}>
                  <Text style={styles.resultText}>{item.name}</Text>
                  </View>
                  <View style={styles.xTextView}>
                  <Button style={styles.resultText} onClick={()=> setPokemonPop(true)} title="open"></Button>
                  </View>
                </View> 
                <View style={styles.textView}>
                  <View style={styles.xTextView}>
                  <Text style={styles.resultText}>{item.rarity}</Text>
                  </View>
                  <View style={styles.xTextView}>
                  <Text style={styles.resultText}>{item.marketPrice}</Text>
                  </View>   
                </View>  
              </View>  
            </View>
            
          )
        })}
        </ScrollView>
      </View>
      <PokeFullScreen trigger={pokemonPop}>
          
      </PokeFullScreen>  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373737',
    overflow: 'scroll',
  },
  overall: {
    flex: 0.75,
    borderColor: "#4E4E4E",
    borderWidth: 6,
    margin: 10,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 50,
    color: "#B3B3B3",
  },
  searchContainer: {
    flex: 4,
    borderColor: "#4E4E4E",
    borderWidth: 6,
    margin: 10,
    justifyContent: 'flex-start',
    borderRadius: 10,
    overflow: 'scroll',
  },
  search: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "#4E4E4E",
    margin: 10,
    borderRadius: 10,
    minHeight: 50,
    maxHeight: 50,
    fontSize: 25,
    color: "#B3B3B3",
    flex: 1,
    flexWrap: 'wrap',
    padding: 5,
  },
  searchResults: {
    flex: 10,
    borderRadius: 10,
    overflow: 'scroll',
  },
  listView: {
    borderColor: "#4E4E4E",
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
    borderWidth: 2,
    height: 100,
  }, 
  images: {
    flex: 1,
    width: 65,
    height: 90,
    margin: 5,
    borderWidth: 3,
    borderColor: '#4E4E4E',
  },
  infoView: {
    flex: 4.5,
    borderColor: "#4E4E4E",
    borderWidth: 2,
    height: 100,
  },
  textView: {
    flex: 1,
    borderColor: "#4E4E4E",
    borderWidth: 2,
    height: 50,
    flexDirection: 'row',
    margin: 2,
  },
  xTextView: {
    flex: 1,
    borderColor: "#4E4E4E",
    borderWidth: 2,
    margin: 2,
    numberOfLines: 1,
    adjustsFontSizeToFit: true,
    alignItems: 'center',
    justifyContent: 'center',


  },    
  resultText: {
    fontSize: 20,
    color: "#B3B3B3",
    flex: 1,
    margin: 2,
    
  },
});
