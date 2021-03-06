import React from 'reaact';
import {StyleSheet, View , Text , TextInput} from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  render() {}
  return( {
    <View style={styles.container}>
<TextInput style={styles.MemoEditInput}>
<CircleButton>{'\uf00c'}</CircleButton>
    </View>
  );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    width '100%',
  },
  MemoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
})

export default MemoEditScreen;
