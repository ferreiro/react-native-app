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

const styles = StyleSheet.create({
  container: {
    margin: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'center'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 20
  },
  input: {
    padding: 30,
    alignSelf: 'stretch',
    borderColor: '#cecece',
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 10,
  },
  submit: {
    maxWidth: 250,
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 10,
  }
})

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
          style={styles.container}
          behavior="padding"
        >
          <Text
            style={styles.title}
          >
            What's the title of your new deck?
          </Text>

          <TextInput
            style={styles.input}
            value={title}
            placeholder="Introduce your text!"
            onChangeText={this._handleChangeTitle}
          />
  
          <TouchableOpacity
            onPress={this._handleSubmitForm}
            style={styles.submit}
          >
            <Text style={{color: '#fff', fontSize: 20}}>
              Create Deck
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )
    }
  }