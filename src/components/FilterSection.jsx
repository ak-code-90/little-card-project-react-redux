import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import FilterBtn from "./FilterBtn"
import { filterMovies, setMovies } from '../redux/movies';
import { resetSelectedCategories } from '../redux/selectedCategories';
import { movies$ } from '../data/movies';
import { IoFilter } from 'react-icons/io5'
import { GrRefresh } from 'react-icons/gr'

const FilterSectionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 0 10px;
`

const FilterBtnContainer = styled.div`
    padding: 30px 0;
    min-height: 15vh;
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    gap: 15px;

    button {
        padding: 3px 20px;
        border: 1px solid;
        border-radius: 3px;
        color: #ffffffd0;
        cursor: pointer;
    }

    .filter_btn {
    background-color: rgb(146, 146, 146);
    }

    .thriller_btn {
        background-color:crimson;
    }
    .thriller_btn:not(.card_category):hover {  
        background-color:rgb(255, 19, 66);
    }

    .comedy_btn {
    background-color:coral;
    }
    .comedy_btn:not(.card_category):hover {
    background-color:rgb(245, 83, 24);
    }

    .animation_btn {
    background-color:rgb(66, 66, 182);
    }
    .animation_btn:not(.card_category):hover {
    background-color:rgb(1, 1, 199);
    }

    .drame_btn {
    background-color: #3a3434;
    }
    .drame_btn:not(.card_category):hover {
    background-color: #685d5d;
    }

    .filter_icon {
    font-size: 15px;
    }
`

const ResetBtn = styled.button`
  padding: 3px;
  font-size: 16px;
  background-color: #aaa2a2;
  border: none;
  border-radius: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #c2b9b9;
  }
`
const FilterSubmitBtn = styled.button`
  font-size: 15px;
  padding: 3px 20px;
   border: 1px solid;
   border-radius: 3px;
   background-color:mediumseagreen;
  color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;
   cursor: pointer;
   &:hover {
    background-color:rgb(73, 214, 136);
   }
`



function FilterSection() {
    const globalState = useSelector(state => state)
    const dispatch = useDispatch()

    //Filter movies list
    function handleFilterMovies() {
        dispatch(filterMovies(globalState.selectedCatgories))
    }

    //Reset movies list
    function handleResetSelectedCategories() {
        dispatch(resetSelectedCategories())
        movies$.then(movies => dispatch(setMovies(movies)))

    }
    return (
        <FilterSectionContainer >
            <FilterBtnContainer >
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

            </FilterBtnContainer>
            <ResetBtn onClick={handleResetSelectedCategories}><GrRefresh /></ResetBtn>
            <FilterSubmitBtn onClick={handleFilterMovies}>Filtrer <IoFilter className="filter_icon" /></FilterSubmitBtn>
        </FilterSectionContainer>
    )
}

export default FilterSection