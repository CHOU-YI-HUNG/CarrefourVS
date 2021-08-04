import React, { useState } from 'react'

import { HomeCardOne } from './HomeCardOne';
import {HomeBottomeData,BottomeMiddleImageData,BottomMiddleCardData,BottomPromotionData} from '../../assets/database/DataBase'
import { ReactComponent as ShoppingCartIcon } from '../../assets/images/icon_ShoppingCart.svg'
import { ReactComponent as PrevArrow } from '../../assets/images/icon_arrowLeft.svg'
import { ReactComponent as NextArrow } from '../../assets/images/icon_arrowRight.svg'

import '../../styles/HomeBottom.css'
function HomeBottom() {
    let style :object;
    const CardTitleColor = [
        style = { background: '-webkit-linear-gradient(left,#ffb52e,#ff8a0b)' },
        style = { background: '-webkit-linear-gradient(left,#ff74a6,#ff2f56)' },
        style = { background: '-webkit-linear-gradient(left,#0cecc0,#02ccc4)' },
        style = { background: '-webkit-linear-gradient(left,#c178ff,#7176FF)' },
    ]
    const Card=[];
    for (let i = 0; i < HomeBottomeData.length; i++) {
        Card.push(
            <HomeCardOne 
            style={CardTitleColor[i]} 
            title={HomeBottomeData[i].title} 
            image={HomeBottomeData[i].image} 
            sub1Image={HomeBottomeData[i].sub1Image}
            sub1Name={HomeBottomeData[i].sub1Name}
            sub1Price={HomeBottomeData[i].sub1Price}
        
            sub2Image={HomeBottomeData[i].sub2Image}
            sub2Name={HomeBottomeData[i].sub2Name}
            sub2Price={HomeBottomeData[i].sub2Price}
        
            sub3Image={HomeBottomeData[i].sub3Image}
            sub3Name={HomeBottomeData[i].sub3Name}
            sub3Price={HomeBottomeData[i].sub3Price}

            key={i}/>
        )

    }

    const MiddleImage = []
    for (let i = 0; i < BottomeMiddleImageData.length; i++) {
        MiddleImage.push(
            <img src={BottomeMiddleImageData[i].image} key={i}></img>
        )

    }

    
    let [cardMove, setCardMove] = useState(0)
    const CardStyle = {
        transition: '1s linear',
        transform: `translateX(${cardMove}px)`
    }
    const MiddleCard = []
    for (let i = 0; i < BottomMiddleCardData.length; i++) {
        MiddleCard.push(
            <div className='Card' key={i} style={CardStyle} >
                <figure>
                    <img src={BottomMiddleCardData[i].image} />
                    <figcaption>{BottomMiddleCardData[i].name}</figcaption>
                </figure>

                <div className='PriceAndIcon'>
                    <p className='Price'>{BottomMiddleCardData[i].price}</p>
                    <a><ShoppingCartIcon style={{ fill: '#fff' }} className='ShppingCartIcon' /></a>
                </div>
            </div>
        )
    }

    const BottomCard = []
    for (let i = 0; i < BottomPromotionData.length; i++) {
        for (let j = 0; j < BottomPromotionData[i].items.length; j++) {
            BottomCard.push(
                <div className='BottomCard' key={`${i}${j}`}>
                    <img src={BottomPromotionData[i].items[j].img}></img>
                    <h3>{BottomPromotionData[i].items[j].name}</h3>
                    <div>
                        <p>{BottomPromotionData[i].items[j].price}</p>

                        <a><ShoppingCartIcon style={{ fill: '#fff' }} className='ShppingCartIcon' /></a>
                    </div>
                </div>
            )
        }
    }

    const prevArrowClickHandler = () => {
        setCardMove(cardMove + 1190)
    }


    const nextArrowClickHandler = () => {
        setCardMove(cardMove - 1190)
    }
    return (
        <div className='HomeBottom'>
            <section className='HomeBottomTop'>
                {Card}
            </section>
            <div className='HomeBottomMiddle'>
                <div className='HomeBottomMiddleImage'>{MiddleImage}</div>
                <div className='HomeBottomMiddleSubArea'>
                    <h2>人氣<span>推薦</span></h2>
                    <div className='SubCardArea'>
                        <PrevArrow className='prevArrow' onClick={prevArrowClickHandler} style={cardMove === 0 ? { display: 'none' } : {}} />
                        {/* {console.log(prevArrowFlag?'prevArrow':'prevAnimation')} */}
                        <NextArrow className='nextArrow' onClick={nextArrowClickHandler} style={cardMove === BottomMiddleCardData.length * 0.25 * -1190 + 1190 ? { display: 'none' } : {}} />
                        {MiddleCard}
                    </div>
                </div>
            </div>
            <section className='HomeBottomeBottom'>
                <h3>最新型錄商品</h3>
                <div className='promotion-list'>
                    <div className='promotion-left'>
                        <h2>{BottomPromotionData[0].title}</h2>
                        <a>GO</a>
                        <p>冰、烤肉、製冰盒、氣泡水</p>
                        <img src='https://image.azureedge.net/0259152.png'></img>
                    </div>
                    <div className='promotion-right'>
                        {BottomCard}
                    </div>
                </div>
            </section>
        </div>

    )
}

export default HomeBottom
