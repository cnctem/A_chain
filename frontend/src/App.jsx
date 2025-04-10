import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function App() {
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState('');
  const [assets, setAssets] = useState([]);
  const [newAsset, setNewAsset] = useState({ name: '', value: '' });
  const [transferData, setTransferData] = useState({ id: '', to: '' });

  useEffect(() => {
    async function init() {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          setAccount(await signer.getAddress());
          
          // 这里需要替换为你的合约地址
          const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
          const contractABI = []; // 这里需要添加合约ABI
          const assetContract = new ethers.Contract(contractAddress, contractABI, signer);
          setContract(assetContract);
          
          // 加载资产
          await loadAssets(assetContract);
        } catch (error) {
          console.error(error);
        }
      } else {
        alert('请安装MetaMask!');
      }
    }
    init();
  }, []);

  async function loadAssets(contract) {
    // 实现加载资产逻辑
  }

  async function handleCreateAsset() {
    // 实现创建资产逻辑
  }

  async function handleTransferAsset() {
    // 实现转移资产逻辑
  }

  return (
    <div className="App">
      <h1>资产管理</h1>
      <p>当前账户: {account}</p>
      
      <div>
        <h2>创建资产</h2>
        <input 
          type="text" 
          placeholder="资产名称" 
          value={newAsset.name}
          onChange={(e) => setNewAsset({...newAsset, name: e.target.value})}
        />
        <input 
          type="number" 
          placeholder="资产价值" 
          value={newAsset.value}
          onChange={(e) => setNewAsset({...newAsset, value: e.target.value})}
        />
        <button onClick={handleCreateAsset}>创建</button>
      </div>
      
      <div>
        <h2>转移资产</h2>
        <input 
          type="number" 
          placeholder="资产ID" 
          value={transferData.id}
          onChange={(e) => setTransferData({...transferData, id: e.target.value})}
        />
        <input 
          type="text" 
          placeholder="接收地址" 
          value={transferData.to}
          onChange={(e) => setTransferData({...transferData, to: e.target.value})}
        />
        <button onClick={handleTransferAsset}>转移</button>
      </div>
      
      <div>
        <h2>资产列表</h2>
        {/* 这里显示资产列表 */}
      </div>
    </div>
  );
}

export default App;