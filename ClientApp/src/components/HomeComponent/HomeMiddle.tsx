import React from 'react'
import Carousel from './Carousel'
import "../../styles/HomeMiddle.css"
import IconImage from '../../assets/images/icon.png'
function HomeMiddle() {

    return (
        <div className="HomeMiddle">
            <main className="HomeMiddleContainer">

                <div className="Carousel_container">
                    <Carousel />
                    
                    <div className='Carousel_bottom'>
                        <span><b>嚴選推薦</b></span>
                       
                        <div className="imageItems">
                            <img src='https://image.azureedge.net/0286246.jpeg' />
                            <img src='https://image.azureedge.net/0276373.jpeg' />
                        </div>

                    </div>
                </div>

                <div className="HomeMiddle_Right">
                    <div className='top'>
                        <div className='top_title'>
                            <div className='top_left'>
                                <b>家樂福會員</b>
                                <div>現在加入，優惠更多</div>
                            </div>
                            <div className='top_right'>
                                <a>
                                    登入/註冊
                                </a>
                            </div>
                        </div>
                        <div className="top_middle">
                            活動快訊
                            <a>
                                更多
                                <div>
                                    <img src={IconImage} />
                                </div>

                            </a>
                        </div>
                        <div className='top_bottom'>
                            <ul>
                                <li><a href="https://www.carrefour.com.tw/winnerlist-ecredpoint202105/">得獎名單 紅利點數折抵抽iPhone 12</a></li>
                                <li><a href="https://www.carrefour.com.tw/winnerlist-ecbrands_lamp202105/">得獎名單 白蘭氏滿$1388抽護眼檯燈</a></li>
                                <li><a href="https://www.carrefour.com.tw/winnerlist-eccola_202105/">得獎名單 可口可樂滿$199抽對話點心盤</a></li>
                                <li><a href="https://online.carrefour.com.tw/tw/customer/AnnounceList?self=0">家樂福與台南市政府便利送合作</a></li>
                                <li><a href="https://online.carrefour.com.tw/tw/customer/AnnounceList?self=0">會員日點數等活動取消公告</a></li>
                                <li><a href="https://www.carrefour.com.tw/winnerlist-eclove_mommy202104/">寵愛媽咪節抽捷安特</a></li>
                                <li><a href="https://www.carrefour.com.tw/winnerlist-ecmazu2021/">4月好神價抽大甲媽衛生紙</a></li>
                                <li><a href="https://www.carrefour.com.tw/winnerlist-ecspring2021/">得獎名單 春遊趣抽BRUNO電烤盤</a></li>
                                <li><a href="https://www.carrefour.com.tw/winnerlist-ecqueensday2/">得獎名單 寵愛女王節抽iPhone 12</a></li>
                                <li><a href="https://www.carrefour.com.tw/winnerlist-ecqueensday1/">得獎名單 寵愛女王節抽38倍紅利</a></li>
                                <li><a href="https://online.carrefour.com.tw/tw/customer/returnnotice/12">紅利點數可以折抵消費啦！</a></li>
                                <li><a href="https://www.carrefour.com.tw/winnerlist-echeysongluck/">得獎名單 喝黑松牛轉好運抽2仟</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='bottom' >
                        <div className="bottom_top">
                            <ul>
                                <li><img src="https://image.azureedge.net/0268063.png"></img></li>
                                <li><img src="https://image.azureedge.net/0268064.png"></img></li>
                                <li><img src="https://image.azureedge.net/0268065.png"></img></li>
                                <li><img src="https://image.azureedge.net/0268066.png"></img></li>
                            </ul>

                        </div>
                        <div className="bottom_bottom">
                            <ul>
                                <li><img src="https://image.azureedge.net/0268067.png"></img></li>
                                <li><img src="https://image.azureedge.net/0268068.png"></img></li>
                                <li><img src="https://image.azureedge.net/0268069.png"></img></li>
                                <li><img src="https://image.azureedge.net/0267981.png"></img></li>
                            </ul>
                        </div>
                    </div>
                </div>
            
            </main>

        </div>
    )
}

export default React.memo(HomeMiddle)
