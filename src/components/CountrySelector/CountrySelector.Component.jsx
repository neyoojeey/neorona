import React, { useState } from "react";
import {
    IonLabel,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonSpinner,
    IonGrid,
    IonRow,
    IonCol
} from "@ionic/react";

import useCountries from "../../utils/useCountries";
import Stats from "../Stats/Stats.Component";

const CountrySelector = ({ url }) => {
    const { stats: countries, loading, error } = useCountries(url);
    const [selectedCountry, setSelectedCountry] = useState("PHL");

    console.log(countries);
    if (loading) return <IonSpinner></IonSpinner>;
    if (error) return <p>Error...</p>;

    return (
        <>
            <IonGrid class='ion-margin-top'>
                <IonRow class='ion-align-items-end'>
                    <IonCol>
                        <h6 className='m-0'>
                            Currently showing: {selectedCountry}
                        </h6>
                    </IonCol>
                    <IonCol>
                        <IonItem>
                            <IonLabel>Select Country</IonLabel>
                            <IonSelect
                                value={selectedCountry}
                                placeholder='Select One'
                                onIonChange={e =>
                                    setSelectedCountry(e.detail.value)
                                }>
                                {countries.countries.length > 0 ? (
                                    countries.countries.map(
                                        (country, index) => (
                                            <IonSelectOption
                                                selected={
                                                    selectedCountry ===
                                                    country.iso3
                                                }
                                                key={index}
                                                value={country.iso3}>
                                                {country.name}
                                            </IonSelectOption>
                                        )
                                    )
                                ) : (
                                    <IonSpinner></IonSpinner>
                                )}
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <Stats
                url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
        </>
    );
};

export default CountrySelector;
