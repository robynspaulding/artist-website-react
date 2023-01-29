export function GalleriesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateGallery(props.gallery.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyGallery(props.gallery);
  };

  return (
    <div>
      <h1>{props.gallery.title}</h1>
      <img src={props.gallery.image} />
      <p>{props.gallery.size}</p>
      <p>Medium: {props.gallery.materials}</p>
      <p>{props.gallery.description}</p>
      <p>{props.gallery.price}</p>

      {localStorage.jwt === undefined ? (
        <></>
      ) : (
        <>
          <h1>Edit Gallery Entry:</h1>
          <form onSubmit={handleSubmit}>
            <div>Title</div>
            <div>
              <input type="text" name="title" defaultValue={props.gallery.title} />
            </div>
            <div>Image URL</div>
            <div>
              <input type="text" name="image" defaultValue={props.gallery.image} />
            </div>
            <div>Materials</div>
            <div>
              <input type="text" name="materials" defaultValue={props.gallery.materials} />
            </div>
            <div>Size:</div>
            <div>
              <input type="text" name="size" defaultValue={props.gallery.size} />
            </div>
            <div>Price</div>
            <div>
              <input type="text" name="price" defaultValue={props.gallery.price} />
            </div>
            <div>Description</div>
            <div>
              <input type="text" name="description" defaultValue={props.gallery.description} />
            </div>

            <button type="submit">Update Entry</button>
          </form>
          <div>
            <button onClick={handleClick}>Delete Gallery Entry</button>
          </div>
        </>
      )}
    </div>
  );
}
