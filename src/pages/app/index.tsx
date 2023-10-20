import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/component/Navbar'
import { useEffect, useState } from 'react'
import { getContract, namehash } from 'viem'
import { useContractWrite, usePrepareContractWrite, useAccount } from 'wagmi'
import Identity from '@/component/Identity'
import { getAllBonds } from '@/utils/query'

const inter = Inter({ subsets: ['latin'] })

export default function Component() {

    const [ensName, setEnsName] = useState<string>('');
    const [bonds, setBonds] = useState<Array<any> | null>();

    const { isConnected, address } = useAccount()

    const fetchBonds = async () => {
        if (isConnected) {
            const bonds = await getAllBonds(address as string)
            setBonds(bonds)
        }
    }

    useEffect(() => {
        fetchBonds()
    }, [isConnected, address])

    const contract = getContract({
        address: "0x5c3EBd455a7844b9A701A0E4685F0C02a522E421",
        abi: [
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_registry",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_wormholeRelayer",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [],
                "name": "BondingFailed",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "InvalidBond",
                "type": "error"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "atom",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "element",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "atomUid",
                        "type": "bytes32"
                    }
                ],
                "name": "BondCreated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "atom",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "atomUid",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "originChain",
                        "type": "uint256"
                    }
                ],
                "name": "CrossChainBondCreated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "atom",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "atomUid",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "outboundChain",
                        "type": "uint256"
                    }
                ],
                "name": "CrossChainBondSent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "atom",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "element",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "atomUid",
                        "type": "bytes32"
                    }
                ],
                "name": "UnBond",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "_atom",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "createBond",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "crossChainBonds",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint16",
                        "name": "targetChain",
                        "type": "uint16"
                    }
                ],
                "name": "quoteCrossChain",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "cost",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes",
                        "name": "payload",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes[]",
                        "name": "",
                        "type": "bytes[]"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "sourceAddress",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint16",
                        "name": "sourceChain",
                        "type": "uint16"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "receiveWormholeMessages",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "relayer",
                "outputs": [
                    {
                        "internalType": "contract IWormholeRelayer",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint16",
                        "name": "targetChain",
                        "type": "uint16"
                    },
                    {
                        "internalType": "address",
                        "name": "targetAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "atom",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "atomUid",
                        "type": "bytes32"
                    }
                ],
                "name": "sendCrossChain",
                "outputs": [
                    {
                        "internalType": "uint64",
                        "name": "deliveryHash",
                        "type": "uint64"
                    }
                ],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "_atom",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "unbond",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]
    });

    const { config, error } = usePrepareContractWrite({
        address: contract.address,
        abi: contract.abi,
        functionName: "createBond",
        args: ["0xba76c56bd48625f65dfd5e1c6550fe99e858bc95cf68b976362f304f52746dba", namehash(ensName)]
    });

    const { write, isLoading } = useContractWrite(config);

    const getCredential = async (e: any) => {
        e.preventDefault();
        if (!error && write) {
            const txn = write();
            console.log(txn)
        } else {
            console.log(error)
        }
    };

    return (
        <div className={`${inter.className}`}>
            <Head>
                <title>ens identity | nebula protocol</title>
                <script async defer data-website-id="e9daa61b-40bb-416b-a6d6-a28ec06ee6b7" src="https://analytics.dakshk.xyz/umami.js"></script>
            </Head>
            <section className="w-full h-screen px-8 py-8 md:py-4 lg:py-8 xl:py-16 bg-black">
                <Navbar />
                <div className="flex justify-center flex-col align-middle">
                    <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none text-center my-4 text-gradient">
                        ENS Identity
                    </h1>
                    <p className={`max-w-[600px]  text-lg md:text-md flex text-zinc-100 mx-auto ${inter.className}`}>
                        get your ENS atom identity issued using your ENS name.
                    </p>
                    <div className='text-center flex flex-col'>
                        <form >
                            <input type="text" placeholder='enter your ens name' className='px-4 py-2 mt-8 mb-4 rounded-md text-black' onChange={(e) => setEnsName(e.target.value)} />
                            <br />
                            <button type="submit" disabled={isLoading} className='px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-200 text-white' onClick={getCredential}>{isLoading ? "..." : "Submit"}</button>
                        </form>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold sm:text-2xl xl:text-3xl/none my-8 mx-16 text-gradient">
                        Your identities
                    </h3>
                    {
                        (bonds && bonds.length > 0) ? (bonds.map((el, idx) => {
                            return (<div key={idx}>
                                <Identity atom={el.atom} identity={el.atomUid} />
                            </div>)
                            // @ts-ignore
                        })) : (<marquee>No Bonds Found! Get yours now!</marquee>)
                    }
                </div>
            </section>
        </div>
    )
}