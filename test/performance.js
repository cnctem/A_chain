const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("性能测试", function () {
  let contract;
  let owner, addr1, addr2;
  
  before(async function() {
    [owner, addr1, addr2] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("AssetManagement");
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("测试并发处理能力", async function() {
    const txCount = 50;
    const promises = [];
    
    for (let i = 0; i < txCount; i++) {
      promises.push(contract.connect(addr1).createAsset(`asset_${i}`, 100));
    }
    
    const startTime = Date.now();
    await Promise.all(promises);
    const endTime = Date.now();
    
    console.log(`并发处理测试结果:`);
    console.log(`- 并发交易数: ${txCount}`);
    console.log(`- 总耗时: ${(endTime - startTime)/1000}秒`);
  });



  it("测试智能合约执行效率", async function() {
    const iterations = 100;
    const startTime = Date.now();
    
    for (let i = 0; i < iterations; i++) {
      await contract.connect(addr1).getAsset(0);
    }
    
    const endTime = Date.now();
    console.log(`智能合约执行效率测试:`);
    console.log(`- 查询次数: ${iterations}`);
    console.log(`- 平均查询时间: ${(endTime - startTime)/iterations}毫秒`);
  });

  it("测试交易吞吐量", async function() {
    const startTime = Date.now();
    const txCount = 100;
    
    for (let i = 0; i < txCount; i++) {
      await contract.connect(addr1).createAsset("test", 100);
    }
    
    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000;
    const tps = txCount / duration;
    
    console.log(`交易吞吐量测试结果:`);
    console.log(`- 交易数量: ${txCount}`);
    console.log(`- 耗时: ${duration}秒`);
    console.log(`- TPS: ${tps.toFixed(2)}`);
  });

  it("测试并发处理能力", async function() {
    const txCount = 50;
    const promises = [];
    
    for (let i = 0; i < txCount; i++) {
      promises.push(contract.connect(addr1).createAsset(`asset_${i}`, 100));
    }
    
    const startTime = Date.now();
    await Promise.all(promises);
    const endTime = Date.now();
    
    console.log(`并发处理测试结果:`);
    console.log(`- 并发交易数: ${txCount}`);
    console.log(`- 总耗时: ${(endTime - startTime)/1000}秒`);
  });



  it("测试智能合约执行效率", async function() {
    const iterations = 100;
    const startTime = Date.now();
    
    for (let i = 0; i < iterations; i++) {
      await contract.connect(addr1).getAsset(0);
    }
    
    const endTime = Date.now();
    console.log(`智能合约执行效率测试:`);
    console.log(`- 查询次数: ${iterations}`);
    console.log(`- 平均查询时间: ${(endTime - startTime)/iterations}毫秒`);
  });

  it("测试Gas消耗", async function() {
    const tx = await contract.connect(addr1).createAsset("test", 100);
    const receipt = await tx.wait();
    
    console.log(`Gas消耗测试结果:`);
    console.log(`- Gas使用量: ${receipt.gasUsed.toString()}`);
    console.log(`- Gas价格: ${tx.gasPrice.toString()} wei`);
    console.log(`- 总成本: ${ethers.utils.formatEther(receipt.gasUsed.mul(tx.gasPrice))} ETH`);
  });

  it("测试并发处理能力", async function() {
    const txCount = 50;
    const promises = [];
    
    for (let i = 0; i < txCount; i++) {
      promises.push(contract.connect(addr1).createAsset(`asset_${i}`, 100));
    }
    
    const startTime = Date.now();
    await Promise.all(promises);
    const endTime = Date.now();
    
    console.log(`并发处理测试结果:`);
    console.log(`- 并发交易数: ${txCount}`);
    console.log(`- 总耗时: ${(endTime - startTime)/1000}秒`);
  });



  it("测试智能合约执行效率", async function() {
    const iterations = 100;
    const startTime = Date.now();
    
    for (let i = 0; i < iterations; i++) {
      await contract.connect(addr1).getAsset(0);
    }
    
    const endTime = Date.now();
    console.log(`智能合约执行效率测试:`);
    console.log(`- 查询次数: ${iterations}`);
    console.log(`- 平均查询时间: ${(endTime - startTime)/iterations}毫秒`);
  });

  it("测试区块生成时间", async function() {
    const blockBefore = await ethers.provider.getBlock("latest");
    await contract.connect(addr1).createAsset("test", 100);
    const blockAfter = await ethers.provider.getBlock("latest");
    
    const timeDiff = blockAfter.timestamp - blockBefore.timestamp;
    
    console.log(`区块生成时间测试结果:`);
    console.log(`- 区块间隔: ${timeDiff}秒`);
  });

  it("测试并发处理能力", async function() {
    const txCount = 50;
    const promises = [];
    
    for (let i = 0; i < txCount; i++) {
      promises.push(contract.connect(addr1).createAsset(`asset_${i}`, 100));
    }
    
    const startTime = Date.now();
    await Promise.all(promises);
    const endTime = Date.now();
    
    console.log(`并发处理测试结果:`);
    console.log(`- 并发交易数: ${txCount}`);
    console.log(`- 总耗时: ${(endTime - startTime)/1000}秒`);
  });



  it("测试智能合约执行效率", async function() {
    const iterations = 100;
    const startTime = Date.now();
    
    for (let i = 0; i < iterations; i++) {
      await contract.connect(addr1).getAsset(0);
    }
    
    const endTime = Date.now();
    console.log(`智能合约执行效率测试:`);
    console.log(`- 查询次数: ${iterations}`);
    console.log(`- 平均查询时间: ${(endTime - startTime)/iterations}毫秒`);
  });
});

  it("测试并发处理能力", async function() {
    const txCount = 50;
    const promises = [];
    
    for (let i = 0; i < txCount; i++) {
      promises.push(contract.connect(addr1).createAsset(`asset_${i}`, 100));
    }
    
    const startTime = Date.now();
    await Promise.all(promises);
    const endTime = Date.now();
    
    console.log(`并发处理测试结果:`);
    console.log(`- 并发交易数: ${txCount}`);
    console.log(`- 总耗时: ${(endTime - startTime)/1000}秒`);
  });



  it("测试智能合约执行效率", async function() {
    const iterations = 100;
    const startTime = Date.now();
    
    for (let i = 0; i < iterations; i++) {
      await contract.connect(addr1).getAsset(0);
    }
    
    const endTime = Date.now();
    console.log(`智能合约执行效率测试:`);
    console.log(`- 查询次数: ${iterations}`);
    console.log(`- 平均查询时间: ${(endTime - startTime)/iterations}毫秒`);
  });