import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
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
    // searchApi(); Causes an INFINIT LOOP

    //GOOD CODE!
    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, restaurants, errorMessage]
};