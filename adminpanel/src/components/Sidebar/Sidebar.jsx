import React from "react"
import { Link } from "react-router-dom"
import {asset} from "../../assets/assets"

const Sidebar = ({sidebarToggle}) => {
  return (
    <div>
       <div className={`border-end bg-white ${sidebarToggle? '':'d-none'}`} id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light"><img src={asset.logo} alt="" height={70} width={70} /></div>
                <div className="list-group list-group-flush">
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to={"/add"}>
                      <i className="bi bi-plus-circle me-2"/> Add Food</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to={"/list"}>
                      <i className="bi bi-list-ul me-2"/>List Foods</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to={"/orders"}>
                      <i className="bi bi-cart me-2"/>Orders</Link>
                    
                </div>
            </div>
            
    </div>
  )
}
export default Sidebar