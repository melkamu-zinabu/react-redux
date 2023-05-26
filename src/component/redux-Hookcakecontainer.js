import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buycake } from '../redux/cake/CakeAction'
const Hookcakecontainer = () => {
  //it is like map to props
  const numberofcake= useSelector(state=>state.numberofcake)
  const dispatch=useDispatch()
  return (
    <div>
      <h2>numberofcake-{numberofcake}</h2>
      <button onClick={()=>dispatch(buycake())}>buycake</button>
      {/*
      dispatch function doesn't decide where to dispatch the action. 
      It simply sends the action to the Redux store
      When you dispatch an action using dispatch(buycake()), 
      the action will be passed to both reducer1 and reducer2 (if we have 2 reducer) within the root reducer. 
      Each reducer will check the action's type and decide how to update its portion of the state.
    */}
      </div> 
  )
}

export default Hookcakecontainer
