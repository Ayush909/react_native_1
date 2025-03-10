export interface ReceiptItem {
  name: string;
  price: number;
  quantity: number;
}

export interface ScanResult {
  items: ReceiptItem[];
  totalAmount: number;
  date: string;
}

export type RootStackParamList = {
  Home: undefined;
  Scan: undefined;
  Results: undefined;
  MediaPage: {path: string; type: 'photo' | 'video'};
};
