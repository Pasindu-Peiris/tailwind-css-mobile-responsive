import React from 'react'
import Bg from '../Images/allbg.png'
import Img from '../Images/dog-2.png'

const Homesection5 = () => {

    const style = {
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
    }


    return (
        <div style={style} className=' w-[100%] xl:h-[90vh] sm:h-[auto] sm:p-5 md:p-5 xsm:h-[auto]  sm:flex-col-reverse xsm:flex-col-reverse  md:pb-8 md:h-auto md:my-2 md:flex-col-reverse flex xl:flex-row justify-around items-center '>


            <div className="image-content md:mt-20 sm:mt-12 xsm:mt-8">

                <div className="image-bolk">
                    <img src={Img} alt="" width={400} />
                </div>

            </div>

            <div className="text-content xl:w-[520px] md:w-[80%]  sm:w-[100%] sm:p-2 md:mt-12  sm:mt-10 xsm:mt-6 xsm:w-[100%] xsm:p-4">

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



        </div>
    )
}

export default Homesection5