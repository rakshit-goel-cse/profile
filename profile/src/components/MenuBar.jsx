import "./MenuBar.css";

export default function MenuBar(){

    return(
        <div className="menu">
            <h3 className="name">Rakshit's Profile</h3>
            <div className="options">
                <div className="option">Home/Profile</div>
                <div className="option">Projects</div>
                <div className="option">Contact</div>
            </div>
        </div>
    );
}