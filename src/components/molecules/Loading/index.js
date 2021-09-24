import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator size="large" color="#389D86" />
            <Text style={styles.text}>Loading ...</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    wrapper: {flex:1, position: 'absolute', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%'},
    text: {fontSize: 18, color: '#389D86', fontFamily: 'OpenSans-SemiBold', marginTop: 16}
})
