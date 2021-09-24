import React, { useRef, useState } from 'react';
import { Animated, FlatList, StyleSheet, View } from 'react-native';
import slides from '../../../../slides';
import OnboardingItem from '../OnboardingItem';
import Paginator from '../Paginator';

const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    
    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

    return (
        <View style={styles.container}>
            <View style={{ flex: 2 }}>
                <FlatList 
                    data={slides} 
                    renderItem={({item}) => <OnboardingItem item={item} />} 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled 
                    bounces={false} 
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>

            <Paginator data={slides} scrollX={scrollX} />
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
