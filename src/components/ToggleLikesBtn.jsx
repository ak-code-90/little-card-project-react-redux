import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBtn } from '../redux/toggleBtn';


function ToggleLikesBtn({ label }) {
    const globalState = useSelector((state) => state)
    const dispatch = useDispatch()


    return (
        <label className='toggleBtnLabel'>
            <button className='toggleBtn' >
                {globalState.toggleBtn ?
                    <BsToggleOn onClick={() => dispatch(toggleBtn())} /> :
                    <BsToggleOff onClick={() => dispatch(toggleBtn())} />
                }
            </button>
            <span />
            <strong>{label}</strong>
        </label>
    )
}

export default ToggleLikesBtn