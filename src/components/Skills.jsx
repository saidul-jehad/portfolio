import skills from "./data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills pt-80 lg:pt-10" id="skills">
        <h1 className="text-center my-8 text-3xl">SKILLS</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 justify-center iitems items-center ">
          {skills.map((data) => (
            <>
              <div
                className="item "
                key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={`/assets/${data.imageSrc}`} alt="" />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
