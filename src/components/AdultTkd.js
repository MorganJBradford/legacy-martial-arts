import React from "react";
import Col from "react-bootstrap/Col";
import colHeaderPic from "../img/adult-class.jpg";
import AdultClass from "../img/adult-class2.jpg";

function AdultTkd() {
  return (
    <>
      <Col xs={12} md={7} lg={7} xl={7} className="kidsCol">
        <div className="kidsColSectionOne kidsColPosition">
          <img src={colHeaderPic} className="detailHeaderPic"/>
          <h1 className="kidsColH1">ADULT TAEKWONDO & HAPKIOD</h1>
          <p className="kidsColP">Improve your fitness</p>
        </div>
        <div className="kidsColSectionTwo kidsColPosition">
          <h2 className="kidsH2">Improve Your Fitness Level</h2>
          <p className="kidsColP">
            Our Taekwondo and Hapkido classes will help you increase or maintain your flexibility, build stamina and endurance and improve your balance. Training includes a proper warm-up and both aerobic and anaerobic activities. As you progress through the belt ranking system, you’ll also be progressing physically.
          </p>
          <img src={AdultClass} className="adultColPic "/>
          <h2 className="kidsH2">Increase Your Own Self Confidence</h2>
          <p className="kidsColP">
            Whether you’ve always been an athlete — or believe that the term “sport” isn’t in your vocabulary, you’ll see yourself gain skill and knowledge in our program.
          </p>
          <h2 className="kidsH2">Reduce Stress</h2>
          <p className="kidsColP">
            As adults, we have a lot of things that put pressure on us every day. Nothing helps shed the stress like a workout that includes kicking and punching!
          </p>
          <blockquote className="familyBlock">“Thank you all for being such a fine example and for supporting such a positive school environment.”</blockquote>
          <h2 className="kidsH2">Sharpen Your Mental Awareness</h2>
          <p className="kidsColP">
            Training in self defense, you’ll gain not only physical skills — but the ability to assess situations quickly and react accordingly.
          </p>
          <h2 className="kidsH2">Get Started today:</h2>
          <p className="kidsColP">
            We encourage you to drop by the school with your child to watch a class and arrange for a free trial class. You’ll meet other parents, who like you — are looking to raise happy, healthy, active children.
          </p>
        </div>
      </Col>
    </>
  );
}

export default AdultTkd;