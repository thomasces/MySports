import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import flag from './data/Flag.json';
import {useColorScheme} from 'react-native';

export default function GameDetailsScreen({route, navigation}) {
  let infos = route.params;
  let theme = useColorScheme();
  let styles = style(theme);

  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View
        style={[
          styles.container,
          {
            flexDirection: 'row',
          },
        ]}>
        <View style={{flex: 4}}>
          <Text style={styles.flagL}>{flag[infos.team1]}</Text>
          <Text style={styles.team}>{infos.team1}</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.date}>{infos.date}/2022</Text>
          <Text style={styles.score}>{infos.score}</Text>
        </View>
        <View style={{flex: 4}}>
          <Text style={styles.flagR}>{flag[infos.team2]}</Text>
          <Text style={styles.team}>{infos.team2}</Text>
        </View>
      </View>
      <View style={{flex: 3}}>
        <Text style={styles.item}>1.First half</Text>
        {infos.goal1.map(goal => {
          return (
            <View>
              <Text style={styles.goal}>
                {goal.time}
                {'‘'} {goal.player} {flag[goal.team]}
              </Text>
            </View>
          );
        })}
        <Text style={styles.item}>2.Second half</Text>
        {infos.goal2.map(goal => {
          return (
            <View>
              <Text style={styles.goal}>
                {goal.time}
                {'‘'} {goal.player} {flag[goal.team]}
              </Text>
            </View>
          );
        })}
        <Button
          title={'Leaderboard'}
          onPress={() => navigation.navigate('Standings', route.params.group)}
          color="#1E6738"
        />
      </View>
    </View>
  );
}

function style(theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    team: {
      fontSize: 18,
      height: 44,
      color: theme === 'dark' ? 'white' : 'black',
      textAlign: 'center',
      fontWeight: '600',
    },
    score: {
      fontSize: 25,
      height: 44,
      color: theme === 'dark' ? 'white' : 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    date: {
      padding: 10,
      fontSize: 14,
      height: 44,
      color: theme === 'dark' ? 'white' : 'black',
      fontStyle: 'italic',
      textAlign: 'center',
    },
    flagL: {
      fontSize: 100,
      height: 100,
      textAlign: 'center',
    },
    flagR: {
      fontSize: 100,
      height: 100,
      textAlign: 'center',
    },
    item: {
      padding: 10,
      fontSize: 14,
      height: 44,
      color: theme === 'dark' ? 'white' : 'black',
      textAlign: 'left',
      fontWeight: 'bold',
    },
    goal: {
      padding: 10,
      fontSize: 18,
      height: 44,
      color: theme === 'dark' ? 'white' : 'black',
      textAlign: 'center',
    },
  });
}
