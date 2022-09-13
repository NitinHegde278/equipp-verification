import GreenDone from "../../../assets/icons/greenDone.svg";
import OrangeFail from "../../../assets/icons/orangeFail.svg";

const InputStatus = ({ input }) => {
  return (
    <>
      {input === "pending" ? (
        "Pending"
      ) : input === "done" ? (
        <img src={GreenDone} alt="success" />
      ) : (
        <img src={OrangeFail} alt="fail" />
      )}
    </>
  );
};

export default InputStatus;
