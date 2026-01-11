import { useRef, useState } from 'react';
import { PAGE_OPTION } from './constants/constant';
import './MainPage.css';
import Portfolio from './portfolio';

export default function MainPage({page,setPage}){
    const projUri = useRef(null);
    return page===PAGE_OPTION.OPEN_PROJECT && projUri.current!=null ?
            <div>proj {projUri.current}</div> :
            <Portfolio page={page} setPage={setPage} projUri={projUri}/>
    
}