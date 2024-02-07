import axios from 'axios'
import React, { useState } from 'react'

function Add() {
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [date, setdata] = useState("")
    const [title, settitle] = useState("")
    const [companyname, setcompanyname] = useState("")
    const [message, setmessage] = useState("")
    const [email, setemail] = useState("")

    const submit = async () => {
        let obj = { name, phone, date, title, companyname, message, email }
        try {
            let { data } = await axios.post(`https://fir-e32d4-default-rtdb.asia-southeast1.firebasedatabase.app/user.json`, {
                obj
            })
            setemail("")
            setcompanyname("")
            setdata("")
            setmessage("")
            setphone("")
            settitle("")
            setdata("")
            setname("")
            alert("Record Insert")
        } catch (error) {
            console.log(error);
            return false
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div class="flex flex-col items-center justify-center h-screen dark">
                        <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                            <h2 class="text-2xl font-bold text-gray-200 mb-4">Contact Form</h2>

                            <form class="flex flex-wrap">
                                <input
                                    type="text"
                                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                                    placeholder="Full Name"
                                    value={name} onChange={(e) => setname(e.target.value)}
                                />
                                <input
                                    type="email"
                                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                                    placeholder="Email"
                                    value={email} onChange={(e) => setemail(e.target.value)}
                                />
                                <input
                                    type="number"
                                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                                    placeholder="Phone Number"
                                    value={phone} onChange={(e) => setphone(e.target.value)}
                                />
                                <input
                                    type="text"
                                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                                    placeholder="Company Name"
                                    value={companyname} onChange={(e) => setcompanyname(e.target.value)}
                                />
                                <input
                                    type="text"
                                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                                    placeholder="Job Title"
                                    value={title} onChange={(e) => settitle(e.target.value)}
                                />
                                <input
                                    type="date"
                                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                                    placeholder="Date of Birth"
                                    value={date} onChange={(e) => setdata(e.target.value)}
                                />
                                <textarea
                                    name="message"
                                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                                    placeholder="Message"
                                    value={message} onChange={(e) => setmessage(e.target.value)}
                                ></textarea>

                                <button
                                    class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                                    onClick={submit} type="button"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Add