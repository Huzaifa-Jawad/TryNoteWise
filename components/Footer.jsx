import * as React from 'react';  
import { View, Text } from 'react-native';
    
export default function NoteWiseFooter() {
    return (
    <View style={{backgroundColor: '#4051e6'}}>
        <Text style={{ padding: 10, fontSize: 14, color: 'white', alignSelf: 'center', fontWeight: 'bold'}}>
            All rights reserved by NoteWise. 2024
        </Text>
    </View>
    );
}