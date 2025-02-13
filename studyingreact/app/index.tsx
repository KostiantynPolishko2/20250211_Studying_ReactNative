import { Text, View, StyleSheet } from "react-native";
import WeaponsCard from "./components/WeaponsCard/WeaponsCard";

export default function Index() {
  return (
    <View style={styles.body}>
      <Text style={styles.textRow}>Weapons</Text>
      <WeaponsCard model="AGS-17"/>
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