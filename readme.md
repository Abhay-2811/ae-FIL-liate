* Description: *

The Filecoin ecosystem is all about the relationship between the SPs and clients. While Filecoin is flexible in terms of how choosy a client can be, it doesn't really have any protocol for SPs to choose their own clients and build a long-term relationship based on users' off-chain identity. To solve this ae-fil-liated enables Filecoin-Plus for high-end users without revealing their off-chain data by using ZK-Snark / Recurssive ZK-Snark Proofs.

In the case of Recursive ZK-Snark Proofs, the project uses Mina Protocol to validate the off-chain identity.


* How It's Made *

Business Owners have three steps to verify before proceeding to generate ZKproofs. Starting off with GitHub, we check whether the user has a GitHub account more than 180 days or older. Then we verify his/her identity using government IDs followed by business verification using the respective business registration in the country. The registration document is then matched with the name given on the ID and the company name received by government APIs. The business should be incorporated more than 2 months ago. Using the above information ZK-Proofs are generated using either circom circuits or recursive proofs by mina protocol. This proof is then relayed to the on-chain fvm actor along with ipfs cid that contains it's proof for SPs verification. 