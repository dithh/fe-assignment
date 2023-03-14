import {httpClient} from "@/httpClient/httpClient";
import {Post} from "@/types/Post";


type getAllPostsResponse = {
    data: Array<Post>
}

type getPostResponse = {
    data: Post
}

type addPostRequest = {
    title: string;
    description: string
}

export const getAllPosts = async (): Promise<getAllPostsResponse> => {
    return httpClient.get('/posts');
}

export const getPostById = async (id: string): Promise<getPostResponse> => {
    return httpClient.get(`/posts/${id}`);
}

export const deletePostById = async (id: string): Promise<getPostResponse> => {
    return httpClient.delete(`/posts/${id}`);
}

export const addPost = async (post: addPostRequest): Promise<any> => {
    return httpClient.post('/posts/', post)
}