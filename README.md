# Stardust

An all-in-one community management social app.

## Purpose

Stardust simplifies community management by offering a unified platform for creating, managing, and promoting events, as well as handling community and user profiles.

## Features

1. Event creation and management, including ticketing and check-in
2. Exclusive event access for NFT holders
3. Community and user profile pages
4. Login using SIWE (Web3 wallet signing) or social accounts (OAuth)

### Features Wish list (Integrated within the dApp)

1. **Dynamic QR Code Generation for Event Check-in**
   Allow event organizers to seamlessly check in attendees using dynamic QR codes generated within the app.
2. **Semi-Automated POAP Airdrop to Attendees**
   Automatically distribute Proof of Attendance Protocol (POAP) tokens to event attendees, streamlining rewards and recognition for participation.
3. **NFT Collection Creation and Minting**
   Enable users to create and mint their own non-fungible token (NFT) collections, simplifying the creation and sharing of unique digital assets.
4. **Token and NFT Sending**
   Allow users to send and receive tokens and NFTs, facilitating trade and exchange of digital assets.
5. **Tipping to User or Community Wallet**
   Enable users to tip other users or communities, making it easy to demonstrate appreciation and support.

## Technologies

### Web3-Related

1. Rainbowkit (Wallet connection for dApps)
   ↪️https://github.com/rainbow-me/rainbowkit

2. SIWE (User authentication via Web3 wallet signing)
   ↪️https://github.com/spruceid/siwe

3. Wagmi (React hooks for Ethereum)
   ↪️https://github.com/wagmi-dev/wagmi

4. Viem (Typescript interface for Ethereum)
   ↪️https://github.com/wagmi-dev/viem

5. Ethers v6 (Ethereum library)
   ↪️https://github.com/ethers-io/ethers.js

6. Alchemy (API to query the blockchain)
   ↪️https://www.alchemy.com/sdk

### Essentials

1. Nextjs (React framework)
   ↪️https://github.com/vercel/next.js

2. Authjs [Previously NextAuth] (User authentication for Next.js)
   ↪️https://github.com/nextauthjs/next-auth

3. Mantine (React components)
   ↪️https://github.com/mantinedev/mantine

4. SWR (React Hooks for Data Fetching)
   ↪️https://github.com/vercel/swr

5. Zustand (State management in React)
   ↪️https://github.com/pmndrs/zustand

6. Zod (Schema validation)
   ↪️https://github.com/colinhacks/zod

7. NextPWA (Enables PWA deployment)
   ↪️https://github.com/DuCanhGH/next-pwa

## Getting started

1. Clone the repository: `git clone https://github.com/0xJohnnie/stardust.git`
2. Install dependencies: `yarn install`
3. Copy the .env.example file to `.env` and edit the variables to match your local environment.
4. Run `yarn dev` to launch the application in your local development environment.

## Miscellaneous

🚧 Please note that the 'demo' API key for Alchemy SDK may be rate-limited based on traffic.

To avoid this, replace it with your own Alchemy SDK key by editing the `REACT_APP_ALCHEMY_API_KEY` environment variable in the `.env` file.

# Feedback

To reach out with feedback, you can:

1. DM me on Twitter : `https://twitter.com/0xJohnnie`
2. Email me : `github@0xJohnnie.dev`
3. Create an issue on GitHub to describe the problem or feature you want to address.
