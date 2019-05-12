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


class Dashboard extends PureComponent {
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
  _handleAddCard = () => {
    // TODO: Implement
    alert('Add card...')
  }

  _handleStartQuiz = () => {
    // TODO: Implement
    alert('Start quiz...')
  }

  _handleDeleteDeck = () => {
    // TODO: Implement
    alert('Delete deck...')
  }

  render() {
    const title = 'Deck 1'
    const cards = [
      {
        question: 'Bla bla bla',
        answer: 'blue blue blue',
      }
    ]
    const buttonStyle = {
      fontSize: 30,
      padding: 30,
      borderRadius: 20,
      border: '1px solid #000',
      backgroundColor: '#f0f0f0',
      marginBottom: 20,
    }

    const buttonDeleteStyle = {
      ...buttonStyle,
      ...{
        color: 'red',
        backgroundColor: '#fff'
      }
    }

    return (
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Text style={{fontSize: 30}}>{title}</Text>
        <Text>{cards.length} cards</Text>

        <TouchableOpacity
          style={buttonStyle}
          onPress={this._handleAddCard}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={buttonStyle}
          onPress={this._handleStartQuiz}
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={buttonDeleteStyle}
          onPress={this._handleDeleteDeck}
        >
          <Text style={{color: 'red'}}>
            Delete Deck
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Dashboard />
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
