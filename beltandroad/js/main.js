// ====================== 一、六大经济走廊配置 ======================
// ... 你原来的 CORRIDOR_CONFIG / CORRIDOR_NUM_TO_CODE / getCorridorColorByCode 保持不变 ...

// ====================== 一带一路沿线国家元数据（中文名、英文名、所属走廊、简介） ======================
const COUNTRY_META = {
    // —— 中蒙俄经济走廊（CMREC）+ 新亚欧大陆桥（NELB）+ 中国-中亚-西亚（CCAWEC）——
    CN: {
        name_en: "China",
        name_zh: "中国",
        corridors: ["CMREC", "NELB", "CCAWEC", "CICPEC", "CPEC", "BCIM"],
        brief: "中国是一带一路倡议的发起国，是六大经济走廊的核心枢纽国家。"
    },
    RU: {
        name_en: "Russia",
        name_zh: "俄罗斯",
        corridors: ["CMREC", "NELB"],
        brief: "俄罗斯是中蒙俄经济走廊和新亚欧大陆桥经济走廊的重要沿线国家。"
    },
    MN: {
        name_en: "Mongolia",
        name_zh: "蒙古",
        corridors: ["CMREC"],
        brief: "蒙古位于中俄之间，是中蒙俄经济走廊的重要陆路通道。"
    },
    KZ: {
        name_en: "Kazakhstan",
        name_zh: "哈萨克斯坦",
        corridors: ["NELB", "CCAWEC"],
        brief: "哈萨克斯坦是新亚欧大陆桥和中国—中亚—西亚经济走廊的重要中转枢纽。"
    },
    KG: {
        name_en: "Kyrgyzstan",
        name_zh: "吉尔吉斯斯坦",
        corridors: ["CCAWEC"],
        brief: "吉尔吉斯斯坦通过公路口岸与中国西部相连，是中国—中亚—西亚走廊的一环。"
    },
    TJ: {
        name_en: "Tajikistan",
        name_zh: "塔吉克斯坦",
        corridors: ["CCAWEC"],
        brief: "塔吉克斯坦位于中亚东部，是中国—中亚—西亚经济走廊的节点国家。"
    },
    UZ: {
        name_en: "Uzbekistan",
        name_zh: "乌兹别克斯坦",
        corridors: ["CCAWEC"],
        brief: "乌兹别克斯坦是中亚人口和经济大国，是中国—中亚—西亚经济走廊的重要组成部分。"
    },
    TM: {
        name_en: "Turkmenistan",
        name_zh: "土库曼斯坦",
        corridors: ["CCAWEC"],
        brief: "土库曼斯坦以油气资源闻名，是中国—中亚—西亚能源合作的重要伙伴。"
    },
    AZ: {
        name_en: "Azerbaijan",
        name_zh: "阿塞拜疆",
        corridors: ["CCAWEC"],
        brief: "阿塞拜疆是里海沿岸国家，是中国—中亚—西亚经济走廊通往高加索和欧洲的关键通道。"
    },
    GE: {
        name_en: "Georgia",
        name_zh: "格鲁吉亚",
        corridors: ["CCAWEC"],
        brief: "格鲁吉亚地处高加索，是中国—中亚—西亚经济走廊连接黑海的重要节点。"
    },
    AM: {
        name_en: "Armenia",
        name_zh: "亚美尼亚",
        corridors: ["CCAWEC"],
        brief: "亚美尼亚位于高加索南部，是中国—中亚—西亚经济走廊潜在拓展方向之一。"
    },
    IR: {
        name_en: "Iran",
        name_zh: "伊朗",
        corridors: ["CCAWEC"],
        brief: "伊朗横跨中亚与中东，是中国—中亚—西亚经济走廊通往波斯湾和地中海的重要枢纽。"
    },
    TR: {
        name_en: "Türkiye",
        name_zh: "土耳其",
        corridors: ["CCAWEC", "NELB"],
        brief: "土耳其连接亚欧，是中国—中亚—西亚走廊和新亚欧大陆桥通往欧洲的关键国家。"
    },
    BY: {
        name_en: "Belarus",
        name_zh: "白俄罗斯",
        corridors: ["NELB"],
        brief: "白俄罗斯位于欧亚大陆中心，是新亚欧大陆桥经济走廊的重要节点。"
    },
    PL: {
        name_en: "Poland",
        name_zh: "波兰",
        corridors: ["NELB"],
        brief: "波兰是中欧重要国家，是中欧班列到达最早、最集中的枢纽之一。"
    },
    DE: {
        name_en: "Germany",
        name_zh: "德国",
        corridors: ["NELB"],
        brief: "德国是欧洲经济中心，是新亚欧大陆桥经济走廊的重点到达国。"
    },
    NL: {
        name_en: "Netherlands",
        name_zh: "荷兰",
        corridors: ["NELB"],
        brief: "荷兰鹿特丹港是欧洲重要港口，是新亚欧大陆桥西端的重要节点。"
    },

    // —— 中国—中南半岛经济走廊（CICPEC）——
    VN: {
        name_en: "Viet Nam",
        name_zh: "越南",
        corridors: ["CICPEC"],
        brief: "越南是中国—中南半岛经济走廊的重点沿线国家之一。"
    },
    LA: {
        name_en: "Lao PDR",
        name_zh: "老挝",
        corridors: ["CICPEC"],
        brief: "老挝通过中老铁路与中国相连，是陆上互联互通的重要通道。"
    },
    KH: {
        name_en: "Cambodia",
        name_zh: "柬埔寨",
        corridors: ["CICPEC"],
        brief: "柬埔寨是中国—中南半岛经济走廊的合作伙伴国家，在基础设施和产业园区方面合作密切。"
    },
    TH: {
        name_en: "Thailand",
        name_zh: "泰国",
        corridors: ["CICPEC"],
        brief: "泰国位于中南半岛中心位置，是中国—中南半岛走廊通往马六甲海峡的重要节点。"
    },
    MY: {
        name_en: "Malaysia",
        name_zh: "马来西亚",
        corridors: ["CICPEC"],
        brief: "马来西亚位于马六甲海峡要冲，是海上丝绸之路与中南半岛走廊的重要交汇点。"
    },
    SG: {
        name_en: "Singapore",
        name_zh: "新加坡",
        corridors: ["CICPEC"],
        brief: "新加坡是全球重要航运和金融中心，是中国—中南半岛经济走廊的海上枢纽。"
    },

    // —— 中巴经济走廊（CPEC）——
    PK: {
        name_en: "Pakistan",
        name_zh: "巴基斯坦",
        corridors: ["CPEC"],
        brief: "中巴经济走廊是中巴合作的旗舰项目，连接中国新疆喀什和巴基斯坦瓜达尔港。"
    },

    // —— 孟中印缅经济走廊（BCIM）——
    BD: {
        name_en: "Bangladesh",
        name_zh: "孟加拉国",
        corridors: ["BCIM"],
        brief: "孟加拉国是孟中印缅经济走廊的海上门户国家。"
    },
    IN: {
        name_en: "India",
        name_zh: "印度",
        corridors: ["BCIM"],
        brief: "印度是南亚大国，孟中印缅经济走廊规划中的重要一环。"
    },
    MM: {
        name_en: "Myanmar",
        name_zh: "缅甸",
        corridors: ["BCIM", "CICPEC"],
        brief: "缅甸连接中国西南与印度洋，是中缅油气管道和节点港口布局的重要国家。"
    },

    // —— 其他常见一带一路伙伴（你可以按需补充或修改）——
    UA: {
        name_en: "Ukraine",
        name_zh: "乌克兰",
        corridors: [],
        brief: "乌克兰位于东欧平原，是连接欧亚大陆的重要国家之一。"
    },
    MD: {
        name_en: "Moldova",
        name_zh: "摩尔多瓦",
        corridors: [],
        brief: ""
    },
    SY: {
        name_en: "Syrian Arab Republic",
        name_zh: "叙利亚",
        corridors: [],
        brief: ""
    },
    IQ: {
        name_en: "Iraq",
        name_zh: "伊拉克",
        corridors: [],
        brief: ""
    },
    SA: {
        name_en: "Saudi Arabia",
        name_zh: "沙特阿拉伯",
        corridors: [],
        brief: "沙特是中东重要能源出口国，是共建一带一路能源合作的重要伙伴。"
    },
    AE: {
        name_en: "United Arab Emirates",
        name_zh: "阿拉伯联合酋长国",
        corridors: [],
        brief: "阿联酋是海湾地区重要航运和金融中心。"
    },
    EG: {
        name_en: "Egypt",
        name_zh: "埃及",
        corridors: [],
        brief: "埃及地处苏伊士运河要冲，是海上丝绸之路的重要节点。"
    },
    LT: {
        name_en: "Lithuania",
        name_zh: "立陶宛",
        corridors: [],
        brief: ""
    },
    LV: {
        name_en: "Latvia",
        name_zh: "拉脱维亚",
        corridors: [],
        brief: ""
    },
    EE: {
        name_en: "Estonia",
        name_zh: "爱沙尼亚",
        corridors: [],
        brief: ""
    },
    CZ: {
        name_en: "Czech Republic",
        name_zh: "捷克",
        corridors: [],
        brief: ""
    },
    SK: {
        name_en: "Slovakia",
        name_zh: "斯洛伐克",
        corridors: [],
        brief: ""
    },
    HU: {
        name_en: "Hungary",
        name_zh: "匈牙利",
        corridors: [],
        brief: ""
    },
    SI: {
        name_en: "Slovenia",
        name_zh: "斯洛文尼亚",
        corridors: [],
        brief: ""
    },
    HR: {
        name_en: "Croatia",
        name_zh: "克罗地亚",
        corridors: [],
        brief: ""
    },
    BA: {
        name_en: "Bosnia and Herzegovina",
        name_zh: "波黑",
        corridors: [],
        brief: ""
    },
    RS: {
        name_en: "Serbia",
        name_zh: "塞尔维亚",
        corridors: [],
        brief: ""
    },
    AL: {
        name_en: "Albania",
        name_zh: "阿尔巴尼亚",
        corridors: [],
        brief: ""
    },
    RO: {
        name_en: "Romania",
        name_zh: "罗马尼亚",
        corridors: [],
        brief: ""
    },
    MK: {
        name_en: "North Macedonia",
        name_zh: "北马其顿",
        corridors: [],
        brief: ""
    },
    JO: {
        name_en: "Jordan",
        name_zh: "约旦",
        corridors: [],
        brief: ""
    },
    LB: {
        name_en: "Lebanon",
        name_zh: "黎巴嫩",
        corridors: [],
        brief: ""
    },
    PS: {
        name_en: "Palestine",
        name_zh: "巴勒斯坦",
        corridors: [],
        brief: ""
    },
    YE: {
        name_en: "Yemen",
        name_zh: "也门",
        corridors: [],
        brief: ""
    },
    OM: {
        name_en: "Oman",
        name_zh: "阿曼",
        corridors: [],
        brief: ""
    },
    QA: {
        name_en: "Qatar",
        name_zh: "卡塔尔",
        corridors: [],
        brief: ""
    },
    KW: {
        name_en: "Kuwait",
        name_zh: "科威特",
        corridors: [],
        brief: ""
    },
    BH: {
        name_en: "Bahrain",
        name_zh: "巴林",
        corridors: [],
        brief: ""
    },
    GR: {
        name_en: "Greece",
        name_zh: "希腊",
        corridors: [],
        brief: ""
    },
    CY: {
        name_en: "Cyprus",
        name_zh: "塞浦路斯",
        corridors: [],
        brief: ""
    },
    ID: {
        name_en: "Indonesia",
        name_zh: "印度尼西亚",
        corridors: [],
        brief: ""
    },
    PH: {
        name_en: "Philippines",
        name_zh: "菲律宾",
        corridors: [],
        brief: ""
    },
    BN: {
        name_en: "Brunei Darussalam",
        name_zh: "文莱",
        corridors: [],
        brief: ""
    },
    AF: {
        name_en: "Afghanistan",
        name_zh: "阿富汗",
        corridors: [],
        brief: ""
    },
    LK: {
        name_en: "Sri Lanka",
        name_zh: "斯里兰卡",
        corridors: [],
        brief: ""
    },
    MV: {
        name_en: "Maldives",
        name_zh: "马尔代夫",
        corridors: [],
        brief: ""
    },
    NP: {
        name_en: "Nepal",
        name_zh: "尼泊尔",
        corridors: [],
        brief: ""
    }             
};


