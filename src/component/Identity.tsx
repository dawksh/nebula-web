import React from 'react'
import { getContract, parseEther } from 'viem'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

function Identity({ atom, identity }: { atom: `0x${string}`, identity: `0x${string}` }) {
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

    const [chain, setChain] = React.useState(5);

    const { config, error } = usePrepareContractWrite({
        address: contract.address,
        abi: contract.abi,
        functionName: "sendCrossChain",
        args: [chain, contract.address, atom, identity],
        value: parseEther("0.00164745")
    })

    if (error) {
        console.log(error)
    }

    const { write, data, isLoading } = useContractWrite(config);

    const bridgeAtom = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        write?.();
    }

    return (
        <div>
            <div className='flex flex-row w-4/5  p-8 rounded-md justify-between' style={{ border: "2px solid white", padding: "2rem", margin: "2rem 4rem" }}>
                <div className='flex flex-col'>
                    <span>
                        UID: {atom}
                    </span>
                    <span>
                        Atom: {identity}
                    </span>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className="w-full mr-8 lg:max-w-sm mx-2">
                        <select className="p-2.5 text-gray-700 bg-white border rounded-md shadow-sm outline-none focus:border-indigo-600" style={{ color: 'gray', backgroundColor: 'white', borderRadius: "0.375rem", padding: "0.625rem", margin: "0rem 2rem" }}>
                            <option value="1">Mumbai</option>
                            <option value="2">Avalanche</option>
                        </select>
                    </div>
                    <button disabled={isLoading} className='px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-200 text-white' onClick={bridgeAtom}>{isLoading ? "..." : "Bridge"}</button>
                </div>
            </div>
        </div>
    )
}

export default Identity