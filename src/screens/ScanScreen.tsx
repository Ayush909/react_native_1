import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Camera from '../components/Camera';
// import {useNavigation} from '@react-navigation/native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
const ScanScreen = () => {
  // const navigation = useNavigation();

  // const handleCapture = imageUri => {
  //   // Logic to handle the captured image and navigate to the result screen
  //   navigation.navigate('ResultScreen', {imageUri});
  // };

  const device = useCameraDevice('back');
  const hasPermission = useCameraPermission();

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    const status = await Camera.requestCameraPermission();
    console.log('Camera permission status:', status);
  };

  if (!hasPermission) {
    return <Text>No camera permission</Text>;
  }

  if (!device) {
    return <Text>No camera device</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Scan your receipt</Text>
      {/* <Camera onCapture={handleCapture} /> */}
      <Camera
        style={{flex: 1, width: '100%'}}
        device={device}
        isActive={true}
      />
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
