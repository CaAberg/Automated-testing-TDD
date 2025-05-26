import React from 'react';

interface SubTitleProps {
  text: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ text }) => {
  return (
    <h3 className="text-lg font-semibold text-gray-700">{text}</h3>
  );
};

export default SubTitle;
