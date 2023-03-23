import React from "react";
// import "../assets/css/about.css";

function AboutUs() {
  return (
    <div className="custom-container">
      <div className="row py-4 about-hero">
        <div className="about-hero__heading">Who We Are</div>
        <div className="about-hero__text">
          JustBuy is guided by four principles: customer obsession rather than
          competitor focus, passion for invention, commitment to operational
          excellence, and long-term thinking. JustBuy strives to be Earth’s most
          customer-centric company, Earth’s best employer, and Earth’s safest
          place to work. Customer reviews, 1-Click shopping, personalised
          recommendations, Prime, Fulfilment by JustBuy, AWS, Kindle Direct
          Publishing, Kindle, Career Choice, Fire tablets, Fire TV, JustBuy
          Echo, Alexa, Just Walk Out technology, JustBuy Studios, and The
          Climate Pledge are some of the things pioneered by JustBuy.
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="about-card">
            <h2>Leader Ship Principles</h2>
            <p className="about-card__text">
              Our Leadership Principles are more than inspirational posters. The
              16 principles guide our discussions and decisions every day.
            </p>
            <button className="btn btn-outline-light" type="button">
              Learn more
            </button>
          </div>
        </div>
        <div className="col">
          <div className="about-card">
            <h2>Corporate Responsibility</h2>
            <p className="about-card__text">
              At JustBuy, we are committed to playing our part in the UK by
              creating jobs, investing in the UK, tackling climate change and
              supporting our local communities.
            </p>
            <button className="btn btn-outline-light" type="button">
              Learn more
            </button>
          </div>
        </div>
        <div className="col">
          <div className="about-card">
            <h2>Awards and Recognition</h2>
            <p className="about-card__text">
              We are honoured to be recognised for the work we do on behalf of
              our customers, employees,investors, and communities every day.
            </p>
            <button className="btn btn-outline-light" type="button">
              Learn more
            </button>
          </div>
        </div>
      </div>

      <div className="py-5 mt-5">
        <img
          src="https://images.unsplash.com/photo-1493135637657-c2411b3497ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default AboutUs;

/*
<div className="container-fluid py-5">
        <h2 className="display-5 fw-bold">About Us</h2>
        <p className="col-md-8 fs-4">
          Welcome and thank you for choosing JustBuy. We aim to deliver a
          shopping experience you'll love without any of the fuss of more
          traditional sites. Want to sign up? Go ahead! Want to check out
          without registering? That's fine too! We're sure you'll love our
          products and we offer rapid delivery at bargain prices so that you can
          see for yourself. Don't agree with us? Simply return the products
          within 35 days for a free refund with no questions asked.
        </p>
      </div>
*/

/*
<div class="container py-4">
        <div class="p-5 mb-4">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Custom jumbotron</h1>
            <p class="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p>
            <button class="btn btn-primary btn-lg" type="button">
              Learn more
            </button>
          </div>
        </div>

        <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 p-5">
              <h2>Change the background</h2>
              <p>
                Swap the background-color utility and add a `.text-*` color
                utility to mix up the jumbotron look. Then, mix and match with
                additional component themes and more.
              </p>
              <button class="btn btn-outline-light" type="button">
                Example button
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5">
              <h2>Add borders</h2>
              <p>
                Or, keep it light and add a border for some added definition to
                the boundaries of your content. Be sure to look under the hood
                at the source HTML here as we've adjusted the alignment and
                sizing of both column's content for equal-height.
              </p>
              <button class="btn btn-outline-secondary" type="button">
                Example button
              </button>
            </div>
          </div>
        </div>
      </div>
 */
