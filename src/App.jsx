import { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    department: '0',
    time: '4:00',
    message: '',
  });
  const [formError, setFormError] = useState({
    fullname: '',
    email: '',
    department: '',
    time: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    console.log('arshali.com'.match(emailRegex));
    if (!formData.email.match(emailRegex)) {
      setFormError({ ...formError, email: 'Invalid Email Address' });
      console.log(formError);
    } else {
      setFormError({ ...formError, email: '' });
      console.log(formData);
      console.log(formError);
    }
  };
  return (
    <div className='app'>
      <h1 className='contact'>Contact Us</h1>
      <h2 className='appointment'>Make an Appoinment</h2>
      <h1 className='book-appointment'>Book an Appointment</h1>
      <form className='form-grid' onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor='fullname'>Name *</label>
          <input
            type='text'
            placeholder='Full Name *'
            required
            id='fullname'
            className='form-inputs'
            value={formData.fullname}
            name='fullname'
            onChange={(e) =>
              setFormData({ ...formData, fullname: e.target.value })
            }
          />
        </div>
        <div className='input-group'>
          <label htmlFor='email'>Email Address *</label>
          <input
            type='text'
            placeholder='Email *'
            required
            id='email'
            className='form-inputs'
            name='email'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <p className='error'>{formError.email}</p>
        </div>
        <div className='input-group'>
          <label htmlFor='department'>Department *</label>
          <select
            name='department'
            id='department'
            className='form-inputs'
            onChange={(e) =>
              setFormData({ ...formData, department: e.target.value })
            }
            value={formData.department}
          >
            <option value='0' hidden>
              Please Select
            </option>
            <option value='accounting'>Accounting</option>
            <option value='marketing'>Marketing</option>
            <option value='sales'>Sales</option>
          </select>
        </div>
        <div className='input-group'>
          <label htmlFor='time'>Time *</label>
          <select
            name='time'
            id='time'
            className='form-inputs'
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          >
            <option value='4:00'>4:00 Available</option>
            <option value='6:00'> 6:00 Available</option>
            <option value='8:00'> 8:00 Available</option>
            <option value='10:00'> 10:00 Available</option>
          </select>
        </div>
        <textarea
          placeholder='Message'
          id='message'
          name='message'
          className='form-inputs'
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          value={formData.message}
        ></textarea>
        <button type='submit' id='button'>
          Book Appointment
        </button>
      </form>
    </div>
  );
};
export default App;
