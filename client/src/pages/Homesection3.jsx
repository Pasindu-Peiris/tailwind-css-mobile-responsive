import React from 'react'
import Img from '../Images/dog-1.png'
import Bg from '../Images/allbg.png'

const Homesection3 = () => {

    const style = {
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
    }


    return (
        <div style={style} className=' w-[100%] xl:h-[90vh] xsm:flex-col-reverse sm:flex-col-reverse xsm:mt-5 sm:mt-5 md:pb-8 md:h-auto md:my-2 md:flex-col-reverse flex xl:flex-row justify-around items-center '>

            <div className="text-content xl:w-[520px] md:w-[80%] md:mt-20 sm:w-[100%] sm:p-6  sm:mt-10 xsm:mt-6 xsm:p-4">

                <div className="sm-text xl:mb-5 md:mb-5  sm:mb-4 xsm:mb-4">
                    <p className=' font-semibold text-[#00646b]'>ABOUT US</p>
                </div>
                <div className="text-h1 xl:mb-5 md:mb-5  sm:mb-4 xsm:mb-4">
                    <h1 className='text-4xl font-bold'>The dogs lives for the day,the hour,even the moment.</h1>
                </div>

                <div className="sm-p xl:mb-5 pe-4 md:mb-5  sm:mb-4 xsm:mb-4">
                    <p className='mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi qui atque nam molestias odit ipsa tempore, liber.</p>
                    <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio doloribus tenetur ducimus numquam voluptates minus molestiae assumenda.</p>
                </div>

                <div className="menu mt-8 md:mb-5  sm:mb-4 xsm:mb-4">
                    <a href='#!' className=' px-6 py-3 bg-[#e6eeeb] text-black rounded-sm'>Services <i class="fa-solid fa-chevron-right mx-2 font-bold"></i></a>
                    <a href='#!' className=' px-6 py-3 mx-5 bg-[#00646b] text-white rounded-sm'>Contact <i class="fa-solid fa-chevron-right mx-2 font-bold"></i></a>
                </div>

            </div>

            <div className="image-content md:mt-20 sm:mt-10 xsm:mt-6 ">

                <div className="image-bolk">
                    <img src={Img} alt="" width={400} />
                </div>

            </div>

        </div>
    )
}

export default Homesection3