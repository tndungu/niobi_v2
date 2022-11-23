import React from 'react';
import styled from '@emotion/styled';
import {
  UQuestionCircle,
  THEMES,
  Avatar,
  Box,
  Text,
  Flex,
} from '@team-monite/ui-kit-react';

import Menu from './Menu';
import MenuItem from './Menu/MenuItem';

import styles from './styles.module.scss';

const Sider = styled(Flex)`
  position: sticky;
  top: 0;
  height: 100vh;

  flex-direction: column;
  
  background: rgb(243, 243, 243);

  a {
    color: #000;
    text-decoration: none;
  }
`;

type DefaultLayoutProps = {
  children?: React.ReactNode;
};
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  //const rootStore = useRootStore();

  return (
    <Flex className={styles.layout}>
      <Sider className={styles.sider} width={240}>
        <Flex alignItems="center" ml={12}>
          <Avatar size={44}>B</Avatar>
          <Box ml={12}  className="companyTitle">
            <Text textSize="18px">Invision Business Systems</Text>
          </Box>
        </Flex>
        <Box flex={1}>
          <Menu />
        </Box>
        <Box>
          <MenuItem
            item={{
              url: '/logout',
              onClick: (e: React.BaseSyntheticEvent) => {
                e.stopPropagation();
                e.preventDefault();

                // rootStore.auth.logout();
              },
              label: 'Logout',
              renderIcon: () => (
                <UQuestionCircle
                  color="#025041"
                  width={20}
                  height={20}
                />
              ),
            }}
          />
        </Box>
      </Sider>
      <Box flex={1}>
        <div className={styles.content}>{children}</div>
      </Box>
    </Flex>
  );
};

export default DefaultLayout;
