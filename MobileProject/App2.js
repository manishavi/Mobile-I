import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  Button,
} from 'react-native';

export default class App2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.topImage}
          source={{ uri: 'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1489702025%2Fbeach-maui-hawaii-HAISLE0316.jpg%3Fitok%3DkSlGm75G&w=800&q=60' }} />
        <Text style={styles.header}>Header</Text>
        <View style={styles.imagePair}>
          <Image 
            style={styles.pageImage}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBg798uyXRw3k6QeIuq_G-wVYFqdTohwHFbpUwnBdJLKyRptBXFg' }} />
          <Image 
            style={styles.pageImage}
            source={{ uri: 'https://www.aimforawesome.com/wp-content/uploads/2014/11/Ricymar-Photography-Hawaii-island-from-ocean.jpg' }} />
        </View>
        <Text style={styles.textBlock}>Beautiful Nature</Text>
        <Text style={styles.header}>Header</Text>
        <View style={styles.imagePair}>
          <Image 
            style={styles.pageImage}
            source={{ uri: 'https://www.topdreamer.com/wp-content/uploads/2013/05/Big-Island-Hawaii--634x475.jpg' }} />
          <Image 
            style={styles.pageImage}
            source={{ uri: 'http://www.topdreamer.com/wp-content/uploads/2013/05/hawai-634x475.jpg' }} />
        </View>
        <Text style={styles.textBlock}>Another example of Nature's beauty.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  topImage: {
    height: 175,
    alignSelf: 'stretch',
  },
  header: {
    marginTop: 15,
    fontSize: 30,
    marginLeft: 10,
    marginBottom: 15,
  },
  imagePair: {
    flex: 1,
    flexDirection: 'row',
  },
  pageImage: {
    flex: 1,
    height: 150,
  },
  textBlock: {
    paddingLeft: 5,
  },
});