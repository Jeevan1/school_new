import DOMPurify from "dompurify";
import useFetch from "../custom_hook/useFetch";
import Data from "../data.json";
const About = () => {
  const { loading, data, error } = useFetch({ url: "/aboutcampus" });
  if (data.length === 0) return null;

  const { image, title, description } = data[0];

  if (data) {
    return (
      <div className="about">
        <div className="container pb-100">
          <div className="pt-5 ">
            <p>
              <strong className=" sub__heading fs-5 ">{title} </strong>
            </p>
            <div
              className="mb-0"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(description),
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="about">
      <div className="container pb-100">
        <div className="pt-5 ">
          <p>
            <strong className=" sub__heading fs-5 ">
              Prabha Dhamkot Secondary School{" "}
            </strong>
            is a public academic institution located Prabha, Achham district of
            Nepal. This Secondary school is affiliated to the National
            Examinations Board (NEB). We aim to cultivate responsible global
            citizens who contribute meaningfully to their communities while
            embracing diversity and empathy. Through innovative teaching methods
            and a supportive learning atmosphere, we prepare students to face
            the challenges of the future with confidence and integrity.
          </p>
          <p className="mb-0">
            It is approved by Ministry of Education, Nepal. It offers Ten Plus
            Two (10+2) program in Education streams. Prabha Dhamkot Secondary
            School, Prabha, Achham provides Ten Plus program with moderate fee
            structures. It also provides a scholarship scheme for the diligent
            and deprived students of the society as per the decision of the
            school management committee. Prabha Dhamkot School Achham provides
            Counselling, Educational Tours, Sports, Conference, Library, and
            Scholarship facilities.
            <br />
          </p>
        </div>
        <div className="pt-5">
          <h1 className="md_heading">Mission</h1>
          <p className="">
            Prabha Dhamkot Secondary School is committed to fostering academic
            excellence and holistic development in every student. Our mission is
            to provide a nurturing and inclusive environment where students are
            encouraged to think critically, explore their creativity, and pursue
            personal growth. We aim to cultivate responsible global citizens who
            contribute meaningfully to their communities while embracing
            diversity and empathy. Through innovative teaching methods and a
            supportive learning atmosphere, we prepare students to face the
            challenges of the future with confidence and integrity.
          </p>
          <p className="mb-0">
            We aim to cultivate responsible global citizens who contribute
            meaningfully to their communities while embracing diversity and
            empathy. Through innovative teaching methods and a supportive
            learning atmosphere, we prepare students to face the challenges of
            the future with confidence and integrity.
          </p>
        </div>
        <div className="pt-5">
          <h1 className="md_heading">Vision</h1>
          <p>
            Prabha Dhamkot Secondary School is committed to providing holistic
            development in every student. Our vision is to provide a nurturing
            and inclusive environment where students are encouraged to think
            critically, explore their creativity, and pursue personal growth.
          </p>
          <p className="mb-0">
            We aim to cultivate responsible global citizens who contribute
            meaningfully to their communities while embracing diversity and
            empathy. Through innovative teaching methods and a supportive
            learning atmosphere, we prepare students to face the challenges of
            the future with confidence and integrity.
          </p>
        </div>
        <div className="pt-5">
          <h1 className="md_heading">Values</h1>
          <p>
            Prabha Dhamkot Secondary School is a public academic institution
            located in Prabha, Achham district of Nepal. It is affiliated to the
            National Examinations Board (NEB). We aim to cultivate responsible
            global citizens who contribute meaningfully to their communities
            while embracing diversity and empathy. Through innovative teaching
            methods and a supportive learning atmosphere, we prepare students to
            face the challenges of the future with confidence and integrity.
          </p>
          <p className="mb-0">
            It is approved by Ministry of Education, Nepal. It offers Ten Plus
            Two (10+2) program in Education streams. Prabha Dhamkot Secondary
            School, Prabha, Achham provides Ten Plus program with moderate fee
            structures. It also provides a scholarship scheme for the diligent
            and deprived students of the society as per the decision of the
            school management committee. Prabha Dhamkot School Achham provides.
          </p>
        </div>
        <div className="pt-5">
          <h1 className="md_heading">Objectives</h1>
          <p>Main objectives of the school are as follows:</p>
          <ul>
            {Data.objectives.map((item, index) => {
              return (
                <>
                  <li
                    key={index}
                    className="d-flex gap-2 pb-2 position-relative"
                  >
                    <p className="">
                      <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                    </p>
                    <span className="pl-3">{item}</span>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
