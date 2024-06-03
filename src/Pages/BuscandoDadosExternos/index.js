import { Component } from 'react';
import './BuscandoDadosExternos.css'

export class BuscandoDadosExternos extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const fotosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, fotos] = await Promise.all([postsResponse, fotosResponse]);

    const postsJSON = await posts.json();
    const fotosJSON = await fotos.json();

    const postAndPhotos = postsJSON.map((post, index) => {
      return { ...post, cover: fotosJSON[index].url }
    })

    console.log(postAndPhotos);
    this.setState({ posts: postAndPhotos })

  }

  render() {
    const { posts } = this.state;

    return (
      <div className='BuscandoDadosExternos-container'>
        <h1>Buscando Dados Externos da api jsonplaceholder</h1>
        <div className='BuscandoDadosExternos'>
          {/* Exibindo os posts */}
          {posts.map(post => (
            <div className='blocos' key={post.id}>
              <img src={post.cover} alt={post.title}></img>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
