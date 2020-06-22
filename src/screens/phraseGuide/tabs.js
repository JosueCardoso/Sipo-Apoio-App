import React from 'react';

import { translate } from '../../locales'
import SwapGuide from '../../components/swapGuide'
import { SalutationPhrases, TransportPhrases, LocationPhrases, AirportAndBusStationPhrases, InHotelPhrases } from './phrases'

export const Salutation = () => { 
    return <SwapGuide phrases={SalutationPhrases} title={translate('toBack')}/>//TODO: Adicionar um título de verdade
};

export const Transport = () => { 
    return <SwapGuide phrases={TransportPhrases} title={translate('toBack')}/>
};

export const Location = () => { 
    return <SwapGuide phrases={LocationPhrases} title={translate('toBack')}/>
};

export const AirportAndBusStation = () => { 
    return <SwapGuide phrases={AirportAndBusStationPhrases} title={translate('toBack')}/>
};

export const InHotel = () => { 
    return <SwapGuide phrases={InHotelPhrases} title={translate('toBack')}/>
};