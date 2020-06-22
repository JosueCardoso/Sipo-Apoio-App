import React, { Component } from 'react'
import { ScrollView, StatusBar } from 'react-native';

import { translate } from '../../locales'
import MenuFactory from '../../helper/menu'
import Icon from '../../components/icon'

import {Container, Circle, ContainerRight, ContainerLeft} from './styles'

export default class index extends Component {
    render() {   
        let elementsLeft = []
        let elementsRight = []
        
        for(let i = 0; i < MenuFactory.length; i++){
            if(i % 2 == 0){
                elementsRight.push(<Icon key={MenuFactory[i].id} text={translate(MenuFactory[i].text)} icon={MenuFactory[i].icon}/>)
            }else{
                elementsLeft.push(<Icon key={MenuFactory[i].id} text={translate(MenuFactory[i].text)} icon={MenuFactory[i].icon}/>)
            }                
        }

        return (    
            <>  
                <StatusBar translucent backgroundColor="transparent" barStyle="default"/>
                <Circle firstCircle={true}/>      
                <Circle firstCircle={false}/>      
                <ScrollView>                    
                    <Container>                                  
                        <ContainerRight>
                            {elementsRight}  
                        </ContainerRight>
            
                        <ContainerLeft>
                           {elementsLeft}
                        </ContainerLeft>
                    </Container>
                </ScrollView>   
            </>
        )
    }
}