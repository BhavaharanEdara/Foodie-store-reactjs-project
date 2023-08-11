import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : [],
    },
    reducers:{
        addItem : (state, action)=>{
            state.items.push(action.payload);
        },
        clearCart :(state)=>{
            state.items = [];
        },
        removeItem :(state, action)=>{
            
            for (let i = 0; i < state.items.length; i++) {
                if(state.items[i].name === action.payload.name){
                    state.items.splice(i, 1);
                    break
                }
            }
        
        },
    },
});



export const { addItem, clearCart, removeItem} = cartSlice.actions;

export default cartSlice.reducer;
