import { createContext } from 'react';
import { IQuotesTick } from '../../types/data';

const defaultQuote = {
  symbol: '',
  digits: 0,
  ask: 0,
  bid: 0,
  change: 0,
  lasttime: 0,
  change24h: 0,
};

export const defaultValues = {
  EURUSD: defaultQuote,
  GBPUSD: defaultQuote,
  USDJPY: defaultQuote,
  USDCHF: defaultQuote,
  USDCAD: defaultQuote,
  AUDUSD: defaultQuote,
  GOLD: defaultQuote,
  AUDCAD: defaultQuote,
  GBPCHF: defaultQuote,
  GBPCAD: defaultQuote,
  USDRUR: defaultQuote,
  NZDDKK: defaultQuote,
  AUDHKD: defaultQuote,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  setData: (data: IQuotesTick) => {},
};

export const RealTimeQuotesContext = createContext(defaultValues);
