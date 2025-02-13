import { Text, View, StyleSheet } from "react-native";
import WeaponsCard from "./components/WeaponsCard/WeaponsCard";
import { IWeaponsData } from "./components/WeaponsCard/WeaponsData";

export default function Index() {

  const ags17: IWeaponsData = {model: 'ags-17', name: 'granatomet', price: 3200, weight: 18}

  return (
    <View style={styles.body}>
      <Text style={styles.textRow}>Weapons</Text>
      <WeaponsCard weapons={ags17}/>
    </View>
  );
}

const styles = StyleSheet.create({body: {
  margin: 0,
  padding: 0,
  backgroundColor: '#dfffb8',
},
 textRow: {
  textAlign:'center',
 }});