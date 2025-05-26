import React from 'react';

interface CountDownProps {
  secondToDisplay: number;
}

const CountDown: React.FC<CountDownProps> = ({ secondToDisplay }) => {
  const formattedTime =
    secondToDisplay > 0
      ? `00:${secondToDisplay.toString().padStart(2, '0')}`
      : '00:00';

  return (
    <div className="text-2xl font-bold">
      
      <div data-testid="countdown">{formattedTime}</div>

      <span data-testid="countSeconds">{secondToDisplay}</span>
    </div>
  );
};

export default CountDown;

