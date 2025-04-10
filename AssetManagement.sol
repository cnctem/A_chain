// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AssetManagement {
    // 资产所有者
    address public owner;
    
    // 资产结构
    struct Asset {
        uint256 id;
        string name;
        uint256 value;
        address currentOwner;
    }
    
    // 资产映射
    mapping(uint256 => Asset) public assets;
    
    // 资产计数器
    uint256 public assetCount;
    
    // 事件
    event AssetCreated(uint256 id, string name, uint256 value, address owner);
    event AssetTransferred(uint256 id, address from, address to);
    
    // 构造函数
    constructor() {
        owner = msg.sender;
    }
    
    // 创建资产
    function createAsset(string memory _name, uint256 _value) public {
        assetCount++;
        assets[assetCount] = Asset(assetCount, _name, _value, msg.sender);
        emit AssetCreated(assetCount, _name, _value, msg.sender);
    }
    
    // 转移资产
    function transferAsset(uint256 _id, address _to) public {
        require(assets[_id].currentOwner == msg.sender, "Only owner can transfer asset");
        address previousOwner = assets[_id].currentOwner;
        assets[_id].currentOwner = _to;
        emit AssetTransferred(_id, previousOwner, _to);
    }
    
    // 获取资产信息
    function getAsset(uint256 _id) public view returns (string memory, uint256, address) {
        Asset memory asset = assets[_id];
        return (asset.name, asset.value, asset.currentOwner);
    }
}