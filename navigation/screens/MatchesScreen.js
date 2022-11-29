import React from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';
import Matches from './data/MatchesSchedule.json';
import flag from './data/Flag.json';
import {useColorScheme} from 'react-native';

export default function MatchesScreen({route, navigation}) {
  let theme = useColorScheme();
  let styles = style(theme);

  if (route.params === 'World Cup 2022') {
    return (
      <View style={styles.container}>
        <SectionList
          style={{paddingTop: 10}}
          sections={Matches.GroupStage}
          renderItem={({item}) => (
            <Text
              style={styles.item}
              onPress={() => GoToDetails({navigation}, item)}>
              {item.date} {flag[item.team1]} {item.team1} {item.score}{' '}
              {item.team2} {flag[item.team2]}
            </Text>
          )}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => `basicListEntry-${item.title}`}
        />
      </View>
    );
  } else {
    return (
      <View>
        <Text style={{color: 'white'}}>No data for the moment</Text>
      </View>
    );
  }
}

function GoToDetails({navigation}, item) {
  navigation.navigate('Details', item);
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
