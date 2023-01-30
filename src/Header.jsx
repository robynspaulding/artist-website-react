import { LogoutLink } from "./Logout";

export function Header() {
  return (
    <header>
      <nav>
        <a href="#galleries-index">Gallery</a> | <a href="#resumes-index">Experience and Accolades</a> | <></>
        <LogoutLink /> <></>
      </nav>
    </header>
  );
}
