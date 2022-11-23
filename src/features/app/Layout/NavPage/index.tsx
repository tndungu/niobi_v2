import React from 'react';
//import Layout from 'features/app/Layout';
import { THEMES, Link, Text, Box, Card } from '@team-monite/ui-kit-react';

import styles from '../styles.module.scss';
import Layout from '..';
import { Entity } from '../entity/Entity';
import { Compliance } from '../compliance/Compliance';
import { Outlet } from 'react-router-dom';

type EmptyPageProps = {
  label?: string;
  renderIcon?: (props: any) => React.ReactNode;
  apiLink?: string;
};

const NavPage = ({ label, renderIcon, apiLink = '' }: EmptyPageProps) => {
  return (
    <Layout>
        {/* <div className={styles.topNav}>
        </div> */}
        <Outlet />
    </Layout>
  );
};

export default NavPage;
