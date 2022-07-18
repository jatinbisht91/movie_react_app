import { useParams } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "../Context/MovieContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Summary = () => {
    const { id } = useParams()
   const navigate=useNavigate()
    const { movieList,summary,setSummary } = useContext(MovieContext)
    useEffect(() => {
        setSummary(movieList?.filter((item) => item.show.id === parseInt(id)));
        
    }, [id])
  


    return (

        <div className="summary">
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100vh",gap:"10px"}}>
                <h1 style={{color:"red",textAlign:"center"}}>{summary[0]?.show.name}</h1>
                <div style={{color:"green",lineHeight:"1.6",fontSize:"25px",textAlign:"center"}}>{summary[0]?.show.summary}</div>
                <button className="btn" onClick={()=>{navigate("/booking")}}>Book Ticket</button>
              

            </div>
           
        </div>
    );
};

export default Summary;