import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBack} from '../../../assets';

const Header = ({title, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.6}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {fontSize: 22, fontFamily: 'OpenSans-SemiBold', color: '#020202'},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 38,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {padding: 16, marginRight: 16, marginLeft: -10},
});
