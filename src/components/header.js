import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/authActions';
import { useRouter } from 'next/router';


const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  return (
  
      <div className="bodynew">
        <div>Markets</div>
        <div>Rejected</div>
        <div>Accounts</div>
        {isLoggedIn && (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
  
  );
};

export default Header;
