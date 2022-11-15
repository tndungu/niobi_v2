import React from 'react';
//import Layout from 'features/app/Layout';
import { THEMES, Link, Text, Box, Card } from '@team-monite/ui-kit-react';

import styles from '../styles.module.scss';
import Layout from '..';

type EmptyPageProps = {
  label?: string;
  renderIcon?: (props: any) => React.ReactNode;
  apiLink?: string;
};

const EmptyPage = ({ label, renderIcon, apiLink = '' }: EmptyPageProps) => {
  return (
    <Layout>
      <div className={styles.navWrapper}>
        <div className={styles.topNav}>
          <h1>Top Nav</h1>
        </div>
        <div className={styles.emptyPageWrapper}>
          <h3>body</h3>
        </div>
      </div>

    </Layout>
  );
};

export default EmptyPage;
