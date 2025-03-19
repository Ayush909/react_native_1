import {Image, View, NativeModules, TouchableOpacity, Text} from 'react-native';
import React, {useMemo} from 'react';

export default function MediaPage({route}): React.ReactElement {
  const {path, type} = route.params;

  const source = useMemo(() => ({uri: `file://${path}`}), [path]);

  const {RNTesseractOcrModule} = NativeModules;

  const recognizeText = async imagePath => {
    try {
      const recognizedText = await RNTesseractOcrModule.recognize(
        `file://${path}`,
        rT => {
          console.log('Recognized Text:', rT);
        },
      );
      console.log(recognizedText);
    } catch (error) {
      console.error('Error recognizing text:', error);
    }
  };

  return (
    <View>
      {type === 'photo' && (
        <View>
          <Image
            source={source}
            style={{width: '90%', height: 500}}
            resizeMode="cover"
          />

          <TouchableOpacity onPress={() => recognizeText(source)}>
            <Text>OCR</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
