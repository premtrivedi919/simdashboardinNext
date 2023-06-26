import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { logout } from '../store/actions/authActions';

import { fetchStrategies } from '../store/actions/strategyActions';
import BasicCard from '../components/card';

const Strategy = () => {



  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, strategies, error } = useSelector((state) => state.strategy);

  useEffect(() => {
    dispatch(fetchStrategies());
  }, [dispatch]);

  const handleLoginSuccess = () => {
    router.push('/strategylist');
  };

  if (loading) {
    return <div>Loading strategies...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleLogout = () => {
  
  
    dispatch(logout());
    router.push('/');
  };
  
  return (
    <>
<div className='body'>

      <div className="bodynew">
       <div className='bodynewbase'>  <img src="favicon2.png" />
        <div className='headerline'>Markets</div>
        <div className='headerline'>Rejected</div>
        <div className='headerline'>Accounts</div></div>
       
         <div onClick={handleLogout}>  <img src="logout.png" /></div>
        
      </div>

      <div className="strategycont">
      <div className="aligntext">
          <div>
            <span className="c1">Equity</span> <span className="c11">US</span>
          </div>


          
          <div className="c2">
          <button className="c2 c2btn"  onClick={handleLoginSuccess}>View all</button>
            </div>
        </div>

        {/* Existing card components */}
        <div className="cardstrategy">
          {strategies.map((strategy) => (
            <Card key={strategy.id} variant="outlined" sx={{ Width: 275 }}>
              <CardContent>

              <Typography variant="h5" component="div">
              RF 100 -15M 
                </Typography>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Investment
                </Typography>

             
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="10" height="10" rx="2" fill="#43A047"/>
</svg> &nbsp;
ROI- {strategy.id}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="10" height="10" rx="2" fill="#C21C1D"/>
</svg> &nbsp;
Drawdown- {strategy.name}
                </Typography>
                {/* Render the remaining properties similarly */}

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="10" height="10" rx="2" fill="#EB996E"/>
</svg> &nbsp;
Users-following- {strategy.id}
                </Typography>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Card components from SignIn */}
        <div className="aligntext">
          <div>
            <span className="c1">Equity</span> <span className="c11">India</span>
          </div>
          <div className="c2">
          <button className="c2 c2btn"  onClick={handleLoginSuccess}>View all</button>
            </div>
        </div>
        <div className="cardstrategy">
          <BasicCard word="RF 100 -15M" tag1="Investment -" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment -" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment -" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment -" tag2="ROI" tag3="Drawdown" tag4="users-following" />

        </div>
      </div></div>
    </>
  );
};

export default Strategy;
