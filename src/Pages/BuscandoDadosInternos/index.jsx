import { Component } from 'react';
import './BuscandoDadosInternos.css';

export class BuscandoDadosInternos extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O corpo 3'
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className='BuscandoDadosInternos'>
        <h1>Buscando dados de uma API</h1>
        {/* Exibindo os posts */}
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}