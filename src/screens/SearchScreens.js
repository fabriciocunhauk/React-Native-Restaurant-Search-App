import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('hi there');

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setRestaurants(response.data.businesses)
        } catch (err) {
            setErrorMessage('Somthing went wrong');
        }
    }

    // Call searchApi when component is first rendered.

    // BAD CODE!
    // searchApi() INFINIT LOOP

    //GOOD CODE!

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text> {errorMessage} </Text> : null}
            <Text>We have found {restaurants.length} results.</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SearchScreen;