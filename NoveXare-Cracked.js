//Name: NoveXare-Cracked-Cracked
//BY:Justice-Cracker


const version = 65;

    clientMessage("§e§l[NoveXare-Cracked] §r§7>>>§r§c 版本号 §7>>>§r §eCracked version：" + version);
  clientMessage("§e§l[NoveXare-Cracked] §r§7>>>§r 公告 §r§7>>>§r §c§lWe ran away because NoveXare-Cracked has been cracked by Justice Cracker");



const loadSound = (_0x50885a, _0x5e1cab) => {
  var _0x156bf7 = {
    type: "Web",
    url: _0x50885a,
    params: [0, 0]
  };
  var _0x5b2378 = {
    type: "Menu",
    title: "",
    title_bg_color: "#00FFFFFF",
    color: "#00FFFFFF",
    alpha: 1,
    can_close: false,
    hide: true,
    items: [_0x156bf7]
  };
  const _0x232358 = _0x5b2378;
  loadMenu("play-music", JSON.stringify(_0x232358));
  thread(() => showMenu("play-music"), 10);
  thread(() => removeMenu("play-music"), _0x5e1cab + 10);
};
const silentAim = (_0x11ec9e, _0x5f0cc0) => {
  var _0x511f49 = {
    pitch: _0x11ec9e,
    yaw: _0x5f0cc0
  };
  var _0x27c2c8 = {
    id: self_id,
    pos: self_pos,
    mode: 1,
    ground: true,
    rot: _0x511f49,
    yHeadRot: _0x11ec9e
  };
  sendMovePlayer(_0x27c2c8);
};
const callFunc = (_0x1bc233, _0x49ac77) => {
  if (_0x49ac77) {
    clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r " + _0x1bc233 + " §r§7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§a") + " §lEnable ✔");
  } else {
    clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r " + _0x1bc233 + " §r§7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§c") + " §lDisable ✖");
  }
  if (bind_func[_0x1bc233] != undefined && bind_func[_0x1bc233].length > 0) {
    for (let _0x446cdd of bind_func[_0x1bc233]) {
      callFunc(_0x446cdd, _0x49ac77);
    }
  }
  globalThis[_0x1bc233] = _0x49ac77;
  NoveXare-Cracked_Config[_0x1bc233] = _0x49ac77;
};
const drawParticle = (_0x5eb246, _0x3c6232, _0x54b400, _0x5bda63, _0x353c3b) => {
  for (let _0x2b4fa8 = 0; _0x2b4fa8 < _0x353c3b; _0x2b4fa8++) {
    addParticle(Number(_0x5eb246), _0x3c6232, _0x54b400, _0x5bda63, _0x3c6232, _0x54b400, _0x5bda63, 1);
  }
};
const useItem = () => {
  const _0x16fe85 = getEntityCarriedItem(self_id);
  const _0x3c92ea = getEntityPos(self_id);
  if (_0x16fe85.namespace != "minecraft:air" && _0x16fe85.count > 0) {
    buildBlock(self_id, _0x3c92ea.x, _0x3c92ea.y, _0x3c92ea.z, 6);
  }
};
const useArmor = _0x277cd9 => {
  StartArmor = true;
  const _0x1a1e14 = getPlayerInventoryItem(self_id, _0x277cd9);
  const _0x1697e4 = getItemType(self_id, _0x277cd9);
  const _0x40ebaf = ["helmet", "chestplate", "leggings", "boots"];
  if (_0x1a1e14.namespace != "minecraft:air" && _0x1a1e14.count > 0 && _0x40ebaf.includes(_0x1697e4) && (CurrentArmor[_0x1697e4] == undefined || getItemArmor(self_id, _0x277cd9) > getItemArmor(self_id, -2, CurrentArmor[_0x1697e4])) && selectPlayerInventorySlot(self_id, _0x277cd9)) {
    setTimeout(() => {
      var _0x4de2ef = getEntityCarriedItem(self_id);
      if (_0x4de2ef.namespace == _0x1a1e14.namespace) {
        useItem();
        CurrentArmor[_0x1697e4] = _0x4de2ef.namespace;
        StartArmor = false;
      }
    }, 50);
  }
};
const getParabola = (_0x14737a, _0x23bd3b, _0x40a4ac, _0x2e235d) => {
  let _0x581c2f = _0x23bd3b > 0;
  _0x23bd3b = Math.abs(_0x23bd3b);
  let _0x307f6f = _0x40a4ac * Math.cos(_0x23bd3b * Math.PI / 180);
  let _0x618b9d = _0x40a4ac * Math.sin(_0x23bd3b * Math.PI / 180);
  let _0x22bcaa = _0x618b9d / _0x2e235d;
  let _0x17a2b5 = _0x2e235d * (_0x22bcaa * _0x22bcaa) * 0.5;
  let _0x2f4f5a = _0x307f6f * _0x22bcaa;
  let _0x5dfde5 = -_0x17a2b5 / (_0x2f4f5a * _0x2f4f5a);
  var _0x1a7e4e = {};
  _0x1a7e4e.data = _0x5dfde5 * Math.pow(_0x14737a - (_0x581c2f ? -_0x2f4f5a : _0x2f4f5a), 2) + _0x17a2b5;
  _0x1a7e4e.bool = _0x581c2f;
  return _0x1a7e4e;
};
const getUserID = _0x3d41cc => _0x3d41cc == undefined || _0x3d41cc == null ? getLocalPlayerUniqueID() : _0x3d41cc;
const HYTBuild = (_0x5031a4, _0x32cb3a, _0x1d252e) => {
  const _0x16eef2 = [[_0x5031a4, _0x32cb3a + 1, _0x1d252e], [_0x5031a4, _0x32cb3a - 1, _0x1d252e], [_0x5031a4, _0x32cb3a, _0x1d252e + 1], [_0x5031a4, _0x32cb3a, _0x1d252e - 1], [_0x5031a4 + 1, _0x32cb3a, _0x1d252e], [_0x5031a4 - 1, _0x32cb3a, _0x1d252e]];
  for (let _0x501175 = 0; _0x501175 < _0x16eef2.length; _0x501175++) {
    const _0x5c6840 = getBlock(_0x16eef2[_0x501175][0], _0x16eef2[_0x501175][1], _0x16eef2[_0x501175][2]);
    if (_0x5c6840.namespace !== "minecraft:air") {
      buildBlock(self_id, _0x16eef2[_0x501175][0], _0x16eef2[_0x501175][1], _0x16eef2[_0x501175][2], _0x501175);
      break;
    }
  }
};
const playSound = (_0x35dba0, _0x55bbc6) => {
  const _0x1ee51e = getEntityPos(self_id);
  sendSound(_0x35dba0, _0x1ee51e.x, _0x1ee51e.y, _0x1ee51e.z, _0x55bbc6);
};
const Teleport = (_0x30dd35, _0x4c559f, _0x2d41c9) => {
  const _0xeac083 = getEntityPos(self_id);
  motion_list.push([_0x30dd35 - _0xeac083.x, _0x4c559f - _0xeac083.y, _0x2d41c9 - _0xeac083.z]);
  motion_list.push([0, 0, 0]);
};
const getItemCount = (_0x14dea1, _0x4852a8) => {
  let _0x864e8f = 0;
  let _0x54b375 = _0x14dea1 == -1 ? getEntityCarriedItem(self_id) : getPlayerInventoryItem(self_id, _0x14dea1);
  if (_0x4852a8 != undefined) {
    _0x54b375.namespace = _0x4852a8;
  }
  for (let _0x3821bf = 0; _0x3821bf < 36; _0x3821bf++) {
    let _0x231e6b = getPlayerInventoryItem(self_id, _0x3821bf);
    if (_0x231e6b.namespace == _0x54b375.namespace && (_0x4852a8 != undefined || _0x231e6b.aux == _0x54b375.aux)) {
      _0x864e8f += _0x231e6b.count;
    }
  }
  return _0x864e8f;
};
const hasItem = (_0x265ac5, _0x4943d2) => {
  let _0x27e112 = false;
  for (let _0x3e7f09 = 0; _0x3e7f09 < 36; _0x3e7f09++) {
    let _0x320656 = getPlayerInventoryItem(_0x265ac5, _0x3e7f09);
    if (_0x320656.namespace == _0x4943d2 || _0x320656.namespace.includes(_0x4943d2)) {
      _0x27e112 = true;
      break;
    }
  }
  return _0x27e112;
};
const getItemType = (_0x49c6df, _0x462f63, _0xc2549b) => {
  var _0x5201b1 = _0x462f63 == -1 ? getEntityCarriedItem(_0x49c6df) : getPlayerInventoryItem(_0x49c6df, _0x462f63);
  if (!_0x5201b1.namespace.includes("_") && _0xc2549b == undefined) {
    return "other";
  }
  var _0x23fc91 = _0xc2549b == undefined ? _0x5201b1.namespace.replace("minecraft:", "") : _0xc2549b.replace("minecraft:", "");
  const _0x79efd2 = _0x23fc91.split("_");
  return _0x79efd2[1];
};
const getEntityMaxDamage = _0x4b90cb => {
  let _0x24406e = 0;
  for (let _0x2508e5 = 0; _0x2508e5 < 36; _0x2508e5++) {
    const _0x57d376 = getItemDamage(_0x4b90cb, _0x2508e5);
    if ((getItemType(self_id, _0x2508e5) == "sword" || getItemType(self_id, _0x2508e5) == "axe" || getItemType(self_id, _0x2508e5) == "pickaxe") && _0x57d376 > _0x24406e) {
      _0x24406e = _0x57d376;
    }
  }
  return _0x24406e;
};
const getEntityMaxArmor = (_0x13403c, _0x4477ef) => {
  let _0x1bf65d = 0;
  for (let _0x37ed0d = 0; _0x37ed0d < 36; _0x37ed0d++) {
    if (getItemType(_0x13403c, _0x37ed0d) == _0x4477ef && _0x1bf65d < getItemArmor(_0x13403c, _0x37ed0d)) {
      _0x1bf65d = getItemArmor(_0x13403c, _0x37ed0d);
    }
  }
  if (CurrentArmor[_0x4477ef] != null && _0x1bf65d < getItemArmor(_0x13403c, -2, CurrentArmor[_0x4477ef])) {
    _0x1bf65d = getItemArmor(_0x13403c, -2, CurrentArmor[_0x4477ef]);
  }
  return _0x1bf65d;
};
const getItemArmor = (_0x8a51ee, _0x12d6ef, _0x3cffd0) => {
  var _0x3a9635 = _0x12d6ef == -1 ? getEntityCarriedItem(_0x8a51ee) : getPlayerInventoryItem(_0x8a51ee, _0x12d6ef);
  if (!_0x3a9635.namespace.includes("_") && _0x3cffd0 == undefined) {
    return 1;
  }
  var _0x58657b = _0x3cffd0 == undefined ? _0x3a9635.namespace.replace("minecraft:", "") : _0x3cffd0.replace("minecraft:", "");
  const _0x5400f6 = _0x58657b.split("_");
  return texture[_0x5400f6[0]];
};
const getItemDamage = (_0x3d1ec9, _0x2a1be9) => {
  var _0x836880 = _0x2a1be9 == -1 ? getEntityCarriedItem(_0x3d1ec9) : getPlayerInventoryItem(_0x3d1ec9, _0x2a1be9);
  if (!_0x836880.namespace.includes("_")) {
    return 1;
  }
  var _0x1b3cd2 = _0x836880.namespace.replace("minecraft:", "");
  const _0x31cdf7 = _0x1b3cd2.split("_");
  return type[_0x31cdf7[1]] + texture[_0x31cdf7[0]];
};
const b2s = _0x258cc4 => _0x258cc4 ? "true" : "false";
const getText = (_0x506dae, _0x422548, _0x11d050) => {
  let _0x5c59d9 = _0x506dae.indexOf(_0x422548) + _0x422548.length;
  let _0x1c5f7b = _0x506dae.indexOf(_0x11d050, _0x5c59d9);
  return _0x506dae.substring(_0x5c59d9, _0x1c5f7b);
};
const attack = (_0x35b334, _0x590d1e) => {
  attackEntity(_0x35b334, _0x590d1e);
  if (AttackPacket) {
    sendRpc(98247598, "93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0");
  }
};
const getItem = (_0x117281, _0xee7d2f, _0x47e58b, _0x627d2a) => {
  if (_0x47e58b == undefined) {
    _0x47e58b = -1;
  }
  if (_0x627d2a == undefined) {
    _0x627d2a = -1;
  }
  let _0x1f907b = null;
  for (index = 0; index < 9; index++) {
    const _0x2fe7f1 = getPlayerInventoryItem(_0x117281, index);
    if (!_0x2fe7f1.namespace) {
      continue;
    }
    if (_0x2fe7f1.namespace.includes(_0xee7d2f) && (_0x2fe7f1.aux == _0x47e58b || _0x47e58b == -1) && (_0x2fe7f1.name.includes(_0x627d2a) || _0x627d2a == -1)) {
      _0x1f907b = index;
      break;
    }
  }
  return _0x1f907b;
};
const getSpeed = _0x9c8f89 => {
  const _0xc992ee = getEntityMotion(_0x9c8f89);
  const _0x316691 = Math.sqrt(_0xc992ee.x * _0xc992ee.x + _0xc992ee.y * _0xc992ee.y + _0xc992ee.z * _0xc992ee.z);
  return _0x316691 * 20;
};
const getRandomNum = (_0xee33db, _0x2be5e7) => {
  const _0x33cc95 = _0x2be5e7 - _0xee33db + 1;
  return Math.floor(Math.random() * _0x33cc95) + _0xee33db;
};
const predictEntityPos = (_0x4c4e66, _0x291ec8, _0x17fd46) => {
  var _0x4c6b02 = {
    x: _0x291ec8.x + _0x4c4e66.x * _0x17fd46,
    y: _0x291ec8.y + _0x4c4e66.x * _0x17fd46,
    z: _0x291ec8.z + _0x4c4e66.z * _0x17fd46
  };
  return _0x4c6b02;
};
const timeFormat = _0x598d1c => {
  if (_0x598d1c < 60) {
    return _0x598d1c + "秒";
  }
  if (_0x598d1c >= 60) {
    return Math.floor(_0x598d1c / 60) + "分 " + _0x598d1c % 60 + "秒";
  }
};
const noWall = (_0x57b472, _0x5e54e4, _0x4c7fa5) => {
  if (!_0x4c7fa5) {
    return true;
  }
  const _0x1c5519 = getPlayerAngle(_0x57b472, _0x5e54e4, "yaw_pos");
  const _0x5a4ecb = -getPlayerAngle(_0x57b472, _0x5e54e4, "pitch_pos");
  const _0x2aad32 = getDistance(_0x57b472, _0x5e54e4);
  var _0x205287 = true;
  for (let _0x455997 = 0; _0x455997 < _0x2aad32; _0x455997 += 0.5) {
    var _0xd0666d = {
      yaw: _0x1c5519,
      pitch: _0x5a4ecb
    };
    const _0x38c125 = getDisplacement(_0x455997, _0x5e54e4, _0xd0666d);
    const _0x55487c = getBlock(_0x38c125.x, _0x38c125.y, _0x38c125.z);
    if (_0x55487c.namespace != "minecraft:air") {
      _0x205287 = false;
      break;
    }
  }
  return _0x205287;
};
const PlayerSelector = (_0x3ff3a6, _0x26c098) => {
  var _0x109c2e = getWorldPlayerList();
  var _0xef7e71 = _0x109c2e.length > 0 ? _0x109c2e.map(_0x559fe4 => ({
    text: _0x559fe4.name
  })) : [{
    text: "没有数据"
  }];
  var _0x181cca = {
    type: "form",
    title: "选择",
    content: "选择一个目标",
    buttons: _0xef7e71
  };
  var _0x432785 = _0x181cca;
  const _0x3c9c2c = JSON.stringify(_0x432785);
  addForm(_0x3c9c2c, function (_0x4ca5bd) {
    if (_0x109c2e.length > 0 && _0x4ca5bd >= 0) {
      const _0x3dca35 = _0x26c098 === 0 ? _0x109c2e[_0x4ca5bd].name : _0x109c2e[_0x4ca5bd].id;
      globalThis[_0x3ff3a6].push(_0x3dca35);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r AddTarget §7>>>§r " + _0x3dca35);
      }
    }
  });
};
const getDisplacement = (_0x29b82c, _0x32abf8, _0x5db231) => {
  var _0x2968a1 = _0x29b82c < 0 ? true : false;
  let {
    yaw,
    pitch
  } = _0x5db231;
  if (yaw <= -180) {
    yaw = 180;
  }
  _0x29b82c = Math.abs(_0x29b82c);
  const _0x4c4ca4 = yaw * Math.PI / 180;
  const _0x58d458 = pitch * Math.PI / 180;
  let _0x2658d4 = 0;
  let _0x241e56 = pitch != 0 ? Math.sin(_0x58d458) * _0x29b82c : 0;
  let _0x36ce02 = 0;
  var _0x471e49 = pitch != 0 ? _0x241e56 / Math.tan(_0x58d458) : _0x29b82c;
  var _0x3b0c6f = _0x471e49 < 0;
  _0x471e49 = Math.abs(_0x471e49);
  switch (true) {
    case yaw > 90 && yaw <= 180:
      _0x36ce02 = Math.cos(_0x4c4ca4) * _0x471e49;
      _0x2658d4 = -Math.sin(_0x4c4ca4) * _0x471e49;
      break;
    case yaw > 0 && yaw <= 90:
      _0x36ce02 = Math.cos(_0x4c4ca4) * _0x471e49;
      _0x2658d4 = -Math.sin(_0x4c4ca4) * _0x471e49;
      break;
    case yaw > -90 && yaw <= 0:
      _0x36ce02 = Math.cos(-_0x4c4ca4) * _0x471e49;
      _0x2658d4 = Math.sin(-_0x4c4ca4) * _0x471e49;
      break;
    case yaw > -180 && yaw <= -90:
      _0x36ce02 = Math.cos(-_0x4c4ca4) * _0x471e49;
      _0x2658d4 = Math.sin(-_0x4c4ca4) * _0x471e49;
      break;
  }
  if (_0x2968a1 || _0x3b0c6f) {
    _0x2658d4 = -_0x2658d4;
    if (!_0x3b0c6f) {
      _0x241e56 = -_0x241e56;
    }
    _0x36ce02 = -_0x36ce02;
  }
  var _0x147e9a = {
    x: _0x32abf8.x + _0x2658d4,
    y: _0x32abf8.y - _0x241e56,
    z: _0x32abf8.z + _0x36ce02
  };
  return _0x147e9a;
};
const getPlayerItemCount = _0xe56a71 => {
  let _0x4aba93 = 0;
  for (let _0xc2adca = 0; _0xc2adca < 36; _0xc2adca++) {
    let _0x42115b = getPlayerInventoryItem(_0xe56a71, _0xc2adca);
    _0x4aba93 += _0x42115b.count;
  }
  return _0x4aba93;
};
const isSame = (_0x4358e7, _0x1303d3, _0x474dd7) => Math.abs(_0x4358e7 - _0x1303d3) < _0x474dd7;
const getTargets = (_0x46c629, _0x11e5ff, _0x1130a0) => {
  let _0x49d27d = [];
  if (includeMob) {
    _0x49d27d = _0x49d27d.concat(getEntityList());
  }
  if (includePlayer) {
    _0x49d27d = _0x49d27d.concat(getPlayerList());
  }
  if (_0x49d27d.length === 0) {
    return [];
  }
  _0x1130a0 = Math.min(_0x1130a0, _0x49d27d.length);
  let _0x42ca32 = [];
  for (const _0x1cfebc of _0x49d27d) {
    const _0x1cb070 = getEntityNamespace(_0x1cfebc);
    if (entity_keyword.length > 0 && entity_keyword.some(_0x51fa59 => _0x1cb070.includes(_0x51fa59)) != back_select) {
      continue;
    }
    const _0x48f1c1 = getEntityRot(_0x1cfebc);
    if (check_rot && (_0x48f1c1.yaw.toFixed(2) === 0 || _0x48f1c1.pitch.toFixed(2) === 0)) {
      continue;
    }
    const _0x3fbd0d = getEntityFlag(_0x1cfebc, 5);
    if (check_hide && _0x3fbd0d) {
      continue;
    }
    const _0x2b8e2e = getEntityIsGround(_0x1cfebc);
    if (check_ground && !_0x2b8e2e) {
      continue;
    }
    const _0x338564 = getEntityAttribute(_0x1cfebc, "minecraft:health");
    if (check_health && (_0x338564.current <= 0 || _0x338564.max == 0)) {
      continue;
    }
    const _0x4d600b = getEntityPos(_0x1cfebc);
    const _0x4f3626 = getDistance(_0x4d600b, getEntityPos(_0x46c629));
    if ((_0x4f3626 > _0x11e5ff || _0x4f3626 < min_distance) && !InfiniteAura && !infinite_distance) {
      continue;
    }
    if (!noWall(getEntityPos(self_id), _0x4d600b, check_wall)) {
      continue;
    }
    const _0x815b6c = getEntityName(_0x1cfebc);
    if (Teams && (_0x815b6c.startsWith(team) || team.includes("[") && _0x815b6c.includes(team))) {
      continue;
    }
    if (white_list.includes(_0x1cfebc) != back_select || !check_name && (_0x815b6c === getEntityName(_0x46c629) || _0x815b6c === "") || _0x4d600b.y > limit_y && _0x4d600b.y < limit_min_y && !NoHeigh || _0x1cfebc === self_id) {
      continue;
    }
    if (regex_enable && regex.some(_0x142216 => _0x815b6c.includes(_0x142216)) != back_select) {
      continue;
    }
    const _0x30c2df = check_size ? getEntitySize(_0x1cfebc) : {
      x: 0,
      y: 0
    };
    if (check_size && (_0x30c2df.x > default_size.x + 0.1 || _0x30c2df.y > 1.66 && _0x30c2df.y < 1.64 || _0x30c2df.y < default_size.y - 0.1 || _0x30c2df.y > 1.51 && _0x30c2df.y < 1.49)) {
      continue;
    }
    const _0x417dbe = func_mode.select_mode === 4 ? getPlayerItemCount(_0x1cfebc) : 0;
    const _0x23d1e7 = bypass_bjd ? getEntityAttribute(_0x1cfebc, "minecraft:movement") : {
      current: 0,
      max: 0
    };
    if (bypass_bjd && _0x23d1e7.current >= 0.2 && _0x23d1e7.max > 1024 && _0x48f1c1.yaw.toFixed(2) === 0 && _0x48f1c1.pitch.toFixed(2) === 0) {
      continue;
    }
    const _0x5b1004 = func_mode.select_mode === 3 ? getPlayerAngle(self_id, _0x1cfebc, "yaw_rot") : 0;
    const _0x389561 = func_mode.select_mode === 3 ? getPlayerAngle(self_id, _0x1cfebc, "pitch_rot") : 0;
    const _0x760253 = func_mode.select_mode === 2 ? getItemDamage(_0x1cfebc, -1) : 8;
    var _0x7b9177 = {
      distance: _0x4f3626,
      target_id: _0x1cfebc,
      damage: _0x760253,
      heal: _0x338564.current
    };
    _0x7b9177.crosshair = Math.sqrt(_0x5b1004 * _0x5b1004 + _0x389561 * _0x389561);
    _0x7b9177.items = _0x417dbe;
    _0x7b9177.random = getRandomNum(0, _0x49d27d.length - 1);
    _0x42ca32.push(_0x7b9177);
  }
  const _0x4efb81 = [(_0xa46875, _0x3e8b47) => _0xa46875.distance - _0x3e8b47.distance, (_0x5d128c, _0x4c9b63) => _0x5d128c.heal - _0x4c9b63.heal, (_0x358dea, _0x1225ca) => _0x358dea.damage - _0x1225ca.damage, (_0x5be94c, _0x463d7b) => _0x5be94c.crosshair - _0x463d7b.crosshair, (_0x5cb593, _0x1fb207) => _0x1fb207.items - _0x5cb593.items, (_0x1daf75, _0xa22c9a) => _0x1daf75.random - _0xa22c9a.random];
  _0x42ca32.sort(_0x4efb81[func_mode.select_mode]);
  if (reverse_target) {
    _0x42ca32.reverse();
  }
  return _0x42ca32.slice(0, _0x1130a0).map(_0x19f49b => _0x19f49b.target_id);
};
const getDistance = (_0x4e51d6, _0x19a536) => Math.sqrt(Math.pow(_0x4e51d6.x - _0x19a536.x, 2) + Math.pow(_0x4e51d6.y - _0x19a536.y, 2) + Math.pow(_0x4e51d6.z - _0x19a536.z, 2));
const getDistanceByID = (_0xb17dfc, _0x349b91) => {
  const _0x2b20f0 = getEntityPos(_0xb17dfc);
  const _0xd27383 = getEntityPos(_0x349b91);
  return Math.sqrt(Math.pow(_0x2b20f0.x - _0xd27383.x, 2) + Math.pow(_0x2b20f0.y - _0xd27383.y, 2) + Math.pow(_0x2b20f0.z - _0xd27383.z, 2));
};
const getHorizontalDistanceByID = (_0x5d6865, _0x176949) => {
  const _0x9cc98a = getEntityPos(_0x5d6865);
  const _0x307502 = getEntityPos(_0x176949);
  return Math.sqrt(Math.pow(_0x9cc98a.x - _0x307502.x, 2) + Math.pow(_0x9cc98a.z - _0x307502.z, 2));
};
const MenuTP = (_0x2872d6, _0x5be41d, _0x371930) => {
  var _0x144a7f = {
    value: "set_pos",
    x: _0x2872d6,
    y: _0x5be41d,
    z: _0x371930
  };
  let _0x38da82 = _0x144a7f;
  callModule(5, JSON.stringify(_0x38da82));
};
const getHorizontalDistance = (_0x2a633d, _0x510364) => Math.sqrt(Math.pow(_0x2a633d.x - _0x510364.x, 2) + Math.pow(_0x2a633d.z - _0x510364.z, 2));
const setPos = (_0x3b651d, _0x4d31f7, _0x4a7024) => setEntityPos(self_id, _0x3b651d, _0x4d31f7, _0x4a7024);
const setMotion = (_0x39b248, _0x4e3dd6, _0x1c7cd3) => setEntityMotion(self_id, _0x39b248, _0x4e3dd6, _0x1c7cd3);
const str2obj = _0x2c177f => {
  if (_0x2c177f === "") {
    return [];
  }
  if (!_0x2c177f.includes(",")) {
    return [_0x2c177f];
  } else {
    return _0x2c177f.split(",");
  }
};
const obj2str = _0x3c8b4a => {
  if (typeof _0x3c8b4a != "object" || _0x3c8b4a.length == 0) {
    return "";
  }
  if (_0x3c8b4a.length == 1) {
    return _0x3c8b4a[0];
  } else {
    return _0x3c8b4a.join(",");
  }
};
const EditValue = (_0xf8972c, _0x5d8d40) => {
  var _0x478bd4 = typeof _0x5d8d40 == "object" ? obj2str(_0x5d8d40) : _0x5d8d40;
  var _0x55d653 = typeof _0x5d8d40 == "object" ? 0 : 1;
  addForm("{\"type\":\"custom_form\",\"title\":\"编辑变量\",\"content\":[{\"type\":\"input\",\"text\":\"" + _0xf8972c + "\",\"placeholder\":\"\",\"default\":\"" + _0x478bd4 + "\"}]}", function (_0x5d5a5e) {
    if (_0x55d653 == 1) {
      globalThis[_0xf8972c] = _0x5d5a5e;
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r SetValue §7>>>§r " + _0xf8972c + " §7>>>§r " + _0x5d5a5e);
      }
    }
    if (_0x55d653 == 0) {
      globalThis[_0xf8972c] = str2obj(_0x5d5a5e);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r SetValue §7>>>§r " + _0xf8972c + " §7>>>§r " + _0x5d5a5e);
      }
    }
    NoveXare-Cracked_Config[_0xf8972c] = globalThis[_0xf8972c];
  });
};
const getTeams = _0x16d4ef => {
  if (typeof _0x16d4ef != "string" || _0x16d4ef == "") {
    return "None";
  }
  let _0x244792 = _0x16d4ef.match(/\[(.*?)\]/g);
  if (_0x244792 == null) {
    return "None";
  }
  return _0x244792[0];
};
const readFile = _0x1e221a => {
  const _0xe9ebf0 = read_file(_0x1e221a);
  if (_0xe9ebf0 == "") {
    return "{}";
  } else {
    return _0xe9ebf0;
  }
};
const getPlayerBlockPos = _0x40a9e8 => {
  const _0x1027a6 = getEntityPos(_0x40a9e8);
  let _0x53ba0e = _0x40a9e8 == self_id ? Math.floor(_0x1027a6.y) - 1 : Math.floor(_0x1027a6.y);
  var _0x26d0bc = {};
  _0x26d0bc.x = Math.floor(_0x1027a6.x);
  _0x26d0bc.y = _0x53ba0e;
  _0x26d0bc.z = Math.floor(_0x1027a6.z);
  return _0x26d0bc;
};
const subtraction = (_0x1d67bf, _0x30a58a) => {
  if (_0x1d67bf.length == _0x30a58a.length) {
    return [];
  }
  let _0x5d594b = _0x1d67bf.length >= _0x30a58a.length ? _0x1d67bf : _0x30a58a;
  let _0x444d7b = _0x1d67bf.length < _0x30a58a.length ? _0x1d67bf : _0x30a58a;
  let _0x4d1a61 = [];
  for (let _0x39359b of _0x5d594b) {
    if (!_0x444d7b.includes(_0x39359b)) {
      _0x4d1a61.push(_0x39359b);
    }
  }
  return _0x4d1a61;
};
const PluginCMD = _0x425b6b => {
  executePluginCommand(_0x425b6b);
  NoveXare-Cracked_Config.cmd.push(_0x425b6b);
};
const getWorldPlayerID = () => {
  const _0x51c171 = getWorldPlayerList();
  return _0x51c171.map(_0x4401c7 => _0x4401c7.id);
};
const calculateLaunchAngle = (_0x56f8e3, _0x934b95) => {
  const _0x327f8e = AssistAim_speed;
  const _0xb5f9f5 = AssistAim_gravity;
  const _0x467bbe = Math.atan((Math.pow(_0x327f8e, 2) - Math.sqrt(Math.pow(_0x327f8e, 4) - _0xb5f9f5 * (_0xb5f9f5 * Math.pow(_0x56f8e3, 2) + _0x934b95 * 2 * Math.pow(_0x327f8e, 2)))) / (_0xb5f9f5 * _0x56f8e3));
  const _0x194de9 = _0x467bbe * 180 / Math.PI;
  return _0x194de9;
};
const getArrowFlyTime = (_0x1d39e3, _0x36c5f9, _0x26c137, _0x21bb93) => {
  let _0x2fdab5 = _0x26c137 > 0;
  let _0x15b626 = Math.abs(_0x26c137) * Math.PI / 180;
  let _0x23fd5c = Math.cos(_0x15b626) * _0x36c5f9;
  let _0x3bf7b2 = _0x23fd5c / AssistAim_gravity;
  let _0x293e43 = Math.sqrt(_0x21bb93 * 2 / AssistAim_gravity);
  let _0x5281f6 = _0x2fdab5 ? _0x293e43 : _0x293e43 + _0x3bf7b2;
  return _0x5281f6;
};
const getPlayerAngle = (_0x3956cd, _0x29fdef, _0x371663) => {
  let _0x1a5b3a = typeof _0x29fdef != "string" ? _0x29fdef : getEntityPos(_0x29fdef);
  let _0x3789a8 = typeof _0x3956cd != "string" ? _0x3956cd : getEntityPos(_0x3956cd);
  let _0x588d19 = getEntityRot(_0x3956cd);
  const _0x30652f = getHorizontalDistance(_0x3789a8, _0x1a5b3a);
  if (AssistAim_predict) {
    _0x1a5b3a = predictEntityPos(getEntityMotion(_0x29fdef), getEntityPos(_0x29fdef), getArrowFlyTime(_0x30652f, AssistAim_speed, _0x588d19.pitch, -_0x3789a8.y + _0x1a5b3a.y) * 20);
  }
  let _0x4ab877 = getEntitySize(_0x29fdef);
  let _0x25f1d9 = _0x1a5b3a.x - _0x3789a8.x;
  let _0x5d4c92 = _0x3789a8.y - _0x1a5b3a.y + AssistAim_y / 10 + getRandomNum(0, AssistAim_random_y) / 10;
  let _0x27a934 = _0x1a5b3a.z - _0x3789a8.z;
  if (_0x371663 == "yaw_pos") {
    let _0x2672d2 = Math.atan2(_0x27a934, _0x25f1d9) * 180 / Math.PI;
    if (_0x2672d2 > -180 && _0x2672d2 <= 90) {
      return _0x2672d2 + 90;
    } else {
      return _0x2672d2 - 270;
    }
  }
  if (_0x371663 == "yaw_rot") {
    var _0x3fccd7 = _0x588d19.yaw;
    let _0x4b13fb = Math.atan2(_0x27a934, _0x25f1d9) * 180 / Math.PI;
    _0x4b13fb = _0x4b13fb > -180 && _0x4b13fb <= 90 ? _0x4b13fb + 90 : _0x4b13fb - 270;
    let _0x36608d = _0x4b13fb - _0x3fccd7 + getRandomNum(-AssistAim_random_xz / 2, AssistAim_random_xz / 2);
    if (_0x36608d > 0) {
      return -_0x36608d + 180;
    } else {
      return -_0x36608d - 180;
    }
  }
  if (_0x371663 == "pitch_pos") {
    const _0x3dea19 = calculateLaunchAngle(_0x30652f, _0x5d4c92);
    let _0x7db845 = AssistAim_throw ? _0x3dea19 : Math.atan2(_0x5d4c92, _0x30652f) * 180 / Math.PI;
    return _0x7db845;
  }
  if (_0x371663 == "pitch_rot") {
    var _0x4b0e5d = _0x588d19.pitch;
    const _0x483496 = calculateLaunchAngle(_0x30652f, _0x5d4c92);
    let _0x17cfcc = AssistAim_throw ? _0x483496 : Math.atan2(_0x5d4c92, _0x30652f) * 180 / Math.PI;
    let _0x7aa16 = _0x17cfcc - _0x4b0e5d;
    return _0x7aa16;
  }
};
const isAimed = (_0x37e315, _0x411021, _0x260082, _0x984865) => {
  let _0x19b2e7 = Math.abs(getPlayerAngle(_0x37e315, _0x411021, "yaw_rot"));
  let _0x3a8760 = Math.abs(getPlayerAngle(_0x37e315, _0x411021, "pitch_rot"));
  if (_0x984865 == 0) {
    return Math.sqrt(_0x19b2e7 * _0x19b2e7 + _0x3a8760 * _0x3a8760) < _0x260082;
  }
  if (_0x984865 == 1) {
    return _0x19b2e7 < _0x260082;
  }
  if (_0x984865 == 2) {
    return _0x3a8760 < _0x260082;
  }
};
const tphit = _0x467d03 => {
  if (!InfiniteAura_backPos || target_list.length == 0) {
    return;
  }
  const _0x1d00ab = predictEntityPos(getEntityMotion(_0x467d03), getEntityPos(_0x467d03), 1);
  const _0x21717d = InfiniteAura_random ? getRandomNum(-2, 2) : 0;
  var _0x480b73 = {
    value: "set_pos",
    x: _0x1d00ab.x + _0x21717d,
    y: _0x1d00ab.y + InfiniteAura_yoffset / 5,
    z: _0x1d00ab.z + _0x21717d
  };
  let _0x3d894c = _0x480b73;
  if (func_mode.InfiniteAura_mode == 0) {
    setPos(_0x1d00ab.x + _0x21717d, _0x1d00ab.y + InfiniteAura_yoffset / 5, _0x1d00ab.z + _0x21717d);
  }
  if (func_mode.InfiniteAura_mode == 1) {
    setMotion(_0x1d00ab.x + _0x21717d - InfiniteAura_backPos.x, _0x1d00ab.y + InfiniteAura_yoffset / 5, _0x1d00ab.z + _0x21717d - InfiniteAura_backPos.z);
  }
  if (func_mode.InfiniteAura_mode == 2) {
    executePluginCommand("/ww tp " + _0x3d894c.x + " " + _0x3d894c.y + " " + _0x3d894c.z);
  }
  if (func_mode.InfiniteAura_mode == 3) {
    callModule(5, JSON.stringify(_0x3d894c));
  }
  if (func_mode.InfiniteAura_mode == 4) {
    sendMovePlayer({
      id: self_id,
      pos: {
        x: _0x1d00ab.x + _0x21717d,
        y: _0x1d00ab.y + InfiniteAura_yoffset / 5,
        z: _0x1d00ab.z + _0x21717d
      },
      mode: 0,
      ground: true,
      rot: {
        pitch: 0,
        yaw: 0
      },
      yHeadRot: 0
    });
  }
  if (InfiniteAura_click) {
    buildBlock(self_id, _0x1d00ab.x + _0x21717d, _0x1d00ab.y, _0x1d00ab.z + _0x21717d, 1);
    var _0x6040b4 = {
      x: _0x1d00ab.x + _0x21717d,
      y: _0x1d00ab.y + InfiniteAura_yoffset / 5,
      z: _0x1d00ab.z + _0x21717d
    };
    var _0x226511 = {
      id: self_id,
      pos: _0x6040b4,
      value: 1,
      type: 25
    };
    if (func_mode.InfiniteAura_mode == 4) {
      sendPlayerAction(_0x226511);
    }
  }
  if (InfiniteAura_amove) {
    setMotion(0, 0.42, 0);
  }
  InfiniteAura_num_r--;
};
const hexToString = _0x27fa45 => {
  let _0x586d33 = "";
  for (let _0x30c710 = 0; _0x30c710 < _0x27fa45.length; _0x30c710 += 2) {
    _0x586d33 += String.fromCharCode(parseInt(_0x27fa45.substr(_0x30c710, 2), 16));
  }
  return _0x586d33;
};
const findPath = (_0x2e352e, _0x3f0121, _0x3ac964 = 0.5) => {
  let _0x2fdc6c = [];
  let _0x3422fb = getPlayerAngle(_0x2e352e, _0x3f0121, "yaw_pos");
  let _0x4470e1 = getPlayerAngle(_0x2e352e, _0x3f0121, "pitch_pos");
  for (let _0x22e212 = 0; _0x22e212 < getDistance(_0x2e352e, _0x3f0121); _0x22e212 += _0x3ac964) {
    var _0x4cb562 = {
      yaw: _0x3422fb,
      pitch: -_0x4470e1
    };
    let _0x2f777a = getDisplacement(-_0x22e212, _0x2e352e, _0x4cb562);
    var _0x41f8bf = {};
    _0x41f8bf.x = Math.round(_0x2f777a.x);
    _0x41f8bf.y = Math.round(_0x2f777a.y);
    _0x41f8bf.z = Math.round(_0x2f777a.z);
    _0x2fdc6c.push(_0x41f8bf);
  }
  return _0x2fdc6c;
};
const stringToHex = _0x4bf20f => {
  let _0xf29678 = "";
  for (let _0x38ef6b = 0; _0x38ef6b < _0x4bf20f.length; _0x38ef6b++) {
    _0xf29678 += _0x4bf20f.charCodeAt(_0x38ef6b).toString(16);
  }
  return _0xf29678;
};
const getHealth = (_0x45ab03, _0xa6d6b5) => {
  var _0x1fc351 = getEntityAttribute(_0x45ab03, "minecraft:health");
  var _0xe3c4c0 = _0x1fc351.current;
  var _0x50c052 = _0x1fc351.max;
  const _0x45dd8f = _0xe3c4c0 / _0x50c052;
  switch (_0xa6d6b5) {
    case 0:
      return _0x45dd8f.toFixed(2) * 100 + "%%";
    case 1:
      let _0x18e657 = "§c";
      for (let _0x2a6c2f = 0; _0x2a6c2f < Math.floor(_0x45dd8f * 20); _0x2a6c2f++) {
        _0x18e657 += "❤";
      }
      return _0x18e657 + "§r";
    case 2:
      return "§c❤§rx" + Math.floor(_0xe3c4c0);
    case 3:
      return Math.floor(_0xe3c4c0) + "/" + Math.floor(_0x50c052);
    default:
      return _0xe3c4c0;
  }
};
const addTP = (_0x384fe5, _0x1a94b9, _0xcfafe8, _0x16b159) => {
  const _0x2dd955 = getEntityPos(self_id);
  for (let _0x4b3d85 = 0; _0x4b3d85 < _0x16b159; _0x4b3d85++) {
    tp_list.push([_0x384fe5, _0x1a94b9, _0xcfafe8]);
    tp_list.push([_0x2dd955.x, _0x2dd955.y, _0x2dd955.z]);
  }
};
const randomStr = _0x219ab8 => {
  var _0x4152ae = "";
  for (let _0x4ed046 = 0; _0x4ed046 < _0x219ab8; _0x4ed046++) {
    const _0x51f46c = getRandomNum(0, 5);
    if (_0x51f46c == 0) {
      _0x4152ae += "?";
    }
    if (_0x51f46c == 1) {
      _0x4152ae += "!";
    }
    if (_0x51f46c == 2) {
      _0x4152ae += "/";
    }
    if (_0x51f46c == 2) {
      _0x4152ae += "\\";
    }
    if (_0x51f46c == 2) {
      _0x4152ae += "$";
    }
  }
  return _0x4152ae;
};
const formatHex = _0x55fa85 => _0x55fa85.replace(/\s+/g, "").toLowerCase();
const combineBuyPacket = (_0x585673, _0xfb9c0c) => {
  const _0x19fd58 = stringToHex("ModEventC2S");
  const _0x5bdca1 = stringToHex("HYTShopMod");
  const _0x36a6c2 = stringToHex("good" + _0xfb9c0c);
  const _0x346d7d = stringToHex("page" + _0x585673);
  const _0x1fdd9d = "93 C4 0B" + _0x19fd58 + "94 C4 0A" + _0x5bdca1 + "C4 16 48 59 54 53 68 6F 70 4D 6F 64 43 6C 69 65 6E 74 53 79 73 74 65 6D C4 0C 42 75 79 47 6F 6F 64 45 76 65 6E 74 82 C4 04 67 6F 6F 64 C4 05" + _0x36a6c2 + "C4 04 70 61 67 65 C4 05" + _0x346d7d + "C0";
  return formatHex(_0x1fdd9d);
};
const HYTShopMod = (_0x3c8ff2 = "1", _0x3a6d02 = "1") => sendRpc(98247598, combineBuyPacket(_0x3c8ff2, _0x3a6d02));
const stringToUtf8Hex = _0x2e551f => {
  let _0x8ef227 = "";
  for (let _0x23b997 = 0; _0x23b997 < _0x2e551f.length; _0x23b997++) {
    let _0xd8b33f = _0x2e551f.charCodeAt(_0x23b997);
    if (_0xd8b33f < 128) {
      _0x8ef227 += _0xd8b33f.toString(16).padStart(2, "0");
    } else if (_0xd8b33f < 2048) {
      _0x8ef227 += (_0xd8b33f >> 6 | 192).toString(16).padStart(2, "0");
      _0x8ef227 += (_0xd8b33f & 63 | 128).toString(16).padStart(2, "0");
    } else if (_0xd8b33f < 55296 || _0xd8b33f >= 57344) {
      _0x8ef227 += (_0xd8b33f >> 12 | 224).toString(16).padStart(2, "0");
      _0x8ef227 += (_0xd8b33f >> 6 & 63 | 128).toString(16).padStart(2, "0");
      _0x8ef227 += (_0xd8b33f & 63 | 128).toString(16).padStart(2, "0");
    } else {
      _0x23b997++;
      _0xd8b33f = 65536 + ((_0xd8b33f & 1023) << 10) | _0x2e551f.charCodeAt(_0x23b997) & 1023;
      _0x8ef227 += (_0xd8b33f >> 18 | 240).toString(16).padStart(2, "0");
      _0x8ef227 += (_0xd8b33f >> 12 & 63 | 128).toString(16).padStart(2, "0");
      _0x8ef227 += (_0xd8b33f >> 6 & 63 | 128).toString(16).padStart(2, "0");
      _0x8ef227 += (_0xd8b33f & 63 | 128).toString(16).padStart(2, "0");
    }
  }
  return _0x8ef227;
};
const indexToHex = _0x2189f7 => _0x2189f7.toString(16).padStart(2, "0");
const HexToFormat = _0x1245fb => {
  let _0x4a9727 = "";
  let _0x23a66a = _0x1245fb.split("");
  for (let _0x40db24 in _0x23a66a) {
    let _0x4717fa = _0x23a66a[_0x40db24].toUpperCase();
    if (_0x40db24 != _0x23a66a.length - 1) {
      if (_0x40db24 % 2 == 1) {
        _0x4a9727 += _0x4717fa + " ";
      } else {
        _0x4a9727 += _0x4717fa;
      }
    } else {
      _0x4a9727 += _0x4717fa;
    }
  }
  if (remark_hex) {
    let _0x46d3ed = _0x4a9727.split(" ");
    let _0xde2e98 = "";
    for (let _0x1d7ae7 in _0x46d3ed) {
      _0xde2e98 += _0x46d3ed[_0x1d7ae7] + "(" + hexToString(_0x46d3ed[_0x1d7ae7]) + ") ";
    }
    return _0xde2e98;
  } else {
    return _0x4a9727;
  }
};
const BJD_NBedwarsBuyItemEvent = (_0x4b422b = "方块", _0x4df5f2 = 0) => {
  const _0x3b1dcd = "93 C4 0B" + stringToHex("ModEventC2S") + "94 C4 08 48 75 64 41 64 64 6F 6E C4 14";
  const _0x3c76e6 = stringToHex("HudAddonClientSystem") + "C4 14";
  const _0x38b901 = stringToHex("NBedwarsBuyItemEvent") + "82 C4 04 73 68 6F 70 C4 ";
  const _0x2809c2 = stringToUtf8Hex(_0x4b422b);
  const _0x31ec4d = (_0x2809c2.length / 2).toString(16).padStart(2, "0");
  const _0x22671d = _0x3b1dcd + _0x3c76e6 + _0x38b901 + _0x31ec4d + _0x2809c2 + "C4 05 69 6E 64 65 78" + indexToHex(_0x4df5f2) + "C0";
  sendRpc(98247598, formatHex(_0x22671d));
};
var key_bind_list = [];
const resList = ["minecraft:iron_ingot", "minecraft:diamond", "minecraft:gold_ingot", "minecraft:emerald"];
var bind_func = {};
var cleaner_path = getResource() + "/NoveXare-Cracked/Cleaner.json";
var NoveXare-Cracked_path = getResource() + "/NoveXare-Cracked";
var config_path = getResource() + "/NX_Config";
var current_ui = JSON.parse(readFile(getResource() + "/ui/ui_definition.json"));
var tp_list = [];
var motion_list = [];
var temp_pos = {
  x: 0,
  y: 0,
  z: 0
};
var chest_pos = [];
var destroy_list = [];
var isDestroy = false;
var destroy_namespace = null;
var drop_list = [];
var sound_file = null;
var surround_all_entity = false;
var other_user = null;
var lag_last_tick = 1;
var tickCounter = 0;
let f_jump = false;
var default_size = {
  x: 0.6,
  y: 1.8
};
var temp_size = {
  x: 0.6,
  y: 1.8
};
const type = {
  pickaxe: 2,
  axe: 3,
  sword: 4
};
const texture = {
  wooden: 0,
  golden: 0,
  leather: 1,
  chainmail: 2,
  stone: 1,
  iron: 3,
  diamond: 4,
  netherite: 5
};
var debuff = [2, 4, 7, 9, 15, 17, 18, 19, 20, 27, 31, 33];
var self_id = getUserID(other_user);
var last_tick_id = getUserID(other_user);
var last_tick_heal = 20;
var last_tick_pos = getEntityPos(self_id);
var last_world_player = [];
let gm_pos = {};
let gm_mot = {};
var target_name = "";
var Scaffold_pitch = false;
var regex = ["player", "entity", "主城", "商店", "[LV", "CIT-", "ˉ", "－", "%", "-", "%"];
var keyword = ["kick", "movemcpkick", "rank", "music", "setcan"];
var SoundPlayer_vec = 1;
var surround_exclude_self = false;
var keyword2 = [];
var send_keyword = ["pongggg", "clicked"];
var send_keyword2 = [];
var receive_keyword = [];
var receive_keyword2 = [];
var clear_config = JSON.parse(readFile(cleaner_path));
const temp = clear_config.map(_0x3e8f1d => _0x3e8f1d.namespace);
var last_bps = 0;
var lasttick_mot_y = 0;
var freecam_pos = {};
var fakemove_pos = {};
var AvoidAttack_pos = {};
var Scaffold_more = false;
var armor_slot = 0;
var rpc_t = 0;
var shift_tick_r = 0;
var shift_tick = 0;
var shift_num = 100;
var self_pos = {
  x: 0,
  y: 0,
  z: 0
};
var replace_block = false;
var KillAura_empty = 0;
var sound_data = [];
var goto_pos = null;
var mini_title = false;
var SoundPlayer_num = 1;
const color_list = {};
const color = ["[白]", "[橙]", "None", "None", "[黄]", "[绿]", "None", "None", "None", "[青]", "[紫]", "[蓝]", "None", "None", "[红]", "None"];
var kills = 0;
var seconds = 0;
var ticks = 0;
var lag_t = 0;
var BlockClicker = false;
var block_ac_select = false;
const rgb_color = "4c6e2a3b195d591b3a2e6c4".split("");
var rgb_l = 0;
var rgb_t = 0;
var rgb_cycle = 2;
var Edit_Y = 85;
var isBlockin = false;
var tp_back = true;
var gm_local = false;
var t_c = 0;
var t_b = 0;
var jump_length = 5;
var arrow_rot = {};
var team_origin = false;
var SoundPlayer_yaw = -180;
var select_slot = 0;
var CurrentArmor = {};
var last_PyRpc = {};
var again_item = ["easecation:all_games", "minecraft:emerald"];
var boostSpeed = false;
var AutoBuy_block = false;
var AutoBuy_block_count = 3;
var AutoBuy_sword = false;
var AutoBuy_armor = false;
var AutoBuy_enchant = false;
var RepeatRpc_times = 1;
var entity_keyword = [];
var check_hide = true;
const GROUND_MOTION_Y = -0.07840000092983246;
const JUMP_STRENGTH = 0.41999998688697815;
const AIR_RESISTANCE = 0.91;
const AIR_SPEED = 0.05;
const GROUND_RESISTANCE = 0.6;
const GROUND_SPEED = 0.1;
const ERROR = 1e-7;
let onGround = true;
let resistance = GROUND_RESISTANCE;
let speed = GROUND_SPEED;
var hasBrought = {
  enchant: {
    sharp: 0,
    protect: 0
  },
  armor: 0
};
var edit_suffix = "This is a suffix";
var NoveXare-Cracked_Config = {
  cmd: [],
  binds: {},
  key_binds: []
};
const kill_sound = ["https://attachment.0sm.com/node0/2024/07/86682D1EDB81719D-e524f3745f6c619b.mp3", "https://attachment.0sm.com/node0/2024/07/86682D7831609ED7-4055b200951a5147.mp3", "https://attachment.0sm.com/node0/2024/07/86682D7A81A1906F-cd892d409a750b42.mp3", "https://attachment.0sm.com/node0/2024/07/86682D7C8813F73F-ff10702dfda6616f.mp3", "https://attachment.0sm.com/node0/2024/07/86682D80F096B777-ba851e9a4806f8af.mp3", "https://attachment.0sm.com/node0/2024/07/86682D7E5837BA97-d057eabbc9100ea1.mp3"];
const kill_tip = ["重重一击", "两连击", "三连击", "非常犀利", "无人能挡", "主宰比赛", "迈向超神", "正在暴走", "如神一般", "已经超神"];
var neglect_exclude = false;
var rocker_bhop_heigh = 0.42;
var line_particle_offset = 0;
var line_particle_type = 3;
var line_particle_size = 1;
var avoid_remove = false;
var aim_attack_cps = 10;
var aim_t0 = -Infinity;
var aim_t1 = 0;
var Rider_random = false;
var isOpenChest = false;
var Rider_heigh = 1;
var ac_pos = [];
var AttackSwing = true;
var func_mode = {};
var target_list = [];
var white_list = [];
var max_target_num = 3;
var max_distance = 6;
var min_distance = 0;
var includeMob = false;
var includePlayer = true;
var limit_y = 255;
var limit_min_y = 0;
var NoHeigh = false;
var infinite_distance = false;
var check_size = true;
var check_rot = true;
var check_health = true;
var bypass_bjd = true;
var gradual_up = true;
var show_no_intercept = false;
var show_intercept = false;
var whilelist_range = 6;
func_mode.select_mode = 0;
func_mode.nofall_mode = 0;
func_mode.gg_mode = 0;
var surround_particle_heigh = 0;
var surround_particle_length = 0;
var particle_surround_speed = 5;
var bhop_heigh = 0.4;
var KillAura_boost = 1;
var KillAura_max_cps = 10;
var KillAura_min_cps = 10;
var KillAura_Fov = 90;
var KillAura_distance = 4;
var KillAura_infinite = false;
var KillAura_d_1 = 0;
var KillAura_d_2 = -Infinity;
var KillAura_auto_close = true;
var KillAura_crit = false;
var AttackPacket = false;
var bhop_speed = 5;
var record_speed = {};
var record_water = {};
var record_lava = {};
var gm_tick = 0;
var gm_move = false;
var gm_ground = false;
var InfiniteAura_random = false;
var InfiniteAura_packet = 3;
var InfiniteAura_backY = false;
var InfiniteAura_amove = false;
var InfiniteAura_distance = 100;
var InfiniteAura_move = 1;
var InfiniteAura_delay = 1;
var InfiniteAura_repeat = true;
var min_run_heal = 10;
func_mode.low_health_operate_mode = 0;
func_mode.game_mode = 0;
var AssistAim_aim_speed = 20;
var AssistAim_predict = false;
var AssistAim_lock = false;
var AssistAim_silent = false;
var AssistAim_distance = 5;
var AssistAim_Fov = 90;
var AssistAim_random_y = 0;
var AssistAim_random_xz = 0;
const AssistAim_speed = 100;
const AssistAim_gravity = 16;
var AssistAim_test = false;
var AssistAim_throw = false;
var AssistAim_y = 0;
var surround_loop = false;
func_mode.AssistAim_mode = 1;
func_mode.pyrpc_mode = 0;
var LockBehind_length = 3;
var LockBehind_heigh = 2;
var LockBehind_yaw = -180;
var surround_particle_yaw = -180;
var surround_speed = 5;
var SoundPlayer_distance = 5;
var max_drop_item = 36;
var drop_delay = 0;
var drop_delay_t = 0;
var sprint_speed = 5;
var sprint_horizontal = false;
var Trace_min_dis = 5;
var play_pos_list = [];
var Trace_speed = 5;
var team = "NoveXare-Cracked";
var fly_speed = 15;
var fly_run = false;
var fly_mot = true;
var fly_includeY = false;
var fly_up_down = false;
var fly_set_ud = 10;
var fly_ud = 1;
var fly_block = false;
var text = "Lmao";
var chat_keyword = [];
var tip_keyword = ["refresh", "player", "unload", "upload", "vip", "music", "textboard", "scoreboard", "start", "condition"];
var Sucker_dis = 3;
var slowdown_speed = 5;
var KeepDistance_distance = 3;
var KeepDistance_only_ground = false;
var KeepDistance_speed = 5;
var KickAura_times = 500;
var Crasher_times = 500;
var KickAura_multi = true;
var Crasher_multi = true;
var KickAura_for = 50;
var Crasher_for = 50;
func_mode.Crasher_mode = 0;
var Scaffold_length = 1;
var Scaffold_mode = false;
var Scaffold_block = 1;
var block_namespace = "minecraft:wool";
var Scaffold_hyt = false;
var Scaffold_move = false;
var Scaffold_up = false;
var Scaffold_auto_block = false;
var Scaffold_findPath = false;
var HitBox_x = 2;
var HitBox_y = 1.8;
func_mode.cleaner_mode = 0;
func_mode.health_mode = 0;
var blurred_match = false;
var keep_y = false;
var rec_y = 0;
var InfiniteAura_back = true;
var InfiniteAura_switch_delay = 1;
var InfiniteAura_switch_delay_r = 0;
var InfiniteAura_list = [];
var InfiniteAura_target = [];
var InfiniteAura_tick = 2;
var tick = 0;
var move_tick = 0;
var InfiniteAura_num = 1;
var InfiniteAura_num_r = 0;
func_mode.InfiniteAura_mode = 4;
func_mode.server_mode = 1;
func_mode.FakeLag_mode = 0;
func_mode.hyt_mode = 0;
func_mode.draw_mode = 0;
var InfiniteAura_backPos = null;
var InfiniteAura_backMotion = null;
func_mode.fly_mode = 0;
func_mode.sprint_mode = 0;
var CPvP = false;
func_mode.cpvp_mode = 0;
var throw_wall = false;
var fly_only_fly = false;
var longjump_x = 5;
var longjump_y = 0.5;
var lagback_pos = [];
var lagback_run = false;
var lagback_y = 0.8;
var lagback_derp = false;
var circulateSender = false;
var RepeatRpc_ticks = 1;
var CustomKB_x = 1;
var CustomKB_y = 0.5;
var packet_send = true;
var packet_receive = false;
var packet_tip = false;
var packet_record = false;
var show_pyrpc_id = true;
var content = "NoveXare-Cracked YYDS";
var Spammer_delay = 1;
var Spammer_random = false;
var Spammer_num = 1;
var text_d_2 = -Infinity;
var text_d_1 = 0;
var bed_list = [];
var surround_all = true;
var body_rot_speed = 5;
var head_rot_speed = 5;
var head_rot = false;
var body_rot = false;
var lock_head = false;
var random_num = 0;
var random_delay = 0;
var random_rot = false;
var regex_enable = true;
var rush_length = 5;
var bjd_jump = false;
var up_down_speed = 1;
var max_mot_y = 0.42;
var build_distance = 4;
var build_tick = 10;
var build_t = 0;
var build_list = [];
var build_success = true;
var save_to_file = false;
var move_fly = false;
var FightBot_imitateMove = false;
var gm_y = 0;
var gm_cycle = 1;
var gm_delay = 0;
var gm_xz = false;
var gm_count = 5;
func_mode.GodMode_mode = 0;
var rocker_speed = 8;
var rocker_bhop = false;
var rocker_ahop = false;
var imitateMove = false;
var imitateMove = false;
func_mode.rocker_mode = 0;
func_mode.move_mode = 0;
func_mode.LookTP_mode = 0;
func_mode.surround_mode = 0;
var use_times = 1;
var select_t = 0;
var break_bed = true;
var break_chest = true;
var through_wall = true;
var autosave_fake_block = false;
var autosave_near_block = false;
var attack_particle_size = 20;
var particle_size = 1;
var attack_particle_type = 3;
var surround_particle_type = 19;
var surround_particle_size = 1;
func_mode.freecam_mode = 0;
var only_walk = 0;
var destroy_size = 1;
var SelectBomb = false;
var SelectCrystal = false;
var excludeFeet = false;
var b_excludeFeet = false;
var death_pos = {};
var show_cps = true;
var isBedbuild = false;
var bomb_delay = 1;
var crystal_delay = 1;
var crystal_acount = 1;
var bow_speed = 0.5;
var CrystalAura_distance = 3;
var arrow_particle_type = 12;
var drop_motion = 1.3;
var CrystalTP = false;
func_mode.avoid_mode = 0;
var avoid_distance = 5;
var current_mine_num = 0;
var mine_num = 20;
var mine_distance = 5;
var steal_delay = 0.5;
var click_mode = false;
var InfiniteAura_click = true;
var InfiniteAura_backclick = true;
var InfiniteAura_yoffset = 0;
var Scaffold_origin_block = false;
var FightBot_distance = 4;
var FightBot_speed = 5;
var FightBot_pot_health = 0;
var FightBot_jump = false;
var FightBot_KillAura = true;
var FightBot_aimbot = false;
var FightBot_KeepDistance = false;
var FightBot_combo = false;
var FightBot_height = 0.38;
var FightBot_Scaffold = false;
var FightBot_autochest = false;
var attack_sound_type = 81;
var SoundPlayer_type = 81;
var attack_sound_level = 0;
var SoundPlayer_level = 0;
var FightBot_jump_rate = 33;
var FightBot_move_rate = 33;
var FightBot_fishhook_rate = 0;
var FightBot_snowball_rate = 0;
var FightBot_random_jump = false;
var FightBot_random_move = false;
var reverse_lag = false;
var back_select = false;
var attack_tick = 0;
var attack_ticks = 0;
var isAttacking = false;
var attack_frequency = 0;
var empty_attack_frequency = 0;
var first_attack_health = 0;
var last_attack_health = Infinity;
var last_attack_target = null;
var show_real_cps = false;
var reverse_target = false;
var jump_strength = 42;
var cleaner_slot = 35;
var AntiKB_resistance_h = 100;
var AntiKB_resistance_v = 100;
var throwable_particle_gravity = 20;
var throwable_particle_speed = 100;
var throwable_particle_length = 200;
var throwable_particle_type = 55;
var throwable_particle_offset = 20;
var throwable_particle_target = true;
var throwable_particle_density = 10;
func_mode.throwable_particle_mode = 0;
var low_health_operate_sword = false;
var check_wall = false;
var check_ground = false;
var check_name = true;
var selectitems = [];
var select_use = false;
var select_delay = 0;
var last_tick_item = {};
var FightBot_autoweapon = false;
var fps_rate = 10;
var freecam_show = false;
var freecam_dis = false;
var targetStrafe = false;
var targetStrafe_distance = 1.5;
var rocker_func = {};
var airjump_func = {};
var flexibleMove_speed = 5;
var targetStrafe_relative = true;
var destroy_up = false;
var destroy_packet = false;
var targetStrafe_range = 180;
func_mode.AntiStaff_mode = 0;
func_mode.anti_mode = 0;
func_mode.fakeTip_mode = 0;
var current_poem = "";
var remark_hex = false;
var tip_t1 = 201;
var BalanceTimer_t = 0;
var BalanceTimer_st = false;
var calculate_t = 0;
var variable_player = false;
var variable_entity = false;
var variable_id = false;
var edit_KickAura = "";
var KickAura_repeat = 50;
var swing_speed = 17;
func_mode.set_time = 0;
var switch_delay = 0;
var switch_delay_t = 0;
var isBinding = null;
var cleaner_bow = false;
var da_bow = false;
var action_times = 1;
var edit_action_id = 0;
var action_ticks = 0;
var action_tick = 0;
var use_action_config = false;
var KillAura = false;
var auto_target = true;
var FuncTip = true;
var Bhop = false;
var Velocity = false;
var AutoDo = false;
var ClickTarget = false;
var ClickWhiteList = false;
var NoLiquid = false;
var ShowTargetList = false;
var Rider = false;
var ShowInfo = true;
var show_pos = false;
var show_item = true;
var show_speed = false;
var Jesus = false;
var lock_target = false;
var Teams = false;
var team_origin = false;
var AssistAim = false;
var click_team = false;
var LockBehind = false;
var Surround = false;
var JetPack = false;
var Trace = false;
var Suspend = false;
var InfiniteAura = false;
var GodMode = false;
var Fly = false;
var SafeWalk = false;
var KillMessage = false;
var Sucker = false;
var Scaffold = false;
var SlowDown = false;
var AirJump = false;
var KeepDistance = false;
var Crasher = false;
var HitBox = false;
var auto_attack = false;
var disabler = false;
var Cleaner = false;
var LongJump = false;
var AntiVoid = false;
var CustomKB = false;
var SmartWeapon = false;
var PyRpcManager = false;
var Spammer = false;
var Derp = false;
var AttackSelf = false;
var RandomLock = false;
var ResShop = false;
var AntiTouch = false;
var get_bed_pos = false;
var AutoSave = false;
var FastBuild = false;
var RecordInfo = false;
var NoFall = false;
var Rocker = false;
var ShowHurt = true;
var Breaker = false;
var BlockIn = false;
var FreeCam = false;
var auto_bed = false;
var TargetParticle = false;
var SurroundParticle = false;
var BetterJump = false;
var ClickDestroy = false;
var AutoDestroy = false;
var AutoCrystal = false;
var AutoBomb = false;
var RemoveItem = false;
var AvoidAttack = false;
var ArrowTracer = false;
var ArrowFly = false;
var CrystalAura = false;
var ArrowParticle = false;
var RemoveNotPlayer = false;
var RemovePlayer = false;
var FarmAura = false;
var DropRes = false;
var PVPDaLao = false;
var ActivitySender = false;
var ShowClickBlock = false;
var SmartInv = false;
var AttackAim = false;
var FakeLag = false;
var lag_tick = 10;
var DeathInfo = false;
var LocalRespawn = false;
var AttackParticle = false;
var AutoVoid = false;
var Tower = false;
var Hover = false;
var ChestAura = false;
var ShowPressKey = false;
var ShowUpliftKey = false;
var ShowClientMessage = false;
var ShowUI = false;
var ShowCommand = false;
var ShowSendCommand = false;
var show_target_dis = false;
var show_player_list = false;
var WorldPlayerInfo = false;
var show_time = false;
var show_kill_num = false;
var TargetHealth = false;
var show_attack_rate = false;
var show_ping = false;
var RainbowTip = false;
var RandomDrop = false;
var RandomSelect = false;
var OtherUser = false;
var RandomDrop_sword = false;
var sleepaura = false;
var bellaura = false;
var avoid_throw = false;
var Miner = false;
var ChestSteal = false;
var Criticals = false;
var FightBot = false;
var AttackSound = false;
var SoundPlayer = false;
var InteractAura = false;
var ChargeAura = false;
var FPSReducer = false;
var ChatManager = false;
var AvoidInvalid = false;
var RightClicker = false;
var ClickGround = false;
var CheckAxe = false;
var NoPacket = false;
var Blink = false;
var auto_jump = false;
var AntiKB = false;
var TrajectoryRender = false;
var KickAura = false;
var HotbarSelector = false;
var AutoSelect = false;
var AutoArmor = false;
var AutoGG = false;
var LineParticle = false;
var AutoBuy = false;
var FlexibleMove = false;
var AntiStaff = false;
var KeepAir = false;
var FakeBuilder = false;
var ClickBlock = false;
var RainbowWool = false;
var FakeTip = false;
var BalanceTimer = false;
var ShowVariable = false;
var ShowDestroyBlock = false;
var ClickTP = false;
var NightVision = false;
var ModifySwing = false;
var ModifyTime = false;
var ShowGameInfo = false;
var ChunkRender = false;
var ChatSuffix = false;
var FakeMove = false;
var AutoShifter = false;
var Swinger = false;
var Swimmer = false;
var ActionManager = false;
var FunnyKill = false;
var LockGame = false;
var NoDebuff = false;
var ShortList = false;
var max_damage = 0;
var max_armor = [];
var ping = 0;
var ping_1 = 0;
var ping_2 = 0;
var StartArmor = false;
var derp_p_r = 90;
var derp_y_r = -180;
var self_can_see = false;
var mini_tick = 0;
var mini_close = 1;
var mini_delay = 0;
var mini_kills = 0;
globalThis.onTickEvent = function () {
  if (disabler) {
    return;
  }
  var message = [];
  self_id = getUserID(other_user);
  self_pos = getEntityPos(self_id);
  const _0x393114 = getEntityAttribute(self_id, "minecraft:health");
  if (_0x393114.current - last_tick_heal > 10) {
    if (DeathInfo) {
      clientMessage(string_format("§3§l[NoveXare-Cracked] §r§7>>> §rTip §7>>>§r You are Dead - DeathPos: {}, {}, {}", Math.round(death_pos.x), Math.round(death_pos.y), Math.round(death_pos.z)));
    }
    if (LocalRespawn) {
      setPos(death_pos.x, death_pos.y, death_pos.z);
    }
    if (LocalRespawn) {
      setMotion(0, 0, 0);
    }
  } else if (_0x393114.current < last_tick_heal) {
    death_pos = self_pos;
  }
  var _0x3ac20f = getEntityMotion(self_id);
  var _0x288038 = getEntityRot(self_id);
  var _0x4848ae = getDistance(self_pos, last_tick_pos) / 0.05;
  var _0x4e47fd = getHorizontalDistance(self_pos, last_tick_pos) / 0.05;
  var _0x1f7d5d = getSpeed(self_id);
  var _0x337a3f = getPlayerBlockPos(self_id);
  var _0x8b9ec3 = getEntityCarriedItem(self_id);
  var _0x46ac41 = getEntityIsGround(self_id);
  if (_0x393114.current < last_tick_heal) {
    last_tick_heal = _0x393114.current;
  }
  var _0xf949 = getWorldPlayerID();
  max_damage = getEntityMaxDamage(self_id);
  max_armor = [getEntityMaxArmor(self_id, "helmet"), getEntityMaxArmor(self_id, "chestplate"), getEntityMaxArmor(self_id, "leggings"), getEntityMaxArmor(self_id, "boots")];
  if (calculate_t > 20) {
    ping_1 = Date.now();
    curl_get("https://www.baidu.com", {}, (_0x1668fc, _0x581611) => globalThis.ping_2 = Date.now());
    ping = Math.abs(ping_2 - ping_1);
    calculate_t = 0;
  }
  if (NoDebuff) {
    debuff.map(_0x5dbf63 => removeEntityEffect(self_id, _0x5dbf63));
  }
  if (ChunkRender) {
    var _0x3a8835 = {};
    _0x3a8835.x = Math.floor(self_pos.x / 16);
    _0x3a8835.z = Math.floor(self_pos.z / 16);
    let _0x5e949c = _0x3a8835;
    var _0x373fde = {
      x: _0x5e949c.x * 16,
      z: _0x5e949c.z * 16
    };
    let _0x2fe697 = _0x373fde;
    var _0x94315d = {
      x: (_0x5e949c.x + 1) * 16,
      z: (_0x5e949c.z + 1) * 16
    };
    let _0xc15fc9 = _0x94315d;
    for (let _0x57b1fd = 0; _0x57b1fd < 16; _0x57b1fd++) {
      drawParticle(55, _0x2fe697.x + _0x57b1fd, self_pos.y, _0x2fe697.z, 1);
    }
    for (let _0x339f22 = 0; _0x339f22 < 16; _0x339f22++) {
      drawParticle(55, _0x2fe697.x, self_pos.y, _0x2fe697.z + _0x339f22, 1);
    }
    for (let _0x50d011 = 0; _0x50d011 < 16; _0x50d011++) {
      drawParticle(55, _0xc15fc9.x - _0x50d011, self_pos.y, _0xc15fc9.z, 1);
    }
    for (let _0x83aada = 0; _0x83aada < 16; _0x83aada++) {
      drawParticle(55, _0xc15fc9.x, self_pos.y, _0xc15fc9.z - _0x83aada, 1);
    }
    message.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "区块坐标: " + _0x5e949c.x + "， " + _0x5e949c.z);
  }
  if (auto_target && (!lock_target || !findEntity(target_list[0])) && switch_delay_t > switch_delay) {
    if (target_list.length > 0) {
      let _0x3baeca = getEntityAttribute(target_list[0], "minecraft:health");
      if (_0x3baeca.current <= 0 && findEntity(target_list[0])) {
        if (KillMessage) {
          sendChatMessage(text);
        }
        if (FuncTip) {
          clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Killed A Target §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + target_name);
        }
        kills++;
        target_list.splice(0, 1);
        mini_tick = 0;
        if (FunnyKill && mini_kills < 10) {
          mini_kills++;
        }
        thread(() => {
          if (FunnyKill && mini_kills > 0) {
            loadSound(kill_sound[mini_kills > 6 ? 5 : mini_kills - 1], mini_close * 1000);
          }
          if (FunnyKill && mini_kills > 0 && mini_title) {
            setTitle(kill_tip[mini_kills - 1]);
          }
        }, mini_delay * 1000);
      } else {
        target_name = getEntityName(target_list[0]);
      }
    }
    target_list = getTargets(self_id, max_distance, max_target_num);
    switch_delay_t = 0;
  }
  if (KeepAir && _0x393114.current < 5 && _0x3ac20f.y < -0.0784 && _0x46ac41) {
    setPos(self_pos.x, self_pos.y, self_pos.z);
  }
  if (AutoGG) {
    for (let _0x17c3a5 of again_item) {
      if (func_mode.gg_mode == 0) {
        dropPlayerInventorySlot(self_id, getItem(self_id, _0x17c3a5, -1, "一局"));
      }
      if (func_mode.gg_mode == 1) {
        selectPlayerInventorySlot(self_id, getItem(self_id, _0x17c3a5, -1, "一局"));
        const _0x390952 = getEntityCarriedItem(self_id);
        if (_0x390952.name.includes("一局")) {
          useItem();
        }
      }
    }
  }
  if (ClickGround) {
    buildBlock(self_id, _0x337a3f.x, _0x337a3f.y - 1, _0x337a3f.z, 1);
  }
  if (AutoBuy && tickCounter > 10) {
    var _0x1c7357 = {};
    _0x1c7357.gold = getItemCount(-1, "minecraft:gold_ingot");
    _0x1c7357.iron = getItemCount(-1, "minecraft:iron_ingot");
    _0x1c7357.diamond = getItemCount(-1, "minecraft:diamond");
    _0x1c7357.emerald = getItemCount(-1, "minecraft:emerald");
    _0x1c7357.star = getItemCount(-1, "minecraft:nether_star");
    var _0x45b0c6 = _0x1c7357;
    const _0x10f55c = (_0x2d2f15, _0x396bb5, _0x39ce36) => {
      HYTShopMod(..._0x2d2f15);
      BJD_NBedwarsBuyItemEvent(..._0x396bb5);
      var _0x4b6c74 = {};
      _0x4b6c74.gold = getItemCount(-1, "minecraft:gold_ingot");
      _0x4b6c74.iron = getItemCount(-1, "minecraft:iron_ingot");
      _0x4b6c74.diamond = getItemCount(-1, "minecraft:diamond");
      _0x4b6c74.emerald = getItemCount(-1, "minecraft:emerald");
      _0x4b6c74.star = getItemCount(-1, "minecraft:nether_star");
      _0x45b0c6 = _0x4b6c74;
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + _0x39ce36);
      }
    };
    if (AutoBuy_sword) {
      if (max_damage < 8 && _0x45b0c6.diamond >= 6) {
        _0x10f55c(["2", "3"], ["剑", 2], "自动购买钻石剑");
        max_damage = getEntityMaxDamage(self_id);
      } else if (max_damage < 8 && _0x45b0c6.emerald >= 6) {
        _0x10f55c([], ["剑", 2], "自动购买钻石剑");
        max_damage = getEntityMaxDamage(self_id);
      } else if (max_damage < 7 && _0x45b0c6.gold >= 7) {
        _0x10f55c(["2", "2"], ["剑", 1], "自动购买铁剑");
        max_damage = getEntityMaxDamage(self_id);
      } else if (max_damage < 5 && _0x45b0c6.iron >= 10) {
        _0x10f55c(["2", "1"], ["剑", 0], "自动购买石剑");
        max_damage = getEntityMaxDamage(self_id);
      }
    }
    if (AutoBuy_block && getItemCount(-1, "minecraft:wool") < AutoBuy_block_count * 16 && _0x45b0c6.iron >= 4) {
      _0x10f55c(["1", "1"], ["方块", 0], "自动购买方块");
    }
    if (AutoBuy_armor) {
      if (hasBrought.armor <= 2 && _0x45b0c6.diamond >= 8) {
        _0x10f55c(["3", "3"], [], "自动购买钻套");
        hasBrought.armor = 3;
      } else if (hasBrought.armor <= 1 && _0x45b0c6.emerald >= 6) {
        _0x10f55c([], ["装备", 2], "自动购买钻套");
        hasBrought.armor = 2;
      } else if (hasBrought.armor <= 1 && _0x45b0c6.gold >= 12) {
        _0x10f55c(["3", "2"], ["装备", 1], "自动购买铁套");
        hasBrought.armor = 2;
      } else if (hasBrought.armor <= 0 && _0x45b0c6.iron >= 35) {
        _0x10f55c(["3", "1"], [], "自动购买锁链套");
        hasBrought.armor = 1;
      } else if (hasBrought.armor <= 0 && _0x45b0c6.iron >= 24) {
        _0x10f55c([], ["装备", 0], "自动购买锁链套");
        hasBrought.armor = 1;
      }
    }
    if (AutoBuy_enchant) {
      if (hasBrought.enchant.sharp <= 1 && _0x45b0c6.star >= 10) {
        _0x10f55c(["8", "1"], [], "自动升级锋利2");
        hasBrought.enchant.sharp = 2;
      } else if (hasBrought.enchant.protect <= 1 && _0x45b0c6.star >= 10) {
        _0x10f55c(["8", "2"], [], "自动升级保护2");
        hasBrought.enchant.protect = 2;
      } else if (hasBrought.enchant.sharp <= 0 && _0x45b0c6.star >= 6) {
        _0x10f55c(["8", "1"], [], "自动升级锋利1");
        hasBrought.enchant.sharp = 1;
      } else if (hasBrought.enchant.protect <= 0 && _0x45b0c6.star >= 6) {
        _0x10f55c(["8", "2"], [], "自动升级保护1");
        hasBrought.enchant.protect = 1;
      }
    }
    tickCounter = 0;
  }
  if (goto_pos != null) {
    const _0x44853b = getHorizontalDistance(self_pos, goto_pos);
    const _0x39176a = getDistance(self_pos, goto_pos);
    if (_0x39176a >= 5) {
      if (_0x44853b >= 1) {
        let _0x32872a = getPlayerAngle(self_id, goto_pos, "yaw_pos");
        var _0xf55f69 = {
          yaw: _0x32872a,
          pitch: 0
        };
        let _0x86527b = getDisplacement(-1.5, self_pos, _0xf55f69);
        setPos(_0x86527b.x, self_pos.y, _0x86527b.z);
      } else {
        let _0x528d54 = -getPlayerAngle(self_id, goto_pos, "pitch_pos");
        var _0x1263ff = {
          yaw: 0,
          pitch: _0x528d54
        };
        let _0x14d89f = getDisplacement(-3, self_pos, _0x1263ff);
        setPos(self_pos.x, _0x14d89f.y, self_pos.z);
      }
    } else {
      goto_pos = null;
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "已设置到达目的地");
      }
    }
  }
  if (ChestAura) {
    const _0x2fe234 = getPlayerBlockPos(self_id);
    for (let _0x45e78d = -2; _0x45e78d < 3; _0x45e78d++) {
      for (let _0x1a3ded = -2; _0x1a3ded < 3; _0x1a3ded++) {
        for (let _0x2cb949 = -2; _0x2cb949 < 3; _0x2cb949++) {
          const _0x1e2c24 = getBlock(_0x2fe234.x + _0x45e78d, _0x2fe234.y + _0x1a3ded, _0x2fe234.z + _0x2cb949);
          const _0x15f10b = obj2str([_0x2fe234.x + _0x45e78d, _0x2fe234.y + _0x1a3ded, _0x2fe234.z + _0x2cb949]);
          if (_0x1e2c24.namespace == "minecraft:chest" && !chest_pos.includes(_0x15f10b) && !isOpenChest) {
            buildBlock(self_id, _0x2fe234.x + _0x45e78d, _0x2fe234.y + _0x1a3ded, _0x2fe234.z + _0x2cb949, 0);
            chest_pos.push(_0x15f10b);
          }
        }
      }
    }
  }
  if (AntiStaff) {
    _0xf949.map(_0x569bf4 => {
      let _0x178e88 = getEntityName(_0x569bf4);
      if (_0x569bf4 != self_id && _0x178e88 != "" && hasItem(self_id, "sword")) {
        let _0x31be90 = false;
        if (func_mode.AntiStaff_mode == 0 && (!_0x178e88.includes("§") || !_0x178e88.includes("[") || !_0x178e88.includes("]")) && !_0x178e88.includes("锭") && !_0x178e88 == "村民") {
          _0x31be90 = true;
        }
        if (func_mode.AntiStaff_mode == 1 && (_0x178e88.includes("管") && _0x178e88.includes("理") && _0x178e88.includes("员") || _0x178e88.includes("管理员"))) {
          _0x31be90 = true;
        }
        if (func_mode.AntiStaff_mode == 2 && getEntityFlag(_0x569bf4, 5)) {
          _0x31be90 = true;
        }
        if (func_mode.AntiStaff_mode == 3) {
          const _0x44e46e = JSON.parse(readFile(NoveXare-Cracked_path + "/Staff.json"));
          _0x44e46e.map(_0x3da480 => {
            if (_0x3da480.match_mode == "精准" && _0x3da480.has_mode == "存在" && _0x3da480.texts.some(_0x141a52 => _0x178e88 == _0x141a52)) {
              _0x31be90 = true;
            }
            if (_0x3da480.match_mode == "精准" && _0x3da480.has_mode == "同时" && _0x3da480.texts.every(_0x3ff29b => _0x178e88 == _0x3ff29b)) {
              _0x31be90 = true;
            }
            if (_0x3da480.match_mode == "模糊" && _0x3da480.has_mode == "存在" && _0x3da480.texts.some(_0x4c30ec => _0x178e88.includes(_0x4c30ec))) {
              _0x31be90 = true;
            }
            if (_0x3da480.match_mode == "精准" && _0x3da480.has_mode == "存在" && _0x3da480.texts.every(_0x247028 => _0x178e88.includes(_0x247028))) {
              _0x31be90 = true;
            }
          });
        }
        if (_0x31be90) {
          if (func_mode.anti_mode == 0) {
            clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "可能存在协管: " + _0x178e88);
          } else if (func_mode.anti_mode == 1) {
            executeCommand("/hub");
          } else if (func_mode.anti_mode == 2) {
            executeCommand("/again");
          } else if (func_mode.anti_mode == 3) {
            message.push("Tip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "可能存在协管: " + _0x178e88);
          }
        }
      }
    });
  }
  if (InteractAura) {
    target_list.map(_0x281ca5 => interactEntity(_0x281ca5));
  }
  var _0x4ab20b = {
    gameType: func_mode.game_mode
  };
  if (LockGame) {
    setWorldData(_0x4ab20b);
  }
  if (Tower && _0x288038.pitch < -80) {
    const _0xcc29ab = getEntityCarriedItem(self_id);
    if (_0xcc29ab.namespace != "minecraft:air") {
      setMotion(0, 0.2, 0);
      const _0x3ca79e = getBlock(_0x337a3f.x, _0x337a3f.y - 1, _0x337a3f.z);
      if (_0x3ca79e.namespace == "minecraft:air") {
        HYTBuild(_0x337a3f.x, _0x337a3f.y - 1, _0x337a3f.z);
      }
    }
  }
  if (ShowVariable) {
    if (variable_player && last_world_player.length != _0xf949.length) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "玩家数量发生变化 " + last_world_player.length + " => " + _0xf949.length);
      last_world_player = _0xf949;
    }
    if (variable_id && self_id != last_tick_id) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "玩家本地ID发生变化 " + last_tick_id + " => " + self_id);
    }
  }
  if (CheckAxe) {
    const _0x3007cd = _0xf949;
    var _0x20764d = [];
    _0x3007cd.map(_0x14527e => {
      if (getItem(_0x14527e, "golden_axe")) {
        _0x20764d.push(getEntityName(_0x14527e));
      }
    });
    if (_0x20764d.length > 0) {
      message.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "下列玩家背包可能存在秒人斧:" + obj2str(_0x20764d));
    }
  }
  if (WorldPlayerInfo && last_world_player.length != _0xf949.length) {
    const _0x266647 = subtraction(last_world_player, _0xf949);
    const _0x341c06 = _0x266647.map(_0x44f756 => getEntityName(_0x44f756));
    if (last_world_player.length < _0xf949.length) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + obj2str(_0x341c06) + "进入了世界");
    }
    if (last_world_player.length > _0xf949.length) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + obj2str(_0x341c06) + "离开了世界");
    }
    last_world_player = _0xf949;
  }
  if (DropRes && _0x3ac20f.y < -drop_motion) {
    for (index = 0; index < 36; index++) {
      const _0x20c6a6 = getPlayerInventoryItem(self_id, index);
      if (resList.includes(_0x20c6a6.namespace)) {
        dropPlayerInventorySlot(self_id, index);
      }
    }
  }
  if (AttackAim) {
    const _0xdddcd6 = getEntityList();
    if (aim_t1 - aim_t0 > Math.round(1000 / aim_attack_cps) - 50) {
      _0xdddcd6.map(_0x3abfef => {
        if (isAimed(self_id, _0x3abfef, 15, 0)) {
          attack(_0x3abfef, AttackSwing);
        }
      });
      aim_t0 = aim_t1;
    }
    aim_t1 = Date.now();
  }
  if (HotbarSelector) {
    let _0x3d43bf = getPlayerInventoryItem(self_id, select_slot);
    if (selectitems.includes(_0x3d43bf.name) || selectitems.includes(_0x3d43bf.namespace) || selectitems.length == 0) {
      selectPlayerInventorySlot(self_id, select_slot);
      const _0x44384c = getEntityCarriedItem(self_id);
      if (select_use && !_0x44384c.namespace.includes("air")) {
        useItem();
      }
    }
  }
  if (SmartInv && (!da_bow || _0x288038.pitch > 80)) {
    const _0x5d3156 = ["helmet", "chestplate", "leggings", "boots"];
    const _0x4fdddd = [max_armor[0], max_armor[1], max_armor[2], max_armor[3]];
    for (let _0x209644 = 35; _0x209644 > -1; _0x209644--) {
      const _0x1f78ac = getItemType(self_id, _0x209644);
      if (_0x1f78ac === "other") {
        continue;
      }
      const _0x311936 = getItemCount(_0x209644);
      const _0x116009 = getItemDamage(self_id, _0x209644);
      const _0x1b536e = getItemArmor(self_id, _0x209644);
      if ((_0x1f78ac === "sword" || _0x1f78ac === "axe" || _0x1f78ac === "pickaxe") && (_0x116009 < max_damage || _0x311936 > 1)) {
        dropPlayerInventorySlot(self_id, _0x209644);
      }
      const _0x4f0b33 = _0x5d3156.indexOf(_0x1f78ac);
      if (_0x4f0b33 !== -1 && (_0x1b536e < _0x4fdddd[_0x4f0b33] || _0x311936 > 1)) {
        dropPlayerInventorySlot(self_id, _0x209644);
      }
    }
  }
  if (AutoArmor) {
    let _0x419118 = getItemType(self_id, armor_slot);
    if (_0x419118 != "other") {
      if (_0x419118 == "helmet" && (CurrentArmor.helmet == undefined || getItemArmor(self_id, armor_slot) > getItemArmor(self_id, -1, CurrentArmor[_0x419118]))) {
        useArmor(armor_slot);
      }
      if (_0x419118 == "chestplate" && (CurrentArmor.chestplate == undefined || getItemArmor(self_id, armor_slot) > getItemArmor(self_id, -1, CurrentArmor[_0x419118]))) {
        useArmor(armor_slot);
      }
      if (_0x419118 == "leggings" && (CurrentArmor.leggings == undefined || getItemArmor(self_id, armor_slot) > getItemArmor(self_id, -1, CurrentArmor[_0x419118]))) {
        useArmor(armor_slot);
      }
      if (_0x419118 == "boots" && (CurrentArmor.boots == undefined || getItemArmor(self_id, armor_slot) > getItemArmor(self_id, -1, CurrentArmor[_0x419118]))) {
        useArmor(armor_slot);
      }
    }
  }
  if (RemoveItem) {
    const _0x46f80e = getEntityList();
    _0x46f80e.map(_0x8084b => {
      if (getEntityTypeId(_0x8084b) == 64) {
        removeEntity(_0x8084b);
      }
    });
  }
  if (RemoveNotPlayer) {
    const _0x4c5f2b = getEntityList();
    _0x4c5f2b.map(_0x5622a5 => {
      if (!isPlayer(_0x5622a5)) {
        removeEntity(_0x5622a5);
      }
    });
  }
  if (_0x8b9ec3.count <= 0 && last_tick_item.count > 0 && last_tick_item.id != 0 && AutoSelect) {
    for (let _0x2f66c2 = 8; _0x2f66c2 >= 0; _0x2f66c2--) {
      let _0xbfaa47 = getPlayerInventoryItem(self_id, _0x2f66c2);
      if (_0xbfaa47.namespace == last_tick_item.namespace) {
        selectPlayerInventorySlot(self_id, _0x2f66c2);
      }
    }
  }
  if (FreeCam && freecam_pos != {}) {
    if (freecam_show) {
      for (let _0x19773d = 0; _0x19773d <= 18; _0x19773d += 2) {
        drawParticle(55, freecam_pos.x, freecam_pos.y - 1.53 + _0x19773d / 10, freecam_pos.z, 1);
      }
      message.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "本体坐标: " + string_format("[X:{}, Y:{}, Z:{}]", freecam_pos.x.toFixed(2), freecam_pos.y.toFixed(2), freecam_pos.z.toFixed(2)));
    }
    if (freecam_dis) {
      message.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "本体距离:" + getDistance(self_pos, freecam_pos).toFixed(2) + "m");
    }
  }
  if (FakeMove && fakemove_pos != {}) {
    for (let _0x21853a = 0; _0x21853a <= 18; _0x21853a += 2) {
      drawParticle(55, fakemove_pos.x, fakemove_pos.y - 1.53 + _0x21853a / 10, fakemove_pos.z, 1);
    }
    message.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "本体坐标: " + string_format("[X:{}, Y:{}, Z:{}]", fakemove_pos.x.toFixed(2), fakemove_pos.y.toFixed(2), fakemove_pos.z.toFixed(2)));
    message.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "本体距离:" + getDistance(self_pos, fakemove_pos).toFixed(2) + "m");
  }
  if (RemovePlayer) {
    const _0x4f2e2b = getPlayerList();
    _0x4f2e2b.map(_0x2073d8 => {
      if (_0x2073d8 != self_id) {
        removeEntity(_0x2073d8);
      }
    });
  }
  if (ArrowTracer) {
    const _0x2c986b = getEntityList();
    _0x2c986b.map(_0x24d371 => {
      if (getEntityTypeId(_0x24d371) == 12582992 && target_list.length > 0) {
        const _0x412efd = getEntityPos(target_list[0]);
        let _0x2f63b4 = getPlayerAngle(_0x412efd, getEntityPos(_0x24d371), "yaw_pos");
        let _0xeb2dfa = getPlayerAngle(_0x412efd, getEntityPos(_0x24d371), "pitch_pos");
        const _0x400e47 = getEntityPos(_0x24d371);
        var _0x262ec5 = {
          yaw: _0x2f63b4,
          pitch: _0xeb2dfa
        };
        const _0x34d4f3 = getDisplacement(bow_speed, _0x400e47, _0x262ec5);
        setEntityMotion(_0x24d371, _0x34d4f3.x - _0x400e47.x, _0x34d4f3.y - _0x400e47.y, _0x34d4f3.z - _0x400e47.z);
      }
    });
    if (target_list.length > 0) {
      message.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "LockedTarget:" + getEntityName(target_list[0]));
    }
  }
  if (ArrowFly) {
    const _0x2b1754 = getEntityList();
    _0x2b1754.map(_0x59c957 => {
      if (getEntityTypeId(_0x59c957) == 12582992) {
        const _0x4b0948 = getEntityPos(_0x59c957);
        if (arrow_rot[_0x59c957] == undefined) {
          arrow_rot[_0x59c957] = _0x288038;
        }
        const _0x42cd0d = arrow_rot[_0x59c957].yaw;
        const _0x1387c5 = arrow_rot[_0x59c957].pitch;
        var _0x203f0e = {
          yaw: _0x42cd0d,
          pitch: _0x1387c5
        };
        const _0xf29c44 = getDisplacement(1, _0x4b0948, _0x203f0e);
        setEntityMotion(_0x59c957, _0xf29c44.x - _0x4b0948.x, _0xf29c44.y - _0x4b0948.y, _0xf29c44.z - _0x4b0948.z);
      }
    });
  }
  if (FPSReducer) {
    for (let _0x27090d = 0; _0x27090d < fps_rate * 10; _0x27090d++) {
      for (let _0x19ef3c = 0; _0x19ef3c < fps_rate * 5; _0x19ef3c++) {
        log(_0x27090d + _0x19ef3c);
      }
    }
  }
  if (ArrowParticle) {
    const _0x23fd88 = getEntityList();
    _0x23fd88.map(_0x367a17 => {
      if (getEntityNamespace(_0x367a17) == "minecraft:arrow") {
        const _0x97fd5f = getEntityPos(_0x367a17);
        drawParticle(arrow_particle_type, _0x97fd5f.x, _0x97fd5f.y, _0x97fd5f.z, 3);
      }
    });
  }
  if (FightBot && target_list.length > 0) {
    let _0xabc16f = getEntityPos(target_list[0]);
    let _0xbc4f2e = {};
    if (FightBot_autochest && getPlayerItemCount(self_id) == 0) {
      const _0x299558 = getPlayerBlockPos(self_id);
      for (let _0x51464e = -2; _0x51464e < 3; _0x51464e++) {
        for (let _0x4d3cc6 = -2; _0x4d3cc6 < 3; _0x4d3cc6++) {
          for (let _0x3b1071 = -2; _0x3b1071 < 3; _0x3b1071++) {
            const _0x54a099 = getBlock(_0x299558.x + _0x51464e, _0x299558.y + _0x4d3cc6, _0x299558.z + _0x3b1071);
            const _0x57c047 = obj2str([_0x299558.x + _0x51464e, _0x299558.y + _0x4d3cc6, _0x299558.z + _0x3b1071]);
            if (_0x54a099.namespace == "minecraft:chest" && !chest_pos.includes(_0x57c047)) {
              var _0x3ecb73 = {
                x: _0x299558.x + _0x51464e,
                y: _0x299558.y + _0x4d3cc6,
                z: _0x299558.z + _0x3b1071
              };
              _0xbc4f2e = _0x3ecb73;
              if (getHorizontalDistance(self_pos, _0xbc4f2e) < FightBot_distance / 2) {
                chest_pos.push(_0x57c047);
              }
              break;
            }
          }
        }
      }
    }
    const _0x203362 = (_0x46ac41 ? -0.278 : -0.293) - FightBot_speed * Number(!FightBot_imitateMove) / 5;
    const _0x3cad49 = getEntityCarriedItem(self_id);
    if (FightBot_random_move && getRandomNum(0, 100) < FightBot_move_rate) {
      var _0x124c3e = {};
      _0x124c3e.yaw = getRandomNum(0, 1) ? 90 : -90;
      _0x124c3e.pitch = 0;
      _0xabc16f = getDisplacement(_0x203362, _0xabc16f, _0x124c3e);
    }
    let _0x584941 = getPlayerAngle(self_id, _0xabc16f, "yaw_pos");
    var _0x230a6f = {
      yaw: _0x584941,
      pitch: 0
    };
    let _0x314632 = getDisplacement(_0x203362, getEntityPos(self_id), _0x230a6f);
    if (_0x393114.current < FightBot_pot_health) {
      if (_0x3cad49.namespace !== "minecraft:splash_potion" || _0x3cad49.aux !== 22) {
        selectPlayerInventorySlot(self_id, getItem(self_id, "splash_potion", 22));
      } else {
        setLocalPlayerTurn(-90, 0);
        if (_0x3cad49.namespace.includes("splash_potion")) {
          // TOLOOK
          // TOLOOK
          setTimeout(() => useItem(), 75);
        }
      }
    }
    const _0x43e7d7 = getHorizontalDistanceByID(self_id, target_list[0]);
    if (_0xbc4f2e == {}) {
      if (_0x43e7d7 > FightBot_distance) {
        if (_0x46ac41) {
          setEntityMotion(self_id, _0x314632.x - self_pos.x, (FightBot_jump || getRandomNum(0, 100) < FightBot_jump_rate && FightBot_random_jump) && _0x3ac20f.y > -0.0785 && _0x3ac20f.y < -0.0783 ? FightBot_height : _0x3ac20f.y, _0x314632.z - self_pos.z);
        }
        KillAura = false;
        KeepDistance = false;
        if (FightBot_Scaffold) {
          Scaffold = true;
        }
        if (Scaffold && keep_y) {
          rec_y = 0;
        }
        if (getRandomNum(0, 100) < FightBot_fishhook_rate && isAimed(self_id, target_list[0], 20, 0) && _0x43e7d7 < FightBot_distance * 3) {
          selectPlayerInventorySlot(self_id, getItem(self_id, "fishing_rod"));
          if (_0x3cad49.namespace.includes("fishing_rod")) {
            useItem();
          }
        }
      } else {
        if (getRandomNum(0, 100) < FightBot_snowball_rate && isAimed(self_id, target_list[0], 20, 0)) {
          selectPlayerInventorySlot(self_id, getItem(self_id, "snowball"));
          if (_0x3cad49.namespace.includes("snowball")) {
            useItem();
          }
        }
        if (_0x46ac41) {
          setEntityMotion(self_id, FightBot_random_move && getRandomNum(0, 100) < FightBot_move_rate ? _0x314632.x - self_pos.x : _0x3ac20f.x, FightBot_combo && !getEntityIsGround(target_list[0]) ? FightBot_height : _0x3ac20f.y, FightBot_random_move && getRandomNum(0, 100) < FightBot_move_rate ? _0x314632.z - self_pos.z : _0x3ac20f.z);
        }
        if (FightBot_autoweapon) {
          selectPlayerInventorySlot(self_id, getItem(self_id, "sword"));
        }
        if (FightBot_KillAura) {
          KillAura = true;
        }
        if (FightBot_KeepDistance) {
          KeepDistance = true;
        }
        if (FightBot_aimbot) {
          AssistAim = true;
        }
        Scaffold = false;
      }
    } else {
      let _0x2ee306 = getPlayerAngle(self_id, _0xbc4f2e, "yaw_pos");
      var _0x4707e5 = {
        yaw: _0x2ee306,
        pitch: 0
      };
      let _0x1d4637 = getDisplacement(_0x203362, getEntityPos(self_id), _0x4707e5);
      if (_0x3ac20f.y > -0.42 && _0x3ac20f.y < 0.42 && _0x46ac41) {
        setEntityMotion(self_id, _0x1d4637.x - self_pos.x, (FightBot_jump || getRandomNum(0, 100) < FightBot_jump_rate && FightBot_random_jump) && _0x3ac20f.y > -0.0785 && _0x3ac20f.y < -0.0783 ? FightBot_height : _0x3ac20f.y, _0x1d4637.z - self_pos.z);
      }
    }
  }
  if (RainbowWool) {
    for (let _0x4b3c7c = -1; _0x4b3c7c <= 2; _0x4b3c7c++) {
      for (let _0x1d856b = -2; _0x1d856b <= 2; _0x1d856b++) {
        setBlock(_0x337a3f.x + _0x4b3c7c, _0x337a3f.y - 1, _0x337a3f.z + _0x1d856b, "wool", getRandomNum(0, 15));
      }
    }
  }
  if (circulateSender && rpc_t > RepeatRpc_ticks) {
    for (let _0x42dcc2 = 0; _0x42dcc2 < RepeatRpc_times; _0x42dcc2++) {
      sendRpc(last_PyRpc.id, last_PyRpc.data);
    }
    rpc_t = 0;
  }
  if (RightClicker) {
    for (let _0xe34e43 = 0; _0xe34e43 < use_times; _0xe34e43++) {
      useItem();
    }
  }
  if (Swimmer) {
    sendPlayerAction({
      id: getLocalPlayerUniqueID(),
      pos: getEntityPos(getLocalPlayerUniqueID()),
      value: 1,
      type: 21
    });
  }
  if (Swinger) {
    sendPlayerAction({
      id: getLocalPlayerUniqueID(),
      pos: getEntityPos(getLocalPlayerUniqueID()),
      value: 1,
      type: 31
    });
  }
  if (AutoShifter && shift_tick_r > shift_tick) {
    for (let _0x20f04a = 0; _0x20f04a < shift_num; _0x20f04a++) {
      sendPlayerAction({
        id: getLocalPlayerUniqueID(),
        pos: getEntityPos(getLocalPlayerUniqueID()),
        value: 1,
        type: 11
      });
    }
    shift_tick_r = 0;
  }
  if (AutoCrystal && target_list.length > 0) {
    const _0x5902eb = getEntityCarriedItem(self_id);
    if (SelectCrystal) {
      selectPlayerInventorySlot(self_id, getItem(self_id, "end_crystal"));
    }
    if (_0x5902eb.namespace == "minecraft:end_crystal" && t_c > crystal_delay) {
      let _0x281a7f = 0;
      target_list.map(_0x542e19 => {
        if (getEntityTypeId(_0x542e19) != 71) {
          let _0x5768b7 = getPlayerBlockPos(_0x542e19);
          if (CrystalTP) {
            setPos(_0x5768b7.x, _0x5768b7.y + 1, _0x5768b7.z);
          }
          for (let _0x3735e6 = -2; _0x3735e6 < 3; _0x3735e6++) {
            for (let _0x3fc0eb = -2; _0x3fc0eb < 3; _0x3fc0eb++) {
              for (let _0x5f2571 = -2; _0x5f2571 < 3; _0x5f2571++) {
                let _0x3535ed = getBlock(_0x5768b7.x + _0x3735e6, _0x5768b7.y + _0x5f2571, _0x5768b7.z + _0x3fc0eb);
                if ((_0x3535ed.namespace == "minecraft:bedrock" || _0x3535ed.namespace == "minecraft:obsidian") && _0x281a7f < crystal_acount) {
                  buildBlock(self_id, _0x5768b7.x + _0x3735e6, _0x5768b7.y + _0x5f2571, _0x5768b7.z + _0x3fc0eb, 1);
                  _0x281a7f += 1;
                }
              }
            }
          }
        }
      });
      t_c = 0;
    } else {
      message.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "请手持水晶");
    }
  }
  if (CrystalAura) {
    const _0x4df5dd = getEntityList();
    _0x4df5dd.map(_0x17ff28 => {
      if (getEntityTypeId(_0x17ff28) == 71 && getDistanceByID(_0x17ff28, target_list[0]) < CrystalAura_distance) {
        attack(_0x17ff28, AttackSwing);
      }
    });
  }
  if (AutoBomb && target_list.length > 0) {
    const _0xf48c58 = getEntityCarriedItem(self_id);
    if (SelectBomb) {
      selectPlayerInventorySlot(self_id, getItem(self_id, "respawn_anchor"));
    }
    if (_0xf48c58.namespace == "minecraft:respawn_anchor" && t_b > bomb_delay) {
      target_list.map(_0x163c05 => {
        let _0x2d8cb9 = getPlayerBlockPos(_0x163c05);
        let _0x2a8638 = getBlock(_0x2d8cb9.x, _0x2d8cb9.y + 2, _0x2d8cb9.z);
        if (_0x2a8638.namespace == "minecraft:air") {
          buildBlock(self_id, _0x2d8cb9.x, _0x2d8cb9.y + 2, _0x2d8cb9.z, 0);
        }
        _0x2a8638 = getBlock(_0x2d8cb9.x, _0x2d8cb9.y + 2, _0x2d8cb9.z);
        if (_0x2a8638.namespace == "minecraft:respawn_anchor") {
          buildBlock(self_id, _0x2d8cb9.x, _0x2d8cb9.y + 2, _0x2d8cb9.z, 0);
        }
      });
      t_b = 0;
    } else {
      message.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "请手持重生锚");
    }
  }
  if (CPvP && target_list.length > 0) {
    target_list.map(_0x28c9d4 => {
      const _0x3433e2 = getPlayerBlockPos(_0x28c9d4);
      let _0x5de78f = [[_0x3433e2.x, _0x3433e2.y + 2, _0x3433e2.z], [_0x3433e2.x + 1, _0x3433e2.y, _0x3433e2.z], [_0x3433e2.x - 1, _0x3433e2.y, _0x3433e2.z], [_0x3433e2.x, _0x3433e2.y, _0x3433e2.z + 1], [_0x3433e2.x, _0x3433e2.y, _0x3433e2.z - 1], [_0x3433e2.x + 1, _0x3433e2.y + 1, _0x3433e2.z], [_0x3433e2.x - 1, _0x3433e2.y + 1, _0x3433e2.z], [_0x3433e2.x, _0x3433e2.y + 1, _0x3433e2.z + 1], [_0x3433e2.x, _0x3433e2.y + 1, _0x3433e2.z - 1]];
      for (_0xa8f5eb of _0x5de78f) {
        let _0x982036 = getBlock(_0xa8f5eb[0], _0xa8f5eb[1], _0xa8f5eb[2]);
        if (_0x982036.namespace == "minecraft:air" && func_mode.cpvp_mode == 1) {
          buildBlock(self_id, _0xa8f5eb[0], _0xa8f5eb[1], _0xa8f5eb[2], 1);
        }
        if (_0x982036.namespace != "minecraft:air" && func_mode.cpvp_mode == 0) {
          destroyBlock(self_id, _0xa8f5eb[0], _0xa8f5eb[1], _0xa8f5eb[2], 1);
        }
      }
    });
  }
  if (KillAura && target_list.length > 0) {
    KillAura_d_1 = Date.now();
    var _0x20764d = [];
    var _0x8f62f9 = getEntityPos(self_id);
    _0x8f62f9.y += 1.53;
    target_list.map(_0xbc4884 => {
      var _0x4539ee = getEntityPos(_0xbc4884);
      _0x4539ee.y += 0.9;
      if ((getDistanceByID(self_id, _0xbc4884) <= KillAura_distance || KillAura_infinite) && isAimed(self_id, _0xbc4884, KillAura_Fov, 0) && noWall(_0x8f62f9, _0x4539ee, !through_wall) && (!KillAura_crit || _0x3ac20f.y < -0.0784)) {
        if (KillAura_d_1 - KillAura_d_2 > 0) {
          for (k = 0; k < KillAura_boost; k++) {
            attack(_0xbc4884, AttackSwing);
          }
          random_num = getRandomNum(KillAura_min_cps, KillAura_max_cps);
          random_delay = Math.round(1000 / random_num);
          KillAura_d_2 = KillAura_d_1 + random_delay;
        }
        _0x20764d.push(getEntityName(_0xbc4884));
      }
    });
    if (FuncTip && _0x20764d.length > 0 && !ShortList) {
      message.push("§rAttack §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + obj2str(_0x20764d));
    }
    if (FuncTip && _0x20764d.length > 0 && ShortList) {
      message.push("§rAttacks §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + _0x20764d.length + "个目标");
    }
    const _0x3d7230 = _0x20764d.length * random_num * KillAura_boost;
    if (show_cps && FuncTip && _0x3d7230 > 0) {
      message.push("§rCPS §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + _0x3d7230 + "/s");
    }
  }
  if (AvoidAttack) {
    setPos(100000, 100000, 100000);
  }
  if (SlowDown && _0x3ac20f.y < -slowdown_speed / 30) {
    setMotion(_0x3ac20f.x, -slowdown_speed / 30, _0x3ac20f.z);
  }
  if (Derp) {
    var _0x12e3a2 = {
      pitch: derp_p_r,
      yaw: derp_y_r
    };
    var _0x14e6cc = {
      id: self_id,
      pos: self_pos,
      mode: 1,
      ground: _0x46ac41,
      rot: _0x12e3a2,
      yHeadRot: derp_p_r
    };
    sendMovePlayer(_0x14e6cc);
    if (self_can_see) {
      setEntityRot(self_id, derp_p_r, derp_y_r);
      setEntityBodyRot(self_id, derp_y_r);
    }
  }
  if (SurroundParticle && (_0x4848ae > 0.5 || !only_walk)) {
    surround_particle_yaw = surround_particle_yaw + particle_surround_speed * 3;
    if (surround_particle_yaw > 180) {
      surround_particle_yaw = -180;
    }
    var _0x5e1d48 = {
      yaw: surround_particle_yaw,
      pitch: 0
    };
    var _0x1e6356 = getDisplacement(surround_particle_length, self_pos, _0x5e1d48);
    drawParticle(surround_particle_type, _0x1e6356.x, _0x1e6356.y - 1.8 + surround_particle_heigh, _0x1e6356.z, surround_particle_size);
  }
  if (tp_list.length > 0) {
    const _0x2f6037 = tp_list.shift();
    buildBlock(self_id, _0x2f6037[0], _0x2f6037[1], _0x2f6037[2], 0);
    setPos(_0x2f6037[0], _0x2f6037[1], _0x2f6037[2]);
    destroyBlock(self_id, _0x2f6037[0], _0x2f6037[1], _0x2f6037[2], 1);
    if (tp_list.length === 1) {
      callModule(35, "{\"value\":false,\"count\":18}");
    }
  }
  if (motion_list.length > 0) {
    const _0x4feb86 = motion_list.shift();
    setMotion(_0x4feb86[0], _0x4feb86[1], _0x4feb86[2]);
  }
  if (Scaffold && Scaffold_origin_block) {
    callModule(18, "{\"value\":" + b2s(_0x8b9ec3.namespace == "minecraft:air") + "}");
  }
  if (Scaffold && !_0x8b9ec3.namespace.includes("spawn") && !_0x8b9ec3.namespace.includes("sword") && !_0x8b9ec3.namespace.includes("pickaxe") && _0x8b9ec3.namespace != "minecraft:air") {
    const _0x345ead = getBlock(_0x337a3f.x, rec_y - 1, _0x337a3f.z);
    if (FuncTip && getItemCount(-1) < 4) {
      message.push("§cWarning §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "手持方块不足!");
    }
    const _0x526ffb = predictEntityPos(getEntityMotion(self_id), getEntityPos(self_id), 5);
    const _0x22839e = Scaffold_move ? getPlayerAngle(_0x526ffb, self_id, "yaw_pos") : _0x288038.yaw;
    const _0x5e3b26 = Scaffold_move ? getPlayerAngle(_0x526ffb, self_id, "pitch_pos") : _0x288038.pitch;
    const _0x265a00 = getEntityCarriedItem(self_id);
    let _0x351f1e = {};
    let _0x128cce = Infinity;
    if (Scaffold_mode && Scaffold_findPath) {
      for (let _0x385f83 = -3; _0x385f83 <= 3; _0x385f83++) {
        for (let _0x5d6330 = -3; _0x5d6330 <= 0; _0x5d6330++) {
          for (let _0x17922e = -3; _0x17922e <= 3; _0x17922e++) {
            let _0x2f818c = Math.sqrt(_0x385f83 * _0x385f83 + _0x17922e * _0x17922e + _0x5d6330 * _0x5d6330);
            var _0x299b97 = {
              x: _0x385f83 + _0x337a3f.x
            };
            _0x299b97.y = Math.floor(rec_y) - 1 + _0x5d6330;
            _0x299b97.z = _0x17922e + _0x337a3f.z;
            let _0x551f98 = _0x299b97;
            const _0xbcff6c = getBlock(_0x551f98.x, _0x551f98.y, _0x551f98.z);
            if (_0xbcff6c.namespace === "minecraft:air") {
              continue;
            }
            if (_0x2f818c < _0x128cce) {
              _0x128cce = _0x2f818c;
              _0x351f1e = _0x551f98;
            }
          }
        }
      }
    }
    if (Scaffold_auto_block && getItemCount(-1) < 4) {
      selectPlayerInventorySlot(self_id, getItem(self_id, block_namespace));
    }
    for (let _0x452eb5 = 0; _0x452eb5 < Scaffold_length; _0x452eb5++) {
      var _0x3b5b53 = {};
      _0x3b5b53.yaw = Math.round(_0x22839e);
      _0x3b5b53.pitch = Scaffold_pitch ? _0x5e3b26 : 0;
      const _0x5994a1 = getDisplacement(_0x452eb5, self_pos, _0x3b5b53);
      rec_y = !keep_y || rec_y === 0 ? Math.floor(_0x5994a1.y) - 1 : rec_y;
      const _0x501eb7 = getBlock(Math.floor(_0x5994a1.x), Math.floor(rec_y) - 1, Math.floor(_0x5994a1.z));
      const _0x18b9cb = getBlock(Math.floor(_0x5994a1.x), Math.floor(rec_y) + 2, Math.floor(_0x5994a1.z));
      if ((_0x501eb7.namespace === "minecraft:air" || _0x501eb7.namespace === "minecraft:water" || _0x501eb7.namespace === "minecraft:lava") && (!Scaffold_up || _0x18b9cb.namespace === "minecraft:air")) {
        if (Scaffold_hyt) {
          callModule(37, "{\"value\":true}");
        }
        if (!Scaffold_mode) {
          buildBlock(self_id, Math.floor(_0x5994a1.x), Math.floor(rec_y) - 1, Math.floor(_0x5994a1.z), 1);
        } else if (Scaffold_findPath && _0x351f1e != {}) {
          var _0x48553c = {};
          _0x48553c.x = Math.floor(_0x5994a1.x);
          _0x48553c.y = Math.floor(rec_y) - 1;
          _0x48553c.z = Math.floor(_0x5994a1.z);
          let _0x44bb6c = _0x48553c;
          let _0x3b99ec = findPath(_0x351f1e, _0x44bb6c);
          _0x3b99ec.forEach(_0x63ae78 => {
            const _0x186c36 = getBlock(Math.round(_0x63ae78.x), Math.round(_0x63ae78.y - 0.3), Math.round(_0x63ae78.z));
            if (_0x186c36.namespace === "minecraft:air") {
              HYTBuild(Math.round(_0x63ae78.x), Math.round(_0x63ae78.y - 0.3), Math.round(_0x63ae78.z));
            }
          });
        } else {
          HYTBuild(Math.floor(_0x5994a1.x), Math.floor(rec_y) - 1, Math.floor(_0x5994a1.z));
        }
        if (Scaffold_up) {
          buildBlock(self_id, Math.floor(_0x5994a1.x), Math.floor(rec_y) + 2, Math.floor(_0x5994a1.z), 0);
        }
        if (Scaffold_hyt) {
          callModule(37, "{\"value\":false}");
        }
      }
      if (Scaffold_more && _0x501eb7.namespace != _0x265a00.namespace) {
        buildBlock(self_id, Math.floor(_0x5994a1.x), Math.floor(rec_y) - 1, Math.floor(_0x5994a1.z), 0);
      }
    }
  }
  if (AttackSelf) {
    attack(self_id, AttackSwing);
  }
  if (AntiVoid) {
    if (!lagback_run && !_0x46ac41 && _0x3ac20f.y > -lagback_y) {
      lagback_pos.push(self_pos);
    }
    if (!lagback_run && _0x46ac41) {
      lagback_pos = [];
    }
    if (!lagback_run && _0x3ac20f.y <= -lagback_y) {
      lagback_run = true;
    }
    if (lagback_run) {
      if (lagback_pos.length > 0) {
        var _0x32266f = lagback_pos.pop();
        setPos(_0x32266f.x, _0x32266f.y, _0x32266f.z);
        if (lagback_derp) {
          setLocalPlayerTurn(0, 120);
        }
      } else {
        lagback_run = false;
      }
    }
  }
  if (GodMode && (!gm_move || _0x4848ae > 0.1) && (gm_ground || _0x46ac41)) {
    if (gm_tick == gm_cycle) {
      gm_pos = getEntityPos(self_id);
      gm_mot = getEntityMotion(self_id);
      for (let _0x10ffba = 0; _0x10ffba < gm_count; _0x10ffba++) {
        if (func_mode.GodMode_mode == 0) {
          Teleport(self_pos.x, gm_y > 0 ? gm_y ^ 10 : 100, self_pos.z);
        }
        if (func_mode.GodMode_mode == 1) {
          setPos(self_pos.x, gm_y > 0 ? gm_y ^ 10 : 100, self_pos.z);
        }
        if (func_mode.GodMode_mode == 2) {
          sendMovePlayer({
            id: self_id,
            pos: {
              x: gm_xz ? 10000 : self_pos.x,
              y: gm_y > 0 ? gm_y ^ 10 : 100,
              z: gm_xz ? 10000 : self_pos.z
            },
            mode: 0,
            ground: _0x46ac41,
            rot: _0x288038,
            yHeadRot: 0
          });
        }
      }
      if (!tp_back) {
        gm_tick = 0;
      }
    }
    if (tp_back && gm_tick >= gm_cycle + gm_delay) {
      for (let _0x10972e = 0; _0x10972e < gm_count; _0x10972e++) {
        if (func_mode.GodMode_mode < 2) {
          setPos(gm_pos.x, gm_pos.y, gm_pos.z);
        }
        if (func_mode.GodMode_mode < 2) {
          setMotion(gm_mot.x, gm_mot.y, gm_mot.z);
        }
        if (func_mode.GodMode_mode == 2) {
          var _0x1045f6 = {
            x: gm_xz ? 10000 : self_pos.x,
            y: gm_y > 0 ? gm_y ^ 10 : 100,
            z: gm_xz ? 10000 : self_pos.z
          };
          var _0x441b79 = {
            id: self_id,
            pos: _0x1045f6,
            mode: 0,
            ground: _0x46ac41,
            rot: _0x288038,
            yHeadRot: 0
          };
          var _0xc2f4a8 = {
            x: self_pos.x,
            y: self_pos.y,
            z: self_pos.z
          };
          var _0x39889e = {
            id: self_id,
            pos: _0xc2f4a8,
            mode: 0,
            ground: _0x46ac41,
            rot: _0x288038,
            yHeadRot: 0
          };
          if (gm_local) {
            sendMovePlayer(_0x441b79);
          } else {
            sendMovePlayer(_0x39889e);
          }
        }
      }
      gm_tick = 0;
    }
  }
  if (KeepDistance && target_list.length > 0 && getHorizontalDistanceByID(self_id, target_list[0]) < KeepDistance_distance && (_0x46ac41 || !KeepDistance_only_ground)) {
    const _0x31fe8e = getPlayerAngle(getEntityPos(target_list[0]), self_id, "yaw_pos");
    var _0x4ce8cc = {
      yaw: _0x31fe8e,
      pitch: _0x288038.pitch
    };
    const _0x453b85 = getDisplacement(-KeepDistance_speed / 10, self_pos, _0x4ce8cc);
    setMotion(_0x453b85.x - self_pos.x, _0x3ac20f.y, _0x453b85.z - self_pos.z);
  }
  if (AirJump && _0x3ac20f.y < -0.42) {
    let _0x25ab47 = predictEntityPos(_0x3ac20f, self_pos, getSpeed(self_id));
    let _0x5021ea = getPlayerAngle(_0x25ab47, self_id, "yaw_pos");
    var _0x342b5e = {
      yaw: _0x5021ea,
      pitch: 0
    };
    let _0x57e256 = getDisplacement(jump_length / 10, self_pos, _0x342b5e);
    setMotion(_0x57e256.x - self_pos.x, 0.42, _0x57e256.z - self_pos.z);
  }
  if (drop_list.length > 0) {
    let _0x806a51 = drop_list.pop();
    dropPlayerInventorySlot(self_id, _0x806a51);
  }
  if (RandomDrop) {
    dropPlayerInventorySlot(self_id, getRandomNum(0, 8));
  }
  if (RandomSelect) {
    selectPlayerInventorySlot(self_id, getRandomNum(0, 8));
  }
  if (Trace && target_list.length > 0 && getDistanceByID(self_id, target_list[0]) > Trace_min_dis) {
    let _0x5ceb6c = getPlayerAngle(self_id, target_list[0], "yaw_pos");
    let _0x5cf118 = getPlayerAngle(self_id, target_list[0], "pitch_pos");
    var _0x426cc9 = {
      yaw: _0x5ceb6c,
      pitch: -_0x5cf118
    };
    let _0x2e823a = getDisplacement(-Trace_speed / 5, getEntityPos(self_id), _0x426cc9);
    setEntityPos(self_id, _0x2e823a.x, _0x2e823a.y, _0x2e823a.z);
  }
  if (LineParticle && target_list.length > 0) {
    let _0x2d87e2 = getEntityPos(self_id);
    _0x2d87e2.y += line_particle_offset / 10;
    target_list.map(_0x22be11 => {
      let _0x46403a = getEntityPos(_0x22be11);
      _0x46403a.y += 0.765;
      let _0x48fef8 = getPlayerAngle(_0x2d87e2, _0x46403a, "yaw_pos");
      let _0x620004 = getPlayerAngle(_0x2d87e2, _0x46403a, "pitch_pos");
      for (let _0x2d9588 = 0; _0x2d9588 < getDistanceByID(_0x22be11, self_id); _0x2d9588 += (11 - line_particle_size) / 5) {
        var _0x1d9d2e = {
          yaw: _0x48fef8,
          pitch: -_0x620004
        };
        let _0x345a25 = getDisplacement(-_0x2d9588, getEntityPos(self_id), _0x1d9d2e);
        drawParticle(line_particle_type, _0x345a25.x, _0x345a25.y - 1.53 + line_particle_offset / 10, _0x345a25.z, 1);
      }
    });
  }
  if (Spammer) {
    text_d_1 = Date.now();
    if (text_d_1 - text_d_2 >= 0) {
      for (let _0x2db3a9 = 0; _0x2db3a9 < Spammer_num; _0x2db3a9++) {
        var _0x8868fa = randomStr(6);
        sendChatMessage(Spammer_random ? content + " || " + _0x8868fa : content);
      }
      text_d_2 = text_d_1 + Spammer_delay * 1000;
    }
  }
  if (HitBox && target_list.length > 0) {
    target_list.map(_0x170df6 => setEntitySize(_0x170df6, HitBox_x, HitBox_y));
  }
  if (Sucker && target_list.length > 0) {
    target_list.map(_0x479170 => {
      const _0x4fce9c = getDisplacement(Sucker_dis, self_pos, _0x288038);
      setEntityPos(_0x479170, _0x4fce9c.x, _0x4fce9c.y, _0x4fce9c.z);
    });
  }
  if (Velocity) {
    if (!Bhop) {
      setEntityAttribute(self_id, "minecraft:movement", {
        max: bhop_speed / 15,
        min: bhop_speed / 15,
        current: bhop_speed / 15
      });
    }
    if (!Bhop) {
      motion = getEntityMotion(self_id);
      if (motion.y == GROUND_MOTION_Y) {
        speed = GROUND_SPEED;
        resistance = GROUND_RESISTANCE;
        onGround = true;
      } else {
        speed = AIR_SPEED;
        resistance = AIR_RESISTANCE;
        onGround = false;
      }
    }
    if (Bhop) {
      const _0x12c6cf = getEntityMotion(self_id);
      var _0x5360ed = {
        y: _0x12c6cf.y
      };
      const _0x581430 = _0x5360ed;
      let _0x54081c = false;
      if (!_0x12c6cf.x) {
        _0x581430.x = 0;
      } else if (_0x12c6cf.x > -ERROR && _0x12c6cf.x < ERROR) {
        _0x581430.x = _0x12c6cf.x;
      } else {
        _0x581430.x = (_0x12c6cf.x / resistance - motion.x) * bhop_speed / 10 / speed;
        _0x54081c = true;
      }
      if (!_0x12c6cf.z) {
        _0x581430.z = 0;
      } else if (_0x12c6cf.z > -ERROR && _0x12c6cf.z < ERROR) {
        _0x581430.z = _0x12c6cf.z;
      } else {
        _0x581430.z = (_0x12c6cf.z / resistance - motion.z) * bhop_speed / 10 / speed;
        _0x54081c = true;
      }
      if (motion.y == GROUND_MOTION_Y) {
        if (_0x54081c) {
          _0x581430.y = bhop_heigh;
        }
        _0x581430.x = motion.x;
        _0x581430.z = motion.z;
        speed = GROUND_SPEED;
        resistance = GROUND_RESISTANCE;
        onGround = true;
      } else {
        speed = AIR_SPEED;
        resistance = AIR_RESISTANCE;
        onGround = false;
      }
      motion = _0x581430;
      setMotion(_0x581430.x, _0x581430.y, _0x581430.z);
    }
  }
  if (FlexibleMove) {
    const _0x4e18d3 = getEntityAttribute(self_id, "minecraft:movement");
    const _0xf5741 = predictEntityPos(getEntityMotion(self_id), getEntityPos(self_id), 20);
    var _0x44d6f9 = _0x288038.yaw;
    var _0x2bd075 = {
      yaw: _0x44d6f9,
      pitch: 0
    };
    const _0x43c493 = getDisplacement(flexibleMove_speed / 10, self_pos, _0x2bd075);
    if (!_0x46ac41 && _0x4e18d3.current > 0.12) {
      setMotion(_0x43c493.x - self_pos.x, 0, _0x43c493.z - self_pos.z);
    }
  }
  if (TargetParticle) {
    target_list.map(_0x1f8292 => {
      const _0x4bda20 = getEntityPos(_0x1f8292);
      drawParticle(particle_type, _0x4bda20.x, _0x4bda20.y + 0.3, _0x4bda20.z, particle_size);
    });
  }
  if (Cleaner && drop_delay_t > drop_delay && (!cleaner_bow || _0x288038.pitch > 80)) {
    for (let _0x37bb4a = 0; _0x37bb4a < Math.ceil(max_drop_item); _0x37bb4a++) {
      let _0xbddc07 = cleaner_slot - _0x37bb4a;
      const _0x2dd97e = getPlayerInventoryItem(self_id, _0xbddc07);
      if (_0x2dd97e.namespace != "minecraft:air") {
        clear_config.map(_0x8677b3 => {
          var _0x34a726 = false;
          if (func_mode.cleaner_mode == 0) {
            _0x34a726 = _0x8677b3.namespace == _0x2dd97e.namespace && (getItemCount(_0xbddc07) > _0x8677b3.max_num || _0x8677b3.max_num == -1) && (_0x2dd97e.aux === _0x8677b3.aux || _0x8677b3.aux == "any");
          }
          if (func_mode.cleaner_mode == 1) {
            const _0x1cc8fc = temp.includes(_0x2dd97e.namespace);
            _0x34a726 = !_0x1cc8fc || _0x8677b3.namespace == _0x2dd97e.namespace && (getItemCount(_0xbddc07) > _0x8677b3.max_num || _0x8677b3.max_num == -1) && (_0x2dd97e.aux == _0x8677b3.aux || _0x8677b3.aux == "any");
          }
          if (_0x34a726) {
            dropPlayerInventorySlot(self_id, _0xbddc07);
          }
        });
      }
      if (cleaner_slot > 0 && _0x37bb4a == Math.round(max_drop_item) - 1) {
        cleaner_slot = cleaner_slot - Math.ceil(max_drop_item);
      }
      if (cleaner_slot <= 0) {
        cleaner_slot = 35;
      }
    }
    drop_delay_t = 0;
  }
  if (SafeWalk) {
    var _0x27ff8d = predictEntityPos(_0x3ac20f, _0x337a3f, 5);
    const _0x5345b8 = getPlayerAngle(self_id, _0x27ff8d, "yaw_pos");
    var _0x940d14 = {
      yaw: _0x5345b8,
      pitch: 0
    };
    const _0x537d5b = getDisplacement(-0.2, self_pos, _0x940d14);
    const _0x394849 = getBlock(_0x537d5b.x, _0x337a3f.y - 1, _0x537d5b.z);
    if (_0x394849.namespace == "minecraft:air" && _0x3ac20f.y < -0.0783 && _0x3ac20f.y > -0.0785) {
      setMotion(_0x537d5b.x - self_pos.x, _0x3ac20f.y, _0x537d5b.z - self_pos.z);
    }
  }
  if (Fly && (!fly_only_fly || _0x4e47fd > 0)) {
    const _0x4a8a12 = getEntityAttribute(self_id, "minecraft:movement");
    if ((!_0x46ac41 || !fly_block) && (!fly_run || _0x4a8a12.current > 0.12)) {
      const _0x4a0bc5 = fly_up_down ? fly_ud : 0;
      if (func_mode.fly_mode == 0) {
        var _0x5b1a1b = predictEntityPos(_0x3ac20f, self_pos, fly_speed * 2.5);
        if (!fly_includeY) {
          setPos(_0x5b1a1b.x, self_pos.y + _0x4a0bc5, _0x5b1a1b.z);
        }
        if (fly_includeY) {
          setPos(self_pos.x, _0x5b1a1b.y, self_pos.z);
        }
        if (fly_mot) {
          setMotion(0, -0.01, 0);
        }
      }
      if (func_mode.fly_mode == 1) {
        var _0x41da04 = {
          yaw: _0x288038.yaw,
          pitch: 0
        };
        var _0x1e6356 = getDisplacement(fly_speed / 5, getEntityPos(self_id), _0x41da04);
        setEntityMotion(self_id, _0x1e6356.x - self_pos.x, _0x1e6356.y - self_pos.y + _0x4a0bc5, _0x1e6356.z - self_pos.z);
      }
      fly_ud = fly_ud > 0 ? -fly_set_ud / 10 : fly_set_ud / 10;
    }
  }
  if (ActivitySender && _0x4848ae > 0.5) {
    var _0xa8f5eb = predictEntityPos(_0x3ac20f, self_pos, 1);
    const _0xafff7 = getPlayerAngle(self_id, _0xa8f5eb, "yaw_pos");
    sendChatMessage("我正在向" + Math.round(_0xafff7) + "°方向移动");
  }
  if (Suspend) {
    setMotion(_0x3ac20f.x, -0.001, _0x3ac20f.z);
  }
  if (Hover) {
    setMotion(_0x3ac20f.x, 0.05, _0x3ac20f.z);
  }
  if (findEntity(target_list[0]) && Rider && target_list.length > 0) {
    var _0x2a9c82 = getEntityPos(target_list[0]);
    const _0x26a1f4 = Rider_random ? getRandomNum(-2, 2) : 0;
    MenuTP(_0x2a9c82.x + _0x26a1f4, _0x2a9c82.y + Rider_heigh + 1, _0x2a9c82.z + _0x26a1f4);
    if (FuncTip) {
      message.push("§rRode §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "" + getEntityName(target_list[0]));
    }
  }
  if (JetPack) {
    const _0xecced5 = getEntityAttribute(self_id, "minecraft:movement");
    if (_0xecced5.current > 0.12 || !move_fly) {
      var _0x1e6356 = getDisplacement(func_mode.sprint_mode == 0 ? sprint_speed / 11 : sprint_speed / 11, getEntityPos(self_id), getEntityRot(self_id));
      if (sprint_horizontal) {
        _0x1e6356.y = self_pos.y;
      }
      const _0x599706 = getBlock(_0x1e6356.x, _0x1e6356.y, _0x1e6356.z);
      if (_0x599706.namespace === "minecraft:air" || throw_wall) {
        if (func_mode.sprint_mode == 0) {
          setEntityPos(self_id, _0x1e6356.x, _0x1e6356.y, _0x1e6356.z);
          setEntityMotion(self_id, _0x3ac20f.x, -1e-7, _0x3ac20f.z);
        }
        if (func_mode.sprint_mode == 1) {
          setMotion(_0x1e6356.x - self_pos.x, _0x1e6356.y - self_pos.y, _0x1e6356.z - self_pos.z);
        }
      } else {
        setEntityPos(self_id, self_pos.x, self_pos.y, self_pos.z);
      }
    }
  }
  if (Crasher && func_mode.Crasher_mode === 1) {
    for (let _0x148e90 = -Crasher_for; _0x148e90 <= Crasher_for; _0x148e90++) {
      buildBlock(self_id, self_pos.x, self_pos.y, self_pos.z, _0x148e90);
    }
  }
  if (Crasher && func_mode.Crasher_mode === 2) {
    for (let _0x1b6fe9 = -Crasher_for; _0x1b6fe9 <= Crasher_for; _0x1b6fe9++) {
      destroyBlock(self_id, Infinity, Infinity, Infinity, _0x1b6fe9);
    }
  }
  if (Crasher && func_mode.Crasher_mode === 4) {
    for (let _0x2380ae = 0; _0x2380ae <= Crasher_for; _0x2380ae++) {
      sendChatMessage("NoveXare-CrackedCrasher" + " ".repeat(100));
    }
  }
  if (Crasher && func_mode.Crasher_mode === 3 && last_PyRpc != {}) {
    for (let _0x2ba885 = 0; _0x2ba885 <= Crasher_for; _0x2ba885++) {
      sendRpc(last_PyRpc.id, last_PyRpc.data);
    }
  }
  if (Crasher && func_mode.Crasher_mode === 5) {
    let _0xb78e7e = getPlayerList();
    _0xb78e7e.map(_0x230e1e => {
      const _0x450d74 = getEntityName(_0x230e1e);
      let _0x4604e7 = _0x450d74.indexOf("]") - 2;
      let _0x41d01a = ["b", "c", "e", "a"];
      for (let _0x5b9727 of _0x41d01a) {
        if (_0x450d74.indexOf("·§" + _0x5b9727) != -1) {
          _0x4604e7 = _0x450d74.indexOf("·§" + _0x5b9727);
          break;
        }
      }
      const _0x26d8ce = _0x4604e7 == -1 ? _0x450d74 : _0x450d74.slice(_0x4604e7 + 3, _0x450d74.length);
      for (let _0x2ad53c = 0; _0x2ad53c < Crasher_for; _0x2ad53c++) {
        executeCommand("/tell \"" + _0x26d8ce + "\" NoveXare-CrackedCrasher");
      }
    });
  }
  if (Crasher && func_mode.Crasher_mode === 6) {
    setLocalPlayerTurn(0, Infinity);
  }
  if (Crasher && func_mode.Crasher_mode === 8) {
    for (let _0x4d13ee = 0; _0x4d13ee <= Crasher_for; _0x4d13ee++) {
      sendSound(81, self_pos.x, self_pos.y, self_pos.z, _0x4d13ee);
    }
  }
  if (Crasher && func_mode.Crasher_mode === 9) {
    for (let _0x520a9d = 0; _0x520a9d <= Crasher_for; _0x520a9d++) {
      attack(self_id, false);
    }
  }
  if (Crasher && func_mode.Crasher_mode === 10) {
    for (let _0x1be657 = 0; _0x1be657 <= Crasher_for; _0x1be657++) {
      sendMovePlayer({
        id: self_id,
        pos: {
          x: self_pos.x,
          y: Infinity,
          z: self_pos.z
        },
        mode: 0,
        ground: _0x46ac41,
        rot: _0x288038,
        yHeadRot: 0
      });
    }
  }
  if (Crasher && func_mode.Crasher_mode === 7) {
    for (let _0x5c9b09 = 0; _0x5c9b09 <= Crasher_for; _0x5c9b09++) {
      executePluginCommand("/ww say NoveXare-CrackedCrasher");
    }
  }
  if (KickAura && target_list.length > 0) {
    target_list.map(_0x311034 => {
      const _0x483f6c = getEntityName(_0x311034);
      let _0x1cd7af = _0x483f6c.indexOf("]") - 2;
      let _0x5c1ad0 = ["b", "c", "e", "a"];
      for (let _0x1b832c of _0x5c1ad0) {
        if (_0x483f6c.indexOf("·§" + _0x1b832c) != -1) {
          _0x1cd7af = _0x483f6c.indexOf("·§" + _0x1b832c);
          break;
        }
      }
      const _0xad19 = _0x1cd7af == -1 ? _0x483f6c : _0x483f6c.slice(_0x1cd7af + 3, _0x483f6c.length);
      for (let _0x38e08e = 0; _0x38e08e < KickAura_for; _0x38e08e++) {
        executeCommand("/tell \"" + _0xad19 + "\" NoveXare-CrackedCrasher" + edit_KickAura.repeat(KickAura_repeat));
      }
    });
  }
  if (AutoSave && _0x3ac20f.y < -max_mot_y) {
    if (!_0x46ac41) {
      if (!autosave_near_block) {
        if (autosave_fake_block) {
          callModule(37, "{\"value\":true}");
        }
        buildBlock(self_id, _0x337a3f.x, _0x337a3f.y - max_mot_y * 3.1, _0x337a3f.z, 0);
        if (autosave_fake_block) {
          callModule(37, "{\"value\":false}");
        }
      } else {
        let _0x3ca1a9 = {};
        let _0x46bf13 = Infinity;
        for (let _0x2e11a1 = -5; _0x2e11a1 <= 5; _0x2e11a1++) {
          for (let _0x2f9bf6 = -1; _0x2f9bf6 <= 0; _0x2f9bf6++) {
            for (let _0x301179 = -5; _0x301179 <= 5; _0x301179++) {
              let _0x4342de = Math.sqrt(_0x2e11a1 * _0x2e11a1 + _0x301179 * _0x301179 + _0x2f9bf6 * _0x2f9bf6);
              var _0x1981bf = {
                x: _0x2e11a1 + _0x337a3f.x,
                y: _0x2f9bf6 + _0x337a3f.y,
                z: _0x301179 + _0x337a3f.z
              };
              let _0x44eab0 = _0x1981bf;
              const _0x35b8ea = getBlock(_0x44eab0.x, _0x44eab0.y, _0x44eab0.z);
              if (_0x35b8ea.namespace == "minecraft:air") {
                continue;
              }
              if (_0x4342de < _0x46bf13) {
                _0x46bf13 = _0x4342de;
                _0x3ca1a9 = _0x44eab0;
              } else {
                continue;
              }
            }
          }
        }
        if (_0x3ca1a9 != {}) {
          var _0x2c3569 = {
            x: _0x337a3f.x,
            y: _0x337a3f.y - 1 + _0x3ac20f.y * 1.6,
            z: _0x337a3f.z
          };
          let _0x355016 = _0x2c3569;
          let _0x2c5b4b = findPath(_0x3ca1a9, _0x355016);
          _0x2c5b4b.map(_0x3a2fa9 => {
            const _0x137616 = getBlock(_0x3a2fa9.x, _0x3a2fa9.y, _0x3a2fa9.z);
            if (_0x137616.namespace == "minecraft:air") {
              HYTBuild(Math.round(_0x3a2fa9.x), Math.round(_0x3a2fa9.y), Math.round(_0x3a2fa9.z));
            }
          });
        }
      }
    }
  }
  if (LockBehind && findEntity(target_list[0]) && target_list.length > 0) {
    var _0x2f03da = getEntityRot(target_list[0]);
    var _0xa8f5eb = getEntityPos(target_list[0]);
    const _0x428d95 = RandomLock ? getRandomNum(LockBehind_heigh - 1, LockBehind_heigh + 1) : LockBehind_heigh;
    const _0x4f0984 = RandomLock ? getRandomNum(-10, 10) : surround_speed * 3;
    LockBehind_yaw = Surround ? LockBehind_yaw + _0x4f0984 : _0x2f03da.yaw;
    if (Surround && LockBehind_yaw > 180) {
      LockBehind_yaw = -180;
    }
    var _0x2d0e5b = {
      yaw: LockBehind_yaw,
      pitch: 0
    };
    var _0x1e6356 = getDisplacement(-LockBehind_length, _0xa8f5eb, _0x2d0e5b);
    if (func_mode.surround_mode == 0) {
      setPos(_0x1e6356.x, _0xa8f5eb.y + 1.5 + _0x428d95, _0x1e6356.z);
    }
    if (func_mode.surround_mode == 1) {
      Teleport(_0x1e6356.x, _0xa8f5eb.y + _0x428d95, _0x1e6356.z);
    }
    if (FuncTip) {
      message.push("§rLocked §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "" + getEntityName(target_list[0]));
    }
  }
  if (SoundPlayer || sound_data.length > 0) {
    let _0x2ab138 = surround_all ? _0xf949 : target_list;
    if (surround_all_entity) {
      _0x2ab138.concat(getEntityList());
    }
    if (play_pos_list.length > 0) {
      _0x2ab138 = play_pos_list;
    }
    var _0x41068b = {
      sound: SoundPlayer_type,
      level: SoundPlayer_level
    };
    var _0x262b39 = [_0x41068b];
    SoundPlayer_yaw += 10;
    if (SoundPlayer_yaw > 180) {
      SoundPlayer_yaw = -180;
    }
    for (let _0x147a8e = 0; _0x147a8e < SoundPlayer_vec; _0x147a8e++) {
      if (sound_data.length > 0) {
        _0x262b39 = sound_data.shift().sounds;
      }
      if (_0x262b39.length > 0) {
        for (let _0x5d8611 of _0x262b39) {
          var _0x5aea15 = _0x5d8611.sound;
          var _0x48e7b2 = _0x5d8611.level;
          _0x2ab138.map(_0x18caaa => {
            if (typeof _0x18caaa != "string") {
              for (let _0x406837 = 0; _0x406837 < SoundPlayer_num; _0x406837++) {
                sendSound(Number(_0x5aea15), _0x18caaa.x, _0x18caaa.y, _0x18caaa.z, Number(_0x48e7b2));
              }
            } else if (_0x18caaa != self_id || !surround_exclude_self) {
              const _0x10ba5e = getEntityPos(_0x18caaa);
              var _0x23a84b = {
                yaw: SoundPlayer_yaw,
                pitch: 0
              };
              var _0x212621 = getDisplacement(SoundPlayer_distance, _0x10ba5e, _0x23a84b);
              for (let _0x411055 = 0; _0x411055 < SoundPlayer_num; _0x411055++) {
                sendSound(Number(_0x5aea15), _0x212621.x, _0x212621.y, _0x212621.z, Number(_0x48e7b2));
              }
            }
          });
        }
      }
    }
    if (sound_data.length > 0) {
      message.push("§r剩余音频数据 §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + sound_data.length + "条");
    }
  }
  if (surround_loop && SoundPlayer && sound_file != null && sound_data.length == 0) {
    sound_data = JSON.parse(sound_file);
    if (FuncTip) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 循环播放中 共" + sound_data.length + "条音频数据");
    }
  }
  if (FuncTip && _0x393114.current < 6) {
    message.push("§cWarning §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "LowHealth!");
  }
  if (AutoDo && Math.round(_0x393114.current) <= min_run_heal) {
    const _0x3426e2 = func_mode.low_health_operate_mode;
    const _0x511373 = getEntityCarriedItem(self_id);
    switch (_0x3426e2) {
      case 2:
        removeEntity(self_id);
        break;
      case 0:
      case 1:
        executeCommand(_0x3426e2 === 0 ? "/hub" : "/again");
        break;
      case 3:
        if (_0x511373.namespace !== "minecraft:splash_potion" || _0x511373.aux !== 22) {
          selectPlayerInventorySlot(self_id, getItem(self_id, "splash_potion", 22));
        } else {
          let _0x23082d = getEntityRot();
          _0x23082d.pitch = _0x23082d.pitch < 0 ? 90 - _0x23082d.pitch : 90 + _0x23082d.pitch;
          setLocalPlayerTurn(-90, 0);
          if (_0x511373.namespace.includes("fishing_rod")) {
            useItem();
          }
          if (low_health_operate_sword) {
            // TOLOOK
            // TOLOOK
            setTimeout(() => selectPlayerInventorySlot(self_id, getItem(self_id, "sword")), 100);
          }
        }
        break;
      case 4:
        if (_0x511373.namespace !== "minecraft:mushroom_stew") {
          selectPlayerInventorySlot(self_id, getItem(self_id, "mushroom_stew"));
        } else {
          useItem();
          if (low_health_operate_sword) {
            // TOLOOK
            // TOLOOK
            setTimeout(() => selectPlayerInventorySlot(self_id, getItem(self_id, "sword")), 100);
          }
        }
        break;
      case 5:
        if (_0x511373.namespace !== "minecraft:skull") {
          selectPlayerInventorySlot(self_id, getItem(self_id, "skull"));
        } else {
          useItem();
          if (low_health_operate_sword) {
            // TOLOOK
            // TOLOOK
            setTimeout(() => selectPlayerInventorySlot(self_id, getItem(self_id, "sword")), 100);
          }
        }
        break;
    }
  }
  if (NoLiquid) {
    setEntityAttribute(self_id, "minecraft:lava_movement", getEntityAttribute(self_id, "minecraft:movement"));
    setEntityAttribute(self_id, "minecraft:underwater_movement", getEntityAttribute(self_id, "minecraft:movement"));
  }
  if (Jesus) {
    const _0x176e42 = getBlock(_0x337a3f.x, _0x337a3f.y - 1, _0x337a3f.z);
    if (_0x176e42.namespace == "minecraft:flowing_water" || _0x176e42.namespace == "minecraft:water" || _0x176e42.namespace == "minecraft:flowing_lava" || _0x176e42.namespace == "minecraft:lava") {
      setEntityMotion(self_id, _0x3ac20f.x, 0, _0x3ac20f.z);
    }
  }
  if (RecordInfo && !click_mode && target_list.length > 0) {
    target_list.map(_0x7445b0 => {
      const {
        x,
        y
      } = getEntitySize(_0x7445b0);
      const _0x53f733 = getEntityMotion(_0x7445b0);
      const _0x53681d = getEntityPos(_0x7445b0);
      const _0x2505f3 = getEntityName(_0x7445b0);
      const _0xbe6843 = getEntityNamespace(_0x7445b0);
      const _0x19bdbb = getDistanceByID(self_id, _0x7445b0);
      const _0x41d7b3 = getEntityCarriedItem(_0x7445b0);
      const _0x38b26c = getSpeed(_0x7445b0);
      const _0x3a4f46 = getEntityAttribute(_0x7445b0, "minecraft:health");
      const _0x45b31e = getEntityAttribute(_0x7445b0, "minecraft:movement");
      const _0x2402c6 = getEntityTypeId(_0x7445b0);
      const _0x5081ec = getEntityTarget(_0x7445b0);
      const _0x293957 = getPlayerInventorySize(_0x7445b0);
      const _0x32e431 = getPlayerHotBarSize(_0x7445b0);
      const {
        yaw,
        pitch
      } = getEntityRot(_0x7445b0);
      const info = string_format(`唯一ID:{} 昵称:{}§r 实体命名空间:{} 水平碰撞箱:{} 垂直碰撞箱:{} Mot速度:{} 
ability速度:[max:{}, min:{}, current:{}] 血量:[max:{}, min:{}, current:{}]
手持:[id:{}, namespace:{}, name:{}§r, aux:{}] 距离:{} 实体类型:{} 
仰俯角:{}° 偏航角:{}° 仇恨目标:{}^{}
移动值:[{}, {}, {}] 坐标值:[{}, {}, {}] 背包容量:{} 物品栏容量:{}`, _0x7445b0, _0x2505f3, _0xbe6843, x.toFixed(2), y.toFixed(2), _0x38b26c, _0x45b31e.max, _0x45b31e.min, _0x45b31e.current, _0x3a4f46.max, _0x3a4f46.min, _0x3a4f46.current, _0x41d7b3.id, _0x41d7b3.namespace, _0x41d7b3.name, _0x41d7b3.aux, _0x19bdbb, _0x2402c6, pitch.toFixed(2), yaw.toFixed(2), getEntityName(_0x5081ec), _0x5081ec, _0x53f733.x.toFixed(2), _0x53f733.y.toFixed(2), _0x53f733.z.toFixed(2), _0x53681d.x.toFixed(2), _0x53681d.y.toFixed(2), _0x53681d.z.toFixed(2), _0x293957, _0x32e431);
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>> §rTargetInfo §7>>>§r \n" + info + "\n§r§b==============================");
      if (save_to_file) {
        write_file(NoveXare-Cracked_path + "/" + _0x2505f3 + "_" + _0x7445b0 + ".txt", info);
      }
    });
  }
  if (AssistAim && target_list.length > 0 && findEntity(target_list[0])) {
    const _0x58fc47 = target_list[0];
    const _0x1ab67c = getDistanceByID(self_id, _0x58fc47);
    const _0x54e6fd = isAimed(self_id, _0x58fc47, AssistAim_Fov, 0);
    if (_0x1ab67c <= AssistAim_distance && _0x54e6fd || AssistAim_throw) {
      let _0x4461b5 = getPlayerAngle(self_id, _0x58fc47, "yaw_rot");
      let _0x2728ed = getPlayerAngle(self_id, _0x58fc47, "pitch_rot");
      if (AssistAim_silent) {
        let _0x289649 = getPlayerAngle(self_id, _0x58fc47, "pitch_pos");
        if (_0x289649 > 90) {
          _0x289649 -= 90;
        }
        if (_0x289649 < -90) {
          _0x289649 += 90;
        }
        let _0x5181c8 = getPlayerAngle(self_id, _0x58fc47, "yaw_pos") - 180;
        if (_0x5181c8 > 180) {
          _0x5181c8 = _0x5181c8 - 360;
        }
        if (_0x5181c8 < -180) {
          _0x5181c8 = 360 + _0x5181c8;
        }
        silentAim(_0x289649, _0x5181c8);
      } else {
        let _0x28c831 = _0x4461b5 >= 0 ? -AssistAim_aim_speed : AssistAim_aim_speed;
        let _0x353edd = _0x2728ed >= 0 ? AssistAim_aim_speed : -AssistAim_aim_speed;
        if (func_mode.AssistAim_mode === 1 || func_mode.AssistAim_mode === 0 && (Math.abs(_0x4461b5) < AssistAim_aim_speed || Math.abs(_0x2728ed) < AssistAim_aim_speed)) {
          _0x28c831 = -_0x4461b5 / ((31 - AssistAim_aim_speed) / 2);
          _0x353edd = -_0x2728ed / ((31 - AssistAim_aim_speed) / 1.125);
        }
        const _0x462527 = isAimed(self_id, _0x58fc47, _0x28c831 * 1.1, 1);
        const _0x3b5467 = isAimed(self_id, _0x58fc47, _0x353edd * 1.1, 2);
        if (!_0x462527) {
          setLocalPlayerTurn(0, _0x28c831);
        }
        if (!_0x3b5467 && !AssistAim_throw || !isSame(_0x2728ed, 0, 1) && AssistAim_throw) {
          setLocalPlayerTurn(_0x353edd, 0);
        }
      }
      if (FuncTip) {
        const _0x337dd1 = RainbowTip ? "§" + rgb_color[rgb_l] : "§r";
        message.push("§rAimed §7>>> §r" + getEntityName(_0x58fc47));
      }
    }
  }
  if (InfiniteAura_switch_delay == 0 && target_list.length > 0) {
    InfiniteAura_target = target_list;
  }
  if (InfiniteAura && InfiniteAura_target.length > 0 && getDistanceByID(InfiniteAura_target[0], self_id) < InfiniteAura_distance) {
    InfiniteAura_target.map(_0x38f4dd => {
      const _0x41d60f = _0x38f4dd;
      const _0x1b042c = getEntityPos(_0x41d60f);
      if (func_mode.server_mode === 0) {
        if (InfiniteAura_backPos && InfiniteAura_back) {
          if (func_mode.InfiniteAura_mode < 2) {
            setPos(InfiniteAura_backPos.x, InfiniteAura_backPos.y + InfiniteAura_backY ? 1.5 : 0, InfiniteAura_backPos.z);
          }
          if (func_mode.InfiniteAura_mode == 1) {
            setMotion(InfiniteAura_backMotion.x, InfiniteAura_backMotion.y, InfiniteAura_backMotion.z);
          }
          if (func_mode.InfiniteAura_mode == 3) {
            MenuTP(InfiniteAura_backPos.x, InfiniteAura_backPos.y, InfiniteAura_backPos.z);
          }
          if (func_mode.InfiniteAura_mode == 2) {
            executePluginCommand("/ww tp " + InfiniteAura_backPos.x + " " + InfiniteAura_backPos.y + " " + InfiniteAura_backPos.z);
          }
          var _0x45595c = {
            x: InfiniteAura_backPos.x,
            y: InfiniteAura_backPos.y,
            z: InfiniteAura_backPos.z
          };
          var _0xbcef5c = {
            id: self_id,
            pos: _0x45595c,
            mode: 0,
            ground: true,
            rot: {
              pitch: 0,
              yaw: 0
            },
            yHeadRot: 0
          };
          if (func_mode.InfiniteAura_mode == 4) {
            sendMovePlayer(_0xbcef5c);
          }
          if (InfiniteAura_backY) {
            setPos(InfiniteAura_backPos.x, InfiniteAura_backPos.y + InfiniteAura_backY ? 1.5 : 0, InfiniteAura_backPos.z);
          }
          if (InfiniteAura_backclick) {
            buildBlock(self_id, InfiniteAura_backPos.x, InfiniteAura_backPos.y, InfiniteAura_backPos.z, 1);
            var _0x5a16f8 = {
              x: InfiniteAura_backPos.x,
              y: InfiniteAura_backPos.y,
              z: InfiniteAura_backPos.z
            };
            var _0x29388f = {
              id: self_id,
              pos: _0x5a16f8,
              value: 1,
              type: 25
            };
            if (func_mode.InfiniteAura_mode == 4) {
              sendPlayerAction(_0x29388f);
            }
          }
          attack(_0x41d60f, AttackSwing);
        }
        if (tick <= -InfiniteAura_delay) {
          InfiniteAura_num_r = InfiniteAura_num;
          InfiniteAura_backPos = self_pos;
          InfiniteAura_backMotion = _0x3ac20f;
          tick = InfiniteAura_tick;
          tphit(_0x41d60f);
        }
        if (_0x41d60f) {
          if (InfiniteAura_num_r) {
            tphit(_0x41d60f);
          } else {
            InfiniteAura_backPos = backMotion = InfiniteAura_backMotion = null;
          }
        }
        if (tick > -InfiniteAura_delay) {
          tick--;
        }
      } else if (func_mode.server_mode === 1) {
        if (tick === 0) {
          const _0x3ce834 = InfiniteAura_random ? getRandomNum(-2, 2) : 0;
          InfiniteAura_backPos = self_pos;
          InfiniteAura_backMotion = _0x3ac20f;
          for (let _0x4b8e3f = 0; _0x4b8e3f < InfiniteAura_move; _0x4b8e3f++) {
            if (func_mode.InfiniteAura_mode === 0) {
              setPos(_0x1b042c.x, _0x1b042c.y, _0x1b042c.z);
            }
            if (func_mode.InfiniteAura_mode === 1) {
              Teleport(_0x1b042c.x, _0x1b042c.y, _0x1b042c.z);
            }
            if (func_mode.InfiniteAura_mode === 4) {
              sendMovePlayer({
                id: self_id,
                pos: {
                  x: _0x1b042c.x + _0x3ce834,
                  y: _0x1b042c.y + InfiniteAura_yoffset / 5,
                  z: _0x1b042c.z + _0x3ce834
                },
                mode: 1,
                ground: true,
                rot: {
                  pitch: 0,
                  yaw: 0
                },
                yHeadRot: 0
              });
            }
            if (InfiniteAura_click) {
              buildBlock(self_id, _0x1b042c.x + _0x3ce834, _0x1b042c.y, _0x1b042c.z + _0x3ce834, 1);
              var _0x35e6cd = {
                x: _0x1b042c.x + _0x3ce834,
                y: _0x1b042c.y + InfiniteAura_yoffset / 5,
                z: _0x1b042c.z + _0x3ce834
              };
              var _0x21eac0 = {
                id: self_id,
                pos: _0x35e6cd,
                value: 1,
                type: 25
              };
              sendPlayerAction(_0x21eac0);
            }
          }
          if (InfiniteAura_backY) {
            setPos(InfiniteAura_backPos.x, InfiniteAura_backPos.y + InfiniteAura_backY ? 1.5 : 0, InfiniteAura_backPos.z);
          }
          if (InfiniteAura_amove) {
            setMotion(0, 0.42, 0);
          }
          for (let _0x1008ce = 0; _0x1008ce < InfiniteAura_num; _0x1008ce++) {
            attack(_0x41d60f, AttackSwing);
          }
        }
        if (tick <= -InfiniteAura_delay) {
          setMotion(InfiniteAura_backMotion.x, InfiniteAura_backMotion.y, InfiniteAura_backMotion.z);
          if (InfiniteAura_back) {
            for (let _0x5f1f07 = 0; _0x5f1f07 < InfiniteAura_move; _0x5f1f07++) {
              var _0x3ff755 = {
                x: InfiniteAura_backPos.x,
                y: InfiniteAura_backPos.y,
                z: InfiniteAura_backPos.z
              };
              var _0x5aff9b = {
                id: self_id,
                pos: _0x3ff755,
                mode: 0,
                ground: true,
                rot: {
                  pitch: 0,
                  yaw: 0
                },
                yHeadRot: 0
              };
              sendMovePlayer(_0x5aff9b);
            }
          }
          if (InfiniteAura_backclick) {
            buildBlock(self_id, InfiniteAura_backPos.x, InfiniteAura_backPos.y, InfiniteAura_backPos.z, 0);
            var _0x3cf7aa = {
              x: InfiniteAura_backPos.x,
              y: InfiniteAura_backPos.y,
              z: InfiniteAura_backPos.z
            };
            var _0x580c24 = {
              id: self_id,
              pos: _0x3cf7aa,
              value: 1,
              type: 25
            };
            sendPlayerAction(_0x580c24);
          }
          tick = InfiniteAura_tick;
        }
        if (tick > -InfiniteAura_delay) {
          tick--;
        }
      }
    });
    if (FuncTip && !ShortList) {
      message.push("§rAttack §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + obj2str(InfiniteAura_target.map(_0x4da529 => getEntityName(_0x4da529))));
    }
    if (FuncTip && ShortList) {
      message.push("§rAttack §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + InfiniteAura_target.map(_0x62e2d3 => getEntityName(_0x62e2d3)).length);
    }
  }
  if (AutoDestroy) {
    const _0x22a76b = getPlayerBlockPos(self_id);
    for (let _0x5d29a4 = Math.ceil(-destroy_size / 2); _0x5d29a4 < Math.floor(destroy_size / 2 + 1); _0x5d29a4++) {
      for (let _0x15f0a7 = Math.ceil(-destroy_size / 2); _0x15f0a7 < Math.floor(destroy_size / 2 + 1); _0x15f0a7++) {
        for (let _0x3e03e7 = Math.ceil(-destroy_size / 2); _0x3e03e7 < Math.floor(destroy_size / 2 + 1); _0x3e03e7++) {
          if (b_excludeFeet && _0x22a76b.y + _0x15f0a7 <= _0x22a76b.y - 1) {
            continue;
          }
          if (replace_block) {
            setBlock(x + _0x5d29a4, y + _0x15f0a7, z + _0x3e03e7, "air", 0);
          }
          if (!replace_block) {
            destroyBlock(self_id, _0x22a76b.x + _0x5d29a4, _0x22a76b.y + _0x15f0a7, _0x22a76b.z + _0x3e03e7, 0);
          }
          if (destroy_packet) {
            sendPlayerAction({
              id: self_id,
              pos: {
                x: _0x22a76b.x + _0x5d29a4,
                y: _0x22a76b.y + _0x15f0a7,
                z: _0x22a76b.z + _0x3e03e7
              },
              value: 1,
              type: 0
            });
            sendPlayerAction({
              id: self_id,
              pos: {
                x: _0x22a76b.x + _0x5d29a4,
                y: _0x22a76b.y + _0x15f0a7,
                z: _0x22a76b.z + _0x3e03e7
              },
              value: 1,
              type: 26
            });
            sendPlayerAction({
              id: self_id,
              pos: {
                x: _0x22a76b.x + _0x5d29a4,
                y: _0x22a76b.y + _0x15f0a7,
                z: _0x22a76b.z + _0x3e03e7
              },
              value: 1,
              type: 18
            });
            var _0x950950 = {
              x: _0x22a76b.x + _0x5d29a4,
              y: _0x22a76b.y + _0x15f0a7,
              z: _0x22a76b.z + _0x3e03e7
            };
            var _0x552d3f = {
              id: self_id,
              pos: _0x950950,
              value: 1,
              type: 2
            };
            sendPlayerAction(_0x552d3f);
          }
        }
      }
    }
  }
  if (AutoVoid) {
    const _0x25e3dc = getPlayerBlockPos(self_id);
    const _0xb9d8af = getBlock(_0x25e3dc.x, _0x337a3f.y - 1, _0x25e3dc.z);
    for (let _0x881ae2 = -2; _0x881ae2 < 3; _0x881ae2++) {
      for (let _0x486023 = -2; _0x486023 < 3; _0x486023++) {
        const _0x1f6b89 = getBlock(_0x25e3dc.x + _0x881ae2, _0x337a3f.y - 1, _0x25e3dc.z + _0x486023);
        if (_0x1f6b89.namespace == "minecraft:air" && _0x3ac20f.y < -0.0783 && _0x3ac20f.y > -0.0785 && _0xb9d8af.namespace != "minecraft:air") {
          const _0x5f3042 = getPlayerAngle(self_id, {
            x: _0x25e3dc.x + _0x881ae2,
            y: self_pos.y,
            z: _0x25e3dc.z - _0x486023
          }, "yaw_pos");
          var _0x582040 = {
            yaw: _0x5f3042,
            pitch: 0
          };
          const _0x28ccc7 = getDisplacement(-0.5, self_pos, _0x582040);
          setMotion(_0x28ccc7.x - self_pos.x, _0x3ac20f.y, _0x28ccc7.z - self_pos.z);
        }
      }
    }
  }
  if (avoid_throw) {
    const _0x48b69b = getEntityList();
    _0x48b69b.map(_0xacee3b => {
      if ((getEntityTypeId(_0xacee3b) == 4194389 || getEntityTypeId(_0xacee3b) == 4194390 || getEntityTypeId(_0xacee3b) == 12582992) && getDistanceByID(_0xacee3b, self_id) <= avoid_distance) {
        if (avoid_remove) {
          removeEntity(_0xacee3b);
        }
        if (func_mode.avoid_mode == 0) {
          const _0x29ce3b = getPlayerBlockPos(self_id);
          for (let _0x2c21ce = -2; _0x2c21ce < 3; _0x2c21ce++) {
            for (let _0x3ada4c = -2; _0x3ada4c < 3; _0x3ada4c++) {
              const _0x13ebf7 = getBlock(_0x29ce3b.x + _0x2c21ce, _0x337a3f.y - 1, _0x29ce3b.z + _0x3ada4c);
              if (_0x13ebf7.namespace != "minecraft:air") {
                var _0x15d603 = {
                  x: _0x29ce3b.x + _0x2c21ce,
                  y: self_pos.y,
                  z: _0x29ce3b.z - _0x3ada4c
                };
                const _0x13bfbd = getPlayerAngle(self_id, _0x15d603, "yaw_pos");
                var _0x1408f4 = {
                  yaw: _0x13bfbd,
                  pitch: 0
                };
                const _0x174835 = getDisplacement(0.3, self_pos, _0x1408f4);
                setMotion(_0x174835.x - self_pos.x, _0x3ac20f.y, _0x174835.z - self_pos.z);
              }
            }
          }
        }
        if (func_mode.avoid_mode == 1) {
          attack(_0xacee3b, AttackSwing);
        }
        if (func_mode.avoid_mode == 2) {
          setPos(10000, 100000, 10000);
        }
      }
    });
  }
  if (TrajectoryRender) {
    const _0x3e5de1 = getPlayerList();
    let _0x29d104 = [];
    let _0x2f1d24 = false;
    let _0x40fc7a = {
      x: 0,
      y: 0,
      z: 0
    };
    for (let _0x45212b = 1; _0x45212b <= throwable_particle_length; _0x45212b += throwable_particle_density / 10) {
      let _0x13d2e1 = getParabola(_0x45212b, _0x288038.pitch, throwable_particle_speed, throwable_particle_gravity).data;
      var _0x3e5123 = {
        yaw: _0x288038.yaw,
        pitch: 0
      };
      let _0x2eccea = getDisplacement(_0x45212b, self_pos, _0x3e5123);
      let _0x1be575 = getBlock(_0x2eccea.x, _0x2eccea.y + _0x13d2e1, _0x2eccea.z);
      if (throwable_particle_target || !_0x2f1d24) {
        _0x3e5de1.map(_0x19a268 => {
          if (!_0x2f1d24) {
            let _0x1b5c44 = getEntityPos(_0x19a268);
            var _0x39df3e = {
              x: _0x2eccea.x,
              y: _0x2eccea.y + _0x13d2e1,
              z: _0x2eccea.z
            };
            let _0x3663f8 = _0x39df3e;
            let _0x4d2d6c = getEntitySize(_0x19a268);
            if (_0x3663f8.x <= _0x1b5c44.x + _0x4d2d6c.x / 2 && _0x3663f8.x >= _0x1b5c44.x - _0x4d2d6c.x / 2 && _0x3663f8.y <= _0x1b5c44.y + _0x4d2d6c.y / 2 && _0x3663f8.y >= _0x1b5c44.y - _0x4d2d6c.y / 2 && _0x3663f8.z <= _0x1b5c44.z + _0x4d2d6c.x / 2 && _0x3663f8.z >= _0x1b5c44.z - _0x4d2d6c.x / 2) {
              message.push("§rHasAimed §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + getEntityName(_0x19a268));
              _0x2f1d24 = true;
            }
          }
        });
      }
      if (_0x1be575.namespace != "minecraft:air" || _0x2f1d24) {
        _0x40fc7a = _0x2eccea;
        if (func_mode.throwable_particle_mode == 1 && _0x1be575.namespace != "minecraft:air") {
          for (let _0x4ad1a6 = 0; _0x4ad1a6 <= 20; _0x4ad1a6 += 2) {
            drawParticle(throwable_particle_type, _0x40fc7a.x, _0x40fc7a.y + _0x13d2e1 + _0x4ad1a6 / 10, _0x40fc7a.z, 1);
          }
        }
        break;
      }
    }
    if (func_mode.throwable_particle_mode == 0) {
      let _0x550d62 = getDistance(_0x40fc7a, self_pos);
      for (let _0x10bac2 = 1; _0x10bac2 <= _0x550d62; _0x10bac2 += throwable_particle_density / 10) {
        let _0x5ba82b = getParabola(_0x10bac2, _0x288038.pitch, throwable_particle_speed, throwable_particle_gravity).data;
        let _0x4fdb2d = func_mode.throwable_particle_mode == 0 ? (throwable_particle_offset - 10) / 10 : 0;
        let _0x502657 = _0x288038.yaw + 90;
        if (_0x502657 > 180) {
          _0x502657 = _0x502657 - 360;
        }
        if (_0x502657 < -180) {
          _0x502657 = _0x502657 + 360;
        }
        var _0xa4de39 = {
          yaw: _0x502657,
          pitch: 0
        };
        let _0xefd853 = getDisplacement(_0x4fdb2d, self_pos, _0xa4de39);
        var _0x56ffb1 = {};
        _0x56ffb1.yaw = _0x288038.yaw - Math.atan(_0x4fdb2d / _0x550d62) * (180 / Math.PI);
        _0x56ffb1.pitch = 0;
        let _0x549dce = getDisplacement(_0x10bac2, _0xefd853, _0x56ffb1);
        let _0x4b1bae = getBlock(_0x549dce.x, _0x549dce.y + _0x5ba82b, _0x549dce.z);
        if (func_mode.throwable_particle_mode == 0 && _0x4b1bae.namespace == "minecraft:air") {
          drawParticle(throwable_particle_type, _0x549dce.x, _0x549dce.y + _0x5ba82b, _0x549dce.z, 1);
        }
      }
    }
  }
  if (FarmAura) {
    const _0x1b456 = getEntityCarriedItem(self_id);
    const _0x9d32ed = getPlayerBlockPos(self_id);
    for (let _0x553565 = -4; _0x553565 < 5; _0x553565++) {
      for (let _0x2574a5 = -4; _0x2574a5 < 5; _0x2574a5++) {
        const _0x593d67 = getBlock(_0x9d32ed.x + _0x553565, _0x337a3f.y - 1, _0x9d32ed.z + _0x2574a5);
        const _0x181fde = getBlock(_0x9d32ed.x + _0x553565, _0x337a3f.y, _0x9d32ed.z + _0x2574a5);
        if ((_0x593d67.namespace == "minecraft:dirt" || _0x593d67.namespace == "minecraft:grass") && _0x1b456.namespace.includes("hoe")) {
          buildBlock(self_id, _0x9d32ed.x + _0x553565, _0x337a3f.y - 1, _0x9d32ed.z + _0x2574a5, 1);
        }
        if (_0x593d67.namespace == "minecraft:farmland" && (_0x1b456.namespace == "minecraft:beetroot_seeds" || _0x1b456.namespace == "minecraft:wheat_seeds" || _0x1b456.namespace == "minecraft:carrot" || _0x1b456.namespace == "minecraft:potato")) {
          buildBlock(self_id, _0x9d32ed.x + _0x553565, _0x337a3f.y - 1, _0x9d32ed.z + _0x2574a5, 1);
        }
        if (_0x181fde.aux == 7 && (_0x181fde.namespace == "minecraft:beetroot" || _0x181fde.namespace == "minecraft:wheat" || _0x181fde.namespace == "minecraft:carrots" || _0x181fde.namespace == "minecraft:potatoes")) {
          destroyBlock(self_id, _0x9d32ed.x + _0x553565, _0x337a3f.y, _0x9d32ed.z + _0x2574a5, 1);
        }
        if (_0x1b456.namespace == "minecraft:bone_meal" && _0x181fde.aux <= 6 && (_0x181fde.namespace == "minecraft:beetroot" || _0x181fde.namespace == "minecraft:wheat" || _0x181fde.namespace == "minecraft:carrots" || _0x181fde.namespace == "minecraft:potatoes")) {
          buildBlock(self_id, _0x9d32ed.x + _0x553565, _0x337a3f.y, _0x9d32ed.z + _0x2574a5, 1);
        }
      }
    }
  }
  if (ChargeAura) {
    const _0xd34703 = getEntityCarriedItem(self_id);
    const _0x5e6217 = getPlayerBlockPos(self_id);
    for (let _0x3646b1 = -4; _0x3646b1 < 5; _0x3646b1++) {
      for (let _0x7b7726 = -3; _0x7b7726 < 4; _0x7b7726++) {
        for (let _0x1f1e96 = -4; _0x1f1e96 < 5; _0x1f1e96++) {
          const _0x5d7e8b = getBlock(_0x5e6217.x + _0x3646b1, _0x5e6217.y + _0x7b7726, _0x5e6217.z + _0x1f1e96);
          if (_0x5d7e8b.namespace == "minecraft:respawn_anchor" && _0x5d7e8b.aux == 0) {
            selectPlayerInventorySlot(self_id, getItem(self_id, "glowstone"));
            buildBlock(self_id, _0x5e6217.x + _0x3646b1, _0x5e6217.y + _0x7b7726, _0x5e6217.z + _0x1f1e96, 0);
          }
        }
      }
    }
  }
  if (destroy_list.length > 0 && isDestroy) {
    let _0x37485b = destroy_list.shift();
    const _0xb89810 = getBlock(_0x37485b[0], _0x37485b[1], _0x37485b[2]);
    if (_0xb89810.namespace != "minecraft:air" && _0xb89810.namespace == destroy_namespace) {
      destroyBlock(self_id, _0x37485b[0], _0x37485b[1], _0x37485b[2], 0);
      if (FuncTip) {
        message.push("§r进度 §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + current_mine_num + "/" + mine_num);
      }
      current_mine_num++;
    }
  }
  if (ActionManager) {
    if (!use_action_config) {
      if (action_tick > action_ticks) {
        for (let _0x20349a = 0; _0x20349a < action_times; _0x20349a++) {
          sendPlayerAction({
            id: self_id,
            pos: self_pos,
            value: 1,
            type: Number(edit_action_id)
          });
        }
      }
    } else {
      const _0x209f50 = JSON.parse(readFile(NoveXare-Cracked_path + "/PlayerAction.json"));
      _0x209f50.map(_0x17bb7e => {
        if (_0x17bb7e.delay % action_tick == 0) {
          for (let _0x146b51 = 0; _0x146b51 < _0x17bb7e.count; _0x146b51++) {
            sendPlayerAction({
              id: self_id,
              pos: self_pos,
              value: _0x17bb7e.value,
              type: Number(_0x17bb7e.id)
            });
          }
        }
      });
    }
  }
  if (isDestroy && (destroy_list.length == 0 || current_mine_num >= mine_num)) {
    isDestroy = false;
    destroy_namespace = null;
    destroy_list = [];
    current_mine_num = 0;
  }
  if (auto_jump) {
    if (_0x46ac41 && _0x3ac20f.y > -0.0785 && _0x3ac20f.y < -0.0783) {
      setMotion(_0x3ac20f.x, jump_strength / 100, _0x3ac20f.z);
    }
  }
  if (BlockClicker && !block_ac_select && ac_pos.length > 0) {
    ac_pos.map(_0x34df51 => buildBlock(self_id, _0x34df51.x, _0x34df51.y, _0x34df51.z, 0));
  }
  if (_0x3ac20f.y < -0.6 && NoFall && !_0x46ac41) {
    if (func_mode.nofall_mode === 0) {
      setMotion(0, 0, 0);
    }
    if (func_mode.nofall_mode === 1) {
      callModule(37, "{\"value\":true}");
      // TOLOOK
      // TOLOOK
      setTimeout(() => callModule(37, "{\"value\":false}"), 500);
    }
    if (func_mode.nofall_mode === 2) {
      callModule(30, "{\"value\":true,\"speed\":0}");
      // TOLOOK
      // TOLOOK
      setTimeout(() => callModule(30, "{\"value\":false}"), 500);
    }
    var _0x47cd02 = {
      id: self_id,
      pos: self_pos,
      value: 1,
      type: 7
    };
    if (func_mode.nofall_mode === 3) {
      sendPlayerAction(_0x47cd02);
    }
  }
  if (FakeLag) {
    if (lag_t >= lag_tick + lag_last_tick) {
      if (func_mode.FakeLag_mode == 0) {
        callModule(37, "{\"value\":" + b2s(!reverse_lag) + "}");
      }
      if (func_mode.FakeLag_mode == 1) {
        callModule(7, "{\"packet\":\"send\",\"enable\":" + b2s(!reverse_lag) + ",\"index\":19}");
      }
      if (func_mode.FakeLag_mode == 2) {
        callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!reverse_lag) + ",\"index\":19}");
      }
      lag_t = 0;
    }
    if (lag_t >= lag_tick) {
      if (func_mode.FakeLag_mode == 0) {
        callModule(37, "{\"value\":" + b2s(reverse_lag) + "}");
      }
      if (func_mode.FakeLag_mode == 1) {
        callModule(7, "{\"packet\":\"send\",\"enable\":" + b2s(reverse_lag) + ",\"index\":19}");
      }
      if (func_mode.FakeLag_mode == 2) {
        callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(reverse_lag) + ",\"index\":19}");
      }
    }
  }
  if (build_list.length > 0 && build_t > build_tick && !build_success) {
    const _0x408ad7 = build_list.shift();
    HYTBuild(_0x408ad7.x, _0x408ad7.y, _0x408ad7.z);
    build_t = 0;
    if (build_list.length == 0) {
      build_success = true;
    }
  }
  if (TargetHealth && target_list.length > 0) {
    message.push(string_format("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "Health: {}", getHealth(target_list[0], func_mode.health_mode)));
  }
  if (target_list.length > 0 && ShowTargetList) {
    message.push("§rTargets §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "" + obj2str(target_list.map(_0x5ecde0 => getEntityName(_0x5ecde0))));
  }
  if (ShowInfo) {
    const _0x386484 = getEntityCarriedItem(self_id);
    const _0x3cb83a = getEntityAttribute(self_id, "minecraft:movement");
    const _0x5b2ce3 = Math.sqrt(_0x3ac20f.x * _0x3ac20f.x + _0x3ac20f.z * _0x3ac20f.z);
    if (show_speed) {
      message.push("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "Motion_Hor: " + _0x5b2ce3.toFixed(2) + "m/s Motion_All: " + _0x1f7d5d.toFixed(2) + "m/s\nPos_Hor: " + _0x4e47fd.toFixed(2) + "m/s Pos_All:" + _0x4848ae.toFixed(2) + "m/s ability_speed:" + _0x3cb83a.current.toFixed(2) + string_format("\nCurrentMotion: [{}, {}, {}]", _0x3ac20f.x.toFixed(2), _0x3ac20f.y.toFixed(2), _0x3ac20f.z.toFixed(2)));
    }
    if (show_pos) {
      message.push("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "Position: " + string_format("[X:{}, Y:{}, Z:{}]", _0x337a3f.x, _0x337a3f.y, _0x337a3f.z));
    }
    if (show_item && _0x386484.id != 0) {
      message.push(string_format("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "{} §r§ox{}", _0x386484.name, getItemCount(-1)));
    }
    if (show_target_dis && target_list.length > 0) {
      message.push(string_format("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "Distance: {}m", getDistanceByID(self_id, target_list[0])));
    }
    if (show_player_list) {
      message.push(string_format("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "WorldPlayer: {}人", _0xf949.length));
    }
    if (show_kill_num) {
      message.push(string_format("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "Kills: {}人", kills));
    }
    if (show_time) {
      message.push(string_format("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "Time: {}, Ticks: {}", timeFormat(seconds), ticks));
    }
    if (show_attack_rate) {
      message.push(string_format("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "空刀率: {}%%, 攻击总次数: {}, 命中次数:{}, 空刀次数:{}", Math.round(empty_attack_frequency / attack_frequency * 100), attack_frequency, attack_frequency - empty_attack_frequency, empty_attack_frequency));
    }
    if (show_real_cps) {
      message.push(string_format("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "预期CPS: {}/s, 实际CPS: {}/s", Math.round(attack_frequency / attack_ticks) * 20, Math.round((attack_frequency - empty_attack_frequency) / attack_ticks * 20)));
    }
    if (show_ping) {
      message.push(string_format("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "延迟: {}ms", ping));
    }
  }
  if (ModifyTime) {
    for (let _0x448251 = 0; _0x448251 < 2; _0x448251++) {
      if (func_mode.set_time == 0) {
        setWorldData({
          time: 1000
        });
      }
      if (func_mode.set_time == 1) {
        setWorldData({
          time: 13000
        });
      }
      if (func_mode.set_time == 2) {
        setWorldData({
          time: 6000
        });
      }
      if (func_mode.set_time == 3) {
        setWorldData({
          time: 12500
        });
      }
    }
  }
  if (ModifySwing) {
    if (swing_speed > 17) {
      setEntityEffect(self_id, {
        id: 3,
        duration: 2,
        amplifier: swing_speed - 17,
        displayOnScreenTextureAnimation: false,
        noCounter: true,
        effectVisible: false
      });
    } else if (swing_speed < 17) {
      setEntityEffect(self_id, {
        id: 4,
        duration: 2,
        amplifier: 17 - swing_speed,
        displayOnScreenTextureAnimation: false,
        noCounter: true,
        effectVisible: false
      });
    }
  }
  var _0x576598 = {
    id: 16,
    duration: 600,
    amplifier: 1,
    displayOnScreenTextureAnimation: false,
    noCounter: true,
    effectVisible: false
  };
  if (NightVision) {
    setEntityEffect(self_id, _0x576598);
  }
  if (rocker_func.angle != undefined) {
    const _0x4aaa5a = getEntityRot(self_id);
    const _0x29e32f = getEntityPos(self_id);
    const _0x2645f8 = getEntityMotion(self_id);
    var _0x44d6f9 = Math.round(_0x4aaa5a.yaw);
    _0x44d6f9 += rocker_func.angle < 90 ? rocker_func.angle + 90 : rocker_func.angle - 270;
    let _0x5a5f10 = (_0x46ac41 ? 0.216 : 0.226) + (boostSpeed ? rocker_speed / 50 : 0);
    let _0x4b9a8e = (_0x46ac41 ? 0.2805 : 0.293) + (boostSpeed ? rocker_speed / 50 : 0);
    if (_0x44d6f9 >= 180) {
      _0x44d6f9 -= 360;
    }
    if (_0x44d6f9 <= -180) {
      _0x44d6f9 += 360;
    }
    let _0x4cc336 = {};
    if (targetStrafe && target_list.length > 0 && getDistanceByID(self_id, target_list[0]) <= targetStrafe_distance * 2) {
      let _0x516de2 = getPlayerAngle(self_id, target_list[0], "yaw_pos");
      let _0xab25e1 = getPlayerAngle(self_id, target_list[0], "yaw_rot");
      let _0x270912 = _0xab25e1 > -90 || _0xab25e1 < 90 ? rocker_speed : -rocker_speed;
      let _0x51bed8 = _0x44d6f9 > -90 || _0x44d6f9 < 90 ? rocker_speed : -rocker_speed;
      let _0x25fdfd = targetStrafe_relative ? _0x270912 : _0x51bed8;
      Angel = rocker_func.angle > 450 - targetStrafe_range && rocker_func.angle <= targetStrafe_range + 180 || rocker_func.angle > 180 - targetStrafe_range && rocker_func.angle <= targetStrafe_range - 90 ? _0x516de2 -= _0x25fdfd * 5 : _0x516de2 += _0x25fdfd * 5;
      if (_0x516de2 > 180) {
        _0x516de2 -= 360;
      }
      if (_0x516de2 < -180) {
        _0x516de2 += 360;
      }
      var _0x68037f = {
        yaw: _0x516de2,
        pitch: 0
      };
      let _0x89c490 = getDisplacement(targetStrafe_distance, getEntityPos(target_list[0]), _0x68037f);
      let _0x3fc2a1 = getPlayerAngle(_0x89c490, self_id, "yaw_pos");
      var _0x378872 = {
        yaw: _0x3fc2a1,
        pitch: 0
      };
      _0x4cc336 = getDisplacement(imitateMove ? func_mode.move_mode == 0 ? _0x5a5f10 : _0x4b9a8e : rocker_speed / 8, _0x29e32f, _0x378872);
    } else {
      var _0x393119 = {
        yaw: _0x44d6f9,
        pitch: 0
      };
      _0x4cc336 = getDisplacement(imitateMove ? func_mode.move_mode == 0 ? _0x5a5f10 : _0x4b9a8e : rocker_speed / 8, _0x29e32f, _0x393119);
    }
    if (func_mode.rocker_mode == 1) {
      setPos(_0x4cc336.x, _0x29e32f.y, _0x4cc336.z);
    }
    if (func_mode.rocker_mode == 0) {
      setMotion(_0x4cc336.x - _0x29e32f.x, rocker_bhop && _0x46ac41 && _0x2645f8.y.toFixed(4) == -0.0784 || rocker_ahop && _0x2645f8.y < -0.4 ? rocker_bhop_heigh : _0x2645f8.y, _0x4cc336.z - _0x29e32f.z);
    }
    rocker_func = {};
  }
  if (airjump_func.operation != undefined) {
    const _0x7e4993 = getEntityPos(self_id);
    const _0x27537d = getEntityMotion(self_id);
    if (airjump_func.operation == "up") {
      if (func_mode.rocker_mode == 1) {
        setPos(_0x7e4993.x, _0x7e4993.y + rocker_bhop_heigh, _0x7e4993.z);
      }
      if (func_mode.rocker_mode == 0) {
        setMotion(_0x27537d.x, rocker_bhop_heigh, _0x27537d.z);
      }
    }
    if (airjump_func.operation == "down") {
      if (func_mode.rocker_mode == 1) {
        setPos(_0x7e4993.x, _0x7e4993.y - rocker_bhop_heigh, _0x7e4993.z);
      }
      if (func_mode.rocker_mode == 0) {
        setMotion(_0x27537d.x, -rocker_bhop_heigh, _0x27537d.z);
      }
    }
    airjump_func = {};
  }
  if (BalanceTimer || BalanceTimer_st) {
    message.push("§rTimerTick §7>>> §r" + BalanceTimer_t + "tick");
    if (BalanceTimer_t <= 0 && BalanceTimer_st) {
      callModule(30, "{\"value\":false}");
      BalanceTimer_st = false;
    } else if (BalanceTimer_t > 0) {
      setPos(self_pos.x, self_pos.y, self_pos.z);
    }
  }
  if (!BalanceTimer && BalanceTimer_t > 0 && BalanceTimer_st) {
    BalanceTimer_t--;
  }
  if (FakeTip) {
    switch (func_mode.fakeTip_mode) {
      case 0:
        showTipMessage("§bProtoHax §r| " + _0x4848ae.toFixed(2) + " §eBlocks/sec");
        break;
      case 1:
        if (tip_t1 > 200) {
          curl_get("https://v1.jinrishici.com/jieri/chunjie", {}, (_0x416fd1, _0x219232) => globalThis.current_poem = JSON.parse(_0x219232).content);
          tip_t1 = 0;
        }
        showTipMessage("[§bCheat§ePlugin§r] " + current_poem);
        break;
      case 5:
        showTipMessage("Ping: " + ping + "ms Speed: " + _0x4848ae.toFixed(2) + "B/S CPS: " + Math.round((attack_frequency - empty_attack_frequency) / attack_ticks * 20));
        break;
    }
  }
  if (message.length > 0 && !FakeTip) {
    showTipMessage("§3§l[NoveXare-Cracked] §r§7>>> §r" + message.join(",\n"));
  }
  if (last_tick_id != self_id) {
    last_tick_id = self_id;
  }
  if (FakeLag) {
    lag_t++;
  }
  if (Cleaner) {
    drop_delay_t++;
  }
  if (GodMode) {
    gm_tick++;
  }
  if (FastBuild && build_list.length > 0) {
    build_t++;
  }
  if (rgb_t >= rgb_cycle) {
    rgb_l++;
    rgb_t = 0;
  }
  if (rgb_l >= rgb_color.length) {
    rgb_l = 0;
  }
  if (attack_tick > 20 && gradual_up) {
    attack_sound_level = 0;
  }
  if (isAttacking) {
    attack_ticks++;
    isAttacking = false;
  }
  attack_tick++;
  shift_tick_r++;
  if (HotbarSelector) {
    select_t++;
  }
  if (circulateSender) {
    rpc_t++;
  }
  if (InfiniteAura) {
    InfiniteAura_switch_delay_r++;
  }
  if (AutoArmor && !StartArmor) {
    armor_slot++;
  }
  if (FakeTip && func_mode.fakeTip_mode == 1) {
    tip_t1++;
  }
  if (select_t > select_delay) {
    select_slot++;
    select_t = 0;
  }
  if (select_slot > 8) {
    select_slot = 0;
  }
  if (armor_slot > 8) {
    armor_slot = 0;
  }
  if (target_list.length > 0 && InfiniteAura_list == 0 && InfiniteAura_switch_delay > 0) {
    InfiniteAura_list = target_list;
  }
  if (InfiniteAura_switch_delay_r > InfiniteAura_switch_delay && InfiniteAura_list.length > 0) {
    InfiniteAura_target[0] = InfiniteAura_list[0];
    InfiniteAura_list.shift();
    InfiniteAura_switch_delay_r = 0;
  }
  if (mini_kills > 0) {
    mini_tick++;
  }
  if (mini_tick > 100) {
    mini_kills = 0;
    mini_tick = 0;
  }
  if (BalanceTimer && !BalanceTimer_st) {
    BalanceTimer_t++;
  }
  calculate_t++;
  tickCounter++;
  action_tick++;
  rgb_t++;
  seconds = Math.floor(ticks / 20);
  ticks++;
  t_b++;
  t_c++;
  switch_delay_t++;
  derp_p_r -= random_rot ? getRandomNum(-10, 10) : head_rot_speed * 2;
  derp_y_r += random_rot ? getRandomNum(-10, 10) : body_rot_speed * 2;
  if (derp_p_r < -90) {
    derp_p_r = -derp_p_r - 90;
  }
  if (derp_y_r > 180) {
    derp_y_r = derp_y_r - 180;
  }
  if (!head_rot) {
    derp_p_r = _0x288038.pitch;
  }
  if (!body_rot) {
    derp_y_r = _0x288038.yaw;
  }
  if (lock_head) {
    derp_p_r = 90;
  }
  last_tick_pos = self_pos;
  last_tick_item = _0x8b9ec3;
  last_tick_heal = _0x393114.current;
};
globalThis.onExecuteCommandEvent = function (_0x504674) {
  if (ActivitySender) {
    sendChatMessage("我正在执行命令");
  }
  if (ShowCommand) {
    clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r ExecuteCMD §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + _0x504674);
  }
  const _0xf5a6e5 = _0x504674.split(" ");
  if (_0xf5a6e5[0] == "/set" && _0xf5a6e5[1] == "pos") {
    var _0x5af123 = {};
    _0x5af123.x = Number(_0xf5a6e5[2]);
    _0x5af123.y = Number(_0xf5a6e5[3]);
    _0x5af123.z = Number(_0xf5a6e5[4]);
    goto_pos = _0x5af123;
    if (FuncTip) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "已设置目标坐标");
    }
    return true;
  }
  if (_0xf5a6e5[0] == "/set" && _0xf5a6e5[1] == "default" && _0xf5a6e5[2] == "config") {
    if (_0xf5a6e5[3] == "clear") {
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "已清除默认配置");
      }
      setData("default_config", "null");
      return true;
    }
    if (readFile(config_path + "/" + _0xf5a6e5[3] + ".json") != "{}") {
      setData("default_config", _0xf5a6e5[3]);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "已设置默认配置 - " + _0xf5a6e5[3]);
      }
    } else if (FuncTip) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "文件为空或不存在 - " + _0xf5a6e5[3]);
    }
    return true;
  }
  if (_0xf5a6e5[0] == "/set" && _0xf5a6e5[1] == "level") {
    setEntityAttribute(self_id, "minecraft:player.level", {
      current: Number(_0xf5a6e5[2])
    });
    if (FuncTip) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "已设置经验值");
    }
    return true;
  }
  if (_0xf5a6e5[0] == "/target") {
    if (_0xf5a6e5[1] == "self") {
      target_list[0] = self_id;
    }
    if (_0xf5a6e5[1] == "player") {
      target_list = getPlayerList();
    }
    if (_0xf5a6e5[1] == "all") {
      target_list = getEntityList();
    }
    if (FuncTip) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "已设置" + target_list.length + "个目标");
    }
    return true;
  }
  if (_0xf5a6e5[0] == "/cleaner") {
    if (_0xf5a6e5[1] == "reload") {
      clear_config = JSON.parse(readFile(cleaner_path));
    }
    if (_0xf5a6e5[1] == "load") {
      clear_config = JSON.parse(readFile(_0xf5a6e5[2]));
    }
  }
  if (_0xf5a6e5[0] == "/bind") {
    if (_0xf5a6e5[1] === "key" && globalThis[_0xf5a6e5[2]] != undefined) {
      isBinding = _0xf5a6e5[2];
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "按下任意按键与" + _0xf5a6e5[2] + "绑定");
      }
      return true;
    }
    if (bind_func[_0xf5a6e5[1]] == undefined) {
      bind_func[_0xf5a6e5[1]] = [];
    }
    if (globalThis[_0xf5a6e5[2]] != undefined && globalThis[_0xf5a6e5[1]] != undefined) {
      bind_func[_0xf5a6e5[1]].push(_0xf5a6e5[2]);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "绑定 " + _0xf5a6e5[1] + " 与 " + _0xf5a6e5[2] + " 成功");
      }
      NoveXare-Cracked_Config.binds = bind_func;
    } else if (FuncTip) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "功能Key不存在");
    }
    return true;
  }
  if (_0xf5a6e5[0] == "/unbind") {
    if (_0xf5a6e5[1] === "key" && globalThis[_0xf5a6e5[2]] != undefined) {
      for (let _0x23c280 in key_bind_list) {
        if (key_bind_list[_0x23c280] == _0xf5a6e5[2]) {
          delete key_bind_list[_0x23c280];
          break;
        }
      }
      isBinding = _0xf5a6e5[2];
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "解除" + _0xf5a6e5[2] + "的按键绑定");
      }
      return true;
    }
    if (bind_func[_0xf5a6e5[1]] == undefined) {
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "该功能没有绑定任何功能");
      }
      return true;
    }
    if (globalThis[_0xf5a6e5[1]] != undefined && _0xf5a6e5[2] == "all") {
      delete bind_func[_0xf5a6e5[1]];
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "解除 " + _0xf5a6e5[1] + " 的所有绑定");
      }
      NoveXare-Cracked_Config.binds = bind_func;
      return true;
    }
    if (_0xf5a6e5[1] == "all") {
      bind_func = {};
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "解除所有功能绑定");
      }
      NoveXare-Cracked_Config.binds = bind_func;
      return true;
    }
    if (globalThis[_0xf5a6e5[2]] != undefined && globalThis[_0xf5a6e5[1]] != undefined) {
      bind_func[_0xf5a6e5[1]].splice(bind_func[_0xf5a6e5[1]].indexOf(_0xf5a6e5[2]), 1);
      if (bind_func[_0xf5a6e5[1]].length == 0) {
        delete bind_func[_0xf5a6e5[1]];
      }
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "解除绑定 " + _0xf5a6e5[1] + " 和 " + _0xf5a6e5[2] + " 成功");
      }
      NoveXare-Cracked_Config.binds = bind_func;
    } else if (FuncTip) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "功能Key不存在");
    }
    return true;
  }
  if (_0xf5a6e5[0] == "/nx") {
    if (globalThis[_0xf5a6e5[2]] == undefined) {
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "变量不存在");
      }
      return true;
    }
    if (_0xf5a6e5[1] == "num") {
      globalThis[_0xf5a6e5[2]] = Number(_0xf5a6e5[3]);
    }
    if (_0xf5a6e5[1] == "bool") {
      globalThis[_0xf5a6e5[2]] = Boolean(_0xf5a6e5[3]);
    }
    if (_0xf5a6e5[1] == "str") {
      globalThis[_0xf5a6e5[2]] = _0xf5a6e5[3];
    }
    if (_0xf5a6e5[1] == "arr") {
      globalThis[_0xf5a6e5[2]] = str2obj(_0xf5a6e5[3]);
    }
    if (_0xf5a6e5[1] == "obj") {
      globalThis[_0xf5a6e5[2]] = JSON.parse(_0xf5a6e5[3]);
    }
    if (FuncTip) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r SetValue §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + globalThis[_0xf5a6e5[2]] + " ==> " + _0xf5a6e5[2]);
    }
    return true;
  }
  if (_0xf5a6e5[0] == "/reload") {
    if (_0xf5a6e5[1] == "ui") {
      for (let _0x256f29 of current_ui.ui) {
        if (!_0x256f29.includes("NoveXare-Cracked")) {
          continue;
        }
        const _0x8eeed4 = readFile(getResource() + "/ui/" + _0x256f29 + ".json");
        removeMenu(_0x256f29);
        // TOLOOK
        // TOLOOK
        setTimeout(() => loadMenu(_0x256f29, _0x8eeed4), 500);
      }
    }
    if (_0xf5a6e5[1] == "js") {
      exit();
      loadScript("NoveXare-Cracked.js");
    }
    if (FuncTip) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "已重新加载" + _0xf5a6e5[1]);
    }
    return true;
  }
};
globalThis.onCommandOutputEvent = function (_0x5058c9, _0x533b83, _0x553905) {
  if (ShowSendCommand) {
    clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + string_format("类型:§e{} §r结果:§e{} §r数据:§e{}", _0x5058c9, _0x553905, JSON.stringify(_0x533b83, null, 2)));
  }
  if (KickAura) {
    return true;
  }
};
globalThis.onCallModuleEvent = function (_0x5a85eb) {
  if (ActivitySender) {
    sendChatMessage("我正在破译UI");
  }
  if (PVPDaLao) {
    setTitle("又或是红石大佬");
  }
  if (ShowUI) {
    clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r UI - Data §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + JSON.stringify(_0x5a85eb, null, 2));
  }
  if (_0x5a85eb.name == undefined) {
    if (Rocker && _0x5a85eb.angle != undefined) {
      rocker_func = _0x5a85eb;
    }
    if (Rocker && _0x5a85eb.operation != undefined) {
      airjump_func = _0x5a85eb;
    }
    return;
  }
  if (_0x5a85eb.fun == "fun_HitBox" && _0x5a85eb.size != undefined) {
    temp_size = {
      x: _0x5a85eb.size,
      y: _0x5a85eb.size
    };
  }
  if (target_list.length > 0 && _0x5a85eb.fun == "fun_HitBox" && _0x5a85eb.value) {
    default_size = temp_size;
  }
  if (!_0x5a85eb.name.includes("NoveXare-Cracked") && _0x5a85eb.fun != "fun_ride_flying") {
    return;
  }
  if (_0x5a85eb.SauthLogin != undefined && _0x5a85eb.SauthLogin != "") {
    var _0xb819da = {
      bodyReplace: false,
      requestBody: _0x5a85eb.SauthLogin
    };
    let _0x312322 = _0xb819da;
    write_file(getResource() + "/ui/conf_sauth_login.json", JSON.stringify(_0x312322));
    _0x312322.bodyReplace = true;
    callModule(72, JSON.stringify(_0x312322));
    return;
  }
  for (key in _0x5a85eb) {
    if (key == "value" || key == "fun" || key == "name" || key == "index" || key == "shortcut") {
      continue;
    }
    if (_0x5a85eb.key === "getBed" || key == "getBed") {
      let _0x22c201 = new Set();
      let _0x535458 = getWorldPlayerList();
      for (let _0x4a342e of _0x535458) {
        let _0x25ea8d = getTeams(getEntityName(_0x4a342e.id));
        if (_0x25ea8d === "NoveXare-Cracked") {
          continue;
        }
        let _0x38872a = getPlayerBlockPos(_0x4a342e.id);
        let {
          x: _0x41dcd6,
          y: _0x5b4a3f,
          z: _0x55fa9d
        } = _0x38872a;
        for (let _0x3b841c = -10; _0x3b841c <= 10; _0x3b841c++) {
          for (let _0x207eaf = -5; _0x207eaf < 5; _0x207eaf++) {
            for (let _0x1f9d1a = -10; _0x1f9d1a <= 10; _0x1f9d1a++) {
              let _0x215dfd = _0x41dcd6 + _0x3b841c;
              let _0x736d95 = _0x5b4a3f + _0x207eaf;
              let _0x11b2b0 = _0x55fa9d + _0x1f9d1a;
              let _0xb35693 = getBlock(_0x215dfd, _0x736d95, _0x11b2b0);
              if (_0xb35693.namespace === "minecraft:bed" && !_0x22c201.has(_0x25ea8d)) {
                _0x22c201.add(_0x25ea8d);
                var _0x1df2fd = {
                  x: _0x215dfd,
                  y: _0x736d95,
                  z: _0x11b2b0
                };
                var _0x2738d0 = {
                  player_team: _0x25ea8d,
                  pos: _0x1df2fd
                };
                bed_list.push(_0x2738d0);
              }
            }
          }
        }
      }
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r BedList §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 已获取床坐标 共" + bed_list.length + "条");
      }
    }
    if (_0x5a85eb.key == "InfiniteBreak" || key == "InfiniteBreak") {
      if (bed_list.length == 0) {
        if (FuncTip) {
          clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 请先获取床的坐标");
        }
        return;
      }
      var _0x26b69d = {
        type: "form",
        title: "队伍列表",
        content: "请选择需要拆除的床",
        buttons: [{
          text: "没有队伍信息"
        }]
      };
      const _0x1a4d1e = getEntityMotion(self_id);
      const _0xd8ddc3 = getEntityPos(self_id);
      for (let _0x467bd9 in bed_list) {
        _0x26b69d.buttons[_0x467bd9] = {
          text: "§b" + bed_list[_0x467bd9].player_team + " §r§e坐标:" + JSON.stringify(bed_list[_0x467bd9].pos, null, 2)
        };
      }
      addForm(JSON.stringify(_0x26b69d), function (_0x1190da) {
        var _0x284afa = bed_list[_0x1190da];
        var _0x7c0796 = _0x284afa.pos;
        callModule(35, "{\"value\":true,\"count\":10}");
        addTP(_0x7c0796.x, _0x7c0796.y, _0x7c0796.z, 5);
        if (FuncTip) {
          clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 已传送至 " + _0x284afa.player_team);
        }
      });
    }
    if (_0x5a85eb.key === "team" || _0x5a85eb.key === "text" || key === "team" || key === "text") {
      EditValue(_0x5a85eb.key, _0x5a85eb.key === "team" ? team : text);
    }
    if (_0x5a85eb.key === "add_item" || key === "add_item") {
      const _0x11485c = getEntityCarriedItem(self_id);
      const _0x44e95f = JSON.parse(readFile(cleaner_path));
      var _0x4ecd35 = {
        namespace: _0x11485c.namespace,
        aux: _0x11485c.aux,
        max_num: _0x11485c.count
      };
      _0x44e95f.push(_0x4ecd35);
      write_file(cleaner_path, JSON.stringify(_0x44e95f, null, 4));
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r AddItem §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + _0x11485c.name);
      }
    }
    if (_0x5a85eb.key === "content" || key === "content") {
      EditValue(_0x5a85eb.key, content);
    }
    if (_0x5a85eb.key === "edit_KickAura" || key === "edit_KickAura") {
      EditValue(_0x5a85eb.key, edit_KickAura);
    }
    if (_0x5a85eb.key === "particle_type" || key === "particle_type") {
      EditValue(_0x5a85eb.key, particle_type);
    }
    if (_0x5a85eb.key === "line_particle_type" || key === "line_particle_type") {
      EditValue(_0x5a85eb.key, line_particle_type);
    }
    if (_0x5a85eb.key === "attack_particle_type" || key === "attack_particle_type") {
      EditValue(_0x5a85eb.key, attack_particle_type);
    }
    if (_0x5a85eb.key === "arrow_particle_type" || key === "arrow_particle_type") {
      EditValue(_0x5a85eb.key, arrow_particle_type);
    }
    if (_0x5a85eb.key === "surround_particle_type" || key === "surround_particle_type") {
      EditValue(_0x5a85eb.key, surround_particle_type);
    }
    if (_0x5a85eb.key === "throwable_particle_type" || key === "throwable_particle_type") {
      EditValue(_0x5a85eb.key, throwable_particle_type);
    }
    if (_0x5a85eb.key === "attack_sound_type" || key === "attack_sound_type") {
      EditValue(_0x5a85eb.key, attack_sound_type);
    }
    if (_0x5a85eb.key === "SoundPlayer_type" || key === "SoundPlayer_type") {
      EditValue(_0x5a85eb.key, SoundPlayer_type);
    }
    if (_0x5a85eb.key === "attack_sound_level" || key === "attack_sound_level") {
      EditValue(_0x5a85eb.key, attack_sound_level);
    }
    if (_0x5a85eb.key === "edit_action_id" || key === "edit_action_id") {
      EditValue(_0x5a85eb.key, edit_action_id);
    }
    if (_0x5a85eb.key === "SoundPlayer_level" || key === "SoundPlayer_level") {
      EditValue(_0x5a85eb.key, SoundPlayer_level);
    }
    if (_0x5a85eb.key === "edit_suffix" || key === "edit_suffix") {
      EditValue(_0x5a85eb.key, edit_suffix);
    }
    if (_0x5a85eb.key === "Scaffold_sword" || key === "Scaffold_sword") {
      callModule(37, "{\"value\":true\"}");
      // TOLOOK
      // TOLOOK
      setTimeout(() => selectPlayerInventorySlot(self_id, getItem(self_id, "sword")), 500);
      // TOLOOK
      // TOLOOK
      setTimeout(() => callModule(37, "{\"value\":false\"}"), 1000);
    }
    if (_0x5a85eb.key === "DropInv" || key === "DropInv") {
      for (let _0x2cc4d1 = 0; _0x2cc4d1 < 36; _0x2cc4d1++) {
        const _0xf24778 = getPlayerInventoryItem(self_id, _0x2cc4d1);
        if (_0xf24778.namespace == "minecraft:air") {
          continue;
        }
        if (_0xf24778.count < 1) {
          continue;
        }
        for (let _0x2d82ae = 0; _0x2d82ae < _0xf24778.count; _0x2d82ae++) {
          drop_list.push(_0x2cc4d1);
        }
      }
    }
    if (_0x5a85eb.key === "LookTP" || key === "LookTP") {
      var _0x32962f = {};
      for (let _0x51e9f6 = 0; _0x51e9f6 < 500; _0x51e9f6++) {
        _0x32962f = getDisplacement(_0x51e9f6, getEntityPos(self_id), getEntityRot(self_id));
        const _0x1a5eaf = getBlock(_0x32962f.x, _0x32962f.y, _0x32962f.z);
        if (_0x1a5eaf.namespace != "minecraft:air") {
          break;
        }
      }
      if (_0x32962f != {}) {
        const _0x28fed7 = getEntityPos(self_id);
        if (func_mode.LookTP_mode == 0) {
          Teleport(_0x32962f.x, _0x32962f.y + 1.53, _0x32962f.z);
        }
        if (func_mode.LookTP_mode == 1) {
          setPos(_0x32962f.x, _0x32962f.y + 1.53, _0x32962f.z);
        }
      }
    }
    if (_0x5a85eb.key === "OpenChest" || key === "OpenChest") {
      var _0x58b730 = {
        type: "form",
        title: "容器列表",
        content: "请选择需要打开的容器",
        buttons: [{
          text: "暂无容器"
        }]
      };
      var _0x26f07c = [];
      var _0x2c806d = 0;
      var _0x177c53 = getPlayerBlockPos(self_id);
      const _0x1b5f42 = ["minecraft:barrel", "minecraft:chest", "minecraft:trapped_chest"];
      const _0x272edd = "shulker_box";
      for (let _0x553d6e = -7; _0x553d6e < 7; _0x553d6e++) {
        for (let _0x12f29b = -7; _0x12f29b < 7; _0x12f29b++) {
          for (let _0x203b59 = -7; _0x203b59 < 7; _0x203b59++) {
            const _0x50efd9 = _0x553d6e + _0x177c53.x;
            const _0x40dd09 = _0x12f29b + _0x177c53.y;
            const _0x2dc22b = _0x203b59 + _0x177c53.z;
            const _0x1d51a8 = getBlock(_0x50efd9, _0x40dd09, _0x2dc22b);
            if (_0x1b5f42.includes(_0x1d51a8.namespace) || _0x1d51a8.namespace.includes(_0x272edd)) {
              const _0x2616e3 = getBlock(_0x50efd9, _0x40dd09 + 1, _0x2dc22b);
              var _0x5a434e = {
                text: "命名空间: " + _0x1d51a8.namespace + "\n坐标:   " + (_0x2616e3.namespace == "minecraft:air" ? "" : " §c=>§e 容器顶上存在方块")
              };
              _0x58b730.buttons[_0x2c806d] = _0x5a434e;
              var _0x1cb523 = {
                x: _0x50efd9,
                y: _0x40dd09,
                z: _0x2dc22b
              };
              _0x26f07c[_0x2c806d] = _0x1cb523;
              _0x2c806d++;
            }
          }
        }
      }
      if (_0x2c806d == 0) {
        if (FuncTip) {
          clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 暂无容器");
        }
        return;
      }
      addForm(JSON.stringify(_0x58b730), function (_0x11407f) {
        const _0xd195be = _0x26f07c[_0x11407f];
        buildBlock(self_id, _0xd195be.x, _0xd195be.y, _0xd195be.z, 1);
        if (FuncTip) {
          clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 已打开该容器");
        }
      });
    }
    if (_0x5a85eb.key === "UpJump" || key === "UpJump") {
      setMotion(0, up_down_speed, 0);
    }
    if (_0x5a85eb.key === "RandomAccount" || key === "RandomAccount") {
      curl_get("http://api.alexblock.org/free_cookie/get", {}, (_0x3d4681, _0x5766dc) => {
        var _0x401e6c = JSON.parse(_0x5766dc);
        var _0x5601b2 = {
          sauth_json: _0x401e6c.cookie.sauth_json != undefined ? _0x401e6c.cookie.sauth_json : _0x401e6c.cookie
        };
        var _0x2a4e45 = _0x5601b2;
        var _0x31f758 = {
          bodyReplace: false
        };
        _0x31f758.requestBody = JSON.stringify(_0x2a4e45);
        var _0x2f41b8 = _0x31f758;
        write_file(getResource() + "/ui/conf_sauth_login.json", JSON.stringify(_0x2f41b8));
        _0x2f41b8.bodyReplace = true;
        callModule(72, JSON.stringify(_0x2f41b8));
      });
      return;
    }
    if (_0x5a85eb.key === "DownJump" || key === "DownJump") {
      setMotion(0, -up_down_speed, 0);
    }
    if (_0x5a85eb.key === "RepeatRpc" || key === "RepeatRpc") {
      for (let _0x2f61a8 = 0; _0x2f61a8 < RepeatRpc_times; _0x2f61a8++) {
        sendRpc(last_PyRpc.id, last_PyRpc.data);
      }
    }
    if (_0x5a85eb.key === "replace_cmd" || key === "replace_cmd") {
      EditValue(_0x5a85eb.key, replace_cmd);
    }
    if (_0x5a85eb.key === "keyword" || key === "keyword") {
      EditValue(_0x5a85eb.key, keyword);
    }
    if (_0x5a85eb.key === "tip_keyword" || key === "keywordtip_keyword") {
      EditValue(_0x5a85eb.key, tip_keyword);
    }
    if (_0x5a85eb.key === "send_keyword" || key === "send_keyword") {
      EditValue(_0x5a85eb.key, send_keyword);
    }
    if (_0x5a85eb.key == "AttackSelf_one" || key == "AttackSelf_one") {
      attack(self_id, AttackSwing);
    }
    if (_0x5a85eb.key == "RemoveSelf" || key == "RemoveSelf") {
      removeEntity(self_id);
    }
    if (_0x5a85eb.key === "chat_keyword" || key === "chat_keyword") {
      EditValue(_0x5a85eb.key, chat_keyword);
    }
    if (_0x5a85eb.key === "receive_keyword" || key === "receive_keyword") {
      EditValue(_0x5a85eb.key, receive_keyword);
    }
    if (_0x5a85eb.key === "keyword2" || key === "keyword2") {
      EditValue(_0x5a85eb.key, keyword2);
    }
    if (_0x5a85eb.key === "select_hotbar_items" || key === "select_hotbar_items") {
      EditValue("selectitems", selectitems);
    }
    if (_0x5a85eb.key === "send_keyword2" || key === "send_keyword2") {
      EditValue(_0x5a85eb.key, send_keyword2);
    }
    if (_0x5a85eb.key === "receive_keyword2" || key === "receive_keyword2") {
      EditValue(_0x5a85eb.key, receive_keyword2);
    }
    if (_0x5a85eb.key === "entity_keyword" || key === "entity_keyword") {
      EditValue(_0x5a85eb.key, entity_keyword);
    }
    if (_0x5a85eb.key === "SearchModule" || key === "SearchModule") {
      addForm("{\"type\":\"custom_form\",\"title\":\"搜索功能\",\"content\":[{\"type\":\"input\",\"text\":\"功能名或者功能Key\",\"placeholder\":\"AssistAim或自动瞄准\",\"default\":\"\"},{\"type\": \"toggle\",\"text\": \"模糊搜索\",\"default\": true}]}", function (_0x58abbc, _0x3aefc4) {
        var _0x3355ba = {
          type: "Menu",
          color: "#d2000000",
          alpha: 0.95,
          can_close: true,
          title: {
            name: "搜索结果",
            elevation: 0,
            background: "#000000",
            padding: [5, 5, 5, 5],
            margins: [0, 0, 0, 0],
            colors: ["#FFFFFF", "#FFFFFF"]
          },
          params: [-2, -2],
          padding: [3, 0, 3, 0],
          margins: [0, 0, 0, 0],
          show_dividers: true,
          radius: 6,
          hide: false,
          items: [{
            type: "TextView",
            sound: "click.mp3",
            name: "NoveXare-Cracked功能",
            size: 13,
            color: "#FFFFFF",
            tag: "fun_entity_event_manager",
            padding: [5, 5, 5, 5],
            items: [{
              type: "TextView",
              sound: "click.mp3",
              name: "没有结果",
              color: "#FFFFFF",
              size: 12,
              padding: [5, 5, 5, 5]
            }]
          }]
        };
        var _0x14c59b = 0;
        var _0x4b789c = getResource();
        var _0x43f09f = file_list(_0x4b789c + "/ui");
        for (var _0x4da7f4 of _0x43f09f) {
          if (!_0x4da7f4.name.includes("NoveXare-Cracked")) {
            continue;
          }
          var _0x128c3f = JSON.parse(read_file(_0x4da7f4.path));
          if (_0x128c3f.items[0].items == undefined) {
            continue;
          }
          for (var _0x360418 of _0x128c3f.items[0].items) {
            if (_0x360418.name == undefined || _0x360418.key == undefined) {
              continue;
            }
            if (_0x3aefc4) {
              if (_0x360418.name.includes(_0x58abbc) || _0x360418.key.includes(_0x58abbc)) {
                _0x3355ba.items[0].items[_0x14c59b] = _0x360418;
                _0x14c59b++;
              }
            } else if (_0x360418.name == _0x58abbc || _0x360418.key == _0x58abbc) {
              _0x3355ba.items[0].items[_0x14c59b] = _0x360418;
              _0x14c59b++;
            }
          }
        }
        write_file(_0x4b789c + "/script/temp.js", "const t = String(Date.now());\nloadMenu(t, '" + JSON.stringify(_0x3355ba) + "');");
        loadScript("temp.js");
        // TOLOOK
        // TOLOOK
        setTimeout(() => file_delete(_0x4b789c + "/script/temp.js"), 500);
      });
    }
    if (_0x5a85eb.key === "delete_PlayPos" || key === "delete_PlayPos") {
      play_pos_list = [];
    }
    if (_0x5a85eb.key === "addPlayPos" || key === "addPlayPos") {
      const {
        x,
        y,
        z
      } = getPlayerBlockPos(self_id);
      addForm("{\"type\":\"custom_form\",\"title\":\"添加坐标\",\"content\":[{\"type\":\"input\",\"text\":\"以英文逗号 , 分割坐标\",\"placeholder\":\"0,0,0\",\"default\":\"" + obj2str([x, y, z]) + "\"}]}", function (_0x46c941) {
        var _0x4e9c64 = _0x46c941.split(",");
        var _0x4996ff = {};
        _0x4996ff.x = Number(_0x4e9c64[0]);
        _0x4996ff.y = Number(_0x4e9c64[1]);
        _0x4996ff.z = Number(_0x4e9c64[2]);
        play_pos_list.push(_0x4996ff);
        if (FuncTip) {
          clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 添加坐标成功 当前" + play_pos_list.length + "组坐标");
        }
      });
    }
    if (_0x5a85eb.key === "load_sound" || key === "load_sound") {
      const _0x4809ac = "{\"type\":\"custom_form\",\"title\":\"输入路径\",\"content\":[{\"type\":\"input\",\"text\":\"路径:\",\"default\":\"\"}]}";
      addForm(_0x4809ac, function (_0x191ba9) {
        var _0x280dcf = read_file(_0x191ba9);
        if (_0x280dcf != "" && SoundPlayer) {
          sound_data = JSON.parse(_0x280dcf);
          sound_file = surround_loop ? _0x280dcf : [];
          if (FuncTip) {
            clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 加载成功 共" + sound_data.length + "条音频数据");
          }
        } else if (FuncTip) {
          clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 加载失败 - 文件为空或不存在或未启用功能");
        }
      });
    }
    if (_0x5a85eb.key === "select_sound" || key === "select_sound") {
      const _0x3d13d9 = {
        type: "form",
        title: "音乐文件",
        content: "选择要加载的音乐",
        buttons: [{
          text: "没有文件"
        }]
      };
      const _0x398263 = file_list(getResource() + "/sounds/NoveXare-Cracked");
      _0x398263.sort((_0x5c7d00, _0x2b1318) => _0x5c7d00.name.localeCompare(_0x2b1318.name));
      for (let _0x2f6579 = 0; _0x2f6579 < _0x398263.length; _0x2f6579++) {
        _0x3d13d9.buttons[_0x2f6579] = {
          text: _0x398263[_0x2f6579].name,
          image: {
            type: "path",
            data: "textures/ui/sound_glyph_color_2x.png"
          }
        };
      }
      const _0x55e5fe = JSON.stringify(_0x3d13d9);
      addForm(_0x55e5fe, function (_0x1a7b2f) {
        if (_0x398263.length > 0 && _0x1a7b2f >= 0) {
          var _0x2c0e4b = read_file(_0x398263[_0x1a7b2f].path);
          if (_0x2c0e4b != "" && SoundPlayer) {
            sound_data = JSON.parse(_0x2c0e4b);
            sound_file = surround_loop ? _0x2c0e4b : [];
            if (FuncTip) {
              clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 加载成功 共" + sound_data.length + "条音频数据");
            }
          } else if (FuncTip) {
            clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 加载失败 - 文件为空或不存在或未启用功能");
          }
        }
      });
    }
    if (_0x5a85eb.key === "save_config" || key === "save_config") {
      if (NoveXare-Cracked_Config != {
        cmd: [],
        binds: {}
      }) {
        const _0x37c03f = string_format("{\"type\":\"custom_form\",\"title\":\"输入保存名称\",\"content\":[{\"type\":\"input\",\"text\":\"名称:\",\"default\":\"{}\"}]}", "NX配置 - " + Date.now());
        addForm(_0x37c03f, function (_0x4c1b7b) {
          write_file(config_path + "/" + _0x4c1b7b + ".json", JSON.stringify(NoveXare-Cracked_Config, null, 4));
          if (FuncTip) {
            clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 保存成功");
          }
        });
      } else if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 暂无功能数据");
      }
    }
    if (_0x5a85eb.key === "load_config" || key === "load_config") {
      const _0x5e3da9 = {
        type: "form",
        title: "配置文件",
        content: "选择要加载的配置",
        buttons: [{
          text: "没有配置"
        }]
      };
      const _0x471338 = file_list(config_path);
      _0x471338.sort((_0x378e53, _0x4b44ab) => _0x378e53.name.localeCompare(_0x4b44ab.name));
      for (let _0x5f1331 = 0; _0x5f1331 < _0x471338.length; _0x5f1331++) {
        _0x5e3da9.buttons[_0x5f1331] = {
          text: _0x471338[_0x5f1331].name,
          image: {
            type: "path",
            data: "textures/ui/gear.png"
          }
        };
      }
      const _0x54ae25 = JSON.stringify(_0x5e3da9);
      addForm(_0x54ae25, function (_0x1f2204) {
        if (_0x471338.length > 0 && _0x1f2204 >= 0) {
          var _0x348554 = JSON.parse(readFile(_0x471338[_0x1f2204].path));
          var _0xf31dcc = 0;
          for (var _0x3b7662 in _0x348554) {
            _0xf31dcc++;
            if (_0x3b7662.includes("_mode")) {
              func_mode[_0x3b7662] = _0x348554[_0x3b7662];
              continue;
            }
            if (_0x3b7662 != "cmd" && _0x3b7662 != "binds") {
              globalThis[_0x3b7662] = _0x348554[_0x3b7662];
            }
          }
          bind_func = _0x348554.binds;
          key_bind_list = _0x348554.key_binds;
          if (_0x348554.cmd.length > 0) {
            _0x348554.cmd.map(_0x2097fd => PluginCMD(_0x2097fd));
          }
          if (FuncTip) {
            clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 加载成功，共" + _0xf31dcc + "条配置");
          }
        }
      });
    }
    if (_0x5a85eb.key === "SelectRPC" || key === "SelectRPC") {
      const _0xdca9af = {
        type: "form",
        title: "PyRpc列表",
        content: "选择PyRpc",
        buttons: [{
          text: "没有PyRpc"
        }]
      };
      let _0xd12fdb = JSON.parse(read_file(getResource() + "/NoveXare-Cracked/PyRpc_Record.json"));
      for (let _0xcee7b3 = 0; _0xcee7b3 < _0xd12fdb.length; _0xcee7b3++) {
        _0xdca9af.buttons[_0xcee7b3] = {
          text: (_0xd12fdb[_0xcee7b3].type == "Send" ? "§a" : "§c") + _0xd12fdb[_0xcee7b3].packet_str
        };
      }
      const _0x1c0e44 = JSON.stringify(_0xdca9af);
      addForm(_0x1c0e44, function (_0x545b72) {
        var _0x3d91bf = {
          id: _0xd12fdb[_0x545b72].id,
          data: _0xd12fdb[_0x545b72].packet_hex
        };
        last_PyRpc = _0x3d91bf;
        if (FuncTip) {
          clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 已设置上一条PyRpc");
        }
      });
    }
    if (_0x5a85eb.key === "add_range_whitelist" || key === "add_range_whitelist") {
      var _0x50daa4 = getPlayerList();
      var _0x1050ff = 0;
      for (let _0x4bc214 of _0x50daa4) {
        const _0x5d03bf = getEntityPos(_0x4bc214);
        const _0x1ba2ed = getDistance(_0x5d03bf, getEntityPos(self_id));
        if (!white_list.includes(_0x4bc214) && _0x1ba2ed < whilelist_range && _0x4bc214 != self_id) {
          white_list.push(_0x4bc214);
          _0x1050ff++;
        }
      }
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 已添加" + _0x1050ff + "个玩家到白名单");
      }
    }
    if (_0x5a85eb.key === "getTeams" || key === "getTeams") {
      const _0x274eea = getEntityCarriedItem(self_id);
      if (_0x274eea.namespace != "minecraft:wool") {
        if (FuncTip) {
          clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 请手持羊毛");
        }
        return;
      }
      team = color[_0x274eea.aux];
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r SetTeam §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + team);
      }
    }
    if (_0x5a85eb.key === "KickSelf" || key === "KickSelf") {
      for (let _0x44fd1b = 0; _0x44fd1b < 1000; _0x44fd1b++) {
        attack(self_id, AttackSwing);
      }
    }
    if (_0x5a85eb.key === "delete_ac" || key === "delete_ac") {
      ac_pos = [];
    }
    if (_0x5a85eb.key === "TPDown" || key === "TPDown") {
      const _0x2d64fb = getEntityPos(self_id);
      setPos(_0x2d64fb.x, _0x2d64fb.y - 4, _0x2d64fb.z);
    }
    if (_0x5a85eb.key === "recover" || key === "recover") {
      other_user = null;
    }
    if (_0x5a85eb.key === "delete_chest" || key === "delete_chest") {
      chest_pos = [];
    }
    if (_0x5a85eb.key === "regex" || _0x5a85eb.key === "white_list" || key === "regex" || key === "white_list") {
      EditValue(_0x5a85eb.key, _0x5a85eb.key === "regex" ? regex : white_list);
    }
    if (_0x5a85eb.key === "add_whitelist" || _0x5a85eb.key === "add_target" || key === "add_whitelist" || _0x5a85eb.key === "add_target") {
      PlayerSelector(_0x5a85eb.key === "add_whitelist" ? "white_list" : "target_list", 1);
    }
    const _0x38d916 = getEntityPos(self_id);
    if (_0x5a85eb.key == "EditY" || key == "EditY") {
      setPos(_0x38d916.x, Edit_Y, _0x38d916.z);
    }
    if (_0x5a85eb.key == "surround_particle_add" || key == "surround_particle_add") {
      surround_particle_type = Number(surround_particle_type) + 1;
    }
    if (_0x5a85eb.key == "SoundPlayer_add" || key == "SoundPlayer_add") {
      SoundPlayer_type = Number(SoundPlayer_type) + 1;
    }
    if (_0x5a85eb.key == "remove_white_list" || key == "remove_white_list") {
      white_list = [];
    }
    if (_0x5a85eb.key === "Rusher" || key === "Rusher") {
      var _0x410c7a = getDisplacement(rush_length / 6, getEntityPos(self_id), getEntityRot(self_id));
      setMotion(_0x410c7a.x - _0x38d916.x, _0x410c7a.y - _0x38d916.y, _0x410c7a.z - _0x38d916.z);
    }
    if (key == "key") {
      continue;
    }
    if (_0x5a85eb.index != undefined) {
      func_mode[key] = _0x5a85eb.index - 1;
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r " + key + " §7>>>§r SetMode §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + _0x5a85eb[key]);
      }
      NoveXare-Cracked_Config[key] = _0x5a85eb.index - 1;
      return true;
    }
    if (key == "KickAura") {
      callModule(41, "{\"array_list\":" + b2s(!_0x5a85eb[key]) + "}");
      if (KickAura_multi) {
        callModule(35, "{\"value\":" + b2s(_0x5a85eb[key]) + ",\"count\":" + KickAura_times + "}");
      }
      callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x5a85eb[key]) + ",\"index\":9}");
    }
    if (key === "FakeMove") {
      if (_0x5a85eb[key]) {
        fakemove_pos = getEntityPos(self_id);
      } else if (!_0x5a85eb[key]) {
        MenuTP(fakemove_pos.x, fakemove_pos.y, fakemove_pos.z);
      }
      callModule(41, "{\"array_list\":" + b2s(!_0x5a85eb[key]) + "}");
      var _0x5440a5 = {
        enable: !_0x5a85eb[key],
        index: 19,
        packet: "receive"
      };
      let _0x3a9197 = _0x5440a5;
      var _0x129891 = {
        enable: false,
        index: 19,
        packet: "send"
      };
      callModule(7, JSON.stringify(_0x129891));
      MenuTP(_0x38d916.x + 1000, _0x38d916.y + 1000, _0x38d916.z + 1000);
      callModule(7, JSON.stringify({
        enable: true,
        index: 19,
        packet: "send"
      }));
      callModule(7, JSON.stringify(_0x3a9197));
      // TOLOOK
      // TOLOOK
      setTimeout(() => MenuTP(fakemove_pos.x + 15, fakemove_pos.y + 15, fakemove_pos.z + 15), 1000);
    }
    if (key == "Crasher") {
      callModule(41, "{\"array_list\":" + b2s(!_0x5a85eb[key]) + "}");
      if (Crasher_multi) {
        callModule(35, "{\"value\":" + b2s(_0x5a85eb[key]) + ",\"count\":" + Crasher_times + "}");
      }
      if (func_mode.Crasher_mode === 0) {
        callModule(68, "{\"value\":" + b2s(_0x5a85eb[key]) + ",\"multipleRpc\":true,\"particle\":false,\"forwardRpc\":true,\"count\":50000,\"antiPacket\":true}");
        callModule(69, "{\"0\":true,\"1\":true,\"2\":true,\"3\":true,\"4\":true,\"5\":true,\"6\":true,\"7\":true,\"8\":true,\"speed\":0,\"value\":" + b2s(_0x5a85eb[key]) + "}");
      }
      if (func_mode.Crasher_mode === 5 || func_mode.Crasher_mode === 4) {
        callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x5a85eb[key]) + ",\"index\":9}");
      }
    }
    if (key == "Bhop" && !_0x5a85eb[key]) {
      setEntityAttribute(self_id, "minecraft:movement", record_speed);
    }
    if (key == "InfiniteAura" && InfiniteAura_repeat) {
      callModule(35, "{\"value\":" + b2s(_0x5a85eb[key]) + ",\"count\":" + InfiniteAura_packet + "}");
    }
    if (Teams && key == "team_origin") {
      if (_0x5a85eb[key]) {
        default_size = {
          x: 1.2,
          y: 1.2
        };
      }
      callModule(39, "{\"value\":" + b2s(_0x5a85eb[key]) + ",\"check_armor\":true}");
      // TOLOOK
      // TOLOOK
      setTimeout(() => callModule(31, "{\"value\":" + b2s(_0x5a85eb[key]) + ",\"size\":1.2,\"player\":true,\"distance\":20}"), 100);
      if (!_0x5a85eb[key]) {
        default_size = {
          x: 0.6,
          y: 1.8
        };
      }
    }
    if (key == "FlashBack") {
      setEntityName(getLocalPlayerUniqueID(), "test");
    }
    let _0x5217df = {
      no_practice: 25,
      no_latitude: 61,
      no_shake: 159,
      no_camera: 73,
      no_event: 65,
      no_title: 88,
      no_time: 10,
      no_ping: 115,
      no_skin: 93,
      no_sore: 107,
      no_animation: 44,
      no_bossbar: 74,
      no_sound: 86,
      no_server: 85,
      no_ground: 39,
      no_move: 40,
      no_chat: 9,
      no_start: 11,
      no_anticheat: 161,
      anti_kick: 5,
      move_packet: 19,
      block_update_packet: 21,
      hotbar_packet: 30,
      interact_packet: 33,
      operate_packet: 36,
      player_input_packet: 57,
      use_item_packet: 142
    };
    if (NoPacket && _0x5217df[key] != undefined) {
      callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x5a85eb[key]) + ",\"index\":" + _0x5217df[key] + "}");
    }
    if (Blink && _0x5217df[key] != undefined) {
      callModule(7, "{\"packet\":\"send\",\"enable\":" + b2s(!_0x5a85eb[key]) + ",\"index\":" + _0x5217df[key] + "}");
    }
    if (key === "TimePause") {
      callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x5a85eb[key]) + ",\"index\":19}");
    }
    if (key === "ClickTP") {
      callModule(56, "{\"reach\":255,\"value\":" + b2s(_0x5a85eb[key]) + "\"");
    }
    if (key == "FreeCam") {
      var _0x3edd1d = {
        value: true,
        NoClip: _0x5a85eb[key],
        flying: _0x5a85eb[key]
      };
      let _0x1cf8f3 = _0x3edd1d;
      var _0x446d00 = {
        value: _0x5a85eb[key]
      };
      let _0x180df4 = _0x446d00;
      var _0xe0cceb = {
        enable: !_0x5a85eb[key],
        index: 19,
        packet: "send"
      };
      let _0x3ab5e8 = _0xe0cceb;
      var _0x6ab114 = {
        enable: !_0x5a85eb[key],
        index: 161,
        packet: "receive"
      };
      let _0xe2c0c0 = _0x6ab114;
      callModule(41, "{\"array_list\":" + b2s(!_0x5a85eb[key]) + "}");
      callModule(1, JSON.stringify(_0x1cf8f3));
      if (func_mode.freecam_mode == 0) {
        callModule(37, JSON.stringify(_0x180df4));
      }
      if (func_mode.freecam_mode == 1) {
        callModule(7, JSON.stringify(_0x3ab5e8));
      }
      if (func_mode.freecam_mode == 2) {
        callModule(7, JSON.stringify(_0xe2c0c0));
      }
      if (key === "FreeCam" && _0x5a85eb[key]) {
        freecam_pos = getEntityPos(self_id);
      } else if (key === "FreeCam" && !_0x5a85eb[key]) {
        setEntityPos(self_id, freecam_pos.x, freecam_pos.y, freecam_pos.z);
      }
    }
    if (key === "AvoidAttack") {
      callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x5a85eb[key]) + ",\"index\":19");
    }
    if (key === "AvoidAttack" && _0x5a85eb[key]) {
      AvoidAttack_pos = getEntityPos(self_id);
    } else if (key === "AvoidAttack" && !_0x5a85eb[key]) {
      setEntityPos(self_id, AvoidAttack_pos.x, AvoidAttack_pos.y, AvoidAttack_pos.z);
    }
    if (key == "NoClip") {
      var _0x2983c9 = {
        value: _0x5a85eb[key],
        NoClip: _0x5a85eb[key],
        flying: _0x5a85eb[key]
      };
      let _0xba2d58 = _0x2983c9;
      callModule(41, "{\"array_list\":" + b2s(!_0x5a85eb[key]) + "}");
      callModule(1, JSON.stringify(_0xba2d58));
    }
    if (key == "BalanceTimer") {
      if (_0x5a85eb[key]) {
        callModule(41, "{\"array_list\":" + b2s(!_0x5a85eb[key]) + "}");
        callModule(37, "{\"value\":true}");
        BalanceTimer_st = false;
      } else {
        callModule(37, "{\"value\":false}");
        callModule(30, "{\"value\":true}");
        BalanceTimer_st = true;
      }
    }
    if (typeof _0x5a85eb[key] == "boolean" || typeof _0x5a85eb[key] == "number") {
      if (target_list.length > 0) {
        if (key == "HitBox_x") {
          temp_size.x = _0x5a85eb[key];
        }
        if (key == "HitBox_y") {
          temp_size.y = _0x5a85eb[key];
        }
      }
      if (target_list.length > 0 && key == "HitBox" && _0x5a85eb[key]) {
        default_size = temp_size;
      }
      if (key == "IQBoost") {
        let _0x1b2a6d = getRandomNum(1, 5);
        let _0x4370b7 = getPlayerBlockPos(self_id);
        if (_0x1b2a6d == 1) {
          curl_get("https://ip.useragentinfo.com/json?ip=", {}, function (_0xded095, _0x301983) {
            const _0x4eb632 = JSON.parse(_0x301983);
            sendChatMessage("!我是呱比，你们都是fvv LLL，有种就来" + _0x4eb632.province + _0x4eb632.city + _0x4eb632.area + "真实我");
          });
        } else if (_0x1b2a6d == 2) {
          sendChatMessage("!你可以告诉我NoveXare-Cracked怎么用吗，在我的世界上，求求");
        } else if (_0x1b2a6d == 3) {
          sendChatMessage("!同款科技获取+");
        } else if (_0x1b2a6d == 4) {
          sendChatMessage(string_format("!我在[{}, {}, {}]，你们都是彩笔，不服来击杀我", _0x4370b7.x, _0x4370b7.y, _0x4370b7.z));
        } else if (_0x1b2a6d == 5) {
          sendChatMessage("!大开等于小开等于没开，我的小名叫dream，你们这群绿色玩家等着被我黄玮吉抽打吧");
        }
      }
      if (key == "auto_target" && !_0x5a85eb[key]) {
        target_list = [];
      }
      if (key == "SoundPlayer" && !_0x5a85eb[key]) {
        sound_data = [];
      }
      if (key == "FightBot" && !_0x5a85eb[key]) {
        if (FightBot_KillAura) {
          KillAura = false;
        }
        if (FightBot_aimbot) {
          AssistAim = false;
        }
        if (FightBot_KeepDistance) {
          KeepDistance = false;
        }
        if (FightBot_Scaffold) {
          Scaffold = false;
        }
      }
      const _0x477bb2 = getEntityCarriedItem(self_id);
      if (key == "Scaffold" && _0x5a85eb[key] && Scaffold_auto_block) {
        block_namespace = _0x477bb2.namespace;
      }
      if (key == "FakeLag") {
        if (func_mode.FakeLag_mode == 0) {
          callModule(37, "{\"value\":" + _0x5a85eb[key] + "}");
        }
        if (func_mode.FakeLag_mode == 1) {
          callModule(7, "{\"packet\":\"send\",\"enable\":" + b2s(!_0x5a85eb[key]) + ",\"index\":19}");
        }
        if (func_mode.FakeLag_mode == 2) {
          callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x5a85eb[key]) + ",\"index\":19}");
        }
      }
      if (key === "Scaffold" && keep_y && _0x5a85eb[key]) {
        rec_y = 0;
      }
      if (key === "surround_loop" && !_0x5a85eb[key]) {
        sound_file = null;
      }
      if (key === "Velocity" && _0x5a85eb[key]) {
        record_speed = getEntityAttribute(self_id, "minecraft:movement");
      } else if (key === "Velocity" && !_0x5a85eb[key]) {
        setEntityAttribute(self_id, "minecraft:movement", record_speed);
      }
      if (key === "NoLiquid" && _0x5a85eb[key]) {
        record_water = getEntityAttribute(self_id, 2);
        record_lava = getEntityAttribute(self_id, 6);
      } else if (key === "NoLiquid" && !_0x5a85eb[key]) {
        setEntityAttribute(self_id, "minecraft:underwater_movement", record_water);
        setEntityAttribute(self_id, "minecraft:lava_movement", record_lava);
      }
      if (typeof _0x5a85eb[key] == "boolean") {
        if (_0x5a85eb[key]) {
          clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r " + key + " §r§7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§a") + " §lEnable ✔");
        } else {
          clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r " + key + " §r§7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§c") + " §lDisable ✖");
        }
        if (bind_func[key] != undefined && bind_func[key].length > 0) {
          for (let _0x553d58 of bind_func[key]) {
            callFunc(_0x553d58, _0x5a85eb[key]);
          }
        }
      }
      globalThis[key] = _0x5a85eb[key];
      NoveXare-Cracked_Config[key] = _0x5a85eb[key];
    }
  }
};
globalThis.onPlayerAttackEvent = function (_0x2147a3, _0x5c83d1) {
  if (FakeTip && func_mode.fakeTip_mode === 2) {
    showTipMessage("§b[Relic] §r§lAttacking： §r" + getEntityName(_0x5c83d1));
  }
  if (FakeTip && func_mode.fakeTip_mode === 3) {
    showTipMessage("§a§l[Kaleidoscop - 万花筒]\n§r§l正在攻击： §r" + getEntityName(_0x5c83d1));
  }
  if (FakeTip && func_mode.fakeTip_mode === 4) {
    showTipMessage("§2[Heal Module] §r§l正在攻击： §r" + getEntityName(_0x5c83d1));
  }
  if (ActivitySender) {
    sendChatMessage("我正在攻击" + getEntityName(_0x5c83d1));
  }
  first_attack_health = getHealth(_0x5c83d1, -1);
  if (_0x5c83d1 == null || _0x5c83d1 == last_attack_target) {
    if (AvoidInvalid) {
      AttackSwing = AvoidInvalid && first_attack_health < last_attack_health;
    }
    if (first_attack_health >= last_attack_health) {
      empty_attack_frequency++;
    }
    attack_frequency++;
    last_attack_health = first_attack_health;
    isAttacking = true;
  } else {
    last_attack_target = _0x5c83d1;
    attack_ticks = 0;
    empty_attack_frequency = 0;
    attack_frequency = 0;
  }
  if (PVPDaLao) {
    setTitle("还是PVP大佬");
  }
  if (OtherUser) {
    other_user = _0x5c83d1;
    return true;
  }
  if (AttackParticle) {
    const _0x3bb880 = getEntityPos(_0x5c83d1);
    const _0x1c7ab3 = getEntitySize(_0x5c83d1);
    for (let _0x3459e1 = 0; _0x3459e1 < getRandomNum(attack_particle_size, attack_particle_size + 20); _0x3459e1++) {
      drawParticle(attack_particle_type, _0x3bb880.x + getRandomNum(-_0x1c7ab3.x * getRandomNum(7, 10), _0x1c7ab3.x * getRandomNum(7, 10)) / 10, _0x3bb880.y + getRandomNum(-_0x1c7ab3.y * 9, _0x1c7ab3.y * 2) / 10, _0x3bb880.z + getRandomNum(-_0x1c7ab3.x * getRandomNum(7, 10), _0x1c7ab3.x * getRandomNum(7, 10)) / 10, 1);
    }
  }
  if (AttackSound) {
    playSound(Number(attack_sound_type), Number(attack_sound_level));
    if (gradual_up) {
      attack_sound_level = Number(attack_sound_level) + 1;
    }
    if (gradual_up) {
      attack_tick = 0;
    }
  }
  if (RecordInfo && click_mode) {
    const {
      x,
      y
    } = getEntitySize(_0x5c83d1);
    const _0x37bbdc = getEntityMotion(_0x5c83d1);
    const _0xa34c87 = getEntityPos(_0x5c83d1);
    const _0x597392 = getEntityName(_0x5c83d1);
    const _0x4593cc = getEntityNamespace(_0x5c83d1);
    const _0x554852 = getDistanceByID(self_id, _0x5c83d1);
    const _0x308987 = getEntityCarriedItem(_0x5c83d1);
    const _0x326966 = getSpeed(_0x5c83d1);
    const _0x1ec957 = getEntityAttribute(_0x5c83d1, "minecraft:health");
    const _0x24795f = getEntityAttribute(_0x5c83d1, "minecraft:movement");
    const _0x43726f = getEntityTypeId(_0x5c83d1);
    const _0x1527ce = getEntityTarget(_0x5c83d1);
    const _0xd36d7e = getPlayerInventorySize(_0x5c83d1);
    const _0x24d4c9 = getPlayerHotBarSize(_0x5c83d1);
    const {
      yaw,
      pitch
    } = getEntityRot(_0x5c83d1);
    const _0x1288fa = string_format(`唯一ID:{} 昵称:{}§r 实体命名空间:{} 水平碰撞箱:{} 垂直碰撞箱:{} Mot速度:{} 
ability速度:[max:{}, min:{}, current:{}] 血量:[max:{}, min:{}, current:{}]
手持:[id:{}, namespace:{}, name:{}§r, aux:{}] 距离:{} 实体类型:{} 
仰俯角:{}° 偏航角:{}° 仇恨目标:{}^{}
移动值:[{}, {}, {}] 坐标值:[{}, {}, {}] 背包容量:{} 物品栏容量:{}`, _0x5c83d1, _0x597392, _0x4593cc, x.toFixed(2), y.toFixed(2), _0x326966, _0x24795f.max, _0x24795f.min, _0x24795f.current, _0x1ec957.max, _0x1ec957.min, _0x1ec957.current, _0x308987.id, _0x308987.namespace, _0x308987.name, _0x308987.aux, _0x554852, _0x43726f, pitch.toFixed(2), yaw.toFixed(2), getEntityName(_0x1527ce), _0x1527ce, _0x37bbdc.x.toFixed(2), _0x37bbdc.y.toFixed(2), _0x37bbdc.z.toFixed(2), _0xa34c87.x.toFixed(2), _0xa34c87.y.toFixed(2), _0xa34c87.z.toFixed(2), _0xd36d7e, _0x24d4c9);
    if (FuncTip) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>> §rTargetInfo §7>>>§r \n" + _0x1288fa + "\n§r§b==============================");
    }
    if (save_to_file) {
      write_file(NoveXare-Cracked_path + "/" + _0x597392 + "_" + _0x5c83d1 + ".txt", _0x1288fa);
    }
    return true;
  }
  if (SmartWeapon) {
    let _0x3fc8d2 = [];
    for (let _0x39eb2a = 0; _0x39eb2a < 9; _0x39eb2a++) {
      _0x3fc8d2.push({
        slot: _0x39eb2a,
        d: getItemDamage(self_id, _0x39eb2a)
      });
    }
    _0x3fc8d2.sort((_0x18d857, _0xdc8b99) => _0xdc8b99.d - _0x18d857.d);
    var _0x3afa28 = _0x3fc8d2[0];
    if (_0x3afa28.d > 1) {
      selectPlayerInventorySlot(self_id, _0x3afa28.slot);
    }
  }
  if (ClickTarget) {
    if (!target_list.includes(_0x5c83d1)) {
      target_list.push(_0x5c83d1);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r AddTarget §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + getEntityName(_0x5c83d1));
      }
    } else {
      target_list.splice(target_list.indexOf(_0x5c83d1), 1);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r DelTarget §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + getEntityName(_0x5c83d1));
      }
    }
    return true;
  }
  if (CustomKB) {
    const _0x5dec8c = getEntityPos(_0x5c83d1);
    const _0x49ce52 = getEntityPos(_0x2147a3);
    const _0x40c191 = getPlayerAngle(_0x49ce52, _0x5dec8c, "yaw_pos");
    var _0x5a2e49 = {
      yaw: _0x40c191,
      pitch: 0
    };
    const _0x652052 = getDisplacement(-CustomKB_x / 2, _0x49ce52, _0x5a2e49);
    setEntityMotion(_0x5c83d1, _0x652052.x - _0x49ce52.x, CustomKB_y, _0x652052.z - _0x49ce52.z);
  }
  if (ClickWhiteList) {
    if (!white_list.includes(_0x5c83d1)) {
      white_list.push(_0x5c83d1);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r AddTarget §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + getEntityName(_0x5c83d1));
      }
    } else {
      white_list.splice(white_list.indexOf(_0x5c83d1), 1);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r DelTarget §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + getEntityName(_0x5c83d1));
      }
    }
    return true;
  }
  if (click_team && (!KillAura || team == "NoveXare-Cracked")) {
    team = getTeams(getEntityName(_0x5c83d1));
    if (FuncTip) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r SetTeam §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + team);
    }
    return true;
  }
  if (Criticals) {
    callModule(44, "{\"value\":true}");
    // TOLOOK
    // TOLOOK
    setTimeout(() => callModule(44, "{\"value\":false}"), 100);
  }
  if (KillAura) {
    return getRandomNum(0, 100) < KillAura_empty + 1;
  }
};
globalThis.onClientMessageEvent = function (_0x57a056) {
  if (ShowClientMessage) {
    clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r ClientMessage §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + _0x57a056);
  }
  if (ChatManager) {
    var _0x58a6e9 = false;
    for (let _0xa74c87 of chat_keyword) {
      if (_0x58a6e9) {
        break;
      }
      if (_0x57a056.includes(_0xa74c87)) {
        _0x58a6e9 = true;
      }
    }
    return _0x58a6e9;
  }
  return ShowClientMessage;
};
globalThis.onSendChatMessageEvent = function (_0x1f6642) {
  if (_0x1f6642 == "退出") {
    clientMessage("§3§l[NoveXare-Cracked] §r§7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§c") + " Exit!");
    gc();
    exit();
    return true;
  }
  if (ChatSuffix && !_0x1f6642.includes(edit_suffix)) {
    sendChatMessage(_0x1f6642 + edit_suffix);
    return true;
  }
};
globalThis.onPlayerJumpEvent = function (_0x408b5c) {
  if (ActivitySender) {
    sendChatMessage("我正在跳跃");
  }
  if (PVPDaLao) {
    setTitle("还是什么都不知道的小白");
  }
  if (LongJump) {
    const _0x46d093 = getEntityMotion(_0x408b5c);
    const _0x4069a9 = getEntityPos(_0x408b5c);
    const _0x4f733d = getEntityRot(_0x408b5c);
    const _0x11f14d = predictEntityPos(_0x46d093, _0x4069a9, 20);
    var _0x54d115 = {
      yaw: _0x4f733d.yaw,
      pitch: 0
    };
    const _0x1ffc6e = getDisplacement(longjump_x / 4, _0x4069a9, _0x54d115);
    setMotion(_0x1ffc6e.x - _0x4069a9.x, longjump_y * 10, _0x1ffc6e.z - _0x4069a9.z);
  }
  if (BetterJump) {
    const _0x11a3c6 = getEntityMotion(_0x408b5c);
    const _0x3c91db = getEntityPos(_0x408b5c);
    const _0x10cf43 = getEntityRot(_0x408b5c);
    const _0x1077f5 = predictEntityPos(_0x11a3c6, _0x3c91db, getSpeed(self_id));
    const _0x68177 = getPlayerAngle(_0x1077f5, _0x408b5c, "yaw_pos");
    var _0x56ab99 = {
      yaw: _0x68177,
      pitch: 0
    };
    const _0x29e847 = getDisplacement(0.7, _0x3c91db, _0x56ab99);
    setMotion(_0x29e847.x - _0x3c91db.x, 0.42, _0x29e847.z - _0x3c91db.z);
  }
};
function onPyRpcReceiveEvent(_0xae3848, _0x211c3d) {
  const _0x9f7af5 = hexToString(_0x211c3d).toLowerCase();
  if (PyRpcManager && packet_receive) {
    let _0x5e00f2 = false;
    let _0x200ff4 = false;
    const _0x4ad360 = (_0x20af33, _0x45291d) => {
      if (_0x20af33.length == 0) {
        return _0x45291d;
      }
      return _0x20af33.some(_0x30d93b => _0x9f7af5.includes(_0x30d93b) === _0x45291d);
    };
    for (let _0xdbe04a of keyword) {
      if (_0x5e00f2) {
        break;
      }
      if (_0x9f7af5.includes(_0xdbe04a)) {
        _0x5e00f2 = true;
      }
    }
    for (let _0x19488c of receive_keyword) {
      if (_0x5e00f2) {
        break;
      }
      if (_0x9f7af5.includes(_0x19488c)) {
        _0x5e00f2 = true;
      }
    }
    for (let _0x511e05 of keyword2) {
      if (!_0x5e00f2) {
        break;
      }
      if (_0x9f7af5.includes(_0x511e05)) {
        _0x5e00f2 = false;
      }
    }
    for (let _0x1cf9e0 of receive_keyword2) {
      if (!_0x5e00f2) {
        break;
      }
      if (_0x9f7af5.includes(_0x1cf9e0)) {
        _0x5e00f2 = false;
      }
    }
    for (let _0x2bb8ed of tip_keyword) {
      if (_0x200ff4) {
        break;
      }
      if (_0x9f7af5.includes(_0x2bb8ed)) {
        _0x200ff4 = true;
      }
    }
    if (packet_record && PyRpcManager && (_0x200ff4 && neglect_exclude || !_0x200ff4)) {
      const _0x469b9e = getResource() + "/NoveXare-Cracked/PyRpc_Record.json";
      const _0xa1b4ba = JSON.parse(readFile(_0x469b9e));
      var _0x18cacf = {
        packet_hex: _0x211c3d
      };
      _0x18cacf.packet_format = HexToFormat(_0x211c3d);
      _0x18cacf.packet_str = hexToString(_0x211c3d);
      _0x18cacf.time = Date.now();
      _0x18cacf.id = _0xae3848;
      _0x18cacf.type = "Receive";
      _0x18cacf.keyword = receive_keyword;
      _0x18cacf.global_keyword = keyword;
      _0x18cacf.intercept = _0x5e00f2;
      _0xa1b4ba[_0xa1b4ba.length] = _0x18cacf;
      write_file(_0x469b9e, JSON.stringify(_0xa1b4ba, null, 4));
    }
    let _0x182a8b = "Null";
    if (func_mode.pyrpc_mode === 0) {
      _0x182a8b = hexToString(_0x211c3d);
    }
    if (func_mode.pyrpc_mode === 1) {
      _0x182a8b = _0x211c3d;
    }
    if (func_mode.pyrpc_mode === 2) {
      _0x182a8b = HexToFormat(_0x211c3d);
    }
    const _0xda955c = JSON.parse(readFile(getResource() + "/NoveXare-Cracked/PyRpc_Config.json"));
    for (let _0x27707e of _0xda955c) {
      if (typeof _0x27707e === "object") {
        if (_0x27707e.match_mode === 0 && _0x182a8b.includes(_0x27707e.packet) || _0x27707e.match_mode === 1 && _0x182a8b === _0x27707e.packet) {
          _0x182a8b = _0x27707e.remarks;
        }
      }
    }
    const _0x5c62fb = _0x5e00f2 ? `
§3§l已拦截该PyRpc数据包
§r§e==============================
` : `
§r§e==============================
`;
    if (packet_tip && PyRpcManager && !_0x200ff4 && (show_no_intercept && !_0x5e00f2 || show_intercept && _0x5e00f2)) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>> §rPyRpc - §cReceive §7>>>§r\n" + (show_pyrpc_id ? "ID: " + _0xae3848 + "\n" : "") + _0x182a8b + _0x5c62fb);
    }
    return _0x5e00f2;
  }
}
function onPyRpcSendEvent(_0xf3b746, _0x3f54b0) {
  const _0x4cea79 = hexToString(_0x3f54b0).toLowerCase();
  if (PyRpcManager && packet_send) {
    var _0x36dc5b = false;
    var _0x29ea5c = false;
    const _0x567441 = (_0x1042aa, _0x659040) => {
      if (_0x1042aa.length == 0) {
        return _0x659040;
      }
      return _0x1042aa.some(_0x14451e => _0x4cea79.includes(_0x14451e) === _0x659040);
    };
    for (let _0x1a0382 of keyword) {
      if (_0x36dc5b) {
        break;
      }
      if (_0x4cea79.includes(_0x1a0382)) {
        _0x36dc5b = true;
      }
    }
    for (let _0xf4692c of send_keyword) {
      if (_0x36dc5b) {
        break;
      }
      if (_0x4cea79.includes(_0xf4692c)) {
        _0x36dc5b = true;
      }
    }
    for (let _0x3f4723 of keyword2) {
      if (!_0x36dc5b) {
        break;
      }
      if (_0x4cea79.includes(_0x3f4723)) {
        _0x36dc5b = false;
      }
    }
    for (let _0x1cb8eb of send_keyword2) {
      if (!_0x36dc5b) {
        break;
      }
      if (_0x4cea79.includes(_0x1cb8eb)) {
        _0x36dc5b = false;
      }
    }
    for (let _0x1b571c of tip_keyword) {
      if (_0x29ea5c) {
        break;
      }
      if (_0x4cea79.includes(_0x1b571c)) {
        _0x29ea5c = true;
      }
    }
    var _0x4c91d0 = {
      id: _0xf3b746,
      data: _0x3f54b0
    };
    if (!_0x29ea5c) {
      last_PyRpc = _0x4c91d0;
    }
    if (packet_record && PyRpcManager && (_0x29ea5c && neglect_exclude || !_0x29ea5c)) {
      const _0x23b0c7 = getResource() + "/NoveXare-Cracked/PyRpc_Record.json";
      const _0x1bf7db = JSON.parse(readFile(_0x23b0c7));
      var _0x57b4ee = {
        packet_hex: _0x3f54b0
      };
      _0x57b4ee.packet_format = HexToFormat(_0x3f54b0);
      _0x57b4ee.packet_str = hexToString(_0x3f54b0);
      _0x57b4ee.time = Date.now();
      _0x57b4ee.id = _0xf3b746;
      _0x57b4ee.type = "Send";
      _0x57b4ee.keyword = send_keyword;
      _0x57b4ee.global_keyword = keyword;
      _0x57b4ee.intercept = _0x36dc5b ? true : false;
      _0x1bf7db[_0x1bf7db.length] = _0x57b4ee;
      write_file(_0x23b0c7, JSON.stringify(_0x1bf7db, null, 4));
    }
    let _0x2becf7 = "Null";
    if (func_mode.pyrpc_mode === 0) {
      _0x2becf7 = hexToString(_0x3f54b0);
    }
    if (func_mode.pyrpc_mode === 1) {
      _0x2becf7 = _0x3f54b0;
    }
    if (func_mode.pyrpc_mode === 2) {
      _0x2becf7 = HexToFormat(_0x3f54b0);
    }
    const _0x1cfe67 = JSON.parse(readFile(getResource() + "/NoveXare-Cracked/PyRpc_Config.json"));
    for (let _0xd23c86 of _0x1cfe67) {
      if (typeof _0xd23c86 == "object") {
        if (_0xd23c86.match_mode == 0 && _0x2becf7.includes(_0xd23c86.packet)) {
          _0x2becf7 = remarks;
        }
        if (_0xd23c86.match_mode == 1 && _0x2becf7.includes == _0xd23c86.packet) {
          _0x2becf7 = remarks;
        }
      } else {
        continue;
      }
    }
    let _0x2b420c = _0x36dc5b ? `
§3§l已拦截该PyRpc数据包
§r§e==============================` : "\n§r§e==============================";
    if (packet_tip && PyRpcManager && !_0x29ea5c && (show_no_intercept && !_0x36dc5b || show_intercept && _0x36dc5b)) {
      clientMessage("§3§l[NoveXare-Cracked]§r§7 >>> §rPyRpc - §aSend§7 >>> §r \n" + (show_pyrpc_id ? "ID: " + _0xf3b746 + "\n" : "") + _0x2becf7 + _0x2b420c);
    }
    return _0x36dc5b;
  }
}
globalThis.onEntityBehaviorEvent = function (_0x2841c5, _0x351023, _0x1e3e0f) {
  if (_0x351023 == 2 && _0x2841c5 == self_id) {
    if (ActivitySender) {
      sendChatMessage("我正在被攻击");
    }
    if (ShowHurt) {
      clientMessage("§3§l[NoveXare-Cracked]§r§7 >>> §cWarning §7>>> §r您正在受伤 受伤类型:" + _0x1e3e0f);
    }
    if (AntiKB) {
      const _0x4436d7 = getEntityMotion(self_id);
      const _0x5cca8c = AntiKB_resistance_h / 100;
      const _0x1c6bda = AntiKB_resistance_v / 100;
      setMotion(_0x4436d7.x - _0x5cca8c * _0x4436d7.x, _0x4436d7.y - _0x1c6bda * _0x4436d7.y, _0x4436d7.z - _0x5cca8c * _0x4436d7.z);
    }
  }
};
globalThis.onPlayerDestroyBlockEvent = function (_0x37a407, _0x5e76b0, _0x292ccc, _0x10203c, _0x51df9f) {
  const _0x5ddd12 = getEntityCarriedItem(_0x37a407);
  const _0x5eae47 = getEntityPos(_0x37a407);
  const _0x37348b = getBlock(_0x5e76b0, _0x292ccc, _0x10203c);
  if (_0x37348b.namespace != "minecraft:air") {
    if (ShowDestroyBlock) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + string_format(`命名空间:{}, §rID:{}, §r特殊值:{}
手持:{}-[{}], ID:{}, 特殊值:{}
坐标:[{}, {}, {}]`, _0x37348b.namespace, _0x37348b.id, _0x37348b.aux, _0x5ddd12.name, _0x5ddd12.namespace, _0x5ddd12.id, _0x5ddd12.aux, _0x5e76b0, _0x292ccc, _0x10203c));
    }
    if (ActivitySender) {
      sendChatMessage("我正在破坏" + _0x5e76b0 + " " + _0x292ccc + " " + _0x10203c + "的" + _0x37348b.namespace);
    }
    if (Miner && (_0x37348b.namespace == destroy_namespace || !isDestroy)) {
      if (!isDestroy && current_mine_num < mine_num) {
        isDestroy = true;
        destroy_namespace = _0x37348b.namespace;
      }
      if (isDestroy && destroy_namespace != _0x37348b.namespace && current_mine_num < mine_num && destroy_list.length > 0) {
        destroy_namespace = _0x37348b.namespace;
      }
      var _0x5840ee = {
        x: _0x5e76b0,
        y: _0x292ccc,
        z: _0x10203c
      };
      if (getDistance(_0x5eae47, _0x5840ee) <= mine_distance && isDestroy) {
        let _0x5b715c = [[_0x5e76b0 + 1, _0x292ccc, _0x10203c], [_0x5e76b0 - 1, _0x292ccc, _0x10203c], [_0x5e76b0, _0x292ccc, _0x10203c + 1], [_0x5e76b0, _0x292ccc, _0x10203c - 1], [_0x5e76b0, _0x292ccc + 1, _0x10203c], [_0x5e76b0, _0x292ccc - 1, _0x10203c]];
        for (p of _0x5b715c) {
          const _0x20d667 = getBlock(p[0], p[1], p[2]);
          if (_0x20d667.namespace != "minecraft:air" && _0x37348b.namespace == destroy_namespace) {
            destroy_list.push(p);
          }
        }
      }
    }
  }
};
function onReady() {
  if (KillAura_auto_close && KillAura) {
    KillAura = false;
    if (FuncTip) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r§c Auto Disable KillAura!");
    }
  }
  if (ShowGameInfo) {
    const _0x4a6455 = getWorldData();
    if (ShowGameInfo) {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + string_format("进入世界 {} ，难度:{} 游戏模式:{} 游戏时间:{} 随机刻速度:{}", _0x4a6455.levelName, _0x4a6455.difficulty, _0x4a6455.gameType, _0x4a6455.time, _0x4a6455.randomTickSpeed));
    }
  }
}
globalThis.onPlayerBuildBlockEvent = function (_0x346a9d, _0x2e0537, _0x134471, _0x5e9c58, _0x58276a) {
  if (PVPDaLao) {
    setTitle("又或是建筑大佬");
  }
  const _0x530dd6 = getEntityCarriedItem(_0x346a9d);
  const _0x1d64a6 = getBlock(_0x2e0537, _0x134471, _0x5e9c58);
  if (ActivitySender) {
    sendChatMessage("我正在放置" + _0x530dd6.name);
  }
  if (ShowClickBlock) {
    clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + string_format(`命名空间:{}, §rID:{}, §r特殊值:{}
手持:{}-[{}], ID:{}, 特殊值:{}
坐标:[{}, {}, {}]`, _0x1d64a6.namespace, _0x1d64a6.id, _0x1d64a6.aux, _0x530dd6.name, _0x530dd6.namespace, _0x530dd6.id, _0x530dd6.aux, _0x2e0537, _0x134471, _0x5e9c58));
  }
  if (ClickTP) {
    MenuTP(_0x2e0537, _0x134471 + 1, _0x5e9c58);
  }
  if (ResShop && resList.includes(_0x530dd6.namespace)) {
    const _0x26286c = getEntityList();
    for (id of _0x26286c) {
      if (getEntityTypeId(id) === 16777999 || getEntityTypeId(id) === 16778099) {
        attack(id, AttackSwing);
        break;
      }
    }
  }
  if (FakeBuilder) {
    let _0x1eef8c = [[_0x2e0537, _0x134471 - 1, _0x5e9c58], [_0x2e0537, _0x134471 + 1, _0x5e9c58], [_0x2e0537, _0x134471, _0x5e9c58 - 1], [_0x2e0537, _0x134471, _0x5e9c58 + 1], [_0x2e0537 - 1, _0x134471, _0x5e9c58], [_0x2e0537 + 1, _0x134471, _0x5e9c58]];
    setBlock(_0x1eef8c[_0x58276a][0], _0x1eef8c[_0x58276a][1], _0x1eef8c[_0x58276a][2], _0x530dd6.namespace.replace("minecraft:", ""), _0x530dd6.aux);
    return true;
  }
  if (ClickBlock) {
    setBlock(_0x2e0537, _0x134471, _0x5e9c58, _0x530dd6.namespace.replace("minecraft:", ""), _0x530dd6.aux);
    return true;
  }
  if (ChestSteal && _0x1d64a6.namespace == "minecraft:chest") {
    isOpenChest = true;
    // TOLOOK
    // TOLOOK
    setTimeout(() => callModule(47, "{\"auto_close\":true,\"value\":true}"), steal_delay * 1000);
    // TOLOOK
    // TOLOOK
    setTimeout(() => {
      callModule(47, "{\"auto_close\":false,\"value\":false}");
      isOpenChest = false;
    }, (steal_delay + 0.05) * 1000);
  }
  if (ClickDestroy) {
    const _0x51f743 = getPlayerBlockPos(self_id);
    for (let _0x396466 = Math.ceil(-destroy_size / 2); _0x396466 < Math.floor(destroy_size / 2 + 1); _0x396466++) {
      for (let _0x16e233 = Math.ceil(-destroy_size / 2); _0x16e233 < Math.floor(destroy_size / 2 + 1); _0x16e233++) {
        for (let _0x489745 = Math.ceil(-destroy_size / 2); _0x489745 < Math.floor(destroy_size / 2 + 1); _0x489745++) {
          if (excludeFeet && _0x134471 + _0x16e233 <= _0x51f743.y - 1) {
            continue;
          }
          if (replace_block) {
            setBlock(_0x2e0537 + _0x396466, _0x134471 + _0x16e233, _0x5e9c58 + _0x489745, "air", 0);
          }
          if (!replace_block) {
            destroyBlock(self_id, _0x2e0537 + _0x396466, _0x134471 + _0x16e233, _0x5e9c58 + _0x489745, 0);
          }
          if (destroy_packet) {
            var _0x44a6c4 = {
              x: _0x51f743.x + _0x396466,
              y: _0x51f743.y + _0x16e233,
              z: _0x51f743.z + _0x489745
            };
            var _0x5adcd3 = {
              id: self_id,
              pos: _0x44a6c4,
              value: 1,
              type: 0
            };
            sendPlayerAction(_0x5adcd3);
            sendPlayerAction({
              id: self_id,
              pos: {
                x: _0x51f743.x + _0x396466,
                y: _0x51f743.y + _0x16e233,
                z: _0x51f743.z + _0x489745
              },
              value: 1,
              type: 26
            });
            sendPlayerAction({
              id: self_id,
              pos: {
                x: _0x51f743.x + _0x396466,
                y: _0x51f743.y + _0x16e233,
                z: _0x51f743.z + _0x489745
              },
              value: 1,
              type: 18
            });
            var _0x39c6db = {
              x: _0x51f743.x + _0x396466,
              y: _0x51f743.y + _0x16e233,
              z: _0x51f743.z + _0x489745
            };
            var _0x5b63d0 = {
              id: self_id,
              pos: _0x39c6db,
              value: 1,
              type: 2
            };
            sendPlayerAction(_0x5b63d0);
          }
        }
      }
    }
  }
  if (auto_bed && _0x1d64a6.namespace == "minecraft:bed" && !isBedbuild) {
    if (_0x530dd6.namespace == "minecraft:air") {
      clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §7>>>§r 请手持方块");
    }
    let _0x1053ce = [[_0x2e0537 + 1, _0x134471, _0x5e9c58], [_0x2e0537 - 1, _0x134471, _0x5e9c58], [_0x2e0537, _0x134471, _0x5e9c58 + 1], [_0x2e0537, _0x134471, _0x5e9c58 - 1], [_0x2e0537, _0x134471 + 1, _0x5e9c58]];
    isBedbuild = true;
    for (let _0x13965a of _0x1053ce) {
      const _0x2d2e63 = getBlock(_0x13965a[0], _0x13965a[1], _0x13965a[2]);
      if (_0x2d2e63.namespace == "minecraft:air") {
        HYTBuild(_0x13965a[0], _0x13965a[1], _0x13965a[2]);
      }
    }
    isBedbuild = false;
  }
  if (BlockIn && !isBlockin) {
    if (temp_pos.x == _0x2e0537 && temp_pos.y == _0x134471 && temp_pos.z == _0x5e9c58) {
      isBlockin = true;
      let _0x162b83 = getPlayerBlockPos(self_id);
      let _0x5a1a13 = [[_0x162b83.x, _0x162b83.y - 1, _0x162b83.z], [_0x162b83.x, _0x162b83.y + 2, _0x162b83.z], [_0x162b83.x + 1, _0x162b83.y, _0x162b83.z], [_0x162b83.x - 1, _0x162b83.y, _0x162b83.z], [_0x162b83.x, _0x162b83.y, _0x162b83.z + 1], [_0x162b83.x, _0x162b83.y, _0x162b83.z - 1], [_0x162b83.x + 1, _0x162b83.y + 1, _0x162b83.z], [_0x162b83.x - 1, _0x162b83.y + 1, _0x162b83.z], [_0x162b83.x, _0x162b83.y + 1, _0x162b83.z + 1], [_0x162b83.x, _0x162b83.y + 1, _0x162b83.z - 1]];
      for (pos of _0x5a1a13) {
        let _0x2b908d = getBlock(pos[0], pos[1], pos[2]);
        if (_0x2b908d.namespace == "minecraft:air") {
          buildBlock(self_id, pos[0], pos[1], pos[2], 0);
        }
      }
      temp_pos = {
        x: 0,
        y: 0,
        z: 0
      };
      isBlockin = false;
      return true;
    }
    if (temp_pos.x != _0x2e0537 || temp_pos.y != _0x134471 || temp_pos.z != _0x5e9c58) {
      temp_pos = {
        x: _0x2e0537,
        y: _0x134471,
        z: _0x5e9c58
      };
    }
  }
  if (Breaker && (_0x530dd6.namespace.includes("sword") || _0x530dd6.namespace.includes("pickaxe"))) {
    for (let _0x3950b2 = -5; _0x3950b2 <= 5; _0x3950b2++) {
      for (let _0x2ad82d = -5; _0x2ad82d < 5; _0x2ad82d++) {
        for (let _0x437cf9 = -5; _0x437cf9 <= 5; _0x437cf9++) {
          let _0x29a5e8 = _0x2e0537 + _0x3950b2;
          let _0x5a96d8 = _0x134471 + _0x2ad82d;
          let _0x445e8e = _0x5e9c58 + _0x437cf9;
          let _0x500a6c = getBlock(_0x29a5e8, _0x5a96d8, _0x445e8e);
          if (break_bed && _0x500a6c.namespace == "minecraft:bed" || break_chest && _0x500a6c.namespace == "minecraft:chest") {
            let _0x16da23 = getBlock(_0x29a5e8, _0x5a96d8 + 1, _0x445e8e);
            if (_0x16da23.namespace != "minecraft:air" && destroy_up) {
              _0x5a96d8 += 1;
            }
            destroyBlock(self_id, _0x29a5e8, _0x5a96d8, _0x445e8e, 0);
            var _0x34694f = {
              x: _0x29a5e8,
              y: _0x5a96d8,
              z: _0x445e8e
            };
            var _0x6a059f = {
              id: self_id,
              pos: _0x34694f,
              value: 1,
              type: 0
            };
            sendPlayerAction(_0x6a059f);
            var _0x53c069 = {
              x: _0x29a5e8,
              y: _0x5a96d8,
              z: _0x445e8e
            };
            var _0x339005 = {
              id: self_id,
              pos: _0x53c069,
              value: 1,
              type: 26
            };
            sendPlayerAction(_0x339005);
            var _0x1442f1 = {
              x: _0x29a5e8,
              y: _0x5a96d8,
              z: _0x445e8e
            };
            var _0x42b2ea = {
              id: self_id,
              pos: _0x1442f1,
              value: 1,
              type: 18
            };
            sendPlayerAction(_0x42b2ea);
            var _0x25c051 = {
              x: _0x29a5e8,
              y: _0x5a96d8,
              z: _0x445e8e
            };
            var _0x4b0693 = {
              id: self_id,
              pos: _0x25c051,
              value: 1,
              type: 2
            };
            sendPlayerAction(_0x4b0693);
            break;
          }
        }
      }
    }
  }
  if (block_ac_select && BlockClicker) {
    var _0x2ec0b0 = {
      x: _0x2e0537,
      y: _0x134471,
      z: _0x5e9c58
    };
    ac_pos.push(_0x2ec0b0);
    clientMessage("§3§l[NoveXare-Cracked]§r§7 >>> §rTip §7>>> §r" + string_format("已添加[{}, {}, {}]", _0x2e0537, _0x134471, _0x5e9c58));
    return true;
  }
  if (get_bed_pos && _0x1d64a6.namespace == "minecraft:bed") {
    bed_list = [];
    var _0x8fd16 = {
      x: _0x2e0537,
      y: _0x134471,
      z: _0x5e9c58
    };
    var _0x406252 = {
      team: "队伍 - A §e(自己)§r",
      pos: _0x8fd16
    };
    bed_list[0] = _0x406252;
    var _0x340cd1 = {
      x: -_0x2e0537,
      y: _0x134471,
      z: -_0x5e9c58
    };
    var _0x51da86 = {
      team: "队伍 - B",
      pos: _0x340cd1
    };
    bed_list[1] = _0x51da86;
    var _0x4974f2 = {
      x: _0x5e9c58,
      y: _0x134471,
      z: _0x2e0537
    };
    var _0x3290b0 = {
      team: "队伍 - C",
      pos: _0x4974f2
    };
    bed_list[2] = _0x3290b0;
    var _0x4c7134 = {
      x: -_0x5e9c58,
      y: _0x134471,
      z: -_0x2e0537
    };
    var _0x1bd803 = {
      team: "队伍 - D",
      pos: _0x4c7134
    };
    bed_list[3] = _0x1bd803;
    clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r BedList §7>>>§r " + JSON.stringify(bed_list, null, 2));
  }
  if (FastBuild && build_list.length === 0 && build_success) {
    const _0x18520b = getEntityRot(self_id);
    for (let _0x23ee73 = 0; _0x23ee73 < build_distance + 1; _0x23ee73++) {
      if (_0x18520b.yaw >= -45 && _0x18520b.yaw < 45) {
        var _0x300bb5 = {
          x: _0x2e0537,
          y: _0x134471,
          z: _0x5e9c58 + _0x23ee73
        };
        build_list.push(_0x300bb5);
      }
      if (_0x18520b.yaw >= 45 && _0x18520b.yaw < 135) {
        var _0x4028fb = {
          x: _0x2e0537 - _0x23ee73,
          y: _0x134471,
          z: _0x5e9c58
        };
        build_list.push(_0x4028fb);
      }
      if (_0x18520b.yaw >= 135 || _0x18520b.yaw < -135) {
        var _0x42bb06 = {
          x: _0x2e0537,
          y: _0x134471,
          z: _0x5e9c58 - _0x23ee73
        };
        build_list.push(_0x42bb06);
      }
      if (_0x18520b.yaw >= -135 && _0x18520b.yaw < -45) {
        var _0x286931 = {
          x: _0x2e0537 + _0x23ee73,
          y: _0x134471,
          z: _0x5e9c58
        };
        build_list.push(_0x286931);
      }
    }
    build_success = false;
    return true;
  }
  if (AntiTouch && (_0x1d64a6.namespace == "minecraft:chest" || _0x1d64a6.namespace == "minecraft:ender_chest")) {
    return true;
  }
};
function onKeyboardDownEvent(_0x3fc678) {
  if (ShowPressKey) {
    clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 按下键值 " + _0x3fc678);
  }
  if (key_bind_list.length > 0 && key_bind_list[_0x3fc678] != undefined) {
    callFunc(key_bind_list[_0x3fc678], !globalThis[key_bind_list[_0x3fc678]]);
  }
  if (isBinding != null) {
    key_bind_list[_0x3fc678] = isBinding;
    NoveXare-Cracked_Config.key_binds = key_bind_list;
    clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 绑定 " + isBinding + " 与键值 " + _0x3fc678);
    isBinding = null;
  }
}
function onKeyboardUpEvent(_0x180ad1) {
  if (ShowUpliftKey) {
    clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 释放键值 " + _0x180ad1);
  }
}
const default_config = readFile(config_path + "/" + getData("default_config", "null") + ".json");
if (default_config != "{}") {
  let list = JSON.parse(default_config);
  let num = 0;
  for (let key in list) {
    num++;
    if (key.includes("_mode")) {
      func_mode[key] = list[key];
      continue;
    }
    if (key != "cmd" && key != "binds") {
      globalThis[key] = list[key];
    }
  }
  bind_func = list.binds;
  if (list.cmd.length > 0) {
    list.cmd.map(_0x4196bb => PluginCMD(_0x4196bb));
  }
  clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "自动加载配置成功，共" + num + "条配置");
}
clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r §aNoveXare-Cracked 加载成功!");
clientMessage("§3§l[NoveXare-Cracked] §r§7>>>§r UI §7>>>§r 您当前使用的UI是: " + current_ui.name);
