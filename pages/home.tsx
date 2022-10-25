import React, { FC, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import { PhotoItem } from '../components';
import { useGetPhotoQuery } from '../redux/services/photoApi';

interface HomeProps {
  navigation: any;
}

export const Home: FC<HomeProps> = ({ navigation }) => {
  const { data, isLoading } = useGetPhotoQuery('');
  return (
    <View style={styles.home}>
      <ScrollView>
        <View style={styles.homeContent}>
          {!isLoading ? (
            data.map((item: any) => (
              <PhotoItem
                key={item.id}
                name={item.user.name}
                url={item.urls.full}
                author={item.user.username}
                navigation={navigation}
              />
            ))
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#141414',
    paddingTop: 20,
  },
  homeContent: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
