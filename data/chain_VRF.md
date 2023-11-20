Oraichain: the world’s first fully on-chain VRF is now live on Fantom network
=============================================================================

[![Oraichain Labs](https://miro.medium.com/v2/resize:fill:88:88/1*qkgRIQmh4OF4kLX_OKMiwQ.png)

](https://oraichain.medium.com/?source=post_page-----3e103b11e14d--------------------------------)[![Oraichain](https://miro.medium.com/v2/resize:fill:48:48/1*qkgRIQmh4OF4kLX_OKMiwQ.png)

](https://blog.orai.io/?source=post_page-----3e103b11e14d--------------------------------)

[Oraichain Labs](https://oraichain.medium.com/?source=post_page-----3e103b11e14d--------------------------------)

·

[Follow](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fsubscribe%2Fuser%2Fea89d3d98052&operation=register&redirect=https%3A%2F%2Fblog.orai.io%2Foraichain-the-worlds-first-fully-on-chain-vrf-is-now-live-on-fantom-network-3e103b11e14d&user=Oraichain+Labs&userId=ea89d3d98052&source=post_page-ea89d3d98052----3e103b11e14d---------------------post_header-----------)

Published in[

Oraichain

](https://blog.orai.io/?source=post_page-----3e103b11e14d--------------------------------)·3 min read·Mar 21, 2022

\--

Listen

Share

_After the establishment of VRF (verifiable random function) services on Avalanche, Oraichain is excited to announce its extended support for Dapps running on Fantom Opera mainnet. For the first time ever, the vibrant ecosystem of Fantom from Defi to NFT games can benefit from a fully decentralized and publicly verifiable random number generator._

**1\. The importance of fully on-chain VRF services for Fantom developers**
===========================================================================

Blockchain unpredictability is an essential component for Dapps to create fairness, stimulate competition and validate the rarity of certain assets. Since random values derived from traditional APIs cannot provide integrity guarantees, on-chain VRF solutions seem to be a good fit for transparency and tamper proof outcomes.

However, just like every other solution that relies on block hashes, random number generators utilizing on-chain data can be subject to miner attacks. For example, malicious actors can put a random request from a smart contract to a different block by rewriting the chain’s history, which would result in a different randomness output. Though this does not enable miners to determine the random value in advance, they can still get a reroll that may work to their advantage. Another abuse method is for VRF node operators to intentionally send compromised data or delay the randomness request, thereby creating opportunities for potential rerolls or abuses.

[Oraichain VRF 2.0](https://docs.orai.io/vrf/introduction) is developed to nullify these kinds of problems by fully generating random values and verifying group signature on-chain. This makes it virtually impossible for any entities including the oracle, Dapp developers or node operators to tamper with the randomness generation process. In action, Oraichain VRF decentralizes every shared part of the randomness generating process by automatically recovering the final group signature from a predetermined threshold of VRF executors and verifying the signature against the group public key. Transparency is then further enhanced by applying a hash function to generate the random value on-chain via smart contract.

**2\. Unlocking limitless possibilities with Oraichain’s VRF**
==============================================================

With Oraichain VRF, Fantom developers are equipped with the infrastructure needed to quickly develop highly scalable and cost-efficient DeFi, NFT, and gaming products augmented by publicly verifiable randomness. There are many ways Oraichain VRF can be leveraged within a Dapp to achieve fairness and transparency for end users:

*   Creating unpredictable in-game scenarios or match making
*   Assigning rare NFT attributes for in-game items and characters
*   Distributing limited-edition financial assets
*   Selecting random airdrop winners from DeFi LP pools
*   Randomly assigning duties and resources
*   Choosing participants from a DAO or network validators for important decision making
*   And yet many more possibilities.

**3\. Implementing Oraichain VRF 2.0 to Fantom-based Dapps with ease**

It is completely possible for Fantom developers, or even individuals with limited knowledge of smart contracts to easily generate or verify a VRF value with Oraichain. The reason is that Oraichain VRF is designed to [operate in a plug-and-play fashion](https://docs.orai.io/vrf/get-a-random-value-from-api), prioritizing ease of deployment without sacrificing security and quality. By the same token, [verification](https://scan.orai.io/randomness/orai15lv4hxxqew2jhfayfmad7y40zfr8zmgfulqdxj) is also simple because Oraichain VRF is built upon a layer-1 infrastructure i.e. Oraichain mainnet 2.0 with a [built-in block explorer](https://scan.orai.io/). Therefore, a query is all that is needed to verify a VRF output.

To further aid the adaptation of Oraichain VRF, the Oraichain team also has a dedicated support center to help with any technical or VRF related issues that may appear at [Telegram](https://t.me/oraitech), [Discord](https://discord.com/channels/943096297735487488/945980226414981140) and contact@orai.io.

Now that Oraichain VRF officially supports Dapps on Fantom Opera, the Oraichain team is excited to see the Fantom ecosystem thrive to the fullest with many more VRF use cases in the coming times.

About Oraichain
===============

Oraichain is the world’s first AI-powered oracle and ecosystem for blockchains. Beyond data oracles, Oraichain aims to become the first AI Layer 1 in the Blockchain sphere with a complete AI ecosystem, serving as a foundational layer for the creation of a new generation of smart contracts and Dapps. With AI as the cornerstone, Oraichain has developed many essential and innovative products and services including AI price feeds, fully on-chain VRF, Data Hub, AI Marketplace with 100+ AI APIs, AI-based NFT generation and NFT copyright protection, Royalty Protocol, AI-powered Yield Aggregator Platform, and Cosmwasm IDE.