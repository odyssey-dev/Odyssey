export function SaveLastUpdatedDate() {

  const date = new Date();
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth();
  const dateDay = date.getDate();
  const dateHour =  date.getHours();
  const dateMinutes =  date.getMinutes();
  const dateSeconds =  date.getSeconds();

  const lastUpdatedDate = [dateSeconds,dateMinutes,dateHour,dateDay,dateMonth,dateYear];
  console.log("lastUpdated:", lastUpdatedDate.toString);
  localStorage.setItem('lastUpdated', lastUpdatedDate);

}

export function getDate() {

  const date = new Date();
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth();
  const dateDay = date.getDate();
  const dateHour =  date.getHours();
  const dateMinutes =  date.getMinutes();
  const dateSeconds =  date.getSeconds();

  const currentDate = [dateSeconds,dateMinutes,dateHour,dateDay,dateMonth,dateYear];

  return currentDate;

}