import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Company</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Cars" />
          <Button onClickHandler={handleClick} value="BMW X5" title="BMW X5" />
          <Button onClickHandler={handleClick} value="Toyota Prius" title="Toyota Prius" />
          <Button onClickHandler={handleClick} value="Tesla Model S" title="Tesla Model S" />
          <Button onClickHandler={handleClick} value="Mercedes-Benz" title="Mercedes-Benz" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
