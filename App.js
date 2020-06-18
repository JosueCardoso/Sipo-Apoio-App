import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Image
} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const App = () => {
  return (
    
        <Onboarding
          pages={[
            {
              backgroundColor: '#000',
              title: 'Page one',
              image:<Image source={require('./src/assets/images/img1.jpg')}/>,
              subtitle: 'this is a page one'
            },
            {
              backgroundColor: '#000',
              title: 'Page two',
              image:<Image source={require('./src/assets/images/img2.jpg')}/>,
              subtitle: 'this is a page two'
            } 
          ]}
        />
     
  );
};

export default App;
