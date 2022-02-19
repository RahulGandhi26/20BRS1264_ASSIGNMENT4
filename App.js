import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabs from './components/BottomTabs';
import Header from './components/Top';
import ListProtfolio from './components/ListProtfolio';
import MyStocks from './components/MyStocks';
import Summary from './components/Summary';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Summary/>
      <ListProtfolio/>
      <MyStocks/>
      <BottomTabs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFFFF0',
    paddingTop:20
  },
});