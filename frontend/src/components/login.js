import React from 'react'

const Login = () => {
  return (
    <form className="flex flex-col gap-y-4 w-fit">
        <h3 className=" text-lg font-bold ">Login</h3>
        <label class="block">
            <span class="block text-md font-medium">Email</span>
            <input type="email" class="border-solid border-cyan-600 border-2 rounded-md "/>
        </label>
        <label class="block">
            <span class="block text-md font-medium ">Password</span>
            <input type="password" class="border-solid border-cyan-600 border-2 rounded-md"/>
        </label>
        <label class="block">
            <span className='flex flex-row justify-between'>
                <label><input type='radio' name='type' id='user' value='user' className='peer hidden' /><label for='user' class="text-md font-semibold peer-checked:underline cursor-pointer">User</label></label>
                <label><input type='radio' name='type' id='company' value='company' className='peer hidden' /><label for='company' class="text-md font-semibold peer-checked:underline cursor-pointer">Company</label></label>
            </span>
        </label>
        <p className="text-md font-normal">New here? <span className="text-md font-normal text-cyan-500 underline cursor-pointer">Sign up</span></p>
        <button type="submit" className="w-full border-cyan-600 border-solid rounded-md border-2 hover:bg-cyan-600 hover:text-white">Submit</button>
    </form>
  )
}

export default Login