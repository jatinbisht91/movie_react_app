import { useNavigate } from "react-router-dom";

const MovieItem = ({item}) => {
    const {show,score}=item;
    const {name,language,status,runtime,rating}=show
    const navigate=useNavigate();
    return (
        <div className="Card" >
            
            <img src={show.image.medium}/>
            <div className="description">
                <h1 style={{textAlign:"center"}}>{name}</h1>
                <div style={{display:"flex",justifyContent:"space-between"}}><span>Language:{language}</span><span></span>Score:{score.toFixed(3)}</div>
                <div style={{display:"flex",justifyContent:"space-between"}}><span>Status:{status}</span><span></span>Runtime:{runtime}</div>
                <h2 style={{textAlign:"center"}}>Rating : {rating.average? rating.average:"0"}</h2>
            </div>
            <button  className="btn" onClick={()=>{navigate(`/summary/${show.id}`)}}>SUMMARY</button>
        </div>
    );
};

export default MovieItem;