import React from 'react'
import  {connect}  from 'react-redux'
import { buycake } from '../redux/cake/CakeAction'
 const Cakecontainer = (props) => {
  return (
    <div>
        <div>number of cake-{props.numberofcake}</div>
        <button onClick={props.buycake}>buy_cake</button>
    </div>
  )
}
//no define function to map state to props
//this function get the redux state as params and return object
const mapStateToProps = (state)=>{
    return {
        numberofcake: state.numberofcake

    }
}
// used to map dispatch actions to props in a React component.
// here the actions is dispatch to the props.
const mapDispatchToProps = (dispatch) => {
    return {
      buycake: () => dispatch(buycake()) // Remove the invocation of buycake()
    };
  };

//in the third step in need to connect
export default connect( mapStateToProps,mapDispatchToProps)(Cakecontainer);
//in this case cakecontainer connected  and not retun new component, rather make itself the comonent that receives the pros and the dispatch function
// after connecting a component using the connect function in React Redux,
// the connected component receives the mapped state and dispatch props as regular props. 
// These props allow the component to access the Redux store's state and dispatch actions.