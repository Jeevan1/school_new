import { FaEnvelopeOpenText, FaLocationArrow, FaPhone } from "react-icons/fa";
import ContactBoxSingle from "./ContactBoxSingle/ContactBoxSingle";

const ContactBox = () => {
  return (
    <div className="contact__box">
      <ContactBoxSingle icon={<FaPhone />} value={"+977 9848689688"} />
      <ContactBoxSingle
        icon={<FaEnvelopeOpenText />}
        value={"prabhadhamkot2010@gmail.com"}
      />
      <ContactBoxSingle
        icon={<FaLocationArrow />}
        value={"Prabha,Sanfebagar,Achham,Nepal"}
      />
    </div>
  );
};

export default ContactBox;
