import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import { ref, set, get, remove, update } from 'firebase/database';

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

    const refreshData = () => {
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

    }

    //delete data from firebase


    const deleteUserData = (dataId) => {

        const userRef = ref(db, `users/${dataId}`);
        remove(userRef)
            .then(() => {
                alert('Data deleted successfully!');
            })
            .catch((error) => {
                alert('Failed to delete data: ', error);
            });
    };


    //get one user data

    const [odata, setOdata] = useState('');

    const getUserData = (dataId) => {
        const userRef = ref(db, `users/${dataId}`);
        get(userRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    setOdata(snapshot.val());
                    setUName(snapshot.val().uname);
                    setUEmail(snapshot.val().uemail);
                } else {
                    console.log('No data available');
                }
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    };



    const [uname, setUName] = useState('');
    const [uemail, setUEmail] = useState('');
    const UpdateUserData = (e) => {
        e.preventDefault();
        const userRef = ref(db, `users/${odata.uname}`);
        update(userRef, {
            uname: uname,
            uemail: uemail
        }).then(() => {
            alert('Data updated successfully!');
        }).catch((error) => {
            alert('Failed to update data: ', error);
        });
    }



    return (

        <div className='w-[100%] h-[130vh]   p-8 block xsm:bg-black sm:bg-green-400 md:bg-slate-900 lg:bg-red-500 xl:bg-amber-400 2xl:bg-sky-500     '>

            <h1 className=' p-5 m-5 text-2xl'>Insert data</h1>
            <form onSubmit={writeUserData} className=' flex xl:flex-row lg:flex-col lg:justify-center lg:w-[100%] gap-5 xl:justify-center xl:w-[100%]'>
                <input type="text" onChange={(e) => setName(e.target.value)} className=' xl:w-[300px] xl:h-12 xl:mx-6 outline-none p-4 xl:text-xl ' placeholder='Enter Name' />
                <input type="text" onChange={(e) => setEmail(e.target.value)} className=' xl:w-[300px] xl:h-12 xl:mx-6 outline-none p-4 xl:text-xl ' placeholder='Enter Email' />
                <input type="submit" className=' bg-red-600 p-4 xl:w-[300px] xl:h-12 xl:mx-6 outline-none text-center' />
            </form>


            <div className=' mt-12'>
                <h1 className='text-2xl'>User Data <button className='p-3 bg-blue-950 text-white m-4' onClick={() => { refreshData() }}>Refresh</button></h1>
                <table className=' border-4'>
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
                                        <td className=' p-5'>
                                            <button className=' bg-green-600 p-3' onClick={(e) => {
                                                getUserData(data[key].uname);
                                            }}>Update</button>
                                        </td>
                                        <td className=' p-5'>

                                            <button className=' bg-red-600 p-3' onClick={() => {
                                                deleteUserData(data[key].uname);
                                            }}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>


            <h1 className=' p-5 m-5 text-2xl'>Update data</h1>
            <form onSubmit={UpdateUserData} className=' flex xl:flex-row lg:flex-col lg:justify-center lg:w-[100%] gap-5 xl:justify-center xl:w-[100%]'>
                <input type="text" onChange={(e) => setUName(e.target.value)} value={uname} className=' xl:w-[300px] xl:h-12 xl:mx-6 outline-none p-4 xl:text-xl ' placeholder='Enter Name' />
                <input type="text" onChange={(e) => setUEmail(e.target.value)} value={uemail} className=' xl:w-[300px] xl:h-12 xl:mx-6 outline-none p-4 xl:text-xl ' placeholder='Enter Email' />
                <input type="submit" className=' bg-red-600 p-4 xl:w-[300px] xl:h-12 xl:mx-6 outline-none text-center' />
            </form>



        </div>
    )
}

export default Home