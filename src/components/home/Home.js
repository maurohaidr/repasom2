import React from "react";
import { connect } from "react-redux";
import { getCountries, addCountryFavorite, getDetail } from "../../actions/actions";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Home</h1>   
      <Link to="/favs">Favorites</Link>
      <button onClick={() => props.getCountries()}>Get Countries</button>  
      {props.countries && props.countries.map(e =>{
        return (
          <div>
              <Link to={`/${e.alpha3Code}`}>
              <h3>{e.name}</h3>
              </Link>
            <button onClick={() => props.addCountryFavorite(e)}>favs</button>
        </div>
        )
      }
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    countries:state.countries
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCountryFavorite: id => dispatch(addCountryFavorite(id)),
    getCountries: () => dispatch(getCountries())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
