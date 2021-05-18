import { BsBell, BsPlusCircle, BsQuestionCircle } from 'react-icons/bs';

export const Header = (props) => (
  <header className="header">
    <nav className="">
      <div className="logo">
        <img src="/images/logo.png" alt="todo-logo" />
      </div>

      <div className="settings">
        <ul className="">
          <li className="">
            <BsPlusCircle />
          </li>
          <li className=" ">
            <BsQuestionCircle />
          </li>
          <li className="">
            <BsBell />
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
