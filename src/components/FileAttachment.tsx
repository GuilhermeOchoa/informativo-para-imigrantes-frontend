import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from '@components/Button';

export default function FileAttachment() {
    const [selectedFile, setSelectedFile] = useState<DocumentPicker.DocumentPickerAsset | null>(null);

    const selectDoc = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({ multiple: false });
            if (!result.canceled && result.assets.length > 0) {
                setSelectedFile(result.assets[0]);
            } else {
                setSelectedFile(null);
            }
        } catch (error) {
            console.error('Erro ao selecionar o documento:', error);
        }
    }

    const uploadFile = async () => {
        if (selectedFile) {
            try {
                const fileBlob = await fetch(selectedFile.uri).then((r) => r.blob()); // busca o arquivo no URI especificado, obtem a resposta dessa busca e transforma em um objeto Blob (representação binária do arquivo) pronto para ser enviado para o servidor.
                const formData = new FormData();  
                formData.append('file', fileBlob, selectedFile.name);

                const response = await axios.post('url', formData);
                console.log('Upload feito com sucesso.', response.data);
            } catch (error) {
                console.error('Erro no upload do arquivo:', error);
            }
        }
    }

    return (
        <View style={styles.container}>
            <Button
                title={""}
                style={styles.button}
                onPress={selectDoc}
                startIcon={<MaterialCommunityIcons name="file-document" size={24} color="white" style={{ justifyContent: 'center', paddingLeft: 5 }} />}
            />
            <Button
                title={"Enviar Arquivo"}                
                onPress={uploadFile}
            />
            {selectedFile && (
                <View>
                    <Text>Nome do arquivo: {selectedFile.name}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        marginBottom: 30,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
