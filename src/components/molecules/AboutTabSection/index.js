import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
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

const ProjectSection = () => (
    <View style={{ backgroundColor: 'white', marginTop: 12, flex: 1, flexDirection: 'row' }}>
        
        <Text>
            hahahaha
        </Text>
    </View>
);

const AccountSection = () => (
    <ClientContainer />
);

const AboutTabSection = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: 'About Project'},
        {key: 'second', title: 'Account'},
    ]);

    const renderScene = SceneMap({
        first: ProjectSection,
        second: AccountSection,
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

export default AboutTabSection

const styles = StyleSheet.create({})
