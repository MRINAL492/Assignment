import { createSlice } from "@reduxjs/toolkit";
import { BooksData } from "../FakeData";

export const userSlice = createSlice(
    {
        name : "users",
        initialState : {value : BooksData},
        reducers: {
            addUser : (state,action)=>{
               state.value.push(action.payload)
            },

            deleteBook: (state, action) => {
                state.value = state.value.filter((user) => user.id !== action.payload.id);
              },

            updateStatus : (state , action )=>{
                state.value.map((user)=>{
                    if(user.id === action.payload.id){
                        user.status  = action.payload.status;
                    }
                })
            },

            updateSubscriber : (state , action )=>{
                state.value.map((user)=>{
                    if(user.id === action.payload.id){
                        user.issued_To  = action.payload.issued_To;
                    }
                })
            }
        }
    }
);

export const {addUser , deleteBook , updateStatus , updateSubscriber} = userSlice.actions
export default userSlice.reducer;