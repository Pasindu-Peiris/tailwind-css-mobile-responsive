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
        <section className=' w-[100%] h-[85vh]' style={style}>

            <nav className=' xl:flex xl:items-center xl:justify-between xl:px-20 xl:w-[100%] xl:h-[15vh] ' >

                <div className="logo">
                    <a href='!'> <img src={logo} alt="" className=' xl:h-[72px]' /></a>
                </div>

                <div className="menu">
                    <a href='#!' className=' xl:px-6 xl:py-3 xl:mx-6 bg-[#FFFFFF] text-black rounded-sm'>Services</a>
                    <a href='#!' className=' xl:px-6 xl:py-3 bg-[#00646b] text-white rounded-sm'>Contact</a>
                </div>

            </nav>

            <div className="content xl:w-[100%] xl:h-[70vh] xl:grid xl:justify-start xl:items-center xl:px-12">

                <div className="content-block xl:w-[500px] xl:h-[auto] xl:p-8  grid flex-col justify-center">

                    <div className="text-h1 mb-3">
                        <h1 className=' text-5xl font-bold leading-25'>Taking care of dogs as if they were our own.</h1>
                    </div>

                    <div className="text-p mb-3">
                        <p>Each employee always has the safety and care of the pup in mind. Contact CDog Club to shedule your services today!</p>
                    </div>

                    <div className="menu mt-4">
                        <a href='#!' className=' xl:px-6 xl:py-3 bg-[#e6eeeb] text-black rounded-sm'>Services</a>
                        <a href='#!' className=' xl:px-6 xl:py-3 xl:mx-5 bg-[#00646b] text-white rounded-sm'>Contact</a>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Homesection1