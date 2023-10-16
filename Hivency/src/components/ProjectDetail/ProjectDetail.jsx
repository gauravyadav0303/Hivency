import React from "react";

function ProjectDetail() {
  return (
    <div className="project-detail-area">
      <div className="container">
        <div className="row">
          <div className="section-title ">
            <div className="short-title">
              <span>Project</span>
            </div>
            <h2 className="title">Mobile app design</h2>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore ea commodo con Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo conUt enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo conUt
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
          </div>
        </div>

        <div className="row mt-65">
          <div className="md:w-[66.67%]">
            <div className="image">
              <img src="images/project-detail/main.jpg" alt="project-details" />
            </div>
          </div>
          <div className="sm:w-[33.33%]">
            <div className="project-info-widget">
              <div className="info-item">
                <h6>Client </h6>
                <p>Adam Smith</p>
              </div>
              <div className="info-item">
                <h6>Category:</h6>
                <p>Web Development</p>
              </div>
              <div className="info-item">
                <h6>Duration:</h6>
                <p>2 Week</p>
              </div>
              <div className="info-item">
                <h6>Website Link:</h6>
                <p>example@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-details-title">
          <h3>Project overview :</h3>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed qu commodo con Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo conUt enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo conUt enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo.
          </p>
        </div>
        <div className="image-wrapper">
          <div className="image">
            <img src="images/project-detail/image.jpg" alt="project-detail" />
          </div>
          <div className="image">
            <img src="images/project-detail/image-1.jpg" alt="project-detail" />
          </div>
        </div>
        <div className="project-details-title">
          <h3>What we did for this project :</h3>
          <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatu ea commodo con Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo conUt enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo conUt enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo.
          </p>
        </div>
        <div className="row">
          <div className="md:w-[33.33%]">
            <div className="list-item-wrapper">
              <ul>
                <li>Sunt in culpa qui officia deserunt mollit</li>
                <li>Lorem ipsum dolor sit amet, consecte</li>
                <li>Sed do eiusmod tempor incidi secte</li>
              </ul>
            </div>
          </div>
          <div className="md:w-[33.33%]">
            <div className="list-item-wrapper">
              <ul>
                <li>Sunt in culpa qui officia deserunt mollit</li>
                <li>Lorem ipsum dolor sit amet, consecte</li>
                <li>Sed do eiusmod tempor incidi secte</li>
              </ul>
            </div>
          </div>
          <div className="md:w-[33.33%]">
            <div className="list-item-wrapper">
              <ul>
                <li>Sunt in culpa qui officia deserunt mollit</li>
                <li>Lorem ipsum dolor sit amet, consecte</li>
                <li>Sed do eiusmod tempor incidi secte</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-details-title last-item">
          <h3>Project results :</h3>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo con Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            conUt enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo conUt enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
