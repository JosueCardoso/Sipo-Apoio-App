import React from 'react';

import { translate } from '../../locales'

import { Container, ContainerTabs, ContainerHeader, ContainerBackButton, TitleScreen, BackButton } from './styles';

const phraseGuide = ({ navigation }) => {
  return (
      <Container>
          <ContainerHeader>
            <ContainerBackButton onPress={() => navigation.navigate('home')}>
              <BackButton>{translate('toBack')}</BackButton>
            </ContainerBackButton>
            <TitleScreen>{translate('phraseGuideMenu')}</TitleScreen>
          </ContainerHeader>
          
          <ContainerTabs>

          </ContainerTabs>
      </Container>
  );
}

export default phraseGuide;