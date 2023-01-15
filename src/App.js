// # react-interview : CANDIDATURE KEVIN ADDA - adda-kevin@hotmail.fr

import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import  ToggleLikesBtn  from "./components/ToggleLikesBtn";
import {movies$} from './data/movies.js'
import { useEffect } from "react";
import { setMovies } from "./redux/movies"
import Pagination from "./components/Pagination";
import styled from 'styled-components';
import FilterSection from "./components/FilterSection";

const CardListContainer = styled.div `
  width: 100vw;
  min-height: 100%;
  background-color: #f1f1f1;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 30px;
`

export default function App() {
  const globalState = useSelector(state => state)
  const currentPage = useSelector(state => state.pagination.currentPage)
  const itemsPerPage = useSelector(state => state.pagination.itemsPerPage)
  const totalItems = globalState.movies.length
  const dispatch = useDispatch()

  // Setting current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = globalState.movies.slice(indexOfFirstItem, indexOfLastItem);

  // Setting the movie list at loading
  useEffect(() => {
    movies$.then(movies =>  dispatch(setMovies(movies)))
  }, [dispatch])


  return (
    <>
      <div className="App">
        <ToggleLikesBtn label="Cacher les likes/dislikes" />
        <FilterSection />
        <CardListContainer className="cardList_Container">
          {currentItems.map(movie => 
            <Card
              key={movie.id}
              movie={movie}
            />
          )}
        </CardListContainer>
        <Pagination 
          currentPage={currentPage} 
          itemsPerPage={itemsPerPage} 
          totalItems={totalItems} 
        />
      </div>
    </>
  );
}

