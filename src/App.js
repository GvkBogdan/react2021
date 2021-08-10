
import Users from "./Components/User/Users";

//     Взяти масив usersList.
//     Створити компонент,котрий характеризує юзера.
//     Створити компонент,котрий характеризує підоб'єкт юзера address. Використати в компоненті юзера.
// Створити компонент,котрий характеризує підоб'єкт адреси юзера geo. Використати в компоненті адреси.
// Вкладеність компонентів : App->Users->User->Address->Geo
// Вивести всі об'єкти з масиву

export default function App() {
  return (

    <div className={'users'}>
        <Users/>

    </div>
  );
}
// <User name={'Leanne Graham'} username={'Bret'} id={'1'} address={'Adress'} city={'Gwenborough'} street={'Kulas Light'}
//       suite={'Apt. 556'} zipcode={'92998-3874'} />