import axios from 'axios';

const fetchResults = async (searchTerm) => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      {
        params: { _limit: 10, _page: 1 },
      }
    );
    return response.data.map((post) => ({
      id: post.id,
      title: post.title,
      body: post.body,
    }));
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export default fetchResults;
