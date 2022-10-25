import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CustomerAPI from '../../apis/customerApi'

export const getCustomers = createAsyncThunk('fetch/customers', async() =>{
    try{
        const response = await CustomerAPI.getAllCustomers()
        return response.data.customers
    }catch(err){
        console.log(err)
    }
})

export const customerSlice = createSlice({
    name: 'customer',
    initialState: [],
    extraReducers(builder){
        builder
            .addCase(getCustomers.fulfilled, (state, action) =>{
                return state = action.payload
            })
    }
})

export default customerSlice.reducer