import React, {PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export class DeckDetails extends PureComponent {
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