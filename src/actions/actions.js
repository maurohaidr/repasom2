import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const ADD_COUNTRY_FAVORITE = "ADD_COUNTRY_FAVORITE";
export const REMOVE_COUNTRY_FAVORITE = "REMOVE_COUNTRY_FAVORITE";
export const GET_DETAIL = "GET_DETAIL";

export function getCountries() {
  return function (dispatch) {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(result =>
      dispatch({type: GET_COUNTRIES, payload: result.data})
    )
  };
}
export function getDetail(id) {
  return function (dispatch){
    axios.get("https://restcountries.eu/rest/v2/alpha/" + id).then(result => 
      dispatch({type: GET_DETAIL, payload:result.data}))
  }
}

export function addCountryFavorite(payload) {
  return function(dispatch){
   dispatch({type:ADD_COUNTRY_FAVORITE, payload:payload})
  }
}

export function removeCountryFavorite(id) {
  return function(dispatch){
    dispatch({type:REMOVE_COUNTRY_FAVORITE, payload:id})
  }
}
