import React from 'react';

const Form = () => {
  return (
    <form className="form-message">
      <h2>Get A Quote Here <span className="arrow">↘</span></h2>

      <label htmlFor="fullname">FULL NAME</label>
      <input type="text" id="fullname" name="fullname" required />

      <label htmlFor="phone">PHONE<span className="required">*</span></label>
      <input type="tel" id="phone" name="phone" required />

      <label htmlFor="email">EMAIL ADDRESS<span className="required">*</span></label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">MESSAGE</label>
      <textarea id="message" name="message" rows="3" />

      <button type="submit">Submit Now</button>
    </form>
  );
};

export default Form;
