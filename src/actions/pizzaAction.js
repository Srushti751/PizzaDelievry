import axios from "axios";

export const getAllPizzas = ()=>async(dispatch)=>{
    dispatch({type:'GET_PIZZA_REQ'})
    try{
            const res = await axios.get('/api/pizzas/getPizzas')
            console.log(res)
            dispatch({type:'GET_PIZZA_SUCCESS', payload:res.data})
    }catch(error){
        dispatch({type:'GET_PIZZA_FAIL', payload:error})
    }
}