// ---------------- 台湾覆盖配置 ----------------
const SPECIAL_OVERRIDE = {
    "TW": {
        name_zh: "中国台湾",
        name_en: "Taiwan, China",
        iso2: "CN",          // 🔥 强制替换为中国国旗
        brief: "台湾是中国不可分割的一部分。"
    }
};





// ====================== 一、六大经济走廊配置 ======================
// 走廊代码（CMREC 等） -> 名称、颜色
const CORRIDOR_CONFIG = {
    CMREC: {
        id: "CMREC",
        name: "中蒙俄经济走廊",
        color: "#2ecc71"   // 绿色
    },
    NELB: {
        id: "NELB",
        name: "新亚欧大陆桥经济走廊",
        color: "#3498db"   // 蓝色
    },
    CCAWEC: {
        id: "CCAWEC",
        name: "中国-中亚-西亚经济走廊",
        color: "#f1c40f"   // 黄色
    },
    CICPEC: {
        id: "CICPEC",
        name: "中国-中南半岛经济走廊",
        color: "#9b59b6"   // 紫色
    },
    CPEC: {
        id: "CPEC",
        name: "中巴经济走廊",
        color: "#e67e22"   // 橙色
    },
    BCIM: {
        id: "BCIM",
        name: "孟中印缅经济走廊",
        color: "#e74c3c"   // 红色
    }
};


