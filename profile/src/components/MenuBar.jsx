import { PAGE_OPTION } from "./constants/constant";
import "./MenuBar.css";

export default function MenuBar({setPage}){

    return(
        <div className="menu">
            <h3 className="name" onClick={()=>setPage(PAGE_OPTION.HOME)} >Rakshit's Profile</h3>
            <div className="options">
                <div className="option" onClick={()=>setPage(PAGE_OPTION.HOME)} >Home/Profile</div>
                <div className="option" onClick={()=>setPage(PAGE_OPTION.PROJECTS)} >Projects</div>
                <div className="option" onClick={()=>setPage(PAGE_OPTION.CONTACT)} >Contact</div>
            </div>
        </div>
    );
}