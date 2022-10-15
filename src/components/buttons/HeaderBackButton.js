import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { icons } from '../../theme';

export const HeaderBackButton = ({ navigation, onPress }) => {
    goBack = () => {
        const canGoBack = navigation?.canGoBack();
        return canGoBack ?
            navigation.goBack()
            : navigation.popToTop();
    };
    // console.log('onPress', !!onPress);

    return (
        <TouchableOpacity onPress={onPress ? onPress : () => goBack()} style={{ marginLeft: 0 }}>
            <Icon name='arrow-back-outline' size={40} />
        </TouchableOpacity>
    );
}