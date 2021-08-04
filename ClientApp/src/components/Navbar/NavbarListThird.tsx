import React,{ReactNode} from 'react'
import {Link} from 'react-router-dom'
import { NavbarListData } from '../../assets/database/DataBase'
interface Props{
    index:number
}

const NavbarListThird: React.FC<Props> = ({index}) => {
    const ThirdList: ReactNode[] = []
    for (let i = 0; i < NavbarListData.ThirdLayer.length; i++) {
        ThirdList.push(
            <li key={i} >

                <Link to={`/${NavbarListData.SeconLayer[index].name}/${NavbarListData.ThirdLayer[i].title}`} style={{ textDecoration: 'none' }} >
                    <b>{NavbarListData.ThirdLayer[i].title}</b>
                </Link>

                <ul>
                    {NavbarListData.ThirdLayer[i].items.map((item, key) => {
                        return (
                            <Link to={`/${NavbarListData.SeconLayer[index].name}/${NavbarListData.ThirdLayer[i].title}/${item}`} style={{ textDecoration: 'none' }} key={key}>
                                <li>{item}</li>
                            </Link>

                        )
                    })
                    }

                </ul>
            </li>
        )
    }
    return (
        <div >
            {ThirdList}
        </div>
    )
}

export default NavbarListThird
