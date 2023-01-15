// # react-interview : CANDIDATURE KEVIN ADDA - adda-kevin@hotmail.fr

import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedCategories } from '../redux/selectedCategories'


function FilterBtn({ className, text, category }) {
    const dispatch = useDispatch()
    return (
        <>
            <button
                onClick={() => dispatch(setSelectedCategories(category))}
                className={`filter_btn ${className}`}>{text}
            </button>
        </>
    )
}

export default FilterBtn