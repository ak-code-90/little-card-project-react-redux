// # react-interview : CANDIDATURE KEVIN ADDA - adda-kevin@hotmail.fr

import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { removeMovie } from '../redux/movies';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  max-width: 100%;
  width: 260px;
  min-width: 260px;
  min-height: 180px;
  padding: 30px 5px;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  align-items: center;
  gap: 16px;
  background-color: rgb(102, 17, 128);
  color: salmon;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(#000, 0.2);
  user-select: none;
  transition: 0.25s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 10px -10px rgba(#7f8c8d, 1);
  }
`;

const CardInfos = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 8px;
`;

const CardCategory = styled.button`
  padding: 3px 10px;
  border: none;
  border-radius: 3px;
  color: #fff;
  &.comedy_btn {
    background-color:coral;
  }
  &.thriller_btn {
  background-color:crimson;
  }
  &.animation_btn {
  background-color:rgb(66, 66, 182);
  }
  &.drame_btn {
  background-color: #3a3434;
  }
`;

const CardLikesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 8px 12px;
  color: #ffffffd0;
  background-color: #8d55a3;
  border-radius: 2px;

  div {
    display: inline;
    & > * {
        margin-right: 8px;
    } 
  }

`;

const RemoveBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  color: salmon;
  background-color: hsl(286, 77%, 28%);
  border: none;
  margin: 3px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;

export default function Card({ movie }) {
    const isToggle = useSelector(state => state.toggleBtn)
    const dispatch = useDispatch()

    return (
        <CardContainer>
            <CardInfos>
                <h2>{movie.title}</h2>
                <CardCategory
                    className={`card_category ${movie.category === 'Comedy' ? "comedy_btn" :
                        movie.category === 'Animation' ? "animation_btn" :
                            movie.category === 'Thriller' ? "thriller_btn" :
                                movie.category === 'Drame' ? "drame_btn" : null
                        }`}
                >
                    {movie.category}
                </CardCategory>
            </CardInfos>
            {!isToggle &&
                <CardLikesContainer>
                    <div>
                        <FaThumbsUp />
                        <span>{movie.likes}</span>
                    </div>
                    <div >
                        <FaThumbsDown />
                        <span>{movie.dislikes}</span>
                    </div>
                </CardLikesContainer>
            }
            <RemoveBtn onClick={() => dispatch(removeMovie(movie.id))}>
                <RxCross1 />
            </RemoveBtn>
        </CardContainer>
    )
}