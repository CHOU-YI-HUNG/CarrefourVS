import React, { useState, useEffect, useRef, ReactNode } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ReactComponent as ListIconComp } from "../../assets/images/icon_list.svg"
import { NavbarListData } from '../../assets/database/DataBase'
import NavbarListThird from './NavbarListThird'
import '../../styles/NavbarList.css'
import axios from 'axios'
function NavbarList() {
    // const [ThirdLayerHeight, setThirdLayerHeight] = useState<HTMLUListElement["offsetHeight"]>()
    // const ThirdListHeight = useRef<HTMLUListElement>(null)
    const FirstList: ReactNode[] = []
    const SecondList: ReactNode[] = []
    const [toggleAll, setToggleAll] = useState<boolean>(true)
    const history = useHistory()

    useEffect(() => {
        let mounted = true;
        if(mounted){
            history.listen((location) => {
                setToggleAll(location.pathname === "/")
            })
        }

        return (() => {mounted = false});
    }, [])




    // useEffect(()=>{
    //     setThirdLayerHeight(
    //         ThirdListHeight.current?.offsetHeight
    //     )
    // },[ThirdLayerHeight])

    for (let i = 0; i < NavbarListData.FirstLayer.length; i++) {
        FirstList.push(
            <React.Fragment key={i}>
                {i === 0 ?
                    <li style={{ backgroundColor: 'blue' }} >
                        <a >
                            <ListIconComp style={{ fill: '#fff' }} />
                            {NavbarListData.FirstLayer[i]}
                        </a>
                        <ul className={toggleAll ? 'ListSecondLayer' : "ListSecondLayer hover"} >
                            {SecondList}
                        </ul>
                    </li>
                    : <li key={i}>
                        <a>
                            {i === 1 && <img src='https://online.carrefour.com.tw/on/demandware.static/Sites-Carrefour-Site/-/default/dw781e45c8/images/icon-band-stars.png' />}
                            {NavbarListData.FirstLayer[i]}
                        </a>

                    </li>

                }
            </React.Fragment>

        )
    }
    for (let i = 0; i < NavbarListData.SeconLayer.length; i++) {
        SecondList.push(
            <li key={i}>
                <img src={NavbarListData.SeconLayer[i].img} />
                <a>{NavbarListData.SeconLayer[i].name}</a>

                {i === 0 &&
                    <ul className='ListThridLayer' style={{ height: `418px` }}>
                        <NavbarListThird index={i} />
                    </ul>
                }
            </li>
        )
    }








    return (
        <div className="NavbarList">
            <ul>
                {FirstList}
            </ul>
        </div>

    )
}

export default NavbarList
