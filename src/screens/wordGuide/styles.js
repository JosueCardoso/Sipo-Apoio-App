import styled from 'styled-components/native';

export const Container = styled.View`
    height: 100%;
    width: 100%;
    background-color: #D21034;  
    margin-top: 30px;
`;

export const ContainerHeader = styled.View`
    flex-direction: row;
`;

export const TitleScreen = styled.Text`
    align-self: center;    
    margin-top: 30px;
    color:#FFF;
    font-size: 24px;
    width: 60%;
    text-align:center;
`;

export const ContainerBackButton = styled.TouchableOpacity`    
    width: 20%;
`;

export const BackButton = styled.Text`
    align-self: center;    
    margin-top: 40px;
    color:#FFF;
    font-size: 18px;
    text-align:center;    
`;
