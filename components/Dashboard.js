import React, {PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';

const styles = StyleSheet.create({
    container: {},
    item: {
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        padding: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        // shadowOpacity: 0.3,
        // shadowRadius: 3,
        // shadowColor: '#000',
        // shadowOffset: { height: 1, width: 1 },
    },
    title: {
        flex: 1,
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 10,
    },
    cards: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, .8)'
    },
})

export class Dashboard extends PureComponent {
    static navigationOptions = {
        title: 'Dashboard'
    }

    openCard = (id, event) => {
        console.log('event', event)
        console.log(this.props)
        this.props.navigation.navigate('DeckDetails', {
            id,
        })
    }

    renderCardItem = ({item: deck}) => {
        const {id, title, items} = deck;

        return (
            <TouchableOpacity
                style={styles.item}
                onPress={(event) => this.openCard(id, event)}
                title="my link"
            >
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.cards}>
                    {items.length} cards
                </Text>
            </TouchableOpacity>
        )
    } 
  
    render() {
        const decks = [
            {
                id: 'mySuperDeck',
                title: '1: My super title',
                items: [
                    {
                        question: '1: What is your name?',
                        answer: 'This is the answer',
                    }
                ],
            },
            {
                id: 'mySuperDeck2',
                title: '2: My super title',
                items: [
                    {
                        id: '232323',
                        question: '1: What is your name?',
                        answer: 'This is the answer',
                    },
                    {
                        id: '232323244',
                        question: '1: What is your name?',
                        answer: 'This is the answer',
                    }
                ],
            },
        ]
      
      // FlatList
      return (
        <View
          style={{
            padding: 20,
          }}
        >
            <FlatList
                data={decks}
                renderItem={this.renderCardItem}
            />
        </View>
      )
    }
  }
  