import React from "react";
import { removeCountryFavorite } from "../../actions/actions";
import { connect } from "react-redux";

function Favs(props) {
  return (
    <div>
      <h1>Favorites</h1>
      {props.favorites &&
        props.favorites.map((el) => {
          return (
            <div>
              <h4>{el.name}</h4>
              <button
                onClick={() => props.removeCountryFavorite(el.alpha3Code)}
              >
                X
              </button>
            </div>
          );
        })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeCountryFavorite: (id) => dispatch(removeCountryFavorite(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favs);
