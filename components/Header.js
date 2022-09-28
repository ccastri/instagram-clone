import Image from 'next/image';

import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { useSession, signOut, signIn } from "next-auth/react"
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtoms'
// import { getProviders, signIn } from 'next-auth/react'
function Header() {
    const { data: session, status } = useSession();
    const [open, setOpen] = useRecoilState(modalState)
    const router = useRouter();
    console.log(session);
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/* left */}
                <div onClick={() => router.push('/')} className="relative hidden lg:inline-grid  w-24 cursor-pointer">
                    <Image
                        src="https://links.papareact.com/ocw"
                        objectFit='contain'
                        layout="fill"
                    />
                </div>
                <div onClick={() => router.push('/')} className="relative lg:hidden flex-shrink-0 w-10 cursor-pointer">
                    <Image
                        src="https://links.papareact.com/jjm"
                        objectFit='contain'
                        layout="fill"
                    />
                </div>
                {/* Middle */}
                <div className='max-2'>

                    <div className="mt-1 relative p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3  flex items-center pointer-events-none" >
                            <SearchIcon
                                className='h-5 w-5 text-gray-500'
                            />
                        </div>
                        <input
                            className="bg-gray-50 pl-10 block w-full border-gray-300 rounded-md focus:ring-black focus:border-black"
                            type="text"
                            placeholder='search' />
                    </div>
                </div>
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className=" navBtn" />
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />

                    {session ? (

                        <>
                            <div className="relative navBtn">

                                <PaperAirplaneIcon className="navBtn rotate-45" />
                                <div className="absolute -top-1 -right-2 text-xs rounded-full w-5 h-5 bg-red-500 flex justify-center items-center animate-pulse text-white">3</div>
                            </div>
                            <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
                            <HeartIcon className="navBtn" />
                            <img src={session?.user?.image} onClick={signOut} alt="profile-picture" className="h-10 rounded-full cursor-pointer" />

                        </>
                    ) : (

                        <button onClick={signIn}>Sign In</button>
                    )}
                </div>
                {/* Right */}
            </div>
        </div>
    )
}

export default Header