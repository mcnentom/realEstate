import React from 'react'
import { Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import data from './slider.json';
import './style.css'

const Residence = () => {
  return (
        <div id='#residence' className='residence'>
          
            <div className='header'>
              <h2>Best Choices</h2>
              <h4>Popular Residences</h4>
            </div>
            <div className="data">
              <Swiper  
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                {
                  data.map(( card, i)=>(
                    <SwiperSlide key={i}>
                      <div className="card">
                        <span><img src={card.image} alt="slider" /></span>
                        <span className='price'>
                          <span style={{color:"orange"}}>$</span>
                          <span>{card.price}</span>
                        </span>
                        <span className='name'>{card.name}</span>
                        <span className='detail'>{card.detail}</span>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
      </div>

  )
}

export default Residence