import { PAGE_OPTION } from './constants/constant';
export default function Portfolio({page,setPage,projUri}){

    return(<>
        <p>page- {page}</p>
        <button onClick={()=>{
            projUri.current = "Demo URI";
            setPage(PAGE_OPTION.OPEN_PROJECT);
        }}>set Proj</button>
    </>);
}