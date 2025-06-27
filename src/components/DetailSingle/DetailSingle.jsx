import { useParams } from "react-router-dom";
import { formatDateTime } from "../../../helper";
import DOMPurify from "dompurify";

const DetailSingle = ({ data }) => {
  // const { id } = useParams();
  // const data = data[id];
  const isNotice = data?.hasOwnProperty("download");
  const date = formatDateTime(data.updated_at);

  return isNotice ? (
    <>
      <div className="blog__detail__header">
        <h1 className="md_heading">{data.title}</h1>
        <div className="blog__info">
          <span className="date">{data.date}</span>
        </div>
      </div>
      <div className="blog__detail__text">
        <img src={data.image} alt={data.title} />

        <p>{data.brief}</p>
      </div>
    </>
  ) : (
    <>
      <div className="blog__detail__header">
        <h1 className="md_heading">{data?.title}</h1>
        {data?.updated_at && (
          <div className="blog__info">
            <span className="date">{date}</span>
          </div>
        )}
      </div>
      <div className="blog__detail__text">
        <img src={data?.thumbnail} alt={data?.title} />

        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.content) }}
        />

        {data.quote && <em>{data.quote}</em>}

        {data.subTitle && <h1 className="sm_heading">{data.subTitle}</h1>}
        {data.brief_02 && <p>{data.brief_02}</p>}

        {data.subTitle_01 && <h1 className="sm_heading">{data.subTitle_01}</h1>}
        <ul>
          {data.list?.map((listItem, index) => {
            return <li key={index}>{listItem}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default DetailSingle;
