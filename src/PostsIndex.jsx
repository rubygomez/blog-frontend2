
export function PostsIndex(props) {
    return (
        <div>
            <h1>All Posts</h1>
            {props.posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.name}</h2>
                    <img src={post.image} alt="" />
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}