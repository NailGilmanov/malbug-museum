import React from 'react';
import style from './style.module.css';

const TextBlock = (props) => {
    return (
        <div className={style.wrap}>
            <h2 className={style.title}>{props.title}</h2><br />
            { props.info.map((item) => {
                return <p className={style.info}>{item}</p>
            }) }
        </div>
    );
}

export default TextBlock;
