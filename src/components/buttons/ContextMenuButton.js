import React, { Children } from 'react';
import { Image, TouchableOpacity, View, Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuView } from '@react-native-menu/menu';
import { useTranslation } from "react-i18next";

export const ContextMenuButton = ({ navigation, children, style, onPress, data }) => {
    const { t, i18n } = useTranslation();
    return (
        <MenuView
                title={i18n.t('Menu')}
                onPressAction={({ nativeEvent }) => onPress(nativeEvent)}
                shouldOpenOnLongPress={false}
                actions={[
                {
                    id: `edit_${data._id}`,
                    title: i18n.t('Edit'),
                    titleColor: '#000000',
                    image: Platform.select({
                    ios: 'pencil',
                    android: 'ic_menu_edit',
                    }),
                    imageColor: '#000000',
                },
                {
                    id: `delete_${data._id}`,
                    title: i18n.t('Delete'),
                    attributes: {
                    destructive: true,
                    },
                    image: Platform.select({
                    ios: 'trash',
                    android: 'ic_menu_delete',
                    }),
                },
                ]}
            >
                {children}
            </MenuView>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
});
