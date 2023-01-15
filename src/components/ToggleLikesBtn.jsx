// # react-interview : CANDIDATURE KEVIN ADDA - adda-kevin@hotmail.fr

import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBtn } from '../redux/toggleBtn';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  font-size: 18px;
  gap: 6px;
  padding: 10px;
  font-family: "Open Sans", sans-serif;
`;

const Button = styled.button`
  border: none;
  outline: none;
  font-size: 20px;
  background-color: transparent;
  color: #661180;
  cursor: pointer;
`;

const Strong = styled.strong`
  font-weight: bold;
  margin-left: 10px;
`;


export default function ToggleLikesBtn({ label }) {
    const globalState = useSelector((state) => state)
    const dispatch = useDispatch()

    return (
        <Label>
            <Button>
                {globalState.toggleBtn ?
                    <BsToggleOn onClick={() => dispatch(toggleBtn())} /> :
                    <BsToggleOff onClick={() => dispatch(toggleBtn())} />
                }
            </Button>
            <span />
            <Strong>{label}</Strong>
        </Label>
    )
}
