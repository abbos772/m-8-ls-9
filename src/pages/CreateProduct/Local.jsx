import React, { memo } from "react";
import "./Create.css";
import { IoMdCloseCircle } from "react-icons/io";

const Local = ({ files, setFiles }) => {
  const handleDelete = (index) => {
    setFiles((prev) => prev.filter((_, inx) => inx !== index));
  };

  return (
    <div className="local">
      {files.map((imge, ind) => (
        <div className="local_img" key={ind}>
          <img alt="" src={URL.createObjectURL(imge)} width={200} />
          <IoMdCloseCircle onClick={() => handleDelete(ind)} />
        </div>
      ))}
    </div>
  );
};

export default memo(Local);
