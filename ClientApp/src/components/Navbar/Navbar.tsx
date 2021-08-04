import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderImage from "../../assets/images/header.png";
import IconImage from "../../assets/images/icon.png";
import SearchIcon from '@material-ui/icons/Search';
import NavbarList from './NavbarList';
import "../../styles/Navbar.css";
import { AuthContext } from '../../helpers/AuthContext';

function Navbar() {
    const { authState, setAuthState } = useContext(AuthContext)

    const TopData = [
        '所在區域:嘉義店|嘉義西區',
        '線上購物',
        '家樂福服務',
        'APP下載',
        '中文繁體',
    ]
    const toplist = []
    for (let i = 0; i < TopData.length; i++) {
        toplist.push(
            <React.Fragment key={i}>
                {i === 1 && <p className='space1'></p>}
                {i === 3 && <p className='space2'></p>}
                <button className={`icon${i + 1}`} >
                    {i === 3 ? <></> : <div><img src={`${IconImage}`}></img> </div>}
                    <span>{TopData[i]}</span>
                </button>
            </React.Fragment>
        )
    }
    const BottomData = [
        {
            classname: 'front-part',
            items: [
                '花間集蜂蜜',
                '防疫關懷箱',
                '蔬菜箱',
                '拜拜箱',
                '冷氣',
                '防護',]
        },
        {
            classname: 'last-part',
            items: [
                '純喫茶',
                '泡麵',
                '家樂福',
                '義美',
                '飲冰室茶集',
                '衛生紙',]
        }

    ]
    const BottomList = []
    for (let i = 0; i < BottomData.length; i++) {
        BottomList.push(
            <ul className={BottomData[i].classname} key={i}>
                {BottomData[i].items.map((item, key) => {
                    return <li key={key}><a>{item}</a></li>
                })}
            </ul>
        )
    }

    const logout = () => {
        localStorage.removeItem('accessToken')
        setAuthState({
            username: "",
            id: 0,
            status: false
        })
    }

    return (
        <div className="navbar">
            <div className='navbar_fixed'>
                <header className="navbar_top">
                    <div className="navbar_top_items">
                        {toplist}
                    </div>
                </header>
                <div className="navbar_middle">
                    <div className="navbar_middle_items">
                        <div>
                            <img src={`${HeaderImage}`} />
                        </div>
                    </div>
                </div>

                <div className="navbar_bottom">
                    <div className="navbar_bottom_items">
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <div className="logo">
                                <img src="https://image.azureedge.net/0239143.png"></img>
                            </div>
                        </Link>


                        <div className="input_bottomText">
                            <div className="input">
                                <input placeholder="請輸入關鍵字或品牌名稱" ></input>
                                <SearchIcon className="icon" style={{ fill: '#3A65FF' }} />
                            </div>
                            <ul className="bottomText">
                                {BottomList}
                            </ul>
                        </div>

                        <div className="express_service_container" >
                            <div className="express_service">
                                <div>
                                    <img src="https://online.carrefour.com.tw/on/demandware.static/Sites-Carrefour-Site/-/default/v1627368413972/images/icon-delivery.svg"></img>
                                </div>
                                <button><span>當日配服務</span></button>
                            </div>
                        </div>

                        {!authState.status ?
                            <div className="login_register">
                                <Link to='/login' style={{ textDecoration: 'none' }}>
                                    <span className="login">登入</span>
                                </Link>
                                <span>/</span>
                                <Link to='/register' style={{ textDecoration: 'none' }}>
                                    <span className="register">註冊</span>
                                </Link>
                            </div>
                            : <div className='logout'>
                                <label>
                                    我的帳戶
                                    <div><img src={`${IconImage}`}></img> </div>
                                    <ul>
                                        <li>{authState.username}</li>
                                        <li>會員資料維護</li>
                                        <li>密碼修改</li>
                                        <li>收件人管理</li>
                                        <li>訂單查詢</li>
                                        <li>我的最愛</li>
                                        <li>我的折價券</li>
                                        <li onClick={logout}>登出</li>
                                    </ul>

                                </label>
                                
                                <div className="cart">
                                    <div>
                                        <img src={`${IconImage}`}></img>
                                    </div>
                                    <ul>
                                        <li>共0項商品</li>
                                        <li><button>前往購物車</button></li>
                                    </ul>
   
                                </div>

                            </div>
                        }


                    </div>

                </div>
            </div>
            <NavbarList />

        </div>
    )
}

export default Navbar
