import { Component } from "react";
import PostCard from "../../Components/PostCard";
import { loadPost } from "../../utils/load-posts";
import { Button } from "../../Components/Button";
import TextInput from "../../Components/TextInput";
import "./BuscandoDadosExternos.css";

export class BuscandoDadosExternos extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPorPagina: 6,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPorPagina } = this.state;
    const postAndPhotos = await loadPost();

    this.setState({
      //
      posts: postAndPhotos.slice(page, postsPorPagina),
      allPosts: postAndPhotos,
    });
  };

  carregueMaisPosts = () => {
    const { page, postsPorPagina, allPosts, posts } = this.state;
    const proximaPage = page + postsPorPagina;
    const nextPage = allPosts.slice(proximaPage, proximaPage + postsPorPagina);
    posts.push(...nextPage);

    this.setState({ posts, page: proximaPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPorPagina, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPorPagina >= allPosts.length;

    const postsFiltrados = !!searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <div className="BuscandoDadosExternos-container">
        <h1>Buscando Dados Externos da api jsonplaceholder</h1>
        <div>
          <TextInput  searchValue={searchValue} handleChange={this.handleChange}/>
          {/* se tiver uma busca no input o h1 aparece */}
          {!!searchValue && (
            <>
              <h1>Texto digitado no input: {searchValue}</h1>
            </>
          )}
        </div>
        <div className="BuscandoDadosExternos">
          {/* Exibindo os posts */}

          {postsFiltrados.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              cover={post.cover}
            />
          ))}

          {postsFiltrados.length === 0 && (
            <h1> nao existe post com esse nome</h1>
          )}
        </div>
        <div className="button-container">
          {/* se tiver uma busca no input o botao some */}
          {!searchValue && (
            <Button
              disabled={noMorePosts}
              onClick={this.carregueMaisPosts}
              text="Carregar mais posts "
            />
          )}
        </div>
      </div>
    );
  }
}
