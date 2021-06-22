import React from "react";

//import stock
import devanySs from "../img/devany-ss.png";
import ssOaGQL from "../img/online-a-gql.png";
import f1ApiGQL from "../img/f1-gql-api.png";
import ssFCards from "../img/flashcards-ss.png";
import FCarsApi from "../img/flashcards-api.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Here you can find some of my projects.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://devany.mx" target="_blank" rel="noreferrer">
                  <div className="work-img">
                    <img src={devanySs} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Devany Landing Page</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS CSS3 Bootstrap
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://academia-online-graphql-two.vercel.app" target="_blank" rel="noreferrer">
                  <div className="work-img">
                    <img src={ssOaGQL} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Online Academy GraphQL API</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            TypeScript Express Apollo GraphQL
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://f1-api-graphql.vercel.app" target="_blank" rel="noreferrer">
                  <div className="work-img">
                    <img src={f1ApiGQL} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">F1 GraphQL API based on ergast API</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            TypeScript Express Apollo GraphQL
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://flashcards-psi.vercel.app/" target="_blank" rel="noreferrer">
                  <div className="work-img">
                    <img src={ssFCards} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">FlashCars App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS Tailwind CSS Apollo GaphQL Client
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://api-flashcards.vercel.app/" target="_blank" rel="noreferrer">
                  <div className="work-img">
                    <img src={FCarsApi} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">FlashCards App GraphQL API</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            TypeScript Express Apollo GraphQL MongoDB Atlas
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
