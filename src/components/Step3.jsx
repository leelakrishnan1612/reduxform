import { useMutation } from "@tanstack/react-query";
import { submitFormData } from "../apiFunction";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep, updateStep3 } from "../redux/formSlice";
import { useState } from "react";

import Button from "../sidecomponent/Button";
import Input from "../sidecomponent/Input";

const Step3 = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.form.step3);
  const allData = useSelector(state => state.form);
  const [formData, setFormData] = useState(data);

  // React Query Mutation
  const mutation = useMutation({
    mutationFn: submitFormData,
    onSuccess: (data) => {
      console.log('Submission successful:', data);
    },
    onError: (error) => {
      console.error('Submission error:', error);
    }
  });

  const handlePrevious = () => {
    dispatch(updateStep3(formData));
    dispatch(setCurrentStep(2));
  };

  const handleSubmit = () => {
    dispatch(updateStep3(formData));

    const submitData = {
      name: allData.step1.name,
      email: allData.step1.email,
      phone: allData.step2.phone,
      address: allData.step2.address,
      company: formData.company,
      position: formData.position
    };

    mutation.mutate(submitData);
  };

  const handleReset = () => {
    dispatch(resetForm());
    mutation.reset();
  };

  const isValid = formData.company.trim() && formData.position.trim();

  if (mutation.isSuccess) {
    return (
      <div className="space-y-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="text-green-600 text-5xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">Form Submitted Successfully!</h2>
         
          
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Step 3: Work Information</h2>
      
      <Input
        label="Company"
        type="text"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        placeholder="Enter your company name"
        disabled={mutation.isPending}
      />

      <Input
        label="Position"
        type="text"
        value={formData.position}
        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
        placeholder="Enter your position"
        disabled={mutation.isPending}
      />

      {mutation.isError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          Error: {mutation.error.message}
        </div>
      )}

      <div className="flex justify-between">
        <Button
          onClick={handlePrevious} 
          variant="secondary"
          disabled={mutation.isPending}
        >
          Previous
        </Button>
        <Button
          onClick={handleSubmit} 
          variant="success"
          disabled={!isValid || mutation.isPending}
        >
          {mutation.isPending ? 'Submitting...' : 'Submit'}
        </Button>
      </div>
    </div>
  );
};

export default Step3