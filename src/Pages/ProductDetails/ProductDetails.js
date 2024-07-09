import React, { useRef, useState } from 'react'
import '../../main.css'
import heart3 from '../../Assets/heart3.png'
import styIcon from '../../Assets/sty.png'
import plus from '../../Assets/plus.png'
import dog from '../../Assets/bannerImage.205e793a240265d6f07c.png'



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ProductDetails = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [detailOpen, setDetailOpen] = useState(false)
    const [addressOpen, setAddressOpen] = useState(false)
    const [catogeryOpen, setCatogeryOpen] = useState(false)
  return (
    <div className='pd'>
        
        <div className='container' >
            <div className='product-details'>
                <div className='details-left'>
                    <div className='swp'>
                        <Swiper
                            style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                            <img src={dog}/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={dog}/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={dog}/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={dog}/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={dog}/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={dog}/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={dog}/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={dog}/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={dog}/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={dog} />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='bld'>
                            <img className='block-img' src={dog}/>
                            </SwiperSlide  >
                            <SwiperSlide className='bld'>
                            <img className='block-img' src={dog}/>
                            </SwiperSlide>
                            <SwiperSlide className='bld'>
                            <img className='block-img' src={dog}/>
                            </SwiperSlide>
                            <SwiperSlide className='bld'>
                            <img className='block-img' src={dog}/>
                            </SwiperSlide>
                            <SwiperSlide className='bld'>
                            <img className='block-img' src={dog}/>
                            </SwiperSlide>
                            <SwiperSlide className='bld'>
                            <img className='block-img' src={dog}/>
                            </SwiperSlide >
                            <SwiperSlide className='bld'>
                            <img  className='block-img'src={dog}/>
                            </SwiperSlide>
                            <SwiperSlide className='bld'>
                            <img className='block-img' src={dog}/>
                            </SwiperSlide>
                            <SwiperSlide className='bld'>
                            <img className='block-img' src={dog}/>
                            </SwiperSlide>
                            <SwiperSlide className='bld'>
                            <img className='block-img' src={dog} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className='details-right' >
                    <div>
                        <h1>Stella & Chewy’s Wild weenies grain free chicken recipe freeze dried raw dog treats</h1>
                    </div>
                    <div>
                        <p>by Stella & Chewy's</p>
                    </div>
                    <div className='style-img'>
                        <img src={styIcon} alt="image" />
                    </div>
                    <div className='produt-price'>
                        <h3>$9.99 – $19.99</h3>
                    </div>
                    <div className='btn-heart'>
                        <div className='btn-div'>
                            <button className='details-btn'>Add Premium</button>
                        </div>
                        <div>
                            <img className='heart-icon' src={heart3} alt="heart icon" />
                        </div>
                    </div>
                    <div className='other-details'>
                <div className='set-right'>
                    <div className='other-inner'>
                        <h3 className='other-text'>Puppies Details</h3>
                        <img className='plus-icon' src={plus} alt="plus" onClick={()=>{setDetailOpen(!detailOpen)}} />
                        
                    </div>
                    <div className={detailOpen ? 'detail-opentrue': 'detail-open'}>
                            <p>Only the Good Stuff! Dogs naturally crave meat, much like they ate in the wild. That’s why every batch of Absolutely Rabbit Dinner Patties starts with 90% rabbit and bone plus 100% organic certified fruits and vegetables to guarantee your pet is eating as nature intended. Every recipe from Stella & Chewy’s is grain-free and minimally processed. All ingredients are sustainably sourced, and NEVER from China Benefits: -Made in the USA – Absolutely Rabbit Dinner Patties’ all-natural recipe is crafted with care in small batches in Stella & Chewy’s own USA kitchen to provide the highest levels of protein-rich meat and quality grain-free nutrition for your pet -Minimally processed and all natural. Because the closer foods stay to their natural state, the better they are. That’s why each of Stella & Chewy’s recipes</p>
                        </div>
                    <div className='other-inner'>
                        <h3 className='other-text'>Address</h3>
                        <img className='plus-icon' src={plus} alt="plus" onClick={()=>{setAddressOpen(!addressOpen)}} />
                    </div>
                    <div className={addressOpen ? 'address-opentrue': 'detail-open'}>
                        <input className='add-input' type="text" placeholder='  Your Name' />
                        <input className='add-input' type="text"  placeholder='  Your Email' />
                        <input className='add-input' type="text" placeholder='   Your Phone' />
                        <input className='add-input' type="text" placeholder='   Your Address' />
                        <button className='add-btn'>Submit</button>
                    </div>
                    <div className='other-inner'>
                        <h3 className='other-text'>Puppies Category</h3>
                        <img className='plus-icon' src={plus} alt="plus" onClick={()=>{setCatogeryOpen(!catogeryOpen)}} />
                    </div>
                    <div className={catogeryOpen ? 'catogery-opentrue': 'detail-open'}>
                        <ul className='cat-link'>
                            <li>
                                Designer
                            </li>
                            <li>
                                Under $500
                            </li>
                            <li>
                                 New Arrivals
                            </li>
                            <li>
                                Apartment Friendly
                            </li>
                            <li>
                                Hypoallergenic
                            </li>
                            <li>
                                Puppies on Sale
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
                </div>
            </div>
           
            
    </div>
  )
}

export default ProductDetails