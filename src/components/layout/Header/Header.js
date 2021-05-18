import { BsBell, BsPlus, BsQuestionCircle } from 'react-icons/bs';

export const Header = (props) => (
  <header className="header">
    <nav className="nav">
      <div className="Logo">
        <img src="/images/logo.png" alt="todo-logo" />
      </div>

      <div className="Settings">
        <ul className="Settings__lists">
          <li className="Settings__list">
            <BsPlus />
          </li>
          <li className="Settings__list">
            <BsQuestionCircle />
          </li>
          <li className="Settings__list">
            <BsBell />
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
