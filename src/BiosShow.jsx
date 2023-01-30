export function BiosShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateBio(props.bio.id, params);
    event.target.reset();
  };

  return (
    <div>
      <h1>{props.bio.summary}</h1>

      {localStorage.jwt === undefined ? (
        <></>
      ) : (
        <>
          <h1>Edit Bio:</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" name="summary" defaultValue={props.bio.summary} />
            </div>

            <button type="submit">Update Entry</button>
          </form>
        </>
      )}
    </div>
  );
}