// ISO2 -> 国旗 PNG URL（FlagCDN）
function isoToFlagImageUrl(iso2) {
    if (!iso2) return null;

    // 👇 在这里做一次特殊处理：TW 一律用中国国旗
    let code = iso2.toUpperCase();
    if (code === "TW") {
        code = "CN";
    }

    return `https://flagcdn.com/24x18/${code.toLowerCase()}.png`;
}


// economyline.geojson 中的数字 id -> 上面的走廊代码
// （按你 geojson 里的 name 对应关系写的：1:中南半岛, 2:孟中印缅, 3:中蒙俄, 4:新亚欧大陆桥, 5:中亚西亚, 6:中巴）
const CORRIDOR_NUM_TO_CODE = {
    1: "CICPEC", // 中国中南半岛
    2: "BCIM",   // 孟中印缅
    3: "CMREC",  // 中蒙俄
    4: "NELB",   // 新亚欧大陆桥
    5: "CCAWEC", // 中国-中亚-西亚
    6: "CPEC"    // 中巴经济走廊
};

function getCorridorColorByCode(code) {
    return CORRIDOR_CONFIG[code]?.color || "#cccccc";
}

// ====== 在这里加上这个函数 ======
// ISO_A2 -> 国旗 Emoji
function isoToEmojiFlag(code) {
    if (!code || code.length !== 2) return "🏳️";
    const A = 0x1F1E6;
    const chars = code.toUpperCase().split("");
    return String.fromCodePoint(A + chars[0].charCodeAt(0) - 65)
         + String.fromCodePoint(A + chars[1].charCodeAt(0) - 65);
}


