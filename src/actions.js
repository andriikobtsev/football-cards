import {
    CHANGE_SEARCH_FIELD,
    REQUEST_DATA_PENDING,
    REQUEST_DATA_FAILED,
    REQUEST_DATA_SUCCESS
} from './constants';
import {getAllMatches} from './utils';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestData = () => (dispatch) => {
    dispatch({ type: REQUEST_DATA_PENDING });
    fetch('https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_DATA_SUCCESS, payload: getAllMatches(data.rounds) }))
        .catch(error => dispatch({ type: REQUEST_DATA_FAILED, payload: error }))
};