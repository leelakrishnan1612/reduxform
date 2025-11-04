import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../sidecomponent/Input";
import Textarea from "../sidecomponent/Textarea";
import Button from "../sidecomponent/Button";
import { setCurrentStep, updateStep2 } from "../redux/formSlice";

const Step2 = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.form.step2);
  const [formData, setFormData] = useState(data);

  const handleNext = () => {
    dispatch(updateStep2(formData));
    dispatch(setCurrentStep(3));
  };

  const handlePrevious = () => {
    dispatch(updateStep2(formData));
    dispatch(setCurrentStep(1));
  };

  const isValid = formData.phone.trim() && formData.address.trim();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Step 2: Contact Details</h2>
      
      <Input
        label="Phone"
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="Enter your phone number"
      />

      <Textarea
        label="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        placeholder="Enter your address"
        rows={3}
      />

      <div className="flex justify-between">
        <Button  onClick={handlePrevious} variant="secondary">
          Previous
        </Button>
        <Button onClick={handleNext} disabled={!isValid}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step2