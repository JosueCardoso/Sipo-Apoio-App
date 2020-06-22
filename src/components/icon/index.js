import React from 'react';
import { View, TouchableOpacity,StyleSheet, StatusBar } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Container, Text } from './styles';

const icon = ({text, icon}) => {
  return (
    <Container style={styles.shadowContainerStyle}>  
      <SvgXml xml={icon} width="50%" height="50%" />
        <Text>{text}</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  shadowContainerStyle: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  } 
})

export default icon;