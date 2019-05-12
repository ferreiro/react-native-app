import React, {PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';


export class CreateCard extends PureComponent {
    state = {
      answer: '',
      question: '',
    }
  
    _handleChangeAnswer = (answer) => {
      this.setState({
        answer
      })
    }
  
    _handleChangeQuestion = (question) => {
      this.setState({
        question
      })
    }
  
    _handleSubmitForm = () => {
      // TODO: Implement method to add card into a deck
      console.log('pressed!')
      window.alert('Sending card!!!')
    }
  
    render() {
      const {answer, question} = this.state;
  
      return (
        <KeyboardAvoidingView
          style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
          behavior="padding"
        >
          <TextInput
            style={{padding: 30, alignSelf: 'stretch', borderColor: 'gray', borderWidth: 1, marginBottom: 30}}
            value={question}
            placeholder="Question"
            onChangeText={this._handleChangeQuestion}
          />
  
          <TextInput
            style={{padding: 30, alignSelf: 'stretch', borderColor: 'gray', borderWidth: 1, marginBottom: 30}}
            value={answer}
            placeholder="Answer"
            onChangeText={this._handleChangeAnswer}
          />
  
          <TouchableOpacity
            onPress={this._handleSubmitForm}
            style={{maxWidth: 250, backgroundColor: '#000', padding: 20}}
          >
            <Text style={{color: '#fff', fontSize: '20px'}}>
              Submit card
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )
    }
  }