
// Aboutus.js
import React from "react";
import "./Aboutus.css";


function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-image">
          <img src="/images/About Us.jpg" alt="Description" />
        </div>

        <div className="about-content">
          <div className="about-header">
              <h2> About St. John's PharmAssist</h2>
          </div>

          <div >
          <h2>Our Beginnings</h2>
          </div>
          <p>
            Medicine and healthcare has evolved throughout history. Before, the
            primary source of medicine has been herbal. However, thanks to
            Science and Technology, medicine has evolved through time. Of
            course, herbal medicine is still available in the market. Though,
            with the variety of medicine available in today’s world, navigating
            through them can be a challenge. This is exactly the challenge that
            the makers of St. John’s PharmAssist planned to solve.
          </p>
          <p>
            St. John’s PharmAssist is a directory-style website that aims to
            provide its users the best and easiest experience for looking up
            medicinal information online. St. John’s PharmAssist provides a wide
            variety of information, from the common medicinal information such
            as the medicine name and generic name, to specific information such
            as possible side effects and pharmacies wherein said medicine are
            available.
          </p>
        </div>
      </div>


      <br />
      <div className="about-story">
        <h2>The Story Behind The Name</h2>
        <p>
          The team wanted to have a name that would instantly capture people’s
          attention, explain the project just by the name itself, and make sure
          that people would remember it instantly. With the name St. John’s
          PharmAssist, it surely achieves all of the said criteria that the team
          was looking for.
        </p>
        <p>
          The name St. John’s PharmAssist is derived from the word ‘pharmacist’,
          meaning a person who is qualified for preparing and dispensing medical
          drugs. With a little engineering of the word with the goal of the
          team, ‘PharmAssist’ was created by combining the words ‘pharmacy’ and
          ‘assist’, yet sounding like the word ‘pharmacist’. Overall, the word
          ‘PharmAssist’ means “to help someone by doing a share of the work
          about the art, practice, preserving, and dispensing of medicinal
          drugs”.
        </p>
        <p>
          St. John from the name came from St. John’s wort, an herbal medicine
          dating all the way back from the first century, used for a variety of
          conditions such as kidney and lung ailments, insomnia, depression, and
          aid wound healing. Nowadays, herbal medicine is used for treating
          premenstrual syndrome, menopause, inflammation of wounds, and some
          mental conditions such as seasonal affective disorder (SAD), obsessive
          compulsive disorder (OCD), and social phobia. Coincidentally, the
          herbal plant was named from St. John the Baptist, as its flowers and
          buds were mostly harvested during St. John’s Feast Day every 24thJune,
          making the plant to have more healing and magical powers more
          effective when harvested on the said date.
        </p>
        <p>
          Additionally, St. John from the name was an answer or a continuation
          of the project of 3 out of 6 members of the team. These people are{" "}
          <i>
            <b>John Paul Amegleo</b>
          </i>
          ,{" "}
          <i>
            <b>Kyle Fernandez</b>
          </i>
          , and{" "}
          <i>
            <b>Krisia Lahoz</b>
          </i>
          . Their project during one of their subjects of their 2nd Year is
          named St. John’s Hospital, a reservation-type application made from
          Java wherein its users can book and schedule an appointment with its
          available doctors, and see the status of their booking. They saw an
          opportunity to continue on their work with another project that fits
          their initial one.
        </p>
      </div>

      <br />
      <div className="about-teamhead">
        <div className="team-intro">
          <h2>The People Behind The Project</h2>
          <p>
            St. John’s PharmAssist is made by a team of 3rd year BS in Computer
            Science students for their Software Engineering subject. Spearheaded
            by their leader, <b>John Paul Amegleo</b>, he leads the team to
            glory by organizing the team and each members’ ideas, formulating
            them into one. Thus, the very website was created.
          </p>
        </div>
        
        <div className="about-team">
          <div className="team-container">
            <div className="team-pic">
              <img src="/images/ivahnpic.jpg" alt="" />
            </div>
            <div className="team-info">
              <h3> Ivahnn Garcia </h3>
              <p>
                {/* <br /> */}
                Head Front End Developer
              </p>
            </div>
          </div>

          <div className="team-container">
            <div className="team-pic">
              <img src="/images/janpolpic.jpg" alt="" />
            </div>
            <div className="team-info">
              <h3> John Paul Amegleo </h3>
              <p>
                {/* <br /> */}
                Team Leader <br />
                Database Manager <br />
                Back End Developer
              </p>
            </div>
          </div>

          <div className="team-container">
            <div className="team-pic">
              <img src="/images/kylepic.jpg" alt="" />
            </div>
            <div className="team-info">
              <h3> Kyle Fernandez </h3>
              <p>
                {/* <br /> */}
                Front End Developer
              </p>
            </div>
          </div>
        </div>

        <div className="about-team">
          <div className="team-container">
            <div className="team-pic">
              <img src="/images/juliapic.jpg" alt="" />
            </div>
            <div className="team-info">
              <h3> Julia Daphne Gatdula </h3>
              <p>
                {/* <br /> */}
                Researcher <br />
                Documentarist
              </p>
            </div>
          </div>
          <div className="team-container">
            <div className="team-pic">
              <img src="/images/krisiapic.jpg" alt="" />
            </div>
            <div className="team-info">
              <h3> Krisia Lahoz </h3>
              <p>
                {/* <br /> */}
                Researcher <br />
                Front End Developer
                Content Creator
              </p>
            </div>
          </div>

          <div className="team-container">
            <div className="team-pic">
              <img src="/images/kianpic.jpg" alt="" />
            </div>
            <div className="team-info">
              <h3> Kian Denniel Varde </h3>
              <p>
                {/* <br /> */}
                Front End Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
