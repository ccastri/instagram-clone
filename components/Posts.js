import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db, storage } from '../firebase'
import { useState, useEffect } from 'react'
import Post from './Post'

// const posts = [
//     {
//         id: 123,
//         username: "ccastri",
//         userImg: '/yo.jpeg',
//         img: '/yo.jpeg',
//         caption: 'this is lit!!!'
//     },
//     {
//         id: 123,
//         username: "ccastri",
//         userImg: '/yo.jpeg',
//         img: '/yo.jpeg',
//         caption: 'this is lit!!!'
//     },
//     {
//         id: 123,
//         username: "ccastri",
//         userImg: '/yo.jpeg',
//         img: '/yo.jpeg',
//         caption: 'this is lit!!!'
//     },
// ]
function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(
        () =>
            onSnapshot(
                query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
                snapshot => {
                    console.log(snapshot.docs);
                    setPosts(snapshot.docs);
                }
            ),
        [db]
    );
    console.log(posts)
    return (
        <div>
            {
                posts.map((post) => (

                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.data().username}
                        userImg={post.data().profileImg}
                        img={post.data().image}
                        caption={post.data().caption}
                    />
                ))
            }

        </div>
    )
}

export default Posts