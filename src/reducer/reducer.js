import {
  GET_COUNTRIES,
  ADD_COUNTRY_FAVORITE,
  REMOVE_COUNTRY_FAVORITE,
  GET_DETAIL,
} from "../actions/actions";

const initialState = {
  countries: [],
  favorites: [],
  detail:{}
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case GET_DETAIL:{
      return {
        ...state,
        detail:action.payload
      }
    }
    case ADD_COUNTRY_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.concat(action.payload)
        //favorites: [...state.favorites, action.payload]
      };
    }
    case REMOVE_COUNTRY_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter(e => e.alpha3Code !== action.payload)
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
