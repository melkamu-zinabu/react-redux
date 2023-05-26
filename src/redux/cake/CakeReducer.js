import { buy_cake } from "./CakeType"

const intialstate = {
    numberofcake:10
}
const  cakereducer=(state=intialstate,action)=>{
    switch(action.type) {
        case buy_cake:
            return {
                ...state,
                numberofcake:state.numberofcake-1
            }
        default: return state
    }


}
export default cakereducer