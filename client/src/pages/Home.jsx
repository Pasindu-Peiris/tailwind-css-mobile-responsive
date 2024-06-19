import React, { useState } from 'react'
import { db } from '../firebase';
import { ref, set, get, update } from 'firebase/database';

const Home = () => {

    const [data, setData] = useState();

    const writeUserData = (e) => {

        e.preventDefault();

        const dbRef = ref(db, `users/${data}`);
        set(dbRef, {
            name: data,
            age: 31,
            isStudent: false
        }).then(() => {
            console.log('Data saved successfully!');
        })
            .catch((error) => {
                console.log('Failed to save data: ', error);
            });;
    }






    return (

        <div className='p-8 flex xsm:bg-black sm:bg-green-400 md:bg-slate-900 lg:bg-red-500 xl:bg-amber-400 2xl:bg-sky-500     '>

            <div className=' bg-green-500 w-[200px] h-20'>div 1</div>
            <div className=' bg-green-500 w-[200px] h-20'>div 2</div>
            <div className=' bg-green-500 w-[200px] h-20'>div 3</div>
            <div className=' bg-green-500 w-[200px] h-20'>div 4</div>

            <form onSubmit={writeUserData}>
                <input type="text" onChange={(e) => setData(e.target.value)} />
                <input type="submit" className=' bg-red-600' />
            </form>



        </div>
    )
}

export default Home