 <h1>Blockchain Gunstore Project</h1>

    <h2>Overview</h2>
    <p>The Blockchain Gunstore is a decentralized application (dApp) built on the Ethereum blockchain, leveraging smart contracts to facilitate secure, transparent, and verifiable transactions of firearm sales. This project utilizes technologies such as Solidity, Hardhat, React, and Node.js to create a comprehensive ecosystem for firearm trading with enhanced security and user privacy.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>Smart Contract Integration</strong>: Implements Ethereum smart contracts for handling transactions, ensuring transparency and immutability.</li>
        <li><strong>Decentralized Transactions</strong>: Allows users to buy and sell firearms directly, without the need for intermediaries, using blockchain technology.</li>
        <li><strong>React Frontend</strong>: A dynamic and responsive user interface built with React, providing a seamless user experience for interacting with the blockchain.</li>
        <li><strong>Secure Backend</strong>: A Node.js server with a MongoDB database to handle application logic and non-blockchain data storage securely.</li>
    </ul>

    <h2>Technology Stack</h2>
    <ul>
        <li><strong>Ethereum Blockchain</strong>: Smart contracts are deployed on the Ethereum network, making use of the Sepolia testnet for development and testing.</li>
        <li><strong>Solidity</strong>: Programming language for writing smart contracts.</li>
        <li><strong>Hardhat</strong>: Ethereum development environment for deployment, testing, and troubleshooting of smart contracts.</li>
        <li><strong>React</strong>: Frontend library used for building the user interface.</li>
        <li><strong>Node.js</strong>: JavaScript runtime used to build the backend server.</li>
        <li><strong>MongoDB</strong>: NoSQL database used for storing user and transaction data off-chain.</li>
        <li><strong>Web3.js</strong>: Library for interacting with Ethereum blockchain from the web client.</li>
    </ul>

    <h2>Smart Contract</h2>
    <p>The smart contract <code>Transactions.sol</code> handles the core functionality:</p>
    <ul>
        <li><strong>Add Transactions</strong>: Securely add transaction records to the blockchain.</li>
        <li><strong>Retrieve Transactions</strong>: Allow users to query their transaction history stored on the blockchain.</li>
    </ul>

    <h2>Setup and Installation</h2>
    <h3>Prerequisites</h3>
    <ul>
        <li>Node.js and npm</li>
        <li>Git</li>
        <li>MetaMask or any Ethereum wallet</li>
    </ul>

    <h3>Running the Project</h3>
    <ol>
        <li><strong>Clone the Repository</strong><pre><code>git clone https://github.com/shahafmeron7/Blockchain-Gunstore.git
cd Blockchain-Gunstore</code></pre></li>
        <li><strong>Install Dependencies</strong><pre><code>npm install</code></pre></li>
        <li><strong>Configure Environment Variables</strong><pre><code>Create a .env file in the server directory and add the following variables:

DB_URI=mongodb://localhost:27017/gunstore
SEPOLIA_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
SEPOLIA_PRIVATE_KEY=0xYOUR_SEPOLIA_PRIVATE_KEY</code></pre></li>
        <li><strong>Run the Backend Server</strong><pre><code>cd server
node app.js</code></pre></li>
        <li><strong>Start the React Application</strong><pre><code>cd client
npm start</code></pre></li>
        <li><strong>Access the Application</strong><p>The web application will be available at <a href="http://localhost:3000">http://localhost:3000</a>.</p></li>
    </ol>

    <h2>Testing</h2>
    <p>To run the smart contract tests:</p>
    <pre><code>npx hardhat test</code></pre>

    <h2>Deployment</h2>
    <p>To deploy the smart contracts on the Sepolia network:</p>
    <pre><code>npx hardhat run --network sepolia scripts/deploy.js</code></pre>

    <h2>Contributing</h2>
    <p>Contributions are welcome! Please refer to our contributing guidelines for further information.</p>

    <h2>License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE.md</a> file for details.</p>
