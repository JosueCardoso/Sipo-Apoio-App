import React from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';

const swapOnboarding = ({title}) => {
  return (
    <Container>
        <Text>{title}</Text>
    </Container>
  );
}

export default swapOnboarding;