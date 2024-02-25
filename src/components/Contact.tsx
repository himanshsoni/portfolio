import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="transition duration-500 ease-in-out">
      <div className="flex flex-col justify-center items-center mt-5 ">
        <h1 className="text-3xl">
          Connect with me
          <br />
        </h1>

        <div className="mt-4 p-2 flex mx-4">
          <Link target="_blank" href={"mailto:himanshsoni5@gmail.com"}>
            <FontAwesomeIcon className="mx-4 p-4" size="2x" icon={faEnvelope} />
          </Link>
          <Link target="_blank" href={"https://github.com/himanshsoni"}>
            <FontAwesomeIcon className="mx-4 p-4" size="2x" icon={faGithub} />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/himansh-soni/"}
          >
            <FontAwesomeIcon className="mx-4 p-4" size="2x" icon={faLinkedin} />
          </Link>
          <Link
            target="_blank"
            href={"https://www.instagram.com/soni.himansh/"}
          >
            <FontAwesomeIcon
              className="mx-4 p-4"
              size="2x"
              icon={faInstagram}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
