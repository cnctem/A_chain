# A_chain 区块链项目

## 项目简介
这是一个基于Hardhat框架的区块链开发项目，包含智能合约开发、测试和部署功能。

## 环境要求
- Node.js 20.19.0
- npm 10.8.2

## 项目依赖
- Hardhat 2.12.0
- @nomicfoundation/hardhat-toolbox 2.0.0

## 安装步骤
1. 克隆项目
```bash
git clone <项目地址>
```
2. 安装依赖（全局）
```bash
npm install -g npm@10.8.2
```

## 使用说明
### 智能合约开发
- Solidity版本: 0.8.19
- 编译合约:
```bash
npx hardhat compile
```

### 测试
运行测试:
```bash
npx hardhat test
```

### 区块链网络配置
- 本地开发网络: http://localhost:8545
- Chain ID: 31337

## 环境变量
创建.env文件并配置以下变量:
```
RPC_URL=http://localhost:8545
CHAIN_ID=31337
CONTRACT_ADDRESS=0x0000000000000000000000000000000000000000
PRIVATE_KEY=your_private_key_here
```

