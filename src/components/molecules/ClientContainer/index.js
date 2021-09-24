import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { ILWater } from '../../../assets';

const ClientContainer = ({clientData, name, dbRef}) => {
    return (
        <View style={styles.container}>
            <Image source={ILWater} style={styles.logo} />
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{clientData}%</Text>
                <Progress.Bar progress={clientData/100} />
            </View>
        </View>
    )
}

export default ClientContainer

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 4,
        // margin: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 21,
    },
    info: {flex: 1, marginLeft: 16},
    name: {
        fontSize: 22,
        fontFamily: 'Montserrat-Medium',
        color: '#8D92A3',
    },
    desc: {
        fontSize: 22,
        fontFamily: 'Montserrat-Medium',
        color: '#020202',
        paddingBottom: 8
    },
    logo: {
        width: 60,
        height: 60
    },
    chartTitle: {
        fontSize: 16,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        color: '#8D92A3'
    }
})
