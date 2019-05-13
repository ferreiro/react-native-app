import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import {isEmpty} from 'lodash'
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
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

    static propTypes = {
        decks: PropTypes.object,
    }

    static defaultProps = {
        decks: {}
    }

    openDeck = (deck, event) => {
        const {id, title} = deck;

        console.log('event', event)
        console.log(this.props)
        this.props.navigation.navigate('DeckDetails', {
            id,
            title
        })
    }

    openCreateDeck = () => {
        this.props.navigation.navigate('CreateDeck')
    }

    renderCardItem = ({item: deck}) => {
        const {id, title, cards} = deck;

        return (
            <TouchableOpacity
                key={id}
                style={styles.item}
                onPress={(event) => this.openDeck(deck, event)}
                title="my link"
            >
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.cards}>
                    {cards.length} cards
                </Text>
            </TouchableOpacity>
        )
    }
  
    render() {
        const {decks} = this.props
        const decksData = Object.values(decks)

        return (
            <View
                style={{
                    padding: 20,
                }}
            >
                {isEmpty(decks) ? (
                    <View>
                        <Text
                            style={{
                                fontSize: 20,
                                textAlign: 'center',
                                marginTop: 20,
                                marginBottom: 20,
                            }}
                        >
                            You have not created any decks yet.
                        </Text>
                        <Button
                            title="Create your first deck"
                            onPress={this.openCreateDeck}
                        />
                    </View>
                ) : (
                    <FlatList
                        data={decksData}
                        renderItem={this.renderCardItem}
                    />
                )}
            </View>
        )
    }
  }
  