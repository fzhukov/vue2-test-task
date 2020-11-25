# Тестовое задание для фирмы на Vue 2 + Vuex + Vuerouter 

## Project setup
```
yarn
```

### Launch local json-server for API
```
yarn json-server
```
JSON был сгенерирован на сайте [JSON Generator](https://www.json-generator.com/)
```
[
  '{{repeat(100)}}',
  {
    id: '{{objectId()}}',
    name: '{{firstName()}} {{surname()}}',
    
    items: [
      '{{repeat(1, 5)}}',
      {
        id: '{{objectId()}}',
        name: '{{firstName()}} {{surname()}}'
      }
    ]
  }
]
```
### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Task description

Фреймворк Vue.js состоит из трех основных библиотек (
  [Vue](https://vuejs.org/),
  [Vuex](https://vuex.vuejs.org/),
  [VueRouter](https://router.vuejs.org/)
).
## Задача:
Реализовать web приложение с использованием фреймворка Vue.js, которое совершает
запрос 100 элементов со следующей структурой из любого открытого api
```
{
  id,
  name,
  items: [
    {
      id,
      name
    },
    ...
  ]
  ...
}
```
В приложении должно быть реализовано 2 страницы: главная и история.

**Главная страница** должна состоять из двух колонок:
- В первой колонке отображается список всех элементов, полученных из api и поле текстового ввода. При вводе текста в поле фильтровать отображаемые элементы списка по следующему правилу: показывать только те элементы, у которых введенная пользователем строка входит в поле `name` или в `items.name` и сортировать список элементов по количеству вхождений строки в обратном порядке;
- У каждого элемента должна быть кнопка [+] при нажатии на которую элемент списка попадает во вторую колонку и пропадает из первой;
- Во второй колонке отображаются "выбранные" элементы списка. У каждого элемента должна быть кнопка [-] при нажатии на которую элемент списка возвращается в первую колонку и пропадает из второй соответственно;
- На главной странице также присутствуют три кнопки: [история][история добавлений][история удалений]. При нажатии на кнопку должен происходить переход на страницу истории с соответствующим параметром;
- UPD: При обсуждении задания было оговорено, что полученные данные преобразуем в плоский массив.

**Страница истории** состоит из списка событий перемещения элементов из колонки в колонку на главной странице. Событие должно показывать, какой элемент `{id, name}` был перемещен, какого рода было перемещение (добавление/удаление) и когда (любое отображение времени события)

## Замечания от автора
С CSS особо не заморачивался, решил не подключать ничего, написал простые стили.

Не нравится, что в `HomePage` в компонент `<UserList />` приходится по чепочке прокидывать две пропсы `btnTitle` и `status`