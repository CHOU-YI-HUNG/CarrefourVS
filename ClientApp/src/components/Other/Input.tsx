import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react'
import '../../styles/Input.css'
interface Props {
    labelValue: string,
    setValue: Dispatch<SetStateAction<string>>,
    notNull?: boolean,
}


const Input: React.FC<Props> = ({
    labelValue,
    setValue
}) => {
    const style = {
        backgroundColor: '#fff',
        padding: '2px',
        top: '0',
        fontSize: '12px',
        color: '#3B7FC4',
    }
    const [inputStyle, setInputStyle] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const onChangeHandler = (_MouseEventHandler: any) => {
        setValue(_MouseEventHandler.target.value)
        if (_MouseEventHandler.target.value != '') {
            setInputStyle(true)
            setIsEmpty(true)
        }
        else {
            setInputStyle(false)
            setIsEmpty(false)
        }
    }


    return (
        <div className='inputContainer'>
            <input type='text' onChange={onChangeHandler}></input>
            {/* {_null && `請填入${labelValue}`} */}
            <label style={inputStyle ? style : {}}>{labelValue}</label>

        </div>
    )
}

export default Input
