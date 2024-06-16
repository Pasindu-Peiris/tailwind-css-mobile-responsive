import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import { ref, set, get, update } from 'firebase/database';

const Home = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    //insert data to firebase
    const writeUserData = (e) => {

        e.preventDefault();

        const dbRef = ref(db, `users/${name}`);
        set(dbRef, {
            uname: name,
            uemail: email

        }).then(() => {
            alert('Data has been saved to Firebase');
        }).catch((error) => {
            console.log('Failed to save data: ', error);
        });;
    }



    //get data from firebase

    const [data, setData] = useState([]);

    useEffect(() => {
        const dbRef = ref(db, 'users/');
        get(dbRef).then((datas) => {
            if (datas.exists()) {
                console.log(datas.val());
                setData(datas.val());
            } else {
                console.log('No data available');
            }
        }).catch((error) => {
            console.log('Error fetching data: ', error);
        });
    }, [])





    return (

        <div className='w-[100%] h-[100vh]   p-8 block xsm:bg-black sm:bg-green-400 md:bg-slate-900 lg:bg-red-500 xl:bg-amber-400 2xl:bg-sky-500     '>


            <form onSubmit={writeUserData} className=' flex xl:flex-row lg:flex-col lg:justify-center lg:w-[100%] gap-5 xl:justify-center xl:w-[100%]'>
                <input type="text" onChange={(e) => setName(e.target.value)} className=' xl:w-[300px] xl:h-12 xl:mx-6 outline-none p-4 xl:text-xl ' placeholder='Enter Name' />
                <input type="text" onChange={(e) => setEmail(e.target.value)} className=' xl:w-[300px] xl:h-12 xl:mx-6 outline-none p-4 xl:text-xl ' placeholder='Enter Email' />
                <input type="submit" className=' bg-red-600 p-4 xl:w-[300px] xl:h-12 xl:mx-6 outline-none text-center' />
            </form>


            <div>
                <h1 className='text-2xl'>User Data</h1>
                <table  className=' border-4'>
                    <thead className=' border-4'>
                        <tr className=' border-4'>
                            <th className=' p-5'>Name</th>
                            <th className=' p-5'>Email</th>
                            <th className=' p-5'>update</th>
                            <th className=' p-5'>delete</th>
                        </tr>
                    </thead>
                    <tbody className=' border-4'>
                        {
                            Object.keys(data).map((key, index) => {
                                return (
                                    <tr key={index} className=' border-4'>
                                        <td className=' p-5'>{data[key].uname}</td>
                                        <td className=' p-5'>{data[key].uemail}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>



        </div>
    )
}

export default Home