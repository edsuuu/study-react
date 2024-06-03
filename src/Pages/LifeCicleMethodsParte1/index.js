import { Component } from 'react';
import './LifeCicleMethodsParte1.css'
import ExampleImage from './image.png'

export class LifeCicleMethodsParte1 extends Component {
  state = {
    contador: 0,
    numeroOne: 0,
    posts: [
      {
        id: 1,
        title: 'esse titulo vai mudar apos',
        body: 'Body 1'
      },
      {
        id: 2,
        title: 'Post 2',
        body: 'Body 2'
      },
      {
        id: 3,
        title: 'Post 3',
        body: 'Body 3'
      }

    ]
  };
  // passando atributo
  timeOutempoDecorridoUpdate = null;
  componentDidMount() {
    this.handleTimeOut();
  }

  componentDidUpdate() {
    this.handleTimeOut();

  }
  componentWillUnmount() {
    clearTimeout(this.timeOutempoDecorridoUpdate);
  }

  handleTimeOut = () => {
    const { posts, contador } = this.state;
    //pegando o primeiro item do array
    posts[0].title = 'o titulo mudou';

    this.timeOutempoDecorridoUpdate = setTimeout(() => {
      this.setState({ posts, contador: contador + 1 });
    }, 1000);
  }

  render() {
    const { posts, contador } = this.state;
    return (
      <div className='LifeCicleMethodsParte1'>
        <div>
          <h1>LifeCicleMethodsParte1</h1>
          <h1> vai mudar o numero e titulo Após 2 segudos </h1>
          <h1> <span className='numeroOne'> tempo decorrido {contador}</span></h1>
          {posts.map(post => (
            <div key={post.id}>
              <h1><span className='LifeCicleMethodsParte1-titulo'>{post.title}</span></h1>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
        <div>
        <a href='https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/' target='blank'> <img src={ExampleImage} alt='imagem' width={1000} />
        <h1>clique aqui</h1></a>
          
        </div>
      </div>
    );
  }
}
