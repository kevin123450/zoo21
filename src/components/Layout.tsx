import { Link, Outlet } from "react-router-dom";
import "./../styles/Layout.css";

export const Layout = () => {
  return (
    <div className="layout">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/zoo">Zoo</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <main>
          <Outlet />
        </main>
      </section>
      <footer> FOOTER </footer>
    </div>
  );
};
