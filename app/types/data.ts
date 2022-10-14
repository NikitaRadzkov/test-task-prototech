export interface IQuote {
  symbol: string;
  description: string;
  digits: number;
  trade: number;
  type: number;
}

export interface IQuotesTick {
  symbol: string;
  digits: number;
  ask: number;
  bid: number;
  change: number;
  lasttime: number;
  change24h: number;
}
