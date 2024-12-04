import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";


export interface Blog {
    "content": string;
    "title": string;
    "id": number
    "published":boolean
    "authorId": string
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        console.log(BACKEND_URL+"/api/v1/blog/"+id)
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: "Bearer "+localStorage.getItem("token1")
            }
        })
            .then(response => {
                console.log(response.data)
                setBlog(response.data);
                setLoading(false);
            })
    }, [id])

    return {
        loading,
        blog
    }

}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        // console.log()
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: "Bearer "+localStorage.getItem("token1")
            }
        })
            .then(response => {
                // console.log(response.data)
                setBlogs(response.data);
                setLoading(false);
                // console.log(blogs)
            })
    }, [])

    return {
        loading,
        blogs
    }
}