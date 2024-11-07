import "./Modal.css";
import { IoMdClose } from "react-icons/io";

const Modal = ({ handlemodal }) => {
  return (
    <div className="box">
      <div className="box-header ">
        <h5>Title</h5>
        <IoMdClose onClick={handlemodal} />
      </div>
      <div className="box-main">
        <p>this is the title of your subject</p>
      </div>
      <div className="box-bottom">
        <button onClick={handlemodal}>close</button>
        <button onClick={handlemodal}>submit</button>
      </div>
    </div>
  );
};

export default Modal;
