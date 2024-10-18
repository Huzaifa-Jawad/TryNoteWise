// import * as React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// import NoteWiseHeader from '../../components/Header';
// import NoteWiseFooter from '../../components/Footer';

// export default function AboutNoteWise() {
//   return (
//     <>
    
//       <NoteWiseHeader />

//       <View>
//         <Text style={styles.text_style}>
//             <Text style={styles.name_style}>NoteWise</Text> is an app that allows students to chat with their Notes and study materials, aiming to make studying and learning interactive and easy for students.
//         </Text>
//       </View>
    
//       <NoteWiseFooter />
//     </>
//   );
// }

// const styles = StyleSheet.create({
//     text_style: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },

//     name_style: {
//         fontSize: 20,
//         fontWeight: 'bold',
//     }
// });

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NoteWiseHeader from '../../components/Header';
import NoteWiseFooter from '../../components/Footer';

export default function AboutNoteWise() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <NoteWiseHeader />

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.text_style}>
          <Text style={styles.name_style}>NoteWise</Text> is an app that allows students to chat with their Notes and study materials, aiming to make studying and learning interactive and easy for students.
        </Text>
        {/* Add more content here if needed */}
      </ScrollView>

      {/* Footer Section */}
      <NoteWiseFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full screen
    justifyContent: 'space-between', // Distributes space between children
    backgroundColor: '#fff', // Optional: Set a background color
  },
  content: {
    flexGrow: 1, // Allows content to grow and be scrollable
    padding: 16, // Optional: Add padding around the content
    justifyContent: 'center', // Optional: Center the content vertically
  },
  text_style: {
    fontSize: 24,
    lineHeight: 24,
    color: '#333',
  },
  name_style: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000',
  },
});
