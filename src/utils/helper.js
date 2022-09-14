import { MONTH } from "./constants";

export const dateStringCreator = () => {
  const recentDate = new Date();
  let olderDate = new Date();
  olderDate.setMonth(olderDate.getMonth() - 6);

  return `${MONTH[olderDate.getMonth()].slice(0, 3)}
     ${String(olderDate.getFullYear()).slice(2, 4)} - ${MONTH[
    recentDate.getMonth()
  ].slice(0, 3)} ${String(recentDate.getFullYear()).slice(2, 4)}`;
};

export const verificationStatusProvider = (
  changeInput,
  type,
  panStatus,
  selfieStatus,
  bankStatementStatus,
  professionStatus,
  coPanGstStatus,
  dinStatus
) => {
  if (
    panStatus === "fail" ||
    selfieStatus === "fail" ||
    bankStatementStatus === "fail" ||
    professionStatus === "fail" ||
    coPanGstStatus === "fail" ||
    dinStatus === "fail"
  ) {
    changeInput("verificationStatus", "fail");
  } else if (
    type === "student" &&
    panStatus === "done" &&
    selfieStatus === "done" &&
    bankStatementStatus === "done"
  ) {
    changeInput("verificationStatus", "done");
  } else if (
    type === "workingProfessional" &&
    panStatus === "done" &&
    selfieStatus === "done" &&
    bankStatementStatus === "done" &&
    professionStatus === "done"
  ) {
    changeInput("verificationStatus", "done");
  } else if (
    type === "partnershipFirm" &&
    coPanGstStatus === "done" &&
    panStatus === "done" &&
    selfieStatus === "done" &&
    bankStatementStatus === "done"
  ) {
    changeInput("verificationStatus", "done");
  } else if (
    type === "pvtLlpPublic" &&
    coPanGstStatus === "done" &&
    dinStatus === "done" &&
    bankStatementStatus === "done"
  ) {
    changeInput("verificationStatus", "done");
  }
};
