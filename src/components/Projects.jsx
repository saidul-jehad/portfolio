import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1 className="text-center text-3xl my-8 pt-5">PROJECTS</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center mx-auto">

          {project.map((data) => (
            <>
              <div
                key={data.id}
                className="my-4 mx-4"
              >
                <div
                  className="card bg-dark text-light"
                  style={{
                    // width: "18rem",
                    border: "1px solid yellow",
                    boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                  }}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                        maxWidth: "270px",
                        height: "200px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="text-center font-semibold text-2xl">{data.title}</h5>
                    <p className="card-text font-edo">{data.description}</p>
                    <a href={data.demo} target="blank" className="btn btn-outline text-yellow-400 hover:text-white mx-3">
                      Demo
                    </a>
                    <p>
                      {data.features.map((feature, idx) => <p key={idx} className="bg-lime-100 rounded-sm text-black my-1">{feature}</p>)}
                    </p>
                    <p>
                      {data.technology}.
                    </p>
                  </div>
                </div>
              </div>

            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
