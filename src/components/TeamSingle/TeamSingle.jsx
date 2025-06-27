import { FaDotCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Loader from "../../container/Loader";
import NoData from "../../container/NoData";

const TeamSingle = ({ data, loading, error }) => {
  const titleMap = [
    {
      id: "management",
      title: "Management Team",
      link: "/team?type=management",
    },
    {
      id: "administration",
      title: "Administration Team",
      link: "/team?type=administration",
    },
    {
      id: "staff",
      title: "Faculty Members",
      link: "/team?type=staff",
    },
    {
      id: "advisor",
      title: "School Advisor",
      link: "/team?type=advisor",
    },
  ];

  const { search } = useLocation();

  const type = new URLSearchParams(search).get("type");
  return (
    <div className="team section__gap mb-100">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h1 className="md_heading">Team Members</h1>
            <ul className="team__list pe-md-5">
              {titleMap.map((item) => (
                <li key={item.id} className="border-bottom">
                  <Link
                    to={item.link}
                    className={`text-capitalize d-flex align-items-center gap-2 pb-2 ${
                      type === item.id ? "text-primary" : ""
                    }`}
                  >
                    <FaDotCircle size={10} />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-9">
            <div className="row row-gap-4">
              {!loading && data.length < 1 && (
                <div className="col-12 mt-5">
                  <NoData message={"Team Members Not Found."} />
                </div>
              )}
              {loading && <Loader className="col-12" />}
              {data.map((item, index) => (
                <div className="col-lg-3 col-md-4 col-6" key={index}>
                  <div className="team__member">
                    <div className="team__member__profile">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="team__text">
                      <span>{item.position}</span>
                      <h1 className="sm_heading">{item.name}</h1>
                      <span>{item.degree}</span>
                      <span className="d-block">{item.service}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSingle;
