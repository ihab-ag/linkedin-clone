import { useState } from "react"

export const Profile = () => {
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [experience, setExperience] = useState('')
    const [message, setMessage] = useState('')


    return (
        <form className="flex flex-col gap-y-4 w-fit" >
            <h3 className=" text-lg font-bold ">Sign up</h3>
            <label class="block">
                <span class="block text-md font-medium">Name</span>
                <input type="text" class="border-solid border-cyan-600 border-2 rounded-md " value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label class="block">
                <span class="block text-md font-medium">Bio</span>
                <input type="text" class="border-solid border-cyan-600 border-2 rounded-md " value={bio} onChange={(e) => setBio(e.target.value)} />
            </label>
            <label class="block">
                <span class="block text-md font-medium ">Experience(separate by ",")</span>
                <input type="text" class="border-solid border-cyan-600 border-2 rounded-md" value={experience} onChange={(e) => setExperience(e.target.value)} />
            </label>
            <button type="submit" className="w-full border-cyan-600 border-solid rounded-md border-2 hover:bg-cyan-600 hover:text-white">Update</button>
            <p className="text-md text-rose-600 font-medium">{message}</p>
        </form>
    )
}