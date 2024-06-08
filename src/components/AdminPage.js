import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPage = () => {
  const [car, setCar] = useState({
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    title: '',
    company: '',
    category: '',
    prevPrice: '',
    newPrice: '',
    seller: '',
    number: '',
    id: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({
      ...car,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setCar({
      ...car,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., sending data to an API
    console.log('Car added:', car);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add a New Car</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="img1" className="form-label">Image 1</label>
          <input
            type="file"
            className="form-control"
            id="img1"
            name="img1"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img2" className="form-label">Image 2</label>
          <input
            type="file"
            className="form-control"
            id="img2"
            name="img2"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img3" className="form-label">Image 3</label>
          <input
            type="file"
            className="form-control"
            id="img3"
            name="img3"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img4" className="form-label">Image 4</label>
          <input
            type="file"
            className="form-control"
            id="img4"
            name="img4"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={car.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="company" className="form-label">Company</label>
          <input
            type="text"
            className="form-control"
            id="company"
            name="company"
            value={car.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={car.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prevPrice" className="form-label">Previous Price</label>
          <input
            type="text"
            className="form-control"
            id="prevPrice"
            name="prevPrice"
            value={car.prevPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPrice" className="form-label">New Price</label>
          <input
            type="text"
            className="form-control"
            id="newPrice"
            name="newPrice"
            value={car.newPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="seller" className="form-label">Seller</label>
          <input
            type="text"
            className="form-control"
            id="seller"
            name="seller"
            value={car.seller}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">Contact Number</label>
          <input
            type="text"
            className="form-control"
            id="number"
            name="number"
            value={car.number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">Car ID</label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={car.id}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Car</button>
      </form>
    </div>
  );
};

export default AdminPage;
