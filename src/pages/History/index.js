import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const History = () => {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: 'https://try-mqtt-6d599.web.app/rn/history.html' }}
                style={styles.webView}
            />
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        flex: 1
    },
    webView: {
        flex: 1,
        backgroundColor: 'white',
    }
})
