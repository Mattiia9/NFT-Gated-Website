import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider 
    desiredChainId={activeChain}
      authConfig={{
        authUrl: '/api/auth',
        domain: 'example.org',
        loginRedirect: '/'
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
