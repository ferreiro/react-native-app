import React, {PureComponent} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export class CreateDeck extends PureComponent {
    static navigationOptions = {
      title: 'Create deck'
    }

    state = {
      title: '',
    }
  
    _handleChangeTitle = (title) => {
      this.setState({title})
    }
  
    _handleSubmitForm = () => {
      // TODO: Implement method to persist the new desk into
      // the store
      console.log('pressed!')
      window.alert('button pressed!!!')
    }
  
    render() {
      const {title} = this.state;
      const {navigation} = this.props;
      const id = navigation.getParam('id', 'default');
      const name = navigation.getParam('name', 'default');
  
      return (
        <KeyboardAvoidingView
          style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
          behavior="padding"
        >
          <Text
            style={{fontSize: 30, textAlign: 'center', paddingBottom: 20}}
          >
            What's the title of your new deck?
          </Text>
          
          <Text>
            {id}
            {name}
          </Text>
  
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.push('CreateDeck')}
          />

          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />

          <TextInput
            style={{padding: 30, alignSelf: 'stretch', borderColor: 'gray', borderWidth: 1, marginBottom: 30}}
            value={title}
            placeholder="Introduce your text!"
            onChangeText={this._handleChangeTitle}
          />
  
          <TouchableOpacity
            onPress={this._handleSubmitForm}
            style={{maxWidth: 250, backgroundColor: '#000', padding: 20}}
          >
            <Text style={{color: '#fff', fontSize: 20}}>
              Create Deck
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )
    }
  }