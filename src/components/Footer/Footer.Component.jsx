import React from 'react';
import { IonFooter, IonToolbar, IonText, IonRouterLink } from '@ionic/react';

const Footer = () => {
    return (
        <IonFooter className='ion-no-border'>
            <IonToolbar class='ion-text-center'>
                <div className='container'>
                    <IonText>
                        Handcrafted by{' '}
                        <IonRouterLink
                            href='https://neyoojeey.github.io/neojayandong/'
                            target='_blank'
                            color='primary'>
                            Neo Jay Andong
                        </IonRouterLink>
                    </IonText>
                </div>
            </IonToolbar>
        </IonFooter>
    );
};

export default Footer;
