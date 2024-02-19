import React, { useState } from 'react';

const AddBookPage = () => {

  const [formData, setFormData] = useState({
    iSBN: '',
    title: '',
    author: '',
    price: '',
    genre: ''
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    const newValidationErrors = { ...validationErrors };

  //   if (name === 'iSBN') {
  //     const iSBNRegex = /^\d{13}$/;
  //     if (!iSBNRegex.test(value)) {
  //       newValidationErrors.iSBN = 'iSBN should be 13 digits';
  //     } else {
  //       delete newValidationErrors.iSBN;
  //     }
  //   } else {
  //     if (value.trim() === '') {
  //       newValidationErrors[name] = ${name} is required;
  //     } else {
  //       delete newValidationErrors[name];
  //     }
  //   }

  //   setValidationErrors(newValidationErrors);
   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (Object.values(validationErrors).some(error => error !== '')) {
      alert('Please fix the validation errors before submitting.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/AddBook', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
          const data = await response.json();
          console.log('Book added successfully:', data);
          alert('Book added successfully');
          setFormData({
            iSBN: '',
            title: '',
            author: '',
            price: '',
            genre: ''
          });
      } else {
          console.error('Book add failed');
          alert('Internal Server Error. Please try again later.');
      }
  } catch (error) {
      console.error('Error during add book:', error);
      alert('Error during add book. Please try again later.');
  }
};

  return (
    <div className="container mt-5">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="iSBN" className="form-label">ISBN</label>
          <input type="text" maxLength={13} className="form-control" id="iSBN" name="iSBN" value={formData.iSBN}  onChange={handleInputChange} />
          {validationErrors.iSBN && <div className="text-danger">{validationErrors.iSBN}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleInputChange} />
          {validationErrors.title && <div className="text-danger">{validationErrors.title}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" className="form-control" id="author" name="author" value={formData.author} onChange={handleInputChange} />
          {validationErrors.author && <div className="text-danger">{validationErrors.author}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" className="form-control" id="price" name="price" value={formData.price} onChange={handleInputChange} />
          {validationErrors.price && <div className="text-danger">{validationErrors.price}</div>}
        </div>
        <div className="mb-3">
  <label htmlFor="genre" className="form-label">Genre</label>
  <select className="form-select" id="genre" name="genre" value={formData.genre} onChange={handleInputChange}>
    <option value="">Select Genre</option>
    <option value="Educational">Educational</option>
    <option value="Historical Fiction">Historical Fiction</option>
    <option value="Horror">Horror</option>
    <option value="Mystery">Mystery</option>
    <option value="Romance">Romance</option>
    <option value="Science Fiction">Science Fiction</option>
    <option value="Other">Other</option>
  </select>
  {validationErrors.genre && <div className="text-danger">{validationErrors.genre}</div>}
</div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    
  );
};

export default AddBookPage;