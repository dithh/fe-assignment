import {useDispatch} from 'react-redux';
import {useEffect} from "react";
import {useAppSelector} from "@/store/store";
import {deletePostById, getAllPosts} from "@/services/postsService";
import {savePosts, removePostById} from "@/store/postsSlice";
import {Post} from "@/types/Post";
import Link from "next/link";


export default function PostsPage() {
    const posts: Array<Post> = useAppSelector((state) => state.posts);
    const dispatch = useDispatch()
    useEffect(() => {
        getAllPosts().then(({data}) => {
            dispatch(savePosts(data));
        }).catch(e => console.error(e))
    }, [])

    const handleDelete = async (id: Number) => {
        try {
            await deletePostById(String(id))
            dispatch(removePostById(id))
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
            <h1>Posts</h1>
            <Link href={`posts/add`}>
                Add post
            </Link>
            <ol>
                {posts.map(({id, title}) => (
                    <li key={id}>
                        <Link href={`posts/${id}`}>
                            {title}
                        </Link>
                        <span onClick={() => handleDelete(id)}>
                            Delete post
                        </span>
                    </li>
                ))}
            </ol>
        </div>)
}

