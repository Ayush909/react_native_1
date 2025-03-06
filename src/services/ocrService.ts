import Tesseract from 'tesseract.js';

export const performOCR = async (imageUri: string): Promise<string> => {
    try {
        const { data: { text } } = await Tesseract.recognize(
            imageUri,
            'eng',
            {
                logger: info => console.log(info) // Optional: log progress
            }
        );
        return text;
    } catch (error) {
        console.error("Error during OCR processing:", error);
        throw new Error("OCR processing failed");
    }
};