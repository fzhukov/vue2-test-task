/* eslint-disable no-nested-ternary */
class UserPresenter {
  static getUsers() {
    /**
     * Можно еще создать HTTPService и вынести туда fetch и
     * определить методы get post и т.д, но мне уже лень :)
     */
    return fetch('http://localhost:3000/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  static filteredUsers(users, queryName) {
    const queryRegExp = new RegExp(queryName, 'gi');

    const queryEntitiesArray = users.map((user) => {
      const { items, name } = user;
      const regExpResult = name.match(queryRegExp) || [];
      let count = 0;
      let newName = name;

      if (regExpResult.length) {
        newName = name.replace(queryRegExp, (match) => (`<span class="hl-subsrt">${match}</span>`));
      }
      count = regExpResult.length;

      const newItems = items.map((item) => {
        const itemRegExpResult = item.name.match(queryRegExp) || [];
        let newItemName = item.name;

        if (itemRegExpResult.length) {
          newItemName = item.name.replace(queryRegExp, (match) => (`<span class="hl-subsrt">${match}</span>`));
        }
        count += itemRegExpResult.length;

        return {
          ...item,
          count: itemRegExpResult.length,
          name: newItemName,
        };
      });

      return {
        ...user,
        name: newName,
        items: newItems,
        count,
      };
    });
    const filteredArray = queryEntitiesArray
      .sort(
        (a, b) => (
          (a.count < b.count) ? 1
            : (a.count === b.count)
              ? ((a.name > b.name)
                ? 1
                : -1)
              : -1
        ),
      ).filter((user) => user.count > 0);

    return filteredArray;
  }
}

export default UserPresenter;
