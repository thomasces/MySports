import * as React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import Sports from './data/SportsLeagueMapping.json';
import {useColorScheme} from 'react-native';

export default function HomeScreen({navigation}) {
  let theme = useColorScheme();

  let styles = style(theme);

  return (
    <View style={styles.container}>
      <SectionList
        style={{paddingTop: 10}}
        sections={Sports.Soccer}
        renderItem={({item}) => (
          <Text
            style={styles.item}
            onPress={() => GoToMatches({navigation}, item)}>
            {item}
          </Text>
        )}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => `basicListEntry-${item.title}`}
      />
    </View>
  );
}

function GoToMatches({navigation}, item) {
  navigation.navigate('Matches', item);
}

function style(theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: theme === 'dark' ? 'white' : 'black',
      color: theme === 'dark' ? 'black' : 'white',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      color: theme === 'dark' ? 'white' : 'black',
    },
  });
}
