import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div >
            <nav style={{display:"flex",width:"80%",margin:"auto",justifyContent:"space-between",padding:"10px",backgroundColor:"#a49e8d",boxShadow:"0 5px 24px black"}}>
                <h1>Movie App</h1> <h2><Link to="/">Home</Link></h2>
            </nav>
        </div>
    );
};

export default Header;