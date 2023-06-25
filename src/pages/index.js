import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/authActions';
import { useRouter } from 'next/router';
import SignIn from './strategy';
const IndexPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username, password, handleLoginSuccess));
  };

  const handleLoginSuccess = () => {
    router.push('/strategy');
  };

  return (
    <div className="sign-in">
       <div className="sign-up-wrapper">

       <div className="sign-up1"> <div className="frame-parent86">
       <div className="frame-parent87">
       <div className="sign-in-wrapper1">
            <div className="sign-in4">      <img className="frame-icon" alt="" src="/favicon.png" />
</div>
<div>Login</div>
          </div>
     
      <form className="sign-in-wrapper1form" onSubmit={handleLogin}>

      <div className="input-with-label-container">
       

        <div className="input-with-label3">
              <div className="input-with-label4">
          <label className="label2">Username:</label>
          <input  className="input2" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
     </div></div>  
     
     
       

        <div className="input-with-label-parent1">
              <div className="input-with-label4">
          <label className="label2">Password:</label>
          <input className="input3" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       
          </div></div>  
       
      
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <button className="sign-in-frame" type="submit"><div className="sign-in3">Login</div></button></div>
      </form>
      
      </div>
      
      
      
      
      </div>
      </div>
      </div>
    </div>
  );
};

export default IndexPage;
