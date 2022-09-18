import React, { Children } from 'react';
import { Image, TouchableOpacity, View, Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuView } from '@react-native-menu/menu';

export const ContextMenuButton = ({ navigation, children, style }) => {

    return (
        <MenuView
                title="Menú"
                onPressAction={({ nativeEvent }) => {
                    console.warn(JSON.stringify(nativeEvent));
                }}
                shouldOpenOnLongPress={false}
                actions={[
                {
                    id: 'edit',
                    title: 'Editar',
                    titleColor: '#000000',
                    image: Platform.select({
                    ios: 'pencil',
                    android: 'ic_menu_edit',
                    }),
                    imageColor: '#000000',
                },
                {
                    id: 'delete',
                    title: 'Borrar',
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
