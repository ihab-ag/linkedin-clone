import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginReq } from '../../apis/login.api'

const Login = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [type, setType] = useState('user')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()

        const data = {
            "email": email,
            "password": pass,
            "type": type
        }

        const res = await loginReq(data)

        if(res.status !== 200)
            return setMessage('Invalid credentials')

        localStorage.setItem('token',res.data.authorisation.token)

        navigate(`/main/${type}`)
    }

    return (
        <form className="flex flex-col gap-y-4 w-fit" onSubmit={login}>
            <h3 className=" text-lg font-bold ">Login</h3>
            <label class="block">
                <span class="block text-md font-medium">Email</span>
                <input type="email" class="border-solid border-cyan-600 border-2 rounded-md " value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label class="block">
                <span class="block text-md font-medium ">Password</span>
                <input type="password" class="border-solid border-cyan-600 border-2 rounded-md" value={pass} onChange={(e) => setPass(e.target.value)} />
            </label>
            <label class="block">
                <span className='flex flex-row justify-between'>
                    <label><input type='radio' name='type' id='user' value='user' className='peer hidden' onChange={(e) => setType(e.target.value)} checked={type === 'user'} /><label for='user' class="text-md font-semibold peer-checked:underline cursor-pointer">User</label></label>
                    <label><input type='radio' name='type' id='company' value='company' className='peer hidden' onChange={(e) => setType(e.target.value)} checked={type === 'company'} /><label for='company' class="text-md font-semibold peer-checked:underline cursor-pointer">Company</label></label>
                </span>
            </label>
            <p className="text-md font-normal">New here? <span className="text-md font-normal text-cyan-500 underline cursor-pointer" onClick={() => navigate('/signup')}>Sign up</span></p>
            <button type="submit" className="w-full border-cyan-600 border-solid rounded-md border-2 hover:bg-cyan-600 hover:text-white">Login</button>
            <p className="text-md text-rose-600 font-medium">{message}</p>
        </form>
    )
}

export default Login