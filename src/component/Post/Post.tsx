import { Component } from 'react';
import styles from './Post.module.css';

interface PostProps {
  id: number;
  title: string;
  body: string;
}
class Post extends Component<PostProps> {
  render() {
    const { id, title, body } = this.props;
    return (
      <tbody className={styles.resultBody}>
        <tr>
          <td>{id}</td>
          <td>
            <strong>{title}</strong>
          </td>
          <td>{body}</td>
        </tr>
      </tbody>
    );
  }
}
export default Post;
