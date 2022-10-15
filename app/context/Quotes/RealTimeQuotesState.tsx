import React, { FC, useReducer } from 'react';

import { defaultValues, RealTimeQuotesContext } from './context';
import { RealTimeQuotesReducer } from './reducer';
import { IQuotesTick } from '../../types/data';

interface IRealTimeQuotesState {
  children: JSX.Element | JSX.Element[];
}

export const RealTimeQuotesState: FC<IRealTimeQuotesState> = ({ children }) => {
  const [state, dispatch] = useReducer(RealTimeQuotesReducer, defaultValues);

  const setData = (data: IQuotesTick) => {
    const quoteName = `CHANGE_${data.symbol}`;
    dispatch({ type: quoteName, payload: data });
  };

  return (
    <RealTimeQuotesContext.Provider
      value={{
        EURUSD: state.EURUSD,
        GBPUSD: state.GBPUSD,
        USDJPY: state.USDJPY,
        USDCHF: state.USDCHF,
        USDCAD: state.USDCAD,
        AUDUSD: state.AUDUSD,
        GOLD: state.GOLD,
        AUDCAD: state.AUDCAD,
        GBPCHF: state.GBPCHF,
        GBPCAD: state.GBPCAD,
        USDRUR: state.USDRUR,
        NZDDKK: state.NZDDKK,
        AUDHKD: state.AUDHKD,
        setData,
      }}
    >
      {children}
    </RealTimeQuotesContext.Provider>
  );
};
