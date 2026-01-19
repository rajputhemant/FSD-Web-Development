import React, { useState } from 'react'
import SiderBar from '../../components/userDashboard/UserSiderBar'
import UserOverview from '../../components/userDashboard/UserOverview';
import UserProfile from '../../components/userDashboard/UserProfile';
import UserOrders from '../../components/userDashboard/UserOrders';
import UserTransactions from '../../components/userDashboard/UserTransactions';
import UserHelp from '../../components/userDashboard/UserHelp';

const UserDashboard = () => {
    const [active, setActive]=useState('overview');
    const [iscollapsed,setisCollapsed]=useState(false)
  return (
   <>
    <div className='flex h-[90vh] w-full'>
        <div className={`bg-(--color-background) duration-300 ${iscollapsed?"w-2/60":"w-12/60"}`}>
        <SiderBar active={active} setActive={setActive}
          iscollapsed={iscollapsed} setisCollapsed={setisCollapsed}/>
        </div>
        <div className={`duration-300 ${iscollapsed?"w-58/60":"w-48/60"}`}>
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