// ====================== 二、全局变量 ======================
let map;
let countriesLayer;        // 国家矢量层
let corridorsLayer;        // 经济走廊矢量层
let countrySource;         // 国家数据源
let corridorSource;        // 走廊数据源
let countryFeatureByCode = {}; // iso_a2 -> feature
let countryPropsByCode = {};   // iso_a2 -> properties
let selectedCountryCode = null;

// DOM
const countryListEl = document.getElementById("countryList");
const countrySearchEl = document.getElementById("countrySearch");
const countryInfoEl = document.getElementById("countryInfo");
const corridorLegendEl = document.getElementById("corridorLegend");

// ====================== 三、初始化地图（OpenLayers） ======================
function initMap() {
    // 1. 底图 —— 先用 OSM，后面你可以换成天地图
    const osmLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });

    // 如果你要用天地图（REST 服务），可以改成这样：
    // const TDT_KEY = "你的天地图KEY";
    // const tdtLayer = new ol.layer.Tile({
    //     source: new ol.source.XYZ({
    //         url:
    //             "http://t{0-7}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=" +
    //             TDT_KEY
    //     })
    // });

    // 2. 国家矢量源 & 图层
    countrySource = new ol.source.Vector();
    countriesLayer = new ol.layer.Vector({
        source: countrySource,
        style: countryStyleFunction
    });

    // 3. 经济走廊矢量源 & 图层
    corridorSource = new ol.source.Vector();
    corridorsLayer = new ol.layer.Vector({
        source: corridorSource,
        style: corridorStyleFunction
    });

    map = new ol.Map({
        target: "map",
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            }),
            corridorsLayer,
            countriesLayer
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([40, 20]),  // 经度 40，纬度 20
            zoom: 3,
            minZoom: 2,
            maxZoom: 18
            // ⚠ 不要写 projection: 'EPSG:4326'
        })
    });

    initLegend();
    loadGeoJSONData();

    // 地图点击选择国家
    map.on("singleclick", (evt) => {
        let pickedFeature = null;

        map.forEachFeatureAtPixel(
            evt.pixel,
            (feature, layer) => {
                if (layer === countriesLayer) {
                    pickedFeature = feature;
                    return true; // 停止遍历
                }
            },
            {
                hitTolerance: 5
            }
        );

        if (pickedFeature) {
            const code =
                pickedFeature.get("iso_a2") ||
                pickedFeature.get("ISO_A2") ||
                pickedFeature.get("iso2");
            if (code) {
                selectCountry(code, true);
            }
        }
    });
}

