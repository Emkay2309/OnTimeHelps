import React, { useRef } from 'react';
import { View, ImageBackground,Animated,} from 'react-native';
import { s1, s2, s3, s4 } from '../../../assets/images/Carosols/carosol';

import { styles } from './styles';

const images = [s1, s2, s3, s4];

const Carasoul = () => {
    const scrollX = useRef(new Animated.Value(0)).current;

    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.itemContainer}>
            <ImageBackground source={item} style={styles.image} />
        </View>
    );

    return (
        <View style={styles.container}>
            <Animated.FlatList
                data={images}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
            />
        </View>
    );
};


export default Carasoul;
