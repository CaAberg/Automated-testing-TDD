import React from 'react';

interface CountButtonProps {
  countFunction: () => void;
}

const CountButton: React.FC<CountButtonProps> = ({ countFunction }) => {
  return (
    <div className="flex justify-center">
    <button
      data-testid="CountButton"
      onClick={countFunction}
      className="p-20 m-4 bg-green-500 rounded-xl flex self-center"
    >
      GO!
    </button>
    </div>
  );
};

export default CountButton;
