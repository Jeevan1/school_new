import { useEffect, useState } from "react";
import popupFallback from "../../assets/img/03.jpg"; // Fallback image
import { AiOutlineClose } from "react-icons/ai";
import useFetch from "../../custom_hook/useFetch";

const Popup = () => {
  const [popupStatus, setPopupStatus] = useState(true);
  const [popupTime, setPopupTime] = useState(20);

  const { loading, data, error } = useFetch({ url: "/popup/" });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPopupTime((prevTime) => {
        if (prevTime === 1) {
          setPopupStatus(false);
          clearInterval(intervalId);
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (popupStatus && data[0]?.image) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [popupStatus]);

  const popupImage = data?.sort((a, b) => b.id - a.id)[0]?.image;
  const popupTitle = data[0]?.name;

  if (!data[0]?.image) {
    return null;
  }

  return (
    <div className={popupStatus ? "popup active" : "popup"}>
      <div className="popup__content">
        <button className="popup__close" onClick={() => setPopupStatus(false)}>
          <AiOutlineClose />
        </button>
        <img src={popupImage} alt={popupTitle} />
        <div className="popup__skip">
          Auto Skip in <span>{popupTime} Sec</span>
        </div>
      </div>
    </div>
  );
};

export default Popup;
