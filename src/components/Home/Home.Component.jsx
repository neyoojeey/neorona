import React from 'react';
import { IonText, IonRouterLink } from '@ionic/react';

import CountrySelector from '../CountrySelector/CountrySelector.Component';

const HomeContent = props => {
    return (
        <div className='container ion-margin-top'>
            <h1 className='ion-text-center'>Welcome to Corona Stats</h1>
            <IonText color='dark'>
                The stats showed below are based on{' '}
                <IonRouterLink
                    href='https://github.com/mathdroid/covid-19-api'
                    target='_blank'
                    color='primary'>
                    https://github.com/mathdroid/covid-19-api
                </IonRouterLink>
            </IonText>
            <CountrySelector url='https://covid19.mathdro.id/api/countries/'></CountrySelector>
        </div>
    );
};

export default HomeContent;
