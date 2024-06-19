import React from 'react'

const Homesection6 = () => {
  return (
    <div className=' w-[100%] h-[40vh]  flex xl:flex-row justify-center items-center '>

        <div className="box-1 p-5 border-2 border-gray-200 w-[400px] h-[auto] xl:mx-5 ">
            <p className=' font-semibold my-2 text-xl'>Address</p>
            <p>246 Alla ,Lake Lane,No 24268,Sri Lanka</p>
            <p>Phone: <span className=' text-[#00646b]'>+94 779974562</span></p>
            <p className=''>Email: <span className=' text-[#00646b]'>pasindupeiris829@gmail.com</span></p>

        </div>

        <div className="box-1 p-5 border-2 border-gray-200 w-[400px] h-[auto] xl:mx-5">
            <p className=' font-semibold my-2 text-xl' >Available</p>
            <p>MON - WED  <span className=' text-[#00646b]'>(09:00 AM - 08:00 PM)</span></p>
            <p>THU - FIR  <span className=' text-[#00646b]'>(09:00 AM - 08:00 PM)</span></p>
            <p>SAT - SUN  <span className=' text-[#00646b]'>(09:00 AM - 08:00 PM)</span></p>

        </div>



    </div>
  )
}

export default Homesection6