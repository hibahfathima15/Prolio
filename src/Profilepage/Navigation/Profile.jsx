import {useState} from 'react'
import './Profile.css'
import EditIcon from '@mui/icons-material/Edit';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

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
    <div>
      <div className='main-container'>
        <h1 className='prof'>Profile</h1>
        <div className='profile-line'></div>
        <div className='sub-container'>
          <div className='gen'>General</div>
          <div className='image-container'>
            <h1 className='profimg'>Profile Image</h1>
            <div className="image"></div>
              <div className='button'>
                <img className='upload' src="src/assets/upload.png" />
                <img className='delete' src="src/assets/delete.png" />
              </div>
            
          </div>
          <div className="input-container">
            <div className='stylerow'>
              <label>
                First Name:
                <div className='input-sub-container'>
                <input type="text" value={firstName} onChange={handleFirstNameChange} />
                <EditIcon/>
                </div>
              </label>
              <label>
                Last Name:
                <div className='input-sub-container'>
                <input type="text" value={lastName} onChange={handleLastNameChange} />
                <EditIcon/>
                </div>
              </label>
            </div>
            <div className='stylerow'>
              <label>
                Email:
                <div className='input-sub-container'>
                <input type="email" value={email} onChange={handleEmailChange} />
                <EditIcon />
                </div>
              </label>
              <label>
                Mobile number:
                <div className='input-sub-container'>
                <input type="tel" value={mobileNumber} onChange={handleMobileNumberChange} />
                <EditIcon />
                </div>
              </label>
            </div>
            <div className='stylerow1'>
              <label>
                Password:
                <div className='input-sub-container'>
                <input type="password" value={password} onChange={handlePasswordChange} />
                <VisibilityOffIcon/>
                <EditIcon />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
