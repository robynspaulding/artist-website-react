import axios from "axios";

export function GalleriesNew() {
  const handleCreateGallery = (params) => {
    axios.post("http://localhost:3000/galleries.json", params).then((response) => {
      const newGallery = response.data;
      console.log("New Gallery item added", newGallery);
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateGallery(params);
    event.target.reset;
  };

  return (
    <div id="gallery-new">
      <form onSubmit={handleSubmit}>
        <h1>Add an item to your Gallery:</h1>
        <div>
          <div>Title:</div>
          <input type="text" name="title" />
        </div>
        <div>
          <div>Image URL:</div>
          <input type="text" name="image" />
        </div>
        <div>
          <div>Materials used: </div>
          <input type="text" name="materials" />
        </div>
        <div>
          <div>Size:</div>
          <input type="text" name="size" />
        </div>
        <div>
          <div>Sale Price:</div>
          <input type="text" name="price" />
        </div>
        <div>
          <div>Description:</div>
          <input name="description" placeholder="Item Description"></input>
        </div>

        <button type="submit">Add Item to Gallery</button>
      </form>
    </div>
  );
}
