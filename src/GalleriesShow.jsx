export function GalleriesShow(props) {


  return (
    <div>
      <h1>{props.gallery.title}</h1>
      <img src={props.gallery.image} />
      <p>{props.gallery.size}</p>
      <p>Medium: {props.gallery.materials}</p>
      <p>{props.gallery.description}</p>
      <p>{props.gallery.price}</p>

    </div>
  )
}