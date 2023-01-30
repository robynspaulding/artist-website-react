import axios from "axios";

export function ResumesNew() {
  const handleCreateResume = (params) => {
    axios.post("http://localhost:3000/resumes.json", params).then((response) => {
      const newResume = response.data;
      console.log("New Resume item added", newResume);
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateResume(params);
    event.target.reset;
  };

  return (
    <div id="resume-new">
      {localStorage.jwt === undefined ? (
        <></>
      ) : (
        <>
          <></>
          <form onSubmit={handleSubmit}>
            <h1>Add an item to your list:</h1>
            <div>
              <div>Summary:</div>
              <input type="text" name="summary" />
            </div>
            <div>
              <div>Link/URL:</div>
              <input type="text" name="url" />
            </div>

            <button type="submit">Add Item to Resume</button>
          </form>
        </>
      )}
    </div>
  );
}
