import {
    CHANGE_SEARCH_FIELD,
    REQUEST_DATA_PENDING,
    REQUEST_DATA_FAILED,
    REQUEST_DATA_SUCCESS
} from './constants';

const initialStateSearch = {
    searchField: ''
};

const initialStateDate = {
    isPending: false,
    data: [],
    error: ''
};

const initialAppState = {
    featureView: true,
    card: ''
};

export const searchCards = (state = initialStateSearch, action = {}) => {
      switch(action.type) {
          case CHANGE_SEARCH_FIELD:
              return Object.assign({}, state, { searchField: action.payload });
          default:
              return state;
      }
};

export const requestData = (state = initialStateDate, action = {}) => {
    switch(action.type){
        case REQUEST_DATA_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_DATA_SUCCESS:
            return Object.assign({}, state, { data: action.payload, isPending: false });
        case REQUEST_DATA_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;
    }
};

export const viewChange = (state = initialAppState, action = {}) => {
    switch (action.type) {
        case 'CARD_VIEW':
            return Object.assign({}, state, { card: action.payload, featureView: false });
        case 'FEATURE_VIEW':
            return Object.assign({}, state, { featureView: true });
        default:
            return state;
    }
};