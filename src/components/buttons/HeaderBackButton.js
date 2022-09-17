import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { icons } from '../../theme';

export const HeaderBackButton = ({ navigation, onPress }) => {
    goBack = () => {
        navigation.goBack()
    };
    // console.log('onPress', !!onPress);

    return (
        <TouchableOpacity onPress={onPress ? onPress :navigation ?() => goBack(): null} style={{ marginLeft: 0 }}>
            <Icon name='arrow-back-outline' size={40} />
        </TouchableOpacity>
    );
}