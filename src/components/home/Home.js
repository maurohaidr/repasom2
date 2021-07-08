import React from "react";
import { connect } from "react-redux";
import { getCountries, addCountryFavorite } from "../../actions/actions";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => props.getCountries()}>Search Countries</button>
      <Link to="/favorites">
        <h1>Favs</h1>
      </Link>
      <div>
        {props.countries &&
          props.countries.map((el) => {
            return (
              <div>
                <h4>{el.name}</h4>

                <button onClick={() => props.addCountryFavorite(el)}>
                  Fav
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCountries: () => dispatch(getCountries()),
    addCountryFavorite: (country) => dispatch(addCountryFavorite(country)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
