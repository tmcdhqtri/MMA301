import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps';
export default function App() {
  let location = {
    latitude: 23.259933,
    longitude: 77.412613,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
  }
  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        mapType="hybrid"
        region={location}>
          <Marker coordinate={{ latitude: 23.259933, longitude: 77.412613 }} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
