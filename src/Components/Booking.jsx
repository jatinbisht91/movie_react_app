import {useContext,useState} from "react";
import MovieContext from "../Context/MovieContext";

const Booking = () => {
    const{summary}=useContext(MovieContext);
    
    const[name,setName]=useState(summary[0]?.show.name);
    const[duration,setDuration]=useState(summary[0]?.show.runtime);
    const[language,setLanguage]=useState(summary[0]?.show.language);
    const[uname,setUname]=useState(null);
    const[venue,setVenue]=useState("")

    const submitHandler=(e)=>{
        e.preventDefault();
        localStorage.setItem("booked movie",JSON.stringify({
           movie_name:name,
           m_duration:duration,
           m_lang:language,
           user_name:uname,
           m_hall:venue,
           ticket_booking_time: new Date()
        }))
    alert("Thanks for booking the ticket");
    }
    
    return (
        <div className="form-container">
            <h1> Movie Ticket Booking </h1>
            <form onSubmit={submitHandler} className="form">
                Movie Name : <input type="text" value={name} name="name"/>
                
                <label>Language:</label> <input type="text" value={language} name="lang"/>
                
                <label>Duration in "minutes" :</label> <input type="text" value={duration} name="duration"/>
                <label>User Name:</label> <input type="text" value={uname} name="uname" onChange={(e)=>{setUname(e.target.value)}} placeholder="set user name" required/>
                <label>Movie hall :</label> <input type="text" value={venue} name="duration" placeholder="write movie hall name" onChange={(e)=>{setVenue(e.target.value)}} required/>
                <button type="submit" className="btn">BOOK</button>
            </form>
        </div>
    );
};

export default Booking;