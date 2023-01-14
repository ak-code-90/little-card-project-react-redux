
import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { removeMovie } from '../redux/movies';

export default function Card({ movie }) {
    const isToggle = useSelector(state => state.toggleBtn)
    const dispatch = useDispatch()

    return (
        <div className="card_container">
            <div className="card_infos">
                <h2 className="card_title">{movie.title}</h2>
                <button
                    className={`card_category 
                        ${movie.category === 'Comedy' ? "comedy_btn" :
                            movie.category === 'Animation' ? "animation_btn" :
                                movie.category === 'Thriller' ? "thriller_btn" :
                                    movie.category === 'Drame' ? "drame_btn" : null
                        }`}
                >{movie.category}</button>
            </div>
            {!isToggle &&
                <div className="card_likes_container">
                    <div>
                        <FaThumbsUp style={{ marginRight: '6px' }} />

                        <span>{movie.likes}</span>
                    </div>
                    <div >
                        <FaThumbsDown style={{ marginRight: '6px' }} />
                        <span>{movie.dislikes}</span>
                    </div>
                </div>
            }
            <button onClick={() => dispatch(removeMovie(movie.id))} className='remove_btn'>
                <RxCross1 />
            </button>
        </div>
    )
}
