import { Component } from 'react';
import Post from '../Post/Post.tsx';
import styles from './Posts.module.css';

interface PostsProps {
  posts: { id: number; title: string; body: string }[];
}
class Posts extends Component<PostsProps> {
  render() {
    return (
      <table className={styles.postTable}>
        <thead className={styles.postTableHead}>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Discription</th>
          </tr>
        </thead>
        {this.props.posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </table>
    );
  }
}
export default Posts;
