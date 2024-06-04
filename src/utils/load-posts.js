export const loadPost = async () => {
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const fotosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, fotos] = await Promise.all([postsResponse, fotosResponse]);

    const postsJSON = await posts.json();
    const fotosJSON = await fotos.json();

    const postAndPhotos = postsJSON.map((post, index) => {
      return { ...post, cover: fotosJSON[index].url };
    });

   return postAndPhotos ;
}