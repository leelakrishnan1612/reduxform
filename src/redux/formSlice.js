import { createSlice } from "@reduxjs/toolkit";



 const formSlice = createSlice({
    name:'form',
    initialState:{
        step1:{name:'' ,email:''},
        step2:{phone:'',address:''},
        step3:{company:'',position:'',
      
        },
          currentStep:1
    },
    reducers:{
        updateStep1 : (state ,action) => {
            state.step1 = action.payload;
        },
        updateStep2 : ( state,action) => 
        {
            state.step2 =action.payload;
        },
        updateStep3 : (state,action) => 
        {
            state.step3 =action.payload;
        },
        setCurrentStep : (state ,action) => {
            state.currentStep =action.payload;
        },
        resetForm:(state) => {
            state.step1 = {name:'',email:''}
            state.step2 ={phone:'',address:''}
            state.step3 = { company:'',position:''}
            state.currentStep =1
        }

    }

});
export const {updateStep1,updateStep2,updateStep3,setCurrentStep,resetForm} = formSlice.actions;
export const currentStep = (state) => state.form.currentStep;
export default formSlice.reducer
