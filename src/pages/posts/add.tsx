import {addPost} from "@/services/postsService";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";


type PostFormData = {
    title: string;
    description: string;
}

export default function PostAddPage() {
    const {register, handleSubmit} = useForm<PostFormData>();
    const router = useRouter();

    const onSubmit = async (data: PostFormData) => {
        try {
            await addPost(data)
            await router.push('/posts')
        } catch (e) {
            console.error(e)
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="title" {...register("title", {
                required: {
                    value: true,
                    message: 'field is required'
                }
            })} />
            <input placeholder="description"  {...register("description", {
                required: {
                    value: true,
                    message: 'field is required'
                }
            })} />
            <button type="submit">Add post</button>
        </form>
    )
}

