import { Link } from "react-router-dom";
const ContactBoxSingle = ({ icon, value }) => {
  return (
    <div className="contact__box__item d-flex align-items-center gap-2">
      {icon}
      <Link to={`tel:${value}`}> {value}</Link>
    </div>
  );
};

export default ContactBoxSingle;
