import { Quotes } from './../../config/constants';
import { defaultValues } from './context';
import { QuoteEvents } from '../../config/constants';

const funcWrapper = (quotes: string) => {
  return (state: typeof defaultValues, payload: any) => ({ ...state, [quotes]: { ...payload } });
};

const handlers = {
  [QuoteEvents.CHANGE_EURUSD]: funcWrapper(Quotes.EURUSD),
  [QuoteEvents.CHANGE_USDCHF]: funcWrapper(Quotes.USDCHF),
  [QuoteEvents.CHANGE_USDCAD]: funcWrapper(Quotes.USDCAD),
  [QuoteEvents.CHANGE_GOLD]: funcWrapper(Quotes.GOLD),
  [QuoteEvents.CHANGE_GBPUSD]: funcWrapper(Quotes.GBPUSD),
  [QuoteEvents.CHANGE_AUDUSD]: funcWrapper(Quotes.AUDUSD),
  [QuoteEvents.CHANGE_USDJPY]: funcWrapper(Quotes.USDJPY),
  [QuoteEvents.CHANGE_AUDCAD]: funcWrapper(Quotes.AUDCAD),
  [QuoteEvents.CHANGE_AUDHKD]: funcWrapper(Quotes.AUDHKD),
  [QuoteEvents.CHANGE_GBPCAD]: funcWrapper(Quotes.GBPCAD),
  [QuoteEvents.CHANGE_GBPCHF]: funcWrapper(Quotes.GBPCHF),
  [QuoteEvents.CHANGE_NZDDKK]: funcWrapper(Quotes.NZDDKK),
  [QuoteEvents.CHANGE_USDRUR]: funcWrapper(Quotes.USDRUR),
  DEFAULT: (state: any) => state,
};

export const RealTimeQuotesReducer = (state: typeof defaultValues, action: any) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};
