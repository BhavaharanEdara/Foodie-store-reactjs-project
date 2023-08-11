import { createSlice } from "@reduxjs/toolkit";
import {data} from "../firebase.config"
const menuSlice = createSlice({
    name:'menu',
    initialState:{
        items :data[0][0].Data
    },
    reducers : {
        filterChicken:(state, action)=>{
            state.filter((Item)=>Item.cat.includes("chicken"))
        },
        filterFish:(state, action)=>{
            state.filter((Item)=>Item.cat.includes("fish"))
        },
        filterIce:(state, action)=>{
            state.filter((Item)=>Item.cat.includes("ice"))
        },
        filterDrink:(state, action)=>{
            state.filter((Item)=>Item.cat.includes("drinks"))
        },
        filterCurry:(state, action)=>{
            state.filter((Item)=>Item.cat.includes("curry"))
        },
        filterFruits:(state, action)=>{
            state.filter((Item)=>Item.cat.includes("fruits"))
        }
    }
})

export const {filterChicken, filterFish, filterIce , filterDrink, filterCurry , filterFruits} = menuSlice.actions;
export default menuSlice.reducer;  
