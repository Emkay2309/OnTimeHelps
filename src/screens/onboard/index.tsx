import {  Button, FlatList, StyleSheet , View } from 'react-native';
import React, { useRef } from 'react';
import { OnboardScreenProps, SlideType } from './types';
import { slides } from './data';
import Slides from './Slides';
import { SIZES } from '../../utils/constants';

const Onboard: React.FC<OnboardScreenProps> = ({ navigation }) => {
  const flatListRef = useRef<FlatList>(null);
  const [ currentIndex, setCurrentIndex ] = React.useState(0);

  const handleStart = () => {
    navigation.navigate('Login');
  };

  const handleNext = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index : currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderItem = ({ item }: { item : SlideType }) => <Slides item={item} />;

  const renderIndicator = () => {
    return (
      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentIndex ? styles.indicatorActive : styles.indicatorInactive,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / SIZES.width);
          setCurrentIndex(index);
        }}
        scrollEventThrottle={16}
      />
      {renderIndicator()}
      <View style={styles.btn}>
        {currentIndex < slides.length - 1 ? (
          <Button title="Next" onPress={handleNext} color={'lightpink'} />
        ) : (
          <Button title="Get Started" onPress={handleStart} color={'lightpink'} />
        )}
      </View>
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  btn: {
    marginBottom: 20,
    alignItems: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: 'lightpink',
  },
  indicatorInactive: {
    backgroundColor: 'gray',
  },
});
