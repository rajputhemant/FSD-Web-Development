import React from "react";
import { IoPieChart } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import { TbTransactionDollar } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const SiderBar = ({ active, setActive , iscollapsed,setisCollapsed}) => {
  const menuItems=[
    {key:"overview",title:"OverView",icon:<IoPieChart />},
    {key:"profile",title:"Profile",icon:<ImProfile />},
    {key:"orders",title:"Orders",icon:<TiShoppingCart />},
    {key:"transaction",title:"Transaction",icon: <TbTransactionDollar />},
    {key:"helpdesk",title:"Help Dask",icon:<RiCustomerServiceLine />}
  ]
  return (
    <div className="p-3">
      <div className="h-10 text-xl font-bold flex gap-5  items-center"> 
        <button className="ms-2 hover:scale-105" onClick={()=>setisCollapsed(!iscollapsed)}><GiHamburgerMenu/></button> 
        {!iscollapsed && <span className="overflow-hidden text-nowrap">User Dashboard</span>}</div>
      <hr />

      <div className="py-6 space-y-5 w-full">
        {menuItems.map((item,idx)=>(<button
          className={`flex gap-3 items-center ps-2 rounded-xl h-10 text-nowrap w-full overflow-hidden duration-300 ${
            active === item.key
              ? "bg-(--color-secondary) text-white"
              : " hover:bg-gray-100/70 "
          }`}
          onClick={() => setActive(item.key)}
          key={idx}
        >
          {" "}
          {item.icon}
         
          {!iscollapsed && item.title}
        </button>))}
       
      </div>
    </div>
  );
};

export default SiderBar;
