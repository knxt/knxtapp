# knxtapp
An off chain P2P lending/payment system using state channels

# Whiteboard 

- User opens a new channel on-chain with a channelId. The channelId is a random bytes32 value.
- Hubble can then join that channel by submitting a tx on-chain.
- Deposits to/from the Hub are made.
- Users then open threads with each other, locking up ETH in these threads until they're closed.
- QUESTION: A hub would be like a arcade, opening a channel and making the deposits would be like buying the arcade credits for use in games and opening/updating threads would be like paying the small fees at the arcade games for each round, except in the end you can refund wtv credits you have left for cash?

Users do wtv tf they want, sending as many txs they need.
Once users are done transacting, they close the thread and update the state of their balances.
QUESTION: How are channels updated state and blockchain wise?

When users want ETH back they close the channel and reclaim their ETH on chain.
NOTE: idk the potential of e-contracts but it's possible a contract won't even be needed, instead there can be off-chain hubs that lock up your ETH and can send you wtv you're owed once you're done with the hub.

QUESTION: How will state be stored (what info needs to be stored)? How is the final state transmitted on-chain? Could a hub simply sign and execute a transfer from one party to another (maybe taking fees in between)? Is there any need for an on-chain component with e-contracts?

IDEA: What if instead of having an onchain component, every Dapp deployed their own instance of a HubStore. Any account could join a channel with a Hub by depositing ETH in the hub. That ETH is now tied to your balance in the hub by a key-value store (address => uint256). Users then open threads with other users in the hub, any "value" sent back and forth in threads is cosigned by our Hub as well (which adds a nonce). Once they are done making all the payments in the thread, the end state of the thread is passed to the balance to make any changes. When a user is ready to reclaim their ETH, the Hub can sign it's own tx, sending wtv ETH it owes the user atm to em. This is all done on IPFS, no contract needed :)
