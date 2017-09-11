import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Header</Text>
        <Image
          style={styles.topImage}
          source={{ uri: 'http://eliteescapestravel.com/wp-content/uploads/sites/40/2016/02/cool_island_hawaii.png' }} />
        <View style={styles.buttonRow}>
          <Button style={styles.button} title={'Like'} onPress={console.log} />
          <Button style={styles.button} title={'Share'} onPress={console.log} />
          <Button style={styles.button} title={'Comment'} onPress={console.log} />
        </View>
        <View style={styles.commentContainer}>
          <Text style={styles.comment}>Manisha: Wonderful Island</Text>
          <Text style={styles.comment}>Anshuman: Mesmerising</Text>
          <Text style={styles.comment}>Avinash: Real Beauty of Nature</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
  },
  header: {
    marginTop: 25,
    fontSize: 50,
  },
  topImage: {
    height: 400,
    alignSelf: 'stretch',
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    width: 50,
  },
  commentContainer: {
    marginTop: 25,
  },
  comment: {
    fontSize: 20,
    marginBottom: 15,
  },
});
