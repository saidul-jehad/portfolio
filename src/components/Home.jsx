import { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import profile from '../../public/assets/profile/profile.jpg'
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Md Jehad Hasan",
        "I'm Mern stack developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home gap-14 mt-32 lg:mt-0 flex lg:flex-row flex-col-reverse" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>

        <div className="right lg:mr-12">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={profile} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
