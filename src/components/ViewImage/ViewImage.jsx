import { useEffect, useState } from "react";

export const ViewImage = ({ img, title }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div className="position-relative">
      <img
        src={img}
        alt={title}
        onClick={handleClick}
        className="content__img"
      />
      {open && (
        <div className="bg-black bg-opacity-75 z-3 position-fixed top-0 start-0 w-100 h-100 overflow-y-scroll section__gap px-5">
          <img
            src={img}
            alt=""
            className=" w-100 object-fit-contain"
            style={{ minHeight: "100vh" }}
          />
          <button
            className="position-fixed bg-white text-lg p-0 m-0 d-flex align-items-center justify-content-center rounded-circle cursor-pointer"
            style={{
              width: "30px",
              height: "30px",
              right: "30px",
              top: "10px",
            }}
            onClick={handleClick}
          >
            <i
              className="fa fa-close p-0"
              aria-hidden="true"
              style={{ fontSize: "20px" }}
            ></i>
          </button>
        </div>
      )}
    </div>
  );
};
