import React, {PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 30,
  },
  title: {
    paddingBottom: 20,
    fontSize: 30,
  },
  input: {
    padding: 30,
    alignSelf: 'stretch',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 10,
  },
  submit: {
    maxWidth: 250,
    backgroundColor: '#000',
    padding: 20
  }
})

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
      const {question, answer} = this.state;
      const {navigation} = this.props;

      const deckId = navigation.getParam('deckId')
      
      this.props.addCard({
        deckId,
        question,
        answer,
      })

      navigation.goBack()
    }
  
    render() {
      const {answer, question} = this.state;
  
      return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
          <Text
            style={styles.title}
          >
            Add a new card
          </Text>

          <TextInput
            style={styles.input}
            value={question}
            placeholder="Question"
            onChangeText={this._handleChangeQuestion}
          />
  
          <TextInput
            style={styles.input}
            value={answer}
            placeholder="Answer"
            onChangeText={this._handleChangeAnswer}
          />
  
          <TouchableOpacity
            onPress={this._handleSubmitForm}
            style={styles.submit}
          >
            <Text style={{color: '#fff', fontSize: 20}}>
              Submit card
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )
    }
  }