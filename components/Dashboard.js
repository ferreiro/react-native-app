import React, {PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';

export class Dashboard extends PureComponent {
    renderCardItem = ({item}) => {
      const title = 'Deck 1'
      const cards = []
  
      return (
        <View key={item.key} style={{backgroundColor: 'red'}}>
          <Text>{title}</Text>
          <Text>{cards.length} cards</Text>
        </View>
      )
    } 
  
    render() {
      
      // FlatList
      return (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>
            Welcome to the dashboard
          </Text>
  
          <View
            style={{display: 'flex', flex: 0, marginTop: 20, backgroundColor: 'blue'}}
          >
            <FlatList
              data={[{key: 'a'}, {key: 'b'}]}
              renderItem={this.renderCardItem}
            />
          </View>
        </View>
      )
    }
  }
  