export function BiosIndex(props) {
  return (
    <div id="bios-index">
      <h2>Bio</h2>
      <img className="bio_image" src="assets/images/Birgit.jpg" />
      {props.bios.map((bio) => (
        <>
          <div key={bio.id}>
            <p>{bio.summary}</p>
          </div>
          <button onClick={() => props.onSelectBio(bio)}> See Details </button>
        </>
      ))}
      <p></p>
      _____________________________________
    </div>
  );
}
