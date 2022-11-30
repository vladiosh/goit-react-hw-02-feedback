const Feedback = () => {
  return (
    <div className="feedback">
      <h1 className="head__feedback">Please leave feedback</h1>
      <div className="button">
        <ul className="button__list">
          <li className="button__item">
            <button type="button">Good</button>
          </li>
          <li className="button__item">
            <button type="button">Neutral</button>
          </li>
          <li className="button__item">
            <button type="button">Bad</button>
          </li>
        </ul>
      </div>
      <div className="statistics">
        <h2 className="head__stat">Statistics</h2>
        <ul className="stat__list">
          <li className="stat__item">good:</li>
          <li className="stat__item">neutral:</li>
          <li className="stat__item">bad:</li>
        </ul>
      </div>
    </div>
  );
};

export default Feedback;
