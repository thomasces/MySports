import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import ranks from './data/RankingsGoupStage.json';

let group_stage = '';

//display the standings of the chosen group
export default function StandingsScreen({route, navigation}) {
  group_stage = route.params;
  return (
    <View style={stylesClassment.container}>
      <Standings />
    </View>
  );
}

class Standings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['#.', 'Team', 'PTS'],
      widthArr: [20, 325, 100],
    };
  }

  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 4; i += 1) {
      const standings = ranks[group_stage][i];
      const rowData = [];
      rowData.push(standings.rank);
      rowData.push(standings.team);
      rowData.push(standings.points);
      tableData.push(rowData);
    }

    return (
      <View style={stylesClassment.container}>
        <ScrollView horizontal={true}>
          <View>
            <Text style={stylesClassment.group_name}>{group_stage}</Text>
            <Table borderStyle={{borderWidth: 1, borderColor: '#000000'}}>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={stylesClassment.header}
                textStyle={stylesClassment.text}
              />
            </Table>
            <ScrollView style={stylesClassment.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#000000'}}>
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={state.widthArr}
                    style={[
                      stylesClassment.row,
                      index % 2 && {backgroundColor: '#000000'},
                    ]}
                    textStyle={stylesClassment.Rawtext}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const stylesClassment = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000000'},
  header: {height: 50, backgroundColor: '#011d4d'},
  text: {textAlign: 'center', fontWeight: 'bold', color: 'white'},
  group_name: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  Rawtext: {textAlign: 'center', fontWeight: '300', color: 'white'},
  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor: 'black'},
});
