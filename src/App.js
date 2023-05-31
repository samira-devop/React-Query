import './App.css';
import { QueryClient, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

const QueryClient = new QueryClient({})
function App() {
  return (
    <QueryClientProvider client={QueryClient}>
  <ReactQueryDevtools initialIsOpen>{true}</ReactQueryDevtools>
  </QueryClientProvider>
  );
}

export default App;
