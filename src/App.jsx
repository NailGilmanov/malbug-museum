import React, {useState, useEffect, CSSProperties } from 'react';
import style from './style.module.css';
import MoonLoader  from "react-spinners/MoonLoader";

import Carousel from './components/Carousel/Carousel'
import TextBlock from './components/TextBlock/TextBlock'

import MediaQuery from "react-responsive";

export const App = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        }, 1500)
    },[])

    const style_loader: React.CSSProperties = {
        display: "block",
        margin: "300px auto",
    };

    return (
        <>
            {
                loading ? <MoonLoader 
                    color="#5A5A5A"
                    loading={loading}
                    size={50}
                    cssOverride={style_loader}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> 

                :
                    <>
                        <MediaQuery minWidth={800}>
                            <div className={style.wrapper}>
                                <div className={style.inner}>
                                    < Carousel />
                                    <TextBlock 
                                        title='О музее'
                                        info={[
                                            'Школьный краеведческий музей Муниципального бюджетного общеобразовательного учреждения Малобугульминской средней общеобразовательной школы Бугульминского муниципального района Республики Татарстан является одной из форм дополнительного образования, развивающей сотворчество, активность, самодеятельность учащихся в процессе сбора, исследования, обработки, оформления и пропаганды материалов, имеющих воспитательную и познавательную ценность.',
                                            'В состав нашего музея входят 3 зала. Залы были открыты в 2001 году к 100-летию школы'
                                        ]}
                                    />
                                </div>
                            </div>
                        </MediaQuery>

                        <MediaQuery maxWidth={800}>
                            < Carousel />
                            <TextBlock 
                                title='О музее'
                                info={[
                                    'Школьный краеведческий музей Муниципального бюджетного общеобразовательного учреждения Малобугульминской средней общеобразовательной школы Бугульминского муниципального района Республики Татарстан является одной из форм дополнительного образования, развивающей сотворчество, активность, самодеятельность учащихся в процессе сбора, исследования, обработки, оформления и пропаганды материалов, имеющих воспитательную и познавательную ценность.',
                                    'В состав нашего музея входят 3 зала. Залы были открыты в 2001 году к 100-летию школы'
                                ]}
                            />
                        </MediaQuery>
                    </>
            }
        </>
    )
}