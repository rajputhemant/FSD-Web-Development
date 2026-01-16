import React, { useState } from 'react'
import SiderBar from '../../components/userDashboard/UserSiderBar'
import UserOverview from '../../components/userDashboard/UserOverview';
import UserProfile from '../../components/userDashboard/UserProfile';
import UserOrders from '../../components/userDashboard/UserOrders';
import UserTransactions from '../../components/userDashboard/UserTransactions';
import UserHelp from '../../components/userDashboard/UserHelp';

const UserDashboard = () => {
    const [active, setActive]=useState('overview');
  return (
   <>
    <div className='flex h-[90vh] w-full'>
        <div className="bg-(--color-background) border-green-400 w-2/10">
        <SiderBar active={active} setActive={setActive}/>
        </div>
        <div className="border border-amber-400 w-8/10">
        {active==='overview'&& <UserOverview/>}
        {active==='profile'&& <UserProfile/>}
        {active==='orders'&& <UserOrders/>}
        {active==='transaction'&& <UserTransactions/>}
        {active==='helpdesk'&& <UserHelp/>}
        </div>
    </div>
   </>
  )
}

export default UserDashboard