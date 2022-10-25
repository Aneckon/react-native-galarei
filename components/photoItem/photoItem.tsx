import React, { FC } from 'react';
import { Image, StyleSheet, View, Text, Pressable } from 'react-native';

import { useDispatch } from 'react-redux';
import { setPhoto } from '../../redux/slice/photoSlice';
import { AppDispatch } from '../../redux/store';

interface PhotoItemProps {
  navigation: any;
  name: string;
  url: string;
  author: string;
}

export const PhotoItem: FC<PhotoItemProps> = ({ navigation, name, url, author }) => {
  const dispatch = useDispatch<AppDispatch>();

  const onPressAddPhoto = () => {
    navigation.navigate('Photo');
    dispatch(setPhoto({ img: url }));
  };

  return (
    <View style={styles.photoItem}>
      <Pressable onPress={onPressAddPhoto}>
        <Image
          style={styles.images}
          source={{
            uri: url,
          }}
        />
      </Pressable>
      <View style={styles.photoContent}>
        <Text style={styles.text}>
          <Text style={styles.textTitle}>Name:</Text> {name}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.textTitle}>Author: </Text> {author}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  photoItem: {
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    margin: 10,
  },
  photoContent: {
    marginTop: 10,
    width: '100%',
  },
  images: {
    width: 110,
    height: 110,
  },
  text: {
    color: '#bfbfbf',
    fontSize: 7,
  },
  textTitle: {
    fontSize: 9,
  },
});
