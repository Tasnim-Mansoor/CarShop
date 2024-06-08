import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Models</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="electric"
          title="electric"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sports"
          title="sports"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sedan"
          title="sedan"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="hybrid"
          title="hybrid"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
