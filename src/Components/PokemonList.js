import { ActivityIndicator, FlatList, StyleSheet, Platform} from 'react-native'
import PokemonCard from './PokemonCard'

export default  function PokemonList({pokemones, loadPokemones, isNext}) {

  const LoadMorePokemons = () => {
    loadPokemones()
  }
  return (
        <FlatList
            data={pokemones}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.FlatListContentContainer}
            onEndReached={isNext && LoadMorePokemons} 
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              isNext && (
                <ActivityIndicator
                  size="large"
                  style={styles.spinner}
                  color="#AEAEAE"
                />
              )
            }
        />
  )
}

const styles = StyleSheet.create({
  FlatListContentContainer: {
    paddingHorizontal: 10,
    marginTop: Platform.OS === 'android' ? 20 : 0
  },
  spinner:{
    marginTop: 20,
    marginBottom: Platform.OS === 'android' ? 90 : 60
  }
})