import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../sidecomponent/Input';
import Button from '../sidecomponent/Button';
import { setCurrentStep, updateStep1 } from '../redux/formSlice';

const Step1 = () => {
    const dispatch = useDispatch();

    const data = useSelector(state => state.form.step1);
    const[formData,setFormData] = useState(data);
    const isValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.email.includes('@')    
    const handleNext =() => {
        dispatch(updateStep1(formData))
        dispatch(setCurrentStep(2));
    }
  return (
    <div className='space-x-6'>
        <h2 className='text-2xl font-bold text-grey-800'>step1 : Personal Information</h2>
        <div className='space-x-5'>
        <Input 
        
        label="Name"
        type="text"
        value={formData.name}
        onChange={(e)=> setFormData({...formData,name:e.target.value})}
        placeholder="enter your name"
        />
        <Input

        label="Email"
        type='text'
        value={formData.email}
        onChange={(e)=>setFormData({...formData,email:e.target.value})}
        />
        </div>
    
        <div className='flex jsutify-end mb-5 mt-10'>
            <Button onClick={handleNext} disabled={!isValid}>
                Next
            </Button>
        </div>

    </div>
  )
}

export default Step1