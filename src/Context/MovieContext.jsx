import { createContext, useState, useEffect } from 'react'

const MovieContext=createContext();

export const MovieProvider=({children})=>{
    const [isLoading, setIsLoading] = useState(true);
    const [movieList, setMovieList] = useState(null);
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        fetchMovieList()
      }, [])

  const fetchMovieList=async()=>{
        const response= await fetch(`https://api.tvmaze.com/search/shows?q=all`)
        const data=await response.json();
        setMovieList(data);
        setIsLoading(false);
  }

return(
    <MovieContext.Provider value={{isLoading,movieList,summary,setSummary}}>
        {children}
    </MovieContext.Provider>
)
}

export default MovieContext