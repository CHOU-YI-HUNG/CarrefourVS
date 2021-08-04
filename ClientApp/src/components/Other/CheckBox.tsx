import React, { Dispatch, MouseEventHandler, ReactNode, SetStateAction, useState } from 'react'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { string } from 'prop-types';

interface Props {
    checkHandler?: MouseEventHandler<HTMLDivElement>
}
const CheckBox: React.FC<Props> = ({ checkHandler }) => {
    const [check, setCheck] = useState(false)
    const onClickHandler = () => {
        setCheck(!check)
    }

    return (
        <div onClick={onClickHandler}>
            <div onClick={checkHandler} >
                {check ? <CheckBoxIcon style={{ fill: 'blue' }} /> : <CheckBoxOutlineBlankIcon />}
            </div>
        </div>
    )
}

export default CheckBox
