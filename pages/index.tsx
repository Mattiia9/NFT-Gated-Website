import react from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useLogout } from "@thirdweb-dev/react";
import { getUser } from "../auth.config";
import checkBalance from "../util/checkBalance";
import styles from "../styles/Home.module.css";


const Home = () => {
  const {logout}= useLogout();

return (
  <div className={styles.container}>
    <h1 className={styles.h1}>Restricted Acces Page</h1>
    <p className={styles.explain}>Thanks for beeing an NFT Holder</p>

    <button className={styles.mainButton} onClick={logout}>Logout</button>

  </div>
)

}
export default Home


// Diese Funktion wird immer aufgrufen sobald jemand auf die Webseite geht
export async function getServerSideProps(context){
  const user = await getUser(context.req);

  if(!user){
    return{
      redirect:{
        destination: "../login",
        permanent: false,
      },
    }
  }


const PRIVATE_KEY = process.env.THIRDWEB_AUTH_PRIVATE_KEY;
if (!PRIVATE_KEY){
  throw new Error("You need to add an PRIVATE_KEY environment variable.")
}

// Einfügen des SDK
const sdk = ThirdwebSDK.fromPrivateKey(
  process.env.THIRDWEB_AUTH_PRIVATE_KEY,
  "ethereum"
)

// Überprüft ob der Benutzer das NFT besitzt
const hasNFT = await checkBalance(sdk, user.address);


// Wenn ein Benutzer das NFT nicht hat wird er zur Login seite weitergeleitet
console.log("user", user.address, "doesen't have an NFT! Redirecting...");

if(!hasNFT){
  return{
    redirect:{
      destination: "../login",
      permanent: false,
    },
  }
}

// Wenn sie Authentifieziert wurden und ein NFT besitzen werden sie auf diese mit dem exclusivve Content weiter geleitet

return{
  props:{},
};
}