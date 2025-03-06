import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../types'; // Adjust the import path as necessary

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receipt Scanner</Text>
      <Button
        title="Scan Receipt"
        onPress={() => navigation.navigate('Scan')}
      />
      <View style={{marginTop: 10}}>
        <Button
          title="View Results"
          onPress={() => navigation.navigate('Results')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
