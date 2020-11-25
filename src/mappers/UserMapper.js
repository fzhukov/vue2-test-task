export function UsersDtoToView(dataArray) {
  let flatUsers = [];

  for (let i = 0; i < dataArray.length; i++) {
    const { items } = dataArray[i];
    delete dataArray[i].items;
    flatUsers.push(dataArray[i], ...items);
  }
  
  return flatUsers;
}
