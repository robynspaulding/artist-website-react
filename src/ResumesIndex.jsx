export function ResumesIndex(props) {
  return (
    <div id="resumes-index">
      <h2>Experience and Accolades</h2>
      {props.resumes.map((resume) => (
        <div key={resume.id}>
          <h3>Summary: {resume.summary}</h3>
          <p>Link: {resume.url}</p>
          <button onClick={() => props.onSelectResume(resume)}> See Details </button>
          <p></p>
          _________________________________
        </div>
      ))}
    </div>
  );
}
