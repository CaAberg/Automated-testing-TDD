import React from "react";

export interface StartButtonprops {
    startFunction: () => void;
}


 const StartButton: React.FC<StartButtonprops> = ({ startFunction }) => {
    return (
        <div className="flex justify-center">
        <button 
        className=" p-20 m-4 bg-gray-500 rounded-xl flex self-center" 
        data-testid="startUp" 
        onClick={startFunction}>  
            Start
        </button>
        </div>
    )
} 

export default StartButton