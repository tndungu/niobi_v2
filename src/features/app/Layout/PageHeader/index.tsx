import React from 'react';
import { Text } from '@team-monite/ui-kit-react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
`;

const TextWrapper = styled(Text)`
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
`;

type PageHeaderProps = {
  title: string;
  extra?: React.ReactNode;
};
const PageHeader = ({ title, extra }: PageHeaderProps) => {
  return (
    <Wrapper>
      <div>
        <TextWrapper as="h1">
          {title}
        </TextWrapper>
      </div>
      {extra ? <aside>{extra}</aside> : null}
    </Wrapper>
  );
};

export default PageHeader;
