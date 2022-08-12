# E-IPFS Back-end for File upload/download

# requirements
- download nodejs [🔗](https://nodejs.org/en/download/ "🔗")
- install truffle
`npm install --g truffle`
- download ganache [🔗](https://trufflesuite.com/ganache/ " 🔗")
- add metamask extension [🔗](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn "🔗")


# prepare the project & start server

- `npm i`

- `npm run start`

> start ganache

> set host and port in truffle config file (dropbox-blockchain > truffle-config.js)


    networks: {
            development: {
                host: "127.0.0.1",
                port: 7545,
                network_id: "*"
            }
        }

don't forget to add your network

Metamask > Settings > Networks > Add a network

enter the rpc server connection and client id information

connect to your account :)
