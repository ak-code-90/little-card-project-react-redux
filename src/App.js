import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import  ToggleLikesBtn  from "./components/ToggleLikesBtn";
import {movies$} from './data/movies.js'
import { useEffect } from "react";
import { filterMovies, setMovies } from "./redux/movies"
import {IoFilter} from 'react-icons/io5'
import {GrRefresh} from 'react-icons/gr'
import FilterBtn from "./components/FilterBtn";
import { resetSelectedCategories } from "./redux/selectedCategories";



function App() {
  const globalState = useSelector(state => state)
  const dispatch = useDispatch()
  

  useEffect(() => {
    movies$.then(movies =>  dispatch(setMovies(movies)))
  }, [dispatch])



  function handleFilterMovies() {
     dispatch(filterMovies(globalState.selectedCatgories))
  }

  function handleResetSelectedCategories() {
     dispatch(resetSelectedCategories())
     movies$.then(movies =>  dispatch(setMovies(movies)))
  }

  
  return (
    <>
      <div className="App">
        <ToggleLikesBtn label="Cacher les likes/dislikes" />
        <div className="filter_section_container">
            <div className="filter_Btn_container">
              {globalState.movies.some(film => film.category === "Thriller") &&
               <FilterBtn
                handleClick={handleFilterMovies}
                text="Thriller"
                category="Thriller"
                className={globalState.selectedCatgories.includes("Thriller") ? "thriller_btn" : "filter_btn"} 
                />}   
              {globalState.movies.some(film => film.category === "Comedy") &&
               <FilterBtn 
               handleClick={handleFilterMovies}
               text="Comedy" 
               category="Comedy"
               className={globalState.selectedCatgories.includes("Comedy") ? "comedy_btn" : "filter_btn"} 
              />}  

              {globalState.movies.some(film => film.category === "Animation") &&
               <FilterBtn 
               handleClick={handleFilterMovies}
               text="Animation" 
               category="Animation"
               className={globalState.selectedCatgories.includes("Animation") ? "animation_btn" : "filter_btn"} 
              />}  

              {globalState.movies.some(film => film.category === "Drame") &&
               <FilterBtn 
               handleClick={handleFilterMovies}
               text="Drame" 
               category="Drame"
               className={globalState.selectedCatgories.includes("Drame") ? "drame_btn" : "filter_btn"}
              />}    

            </div>
            <button className="reset_btn" onClick={handleResetSelectedCategories}><GrRefresh /></button>
            <button className="filter_submit_btn" onClick={handleFilterMovies}>Filtrer <IoFilter className="filter_icon" /></button> 
        </div>

        <div className="cardList_Container">
          {globalState.movies.map(movie => 
            <Card
              key={movie.id}
              movie={movie}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
