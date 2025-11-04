import { useSelector } from "react-redux"
import { currentStep } from "./redux/formSlice";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import ProgressIndicator from "./ProgressIndicator";


function App() {
  const currentStepen = useSelector(currentStep);
  

  return (
   <div className="max-w-2xl mx-auto p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Multi-Step Form</h1>
        
   

        {currentStepen === 1 && <Step1 />}
        {currentStepen === 2 && <Step2 />}
        {currentStepen === 3 && <Step3 />}
      </div>
    </div>
    )
}

export default App
