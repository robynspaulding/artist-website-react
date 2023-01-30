export function BiosIndex(props) {
  return (
    <div id="bios-index">
      <h2>Bio</h2>
      {props.bios.map((bio) => (
        <>
          <div key={bio.id}>
            <p>{bio.summary}</p>
          </div>
          <button onClick={() => props.onSelectBio(bio)}> See Details </button>
        </>
      ))}
      _____________________________________
    </div>
  );
}
