import { Text, FlatList, StyleSheet} from 'react-native'

export default  function PokemonList({pokemones}) {
  return (
        <FlatList
            data={pokemones}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Text>{item.name}</Text>}
            contentContainerStyle={styles.FlatListContentContainer}
        />
  )
}

const styles = StyleSheet.create({
  FlatListContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})