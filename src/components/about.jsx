import React from "react";
//import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "HTML5_skill",
          content: "HTML5",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "CSS3_skill",
          content: "CSS3",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "GIT_skill",
          content: "GIT",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "Express_skill",
          content: "Express",
          porcentage: "60%",
          value: "60"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "GraphQL_skill",
          content: "GraphQL",
          porcentage: "55%",
          value: "55"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content: "I'm a mid-level react frontend developer using technologies like Typescript, Tailwind CSS, React Hooks, GraphQL, Firebase, etc."
        },
        {
          id: "second-p-about",
          content:
            "I seek to grow within the technology industry contributing my knowledge and creativity to be able to create technology that changes the world in one way or another.My soft skills and my communication skills are quite good which is quite important not only in the workplace but at all times.I am self- taught, proactive, and a loyal advocate that the best way to work is to work efficiently, not work hard. My foundations in computing and software architecture are quite solid and broad."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
