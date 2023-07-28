export const averageScore = (arr) => {
  let averageScore = 0;
  arr.forEach((comments) => {
    averageScore += comments.points;
  });

  return averageScore / arr.length;
};
