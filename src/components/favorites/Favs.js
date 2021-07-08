import React from "react";
import { removeCountryFavorite } from "../../actions/actions";
import { connect } from "react-redux";

function Favs(props) {
  return (
    <div>
      <h1>Favorites</h1>
      {props.favs ? props.favs.map(e =>{
        return(
          <div>
          <button onClick={() => props.removeCountryFavorite(e.alpha3Code)}>X</button>
          <h3>{e.name}</h3>
          </div>
        )
      }) : null} 
    </div>
  );
}

function mapStateToProps(state) {
  return {
    favs:state.favorites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeCountryFavorite: id => dispatch(removeCountryFavorite(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favs);
