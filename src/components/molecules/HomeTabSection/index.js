import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Fire } from '../../../config';
import { showError } from '../../../utils';
import ClientContainer from '../ClientContainer';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#020202', height: 3}}
    style={{ backgroundColor: 'white' }}
    renderLabel={({ route, focused, color }) => (
        <Text style={{ fontFamily: 'Montserrat-Medium', color: focused ? '#020202' : '#8D92A3' }}>
            {route.title}
        </Text>
    )}
  />
);

const FirstClient = props => (
    <ClientContainer {...props} />
);

const SecondClient = () => (
    <ClientContainer />
);

const ThirdClient = () => (
    <ClientContainer />
);

const FourthClient = () => (
    <ClientContainer />
);

const HomeTabSection = () => {
    // const [dataClient1, setDataClient1] = useState([]);

    // useEffect(() => {
    //     Fire.database().ref('client1/').once('value').then(res => {
    //         console.log('data: ', res.val());
    //         if (res.val()) {
    //             setDataClient1(res.val());
    //         }
    //     }).catch(err => {
    //         showError(err.message);
    //     });
    // }, []);
    
    // console.log('client1: ', dataClient1.vol);
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'client1', title: 'Client 1'},
        {key: 'client2', title: 'Client 2'},
        {key: 'client3', title: 'Client 3'},
        {key: 'client4', title: 'Client 4'},
    ]);

    const renderScene = SceneMap({
        client1: FirstClient,
        client2: SecondClient,
        client3: ThirdClient,
        client4: FourthClient,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
        />
    )
}

export default HomeTabSection

const styles = StyleSheet.create({})
