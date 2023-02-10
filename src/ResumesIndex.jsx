export function ResumesIndex(props) {
  return (
    <div id="resumes-index">
      <h2>Experience and Accolades</h2>
      {props.resumes.map((resume) => (
        <div key={resume.id}>
          <h3>{resume.summary}</h3>
          <a href={resume.url}>Link to Article</a>
          <p></p>
          <button onClick={() => props.onSelectResume(resume)}> See Details </button>
          <p></p>
          _________________________________
        </div>
      ))}
    </div>
  );
}
