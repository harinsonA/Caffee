import React from 'react';
import Banner from '../componentes-generales/banner/Banner';
import Footer from '../componentes-generales/footer/main-footer';
import Banner_Services from './Components/Banner_services';
import Slider from '../componentes-generales/slider/slider';

const Home_Services = ()=>{
    const info_card =[
        {
            icon: "far fa-clipboard",
            titulo: 'EASY TO ORDER',
            descripcion: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
        },
        {
            icon: "fas fa-truck",
            titulo: 'FASTEST DELIVERY',
            descripcion: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
        },
        {
            icon: "fas fa-coffee",
            titulo: 'QUALITY COFFEE',
            descripcion: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
        }
    ]
    return(
        <>
            <Banner />
            <Slider />
            <Banner_Services info_card={info_card}/>
            <Footer />
        </>
    )
}
export default Home_Services;