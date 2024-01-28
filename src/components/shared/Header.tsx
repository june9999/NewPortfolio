"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useUser } from "@auth0/nextjs-auth0/client";
import { usePathname } from "next/navigation";

const BsNavLink = (props: any) => {
  const { href, title, className = "" } = props;
  const pathName = usePathname();
  const activeLink = pathName === href;
  return (
    <Link
      href={href}
      className={`nav-link port-navbar-link ${className} ${
        activeLink ? "active" : ""
      }`}
    >
      {title}
    </Link>
  );
};

// const AdminMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <Dropdown
//       className="port-navbar-link port-dropdown-menu"
//       nav
//       isOpen={isOpen}
//       toggle={() => setIsOpen(!isOpen)}
//     >
//       <DropdownToggle className="port-dropdown-toggle" nav caret>
//         Admin
//       </DropdownToggle>
//       <DropdownMenu right>
//         <DropdownItem>
//           <BsNavLink
//             className="port-dropdown-item"
//             href="/portfolios/new"
//             title="Create Portfolio"
//           />
//         </DropdownItem>
//         <DropdownItem>
//           <BsNavLink
//             className="port-dropdown-item"
//             href="/blogs/editor"
//             title="Blog Editor"
//           />
//         </DropdownItem>
//         <DropdownItem>
//           <BsNavLink
//             className="port-dropdown-item"
//             href="/dashboard"
//             title="Dashboard"
//           />
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// };

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { user, isLoading, error } = useUser();
  const [width, setWidth] = useState<number>(0);

  if (typeof window !== "undefined") {
    window.onresize = () => {
      setWidth(window.innerWidth);
    };
  }

  return (
    <Navbar
      className={`w-full bg-black port-navbar port-default ${
        isOpen && width < 700 ? "bg-[#0f2453]" : ""
      } transition duration-1000`}
      dark
      expand="md"
    >
      <Link href="/" className="navbar-brand port-navbar-brand">
        Wenjun Xue
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/" title="Home" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/about" title="About" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/portfolios" title="Portfolios" />
          </NavItem>
          {/* <NavItem className="port-navbar-item">
            <BsNavLink href="/blogs" title="Blogs" />
          </NavItem> */}
          <NavItem className="port-navbar-item">
            <BsNavLink href="/cv" title="Cv" />
          </NavItem>
          {/* <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="Secret"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secretssr" title="SecretSSR"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadmin" title="Admin"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadminssr" title="AdminSSR"/>
            </NavItem> */}
        </Nav>
        <Nav navbar>
          {!isLoading && (
            <>
              {!user ? (
                <NavItem className="port-navbar-item">
                  <Link
                    className="nav-link port-navbar-link"
                    href="api/auth/login"
                  >
                    Login
                  </Link>
                </NavItem>
              ) : !isOpen ? (
                <span className="nav-link port-navbar-link">
                  Hi,{user.name}
                </span>
              ) : (
                ""
              )}
              {user && (
                <NavItem className="port-navbar-item">
                  <Link
                    className="nav-link port-navbar-link"
                    href="api/auth/login"
                  >
                    Logout
                  </Link>
                </NavItem>
              )}
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
