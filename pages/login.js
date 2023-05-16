import{
    useAddress,
    useMetamask,
    useUser,
    useLogin,
} from "@thirdweb-dev/react";

import styles from "../styles/Home.module.css";


export default function Login(){
    const address = useAddress();    
    const connectWithMetamask = useMetamask();
    
    //Login
    const {login} = useLogin();
    const {user} = useUser();


    return(
    <div className={styles.container}>
        {address ? (
            <>
            <p> Welcome, {address.slice(0, 6 )} ... </p>

            <button
                className={styles.mainButton}
                style={{width :256}}
                onClick={login()}
            >
                Login
            </button>
            </>
        ) : ( 
            <>
            <button className={styles.mainButton}
            style={{width:"fit-content", padding: 16, paddingLeft: 16}}
            onClick={() => connectWithMetamask()}
            >
            Connect Wallet
            </button>
            </>
        )}
  </div>

    );
};
