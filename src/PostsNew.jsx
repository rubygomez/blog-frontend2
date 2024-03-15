
export function PostsNew(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onCreatePost(params, () => event.target.reset());
    };

    return(
        <div>
            <h1>New Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    Name: <input name="name" type="text" />
                </div>
                <div>
                    Url: <input name="url" type="text" />
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}