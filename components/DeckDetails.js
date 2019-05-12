import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import {isEmpty} from 'lodash'
import {
  Button,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export class DeckDetails extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title');

    return {
      title: title,
    }
  }

  static propTypes ={
    deck: PropTypes.object,
  }

  componentDidMount = () => {
    const {deck} = this.props;
    console.log('Actualizado!')

    if (!isEmpty(deck)) {
      this.props.navigation.setParams({title: deck.title})
    }
  }

  componentDidUpdate(prevProps) {
    console.log('prevProps', prevProps)


  }

  _handleAddCard = () => {
    this.props.navigation.navigate('CreateCard', {
      deckId: this.props.deck.id
    })
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
    const {deck} = this.props;

    if (!deck) {
      return (
        <Text>Not found</Text>
      )
    }

    const {title, cards} = deck;
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
        <Text>
          {cards.length} cards
        </Text>

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