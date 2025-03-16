/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex:1}} >
     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:20,color:'#000000'}}> Welcome to CI/CD test </Text>
      <Text style={{fontSize:20,color:'#000000'}}> Welcome to CI/CD sene apk to whatsapp </Text>
     </View>
    </SafeAreaView>
  );
}

export default App;
