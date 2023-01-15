// # react-interview : CANDIDATURE KEVIN ADDA - adda-kevin@hotmail.fr

import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeItemsPerPage, changePage } from '../redux/pagination';

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 30px;

  & label {
  display: flex;
  align-items: center;
  gap: 5px;
  padding-top: 20px;
  }

  & select {
    padding-left: 5px;
  }
`;

const PaginationButtons = styled.div`
  display: flex;
  gap: 15px;
  .currentPageBtn {
    border-radius: 3px;
    border:2px solid transparent;
    padding: 0 5px;
    color: white;
    background-color: mediumseagreen;
  }
`;

const Button = styled.button`
  padding: 0 5px;
  cursor: pointer;
`;



export default function Pagination({ currentPage, itemsPerPage, totalItems, }) {

    const dispatch = useDispatch()
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <PaginationContainer>
            <div>
                <label>Nombre d'éléments par page :
                    <select value={itemsPerPage} onChange={e => dispatch(changeItemsPerPage(e.target.value))}>
                        <option value={4}>4</option>
                        <option value={8}>8</option>
                        <option value={12}>12</option>
                    </select>
                </label>
            </div>
            <PaginationButtons>
                <Button disabled={currentPage === 1} onClick={() => dispatch(changePage(currentPage - 1))}>◀️ Précédent</Button>
                {pageNumbers.map(number => (
                    <Button
                        key={number}
                        className={number === currentPage && 'currentPageBtn'}
                        onClick={() => dispatch(changePage(number))}
                    >
                        {number}
                    </Button>
                ))}
                <Button disabled={currentPage === pageNumbers.length} onClick={() => dispatch(changePage(currentPage + 1))}>Suivant ▶️</Button>
            </PaginationButtons>
        </PaginationContainer>
    )
}

