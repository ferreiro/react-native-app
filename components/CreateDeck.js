import React, {PureComponent} from 'react';
import timestamp from 'time-stamp'
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

const initialState = {
  title: ''
}

export class CreateDeck extends PureComponent {
    static navigationOptions = {
      title: 'Create deck'
    }

    state = initialState
  
    _handleChangeTitle = (title) => {
      this.setState({title})
    }
  
    _handleSubmitForm = () => {
      const {title} = this.state
      const id = timestamp.utc('YYYYMMDDmmssms')

      const {addDeck, navigation} = this.props

      // Persist the new deck
      addDeck({title, id})

      // Change the screen to home.
      navigation.dismiss()
      navigation.navigate('DeckDetails', {
        id
      })
      this.setState(initialState)
    }
  
    render() {
      const {title} = this.state;
      const {navigation} = this.props;
  
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