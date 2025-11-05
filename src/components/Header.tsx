import { Link, useLocation } from "react-router-dom";
import { Activity, Menu } from "lucide-react";
import { useState } from "react";
import logo from "../../public/img/logo-1.png";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
       <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity">
  <img src={logo} alt="Horizon Hospital Logo" className="h-12 w-auto" />
  <span className="sr-only">Horizon Hospital</span>
</Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/services") ? "text-primary" : "text-foreground"
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/consultants"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/consultants") ? "text-primary" : "text-foreground"
              }`}
            >
              Consultants
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/careers") ? "text-primary" : "text-foreground"
              }`}
            >
              Careers
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <Menu className="h-8 w-8" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border shadow-sm">
          <ul className="flex flex-col gap-4 px-4 py-4">
            <li>
              <Link
                to="/"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/services") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/consultants"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/consultants") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Consultants
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/contact") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/careers") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;