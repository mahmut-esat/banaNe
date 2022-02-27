import React from 'react';
import {View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './Button.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({text, onPress, icon, loading, theme="primary"}) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <View style={styles[theme].button_container}>
          <Icon name={icon} color="white" size={18} />
          <Text style={styles[theme].title}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;


const obj = {
    user: {
        name:"Esat",
    },
}

obj.user.name

obj['user'].name


