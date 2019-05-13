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
  subtitle: {
    fontSize: 20,
    paddingBottom: 30,
  },
  button: {
    fontSize: 30,
    padding: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
  },
  buttonDelete: {
    color: 'red',
    padding: 30,
    fontSize: 20,
  }
})

export class DeckDetails extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title');

    return {
      title: title,
    }
  }

  static propTypes ={
    deck: PropTypes.object,
    removeDeck: PropTypes.func,
  }

  componentDidMount = () => {
    const {deck} = this.props;
    console.log('Actualizado!')

    if (!isEmpty(deck)) {
      this.props.navigation.setParams({title: deck.title})
    }
  }

  addCard = () => {
    this.props.navigation.navigate('CreateCard', {
      deckId: this.props.deck.id
    })
  }

  startQuiz = () => {
    // TODO: Implement
    alert('Start quiz...')
  }

  deleteDeck = () => {
    const id = this.props.deck.id;

    this.props.removeDeck({id})
    this.props.navigation.navigate('Home')
  }

  render() {
    const {deck} = this.props;

    if (!deck) {
      return (
        <Text>Not found</Text>
      )
    }

    const {title, cards} = deck;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {cards.length} cards
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={this.addCard}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.startQuiz}
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.deleteDeck}
        >
          <Text
            style={styles.buttonDelete}
          >
            Delete Deck
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}