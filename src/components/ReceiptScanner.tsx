import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import Camera from './Camera';
import ocrService from '../services/ocrService';
import ResultTable from './ResultTable';

const ReceiptScanner = () => {
    const [imageUri, setImageUri] = useState(null);
    const [scanResult, setScanResult] = useState(null);

    const handleImageCapture = (uri) => {
        setImageUri(uri);
        processImage(uri);
    };

    const processImage = async (uri) => {
        try {
            const result = await ocrService.extractText(uri);
            setScanResult(result);
        } catch (error) {
            console.error('Error processing image:', error);
        }
    };

    return (
        <View style={styles.container}>
            {!imageUri ? (
                <Camera onImageCaptured={handleImageCapture} />
            ) : (
                <>
                    <Image source={{ uri: imageUri }} style={styles.image} />
                    {scanResult && <ResultTable data={scanResult} />}
                    <Button title="Retake Photo" onPress={() => setImageUri(null)} />
                </>
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
    image: {
        width: '100%',
        height: 300,
        marginVertical: 20,
    },
});

export default ReceiptScanner;