import usersDtoToView from '../mappers/UserMapper';

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
    }).then((response) => response.json())
      .then((json) => usersDtoToView(json));
  }

  // filterUsers(query) {
  //
  //   return fetch(`http://localhost:3000/users?q=${query}&_sort=name&_order=desc`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(response => response.json())
  //   .then(json => usersDtoToView(json));
  // }
}

export default UserPresenter;
