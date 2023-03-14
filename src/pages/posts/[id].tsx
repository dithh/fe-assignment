import {getPostById, deletePostById} from "@/services/postsService";
import {useRouter} from 'next/router'
import {useEffect, useState} from "react";
import {Post} from "@/types/Post";


export default function PostPage() {
    const [post, setPost] = useState<Post>()
    const router = useRouter();
    const id = router.query.id as string;
    const handleDelete = async () => {
        try {
            await deletePostById(id)
            await router.push('/posts')
        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        if (id) {
            getPostById(id).then(({data}) => {
                setPost(data)
            })
        }
    }, [id])

    return (
        post && (<>
                <h1>
                    {post.title}
                </h1>
                <p>{post.description}</p>
                <p>Created At: {new Date(post.createdAt).toLocaleDateString()}</p>
                <button onClick={handleDelete}>Delete post</button>
            </>
        )
    )
}

