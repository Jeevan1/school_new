const NoData = ({ message }) => {
  return (
    <div className="container nodata__container">
      <p className="">{message || "No Data Found"}</p>
    </div>
  );
};

export default NoData;
