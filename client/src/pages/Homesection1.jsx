import React from 'react'
import logo from '../Images/logo.png'
import Bg from '../Images/bg.jpg'


const Homesection1 = () => {



    const style = {
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
    }

    return (
        <section className=' w-[100%] h-[85vh] md:h-auto md:py-12 ' style={style}>

            <nav className=' flex items-center justify-between px-20 w-[100%] h-[15vh] ' >

                <div className="logo">
                    <a href='!'> <img src={logo} alt="" className=' h-[72px]' /></a>
                </div>

                <div className="menu">
                    <a href='#!' className='  px-6 py-3 sm:hidden md:hidden xl:inline xl:mx-6 bg-[#FFFFFF] text-black rounded-sm'>Services <i class="fa-solid fa-chevron-right mx-2 font-bold"></i></a>
                    <a href='#!' className=' px-6 py-3 bg-[#00646b] text-white rounded-sm'>Contact <i class="fa-solid fa-chevron-right mx-2 font-bold"></i></a>
                </div>

            </nav>

            <div className="content  xsm:bg-green-500 w-[100%] h-[70vh] grid xl:justify-start md:justify-center sm:justify-center items-center xl:px-12 md:px-auto sm:px-auto">

                <div className="content-block xl:w-[500px]  sm:w-[100%] sm:p-5  xl:h-[auto] xl:p-8 md:w-[700px] md:h-[auto] grid flex-col xl:justify-center md:justify-start">

                    <div className="text-h1 mb-3">
                        <h1 className=' text-5xl font-bold leading-25'>Taking care of dogs as if they were our own.</h1>
                    </div>

                    <div className="text-p mb-3">
                        <p>Each employee always has the safety and care of the pup in mind. Contact CDog Club to shedule your services today!</p>
                    </div>

                    <div className="menu mt-4">
                        <a href='#!' className=' px-6 py-3 bg-[#e6eeeb] text-black rounded-sm'>Services <i class="fa-solid fa-chevron-right mx-2 font-bold"></i></a>
                        <a href='#!' className=' px-6 py-3 mx-5 bg-[#00646b] text-white rounded-sm'>Contact <i class="fa-solid fa-chevron-right mx-2 font-bold"></i></a>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Homesection1