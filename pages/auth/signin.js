import { getProviders, signIn as SingIntoProvider } from 'next-auth/react'
import React from 'react'
import Header from '../../components/Header'

function signin({ providers }) {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 px-14 text-center">
                <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
                <p className="font-xs italic">This is not a REAL app. I'm just playin' </p>
                <div className="mt-20">

                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button className=" p-3 bg-blue-500 rounded-lg text-white" onClick={() => SingIntoProvider(provider.id, { callbackUrl: '/' })}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signin