import React from "react";
import Col from "react-bootstrap/Col";
import colHeaderPic from "../img/kidsColPicTwo.jpg";

function FamilyTkd() {
  return (
    <>
      <Col xs={12} md={7} lg={7} xl={7} className="kidsCol">
        <div className="kidsColSectionOne kidsColPosition">
          <img src={colHeaderPic} className="kidsColPic"/>
          <h1 className="kidsColH1">FAMILY TAEKWONDO</h1>
          <p className="kidsColP">Fun for the entire family</p>
        </div>
        <div className="kidsColSectionTwo kidsColPosition">
          <h2 className="kidsH2">Keep Your Family Strong!</h2>
          <p className="kidsColP">
            Our Taekwondo family classes will provide you with a great opportunity for you to teach your children by example. From both of your efforts, you’ll give your child the gift of:
          </p>
          <h2 className="kidsH2">Positive Attitude:</h2>
          <p className="kidsColP">
            Kids in our program learn to have a positive attitude. You won’t find yourself repeating yourself over and over, or arguing with your child like most parents do. Kids learn to be respectful of their parents and teachers. You might even catch your child saying: Yes Ma’am or Yes Sir!
          </p>
          <h2 className="kidsH2">Self Confidence:</h2>
          <p className="kidsColP">
            It’s true; kids who take TKD develop better self-confidence. They’re encouraged to take chances, to push themselves further than they thought possible. The success they experience through TKD teaches them that they can be successful at anything if they truly believe they can and are willing to work hard. Improved confidence leads to better grades, a better circle of friends, better performance in sports and extracurricular activities in general.
          </p>
          <blockquote className="familyBlock">“Master Jane brings the highest principles of Martial Arts into clarity in such a way that my family will be positively impacted for the rest of our lives.”</blockquote>
          <h2 className="kidsH2">Self-Defense:</h2>
          <p className="kidsColP">
            TKD teaches two forms of self-defense. One is physical; your child will improve his or her strength, flexibility and overall health. Additionally, your child will learn to strike with tremendous power and effectiveness. Hopefully your child will never be picked on or need to fight… but should the occasion arise, shouldn’t everyone know how to protect themselves? The second form of self-defense TKD teaches is internal. Children learn to spot danger and avoid dangerous people, places and activities. TKD can help your child avoid the need for physical confrontation. This second form of self-defense is perhaps the more valuable of the two.
          </p>
          <h2 className="kidsH2">Improved Report Cards:</h2>
          <p className="kidsColP">
            And, one place you’ll see the benefits our family program is in the report cards! We believe in encouraging children to actively participate and work hard in school. It’s something we monitor as part of our testing.
          </p>
          <h2 className="kidsH2">You'll Benefit Also!:</h2>
          <p className="kidsColP">
            At the same time your child is gaining so much, you too will:
          </p>
          <ul>
            <li>Improve Your Fitness Level</li>
            <li>Reduce Stress</li>
            <li>Increase Your Own Self Condifence</li>
            <li>Sharpen Your Mental Awareness</li>
          </ul>
          <p className="kidsColP">
            While you set an example, participating in our classes by your child’s side, you’ll both see improvement in your lives — and come to love our program as well!
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

export default FamilyTkd;