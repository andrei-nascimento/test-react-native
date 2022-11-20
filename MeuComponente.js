import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function MeuComponente() {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Teste de texto</Text>
            <Text style={styles.cardSubtitle}>Criando algo maneiro em Android e iOS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        marginVertical: 8,
        marginTop: 20,
        borderRadius: 0
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    cardSubtitle: {
        fontSize: 16,
        color: '#999',
    }
});
