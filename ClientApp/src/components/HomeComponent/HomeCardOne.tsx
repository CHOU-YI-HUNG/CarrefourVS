import React from 'react'
import IconImage from '../../assets/images/icon.png';
import '../../styles/HomeCardOne.css'

interface Props{
    style:object;
    title:string;
    image:string;
    sub1Image: string;
    sub1Name:string;
    sub1Price: string;

    sub2Image:string;
    sub2Name:string;
    sub2Price:string;

    sub3Image:string;
    sub3Name: string;
    sub3Price: string;
}

export const HomeCardOne:React.FC<Props> =({
    style,
    title,
    image,
    sub1Image,
    sub1Name,
    sub1Price,

    sub2Image,
    sub2Name,
    sub2Price,

    sub3Image,
    sub3Name,
    sub3Price,
})=> {


    return (
        <article className="HomeCardOne">
        <h3 style={style}>
            <div className='Icon'><img src={`${IconImage}`}></img> </div>
            {title}
        </h3>
        <img src={image}>
        </img>
        <section className="subArea">
            <article className="subCard">
                <img src={sub1Image}>
                </img>
                <p>
                    {sub1Name}
                </p>
                {sub1Price}
            </article>
            <article className="subCard">
                <img src={sub2Image}>
                </img>
                <p>
                    {sub2Name}
                </p>
                {sub2Price}
            </article>
            <article className="subCard">
                <img src={sub3Image}>
                </img>
                <p>
                    {sub3Name}
                </p>
                {sub3Price}
            </article>
        </section>
    </article>
    )
}

