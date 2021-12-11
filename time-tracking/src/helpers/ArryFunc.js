import data from "./data";

const daily = data.map((item) => {
  return {
    title: item.title,
    current: item.timeframes.daily.current,
    previous: item.timeframes.daily.previous,
  };
});

const weekly = data.map((item) => {
  return {
    title: item.title,
    current: item.timeframes.weekly.current,
    previous: item.timeframes.weekly.previous,
  };
});

const monthly = data.map((item) => {
  return {
    title: item.title,
    current: item.timeframes.monthly.current,
    previous: item.timeframes.monthly.previous,
  };
});

export default {
  daily: daily,
  weekly: weekly,
  monthly: monthly,
};
/* export default weekly */
