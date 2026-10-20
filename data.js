// 数据源自 Gakuran 官方 Trello：https://trello.com/b/v3WatB1P
// 每条天赋均转录自该看板 Fighting Styles 列表中各风格卡片的 "Combat perks" 官方卡图
window.GAKURAN_DATA = {
  source: {
    board: "https://trello.com/b/v3WatB1P/%E5%AD%A6%E4%B9%B1-gakuran-trello",
    boardName: "(学乱) Gakuran Trello",
    list: "Fighting Styles → Combat perks",
    fetched: "2026-10-20",
  },
  tiers: [
    { key: "unknown", en: "???", cn: "未知", rate: "0.05%", color: "#8b5cf6" },
    { key: "legendary", en: "Legendary", cn: "传说", rate: "1%", color: "#e0b34c" },
    { key: "epic", en: "Epic", cn: "史诗", rate: "10%", color: "#e0639b" },
    { key: "uncommon", en: "Uncommon", cn: "罕见", rate: "30%", color: "#5fa8d3" },
    { key: "common", en: "Common", cn: "普通", rate: "59%", color: "#9aa0a6" },
  ],
  styles: [
    {
      en: "Perfect Copy", cn: "完美复制", tier: "unknown", img: "img/perfect-copy.webp",
      perks: [
        { n: "Copycat", cn: "模仿", en: "Landing 3 M1s in a row makes your next 2 M1s deal 1.5x damage. A miss or parry clears it.", zh: "连续命中 3 次 M1 后，接下来 2 次 M1 造成 1.5 倍伤害。落空或被招架则清空计数。" },
        { n: "Adaption", cn: "适应", en: "Landing 3 M1s without being parried grants a free dash. Missing an M1 resets the count.", zh: "连续 3 次 M1 命中且未被招架，可获得一次免费冲刺。M1 落空会重置计数。" },
        { n: "Master Copy", cn: "精通复制", en: "Landing your Crit after using all 4 different M1s makes it deal 1.25x damage.", zh: "在 4 种不同 M1 全部使用过之后命中重击（Crit），其伤害变为 1.25 倍。" },
        { n: "Perfect Technique", cn: "完美体术", en: "Your 4th M1 cannot be parried if the first 3 M1s all connected. 20 second cooldown.", zh: "若前 3 次 M1 全部命中，第 4 次 M1 将无法被招架。冷却 20 秒。" },
      ],
    },
    {
      en: "Jin", cn: "仁", tier: "unknown", img: "img/jin.webp",
      perks: [
        { n: "Electric Wind", cn: "电风", en: "Perfectly parrying an M1 makes your next Heavy come out faster. 12 second cooldown.", zh: "完美招架对手的 M1 后，下一次重击（M2）出招更快。冷却 12 秒。" },
        { n: "Iron Resolve", cn: "铁心", en: "Getting parried doesn't interrupt your Heavy, but the Heavy deals reduced posture damage.", zh: "被招架不会中断你的重击，但该重击造成的架势伤害降低。" },
        { n: "Counter Force", cn: "反击之力", en: "Getting hit during your Heavy increases its knockback, but the Heavy deals reduced damage.", zh: "在重击过程中被命中会提升其击退效果，但该重击伤害降低。" },
        { n: "Zanshin", cn: "残心", en: "Dodging an M1 with your dash makes your next M1 come out faster. 10 second cooldown.", zh: "用冲刺躲开对手 M1 后，你的下一次 M1 出招更快。冷却 10 秒。" },
        { n: "Pressure", cn: "压迫", en: "Landing 3 M1s on an opponent stops them from dashing for 1 second.", zh: "对同一对手命中 3 次 M1 后，令其 1 秒内无法冲刺。" },
      ],
    },
    {
      en: "Mishima", cn: "三岛", tier: "unknown", img: "img/mishima.webp",
      perks: [
        { n: "Concussive", cn: "震荡", en: "The crit hits twice. The second is an uppercut that ragdolls, launching them up and back.", zh: "重击命中两次，第二击为上勾拳，会造成布娃娃状态并将其向上、向后击飞。" },
        { n: "Consistency", cn: "连贯", en: "Landing all 4 M1s on the same target without missing cripples them, cutting their movement speed for 4 seconds.", zh: "对同一目标连续命中全部 4 次 M1 且不落空，会使其残废，移速降低持续 4 秒。" },
        { n: "Shifty", cn: "灵巧", en: "Dodging an M1 with your dash refunds the dash cooldown instantly.", zh: "用冲刺躲开 M1 后，立即返还冲刺冷却。" },
      ],
    },
    {
      en: "CQC", cn: "近身格斗", tier: "unknown", img: "img/cqc.webp",
      perks: [
        { n: "Killing Intent", cn: "杀意", en: "Your heavy marks whoever is standing in the ring and closes on them on its own, dashing through for five consecutive strikes. You cannot move while it charges, and it can be broken if you are hit within the first 0.5s. Otherwise it cannot be stopped.", zh: "重击会锁定场上的对手并自动突进，打出五连击。蓄力期间无法移动；若在最初 0.5 秒内被命中则会被打断，否则无法被阻止。" },
        { n: "Crushing Force III (MAX)", cn: "粉碎之力 III（满级）", en: "+20% posture damage on every hit.", zh: "每次命中额外造成 +20% 架势伤害。" },
        { n: "Upper Hand", cn: "占上风", en: "You deal more damage after winning a clinch. Each hit you land in the next 5 seconds hits harder than the last, +5% per hit up to +25%.", zh: "在缠抱（clinch）中获胜后伤害提升：之后 5 秒内每次命中都比上一次更痛，每段 +5%，最多 +25%。" },
        { n: "Resilience III", cn: "韧性 III", en: "35% chance to clash into a grapple when M1s meet.", zh: "双方 M1 对撞时，有 35% 概率触发拼招（grapple）。" },
        { n: "Boss Raid", cn: "首领围剿", en: "The more people that have hit you, the more damage you deal. +2% total damage for every different person who has tagged you this life, up to 5.", zh: "打到你的人越多，你的伤害越高。本条命内每有一名不同玩家命中过你，+2% 总伤害，最多计 5 人。" },
      ],
    },
    {
      en: "Ali", cn: "阿里", tier: "unknown", img: "img/ali.webp",
      perks: [
        { n: "Float Like a Butterfly", cn: "蝶舞", en: "The crit shuffle grants i-frames for its entire windup. Shuffle straight through anything thrown at you.", zh: "重击的滑步在整个前摇期间获得无敌帧（i-frames），可直接穿过任何来招。" },
        { n: "Sting Like a Bee", cn: "蜂刺", en: "Dodging an attack with your evasive instantly counters with a shuffle straight at whoever swung.", zh: "用闪避躲开攻击后，立即以滑步直线反击出招者。" },
        { n: "Counterstrike", cn: "反击", en: "+5% damage on your next attack after perfect blocking.", zh: "完美格挡后，下一次攻击伤害 +5%。" },
        { n: "Guard Pierce III", cn: "破防 III", en: "20% block chip damage bleeds through guard.", zh: "20% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Resilience II", cn: "韧性 II", en: "25% chance to clash into a grapple when M1s meet.", zh: "双方 M1 对撞时，有 25% 概率触发拼招。" },
      ],
    },
    {
      en: "Wingchun", cn: "咏春", tier: "unknown", img: "img/wingchun.webp",
      perks: [
        { n: "Sticky Hands", cn: "黏手", en: "Your heavy is a parry stance instead of a swing. Negate the next attack that lands on you and answer it with a counter combo.", zh: "重击变为招架架势而非挥击：抵消下一次命中你的攻击，并以连击还击。" },
        { n: "Swift Hands", cn: "快拳", en: "+8% faster M1 attacks at the cost of 0.2 damage per hit.", zh: "M1 攻速 +8%，代价是每次命中伤害 -0.2。" },
        { n: "Final Blow", cn: "终结一击", en: "The last M1 of your combo deals 1.5x damage.", zh: "连段最后一记 M1 造成 1.5 倍伤害。" },
        { n: "Guard Pierce III", cn: "破防 III", en: "20% block chip damage bleeds through guard.", zh: "20% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Fortified I", cn: "坚壁 I", en: "+10% posture resistance, lose less posture when blocking.", zh: "+10% 架势抗性，格挡时损失的架势更少。" },
        { n: "Resilience I", cn: "韧性 I", en: "15% chance to clash into a grapple when M1s meet.", zh: "双方 M1 对撞时，有 15% 概率触发拼招。" },
      ],
    },
    {
      en: "Dragon", cn: "龙", tier: "legendary", img: "img/dragon.webp",
      perks: [
        { n: "Powerful", cn: "强力", en: "M2 is a flip kick that puts them on the floor. You cannot move or turn once it is thrown, and if it misses, or you are hit out of it, you go down instead.", zh: "M2 为回旋踢，可将对手踢倒在地。出招后无法移动或转向；若打空或在过程中被打断，则倒地的是你。" },
        { n: "Running Start", cn: "助跑", en: "At full sprint, M2 becomes a running dropkick. It knocks you both down, but deals 1.5x damage and lets you recover over a second before your opponent.", zh: "全速冲刺时 M2 变为飞身踢。双方都会倒地，但造成 1.5 倍伤害，且你会比对手早约 1 秒起身。" },
        { n: "Heat Mode", cn: "热模式", en: "Gain a temporary damage boost after successfully landing an M2 on an opponent", zh: "成功用 M2 命中对手后，获得临时伤害提升。" },
        { n: "Guard Pierce II", cn: "破防 II", en: "15% block chip damage bleeds through guard.", zh: "15% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Resilience II", cn: "韧性 II", en: "25% chance to clash into a grapple when M1s meet.", zh: "双方 M1 对撞时，有 25% 概率触发拼招。" },
      ],
    },
    {
      en: "Kyokushin Karate", cn: "极真空手", tier: "legendary", img: "img/kyokushin-karate.webp",
      perks: [
        { n: "Hyperarmor M2s", cn: "霸体重击", en: "M2s grant hyper armor during the swing, preventing interruption and stun.", zh: "M2 挥击期间获得霸体（hyper armor），不会被中断或眩晕。" },
        { n: "Guard Pierce V (MAX)", cn: "破防 V（满级）", en: "30% block chip damage bleeds through guard.", zh: "30% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Obsidian Skeleton", cn: "黑曜石之骨", en: "You receive 10% less damage from all sources.", zh: "受到的所有来源伤害减少 10%。" },
      ],
    },
    {
      en: "Capoeira", cn: "卡波耶拉", tier: "legendary", img: "img/capoeira.webp",
      perks: [
        { n: "Powerful", cn: "强力", en: "M2s ragdoll the victim on hit.", zh: "M2 命中会使对手进入布娃娃状态。" },
        { n: "Crushing Force I", cn: "粉碎之力 I", en: "+10% posture damage on every hit.", zh: "每次命中额外造成 +10% 架势伤害。" },
        { n: "Heavy Hitter I", cn: "重拳手 I", en: "+5% damage on guardbreak hits (M1 and M2).", zh: "破防命中（M1 与 M2）额外造成 +5% 伤害。" },
        { n: "Guard Pierce II", cn: "破防 II", en: "15% block chip damage bleeds through guard.", zh: "15% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Ginga", cn: "金加步", en: "Dash cooldown is 25% shorter.", zh: "冲刺冷却缩短 25%。" },
      ],
    },
    {
      en: "Wrestling", cn: "摔跤", tier: "legendary", img: "img/wrestling.webp",
      perks: [
        { n: "Takedown", cn: "摔技", en: "M2 grabs opponents and slams them into the ground, dealing 1.5x damage. Victims are disoriented after the slam.", zh: "M2 抓取对手并将其砸向地面，造成 1.5 倍伤害。被摔者会陷入失衡（disoriented）。" },
        { n: "Hyperarmor M2s", cn: "霸体重击", en: "M2s grant hyper armor during the swing, preventing interruption and stun.", zh: "M2 挥击期间获得霸体，不会被中断或眩晕。" },
        { n: "Heavy Hitter III (MAX)", cn: "重拳手 III（满级）", en: "+15% damage on guardbreak hits (M1 and M2).", zh: "破防命中（M1 与 M2）额外造成 +15% 伤害。" },
        { n: "Guard Pierce II", cn: "破防 II", en: "15% block chip damage bleeds through guard.", zh: "15% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Resilience V (MAX)", cn: "韧性 V（满级）", en: "55% chance to clash into a grapple when M1s meet.", zh: "双方 M1 对撞时，有 55% 概率触发拼招。" },
      ],
    },
    {
      en: "Hakari", cn: "秤", tier: "legendary", img: "img/hakari.webp",
      perks: [
        { n: "Powerful", cn: "强力", en: "M2s ragdoll the victim on hit.", zh: "M2 命中会使对手进入布娃娃状态。" },
        { n: "Momentum Rush", cn: "势头突进", en: "Landing 3 M1s in a row without being stunned opens a 7-second window where your M2 deals 3x damage.", zh: "连续 3 次 M1 命中且未被打断，开启 7 秒窗口，期间 M2 造成 3 倍伤害。" },
        { n: "Guard Pierce II", cn: "破防 II", en: "15% block chip damage bleeds through guard.", zh: "15% 的格挡穿透伤害会穿过对手防御生效。" },
      ],
    },
    {
      en: "Kure", cn: "吴", tier: "legendary", img: "img/kure.webp",
      perks: [
        { n: "Last Stand", cn: "背水一战", en: "When below 25% health, deal +15% total damage.", zh: "生命值低于 25% 时，总伤害 +15%。" },
        { n: "Takedown", cn: "摔技", en: "M2 closes into a headbutt grab on contact, dealing 1.5x damage.", zh: "M2 在接触时化为头槌抓取，造成 1.5 倍伤害。" },
        { n: "Concussive", cn: "震荡", en: "M2 slam removes the victim's ability to parry for 2 seconds.", zh: "M2 砸击使对手 2 秒内无法招架。" },
        { n: "Guard Pierce II", cn: "破防 II", en: "15% block chip damage bleeds through guard.", zh: "15% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Resilience I", cn: "韧性 I", en: "15% chance to clash into a grapple when M1s meet.", zh: "双方 M1 对撞时，有 15% 概率触发拼招。" },
      ],
    },
    {
      en: "Aikido", cn: "合气道", tier: "epic", img: "img/aikido.webp",
      perks: [
        { n: "Resilience V (MAX)", cn: "韧性 V（满级）", en: "55% chance to clash into a grapple when M1s meet.", zh: "双方 M1 对撞时，有 55% 概率触发拼招。" },
        { n: "Guard Pierce III", cn: "破防 III", en: "20% block chip damage bleeds through guard.", zh: "20% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Continuing Flow", cn: "连绵之流", en: "Your counter ends in a slam that floors them. For 3 seconds after, your M1s can still hit them while they're down.", zh: "你的反击以摔技收尾并将对手击倒。之后 3 秒内，你的 M1 仍能打到倒地的对手。" },
        { n: "Heavy Hitter III (MAX)", cn: "重拳手 III（满级）", en: "+15% damage on guardbreak hits (M1 and M2).", zh: "破防命中（M1 与 M2）额外造成 +15% 伤害。" },
      ],
    },
    {
      en: "Boxing", cn: "拳击", tier: "epic", img: "img/boxing.webp",
      perks: [
        { n: "Untouchable", cn: "不可触碰", en: "M2ing throws a two-punch combo with i-frames for the whole animation. Each punch is its own attack. You can eat the first and parry the second.", zh: "M2 打出两段拳组合，整个动作期间都有无敌帧。每一拳都是独立攻击——对手可以硬吃第一拳、招架第二拳。" },
        { n: "Switch Stance", cn: "换架", en: "The 4th M1 refunds 1.5s of M2 cooldown on hit.", zh: "第 4 段 M1 命中时返还 1.5 秒 M2 冷却。" },
        { n: "Guard Pierce III", cn: "破防 III", en: "20% block chip on M1. M2 uses its own rule – each blocked punch chips 75% posture instead of a guaranteed guard break.", zh: "M1 有 20% 格挡穿透；M2 自成规则——每一拳被格挡时削减 75% 架势，而非必定破防。" },
      ],
    },
    {
      en: "Lethwei", cn: "缅拳", tier: "epic", img: "img/lethwei.webp",
      perks: [
        { n: "Powerful", cn: "强力", en: "M2s ragdoll the victim on hit.", zh: "M2 命中会使对手进入布娃娃状态。" },
        { n: "Crushing Force II", cn: "粉碎之力 II", en: "+15% posture damage on every hit.", zh: "每次命中额外造成 +15% 架势伤害。" },
        { n: "Heavy Hitter III (MAX)", cn: "重拳手 III（满级）", en: "+15% damage on guardbreak hits (M1 and M2).", zh: "破防命中（M1 与 M2）额外造成 +15% 伤害。" },
        { n: "Guard Pierce V (MAX)", cn: "破防 V（满级）", en: "30% block chip damage bleeds through guard.", zh: "30% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Resilience V (MAX)", cn: "韧性 V（满级）", en: "55% chance to clash into a grapple when M1s meet.", zh: "双方 M1 对撞时，有 55% 概率触发拼招。" },
      ],
    },
    {
      en: "Striker", cn: "打击者", tier: "epic", img: "img/striker.webp",
      perks: [
        { n: "Broken Rhythm", cn: "乱拍", en: "Every hit in the chain winds up faster than the one before it, 0.35s down to 0.12s, so the combo never lands with the same beat twice.", zh: "连段中每一击的前摇都比上一击更快，从 0.35 秒递减到 0.12 秒，节奏永远不重复。" },
        { n: "Feint", cn: "虚招", en: "Your crit throws a fake kick at 0.15s and lands the real one at 0.45s. Parry the feint and you eat it.", zh: "重击在 0.15 秒做出假踢、0.45 秒才落下真击。若对手招架了假动作，就会吃下真击。" },
        { n: "Guard Pierce III", cn: "破防 III", en: "20% block chip damage bleeds through guard.", zh: "20% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Resilience II", cn: "韧性 II", en: "25% chance to clash into a grapple when M1s meet.", zh: "双方 M1 对撞时，有 25% 概率触发拼招。" },
      ],
    },
    {
      en: "Taijutsu", cn: "体术", tier: "uncommon", img: "img/taijutsu.webp",
      perks: [
        { n: "Swift Recovery I", cn: "迅捷恢复 I", en: "+15% posture regeneration rate.", zh: "架势恢复速度 +15%。" },
        { n: "Powerful", cn: "强力", en: "M2s ragdoll the victim on hit.", zh: "M2 命中会使对手进入布娃娃状态。" },
        { n: "Crushing Force II", cn: "粉碎之力 II", en: "+15% posture damage on every hit.", zh: "每次命中额外造成 +15% 架势伤害。" },
      ],
    },
    {
      en: "Hikaken", cn: "", tier: "uncommon", img: "img/hikaken.webp",
      perks: [
        { n: "Guard Pierce III", cn: "破防 III", en: "20% block chip damage bleeds through guard.", zh: "20% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Resilience II", cn: "韧性 II", en: "25% chance to clash into a grapple when M1s meet.", zh: "双方 M1 对撞时，有 25% 概率触发拼招。" },
        { n: "Crushing Force II", cn: "粉碎之力 II", en: "+15% posture damage on every hit.", zh: "每次命中额外造成 +15% 架势伤害。" },
      ],
    },
    {
      en: "Giovanna", cn: "乔瓦娜", tier: "uncommon", img: "img/giovanna.webp",
      perks: [
        { n: "Crushing Force II", cn: "粉碎之力 II", en: "+15% posture damage on every hit.", zh: "每次命中额外造成 +15% 架势伤害。" },
        { n: "Heavy Hitter III (MAX)", cn: "重拳手 III（满级）", en: "+15% damage on guardbreak hits (M1 and M2).", zh: "破防命中（M1 与 M2）额外造成 +15% 伤害。" },
        { n: "Guard Pierce V (MAX)", cn: "破防 V（满级）", en: "30% block chip damage bleeds through guard.", zh: "30% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Powerful", cn: "强力", en: "M2s ragdoll the victim on hit.", zh: "M2 命中会使对手进入布娃娃状态。" },
      ],
    },
    {
      en: "Kickboxing", cn: "自由搏击", tier: "uncommon", img: "img/kickboxing.webp",
      perks: [
        { n: "Low Guard", cn: "低位防守", en: "Kicks increase dash cooldown by 40% for 5s if both land.", zh: "若两段踢击全部命中，令对手冲刺冷却增加 40%，持续 5 秒。" },
        { n: "Switch Stance", cn: "换架", en: "The 4th M1 refunds 1.5s of M2 cooldown on hit.", zh: "第 4 段 M1 命中时返还 1.5 秒 M2 冷却。" },
        { n: "Crushing Force I", cn: "粉碎之力 I", en: "+10% posture damage on every hit.", zh: "每次命中额外造成 +10% 架势伤害。" },
        { n: "Guard Pierce III", cn: "破防 III", en: "20% block chip damage bleeds through guard.", zh: "20% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Resilience II", cn: "韧性 II", en: "25% chance to clash into a grapple when M1s meet.", zh: "双方 M1 对撞时，有 25% 概率触发拼招。" },
      ],
    },
    {
      en: "Muay Thai", cn: "泰拳", tier: "uncommon", img: "img/muay-thai.webp",
      perks: [
        { n: "Powerful", cn: "强力", en: "M2s ragdoll the victim on hit.", zh: "M2 命中会使对手进入布娃娃状态。" },
        { n: "Crushing Force II", cn: "粉碎之力 II", en: "+15% posture damage on every hit.", zh: "每次命中额外造成 +15% 架势伤害。" },
        { n: "Guard Pierce V (MAX)", cn: "破防 V（满级）", en: "30% block chip damage bleeds through guard.", zh: "30% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Resilience V (MAX)", cn: "韧性 V（满级）", en: "55% chance to clash into a grapple when M1s meet.", zh: "双方 M1 对撞时，有 55% 概率触发拼招。" },
      ],
    },
    {
      en: "Slugger", cn: "重炮手", tier: "uncommon", img: "img/slugger.webp",
      perks: [
        { n: "Unstable", cn: "不稳定", en: "Deal +40% damage but take +15% damage.", zh: "造成伤害 +40%，但受到伤害 +15%。" },
        { n: "Guard Pierce V (MAX)", cn: "破防 V（满级）", en: "30% block chip damage bleeds through guard.", zh: "30% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Resilience III", cn: "韧性 III", en: "35% chance to clash into a grapple when M1s meet.", zh: "双方 M1 对撞时，有 35% 概率触发拼招。" },
      ],
    },
    {
      en: "Karate", cn: "空手道", tier: "uncommon", img: "img/karate.webp",
      perks: [
        { n: "Powerful", cn: "强力", en: "M2s ragdoll the victim on hit.", zh: "M2 命中会使对手进入布娃娃状态。" },
        { n: "Steady Nerves", cn: "沉着", en: "Perfect blocking boosts your posture regen by 15% for 3 seconds.", zh: "完美格挡后 3 秒内，架势恢复速度 +15%。" },
        { n: "Balanced Strike", cn: "均衡打击", en: "Landing an M2 refunds 25% of your current posture cost.", zh: "M2 命中时返还 25% 所消耗的架势。" },
        { n: "Guard Pierce II", cn: "破防 II", en: "15% block chip damage bleeds through guard.", zh: "15% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Resilience II", cn: "韧性 II", en: "25% chance to clash into a grapple when M1s meet.", zh: "双方 M1 对撞时，有 25% 概率触发拼招。" },
      ],
    },
    {
      en: "Basic", cn: "基础", tier: "common", img: "img/basic.webp",
      perks: [
        { n: "Counterstrike", cn: "反击", en: "+5% damage on your next attack after perfect blocking.", zh: "完美格挡后，下一次攻击伤害 +5%。" },
        { n: "Swift Recovery I", cn: "迅捷恢复 I", en: "+15% posture regeneration rate.", zh: "架势恢复速度 +15%。" },
        { n: "Guard Pierce II", cn: "破防 II", en: "15% block chip damage bleeds through guard.", zh: "15% 的格挡穿透伤害会穿过对手防御生效。" },
        { n: "Resilience II", cn: "韧性 II", en: "25% chance to clash into a grapple when M1s meet.", zh: "双方 M1 对撞时，有 25% 概率触发拼招。" },
      ],
    },
  ],
  // 通用天赋词条说明（来自官方 Combat Style Perks 卡片）
  glossary: [
    { n: "Heavy Hitter", cn: "重拳手", en: "Deals extra damage when hitting an opponent whose defense was just completely broken.", zh: "命中刚被彻底破防的对手时造成额外伤害。", tiers: "I +5% ➔ II +10% ➔ III +15%" },
    { n: "Guard Pierce", cn: "破防", en: "Allows a certain percentage of your damage to sneak through the enemy's block and hurt their health directly.", zh: "让你一定比例的伤害穿过对手格挡，直接削减其生命值。", tiers: "I 10% ➔ II 15% ➔ III 20% ➔ IV 25% ➔ V 30%" },
    { n: "Resilience", cn: "韧性", en: "Gives a chance to trigger an automatic wrestling grab when your light attack hits the enemy's light attack at the exact same time.", zh: "当你的轻攻击与对手轻攻击同时相撞时，有概率自动触发摔技抓取。", tiers: "I 15% ➔ II 25% ➔ III 35% ➔ IV 45% ➔ V 55%" },
    { n: "Powerful", cn: "强力", en: "Your heavy attacks completely flatten opponents on impact, throwing them into the air where they cannot control their character.", zh: "重击命中会将对手完全掀飞，抛到空中且无法操控角色。", tiers: "无等级 · 固定效果" },
    { n: "Crushing Force", cn: "粉碎之力", en: "Every single hit deals extra damage to the opponent's blocking meter, making it much easier to break their shield.", zh: "每次命中都会额外削减对手的格挡槽，更容易打破其防御。", tiers: "I +10% ➔ II +15% ➔ III +20%" },
    { n: "Counterstrike", cn: "反击", en: "Gives a temporary damage boost to your very next attack right after you execute a perfectly timed block.", zh: "完美格挡后，紧接着的下一次攻击获得临时伤害提升。", tiers: "+5% damage" },
    { n: "Takedown", cn: "摔技", en: "Changes your heavy attack into a wrestling grab or ground slam that deals a massive multiplier of damage.", zh: "将重击变为摔技抓取或地面砸击，造成巨额倍率伤害。", tiers: "1.5x damage" },
    { n: "Hyperarmor M2s", cn: "霸体重击", en: "Protects you from being stunned or interrupted while swinging a heavy attack, meaning the enemy cannot stop your punch even if they hit you first.", zh: "挥出重击时不会被眩晕或中断，即使对手先命中也无法打断你的重击。", tiers: "无等级 · 固定效果" },
    { n: "Switch Stance", cn: "换架", en: "Your 4th consecutive basic light attack reduces the waiting timer of your heavy attack.", zh: "连续第 4 次轻攻击会缩短重击的冷却计时。", tiers: "-1.5 seconds" },
    { n: "Concussive", cn: "震荡", en: "Upgrades your critical attacks to either strike the enemy twice in one go or completely lock them out of blocking your attacks for a brief period.", zh: "强化重击：可一次命中两次，或在一段时间内完全封锁对手的格挡。", tiers: "2 seconds duration" },
    { n: "Swift Recovery", cn: "迅捷恢复", en: "Increases the speed at which your character naturally recovers their blocking shield meter.", zh: "提升角色自然恢复格挡槽（架势）的速度。", tiers: "I +15% recovery speed" },
    { n: "Fortified", cn: "坚壁", en: "Increases your blocking defenses, causing you to lose less shield meter when you block enemy hits.", zh: "强化防御，格挡对手攻击时损失的格挡槽更少。", tiers: "I -10% shield loss while blocking" },
  ],
};
