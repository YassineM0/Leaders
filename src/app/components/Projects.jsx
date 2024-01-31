import React from "react";
import Cardd from "./Cardd";
const Projects = () => {
  return (
    <div>
      <h1 className="text-5xl flex justify-center text-txt font-semibold">
        Projects
      </h1>
      <div className="grid grid-cols-[1fr_1fr_1fr] px-3">
        <Cardd
          description="Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu,"
          title="project 1"
          image="/wd.png"
          
        />
        <Cardd
          description="Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu,"
          title="project 1"
          image="/wd.png"
        />
        <Cardd
          description="Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu,"
          title="project 1"
          image="/wd.png"
        />
      </div>
    </div>
  );
};

export default Projects;
