import { useContext } from 'react'
import MovieContext from '../Context/MovieContext';
import MovieItem from './MovieItem';
const MovieList = () => {
const {movieList,isLoading}=useContext(MovieContext)

    return (
        <div>
            {isLoading?<h1>LOADING.....</h1>:(<div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"25px",padding:"30px"}}>
                {movieList.map((item)=><MovieItem key={item.show.id} item={item}/>)}
            </div>)}
        </div>
    );
};

export default MovieList;