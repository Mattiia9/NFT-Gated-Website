import { ThirdwebAuth } from "@thirdweb-dev/auth/next"

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
    privatekey: process.env.THIRDWEB_AUTH_PRIVATE_KEY || "",
    domain: "example.org",

});