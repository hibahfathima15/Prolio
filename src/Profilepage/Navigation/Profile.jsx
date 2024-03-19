import {useState} from 'react'
import './Profile.css'

const Profile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
  
    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
    };
  
    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleMobileNumberChange = (e) => {
      setMobileNumber(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    return (
      <div className='main-container'>
          <div className='gen'>General</div>
  
          <div className="sub-container">
        <div className="image">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="6em"
            viewBox="0 0 448 512"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </div>
        <div className="button">
          <button className="btn-1">Upload Image</button>
          <button className="btn-2">Delete</button>
        </div>
      </div>
  
          <div className="input-container">
          <div className='stylerow'>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={handleFirstNameChange} />
          </label>
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={handleLastNameChange} />
          </label>
          </div>
          <div className='stylerow'>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Mobile number:
            <input type="tel" value={mobileNumber} onChange={handleMobileNumberChange} />
          </label>
          </div>
          <div className='stylerow1'>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          </div>
        </div>
      </div>
  )
}

export default Profile
