// import Web3 from 'web3';
// import {contractABI} from './contractABI.json';
// import {tokenABI} from './tokenABI.json';

const contractABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "loanId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "loanAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "interestAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "endLoanTimeStamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "enum LoanNFT.Status",
        "name": "status",
        "type": "uint8"
      }
    ],
    "name": "LoanDataOnAccept",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "loanId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "enum LoanNFT.Status",
        "name": "status",
        "type": "uint8"
      }
    ],
    "name": "LoanDataOnCancel",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "loanId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "loanAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "interestAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalTime",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "extendTimePeriod",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "enum LoanNFT.Status",
        "name": "status",
        "type": "uint8"
      }
    ],
    "name": "LoanDataOnCreate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "loanId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "enum LoanNFT.Status",
        "name": "status",
        "type": "uint8"
      }
    ],
    "name": "LoanDataOnEnd",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "loanId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "endLoanTimeStamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "enum LoanNFT.Status",
        "name": "status",
        "type": "uint8"
      }
    ],
    "name": "LoanDataOnExtend",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "allLoanRequests",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "loanID",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "lender",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "smartContractAddressOfNFT",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenIdNFT",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "loanAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "interestAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalTimePeriod",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxTimePeriod",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endLoanTimeStamp",
        "type": "uint256"
      },
      {
        "internalType": "enum LoanNFT.Status",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "creatorWallet",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "manager",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalLoan",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "onERC721Received",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pauseLoans",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unPauseLoans",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "smartContractAddressOfNFT",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenIdNFT",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "loanAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "interestAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalTimePeriod",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxTimePeriod",
        "type": "uint256"
      }
    ],
    "name": "createLoan",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "loanID",
        "type": "uint256"
      }
    ],
    "name": "acceptLoan",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "loanID",
        "type": "uint256"
      }
    ],
    "name": "extendLoan",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "loanID",
        "type": "uint256"
      }
    ],
    "name": "endLoan",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "loanID",
        "type": "uint256"
      }
    ],
    "name": "cancelLoan",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const tokenABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];


const REQUEST_STATUS = ["Pending", "Active", "Cancelled", "Ended", "Defaulted"];

const LENDING_CONTRACT_ADDRESS = '0x67490a4814a5C127B0522b40d2DaEdF6104BdeA6';
init = async () => {
    if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    console.log("Connected");
  } else {
    alert("Metamask not found");
  }
  };

// const erc721ContractAddress = "0x4e38b962783233d82fc8463C0198B240A8a04785";
// const userAddress = "0xe18B1dFb94BB3CEC3B47663F997D824D9cD0f4D2";
// const tokenIdNFT = 17;
const nftContractAddress = document.getElementById("nftContractAddress");
const tokenId = document.getElementById("nftTokenId")



approveNFT = async () => {
   const web3 = new Web3(window.ethereum);
   const accounts = await web3.eth.getAccounts();
   console.log(accounts[0]);

   const instance = new web3.eth.Contract(tokenABI,nftContractAddress.value,
    {from: accounts[0]});

    await instance.methods.approve(LENDING_CONTRACT_ADDRESS, 
      tokenId.value
      )
      .send({
      from: accounts[0],
      })
      .once("receipt", (receipt) => {
        console.log(receipt);
      })
      .catch((err) => {
        console.log(err);
      });
   
};




// const loanAmount = '2';
// const interestAmount = '3';
// const totalTimePeriod = 10;
// const maxTimePeriod = 1;

const nftAddress = document.getElementById("nftContractAddress1");
const nftId = document.getElementById("nftTokenId1");
const loanAmount = document.getElementById("loanAmount");
const interestAmount = document.getElementById("interestAmount");
const totalTimePeriod = document.getElementById("timePeriod");
const maxTimePeriod = document.getElementById("maxTimePeriod");


createLoan = async () => {
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.getAccounts();
  const instance = new web3.eth.Contract(contractABI, LENDING_CONTRACT_ADDRESS, {from: accounts[0]});
  
  await instance.methods.createLoan(nftAddress.value,
    nftId.value,
    loanAmount.value.toString(),
    interestAmount.value.toString(),
    totalTimePeriod.value * 86400,
    maxTimePeriod.value
  ).send({
        from: accounts[0],
      })
      .once("receipt", (receipt) => {
        console.log(receipt);
      })
      .catch((err) => {
        console.log(err);
      });
};

const loanID = document.getElementById("loanId");
const ethLoanAmount = document.getElementById("loanAmount1");
const ethInterestAmount = document.getElementById("interestAmount1");

acceptLoan = async () =>{
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.getAccounts();
  
  const instance = new web3.eth.Contract(contractABI, LENDING_CONTRACT_ADDRESS, 
  {from: accounts[0]});
  const sum = ethLoanAmount.value.toString();

  await instance.methods.acceptLoan(loanID.value).send({
        value: sum,
        from: accounts[0],
      })
      .once("receipt", (receipt) => {
        console.log(receipt);
      })
      .catch((err) => {
        console.log(err);
      });
}

const extendLoanId = document.getElementById("extendLoanId");

extendLoan = async () => {
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.getAccounts();
  const instance = new web3.eth.Contract(contractABI, LENDING_CONTRACT_ADDRESS, {from: accounts[0]});

  await instance.methods.extendLoan(extendLoanId.value).send({
    from: accounts[0],
  })
  .once("receipt", (receipt) => {
    console.log(receipt);
  })
  .catch((err) => {
    console.log(err);
  });
}

const cancelLoanId = document.getElementById("cancelLoanId");

cancelLoan = async () => {
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.getAccounts();
  const instance = new web3.eth.Contract(contractABI, LENDING_CONTRACT_ADDRESS, {from: accounts[0]});
  await instance.methods.cancelLoan(cancelLoanId.value).send({
    from: accounts[0],
  })
  .once("receipt", (receipt) => {
    console.log(receipt);
  })
  .catch((err) => {
    console.log(err);
  });
}

const loanID1 = document.getElementById("loanId2");
const ethLoanAmount1 = document.getElementById("loanAmount2");
const ethInterestAmount1 = document.getElementById("interestAmount2");



endLoan = async () => {
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.getAccounts();
  const instance = new web3.eth.Contract(contractABI, LENDING_CONTRACT_ADDRESS, {from: accounts[0]});
  const sum = ethLoanAmount1.value*1 + ethInterestAmount1.value*1;
  console.log(sum);
  await instance.methods.endLoan(loanID1.value).send({
    value: sum.toString(),
    from: accounts[0],
  })
  .once("receipt", (receipt) => {
    console.log(receipt);
  })
  .catch((err) => {
    console.log(err);
  });

}

const approves = document.getElementById("approveBtn");
approves.onclick = approveNFT;

const create = document.getElementById("createBtn");
create.onclick = createLoan;

const accept = document.getElementById("acceptBtn");
accept.onclick = acceptLoan;

const extend = document.getElementById("extendBtn")
extend.onclick = extendLoan;

const cancel = document.getElementById("cancelBtn")
cancel.onclick = cancelLoan;

const end = document.getElementById("endBtn")
end.onclick = endLoan;

init();