// ====================== 四、图例 ======================
function initLegend() {
    Object.values(CORRIDOR_CONFIG).forEach((item) => {
        const li = document.createElement("li");
        li.className = "legend-item";

        const colorBox = document.createElement("span");
        colorBox.className = "legend-color";
        colorBox.style.backgroundColor = item.color;

        const label = document.createElement("span");
        label.textContent = item.name;

        li.appendChild(colorBox);
        li.appendChild(label);
        corridorLegendEl.appendChild(li);
    });
}

// ====================== 五、加载 GeoJSON 数据 ======================
function loadGeoJSONData() {
    const geojsonFormat = new ol.format.GeoJSON();

    // 1. 一带一路沿线国家
    fetch("data/bri_countries.geojson")
        .then((res) => res.json())
        .then((geojson) => {
            const features = geojsonFormat.readFeatures(geojson, {
                dataProjection: "EPSG:4326",
                featureProjection: "EPSG:3857"
            });

            let globalExtent = null;

            features.forEach((f) => {
                countrySource.addFeature(f);

                const props = f.getProperties();
                let code =
                    props.iso_a2 || props.ISO_A2 || props.iso2 || null;
                if (!code) return;
                
                // 统一成大写 ISO2，方便和 COUNTRY_META 对应
                code = code.toUpperCase();
                
                countryFeatureByCode[code] = f;
                // 去掉 geometry，避免污染 props
                const { geometry, ...rest } = props;


                // 覆盖台湾
                if (SPECIAL_OVERRIDE[code]) {
                    Object.assign(rest, SPECIAL_OVERRIDE[code]);
                 }
                
                // 从 COUNTRY_META 中取到该国的配置（中文名、英文名、走廊、简介）
                const meta = COUNTRY_META[code] || {};
                // 以 meta 为主，rest 为辅（meta 中的字段覆盖原始属性）
                const mergedProps = { ...rest, ...meta };
                
                // 存起来，后面列表和详情都用 mergedProps
                countryPropsByCode[code] = mergedProps;
                
                // 统计范围
                const ext = f.getGeometry().getExtent();
                if (!globalExtent) {
                    globalExtent = ext.slice();
                } else {
                    ol.extent.extend(globalExtent, ext);
                }
            });

            if (globalExtent) {
                map.getView().fit(globalExtent, {
                    padding: [40, 40, 40, 40],
                    duration: 500
                });
            }

            buildCountryListFromProps();

            // 搜索事件
            countrySearchEl.addEventListener("input", handleCountrySearch);
        })
        .catch((err) => {
            console.error("加载 bri_countries.geojson 失败:", err);
        });

    // 2. 经济走廊线
    // 2. 经济走廊线（你的 economyline.geojson）
fetch("data/economyline.geojson")
.then(res => res.json())
.then(geojson => {
    const features = geojsonFormat.readFeatures(geojson, {
        dataProjection: "EPSG:3857",
        featureProjection: "EPSG:3857"
    });
    corridorSource.addFeatures(features);
})
.catch(err => console.error("加载 economyline.geojson 失败:", err));

}

