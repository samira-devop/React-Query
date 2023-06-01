import { QueryClient, QueryClientProvider } from "react-query";
  import { ReactQueryDevtools } from "react-query-devtools";
 
  const queryClient = new QueryClient({});
 
  const App = () => {
    return (
      <QueryClientProvider client={queryClient}>
       
 
        {/* The rest of your application */}
 
        <ReactQueryDevtools initialIsOpen={true} />
 
      </QueryClientProvider>
    );
  };
 
  export default App;