export function ResumesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateResume(props.resume.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyResume(props.resume);
  };

  return (
    <div>
      <h1>{props.resume.summary}</h1>
      <p>{props.resume.url}</p>
      {/* Make this a Link later with react-router-dom */}

      {/* {localStorage.jwt === undefined ? (
        <></>
      ) : (
        <>
          <h1>Edit resume Entry:</h1>
          <form onSubmit={handleSubmit}>
            <div>Link</div>
            <div>
              <input type="text" name="url" defaultValue={props.resume.url} />
            </div>
            <div>Summary</div>
            <div>
              <input type="text" name="summary" defaultValue={props.resume.summary} />
            </div>
            <button type="submit">Update Entry</button>
          </form>
          <div>
            <button onClick={handleClick}>Delete resume Entry</button>
          </div>
        </>
      )} */}
    </div>
  );
}
