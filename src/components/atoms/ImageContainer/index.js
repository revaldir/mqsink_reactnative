import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const ImageContainer = ({image}) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.img} />
        </View>
    )
}

export default ImageContainer

const styles = StyleSheet.create({
    container: {
        width: 200, 
        backgroundColor: 'white', 
        borderRadius: 8, 
        shadowColor: 'black', 
        shadowOffset: {width: 0, height: 7}, 
        shadowOpacity: 0.5, 
        shadowRadius: 10, 
        elevation: 14, 
        overflow: 'hidden', 
        marginRight: 24
    },
    img: {
        width: 200,
        height: 140,
        resizeMode: 'cover'
    }
})
