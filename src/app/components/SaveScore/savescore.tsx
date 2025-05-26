// SaveScore.tsx
import React from 'react';

interface SaveScoreProps {
  count: number;
  scores: number[];
  addScore: () => void;
}

const SaveScore: React.FC<SaveScoreProps> = ({ count, scores, addScore }) => {
  return (
    <div className="space-y-4">
      <div data-testid="userCount" className="text-xl font-bold">
        {count}
      </div>
      
      <button
        data-testid="saveScoreButton"
        onClick={addScore}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
      >
        Save score!
      </button>

      <div className="px-4 py-2 rounded bg-green-300">
        saved scores
        {scores.length > 0 &&
          scores.map((score, index) => (
            <div key={index} data-testid="save-item" className="text-lg">
              {score}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SaveScore;

