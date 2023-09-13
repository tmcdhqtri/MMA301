import { View, Text } from 'react-native';

export default function Footer() {
  return (
    <View style={{ flex: 0.06, backgroundColor: '#F4CE14', marginBottom: 10 }}>
      <Text
        style={{
          padding: 10,
          fontSize: 18,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}