// ====================== 六、样式函数 ======================

// 国家默认样式；如果是选中状态，使用高亮样式
function countryStyleFunction(feature) {
    const props = feature.getProperties();
    const code =
        props.iso_a2 || props.ISO_A2 || props.iso2 || undefined;

    const corridors = props.corridors || [];
    let fillColor = "#dddddd";
if (Array.isArray(corridors) && corridors.length > 0) {
    fillColor = getCorridorColorByCode(corridors[0]);
}


    // 选中高亮：淡红色 + 红边框
    if (code && code === selectedCountryCode) {
        return new ol.style.Style({
            fill: new ol.style.Fill({
                color: "rgba(255, 179, 179, 0.7)"
            }),
            stroke: new ol.style.Stroke({
                color: "#ff4d4f",
                width: 2
            })
        });
    }

    return new ol.style.Style({
        fill: new ol.style.Fill({
            color: fillColor ? hexToRgba(fillColor, 0.6) : "rgba(221,221,221,0.6)"
        }),
        stroke: new ol.style.Stroke({
            color: "#666666",
            width: 0.7
        })
    });
}

// 经济走廊线样式
function corridorStyleFunction(feature) {
    const numId = feature.get("id");              // economyline.geojson 中的数字 id
    const code = CORRIDOR_NUM_TO_CODE[numId];     // 转成 CMREC / NELB / ...

    const color = code ? getCorridorColorByCode(code) : "#555";

    return new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: color,
            width: 4,
            lineCap: "round"
        })
    });
}





