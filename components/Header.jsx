import * as React from 'react';  
import { View, Text } from 'react-native';
    
export default function NoteWiseHeader() {
    return (
    <View style={{ flex: 0.2, backgroundColor: '#4051e6' }}>
        <Text style={{ padding: 40, fontSize: 44, color: 'white', alignSelf: 'center', fontWeight: 'bold'}}>
            NoteWise
        </Text>
    </View>
    );
}