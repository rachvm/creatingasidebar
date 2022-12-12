import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import './style.css'



export default function App() {
    return(
        <div className="header">
            <h1 className="title">Simple Multiple Page Website with side bar</h1>    
            <div className="body">
                <div className="sidebar">
                   <Sidebar/> 
                </div>
                <div className="main">
                    <Outlet/>
                </div> 
            </div>
        </div>
    )
}