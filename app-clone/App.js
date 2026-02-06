import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>piva</Text>
      <StatusBar style="auto" />
      <Image 
      source={{uri:'https://criticalhits.com.br/anime/jujutsu-kaisen-em-qual-episodio-toji-fushiguro-e-apresentado/'}} 
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
