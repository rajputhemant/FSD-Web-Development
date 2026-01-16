import React from 'react'
import { IoPieChart } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import { TbTransactionDollar } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";

const SiderBar = ({active,setActive}) => {
  return (
    <div className="p-3">
        <div className='text-xl font-bold'>
            User Dashboard
        </div>
        <hr />

        <div className='grid gap-3 p-6'>  
            <button className={`flex gap-3 items-center p-3 rounded-xl ${active==='overview'? "bg-(--color-secondary) text-white":" hover:bg-gray-100/70 "}` } onClick={()=>setActive("overview")}> <IoPieChart/> OverView</button>
            <button className={`flex gap-3 items-center p-3 rounded-xl ${active==='profile'? "bg-(--color-secondary) text-white":" hover:bg-gray-100/70 "}` } onClick={()=>setActive("profile")}> <ImProfile/> Profile</button>
            <button className={`flex gap-3 items-center p-3 rounded-xl ${active==='orders'? "bg-(--color-secondary) text-white":" hover:bg-gray-100/70 "}` } onClick={()=>setActive("orders")}> <TiShoppingCart/> Orders</button>
            <button className={`flex gap-3 items-center p-3 rounded-xl ${active==='transaction'? "bg-(--color-secondary) text-white":" hover:bg-gray-100/70 "}` } onClick={()=>setActive("transaction")}> <TbTransactionDollar/> Transactions</button>
            <button className={`flex gap-3 items-center p-3 rounded-xl ${active==='helpdesk'? "bg-(--color-secondary) text-white":" hover:bg-gray-100/70 "}` }onClick={()=>setActive("helpdesk")}><RiCustomerServiceLine/> Help Dask </button>

        </div>

    </div>
  )
}

export default SiderBar