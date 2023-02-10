import { useState } from "react";
import { LogoutLink } from "./Logout";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };

  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };
  return (
    <header>
      <nav>
        <Modal show={isSignupVisible} onClose={handleSignupClose}>
          <Signup onSignupClose={handleSignupClose} />
        </Modal>
        <Modal show={isLoginVisible} onClose={handleLoginClose}>
          <Login onLoginClose={handleLoginClose} />
        </Modal>
        <a href="#" onClick={handleSignupShow}>
          Signup
        </a>
        <> | </>
        <a href="#" onClick={handleLoginShow}>
          Login
        </a>
        <> | </>
        <a href="#galleries-index">Gallery</a> <> | </>
        <a href="#resumes-index">Experience and Accolades</a>
        <> | </>
        <a href="#bios-index">Bio</a>
        <> | </>
        <LogoutLink /> <></>
      </nav>
    </header>
  );
}
