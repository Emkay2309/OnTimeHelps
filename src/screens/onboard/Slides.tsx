import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SlideType } from './types'
import { COLORS, SIZES } from '../../utils/constants';

type SlideProps = {
  item: SlideType;
};

const Slides: React.FC<SlideProps> = ({ item }) => {

  return (
    <View style={styles.container}>
      <View style={{flex : 0.7}}>
        <Image
          source={item.image}
          style={styles.image}
          resizeMode='contain'
        />
      </View>
      <View style={{flex : 0.3}}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.descText}>{item.description}</Text>
      </View>
    </View>
  )
}

export default Slides

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    paddingTop: 100
  },
  image: {
    width: SIZES.width - 80,
    height: 400,
    flex: 0.7
  },
  titleText: {
    fontSize: SIZES.h1,
    fontWeight: '800',
    color: COLORS.title,
    textAlign: 'center',
    maxWidth: SIZES.width - 40,
  },
  descText: {
    textAlign: 'center',
    paddingTop: 5,
    maxWidth: SIZES.width - 40,

  }
})