import * as React from 'react';
import {View, Text, SectionList, StyleSheet} from 'react-native';
import groups from './data/RankingSelection.json';
import {useColorScheme} from 'react-native';

//This screen is used to select the group that you want to see the leader board
export default function SelectionGroupScreen({route, navigation}) {
  let theme = useColorScheme();
  let styles = style(theme);

  if (route.params === 'World Cup 2022') {
    return (
      <View style={styles.container}>
        <SectionList
          style={{paddingTop: 10}}
          sections={groups.WorldCupGroup}
          renderItem={({item}) => (
            <Text
              style={styles.item}
              onPress={() => GoToStandings({navigation}, item)}>
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
  } else {
    return (
      <View>
        <Text style={{color: 'white'}}>No data for the moment</Text>
      </View>
    );
  }
}

//Function to navigate to the standings
function GoToStandings({navigation}, item) {
  navigation.navigate('Standings', item);
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
