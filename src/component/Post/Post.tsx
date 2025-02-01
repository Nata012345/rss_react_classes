import { Component } from 'react';

interface PostProps {
  id: number;
  title: string;
  body: string;
}
class Post extends Component<PostProps> {
  render() {
    const { id, title, body } = this.props;
    return (
      <li>
        <strong>
          {id}. {title}
        </strong>
        : {body}
      </li>
    );
  }
}
export default Post;
