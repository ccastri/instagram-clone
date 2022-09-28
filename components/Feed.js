import Stories from './Stories'
import Posts from './Posts'
import Miniprofile from './Miniprofile'
import Suggestions from './Suggestions'
import { useSession } from "next-auth/react"


function Feed() {
    const { data: session } = useSession();
    return (
        // !: important. We override any previous setting
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
            <section className="col-span-2">
                <Stories />
                <Posts />
                {/* posts */}
            </section>
            {session &&
                <section className='hidden xl:inline-grid md:col-span-1'>
                    {/* miniprofile */}
                    <div className="fixed top-20">
                        <Miniprofile />
                        {/* Sugestions */}
                        <Suggestions />
                    </div>
                </section>
            }
        </main>
    )
}

export default Feed