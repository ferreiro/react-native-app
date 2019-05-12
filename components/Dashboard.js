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
        decks: PropTypes.arrayOf(PropTypes.object),
    }

    static defaultProps = {
        decks: []
    }

    openCard = (id, event) => {
        console.log('event', event)
        console.log(this.props)
        this.props.navigation.navigate('DeckDetails', {
            id,
        })
    }

    openCreateDeck = () => {
        this.props.navigation.navigate('CreateDeck')
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
        const {decks} = this.props;
        
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
                        data={decks}
                        renderItem={this.renderCardItem}
                    />
                )}
            </View>
        )
    }
  }
  