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
    </div>
  )
}

export default Hookcakecontainer
