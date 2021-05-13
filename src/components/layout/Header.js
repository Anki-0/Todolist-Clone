import { FaMoon } from 'react-icons/fa';

export const Header = (props) => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="todo-logo" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaMoon />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
