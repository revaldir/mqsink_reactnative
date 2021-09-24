import React from 'react'
import { ScrollView, StyleSheet, Text, View, useWindowDimensions, Image, Dimensions } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { DummyFood, MQTTPubSub } from '../../assets'
import { AboutTabSection, Button, Gap, Header, ImageContainer } from '../../components'
import { Fire } from '../../config'

const About = ({navigation}) => {
    var {screenWidth} = Dimensions.get("window");
    const screenHeight = Dimensions.get("window").height;
    const signOut = () => {
        console.log('sign out')
        Fire.auth().signOut().then(() => {
            console.log('Signed out!');
            navigation.replace('SignIn');
        }).catch(err => {
            showMessage({
                message: err.message,
                type: 'danger'
            })
        })
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
            <View style={styles.page}>
                <Header title="About Project" />
                <View style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                        {/* <AboutTabSection /> */}
                        <Text style={styles.text}>
                            Proyek akhir ini membahas tentang pengimplementasian protokol MQTT berbasis cloud dalam sistem monitoring ketersediaan air pada tandon tempat cuci tangan. Dimana untuk memudahkan proses monitoring tersebut, dirancang pula interface sistem berupa halaman website dan aplikasi android untuk memantau ketersediaan air secara realtime.
                        </Text>
                        <Text style={styles.text}>
                            Penggunaan protokol MQTT diharapkan dapat mengurangi besar bandwidth yang digunakan serta besar delay untuk melakukan komunikasi antar client. Dimana pada proyek akhir ini terdiri atas 4 buah client publisher, dengan konfigurasi tertentu, yang bertugas untuk mengambil nilai dari sensor ultrasonik kemudian mengirimkannya ke broker yang terpasang di cloud berdasarkan topik yang berbeda. Kemudian sebuah client subscriber bertugas untuk menerima pesan dari seluruh client dengan masing-masing topik, kemudian menyimpan nilai yang diterima ke Firebase Realtime Database.
                        </Text>
                        <Text style={styles.text}>
                            Penggunaan broker MQTT berbasis cloud memungkinkan masing-masing node client untuk berkomunikasi satu sama lain walaupun berada di tempat yang berjauhan, serta tidak dalam satu jaringan yang sama. Sehingga dapat mencakup wilayah yang lebih luas untuk penempatan masing-masing tandon tempat cuci tangan.
                        </Text>
                    </ScrollView>
                </View>
                <Text style={styles.docText}>Protokol MQTT</Text>
                <Image source={MQTTPubSub} style={{ width: '100%', height: 100 }} resizeMode={'center'} />
                <View style={styles.container}>
                     <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                        {/* <AboutTabSection /> */}
                        <Text style={styles.text}>
                            MQTT (MQ Telemetry Transport) merupakan protokol komunikasi keluaran IBM (International Business Machines) yang berjalan di atas protokol TCP/IP. Pertama kali dikembangkan pada tahun 1999 dan didesain khusus untuk diterapkan pada perangkat dengan sumber daya terbatas. Protokol MQTT bertujuan agar proses komunikasi pada sistem dapat dilakukan dengan menggunakan bandwidth yang kecil serta waktu delay yang rendah.
                        </Text>
                        <Text style={styles.text}>
                            MQTT menerapkan konsep Publish/Subscribe yang terdiri dari perangkat publisher sebagai pengirim serta perangkat subscriber sebagai penerima pesan. Dimana kedua perangkat tersebut, dikenal juga dengan sebutan client, dihubungkan oleh sebuah broker yang berperan untuk menyaring pesan berdasarkan topik tertentu.
                        </Text>
                        <Text style={styles.text}>
                            Dengan penerapan konsep ini, masing-masing client tidak perlu berkenalan langsung dengan client lain, disebut juga space decoupling. Selain itu, masing-masing client tidak harus berjalan dalam waktu bersamaan, disebut juga time decoupling. Serta dikenal sebutan synchronization decoupling yang memungkinkan terjadinya sinkronisasi tanpa mengganggu client dalam proses pengiriman ataupun penerimaan pesan.
                        </Text>
                    </ScrollView>
                </View>
                <View style={styles.btnWrapper}>
                    <Button text="Sign Out" onPress={signOut} color="red" />
                </View>
            </View>
        </ScrollView>
    )
}

export default About

const styles = StyleSheet.create({
    page: {flex: 1},
    container: {
        flex: 1, 
        marginVertical: 24,
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: 'white',
        borderRadius: 16,
        margin: 16,
        maxHeight: 360
    },
    imgContainer: {flexDirection: 'row'},
    text: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: '#020202',
        textAlign: 'justify',
        marginBottom: 5
    },
    docText: {
        fontSize: 16,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        color: '#8D92A3',
        marginBottom: 16
    },
    btnWrapper: {
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
})
