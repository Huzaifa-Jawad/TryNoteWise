// // App.tsx
// import 'react-native-gesture-handler';
// import React, { useEffect, useState } from 'react';
// import { supabase } from './supabaseClient';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import LoginScreen from './LoginScreen';
// import HomeScreen from './HomeScreen';

// type RootStackParamList = {
//   Login: undefined;
//   Home: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// const App: React.FC = () => {
//   const [session, setSession] = useState<any>(null);

//   useEffect(() => {
//     // Check active session on app load
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//     });

//     // Listen to auth state changes
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//     });

//     return () => {
//       subscription.unsubscribe();
//     };
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {session && session.user ? (
//           <Stack.Screen
//             name="Home"
//             component={HomeScreen}
//             options={{ headerShown: false }}
//           />
//         ) : (
//           <Stack.Screen
//             name="Login"
//             component={LoginScreen}
//             options={{ headerShown: false }}
//           />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';  // Adjust the path if needed
// import HomeScreen from './HomeScreen';    // Import your HomeScreen component

// Define the types for the navigation stack
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

// Create the stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} // Optional: customize the screen header
        />
        {/* <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} // Optional: customize the screen header
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
