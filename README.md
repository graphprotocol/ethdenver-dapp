## Getting started

### Local Development

#### Install tools and start Ganache

Install dependencies:

```sh
npm install -g ganache-cli truffle @graphprotocol/graph-cli
```

Start Ganache:

```sh
ganache-cli
```

#### Start a local Graph Node

This assumes you already have Ganache running and have performed
the above migration steps.

1. Clone `https://github.com/graphprotocol/graph-node/`
2. Enter the Graph Node's Docker directory:
   ```sh
   cd graph-node/docker
   ```
3. Start a local Graph Node that will connect to Ganache on your host:
   ```sh
   docker-compose up
   ```

#### Deploy the subgraph to the local Graph Node

1. Ceate a new example subgraph with:
   ```sh
   graph init --from-example <GITHUB_USERNAME>/example-subgraph
   ```
2. Follow the instructions for installing dependencies and running
   the code generation (typically: `yarn && yarn codegen`).
3. Deploy the example contract to Ganache (in another terminal):

   ```sh
   truffle compile
   truffle migrate
   ```

   This willl also create a couple of example transactions.

   **Important: Remember the address of the `GravityRegistry` contract
   printed by the migrations. You will need this later.**

4. Replace the contract address with the one from Ganache (this is
   the one that you remembered or copied earlier):
   ```sh
   sed -i -e \
     's/0x2E645469f354BB4F5c8a05B3b30A929361cf77eC/<GANACHE_CONTRACT_ADDRESS>/g' \
     subgraph.yaml
   ```
    Check out the [docs](https://www.gnu.org/software/sed/manual/sed.html) if you don't know what sed does. Basically, it replaces the hardcoded contract address `0x2E645469f354BB4F5c8a05B3b30A929361cf77eC` with the address of your locally-deployed `GravityRegistry` contract.

5. Deploy the subgraph to your local Graph Node:
   ```sh
   graph create --node http://localhost:8020/ <GITHUB_USERNAME>/example-subgraph
   graph deploy --node http://localhost:8020/ --ipfs http://localhost:5001/ <GITHUB_USERNAME>/example-subgraph
   ```
6. You can now go to `http://localhost:8000/subgraphs/name/<GITHUB_USERNAME>/example-subgraph`
   to query our subgraph. Try the following query, for example:
   ```graphql
   {
     gravatars {
       id
       owner
       displayName
       imageUrl
     }
   }
   ```

#### Connect this dApp to the subgraph

1. Write the the GraphQL endpoint of our subgraph to `.env` in this directory:
   ```sh
   echo "REACT_APP_GRAPHQL_ENDPOINT=http://localhost:8000/subgraphs/name/<GITHUB_USERNAME>/example-subgraph" > .env
   ```
2. Then, start this app:
   ```sh
   yarn install
   yarn start
   ```

### Hosted Service

#### Create and deploy the subgraph

1. Sign up on https://thegraph.com/explorer/
2. Create a new subgraph on https://thegraph.com/dashboard/
3. Install Graph CLI with `npm install -g @graphprotocol/graph-cli`
4. Run `graph init <GITHUB_USERNAME>/<SUBGRAPH_NAME>` to create a subgraph template locally.
5. Follow the instructions `graph init` prints for you to deploy the subgraph to the Hosted Service.

#### Connect this dApp to the subgraph

1. Go to `https://thegraph.com/explorer/subgraph/<GITHUB_USERNAME>/<SUBGRAPH_NAME>/`
2. Copy the GraphQL HTTP endpoint (e.g. `https://api.thegraph.com/subgraphs/name/github-username/subgraph-name`)
3. Write it to `.env` in this directory:
   ```sh
   echo "REACT_APP_GRAPHQL_ENDPOINT=https://api.thegraph.com/subgraphs/name/github-username/subgraph-name" > .env
   ```
4. Start this app:
   ```sh
   yarn install
   yarn start
   ```
