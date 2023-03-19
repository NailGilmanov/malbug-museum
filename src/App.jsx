import React, {useState, useEffect, CSSProperties } from 'react';
import style from './style.module.css';
import MoonLoader  from "react-spinners/MoonLoader";

import Carousel from './components/Carousel/Carousel'
import TextBlock from './components/TextBlock/TextBlock'
import ImageBlock from './components/ImageBlock/ImageBlock'

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
                                    <ImageBlock 
                                        srcs={[
                                            "https://sun9-20.userapi.com/impg/3GvfzyhwpfQtle60WVhI6uub6hPt7fK8_QUjjA/stnENdV5ANM.jpg?size=1066x883&quality=96&sign=859d0ff0efa22fd00aefe3225ce92709&type=album",
                                            "https://sun9-48.userapi.com/impg/BmVpsWaQpovSK_XLDxw7ZbUHoWdjf01RuXeoAg/Y-hcxq8YqmY.jpg?size=1117x916&quality=96&sign=fa5a7ecab82aa259002940004c97485a&type=album",
                                            "https://sun9-16.userapi.com/impg/ptbm8i79wxQRp3TQTwB59jh9D0dWdTYLhXat1g/8ux0_AeqJwE.jpg?size=1104x911&quality=96&sign=02f0118af9a434f4258eda245781a621&type=album",
                                            "https://sun9-9.userapi.com/impg/pGsttQydR0EzPXVD_1SBsihRmKASKasiz3QqIw/AIeEj2k4AEk.jpg?size=1105x911&quality=96&sign=0ce8ac453e0f72ab130594847137b524&type=album"
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
                            <ImageBlock 
                                        srcs={[
                                            "https://sun9-20.userapi.com/impg/3GvfzyhwpfQtle60WVhI6uub6hPt7fK8_QUjjA/stnENdV5ANM.jpg?size=1066x883&quality=96&sign=859d0ff0efa22fd00aefe3225ce92709&type=album",
                                            "https://sun9-48.userapi.com/impg/BmVpsWaQpovSK_XLDxw7ZbUHoWdjf01RuXeoAg/Y-hcxq8YqmY.jpg?size=1117x916&quality=96&sign=fa5a7ecab82aa259002940004c97485a&type=album",
                                            "https://sun9-16.userapi.com/impg/ptbm8i79wxQRp3TQTwB59jh9D0dWdTYLhXat1g/8ux0_AeqJwE.jpg?size=1104x911&quality=96&sign=02f0118af9a434f4258eda245781a621&type=album",
                                            "https://sun9-9.userapi.com/impg/pGsttQydR0EzPXVD_1SBsihRmKASKasiz3QqIw/AIeEj2k4AEk.jpg?size=1105x911&quality=96&sign=0ce8ac453e0f72ab130594847137b524&type=album"
                                        ]}
                                    />
                        </MediaQuery>
                    </>
            }
        </>
    )
}