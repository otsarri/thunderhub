import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { toast } from 'react-toastify';
import { useAccountState } from 'src/context/AccountContext';
import { useGetInOutQuery } from 'src/graphql/queries/__generated__/getInOut.generated';
import {
  CardWithTitle,
  SubTitle,
  Card,
  CardTitle,
  Sub4Title,
} from '../../../../components/generic/Styled';
import { ButtonRow } from '../forwardReport/Buttons';
import { getErrorContent } from '../../../../utils/error';
import { LoadingCard } from '../../../../components/loading/LoadingCard';
import { InvoicePie } from './InvoicePie';
import { FlowPie } from './FlowPie';
import { FlowReport } from './FlowReport';

export const ChannelRow = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;

  @media (max-width: 770px) {
    ${({ noWrap }: { noWrap?: boolean }) =>
      !noWrap &&
      css`
        flex-wrap: wrap;
      `};
  }
`;

export const PieRow = styled(Row)`
  justify-content: space-between;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-width: 200px;

  @media (max-width: 770px) {
    min-width: unset;
    width: 100%;
    padding-bottom: 16px;
  }
`;

const HalfCardWithTitle = styled(CardWithTitle)`
  width: 50%;
`;

export interface PeriodProps {
  period: number;
  amount: number;
  tokens: number;
}

const timeMap: { [key: string]: string } = {
  day: 'today',
  week: 'this week',
  month: 'this month',
  quarter_year: 'these three months',
  half_year: 'this half year',
  year: 'this year',
};

export const FlowBox = () => {
  const [isTime, setIsTime] = useState<string>('month');
  const [isType, setIsType] = useState<string>('amount');

  const { auth } = useAccountState();
  const { data, loading } = useGetInOutQuery({
    skip: !auth,
    variables: { time: isTime, auth },
    onError: error => toast.error(getErrorContent(error)),
  });

  const buttonProps = {
    isTime,
    isType,
    setIsTime,
    setIsType,
  };

  if (!data || loading) {
    return <LoadingCard title={'Invoices and Payments Report'} />;
  }

  const parsedData: PeriodProps[] = JSON.parse(
    data?.getInOut?.invoices || '[]'
  );
  const parsedData2: PeriodProps[] = JSON.parse(
    data?.getInOut?.payments || '[]'
  );

  if (parsedData.length <= 0 && parsedData2.length <= 0) {
    return (
      <CardWithTitle>
        <CardTitle>
          <SubTitle>Invoices and Payments Report</SubTitle>
        </CardTitle>
        <Card bottom={'10px'} mobileCardPadding={'8px 0'}>
          <p>{`Your node has not received or sent any payments ${timeMap[isTime]}.`}</p>
          <ButtonRow {...buttonProps} />
        </Card>
      </CardWithTitle>
    );
  }

  const reduce = (array: PeriodProps[]) =>
    array.reduce((p, c) => {
      return {
        tokens: p.tokens + c.tokens,
        period: 0,
        amount: p.amount + c.amount,
      };
    });

  const emptyArray = {
    tokens: 0,
    period: 0,
    amount: 0,
  };

  const totalInvoices = parsedData.length > 0 ? reduce(parsedData) : emptyArray;
  const totalPayments =
    parsedData2.length > 0 ? reduce(parsedData2) : emptyArray;

  const flowPie = [
    { x: 'Invoice', y: totalInvoices[isType] },
    { x: 'Payments', y: totalPayments[isType] },
  ];

  const invoicePie = [
    { x: 'Confirmed', y: data.getInOut.confirmedInvoices },
    { x: 'Unconfirmed', y: data.getInOut.unConfirmedInvoices },
  ];

  const props = {
    isTime,
    isType,
    parsedData,
    parsedData2,
  };
  const pieProps = { invoicePie };
  const flowProps = { flowPie, isType };

  return (
    <>
      <CardWithTitle>
        <CardTitle>
          <SubTitle>Invoices and Payments Report</SubTitle>
        </CardTitle>
        <Card bottom={'10px'} mobileCardPadding={'8px 0'}>
          <FlowReport {...props} />
          <ButtonRow {...buttonProps} />
        </Card>
      </CardWithTitle>
      <Row noWrap={true}>
        <HalfCardWithTitle>
          <CardTitle>
            <Sub4Title>Total</Sub4Title>
          </CardTitle>
          <Card mobileCardPadding={'8px'}>
            <FlowPie {...flowProps} />
          </Card>
        </HalfCardWithTitle>
        <div style={{ width: '20px' }} />
        <HalfCardWithTitle>
          <CardTitle>
            <Sub4Title>Invoices</Sub4Title>
          </CardTitle>
          <Card mobileCardPadding={'8px'}>
            <InvoicePie {...pieProps} />
          </Card>
        </HalfCardWithTitle>
      </Row>
    </>
  );
};
