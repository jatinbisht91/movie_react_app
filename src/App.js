import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MovieList from './Components/MovieList';
import { MovieProvider } from './Context/MovieContext';
import Summary from './Components/Summary';
import Booking from './Components/Booking';
import Header from './Components/Header';
function App() {
  return (
    <MovieProvider>
      <Router>
        <Header/>
        <Routes>
           <Route  path="/" element={<MovieList />}  />
           <Route  path="/summary/:id" element={<Summary />}  />
           <Route  path="/booking" element={<Booking />}  />
        </Routes>
      </Router>

    </MovieProvider>
  );
}

export default App;
