import React, { useEffect, useState } from "react"
import { useMoralis } from "react-moralis"

function ManualHeader() {
    const [loading,setLoading] = useState(true)
    const { enableWeb3, account,isWeb3Enabled,isWeb3EnableLoading,Moralis,deactivateWeb3 } = useMoralis()

        useEffect(() => {
            setLoading(true)
            if (
                !isWeb3Enabled &&
                typeof window !== "undefined" &&
                window.localStorage.getItem("connected")
            ) {
                enableWeb3()
            }
            setLoading(false)
        }, [isWeb3Enabled])

        useEffect(() => {
            Moralis.onAccountChanged((newAccount) => {
                console.log(`Account changed to ${newAccount}`)
                if (newAccount == null) {
                    window.localStorage.removeItem("connected")
                    deactivateWeb3()
                    console.log("Null Account found")
                }
            })
        }, [])

    const connect = async () => {
        const ret = await enableWeb3()
        if (typeof ret !== "undefined") {
            if (typeof window !== "undefined") {
                window.localStorage.setItem("connected", "injected")
            }
        }
    }


    if(!loading) {
    return (
        <div>
            {account ? (
                <div className="ml-auto py-2 px-4">
                    Connected to {account.slice(0, 6)}...
                    {account.slice(account.length - 4)}
                </div>
            ) : (
                <button onClick={connect} disabled={isWeb3EnableLoading}>
                    Connect
                </button>
            )}
        </div>
 )
    }
   
}

export default ManualHeader
