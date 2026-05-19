const poemsData = [
    {
        id: 1,
        category: "tang-song",
        text: "人生若只如初见",
        author: "纳兰性德",
        meaning: "意中人相处，如果后来产生了怨恨、埋怨，没有了刚刚相识的时候的美好、淡然，那么一切还是停留在初次见面的时候为好。"
    },
    {
        id: 2,
        category: "tang-song",
        text: "曾经沧海难为水，除却巫山不是云",
        author: "元稹",
        meaning: "曾经到临过沧海，别处的水就不足为顾；除了巫山，别处的云便不称其为云。"
    },
    {
        id: 3,
        category: "tang-song",
        text: "愿得一心人，白头不相离",
        author: "卓文君",
        meaning: "希望能得到一个一心一意的人，即使到了白头也不分离。"
    },
    {
        id: 4,
        category: "tang-song",
        text: "身无彩凤双飞翼，心有灵犀一点通",
        author: "李商隐",
        meaning: "身上没有彩凤那双可以飞翔的翅膀，心灵却像犀牛角一样，有一点白线可以相通。"
    },
    {
        id: 5,
        category: "tang-song",
        text: "此情可待成追忆，只是当时已惘然",
        author: "李商隐",
        meaning: "这份感情可以留待日后回忆，只是在当时却已感到怅然若失。"
    },
    {
        id: 6,
        category: "tang-song",
        text: "十年生死两茫茫，不思量，自难忘",
        author: "苏轼",
        meaning: "你我夫妻生死相隔已经整整十年，强忍不去思念，可终究难以忘怀。"
    },
    {
        id: 7,
        category: "tang-song",
        text: "两情若是久长时，又岂在朝朝暮暮",
        author: "秦观",
        meaning: "只要两情至死不渝，又何必贪求卿卿我我的朝欢暮乐呢。"
    },
    {
        id: 8,
        category: "tang-song",
        text: "衣带渐宽终不悔，为伊消得人憔悴",
        author: "柳永",
        meaning: "我日渐消瘦也不觉得懊悔，为了她我情愿一身憔悴。"
    },
    {
        id: 9,
        category: "tang-song",
        text: "众里寻他千百度，蓦然回首，那人却在，灯火阑珊处",
        author: "辛弃疾",
        meaning: "在人群中千百次地寻找他，猛然回头，那人却在灯火零落之处。"
    },
    {
        id: 10,
        category: "tang-song",
        text: "问君能有几多愁，恰似一江春水向东流",
        author: "李煜",
        meaning: "问你心中有多少哀愁，就像这不尽的滔滔春水滚滚东流。"
    },
    {
        id: 11,
        category: "ancient",
        text: "青山不改，绿水长流",
        author: "佚名",
        meaning: "青山不会改变，绿水会永远流淌。比喻友谊或信念永远不变。"
    },
    {
        id: 12,
        category: "ancient",
        text: "岁月静好，现世安稳",
        author: "胡兰成",
        meaning: "生活平安宁静，现在的时光安稳美好。"
    },
    {
        id: 13,
        category: "ancient",
        text: "愿历尽千帆，归来仍是少年",
        author: "佚名",
        meaning: "希望经历过千辛万苦之后，回来时依然保持少年的纯真之心。"
    },
    {
        id: 14,
        category: "ancient",
        text: "鲜衣怒马少年时，不负韶华行且知",
        author: "佚名",
        meaning: "少年时穿着华丽的衣服，骑着骏马，不要辜负美好的年华，一边前行一边学习。"
    },
    {
        id: 15,
        category: "ancient",
        text: "时光知味，岁月沉香",
        author: "佚名",
        meaning: "时光会让人品味到生活的味道，岁月会像沉香一样沉淀出美好。"
    },
    {
        id: 16,
        category: "ancient",
        text: "一川烟草，满城风絮，梅子黄时雨",
        author: "贺铸",
        meaning: "就像那一望无际的烟草，满城飞舞的柳絮，梅子黄时的绵绵细雨。"
    },
    {
        id: 17,
        category: "ancient",
        text: "山中何事，松花酿酒，春水煎茶",
        author: "张可久",
        meaning: "在山里有什么事呢？用松花酿酒，用春天的水煎茶，过着悠闲自在的生活。"
    },
    {
        id: 18,
        category: "ancient",
        text: "当时只道是寻常",
        author: "纳兰性德",
        meaning: "当时只觉得是很平常的事，现在回想起来才觉得珍贵。"
    },
    {
        id: 19,
        category: "solar",
        text: "立春一年端，种地早盘算",
        author: "农谚",
        meaning: "立春是一年的开始，种地要早做打算。"
    },
    {
        id: 20,
        category: "solar",
        text: "清明时节雨纷纷，路上行人欲断魂",
        author: "杜牧",
        meaning: "清明时节细雨纷纷飘洒，路上的行人个个落魄断魂。"
    },
    {
        id: 21,
        category: "solar",
        text: "小荷才露尖尖角，早有蜻蜓立上头",
        author: "杨万里",
        meaning: "小荷叶刚从水面露出尖尖的角，早就有一只蜻蜓立在它的上头。（立夏时节）"
    },
    {
        id: 22,
        category: "solar",
        text: "东边日出西边雨，道是无晴却有晴",
        author: "刘禹锡",
        meaning: "东边日出西边下起雨，说是无晴但是还有晴。（夏至时节天气多变）"
    },
    {
        id: 23,
        category: "solar",
        text: "空山新雨后，天气晚来秋",
        author: "王维",
        meaning: "空旷的群山沐浴了一场新雨，夜晚降临使人感到已是初秋。"
    },
    {
        id: 24,
        category: "solar",
        text: "停车坐爱枫林晚，霜叶红于二月花",
        author: "杜牧",
        meaning: "停下车来是因为喜爱这傍晚的枫林，经霜的枫叶比二月的春花还要红艳。（霜降时节）"
    },
    {
        id: 25,
        category: "solar",
        text: "绿蚁新醅酒，红泥小火炉",
        author: "白居易",
        meaning: "酿好了淡绿的米酒，烧旺了小小的红泥火炉。（冬日温暖景象）"
    },
    {
        id: 26,
        category: "solar",
        text: "忽如一夜春风来，千树万树梨花开",
        author: "岑参",
        meaning: "仿佛一夜之间春风吹来，树上好像千树万树梨花盛开。（大雪景象）"
    },
    {
        id: 27,
        category: "beautiful",
        text: "星光不问赶路人，时光不负有心人",
        author: "佚名",
        meaning: "星光不会询问赶路的人，时光也不会辜负有心人的努力。"
    },
    {
        id: 28,
        category: "beautiful",
        text: "白茶清欢无别事，我在等风也等你",
        author: "安妮宝贝",
        meaning: "喝着清茶，平淡地生活没有其他事情，我在等风来也在等你到来。"
    },
    {
        id: 29,
        category: "beautiful",
        text: "人间有味是清欢",
        author: "苏轼",
        meaning: "人世间最有味道的是清淡的欢愉。"
    },
    {
        id: 30,
        category: "beautiful",
        text: "花看半开，酒饮微醉",
        author: "菜根谭",
        meaning: "看花要看半开的，喝酒要喝到微醉的状态，这是最美好的时刻。"
    },
    {
        id: 31,
        category: "beautiful",
        text: "春日游，杏花吹满头",
        author: "韦庄",
        meaning: "春天去郊游，杏花飘落，吹得满头都是。"
    },
    {
        id: 32,
        category: "beautiful",
        text: "南风知我意，吹梦到西洲",
        author: "佚名",
        meaning: "南风知道我的心意，把我的梦吹到西洲去。"
    },
    {
        id: 33,
        category: "beautiful",
        text: "我有一瓢酒，可以慰风尘",
        author: "韦应物",
        meaning: "我有一瓢酒，可以用来慰藉旅途的辛苦。"
    },
    {
        id: 34,
        category: "beautiful",
        text: "晚来天欲雪，能饮一杯无",
        author: "白居易",
        meaning: "天色将晚，快要下雪了，能陪我喝一杯酒吗？"
    },
    {
        id: 35,
        category: "tang-song",
        text: "海内存知己，天涯若比邻",
        author: "王勃",
        meaning: "四海之内只要有知己，即使远在天涯，也感觉像邻居一样亲近。"
    },
    {
        id: 36,
        category: "tang-song",
        text: "举头望明月，低头思故乡",
        author: "李白",
        meaning: "抬起头看天上的明月，低下头就思念起故乡来。"
    },
    {
        id: 37,
        category: "tang-song",
        text: "春风又绿江南岸，明月何时照我还",
        author: "王安石",
        meaning: "春风又一次吹绿了江南两岸，明月什么时候才能照着我回到故乡？"
    },
    {
        id: 38,
        category: "ancient",
        text: "执子之手，与子偕老",
        author: "诗经",
        meaning: "牵着你的手，和你一起变老。"
    },
    {
        id: 39,
        category: "ancient",
        text: "琴瑟在御，莫不静好",
        author: "诗经",
        meaning: "弹琴鼓瑟，生活没有不宁静美好的。"
    },
    {
        id: 40,
        category: "beautiful",
        text: "春水碧于天，画船听雨眠",
        author: "韦庄",
        meaning: "春天的江水比天空还碧绿，在画船里听着雨声入睡。"
    }
];
