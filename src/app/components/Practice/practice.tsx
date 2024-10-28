export const Practice = () => {
  return (
    <footer
      data-testid="increase-head"
      className="w-full bg-gray-500 text-center flex flex-col py-8"
    >
      How to increase Clicking Speed!
      <div className="flex justify-around">
        <section className="flex flex-col bg-gray-300 p-4 rounded-lg">
          <h2 data-testid="practice-head">Practice!</h2>
          <p data-testid="practice-p">
            Practice your clicking and use this program to see your progress.
          </p>
        </section>

        <section className="flex flex-col bg-gray-300 p-4 rounded-lg">
          <h2 data-testid="master-head">Master Clicking Techniques!</h2>
          <p data-testid="learn-p">
            Learn new clicking techniques will improve your test score
          </p>
        </section>
      </div>
    </footer>
  );
};
