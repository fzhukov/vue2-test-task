import { UsersDtoToView } from '../mappers/UserMapper';

class _UserPresenter {
  getUsers() {

    // Можно еще создать HTTPService и вынести туда fetch и определить методы get post и т.д, но мне уже лень :)
    return fetch('http://localhost:3000/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(json => UsersDtoToView(json));
  }

  // filterUsers(query) {
  //  
  //   return fetch(`http://localhost:3000/users?q=${query}&_sort=name&_order=desc`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(response => response.json())
  //   .then(json => UsersDtoToView(json));
  // }
}

export const UserPresenter = new _UserPresenter();
