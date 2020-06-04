import moment from "moment";

export const formattedDate = timestamp => {
  return moment(timestamp * 1000).format("MMM DD, h:mm a");
};

export const formattedDateTime = timestamp => {
  return moment(timestamp * 1000).format("MMM DD, YYYY");
};

export const sleep = function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};
