import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import {merge, isEmpty} from 'lodash'
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
    textAlign: 'center',
    minWidth: 200,
    fontSize: 30,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  correct: {
    backgroundColor: 'green'
  },
  incorrect: {
    backgroundColor: 'red'
  }
})

const initialState = {
  currentCard: 0,
  showAnswer: false,
  correct: 0,
  incorrect: 0,
}

export class Quiz extends PureComponent {
  static navigationOptions = () => {
    return {
      title: 'Quiz',
    }
  }

  static propTypes ={
    deck: PropTypes.object,
  }

  state = initialState

  correctAnswer = () => {
    this.setState((prevState) => ({
      correct: prevState.correct + 1,
      currentCard: prevState.currentCard + 1
    }))
  }

  incorrectAnswer = () => {
    this.setState((prevState) => ({
      incorrect: prevState.incorrect + 1,
      currentCard: prevState.currentCard + 1
    }))
  }

  restartQuiz = () => {
    this.setState(initialState)
  }

  goDeck = () => {
    this.props.navigation.goBack()
  }

  showAnswer = () => (
    this.setState({showAnswer: true})
  ) 

  showQuestion = () => (
    this.setState({showAnswer: false})
  ) 

  renderScore = () => {
    const {
      correct,
      incorrect,
    } = this.state
    const {
      deck
    } = this.props;
    const cardsLength = deck.cards.length;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Final Score</Text>
        <Text style={styles.title}>Correct: {correct}</Text>
        <Text style={styles.title}>Incorrect: {incorrect}</Text>
        <Text style={styles.title}>Success Rate: {correct / cardsLength}</Text>

        <Button
          onPress={this.goDeck}
          title="Go back to the deck"
        />

        <Button
          onPress={this.restartQuiz}
          title="Start over quiz"
        />
      </View>
    )
  }

  renderCard = ({answer, question}, currentCard, total, showAnswer) => (
    <View style={styles.container}>
      <Text style={styles.title}>
        Remaining: {total - currentCard} / {total}
      </Text>

      <View>
        {showAnswer === true ? (
          <View>
            <Text style={styles.title}>{answer}</Text>
            <Button
              title="Show Question"
              onPress={this.showQuestion}
            />
          </View>
        ) : (
          <View>
            <Text style={styles.title}>{question}</Text>
            <Button
              title="Show Answer"
              onPress={this.showAnswer}
            />
          </View>
        )}
        
      </View>

      <TouchableOpacity
        style={merge({}, styles.button, styles.correct)}
        onPress={this.correctAnswer}
      >
        <Text style={styles.buttonText}>Correct</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={merge({}, styles.button, styles.incorrect)}
        onPress={this.incorrectAnswer}
      >
        <Text style={styles.buttonText}>Incorrect</Text>
      </TouchableOpacity>
    </View>
  )

  render() {
    const {deck} = this.props;
    const {currentCard, showAnswer} = this.state;

    if (!deck || isEmpty(deck)) {
      return (
        <Text>Quiz Not found</Text>
      )
    }

    if (currentCard >= deck.cards.length) {
      return this.renderScore()
    } else {
      const {cards} = deck;
      const card = cards[currentCard]

      const total = cards.length

      return this.renderCard(card, currentCard, total, showAnswer)
    }
  }
}