export function GalleriesIndex(props) {
  return (
    <div id="galleries-index">
      <h2>Gallery</h2>
      {props.galleries.map((gallery) => (
        <div key={gallery.id}>
          <h3>Title {gallery.title}</h3>
          <p>Size{gallery.size}</p>
          <p>Materials: {gallery.materials}</p>
          <p>{gallery.description}</p>
          <img src={gallery.image} />
          <p>Price {gallery.price}</p>
          <button onClick={() => props.onSelectGallery(gallery)}> See Details </button>
          _________________________________
        </div>
      ))}
    </div>
  );
}
