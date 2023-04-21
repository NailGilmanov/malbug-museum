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

                                    <TextBlock 
                                        title='«Зал Боевой славы»'
                                        info={[
                                            'был открыт к 50 летию Победы над фашистской Германией 28 апреля 1995 года. В нем находятся экспонаты собранные первыми краеведами во главе учителя истории Бурцевой Людмилы Владимировны.',
                                            'В этом зале есть разделы:  «В памяти навечно», «Они сражались за Родину», «Герои Сталинградской битвы»; «Халиуллин Мисбах Халиуллович, Герой Советского Союза», «Ветераны Великой Отечественной войны»; «Выпускники - участники локальных конфликтов»  и др.',
                                            'Наиболее ценные экспонаты: письма периода Великой Отечественной войны, военные награды участников Великой Отечественной войны наших земляков, фотографии военных лет, военные грамоты 1941-1945 годов.'
                                        ]}
                                    />

                                    <ImageBlock 
                                        srcs={[
                                            "https://sun9-56.userapi.com/impg/1d3POaqmfpY6uQruzTebti6EB4tLwZXdryxm4A/KHhc7K2_n10.jpg?size=992x818&quality=96&sign=edd6b034da2093d7ff944976fea7dba2&type=album",
                                            "https://sun9-55.userapi.com/impg/SPA217nzByGDr2reuh21cK6Q9-pgaJLe0upyEQ/RWTjl8kXmL8.jpg?size=991x817&quality=96&sign=e0d52017ac48d419313b97e25c9773d8&type=album",
                                            "https://sun9-45.userapi.com/impg/YCOyWZ6gpPQXlR9D3XBuT8XR50RZejzoysc0og/j_FFhjaUo8w.jpg?size=949x783&quality=96&sign=a0aa0f574a0e9878131a0d3847917b66&type=album",
                                            "https://sun9-10.userapi.com/impg/EbRPa6iJ6NCbfA610_p00LA5HTyVzLx_2sfW6w/foADLH_pdsk.jpg?size=950x786&quality=96&sign=d75fd60a5d7491e9d86dfe39b5712868&type=album"
                                        ]}
                                    />

                                    <TextBlock 
                                        title='Зал «История развития школы» '
                                        info={[
                                            'описывают из архивных справок: как образовалось село, кто был первым руководителем. На стенах зала  есть красочные  стенды с информацией  и яркими фотографиями,  иллюстрациями.',
                                            'Названия разделов:  «История развития школы», «Ими гордится школы», «Как жила школа в 60-80 г.», «Так жила школы на рубеже веков», «Школа в наши дни».'
                                        ]}
                                    />

                                    <ImageBlock 
                                        srcs={[
                                            "https://sun9-51.userapi.com/impg/GuGJD0teMST5mmv5H6doHwHic5fE8qPOjVUT1w/ggqyE2IavYc.jpg?size=1126x934&quality=96&sign=86f6d32b55aa69f64d78b1425146634e&type=album",
                                            "https://sun9-53.userapi.com/impg/Kbhvw9wqZTWpFRe05ZiQZXQOJ0b7nU45t198-Q/hrHECKUcbX4.jpg?size=1125x932&quality=96&sign=b18f5dbeef1cba8d9c59c6e58a67ff36&type=album",
                                            "https://sun9-5.userapi.com/impg/aWneEwC101ZVqi4c1o3KoL5NKfzQjpcNr_cNJw/S15K6NnMMIs.jpg?size=1123x930&quality=96&sign=e6c42e43d9beb51bd900067597db6b48&type=album",
                                            "https://sun1.tattelecom-nbc.userapi.com/impg/mFi62JE4exE1TyPeK7n19wGHb6g2tT0HF3Uzkw/SBVWtfCm8rw.jpg?size=1128x934&quality=96&sign=7c43ae6f40d5e021b8777210a172efd2&type=album"
                                        ]}
                                    />

                                    
                                    <TextBlock 
                                        title='«История села»'
                                        info={[
                                            'В зале «История села» название разделов: «Топонимика села»,  «Из истории колхозно – совхозной жизни»,   есть экспонаты  старой посуды, бытовых самодельных приборов, домашней утвари.',
                                            'В состав фонда: основной фонд составляет 90 единиц,  вспомогательный  30 единиц хранения.',
                                            'Прошлое не исчезает бесследно, оно пробивается в настоящее, оставляя тысячи свидетельств своего существования в виде памятников материальной и духовной культуры. Стержнем любого музея является история. Это может быть история семьи, школы, отдельного выпускника, педагога. В каждом из таких свидетельств отражается какая-то частица истории. Из таких фрагментов в конечном итоге складывается история человеческого общества.',
                                            'Школа живет и развивается, уверенно идет в будущее, в завтрашний день. Но у нее есть и прекрасное прошлое, которое бережно хранится в школьном музее и является достоянием каждого ученика и учителя, предметом гордости и восхищения.'
                                        ]}
                                    />

                                    <ImageBlock 
                                        srcs={[
                                            "https://sun9-23.userapi.com/impg/_Q5rNZPljvEe23LWMRiOCQVx0Y0zAVcZZG5WuA/sWeyW9YHMfc.jpg?size=1103x912&quality=96&sign=2c2cb3ed62310d8d69c25bfa7c28926c&type=album",
                                            "https://sun9-65.userapi.com/impg/Zy5-PfgPZoiPB3JdMWxGeAY7JD_jeWwVfYxMtQ/1dxgqdc8t0A.jpg?size=1107x911&quality=96&sign=5270bdccdb70edf862177c15ccfd0830&type=album",
                                            "https://sun9-31.userapi.com/impg/om-0sZaIyMg2rO2LoRLrnJHzMgTvUYIObr8ACQ/4tEs2ns2cxM.jpg?size=1104x912&quality=96&sign=4d105d4370271254d397bd8fe144c7d1&type=album",
                                            "https://sun9-45.userapi.com/impg/DoRyHFxSJ09LnbtqBMZ3EhrAAGq-AAF0y_xzmA/fwxKP6BmIow.jpg?size=1103x913&quality=96&sign=07acea08f3110ef664ae42f44cd92436&type=album"
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

                            <TextBlock 
                                title='«Зал Боевой славы»'
                                info={[
                                    'был открыт к 50 летию Победы над фашистской Германией 28 апреля 1995 года. В нем находятся экспонаты собранные первыми краеведами во главе учителя истории Бурцевой Людмилы Владимировны.',
                                    'В этом зале есть разделы:  «В памяти навечно», «Они сражались за Родину», «Герои Сталинградской битвы»; «Халиуллин Мисбах Халиуллович, Герой Советского Союза», «Ветераны Великой Отечественной войны»; «Выпускники - участники локальных конфликтов»  и др.',
                                    'Наиболее ценные экспонаты: письма периода Великой Отечественной войны, военные награды участников Великой Отечественной войны наших земляков, фотографии военных лет, военные грамоты 1941-1945 годов.'
                                ]}
                            />

                            <ImageBlock 
                                srcs={[
                                    "https://sun9-56.userapi.com/impg/1d3POaqmfpY6uQruzTebti6EB4tLwZXdryxm4A/KHhc7K2_n10.jpg?size=992x818&quality=96&sign=edd6b034da2093d7ff944976fea7dba2&type=album",
                                    "https://sun9-55.userapi.com/impg/SPA217nzByGDr2reuh21cK6Q9-pgaJLe0upyEQ/RWTjl8kXmL8.jpg?size=991x817&quality=96&sign=e0d52017ac48d419313b97e25c9773d8&type=album",
                                    "https://sun9-45.userapi.com/impg/YCOyWZ6gpPQXlR9D3XBuT8XR50RZejzoysc0og/j_FFhjaUo8w.jpg?size=949x783&quality=96&sign=a0aa0f574a0e9878131a0d3847917b66&type=album",
                                    "https://sun9-10.userapi.com/impg/EbRPa6iJ6NCbfA610_p00LA5HTyVzLx_2sfW6w/foADLH_pdsk.jpg?size=950x786&quality=96&sign=d75fd60a5d7491e9d86dfe39b5712868&type=album"
                                ]}
                            />

                            <TextBlock 
                                title='Зал «История развития школы» '
                                info={[
                                    'описывают из архивных справок: как образовалось село, кто был первым руководителем. На стенах зала  есть красочные  стенды с информацией  и яркими фотографиями,  иллюстрациями.',
                                    'Названия разделов:  «История развития школы», «Ими гордится школы», «Как жила школа в 60-80 г.», «Так жила школы на рубеже веков», «Школа в наши дни».'
                                ]}
                            />

                            <ImageBlock 
                                srcs={[
                                    "https://sun9-51.userapi.com/impg/GuGJD0teMST5mmv5H6doHwHic5fE8qPOjVUT1w/ggqyE2IavYc.jpg?size=1126x934&quality=96&sign=86f6d32b55aa69f64d78b1425146634e&type=album",
                                    "https://sun9-53.userapi.com/impg/Kbhvw9wqZTWpFRe05ZiQZXQOJ0b7nU45t198-Q/hrHECKUcbX4.jpg?size=1125x932&quality=96&sign=b18f5dbeef1cba8d9c59c6e58a67ff36&type=album",
                                    "https://sun9-5.userapi.com/impg/aWneEwC101ZVqi4c1o3KoL5NKfzQjpcNr_cNJw/S15K6NnMMIs.jpg?size=1123x930&quality=96&sign=e6c42e43d9beb51bd900067597db6b48&type=album",
                                    "https://sun1.tattelecom-nbc.userapi.com/impg/mFi62JE4exE1TyPeK7n19wGHb6g2tT0HF3Uzkw/SBVWtfCm8rw.jpg?size=1128x934&quality=96&sign=7c43ae6f40d5e021b8777210a172efd2&type=album"
                                ]}
                            />

                            
                            <TextBlock 
                                title='«История села»'
                                info={[
                                    'В зале «История села» название разделов: «Топонимика села»,  «Из истории колхозно – совхозной жизни»,   есть экспонаты  старой посуды, бытовых самодельных приборов, домашней утвари.',
                                    'В состав фонда: основной фонд составляет 90 единиц,  вспомогательный  30 единиц хранения.',
                                    'Прошлое не исчезает бесследно, оно пробивается в настоящее, оставляя тысячи свидетельств своего существования в виде памятников материальной и духовной культуры. Стержнем любого музея является история. Это может быть история семьи, школы, отдельного выпускника, педагога. В каждом из таких свидетельств отражается какая-то частица истории. Из таких фрагментов в конечном итоге складывается история человеческого общества.',
                                    'Школа живет и развивается, уверенно идет в будущее, в завтрашний день. Но у нее есть и прекрасное прошлое, которое бережно хранится в школьном музее и является достоянием каждого ученика и учителя, предметом гордости и восхищения.'
                                ]}
                            />

                            <ImageBlock 
                                srcs={[
                                    "https://sun9-23.userapi.com/impg/_Q5rNZPljvEe23LWMRiOCQVx0Y0zAVcZZG5WuA/sWeyW9YHMfc.jpg?size=1103x912&quality=96&sign=2c2cb3ed62310d8d69c25bfa7c28926c&type=album",
                                    "https://sun9-65.userapi.com/impg/Zy5-PfgPZoiPB3JdMWxGeAY7JD_jeWwVfYxMtQ/1dxgqdc8t0A.jpg?size=1107x911&quality=96&sign=5270bdccdb70edf862177c15ccfd0830&type=album",
                                    "https://sun9-31.userapi.com/impg/om-0sZaIyMg2rO2LoRLrnJHzMgTvUYIObr8ACQ/4tEs2ns2cxM.jpg?size=1104x912&quality=96&sign=4d105d4370271254d397bd8fe144c7d1&type=album",
                                    "https://sun9-45.userapi.com/impg/DoRyHFxSJ09LnbtqBMZ3EhrAAGq-AAF0y_xzmA/fwxKP6BmIow.jpg?size=1103x913&quality=96&sign=07acea08f3110ef664ae42f44cd92436&type=album"
                                ]}
                            />
                        </MediaQuery>
                    </>
            }
        </>
    )
}