import DOMPurify from "dompurify";
import NoData from "../../container/NoData";
import useFetch from "../../custom_hook/useFetch";
const MessageFrom = ({}) => {
  const { data, loading, error } = useFetch({
    url: "/campuschiefmessage/",
    isSort: true,
  });

  if (!loading && data.length < 1) {
    return <NoData />;
  }
  return (
    <div className="about section__gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="about__image">
              <img src={data[0]?.image} alt={data[0]?.author} />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="about__message">
              <span className="sub_heading">{data[0]?.heading}</span>
              <h1 className="sm_heading">{data[0]?.title}</h1>
              <div
                className="about__message__text"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data[0]?.description),
                }}
              />

              <div className="message__box">
                <h1 className="sm_heading">{data[0]?.author}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageFrom;
