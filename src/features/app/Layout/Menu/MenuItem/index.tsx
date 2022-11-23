import React, { useState } from 'react';
import styled from '@emotion/styled';
import { NavLink, NavLinkProps } from 'react-router-dom';

import { Text, UAngleDown, THEMES } from '@team-monite/ui-kit-react';
import { MenuItemType } from '../types';

type MenuItemProps = {
  item: MenuItemType;
};

interface MenuItemLInkProps extends NavLinkProps {
  hasChildren?: boolean;
}

const MenuItemLink = styled(NavLink)<MenuItemLInkProps>`
  display: flex;
  align-items: center;

  padding: 8px 12px;
  border-radius: 4px;

  &:hover {
    background: grey;
  }

  ${({ hasChildren, theme }) =>
    !hasChildren
      ? `
    &.active {
      background: grey;
    }
  `
      : ''}
`;

const MenuSubItemLink = styled(MenuItemLink)`
  padding-left: 40px;

  &.active {
    background: grey;
  }
`;

const LinkText = styled(Text)`
  flex: 1 1 auto;
  color:#000;
`;

const LinkIcon = styled.i`
  line-height: 0;
`;

const MenuItem = ({ item }: MenuItemProps) => {
  const { url, label, renderIcon, children, onClick } = item;
  const [submenuIsShown, setSubmenuIsShown] = useState<boolean>(false);

  const iconColor = "#025041";

  const handleOnClick = (e: React.BaseSyntheticEvent) => {
    if (onClick) {
      onClick(e);
    }

    if (children) setSubmenuIsShown((prev) => !prev);
  };

  return (
    <>
      <MenuItemLink
        to={url}
        onClick={handleOnClick}
        hasChildren={!!children?.length}
      >
        {({ isActive }) => {
          if (isActive) setSubmenuIsShown(true);

          return (
            <>
              {renderIcon && (
                <LinkIcon>
                  {renderIcon({ width: 20, color: iconColor })}
                </LinkIcon>
              )}{' '}
              <LinkText ml="8px">
                {label}
              </LinkText>
              {children && (
                <LinkIcon>
                  <UAngleDown width={24} />
                </LinkIcon>
              )}
            </>
          );
        }}
      </MenuItemLink>
      {children &&
        submenuIsShown &&
        Object.values(children).map((subItem) => (
          <MenuSubItemLink to={subItem.url} key={subItem.url}>
            {subItem.renderIcon && (
              <LinkIcon>
                {subItem.renderIcon({ width: 20, color: iconColor })}
              </LinkIcon>
            )}
            <LinkText ml="8px">
              {subItem.label}
            </LinkText>
          </MenuSubItemLink>
        ))}
    </>
  );
};

export default MenuItem;