// 辅助：hex 转 rgba
function hexToRgba(hex, alpha) {
    let h = hex.replace("#", "");
    if (h.length === 3) {
        h =
            h[0] + h[0] +
            h[1] + h[1] +
            h[2] + h[2];
    }
    const r = parseInt(h.substring(0, 2), 16);
    const g = parseInt(h.substring(2, 4), 16);
    const b = parseInt(h.substring(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
}

// ====================== 七、国家列表（左侧“下拉框”） ======================
function buildCountryListFromProps() {
    const entries = Object.entries(countryPropsByCode).map(
        ([code, props]) => ({ code, props })
    );

    // 按英文名称排序
    entries.sort((a, b) => {
        const nameA = (a.props.name_en || "").toUpperCase();
        const nameB = (b.props.name_en || "").toUpperCase();
        return nameA.localeCompare(nameB);
    });

    countryListEl.innerHTML = "";

    entries.forEach(({ code, props }) => {
        const item = document.createElement("div");
        item.className = "country-item";
        item.dataset.code = code;

        const main = document.createElement("div");
        main.className = "country-main";

        const flagSpan = document.createElement("img");
        flagSpan.className = "country-flag-img";
        
        const flagUrl = isoToFlagImageUrl(code);
        flagSpan.src = flagUrl || "";
        flagSpan.onerror = () => { flagSpan.style.display = "none"; }; 

        const nameSpan = document.createElement("span");
        nameSpan.className = "country-name";
        nameSpan.textContent = props.name_zh || props.name_en || code;

        main.appendChild(flagSpan);
        main.appendChild(nameSpan);

        const corridorTag = document.createElement("span");
        corridorTag.className = "country-corridor-tag";

        const corridors = props.corridors || [];
        if (!corridors || corridors.length === 0) {
            corridorTag.textContent = "无";
        } else if (corridors.length === 1) {
            corridorTag.textContent =
                CORRIDOR_CONFIG[corridors[0]]?.name || corridors[0];
        } else {
            corridorTag.textContent = "多条走廊";
        }

        item.appendChild(main);
        item.appendChild(corridorTag);

        item.addEventListener("click", () => {
            selectCountry(code, true);
        });

        countryListEl.appendChild(item);
    });
}

// 搜索过滤
function handleCountrySearch() {
    const keyword = countrySearchEl.value.trim().toLowerCase();
    const items = countryListEl.querySelectorAll(".country-item");

    items.forEach((item) => {
        const code = item.dataset.code;
        const props = countryPropsByCode[code];
        const nameZh = (props.name_zh || "").toLowerCase();
        const nameEn = (props.name_en || "").toLowerCase();

        if (!keyword || nameZh.includes(keyword) || nameEn.includes(keyword)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

// ====================== 八、国家选择逻辑 ======================
function selectCountry(code, zoomTo) {
    const feature = countryFeatureByCode[code];
    const props = countryPropsByCode[code];

    if (!feature || !props) return;

    // 更新选中状态
    selectedCountryCode = code;

    // 重绘国家图层（styleFunction 内部会根据 selectedCountryCode 判断）
    countriesLayer.changed();

    // 地图视图居中
    if (zoomTo) {
        const extent = feature.getGeometry().getExtent();
        map.getView().fit(extent, {
            padding: [40, 40, 40, 40],
            duration: 500
        });
    }

    // 左侧列表高亮
    syncCountryListActive(code);

    // 更新详情
    updateCountryInfo(props);
}

function syncCountryListActive(code) {
    const items = countryListEl.querySelectorAll(".country-item");
    items.forEach((item) => {
        if (item.dataset.code === code) {
            item.classList.add("active");
            item.scrollIntoView({ block: "nearest" });
        } else {
            item.classList.remove("active");
        }
    });
}

function updateCountryInfo(props) {
    countryInfoEl.innerHTML = "";

    const title = document.createElement("h2");
    const isoCode = props.iso_a2 || props.ISO_A2 || "";
    const flag = props.flag_emoji || isoToEmojiFlag(isoCode);
    const flagUrl = isoToFlagImageUrl(props.iso_a2 || props.ISO_A2);
    title.innerHTML = `<img src="${flagUrl}" class="country-flag-img"> ${
        props.name_zh || props.name_en || "未命名国家"
    }`;
    

    const codeSection = document.createElement("div");
    codeSection.className = "info-section";
    codeSection.innerHTML =
        '<span class="label">英文名称：</span>' +
        `<span class="value">${props.name_en || "-"}</span>`;

    const corridorSection = document.createElement("div");
    corridorSection.className = "info-section";

    const corridors = props.corridors || [];
    let corridorText = "无";
    if (corridors.length > 0) {
        corridorText = corridors
            .map((id) => CORRIDOR_CONFIG[id]?.name || id)
            .join("；");
    }
    corridorSection.innerHTML =
        '<span class="label">所属经济走廊：</span>' +
        `<span class="value">${corridorText}</span>`;

    const brief = document.createElement("div");
    brief.className = "info-brief";
    brief.textContent =
        props.brief ||
        "暂无简介，你可以在 GeoJSON 的 brief 字段中补充该国家的一带一路相关简介。";

    countryInfoEl.appendChild(title);
    countryInfoEl.appendChild(codeSection);
    countryInfoEl.appendChild(corridorSection);
    countryInfoEl.appendChild(brief);
}

// ====================== 九、入口 ======================
document.addEventListener("DOMContentLoaded", () => {
    initMap();
});
