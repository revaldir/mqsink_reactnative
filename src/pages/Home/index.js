import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View, Dimensions } from 'react-native'
import { ClientContainer, HomeHeader, HomeTabSection } from '../../components'
import { Fire } from '../../config';
import { showError } from '../../utils';
import {LineChart} from "react-native-chart-kit";
import { useDispatch } from 'react-redux';

const Home = () => {
    const [dataClient1, setDataClient1] = useState('');
    const [dataClient2, setDataClient2] = useState('');
    const [dataClient3, setDataClient3] = useState('');
    const [dataClient4, setDataClient4] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    // useEffect(() => {
    //     getFirstClient();
    //     getSecondClient();
    //     getThirdClient();
    //     getFourthClient();

    //     // const hour = new Date().getHours();
    //     // const min = new Date().getMinutes();
    //     // const sec = new Date().getSeconds();

    //     // setCurrentTime(hour + ':' + min + ':' + sec);
    // }, []);

    useEffect(() => {
        const valueChangeC1 = Fire.database().ref('client1/vol').on('value', snapshot => {
            if (snapshot.val()) {
                setDataClient1(snapshot.val())
            }
        });

        return () => Fire.database().ref('client1/vol').off('value', valueChangeC1);
    }, []);

    useEffect(() => {
        const valueChangeC2 = Fire.database().ref('client2/vol').on('value', snapshot => {
            if (snapshot.val()) {
                setDataClient2(snapshot.val())
            }
        });

        return () => Fire.database().ref('client2/vol').off('value', valueChangeC2);
    }, []);

    useEffect(() => {
        const valueChangeC3 = Fire.database().ref('client3/vol').on('value', snapshot => {
            if (snapshot.val()) {
                setDataClient3(snapshot.val())
            }
        });

        return () => Fire.database().ref('client3/vol').off('value', valueChangeC3);
    }, []);

    useEffect(() => {
        const valueChangeC4 = Fire.database().ref('client4/vol').on('value', snapshot => {
            if (snapshot.val()) {
                setDataClient4(snapshot.val())
            }
        });

        return () => Fire.database().ref('client4/vol').off('value', valueChangeC4);
    }, []);

    const getFirstClient = () => {
        Fire.database().ref('client1/vol').on('value', (snap) => {
            if (snap.val()) {
                console.log('data!!', snap.val())
                setDataClient1(snap.val())
            }
        });
    }

    const getSecondClient = () => {
        Fire.database().ref('client2/vol').on('value', (snap) => {
            if (snap.val()) {
                setDataClient2(snap.val())
            }
        });
    }

    const getThirdClient = () => {
        Fire.database().ref('client3/').on('value', (snap) => {
            if (snap.val()) {
                setDataClient3(snap.val())
            }
        });
    }

    const getFourthClient = () => {
        Fire.database().ref('client4/').on('value', (snap) => {
            if (snap.val()) {
                setDataClient4(snap.val())
            }
        });
    }

    return (
        <View style={styles.page}>
            <HomeHeader />
            <View style={styles.container}>
                <ClientContainer name="Client 1" clientData={dataClient1} dbRef="client1" />
                <ClientContainer name="Client 2" clientData={dataClient2} dbRef="client2" />
                <ClientContainer name="Client 3" clientData={dataClient3} dbRef="client3" />
                <ClientContainer name="Client 4" clientData={dataClient4} dbRef="client4" />
            </View>
            {/* <HomeTabSection /> */}
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        // backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        flex: 1,
        justifyContent: 'space-between'
    },
})
