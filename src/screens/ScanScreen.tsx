import React, {useCallback, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import Camera from '../components/Camera';
// import {useNavigation} from '@react-navigation/native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
const ScanScreen = ({navigation}) => {
  // const navigation = useNavigation();

  // const handleCapture = imageUri => {
  //   // Logic to handle the captured image and navigate to the result screen
  //   navigation.navigate('ResultScreen', {imageUri});
  // };

  const cameraRef = useRef<Camera>(null);

  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();

  const checkPermission = useCallback(async () => {
    const status = await requestPermission();
    console.log('Camera permission status:', status);
  }, [requestPermission]);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  const takePhoto = useCallback(async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePhoto();
        console.log('Photo taken:', photo);
        // You can add logic to handle the photo, e.g., navigate to another screen
        navigation.navigate('MediaPage', {
          path: photo.path,
          type: 'photo',
        });
      } catch (error) {
        console.error('Failed to take photo:', error);
      }
    }
  }, [navigation]);

  if (!hasPermission) {
    return <Text>No camera permission</Text>;
  }

  if (!device) {
    return <Text>No camera device</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        device={device}
        isActive={true}
        photo={true}
      />
      <TouchableOpacity style={styles.cameraButton} onPress={takePhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  cameraButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'skyblue',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
});

export default ScanScreen;
