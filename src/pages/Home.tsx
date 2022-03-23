import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';

import './Home.css';
import HomeContent from '../components/Home/Home.Component';
import Footer from '../components/Footer/Footer.Component';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <div className='container'>
                        <IonTitle>Corona Stats 2022</IonTitle>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-margin-top'>
                <IonHeader collapse='condense'></IonHeader>
                <HomeContent></HomeContent>
            </IonContent>
            <Footer></Footer>
        </IonPage>
    );
};

export default Home;
