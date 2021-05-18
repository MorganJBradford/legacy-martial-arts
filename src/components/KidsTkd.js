import React from "react";
import Col from "react-bootstrap/Col";
import EmKick from "../img/em-rhkick.jpg";
import colPicOne from "../img/kidsColPicOne.png";
import colPicTwo from "../img/kidsColPicTwo.jpg";
import colPicThree from "../img/kidsColPicThree.jpg";

function KidsTkd() {
  return (
    <>
      <Col xs={12} md={10} lg={7} xl={7} className="kidsCol">
        <div className="kidsColSectionOne kidsColPosition">
          <img src={EmKick} alt="A student kicking toward the sky" className="detailHeaderPic"/>
          <h1 className="kidsColH1">KIDS TAEKWONDO</h1>
          <p className="kidsColP">What my kids can do now is nothing short of amazing.</p>
        </div>
        <div className="kidsColSectionTwo kidsColPosition">
          <h2 className="kidsH2">Taekwondo builds healthy kids:</h2>
          <img src={colPicOne} alt="masted Jane with a student" className="kidsColPhotoRight floatRight"/>
          <p className="kidsColP">
            Taekwondo classes for kids are a great work out. Your child will breathe better, eat better, and sleep better. Children who take TKD are slimmer, make better decisions about food, and in general, learn to take care of themselves. You won’t see any of our Black Belt Students smoking or using drugs, now or ever.
          </p>
          <h2 className="kidsH2">Positive Attitude:</h2>
          <p className="kidsColP">
            Kids in our program learn to have a positive attitude. You won’t need to repeat yourself over and over, or argue with your child like many parents do. Kids learn to be respectful of their parents and teachers. You might even catch your child saying: Yes Ma’am or Yes Sir!
          </p>
          <h2 className="kidsH2">Self Confidence:</h2>
          <p className="kidsColP floatRight">
            It’s true; kids who take TKD develop better self-confidence.<img src={colPicTwo} alt="a family posing in their Dobok's" className="kidsColPhotoLeft floatLeft"/> They’re encouraged to take chances, to push themselves further than they thought possible. The success they experience through TKD teaches them that they can be successful at anything if they truly believe they can and are willing to work hard. Improved confidence leads to better grades, a better circle of friends, better performance in sports and extracurricular activities in general.
          </p>
          <div style={{clear: "both"}}></div>
          <blockquote className="kidsBlock">“What my kids can do now is nothing short of amazing!”</blockquote>
          <h2 className="kidsH2">Self-Defense:</h2>
          <p className="kidsColP">
            TKD teaches two forms of self-defense. One is physical; your child will improve his or her strength, flexibility and overall health. Additionally, your child will learn to strike with tremendous power and effectiveness. Hopefully your child will never be picked on or need to fight… but should the occasion arise, shouldn’t everyone know how to protect themselves? The second form of self-defense TKD teaches is internal. Children learn to spot danger and avoid dangerous people, places and activities. TKD can help your child avoid the need for physical confrontation. This second form of self-defense is perhaps the more valuable of the two.
          </p>
          <h2 className="kidsH2">Improved Report Cards:</h2>
          <img src={colPicThree} alt="students at a competition" className="kidsColPhotoRight floatRight"/>
          <p className="kidsColP">
            Our curriculum is designed to teach children the importance of concentration. Improved concentration means that your child will learn more at school. Therefore, you can expect your child to receive better grades for both academics and attitude.
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

export default KidsTkd;