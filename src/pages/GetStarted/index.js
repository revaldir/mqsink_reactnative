import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Onboarding } from '../../components'

const GetStarted = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Onboarding />
            <View style={{ paddingVertical: 24 }}>
                <Button text="Get Started" onPress={() => navigation.replace('SignIn')} />
            </View>
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})
