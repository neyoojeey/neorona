import React from "react";
import {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonText,
    IonSpinner
} from "@ionic/react";
import moment from "moment";

import useStats from "../../utils/useStats";
import { numberWithCommas } from "../../helpers/helpers";

const Stats = ({ url }) => {
    const { stats, loading, error } = useStats(url);
    if (loading) return <IonSpinner></IonSpinner>;
    if (error) return <p>Error...</p>;
    return (
        <IonGrid className='ion-margin-top'>
            <IonRow>
                <IonCol>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle class='ion-text-center'>
                                Confirmed
                            </IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent class='ion-text-center'>
                            <IonText color='primary'>
                                <h1>
                                    {numberWithCommas(stats.confirmed.value)}
                                </h1>
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
                <IonCol>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle class='ion-text-center'>
                                Recovered
                            </IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent class='ion-text-center'>
                            <IonText color='primary'>
                                <h1>
                                    {numberWithCommas(stats.recovered.value)}
                                </h1>
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
                <IonCol>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle class='ion-text-center'>
                                Death
                            </IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent class='ion-text-center'>
                            <IonText color='primary'>
                                <h1>{numberWithCommas(stats.deaths.value)}</h1>
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
            <IonText class='font-italic small'>
                Last updated {moment(stats.lastUpdated).fromNow()}.
            </IonText>
        </IonGrid>
    );
};

export default Stats;
