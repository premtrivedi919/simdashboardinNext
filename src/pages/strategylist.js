import React from 'react'
import EnhancedTable from "../components/strategylist.js";
import TablePage from '@/components/table.js';
import { logout } from '../store/actions/authActions';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
const strategylist = ()=>{



  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
  
  
    dispatch(logout());
    router.push('/');
  };

  return (
    <div className="body">
    <div className="bodynew">
       <div className='bodynewbase'>  <img src="favicon2.png" />
        <div className='headerline'>Markets</div>
        <div className='headerline'>Rejected</div>
        <div className='headerline'>Accounts</div></div>
       
         <div onClick={handleLogout}>  <img src="logout.png" /></div>
        
      </div>
<TablePage />
    </div>
  )
}
export default strategylist;