import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import { useGetPhotoQuery } from '../redux/services/photoApi';

export const Photo = () => {
  const photoInfo = useSelector((state: any) => state && state.photoReducer.photoItem);
  return (
    <View>
      <Image
        style={styles.images}
        source={{
          uri: photoInfo.img,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  images: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
