import { RealTimeQuotesState } from './app/context/Quotes/RealTimeQuotesState';
import Navigation from './app/navigation/Navigation';

export default function App() {
  return (
    <RealTimeQuotesState>
      <Navigation />
    </RealTimeQuotesState>
  );
}
