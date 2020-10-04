import React, { useState, useEffect } from "react";
import { Styled } from "./NavBar.styles";
import { withRouter } from "react-router-dom";
import useMedia from "use-media";
import { MenuIcon } from "../../icons/MenuIcon";
import { CloseIcon } from "../../icons/CloseIcon";

interface Route {
  path: string;
  title: string;
}

const routes: Route[] = [
  {
    path: "/home",
    title: "Home",
  },
  {
    path: "/watiswat",
    title: "Wat is wat?",
  },
  { path: "/calculatoren", title: "Calculatoren" },
  { path: "/calorieentabel", title: "Calorieentabel" },
  { path: "/login", title: "Login" },
];

const NavBar = ({ history }: any) => {
  const isSmall = useMedia({ maxWidth: "800px" });
  const [expanded, setExpanded] = useState(false);
  const [selectedNavbarItem, setSelectedNavbarItem] = useState<Route>(
    routes[0]
  );

  const goToSelectedPage = () => {
    history.push(selectedNavbarItem.path);
  };

  useEffect(() => {
    setExpanded(false);
    goToSelectedPage();
  }, [selectedNavbarItem]);

  const buttons = routes.map((route) => (
    <Styled.NavButton
      key={route.path}
      onClick={() => {
        setSelectedNavbarItem(route);
      }}
      selected={route.path === selectedNavbarItem.path}
    >
      {route.title}
    </Styled.NavButton>
  ));

  return (
    <Styled.Root>
      <Styled.Filler></Styled.Filler>
      {isSmall && (
        <Styled.Burger onClick={() => setExpanded((old) => !old)}>
          {expanded && <CloseIcon width="18pt" height="18pt" />}
          {!expanded && <MenuIcon width="22pt" height="22pt" />}
        </Styled.Burger>
      )}
      {isSmall && expanded && buttons}
      {!isSmall && buttons}
      <Styled.Filler></Styled.Filler>
    </Styled.Root>
  );
};

export default withRouter(NavBar);
