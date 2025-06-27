const SectionTitle = ({ title, subTitle, classlight }) => {
  return (
    <div className="section__title container">
      <span>{subTitle}</span>
      <h1 className="md_heading text-center">{title}</h1>
    </div>
  );
};

export default SectionTitle;
