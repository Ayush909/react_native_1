import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {ScanResult} from '../types';

// interface ResultScreenProps {
//   route: {
//     params: {
//       result: ScanResult;
//     };
//   };
// }

const ResultScreen = () => {
  // const {result} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receipt Results</Text>
      {/* <View style={styles.table}>
        {result.items.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.quantity}</Text>
            <Text style={styles.cell}>${item.price.toFixed(2)}</Text>
          </View>
        ))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default ResultScreen;
