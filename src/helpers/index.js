const isMobileRgx =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

const toMonthName = (monthNum) => {
  const date = new Date();
  date.setMonth(monthNum - 1);

  return date.toLocaleString("id-ID", {
    month: "long",
  });
};

export { isMobileRgx, toMonthName };
