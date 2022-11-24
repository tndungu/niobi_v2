import React, { useCallback, useState } from 'react'
import { CounterpartsTable, CounterpartDetails } from '@team-monite/ui-widgets-react';
import { MoniteApp } from '@team-monite/sdk-api';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../PageHeader';
import { Button, Dropdown, DropdownMenuItem } from '@team-monite/ui-kit-react';
//import { CounterpartType } from '@team-monite/ui-widgets-react';
import { CounterpartType } from '@team-monite/sdk-api';

import styled from '@emotion/styled';

export const Counterparts = () => {
  
  const [counterpartId, setId] = useState<string | undefined>(undefined);

  const [counterpartType, setType] = useState<CounterpartType | undefined>(
    undefined
  );

  const closeModal = useCallback(() => {
    counterpartId && setId(undefined);
    counterpartType && setType(undefined);
  }, [counterpartId, counterpartType]);
  
  const monite = new MoniteApp({
    apiUrl: 'https://api.sandbox.monite.com/v1',  // Or 'https://api.monite.com/v1' to use Production
    entityId: '2973b4e2-4d26-4b63-b60e-39400a4f21ce',  // Entity whose data you want to access
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjp7ImNsaWVudF9pZCI6ImQ4NjJlYjg3LTc1ZDEtNDEyOS05MWI1LTVjNzk2ZmJjNjVhZiIsImNyZWF0ZWRfYXQiOiIyMDIyLTExLTIxVDA3OjU3OjM1LjE0MDk0NiJ9LCJleHAiOjE2NjkwMTkyNTV9.olw2i7B4_GYfaGYLRmalkQAL5-FNnFg7SphCtKGZe14'   // Access token (of an entity user or a partner)
  });
  
const PAYABLE_ID = 'id';

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get(PAYABLE_ID);

  const onRowClick = (id: string) => {
    searchParams.set(PAYABLE_ID, id);
    setSearchParams(searchParams);
  };

  // const closeModal = () => {
  //   searchParams.delete(PAYABLE_ID);
  //   setSearchParams(searchParams);
  // };

  monite.api.payable.getList()  // Returns Promise<Response>
    .then(res => {
      console.log(`Number of counterparts: ${res.data.length}`);
    });
  return (
    <>
      <PageHeader
        title="Counterparts"
        extra={
          <Dropdown button={<Button color='#025041'>Create New</Button>}>
            <DropdownMenuItem
               onClick={() => setType(CounterpartType.ORGANIZATION)} 
            >
              Organization
            </DropdownMenuItem>
            <DropdownMenuItem
               onClick={() => setType(CounterpartType.INDIVIDUAL)}
            >
              Individual
            </DropdownMenuItem>
          </Dropdown>
        }
      />
      <CounterpartsTable onRowClick={onRowClick} />
      {/* {id && <CounterpartDetails id={id} onClose={closeModal} />} */}
      {(counterpartId || counterpartType) && (
        <CounterpartDetails
          id={counterpartId}
          type={counterpartType}
          onClose={closeModal}
          onDelete={closeModal}
        />
      )}
    </>
  )
}
