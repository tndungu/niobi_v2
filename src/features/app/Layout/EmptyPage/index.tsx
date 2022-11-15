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
      <div className={styles.emptyPageWrapper}>
        <div className={styles.emptyPageContent}>
          <Box mb={3}>
            {renderIcon &&
              renderIcon({ width: 54, color: THEMES.default.colors.primary })}
          </Box>
         <div>
          
         </div>
        </div>
      </div>
    </Layout>
  );
};

export default EmptyPage;
