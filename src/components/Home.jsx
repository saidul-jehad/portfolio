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
        "I'm Mern stack developer"
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
      <div className="container home gap-14 mt-32 lg:mt-0 flex lg:flex-row flex-col" id="home">
        <div className="left md:w-1/2" data-aos="fade-up-right" data-aos-duration="1000">
          <h3 className="text-2xl font-bold">Hello</h3>

          <h1 className="text-red-400 font-semibold font-edo my-2" ref={typedRef}></h1>
          <p>I love to create beautiful and functional websites. I have done some full-stack projects. I am passionate about coding and love to learn new technologies</p>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline text-yellow-400 hover:text-white my-3"
          >
            Download Resume
          </a>
        </div>

        <div className="right lg:mr-20 mt-20">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={profile} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
