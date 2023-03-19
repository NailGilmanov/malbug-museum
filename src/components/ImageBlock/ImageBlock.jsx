import React from 'react';
import style from './style.module.css';

const ImageBlock = (props) => {
    return (
        <div className={style.wrap}>
            { props.srcs.map((src) => {
                return <div className={style.imgblc}>
                    <img className={style.img} src={src} alt="Картинка Музея"></img>
                </div>
            }) }
        </div>
    );
}

export default ImageBlock;
