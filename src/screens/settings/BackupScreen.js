import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as DocumentPicker from 'expo-document-picker';

import ScreenSafeAreaContainer from '../../components/ScreenSafeAreaContainer'
import { THEME } from '../../theme'
import MainButton from '../../components/buttons/MainButton';

const BackupScreen = () => {
    const createBackupFile = async () => {
        let fileUri = FileSystem.documentDirectory + 'text.txt';

        // CREATE BACKUP FILE
        FileSystem.writeAsStringAsync(fileUri, 'Hello World', { encoding: FileSystem.EncodingType.UTF8 }).then(
            () => { 
                Sharing.shareAsync(fileUri) 
                // ADD --> Detach Modal
            }
        ).catch(err => { console.log('[FILE CREATION ERROR]', err) })
    }

    const restoreBackupFile = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: false, type: ['text/*'] });

            if (result.type !== 'cancel') {
                FileSystem.readAsStringAsync(result.uri, { encoding: FileSystem.EncodingType.UTF8 }).then(
                    (r) => { 
                        // GET BACKUP FILE CONTENT AS A TEXT
                        console.log('[READ FILE]', r) 
                    }
                ).catch(err => { console.log('[READ BACKUP FILE ERROR]', err) })
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <ScreenSafeAreaContainer disableSafeAreaEdges={['top']}>
            <View style={styles.container}>
                <Text style={styles.title}>Syncranización</Text>
            </View>

            <View style={[styles.container, styles.backupInfoBlock]}>
                <View style={styles.backupInfo}>
                    <Icon name='sync-outline' size={50} />
                    <Text style={styles.backupInfoDay}>Última copia: viernes 9:41</Text>
                </View>
                <Text>....</Text>
            </View>

            <View style={[styles.container, styles.backupActions]}>
                <MainButton
                    text='Realizar copia de seguridad'
                    onPress={createBackupFile}
                    style={styles.backupButtonMargin}
                />
                <MainButton
                    text='Restaurar una copia de seguridad'
                    onPress={restoreBackupFile}
                />
            </View>
        </ScreenSafeAreaContainer>
    )
}

export default BackupScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
    },
    title: {
        color: THEME.TEXT_COLOR,
        fontSize: 49,
        lineHeight: 58,
        marginBottom: 30,
        marginTop: 10,
    },
    backupInfoBlock: {
        paddingVertical: 22,
        backgroundColor: THEME.SECONDARY_BACKGROUND_COLOR,
    },
    backupInfo: {
        flexDirection: 'row',
        marginBottom: 22,
    },
    backupInfoDay: {
        marginLeft: 22,
        marginTop: 10,
        color: '#7C7C7C',
    },
    backupActions: {
        paddingVertical: 25,
    },
    backupButtonMargin: {
        marginBottom: 16,
    },
})