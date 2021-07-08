import React, {useEffect} from "react";
import { getDetail } from "../../actions/actions";
import { connect } from "react-redux";

function Detail(props) {
useEffect(()=>{    
    props.getDetail(props.match.params.id)
},[])

  return (
      <div>
          <h1>{props.detail && props.detail.name}</h1>
      </div>
  )
}

function mapStateToProps(state) {
    return {
        detail:state.detail
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getDetail: id=> dispatch(getDetail(id))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Detail);