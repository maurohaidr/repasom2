import {
  GET_COUNTRIES,
  ADD_COUNTRY_FAVORITE,
  REMOVE_COUNTRY_FAVORITE,
} from "../actions/actions";

const initialState = {
  countries: [],
  favorites: [],
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case ADD_COUNTRY_FAVORITE: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case REMOVE_COUNTRY_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter(
          (el) => el.alpha3Code !== action.payload
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
