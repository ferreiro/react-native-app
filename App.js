import React, {PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput
} from 'react-native';

class Dashboard extends PureComponent {
  render() {
    
    // FlatList
    return (
      <View>
        <Text>Welcome to the dashboard</Text>
      </View>
    )
  }
}

class CreateDeck extends PureComponent {
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
          <Text style={{color: '#fff', fontSize: '20px'}}>
            Create Deck
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

class CreateCard extends PureComponent {
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

class DeckDetails extends PureComponent {
  render() {
    

    return (
      <View>
        <Text>Welcome to the dashboard</Text>
      </View>
    )
  }
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>

        <CreateCard />
        <CreateDeck />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
