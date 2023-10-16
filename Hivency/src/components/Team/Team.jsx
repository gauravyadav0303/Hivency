import React from "react";

function Team() {
    return ( 
        <div className="team-area style-1">
        <div className="container">
            <div className="row justify-center">
                <div className="sm:w-[66.67%] lg:w-[50%]">
                    <div className="section-title text-center ">
                        <div className="short-title">
                            <span>Our team</span>
                        </div>
                        <h2 className="title">A team of amazing  <span className="underline1"><img src="images/shape/underline.png" alt="underline"/> people</span></h2>
                        <p className="desc">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma</p>
                    </div>
                </div>
            </div>
            <div className="row g-6">
                <div className="sm:w-[50%] md:w-[25%]">
                    <div className="team-member-card">
                        <div className="sketch">
                            <img src="images/shape/wave.png" alt="sketch"/>
                        </div>
                        <div className="image blue">
                            <img src="images/team-member/team-1.png" alt="team"/>
                        </div>
                        <div className="content">
                            <h5 className="title">
                                <a href="#">Jenny Wilson</a>
                            </h5>
                            <p className="desc">Cofounder / CEO</p>
                        </div>
                    </div>
                </div>
                <div className="sm:w-[50%] md:w-[25%]">
                    <div className="team-member-card">
                        <div className="sketch">
                            <img src="images/shape/wave.png" alt="sketch"/>
                        </div>
                        <div className="image primary">
                            <img src="images/team-member/team-2.png" alt="team"/>
                        </div>
                        <div className="content">
                            <h5 className="title">
                                <a href="#">Robert Mayar</a>
                            </h5>
                            <p className="desc">Design Head</p>
                        </div>
                    </div>
                </div>
                <div className="sm:w-[50%] md:w-[25%]">
                    <div className="team-member-card">
                        <div className="sketch">
                            <img src="images/shape/wave.png" alt="sketch"/>
                        </div>
                        <div className="image pink">
                            <img src="images/team-member/team-3.png" alt="team"/>
                        </div>
                        <div className="content">
                            <h5 className="title">
                                <a href="#">Annette Black</a>
                            </h5>
                            <p className="desc">Chief of Marketing</p>
                        </div>
                    </div>
                </div>
                <div className="sm:w-[50%] md:w-[25%]">
                    <div className="team-member-card">
                        <div className="sketch">
                            <img src="images/shape/wave.png" alt="sketch"/>
                        </div>
                        <div className="image green">
                            <img src="images/team-member/team-4.png" alt="team"/>
                        </div>
                        <div className="content">
                            <h5 className="title">
                                <a href="#">Bessie Cooper</a>
                            </h5>
                            <p className="desc">Front End Designer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex align-items-center justify-center">
                <a href="/team" className="theme-btn">
                    <div className="swip">
                        <div className="title-wrapper">
                            <span className="title-1">View all</span>
                            <span className="title-2">View all</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
     );
}

export default Team;