# 开发环境要求

## 系统要求
- Node.js 20.19.0
- npm 10.8.2

## 项目依赖
- Hardhat 2.12.0
- @nomicfoundation/hardhat-toolbox 2.0.0

## 区块链网络配置
- 本地开发网络: http://localhost:8545
- Chain ID: 31337

## 智能合约
- Solidity 版本: 0.8.19
- 合约编译命令: `npx hardhat compile`

## 测试
- 运行测试: `npx hardhat test`

## 环境变量
项目需要配置.env文件，包含以下变量:
- RPC_URL
- CHAIN_ID
- CONTRACT_ADDRESS
- PRIVATE_KEY