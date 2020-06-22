import React from 'react';

import { Container, ContainerPhrase, OriginalText, TranslatedText, Title } from './styles';//TODO: estilizar os componentes

const swapGuide = ({phrases, title}) => {    
    let elements = []
    let maxCount = phrases.pt_br.length > phrases.ht_hat.length ? phrases.ht_hat.length : phrases.pt_br.length;//Deverá sempre escolher como contador o menor tamanho do array

    for(let i = 0; i < maxCount; i++){
        elements.push(
            <ContainerPhrase key={"container" + i}>
                <OriginalText key={"original" + i}>{phrases.pt_br[i]}</OriginalText>
                <TranslatedText key={"translated" + i}>{phrases.ht_hat[i]}</TranslatedText>
            </ContainerPhrase>
        );
    }

  return (
     <Container>
        <Title>{title}</Title>
       {elements}
     </Container>
  );
}

export default swapGuide;