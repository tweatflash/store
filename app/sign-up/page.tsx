'use client'

import { useState ,FormEvent, useEffect} from 'react'
// import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'

export default function Example() {
    const [agreed, setAgreed] = useState(true)
    const [name,setName]=useState("")
    const [email,setemail]=useState("")
    const [password,setPassword]=useState("")
    const [dob,setDob]=useState("")
    useEffect(()=>{
       console.log(dob)
    },[dob])
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try { 
            const request = await fetch("https://https://solar-store.onrender.com/api/v1/auth/registe",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify({
                    "email":"email"
                }) 
            })
            const response=await request
           
        } catch (error) {
            console.log(error)                                                                                  
        }
    }; 
    return (
        <div className="isolate bg-white px-6 py-20 sm:py-24 lg:px-8">
        <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
            <div
            style={{
                clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
            />
        </div>
        <div className="mx-auto max-w-2xl flex flex-col gap-5 text-center">
            <div className='w-[60px] aspect-square bg-orange-400 rounded-full mx-auto'></div>
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Create Account</h2>
            <p className=" text-lg/8 text-gray-600">create your account to start shopping securly on skiilink store</p>
        </div>
        <form onSubmit={handleSubmit} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            
            <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                Name
                </label>
                <div className="mt-2.5">
                <input
                    id="company"
                    name="company"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                    type="text"
                    autoComplete="organization"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                Email
                </label>
                <div className="mt-2.5">
                <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="password" className="block text-sm/6 font-semibold text-gray-900">
                Password  
                </label>
                <div className="mt-2.5">
                <div className="flex rounded-md bg-white border -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    
                    <input
                    id="password"
                    required
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="*********"
                    className="block min-w-0 grow rounded-md py-1.5 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                </div>
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="password" className="block text-sm/6 font-semibold text-gray-900">
                Date of Birth  
                </label>
                <div className="relative w-full mt-2.5">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input
                        id="datepicker-autohide"
                        required
                        value={dob}
                        onChange={(e)=>setDob(e.target.value)}
                        datepicker-autohide=""
                        type="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date"
                    />
                </div>

            </div>
            {/* <Field className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                <Switch
                    checked={false}
                    
                    onChange={setAgreed}
                    className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-checked:bg-indigo-600"
                >
                    <span className="sr-only">Agree to policies</span>
                    <span
                    aria-hidden="true"
                    className="size-4 transform rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                    />
                </Switch>
                </div>
                <Label className="text-sm/6 text-gray-600">
                By selecting this, you agree to our{' '}
                <a href="#" className="font-semibold text-indigo-600">
                    privacy&nbsp;policy
                </a>
                .
                </Label>
            </Field> */}
            </div>
            <div className="mt-10">
            <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Let's talk
            </button>
            </div>
        </form>
        </div>
    )
}
