clientMessage('§3§l[NoveXare] §r§7>>> §r已加载NoveXare自助查错脚本');
const main_path = getResource();

// 检查文件
const check_file_list = ['/NoveXare/Cleaner.json', '/NoveXare/PyRpc_Record.json', '/NoveXare/PyRpc_Config.json', '/NoveXare/FuncArrayList.json', '/NoveXare/PacketManager.json', '/NoveXare/PlayerAction.json', '/NoveXare/SmartInv.json', '/NoveXare/Staff.json'];
for (let file of check_file_list) {
    if (read_file(main_path + file) == '') clientMessage('§3§l[NoveXare] §r§7>>> §r缺少文件 >>> ' + file);
};
clientMessage('§3§l[NoveXare] §r§7>>> §r1.文件检查完毕');

// 检查JSON
const JSON_list = ['/NoveXare/Cleaner.json', '/NoveXare/PyRpc_Record.json', '/NoveXare/PyRpc_Config.json', '/NoveXare/FuncArrayList.json', '/NoveXare/PacketManager.json', '/NoveXare/PlayerAction.json', '/NoveXare/SmartInv.json', '/NoveXare/Staff.json', '/ui/ui_definition.json'];
for (let file of JSON_list) {
    const content = read_file(main_path + file);
    if (content === '') {
        clientMessage('§3§l[NoveXare] §r§7>>> §rJSON为空 >>> ' + file);
        continue;
    };
    try {
        let tmp = JSON.parse(content);
        if ()
    } catch (e) {
        clientMessage('§3§l[NoveXare] §r§7>>> §rJSON存在注释 >>> ' + file + '\n' + e.toString());
    };
};
clientMessage('§3§l[NoveXare] §r§7>>> §r2.JSON检查完毕');

// 检查初始化文件
const frist = read_file(main_path + '/frist_use.txt');
if (frist == '') clientMessage('§3§l[NoveXare] §r§7>>> §r初始化文件为空');
clientMessage('§3§l[NoveXare] §r§7>>> §r3.初始化检查完毕');

// 网络检查
const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36 Edg/99.0.1150.55',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
};

const t1 = Date.now();
curl_get('https://www.baidu.com', headers, function(result_code, data) {
    const t2 = Date.now();
    if (data == '') clientMessage('§3§l[NoveXare] §r§7>>> §rhttp请求延迟:' + t2 - t1 + 'ms');
});
clientMessage('§3§l[NoveXare] §r§7>>> §r4.网络检查完毕');

// UI配置检查
const ui_file = read_file(main_path + '/ui/NoveXare.json');
const ui_definition = read_file(main_path + '/ui/ui_definition.json');
const script_list = file_list(main_path + '/script');

try {
    let tmp = JSON.parse(ui_file);
    let tmp2 = JSON.parse(ui_definition);
    if (script_list.every(file => (file.name != tmp.items[0]['load_script']))) clientMessage('§3§l[NoveXare] §r§7>>> §r缺少脚本文件 请尝试更改脚本名字');
    if (!tmp2.ui.includes('NoveXare')) clientMessage('§3§l[NoveXare] §r§7>>> §rui_definition中缺少定义NoveXare');
} catch (e) {
    clientMessage('§3§l[NoveXare] §r§7>>> §rNoveXare UI文件存在注释 >>> ' + e.toString());
};
clientMessage('§3§l[NoveXare] §r§7>>> §r5.UI配置检查完毕');

clientMessage('§3§l[NoveXare] §r§7>>> §rEND.已全部检查完毕，如问题仍未解决，请查看更新群群文件或者群消息，再不行请带视频私聊反馈给开发者');

thread(() => exit(), 1000);