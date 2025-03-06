import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Camera from '../components/Camera';
// import {useNavigation} from '@react-navigation/native';

const ScanScreen = () => {
  // const navigation = useNavigation();

  // const handleCapture = imageUri => {
  //   // Logic to handle the captured image and navigate to the result screen
  //   navigation.navigate('ResultScreen', {imageUri});
  // };

  return (
    <View style={styles.container}>
      <Text>Scan your receipt</Text>
      {/* <Camera onCapture={handleCapture} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScanScreen;
