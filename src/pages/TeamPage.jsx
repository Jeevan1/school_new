import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import PageBanner from "../components/PageBanner/PageBanner";
import TeamSingle from "../components/TeamSingle/TeamSingle";
import useFetch from "../custom_hook/useFetch";
import { useLocation } from "react-router-dom";
import NoData from "../container/NoData";
import { BounceLoader } from "react-spinners";

const TeamPage = () => {
  const [teamData, setTeamData] = useState([]);
  const { search } = useLocation();
  const type = new URLSearchParams(search).get("type");
  const { loading, data, error } = useFetch({ url: "/teams/" });

  useEffect(() => {
    if (data) {
      const filterFieldMap = {
        management: "is_management",
        administration: "is_administrative",
        staff: "is_staff",
        advisor: "is_advisor",
      };

      const filterField = filterFieldMap[type] || "is_management"; // Default to management if type is not matched
      const filteredData = data.filter((item) => item[filterField]);
      setTeamData(filteredData);
    }
  }, [data, type]);

  const getPageTitle = (type) => {
    const titleMap = {
      management: "Management Team",
      administration: "Administration Team",
      staff: "Faculty Members",
      advisor: "School Advisor",
    };
    return titleMap[type] || "Management Team"; // Default to Management Team if type is not matched
  };

  return (
    <Layout>
      <PageBanner pageTitle={getPageTitle(type)} page={"Team"} />
      {teamData ? (
        <div className=" ">
          <TeamSingle data={teamData} loading={loading} error={error} />
        </div>
      ) : (
        <div className="container section__gap mb-80">
          <NoData message="No data found" />
        </div>
      )}
    </Layout>
  );
};

export default TeamPage;
