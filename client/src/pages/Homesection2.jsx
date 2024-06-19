import React from 'react'
import Img1 from '../Images/logo-1.png'
import Img2 from '../Images/logo-2.png'
import Img3 from '../Images/logo-3.png'
import Img4 from '../Images/logo-4.png'
import Img5 from '../Images/logo-5.png'
import Img6 from '../Images/logo-6.png'
import Img7 from '../Images/logo-7.png'

const Homesection2 = () => {
    return (


        <div className="img-block xl:flex xl:flex-row w-[100%] min-h-min-[20vh] mt-6 md:px-12 justify-center items-center gap-20 flex flex-wrap md:h-auto">

            <img src={Img1} alt="" width={60} className='grayscale' />
            <img src={Img2} alt="" width={60} className='grayscale' />
            <img src={Img3} alt="" width={60} className='grayscale' />
            <img src={Img4} alt="" width={60} className='grayscale' />
            <img src={Img5} alt="" width={60} className='grayscale' />
            <img src={Img6} alt="" width={60} className='grayscale' />
            <img src={Img7} alt="" width={60} className='grayscale' />

        </div>







    )
}

export default Homesection2