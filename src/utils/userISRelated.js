export const userIsRelated = (projectUsers, userId) => {
  return projectUsers.filter((element) => {
    return element.User.id === userId;
  })[0];
};
