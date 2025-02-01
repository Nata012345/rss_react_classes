import React, {Component} from "react";
import Post from "./Post.tsx";

interface PostsProps {
    posts: {id: number; title: string; body: string}[];
}
class Posts extends Component<PostsProps> {
    render() {
        return (
            <ul>
                {this.props.posts.map((post) => (
                    <Post key={post.id} id={post.id} title={post.title} body={post.body} />
                ))}
            </ul>
        )
    }
}
export default Posts;