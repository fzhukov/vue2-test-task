const usersDtoToView = (dataArray) => {
  const users = dataArray;
  const flatUsers = [];

  for (let i = 0; i < users.length; i += 1) {
    const { items } = users[i];
    delete users[i].items;
    flatUsers.push(users[i], ...items);
  }

  return flatUsers;
};

export default usersDtoToView;
