/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

Array.prototype.column = function (k) { return this.map (function (t) { return k ? eval ("t." + k) : t; }); };
Array.prototype.diff = function (a, k) { return this.filter (function (i) { return a.column (k).indexOf (eval ("i." + k)) < 0; }); };
Array.prototype.max = function (k) { return Math.max.apply (null, this.column (k)); };
Array.prototype.min = function (k) { return Math.min.apply (null, this.column (k)); };
Array.prototype.search = function (k, i) { return (i = this.column (k).indexOf (i)) == -1 ? null : this[i]; };


$(function () {
  window.vars = {
    $: {
      body: $('body'),
      resultPokemons: $('#result_pokemons'),
      searchInput: $('#search_input'),
    },
    pokemons: [{id: '001', tr: '妙蛙種子', jp: 'フシギダネ', en: 'Bulbasaur', maxCp: 1071, vals: {atk: 126, def:126, hp:90}}, {id: '002', from: {id: '001', str: '25 顆糖'}, tr: '妙蛙草', jp: 'フシギソウ', en: 'Ivysaur', maxCp: 1632, vals: {atk: 156, def:158, hp:120}}, {id: '003', from: {id: '002', str: '100 顆糖'}, tr: '妙蛙花', jp: 'フシギバナ', en: 'Venusaur', maxCp: 2580, vals: {atk: 198, def:200, hp:160}}, {id: '004', tr: '小火龍', jp: 'ヒトカゲ', en: 'Charmander', maxCp: 955, vals: {atk: 128, def:108, hp:78}}, {id: '005', from: {id: '004', str: '25 顆糖'}, tr: '火恐龍', jp: 'リザード', en: 'Charmeleon', maxCp: 1557, vals: {atk: 160, def:140, hp:116}}, {id: '006', from: {id: '005', str: '100 顆糖'}, tr: '噴火龍', jp: 'リザードン', en: 'Charizard', maxCp: 2602, vals: {atk: 212, def:182, hp:156}}, {id: '007', tr: '傑尼龜', jp: 'ゼニガメ', en: 'Squirtle', maxCp: 1008, vals: {atk: 112, def:142, hp:88}}, {id: '008', from: {id: '007', str: '25 顆糖'}, tr: '卡咪龜', jp: 'カメール', en: 'Wartortle', maxCp: 1582, vals: {atk: 144, def:176, hp:118}}, {id: '009', from: {id: '008', str: '100 顆糖'}, tr: '水箭龜', jp: 'カメックス', en: 'Blastoise', maxCp: 2542, vals: {atk: 186, def:222, hp:158}}, {id: '010', tr: '綠毛蟲', jp: 'キャタピー', en: 'Caterpie', maxCp: 443, vals: {atk: 62, def:66, hp:90}}, {id: '011', from: {id: '010', str: '12 顆糖'}, tr: '鐵甲蛹', jp: 'トランセル', en: 'Metapod', maxCp: 477, vals: {atk: 56, def:86, hp:100}}, {id: '012', from: {id: '011', str: '50 顆糖'}, tr: '巴大蝶', jp: 'バタフリー', en: 'Butterfree', maxCp: 1454, vals: {atk: 144, def:144, hp:120}}, {id: '013', tr: '獨角蟲', jp: 'ビードル', en: 'Weedle', maxCp: 449, vals: {atk: 68, def:64, hp:80}}, {id: '014', from: {id: '013', str: '12 顆糖'}, tr: '鐵殼蛹', jp: 'コクーン', en: 'Kakuna', maxCp: 485, vals: {atk: 62, def:82, hp:90}}, {id: '015', from: {id: '014', str: '50 顆糖'}, tr: '大針蜂', jp: 'スピアー', en: 'Beedrill', maxCp: 1439, vals: {atk: 144, def:130, hp:130}}, {id: '016', tr: '波波', jp: 'ポッポ', en: 'Pidgey', maxCp: 679, vals: {atk: 94, def:90, hp:80}}, {id: '017', from: {id: '016', str: '12 顆糖'}, tr: '比比鳥', jp: 'ピジョン', en: 'Pidgeotto', maxCp: 1223, vals: {atk: 126, def:122, hp:126}}, {id: '018', from: {id: '017', str: '50 顆糖'}, tr: '大比鳥', jp: 'ピジョット', en: 'Pidgeot', maxCp: 2091, vals: {atk: 170, def:166, hp:166}}, {id: '019', tr: '小拉達', jp: 'コラッタ', en: 'Rattata', maxCp: 581, vals: {atk: 92, def:86, hp:60}}, {id: '020', from: {id: '019', str: '25 顆糖'}, tr: '拉達', jp: 'ラッタ', en: 'Raticate', maxCp: 1444, vals: {atk: 146, def:150, hp:110}}, {id: '021', tr: '烈雀', jp: 'オニスズメ', en: 'Spearow', maxCp: 686, vals: {atk: 102, def:78, hp:80}}, {id: '022', from: {id: '021', str: '50 顆糖'}, tr: '大嘴雀', jp: 'オニドリル', en: 'Fearow', maxCp: 1746, vals: {atk: 168, def:146, hp:130}}, {id: '023', tr: '阿柏蛇', jp: 'アーボ', en: 'Ekans', maxCp: 824, vals: {atk: 112, def:112, hp:70}}, {id: '024', from: {id: '023', str: '50 顆糖'}, tr: '阿柏怪', jp: 'アーボック', en: 'Arbok', maxCp: 1767, vals: {atk: 166, def:166, hp:120}}, {id: '025', tr: '皮卡丘', jp: 'ピカチュウ', en: 'Pikachu', maxCp: 887, vals: {atk: 124, def:108, hp:70}}, {id: '026', from: {id: '025', str: '50 顆糖'}, tr: '雷丘', jp: 'ライチュウ', en: 'Raichu', maxCp: 2028, vals: {atk: 200, def:154, hp:120}}, {id: '027', tr: '穿山鼠', jp: 'サンド', en: 'Sandshrew', maxCp: 798, vals: {atk: 90, def:114, hp:100}}, {id: '028', from: {id: '027', str: '50 顆糖'}, tr: '穿山王', jp: 'サンドパン', en: 'Sandslash', maxCp: 1810, vals: {atk: 150, def:172, hp:150}}, {id: '029', tr: '尼多蘭', jp: 'ニドラン♀', en: 'Nidoran♀', maxCp: 876, vals: {atk: 100, def:104, hp:110}}, {id: '030', from: {id: '029', str: '25 顆糖'}, tr: '尼多娜', jp: 'ニドリーナ', en: 'Nidorina', maxCp: 1404, vals: {atk: 132, def:136, hp:140}}, {id: '031', from: {id: '030', str: '100 顆糖'}, tr: '尼多后', jp: 'ニドクイン', en: 'Nidoqueen', maxCp: 2485, vals: {atk: 184, def:190, hp:180}}, {id: '032', tr: '尼多朗', jp: 'ニドラン♂', en: 'Nidoran♂', maxCp: 843, vals: {atk: 110, def:94, hp:92}}, {id: '033', from: {id: '032', str: '25 顆糖'}, tr: '尼多力諾', jp: 'ニドリーノ', en: 'Nidorino', maxCp: 1372, vals: {atk: 142, def:128, hp:122}}, {id: '034', from: {id: '033', str: '100 顆糖'}, tr: '尼多王', jp: 'ニドキング', en: 'Nidoking', maxCp: 2475, vals: {atk: 204, def:170, hp:162}}, {id: '035', tr: '皮皮', jp: 'ピッピ', en: 'Clefairy', maxCp: 1200, vals: {atk: 116, def:124, hp:140}}, {id: '036', from: {id: '035', str: '50 顆糖'}, tr: '皮可西', jp: 'ピクシー', en: 'Clefable', maxCp: 2397, vals: {atk: 178, def:178, hp:190}}, {id: '037', tr: '六尾', jp: 'ロコン', en: 'Vulpix', maxCp: 831, vals: {atk: 106, def:118, hp:76}}, {id: '038', from: {id: '037', str: '50 顆糖'}, tr: '九尾', jp: 'キュウコン', en: 'Ninetales', maxCp: 2188, vals: {atk: 176, def:194, hp:146}}, {id: '039', tr: '胖丁', jp: 'プリン', en: 'Jigglypuff', maxCp: 917, vals: {atk: 98, def:54, hp:230}}, {id: '040', from: {id: '039', str: '50 顆糖'}, tr: '胖可丁', jp: 'プクリン', en: 'Wigglytuff', maxCp: 2177, vals: {atk: 168, def:108, hp:280}}, {id: '041', tr: '超音蝠', jp: 'ズバット', en: 'Zubat', maxCp: 642, vals: {atk: 88, def:90, hp:80}}, {id: '042', from: {id: '041', str: '50 顆糖'}, tr: '大嘴蝠', jp: 'ゴルバット', en: 'Golbat', maxCp: 1921, vals: {atk: 164, def:164, hp:150}}, {id: '043', tr: '走路草', jp: 'ナゾノクサ', en: 'Oddish', maxCp: 1148, vals: {atk: 134, def:130, hp:90}}, {id: '044', from: {id: '043', str: '25 顆糖'}, tr: '臭臭花', jp: 'クサイハナ', en: 'Gloom', maxCp: 1689, vals: {atk: 162, def:158, hp:120}}, {id: '045', from: {id: '044', str: '100 顆糖'}, tr: '霸王花', jp: 'ラフレシア', en: 'Vileplume', maxCp: 2492, vals: {atk: 202, def:190, hp:150}}, {id: '046', tr: '派拉斯', jp: 'パラス', en: 'Paras', maxCp: 916, vals: {atk: 122, def:120, hp:70}}, {id: '047', from: {id: '046', str: '50 顆糖'}, tr: '派拉斯特', jp: 'パラセクト', en: 'Parasect', maxCp: 1747, vals: {atk: 162, def:170, hp:120}}, {id: '048', tr: '毛球', jp: 'コンパン', en: 'Venonat', maxCp: 1029, vals: {atk: 108, def:118, hp:120}}, {id: '049', from: {id: '048', str: '50 顆糖'}, tr: '摩魯蛾', jp: 'モルフォン', en: 'Venomoth', maxCp: 1890, vals: {atk: 172, def:154, hp:140}}, {id: '050', tr: '地鼠', jp: 'ディグダ', en: 'Diglett', maxCp: 456, vals: {atk: 108, def:86, hp:20}}, {id: '051', from: {id: '050', str: '50 顆糖'}, tr: '三地鼠', jp: 'ダグトリオ', en: 'Dugtrio', maxCp: 1168, vals: {atk: 148, def:140, hp:70}}, {id: '052', tr: '喵喵', jp: 'ニャース', en: 'Meowth', maxCp: 756, vals: {atk: 104, def:94, hp:80}}, {id: '053', from: {id: '052', str: '50 顆糖'}, tr: '貓老大', jp: 'ペルシアン', en: 'Persian', maxCp: 1631, vals: {atk: 156, def:146, hp:130}}, {id: '054', tr: '可達鴨', jp: 'コダック', en: 'Psyduck', maxCp: 1109, vals: {atk: 132, def:112, hp:100}}, {id: '055', from: {id: '054', str: '50 顆糖'}, tr: '哥達鴨', jp: 'ゴルダック', en: 'Golduck', maxCp: 2386, vals: {atk: 194, def:176, hp:160}}, {id: '056', tr: '猴怪', jp: 'マンキー', en: 'Mankey', maxCp: 878, vals: {atk: 122, def:96, hp:80}}, {id: '057', from: {id: '056', str: '50 顆糖'}, tr: '火爆猴', jp: 'オコリザル', en: 'Primeape', maxCp: 1864, vals: {atk: 178, def:150, hp:130}}, {id: '058', tr: '卡蒂狗', jp: 'ガーディ', en: 'Growlithe', maxCp: 1335, vals: {atk: 156, def:110, hp:110}}, {id: '059', from: {id: '058', str: '50 顆糖'}, tr: '風速狗', jp: 'ウインディ', en: 'Arcanine', maxCp: 2983, vals: {atk: 230, def:180, hp:180}}, {id: '060', tr: '蚊香蝌蚪', jp: 'ニョロモ', en: 'Poliwag', maxCp: 795, vals: {atk: 108, def:98, hp:80}}, {id: '061', from: {id: '060', str: '25 顆糖'}, tr: '蚊香君', jp: 'ニョロゾ', en: 'Poliwhirl', maxCp: 1340, vals: {atk: 132, def:132, hp:130}}, {id: '062', from: {id: '061', str: '100 顆糖'}, tr: '蚊香泳士', jp: 'ニョロボン', en: 'Poliwrath', maxCp: 2505, vals: {atk: 180, def:202, hp:180}}, {id: '063', tr: '凱西', jp: 'ケーシィ', en: 'Abra', maxCp: 600, vals: {atk: 110, def:76, hp:50}}, {id: '064', from: {id: '063', str: '25 顆糖'}, tr: '勇基拉', jp: 'ユンゲラー', en: 'Kadabra', maxCp: 1131, vals: {atk: 150, def:112, hp:80}}, {id: '065', from: {id: '064', str: '100 顆糖'}, tr: '胡地', jp: 'フーディン', en: 'Alakazam', maxCp: 1813, vals: {atk: 186, def:152, hp:110}}, {id: '066', tr: '腕力', jp: 'ワンリキー', en: 'Machop', maxCp: 1089, vals: {atk: 118, def:96, hp:140}}, {id: '067', from: {id: '066', str: '25 顆糖'}, tr: '豪力', jp: 'ゴーリキー', en: 'Machoke', maxCp: 1760, vals: {atk: 154, def:144, hp:160}}, {id: '068', from: {id: '067', str: '100 顆糖'}, tr: '怪力', jp: 'カイリキー', en: 'Machamp', maxCp: 2594, vals: {atk: 198, def:180, hp:180}}, {id: '069', tr: '喇叭芽', jp: 'マダツボミ', en: 'Bellsprout', maxCp: 1117, vals: {atk: 158, def:78, hp:100}}, {id: '070', from: {id: '069', str: '25 顆糖'}, tr: '口呆花', jp: 'ウツドン', en: 'Weepinbell', maxCp: 1723, vals: {atk: 190, def:110, hp:130}}, {id: '071', from: {id: '070', str: '100 顆糖'}, tr: '大食花', jp: 'ウツボット', en: 'Victreebel', maxCp: 2530, vals: {atk: 222, def:152, hp:160}}, {id: '072', tr: '瑪瑙水母', jp: 'メノクラゲ', en: 'Tentacool', maxCp: 905, vals: {atk: 106, def:136, hp:80}}, {id: '073', from: {id: '072', str: '50 顆糖'}, tr: '毒刺水母', jp: 'ドククラゲ', en: 'Tentacruel', maxCp: 2220, vals: {atk: 170, def:196, hp:160}}, {id: '074', tr: '小拳石', jp: 'イシツブテ', en: 'Geodude', maxCp: 849, vals: {atk: 106, def:118, hp:80}}, {id: '075', from: {id: '074', str: '25 顆糖'}, tr: '隆隆石', jp: 'ゴローン', en: 'Graveler', maxCp: 1433, vals: {atk: 142, def:156, hp:110}}, {id: '076', from: {id: '075', str: '100 顆糖'}, tr: '隆隆岩', jp: 'ゴローニャ', en: 'Golem', maxCp: 2303, vals: {atk: 176, def:198, hp:160}}, {id: '077', tr: '小火馬', jp: 'ポニータ', en: 'Ponyta', maxCp: 1516, vals: {atk: 168, def:138, hp:100}}, {id: '078', from: {id: '077', str: '50 顆糖'}, tr: '烈焰馬', jp: 'ギャロップ', en: 'Rapidash', maxCp: 2199, vals: {atk: 200, def:170, hp:130}}, {id: '079', tr: '呆呆獸', jp: 'ヤドン', en: 'Slowpoke', maxCp: 1218, vals: {atk: 110, def:110, hp:180}}, {id: '080', from: {id: '079', str: '50 顆糖'}, tr: '呆殼獸', jp: 'ヤドラン', en: 'Slowbro', maxCp: 2597, vals: {atk: 184, def:198, hp:190}}, {id: '081', tr: '小磁怪', jp: 'コイル', en: 'Magnemite', maxCp: 890, vals: {atk: 128, def:138, hp:50}}, {id: '082', from: {id: '081', str: '50 顆糖'}, tr: '三合一磁怪', jp: 'レアコイル', en: 'Magneton', maxCp: 1879, vals: {atk: 186, def:180, hp:100}}, {id: '083', tr: '大蔥鴨', jp: 'カモネギ', en: 'Farfetch', maxCp: 1263, vals: {atk: 138, def:132, hp:104}}, {id: '084', tr: '嘟嘟', jp: 'ドードー', en: 'Doduo', maxCp: 855, vals: {atk: 126, def:96, hp:70}}, {id: '085', from: {id: '084', str: '50 顆糖'}, tr: '嘟嘟利', jp: 'ドードリオ', en: 'Dodrio', maxCp: 1836, vals: {atk: 182, def:150, hp:120}}, {id: '086', tr: '小海獅', jp: 'パウワウ', en: 'Seel', maxCp: 1107, vals: {atk: 104, def:138, hp:130}}, {id: '087', from: {id: '086', str: '50 顆糖'}, tr: '白海獅', jp: 'ジュゴン', en: 'Dewgong', maxCp: 2145, vals: {atk: 156, def:192, hp:180}}, {id: '088', tr: '臭泥', jp: 'ベトベター', en: 'Grimer', maxCp: 1284, vals: {atk: 124, def:110, hp:160}}, {id: '089', from: {id: '088', str: '50 顆糖'}, tr: '臭臭泥', jp: 'ベトベトン', en: 'Muk', maxCp: 2602, vals: {atk: 180, def:188, hp:210}}, {id: '090', tr: '大舌貝', jp: 'シェルダー', en: 'Shellder', maxCp: 822, vals: {atk: 120, def:112, hp:60}}, {id: '091', from: {id: '090', str: '50 顆糖'}, tr: '刺甲貝', jp: 'パルシェン', en: 'Cloyster', maxCp: 2052, vals: {atk: 196, def:196, hp:100}}, {id: '092', tr: '鬼斯', jp: 'ゴース', en: 'Gastly', maxCp: 804, vals: {atk: 136, def:82, hp:60}}, {id: '093', from: {id: '092', str: '25 顆糖'}, tr: '鬼斯通', jp: 'ゴースト', en: 'Haunter', maxCp: 1380, vals: {atk: 172, def:118, hp:90}}, {id: '094', from: {id: '093', str: '100 顆糖'}, tr: '耿鬼', jp: 'ゲンガー', en: 'Gengar', maxCp: 2078, vals: {atk: 204, def:156, hp:120}}, {id: '095', tr: '大岩蛇', jp: 'イワーク', en: 'Onix', maxCp: 857, vals: {atk: 90, def:186, hp:70}}, {id: '096', tr: '催眠貘', jp: 'スリープ', en: 'Drowzee', maxCp: 1075, vals: {atk: 104, def:140, hp:120}}, {id: '097', from: {id: '096', str: '50 顆糖'}, tr: '引夢貘人', jp: 'スリーパー', en: 'Hypno', maxCp: 2184, vals: {atk: 162, def:196, hp:170}}, {id: '098', tr: '大鉗蟹', jp: 'クラブ', en: 'Krabby', maxCp: 792, vals: {atk: 116, def:110, hp:60}}, {id: '099', from: {id: '098', str: '50 顆糖'}, tr: '巨鉗蟹', jp: 'キングラー', en: 'Kingler', maxCp: 1823, vals: {atk: 178, def:168, hp:110}}, {id: '100', tr: '霹靂電球', jp: 'ビリリダマ', en: 'Voltorb', maxCp: 839, vals: {atk: 102, def:124, hp:80}}, {id: '101', from: {id: '100', str: '50 顆糖'}, tr: '頑皮雷彈', jp: 'マルマイン', en: 'Electrode', maxCp: 1646, vals: {atk: 150, def:174, hp:120}}, {id: '102', tr: '蛋蛋', jp: 'タマタマ', en: 'Exeggcute', maxCp: 1099, vals: {atk: 110, def:132, hp:120}}, {id: '103', from: {id: '102', str: '50 顆糖'}, tr: '椰蛋樹', jp: 'ナッシー', en: 'Exeggutor', maxCp: 2955, vals: {atk: 232, def:164, hp:190}}, {id: '104', tr: '卡拉卡拉', jp: 'カラカラ', en: 'Cubone', maxCp: 1006, vals: {atk: 102, def:150, hp:100}}, {id: '105', from: {id: '104', str: '50 顆糖'}, tr: '嘎啦嘎啦', jp: 'ガラガラ', en: 'Marowak', maxCp: 1656, vals: {atk: 140, def:202, hp:120}}, {id: '106', tr: '飛腿郎', jp: 'サワムラー', en: 'Hitmonlee', maxCp: 1492, vals: {atk: 148, def:172, hp:100}}, {id: '107', tr: '快拳郎', jp: 'エビワラー', en: 'Hitmonchan', maxCp: 1516, vals: {atk: 138, def:204, hp:100}}, {id: '108', tr: '大舌頭', jp: 'ベロリンガ', en: 'Lickitung', maxCp: 1626, vals: {atk: 126, def:160, hp:180}}, {id: '109', tr: '瓦斯彈', jp: 'ドガース', en: 'Koffing', maxCp: 1151, vals: {atk: 136, def:142, hp:80}}, {id: '110', from: {id: '109', str: '50 顆糖'}, tr: '雙彈瓦斯', jp: 'マタドガス', en: 'Weezing', maxCp: 2250, vals: {atk: 190, def:198, hp:130}}, {id: '111', tr: '獨角犀牛', jp: 'サイホーン', en: 'Rhyhorn', maxCp: 1182, vals: {atk: 110, def:116, hp:160}}, {id: '112', from: {id: '111', str: '50 顆糖'}, tr: '鑽角犀獸', jp: 'サイドン', en: 'Rhydon', maxCp: 2243, vals: {atk: 166, def:160, hp:210}}, {id: '113', tr: '吉利蛋', jp: 'ラッキー', en: 'Chansey', maxCp: 675, vals: {atk: 40, def:60, hp:500}}, {id: '114', tr: '蔓藤怪', jp: 'モンジャラ', en: 'Tangela', maxCp: 1739, vals: {atk: 164, def:152, hp:130}}, {id: '115', tr: '袋獸', jp: 'ガルーラ', en: 'Kangaskhan', maxCp: 2043, vals: {atk: 142, def:178, hp:210}}, {id: '116', tr: '墨海馬', jp: 'タッツー', en: 'Horsea', maxCp: 794, vals: {atk: 122, def:100, hp:60}}, {id: '117', from: {id: '116', str: '50 顆糖'}, tr: '海刺龍', jp: 'シードラ', en: 'Seadra', maxCp: 1713, vals: {atk: 176, def:150, hp:110}}, {id: '118', tr: '角金魚', jp: 'トサキント', en: 'Goldeen', maxCp: 965, vals: {atk: 112, def:126, hp:90}}, {id: '119', from: {id: '118', str: '50 顆糖'}, tr: '金魚王', jp: 'アズマオウ', en: 'Seaking', maxCp: 2043, vals: {atk: 172, def:160, hp:160}}, {id: '120', tr: '海星星', jp: 'ヒトデマン', en: 'Staryu', maxCp: 937, vals: {atk: 130, def:128, hp:60}}, {id: '121', from: {id: '120', str: '50 顆糖'}, tr: '寶石海星', jp: 'スターミー', en: 'Starmie', maxCp: 2182, vals: {atk: 194, def:192, hp:120}}, {id: '122', tr: '魔牆人偶', jp: 'バリヤード', en: 'Mr. Mime', maxCp: 1494, vals: {atk: 154, def:196, hp:80}}, {id: '123', tr: '飛天螳螂', jp: 'ストライク', en: 'Scyther', maxCp: 2073, vals: {atk: 176, def:180, hp:140}}, {id: '124', tr: '迷唇姐', jp: 'ルージュラ', en: 'Jynx', maxCp: 1716, vals: {atk: 172, def:134, hp:130}}, {id: '125', tr: '電擊獸', jp: 'エレブー', en: 'Electabuzz', maxCp: 2119, vals: {atk: 198, def:160, hp:130}}, {id: '126', tr: '鴨嘴火獸', jp: 'ブーバー', en: 'Magmar', maxCp: 2265, vals: {atk: 214, def:158, hp:130}}, {id: '127', tr: '凱羅斯', jp: 'カイロス', en: 'Pinsir', maxCp: 2121, vals: {atk: 184, def:186, hp:130}}, {id: '128', tr: '肯泰羅', jp: 'ケンタロス', en: 'Tauros', maxCp: 1844, vals: {atk: 148, def:184, hp:150}}, {id: '129', tr: '鯉魚王', jp: 'コイキング', en: 'Magikarp', maxCp: 262, vals: {atk: 42, def:84, hp:40}}, {id: '130', from: {id: '129', str: '400 顆糖'}, tr: '暴鯉龍', jp: 'ギャラドス', en: 'Gyarados', maxCp: 2688, vals: {atk: 192, def:196, hp:190}}, {id: '131', tr: '拉普拉斯', jp: 'ラプラス', en: 'Lapras', maxCp: 2980, vals: {atk: 186, def:190, hp:260}}, {id: '132', tr: '百變怪', jp: 'メタモン', en: 'Ditto', maxCp: 919, vals: {atk: 110, def:110, hp:96}}, {id: '133', tr: '伊布', jp: 'イーブイ', en: 'Eevee', maxCp: 1077, vals: {atk: 114, def:128, hp:110}}, {id: '134', from: {id: '133', str: '25 顆糖(R ainer)'}, tr: '水伊布', jp: 'シャワーズ', en: 'Vaporeon', maxCp: 2816, vals: {atk: 186, def:168, hp:260}}, {id: '135', from: {id: '133', str: '25 顆糖(S parky)'}, tr: '雷伊布', jp: 'サンダース', en: 'Jolteon', maxCp: 2140, vals: {atk: 192, def:174, hp:130}}, {id: '136', from: {id: '133', str: '25 顆糖 (Pyro)'}, tr: '火伊布', jp: 'ブースター', en: 'Flareon', maxCp: 2643, vals: {atk: 238, def:178, hp:130}}, {id: '137', tr: '多邊獸', jp: 'ポリゴン', en: 'Porygon', maxCp: 1691, vals: {atk: 156, def:158, hp:130}}, {id: '138', tr: '菊石獸', jp: 'オムナイト', en: 'Omanyte', maxCp: 1119, vals: {atk: 132, def:160, hp:70}}, {id: '139', from: {id: '138', str: '50 顆糖'}, tr: '多刺菊石獸', jp: 'オムスター', en: 'Omastar', maxCp: 2233, vals: {atk: 180, def:202, hp:140}}, {id: '140', tr: '化石盔', jp: 'カブト', en: 'Kabuto', maxCp: 1104, vals: {atk: 148, def:142, hp:60}}, {id: '141', from: {id: '140', str: '50 顆糖'}, tr: '鐮刀盔', jp: 'カブトプス', en: 'Kabutops', maxCp: 2130, vals: {atk: 190, def:190, hp:120}}, {id: '142', tr: '化石翼龍', jp: 'プテラ', en: 'Aerodactyl', maxCp: 2165, vals: {atk: 182, def:162, hp:160}}, {id: '143', tr: '卡比獸', jp: 'カビゴン', en: 'Snorlax', maxCp: 3112, vals: {atk: 180, def:180, hp:320}}, {id: '144', tr: '急凍鳥', jp: 'フリーザー', en: 'Articuno', maxCp: 2978, vals: {atk: 198, def:242, hp:180}}, {id: '145', tr: '閃電鳥', jp: 'サンダー', en: 'Zapdos', maxCp: 3114, vals: {atk: 232, def:194, hp:180}}, {id: '146', tr: '火焰鳥', jp: 'ファイヤー', en: 'Moltres', maxCp: 3240, vals: {atk: 242, def:194, hp:180}}, {id: '147', tr: '迷你龍', jp: 'ミニリュウ', en: 'Dratini', maxCp: 983, vals: {atk: 128, def:110, hp:82}}, {id: '148', from: {id: '147', str: '25 顆糖'}, tr: '哈克龍', jp: 'ハクリュー', en: 'Dragonair', maxCp: 1747, vals: {atk: 170, def:152, hp:122}}, {id: '149', from: {id: '148', str: '100 顆糖'}, tr: '快龍', jp: 'カイリュー', en: 'Dragonite', maxCp: 3500, vals: {atk: 250, def:212, hp:182}}, {id: '150', tr: '超夢', jp: 'ミュウツー', en: 'Mewtwo', maxCp: 4144, vals: {atk: 284, def:202, hp:212}}, {id: '151', tr: '夢幻', jp: 'ミュウ', en: 'Mew', maxCp: 3299, vals: {atk: 220, def:220, hp:200}}],
    hots: ['133', '129', '147', '148', '058', '001', '004', '007', '002', '005', '008', '025', '043', '069', '060', '079', '063', '092', '044', '070', '064', '061', '093', '120'],
  };
  window.vars.evolutions = window.vars.pokemons.filter (function (t) { return typeof t.from !== 'undefined'; });
  


  window.func = {
    getStorage: function (key) { return ((typeof (Storage) !== 'undefined') && (value = localStorage.getItem (key)) && (value = JSON.parse (value))) ? value : undefined; },
    setStorage: function (key, data) { if (typeof (Storage) !== 'undefined') { localStorage.setItem (key, JSON.stringify (data)); return true; } return false; },
    sort: function (str) {
      var sort = window.vars.$.sort.filter (':checked').val ();
      sort = typeof sort == 'undefined' ? window.vars.$.sort.first ().val () : sort;
      var type = window.vars.$.type.filter (':checked').val ();
      type = typeof type == 'undefined' ? window.vars.$.type.first ().val () : type;
      var $pokemon = window.vars.$.pokemon;
      
      if (!(typeof (str) == 'undefined' || !str.length)) $pokemon = window.vars.$.pokemon.filter ('[data-str*="' + str + '"]');
      $pokemon = $pokemon.attr ('class', type + ' _p').toArray ().sort (function (a, b) {
        var $a = $(a), $b = $(b);
        
        switch (sort) {
          case 'en':
            return $a.data (sort).localeCompare ($b.data (sort));
            break;

          case 'id':
          case 'his':
          case 'hot':
            return $a.data (sort) - $b.data (sort);
            break;

          case 'cp':
            return $b.data (sort) - $a.data (sort);
            break;
        };
      });
      window.vars.$.pokemons.empty ().append ($pokemon);
    },
    evolutionTos: function (id) {
      var tos = [],
          pokemons = window.vars.evolutions.filter (function (t) {
            return typeof t.from.id !== 'undefined' && (t.from.id == id);
          });

      if (pokemons.length) {
        tos = tos.concat (pokemons.column ('id'));
        pokemons.forEach (function (t) {
          tos = tos.concat (window.func.evolutionTos (t.id));
        });

      }
      return tos;
    },
    range: function (vals) {
      var min = Math.floor ((vals.atk + 0) * Math.sqrt (vals.def + 0) * Math.sqrt (vals.hp + 0));
      var max = Math.floor ((vals.atk + 15) * Math.sqrt (vals.def + 15) * Math.sqrt (vals.hp + 15));

      return {
        min: min > 10 ? min : min,
        max: max > 10 ? max : max,
      };
    },
    evolution: function (id, cp) {
      
      var now = {
        pokemon: t = window.vars.pokemons.search ('id', id),
        range: window.func.range (t.vals),
        cp: cp
      };

      var tos = window.func.evolutionTos (id).map (function (t) {
        var pokemon = window.vars.pokemons.search ('id', t);
        var range = window.func.range (pokemon.vals);
        var tmp = [Math.floor (cp * range.min / now.range.min), Math.floor (cp * range.max / now.range.max)];
        range = { min: tmp.min (), max: tmp.max () };

        return {
          pokemon: pokemon,
          range: range,
          cp: Math.floor ((cp - now.range.min) * (range.max - range.min) / (now.range.max - now.range.min) + range.min)
        };
      });

      return {
        now: now,
        tos: tos,
      };
    },
    resultHtml: function (data, isNow) {
      var src = 'img/pokemons/150/' + data.pokemon.id + '.png';
      var $pokemon = $('<a />').addClass ('_p').addClass ('pokemon').attr ('data-id', data.pokemon.id).append (
        $('<img />').attr ('src', src)).append (
        $('<span />').text (data.pokemon.tr)).append (
        $('<div />').text (isNow ? data.cp : data.range.min + ' ~ ' + data.range.max));

      if (typeof data.pokemon.from !== 'undefined')
        $pokemon.attr ('data-condition', data.pokemon.from.str);

      return $pokemon;
    },
    search: function (id) {
      var pokemon = window.vars.pokemons.search ('id', id.toString ());
      
      if (isNaN (id) || !pokemon) return false;

      window.func.schedulePrompt (function ($input) {
          var prompt = $(this).get (0),
              cp = $input.val ();
              prompt.loading ('讀取中..');
          
          if (!cp.length) return prompt.close ();
          if (isNaN (cp)) return prompt.close ();

          var result = window.func.evolution (pokemon.id, cp);
          window.vars.$.resultPokemons.empty ().attr ('class', result.now.pokemon.id == '133' ? 'eevee' : null).append (window.func.resultHtml (result.now, true)).append (result.tos.map (function (t) { return window.func.resultHtml (t); }));
          window.vars.$.resultPokemons.parent ().addClass ('show');
          window.vars.$.body.animate ({ scrollTop: window.vars.$.resultPokemons.offset ().top - 50});
          
          window.storages.searched.add (pokemon.id);
          window.vars.$.searchInput.val ('').empty ();
          window.func.initPokemons ();
          window.func.sort ();

          prompt.close ();

      }, '請輸入 ' + pokemon.tr + ' 目前的 CP 值');
    },
    initPokemons: function () {
      var searched = window.storages.searched.get ();

      var pokemons = window.vars.pokemons.map (function (t, i) {
        var src = 'img/pokemons/150/' + t.id + '.png';
        var i1 = $.inArray (t.id, window.vars.hots);
        var i2 = $.inArray (t.id, searched);

        return $('<a />').attr ('class', '_p').attr ('title', t.tr)
                         .attr ('data-cp', t.maxCp)
                         .attr ('data-en', t.en)
                         .attr ('data-id', t.id)
                         .attr ('data-hot', i1 == -1 ? window.vars.hots.length + 1 : i1)
                         .attr ('data-his', i2 == -1 ? searched.length + 1 : i2)
                         .attr ('data-str', t.id + ' ' + t.tr + ' ' + t.en)
                         .append (
          $('<span />').addClass ('id').text (t.id)).append (
          $('<img />').attr ('alt', t.tr).attr ('src', src)).append (
          $('<div />').addClass ('tr').text (t.tr).append (
            $('<span />').addClass ('en').text (t.en))).append (
          $('<div />').addClass ('max').text (t.maxCp));
      });

      window.vars.$.pokemons.empty ().append (pokemons);
      window.vars.$.pokemon = window.vars.$.pokemons.find ('> a');
    },
    schedulePrompt: function (okCallback, title, inputText, noCallback) {
      window.vars.$.schedulePrompt = $('.schedulePrompt');

      this.closeResult = function () { var that = window.vars.$.schedulePrompt.removeClass ('result'); that.get (0).vars.$tip.attr ('title', ''); return that; };
      this.closeLoading = function () { var that = window.vars.$.schedulePrompt.removeClass ('loading'); that.get (0).vars.$tip.attr ('title', ''); return that; };
      this.loading = function (title) { var that = this.closeResult ().addClass ('loading'); that.get (0).vars.$tip.attr ('title', title); return that; };
      this.result = function (title) { var that = this.closeLoading ().addClass ('result'); that.get (0).vars.$tip.attr ('title', title); return that; };
      this.okCallback = function (callback) { if (callback) window.vars.$.schedulePrompt.get (0).vars.$ok.unbind ('click').click (callback.bind ($(this), window.vars.$.schedulePrompt.get (0).vars.$input)); };
      this.close = function () {
        window.vars.$.schedulePrompt.removeClass ('show_animation').addClass ('hide_animation');

        window.vars.$.schedulePrompt.get (0).vars.timer = setTimeout (function () {
          window.vars.$.schedulePrompt.attr ('class', 'schedulePrompt');

          window.vars.$.schedulePrompt.get (0).vars.$input.val ('');
          window.vars.$.schedulePrompt.get (0).vars.timer = null;
        }, 500);
      };

      if (window.vars.$.schedulePrompt.length < 1) {
        window.vars.$.schedulePrompt = $('<div />').addClass ('schedulePrompt').appendTo (window.vars.$.body);

        window.vars.$.schedulePrompt.get (0).vars = {
          $title: $('<div />').addClass ('title'),
          $input: $('<input />').attr ('type', 'number').attr ('placeholder', '請輸入數字..'),
          $ok: $('<a />').addClass ('ok').text ('確定'),
          $no: $('<a />').addClass ('no').text ('取消'),
          $tip: $('<div />').addClass ('tip'),
          timer: null,
        };
        
        window.vars.$.schedulePrompt.append (
          $('<div />').addClass ('cover').click (this.close)).append (
          $('<div />').addClass ('wrapper').append (
            window.vars.$.schedulePrompt.get (0).vars.$title).append (
            window.vars.$.schedulePrompt.get (0).vars.$tip).append (
            $('<div />').addClass ('content').append (
              window.vars.$.schedulePrompt.get (0).vars.$input)).append (
            $('<div />').addClass ('btns').append (
              window.vars.$.schedulePrompt.get (0).vars.$ok.click (this.close)).append (
              window.vars.$.schedulePrompt.get (0).vars.$no.click (this.close))));
      }
      var $that = $(this);
      if (window.vars.$.schedulePrompt.get (0).vars.timer) return false;

      if (title) window.vars.$.schedulePrompt.get (0).vars.$title.text (title);
      if (inputText) window.vars.$.schedulePrompt.get (0).vars.$input.val (inputText);

      if (okCallback) window.vars.$.schedulePrompt.get (0).vars.$ok.unbind ('click').click (okCallback.bind ($that, window.vars.$.schedulePrompt.get (0).vars.$input));
      if (noCallback) window.vars.$.schedulePrompt.get (0).vars.$no.unbind ('click').click (noCallback);
      window.vars.$.schedulePrompt.addClass ('show').addClass ('show_animation');
      window.vars.$.schedulePrompt.get (0).vars.$input.focus ();
    }
  };


  window.storages = {
    searched: {
      key: 'pokemonGo.searched',
      get: function () { var ids = window.func.getStorage (this.key); return ids ? ids : []; },
      set: function (id) { window.func.setStorage (this.key, id); return this; },
      has: function (id) { var ids = this.get (); ids = ids.filter (function (u) { return u == id; }); return ids.length ? true : false; },
      add: function (id) { var ids = this.get (); ids.push (id); ids = $.unique (ids); ids.splice (151); return this.set (ids); },
      del: function (id) { var ids = this.get (); ids = ids.filter (function (u) { return u != id; }); ids = $.unique (ids); return this.set (ids); }
    },
    sort: {
      key: 'pokemonGo.sort',
      get: function () { var sort = window.func.getStorage (this.key); return sort ? sort : 'id'; },
      set: function (sort) { window.func.setStorage (this.key, sort); return this; },
    },
    type: {
      key: 'pokemonGo.type',
      get: function () { var type = window.func.getStorage (this.key); return type ? type : 'block'; },
      set: function (type) { window.func.setStorage (this.key, type); return this; },
    }
  };

  window.vars.$.pokemons = $('#pokemons');
  window.func.initPokemons ();

  window.vars.$.sort = $('#sort input[name="sort"]');
  window.vars.$.type = $('#type input[name="type"]');

  window.vars.$.sort.filter ('[value="' + window.storages.sort.get () + '"]').prop ('checked', true);
  window.vars.$.type.filter ('[value="' + window.storages.type.get () + '"]').prop ('checked', true);

  window.vars.$.sort.click (function () {
    window.storages.sort.set ($(this).val ());
    window.func.sort ();
  });
  window.vars.$.type.click (function () {
    window.storages.type.set ($(this).val ());
    window.func.sort ();
  });

  window.vars.$.searchInput.keyup (function () {
    window.func.sort ($(this).val ());
  });
  
  window.func.sort ();

  $(document).on ('click', '._p', function () { window.func.search ($(this).data ('id')); });

});