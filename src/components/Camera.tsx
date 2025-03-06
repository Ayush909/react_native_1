import React, {useState} from 'react';
import {View, Button, Image, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
// import {processImage} from '../utils/imageProcessing';
import {extractText} from '../services/ocrService';

const Camera = ({onImageCaptured}) => {
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const handleCapture = async () => {
    if (isCameraReady) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      setCapturedImage(data.uri);
      const text = await extractText(data.base64);
      onImageCaptured(text);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        onCameraReady={() => setIsCameraReady(true)}
      />
      <Button title="Capture" onPress={handleCapture} />
      {capturedImage && (
        <Image source={{uri: capturedImage}} style={styles.capturedImage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    width: '100%',
    height: '100%',
  },
  capturedImage: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default Camera;
