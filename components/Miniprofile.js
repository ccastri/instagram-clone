import React from 'react'
import { useSession, signOut } from "next-auth/react"

function Miniprofile() {
    const { data: session } = useSession()
    console.log(session)
    return (
        // <div>

        <div className="flex items-center justify-between mt-14 ml-10">
            <img
                className="rounded-full border p-[2px] h-16 w-16"
                src="/yo.jpeg" alt="" />
            {/* </div> */}
            <div className="flex-1 mx-4">
                <h2 className=" font-bold">{session?.user?.username}</h2>
                <h3 className='text-sm text-gray-400'>Welcome to instagram</h3>
            </div>
            <button onClick={signOut} className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default Miniprofile