import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { AppLogo } from '../../../assets'

const HomeHeader = () => {
    return (
        <View style={styles.profileContainer}>
            <View>
                <Text style={styles.appName}>MQSink</Text>
                <Text style={styles.desc}>Water Availability Monitoring with MQTT</Text>
            </View>
            <View>
                <Image source={AppLogo} style={styles.logo} />
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor: 'white'
    },
    logo: {
        height: 60,
        width: 60
    },
    appName: {
        fontSize: 22,
        fontFamily: 'Montserrat-Medium',
        color: '#020202'
    },
    desc: {
        fontSize: 14,
        fontFamily: 'Montserrat-Light',
        color: '#8D92A3',
        maxWidth: 204
    }
})
