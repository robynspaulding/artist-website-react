export function GalleriesIndex(props) {
  return (
    <div id="galleries-index">
      <h1>Gallery</h1>
      {props.galleries.map((gallery) => (
        <div key={gallery.id}>
          <h3>Title: {gallery.title}</h3>
          <p>Size: {gallery.size}</p>
          <p>Materials: {gallery.materials}</p>
          <p>{gallery.description}</p>
          <img className="image" src={gallery.image} />
          <p>Price: {gallery.price}</p>
          <button onClick={() => props.onSelectGallery(gallery)}> See Details </button>
          <p></p>
          _________________________________
        </div>
      ))}
    </div>
  );
}
