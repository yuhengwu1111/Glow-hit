const translations = {
            zh: {
                navHome: "首頁", navProduct: "產品解構", navSimulator: "互動控制台", navScience: "運動科學", navAbout: "創業提案", navTry: "試玩體驗",
                footerTitle: "GlowHit 智慧模組化光點反應牆專案",
                footerCopyright: "© 2026 RoboRAVE 大阪世界錦標賽創業挑戰賽代表隊. 保留所有權利。",
                footerLink1: "硬體細節", footerLink2: "神經學文獻", footerLink3: "大阪參賽計畫書",
                // Home Page
                heroTitle: "光速反應，智慧定義",
                heroSub: "一體成型的模組化觸控運動牆，兼具極限體能訓練與智慧家庭美學。",
                exploreBtn: "探索硬體拆解",
                tryBtn: "前往線上體驗",
                highlightTitle: "科技、健身與空間的完美交會",
                highlightSportTitle: "動態運動訓練模式",
                highlightSportDesc: "透過低延遲射頻演算法與超敏捷微動感測，打造極致沉浸式的打擊與手眼協調反應牆。可用於日常健美、敏捷跳躍與專注力強化。",
                highlightSportCTA: "立即模擬運動測試",
                highlightHomeTitle: "靜態居家美學氛圍燈",
                highlightHomeDesc: "運動結束，一鍵無縫化身為典雅牆面燈飾。完美接入 Apple Home 家庭生態系，相容 Siri 語音，無縫調整 RGB 色彩與冷暖色溫。",
                highlightHomeCTA: "調度 Apple Home 色調",
                legoTitle: "基於模組化的無限擴充性",
                legoDesc: "結構基於模組化進行開發，使用者可根據空間與預算，自由拼接為蜂巢狀、矩陣式或不規則布局。",
                homekitTitle: "接入 Apple Home 智慧生態",
                homekitDesc: "靜態待機時自動轉化為環境氛圍燈。支援 Siri 與 Apple Home 連動，無縫調整 RGB 色彩與冷暖色溫。",
                espTitle: "ESP32 低延遲控制核心",
                espDesc: "配備高效能雙模通訊晶片，結合高靈敏度微動開關，打擊感測無死角，帶來毫秒級完美響應。",
                modesTitle: "四大沉浸式互動模式",
                modeSpeed: "光速反應",
                modeSpeedDesc: "隨機點亮極限光點，測試並記錄毫秒級的物理反應速度。",
                modeRhythm: "節奏律動",
                modeRhythmDesc: "將運動結合音樂，靶位隨節奏亮起，讓居家體能鍛鍊充滿樂趣。",
                modeColor: "紅藍辨識",
                modeColorDesc: "高壓下大腦決策。看到指定顏色才可打擊，鍛鍊「反應抑制」能力。",
                modeTimer: "計時積分",
                modeTimerDesc: "在限制時間內挑戰打擊極限，數據即時回傳全球 CloudDB 排行榜。",
                
                // Product Page
                explodedTitle: "GlowHit 硬體拆解與工業結構",
                explodedSub: "以極簡極致的工業結構，打造極具韌性的感測與多功能發光美學模組。",
                svgPlate: "中心五角形按壓板",
                svgDiffuser: "磨砂導光上蓋",
                svgSwitches: "3組 120° 微動開關",
                svgMCU: "ESP32 + WS2812B 整合板",
                svgBattery: "2000mAh 安全電池",
                svgLego: "模組化底座",
                partPlate: "五邊形按壓板",
                partPlateDesc: "符合人體工學的中心按壓板，打擊時均勻向下觸發微動開關。",
                partDiffuser: "磨砂導光上蓋",
                partDiffuserDesc: "透光導光材質，使 WS2812B 幻彩燈光呈溫潤、高飽和且不刺眼的漫反射效果。",
                partSwitches: "微動感應器",
                partSwitchesDesc: "高靈敏微動開關，實現打擊無死角、零誤判。",
                partMCU: "ESP32 控制晶片",
                partMCUDesc: "核心運算中樞，支援 Wi-Fi、低功耗藍牙 (BLE) ，具備強大擴充性。",
                partBattery: "2000mAh 鋰電池組",
                partBatteryDesc: "整合安全保護板，支援 5V Type-C 快速充電，滿足長效續航。",
                partLego: "模組化底座",
                partLegoDesc: "穩固的工業風底座，預留模組化孔位，實現免螺絲快拆與無限拼接布局。",
                layoutTitle: "空間適應力：隨心所欲的陣列布局",
                layoutSub: "根據場地、牆面空間或訓練指標，任意更改排列架構，完美適配多種專業方案。",
                layoutHoneycomb: "蜂巢狀 (Honeycomb)",
                layoutHoneycombDesc: "緊密排列，適合高強度的近距離敏捷反應訓練與多重擊打刺激。",
                layoutMatrix: "矩陣式 (Matrix)",
                layoutMatrixDesc: "完美對稱，提供標準化的認知辨識與速度極限測試基準環境。",
                layoutRandom: "不規則任意排 (Random DIY)",
                layoutRandomDesc: "打破常規，完全適應不規則居家牆面、走廊或特殊 DIY 運動目標設計。",
                
                // Simulator Page
                simTitle: "GlowHit 智慧調控與互動模擬器",
                simDesc: "我們在網頁中完整模擬了 GlowHit 的物理回饋！可任選兩種互動模式，體驗極致快感。",
                tabSpeed: "光速反應 (Speed)",
                tabColor: "紅藍辨識 (Inhibition)",
                tabHome: "Apple Home 模式",
                scoreLabel: "得分",
                timeLabel: "剩餘時間",
                reactLabel: "平均反應",
                startBtnText: "開始反應測試 (Start Test)",
                stopBtnText: "停止測試 (Stop)",
                homeTitle: "Apple Home 聯動操控",
                homeHue: "彩光色彩 (Hue)",
                homeSat: "色彩飽和度 (Saturation)",
                homeBri: "智慧亮度 (Brightness)",
                homeTemp: "模擬色溫 (Color Temp)",
                powerMonitor: "2000mAh 5V Type-C 充電電池",
                powerDesc: "使用穩定 5V Type-C 2A 充電電池或工業電源集中供電。以下為 12 組模組運作下的動態負載模擬。",
                currentLoad: "當前電網總電流：",
                loadPercentLabel: "變壓器負載安全餘量 (最大 2000mA 承載)",
                statusSafe: "安全工作範圍 (電網狀態穩定)",
                statusLimit: "電網保護中（已開啟冷卻防護限制）",
                alertEnd: "測試結束！",
                alertScore: "您的總得分：",
                alertAvgReact: "平均反應時間：",
                alertHits: "命中打擊次數：",
                ms: "毫秒",
                
                // Science Page
                scienceTitle: "反應力訓練的健康科學實證",
                scienceIntro: "GlowHit 的「健康遊戲（Gamification）」不僅僅是體能訓練，更是活化大腦神經、防跌與提升專注力的神經肌肉協調方案。",
                sci1Tag: "神經可塑性與認知負荷調控",
                sci1Title: "注意力控制與心流體驗 (Attentional Control & Flow)",
                sci1Desc: "發表於 Frontiers in Psychology (2025) 的最新研究探討了具備高認知與物理敏捷負荷的反應訓練對大腦的影響。研究發現，規律參與這類需要快速視覺掃描與物理擊打的運動，能顯著提升大腦的「注意力穩定性 (Attentional Stability)」。其關鍵機制在於運動中誘發的「心流體驗 (Flow Experience)」，能使大腦在高度興奮中維持神經訊號的穩定聚焦。",
                sci1Link: "閱讀 Frontiers in Psychology (2025) 專專注力研究原文",
                sci2Tag: "平衡覺察與老年防跌醫學",
                sci2Title: "選擇性步法反應時間 (Choice Step Reaction Time)",
                sci2Desc: "老年人的失衡防摔防骨折能力，與「選擇性步法反應時間（CSRT）」高度正相關。GlowHit 反應牆能顯著縮短大腦視覺信號至下肢動作的神經延遲（Premotor Time），活化周邊視野反應能力。",
                sci2Link: "閱讀 CSRT 老年防跌臨床文獻 (Evaluating Fall Risk in PMC)",
                sci3Tag: "神經肌肉反應與手眼協調敏捷",
                sci3Title: "雙重任務神經肌肉協調 (Dual-Task Neuromotor Reactivity)",
                sci3Desc: "發表於 PMC 醫學研究資料庫 (PMC12921918) 的最新手球等運動項目實證指出，使用高靈敏光點反應系統進行「視覺搜尋」結合「三向觸發物理擊打」的雙重任務（Dual-task）感知訓練，能顯著改善青少年選手與一般使用者者的動作反應時間、手眼運動協調（Visuomotor integration）以及對外界干擾的空間注意力控制。",
                sci3Link: "閱讀 PMC12921918 敏捷度與感覺運動整合文獻原文",
                
                // Pitch Deck Page
                aboutTitle: "2026 大阪世界賽創業挑戰賽提案",
                aboutBrief: "我們將代表台灣前往日本大阪，以這款將「智慧家庭」與「運動科學」跨界結合的創新方案，爭取全球頂尖創客大獎！",
                aboutTeam: "提案單位：RoboRAVE 創業團隊 | 聯絡人：吳禹衡 (0919-618-029)",
                budgetTitle: "赴日參賽與設備研發資金規劃",
                milestoneTitle: "專案里程碑與發展規劃",
                milestone1: "2025/12 - 第一代物理原型機研製成功，完成 ESP32 與 HomeSpan 通訊協議架構。",
                milestone2: "2026/04 - 導入觸碰感應整合，完成 LEGO 快拆結構優化，推出第二代便攜控制中樞。",
                milestone3: "2026/08 - 赴日本大阪現場 Pitch 與 12 組拼接展示牆實地體驗營運。",
                slide1Title: "1. 智慧模組化光點反應牆：起源與願景",
                slide1Desc: "城市碎片化時代，運動與家庭美學出現嚴重斷層。GlowHit 用遊戲化的觸碰反饋重新喚醒健康。它既是牆面上的極限反射競技場，也是 Apple Home 生態中溫潤居家氛圍的最佳智慧燈飾。",
                slide2Title: "2. 技術優勢：零死角、超低延遲系統",
                slide2Desc: "內建 ESP32 高效能通訊晶片。我們精密設計了120°等分的3組高精度微動開關，搭配客製五邊形浮動面板。無論您敲擊哪個邊角，都能確保毫秒級無誤差傳遞至系統大腦。",
                slide3Title: "3. 智慧家庭：完美整合 Apple Home",
                slide3Desc: "不運動時，GlowHit 作為精緻環境照明燈融入生活。使用者可透過 iPhone「家庭」App 或 Siri，無段控制冷暖色溫與RGB色彩氛圍。讓昂貴運動器材不再堆灰塵，天天點亮溫暖角落。",
                slide4Title: "4. 安全防護：展場出國與電源過載軟體保護",
                slide4Desc: "12組模組整組功率達到約 42W。出國完全符合登機 74Wh 航空安檢規範。配合展場專用交流變壓器分流。我們特別研發了主動限流保護機制，在不使用行動電源的情形下依然完美確保電網供電安全。",
                slide5Title: "5. 商業擴充前景與募資承諾",
                slide5Desc: "以超高 C/P 值硬體打擊端為核心。未來，我們計畫推出結合運動日誌、數據圖表與全球排名的專屬 App；並在大阪世界錦標賽上展示完美的 12 片牆體，為台灣創客青年爭光！",
                thItem: "項目 (Item)", thBudget: "預算分配 (Budget NTD)", thRemarks: "細節說明 (Remarks)",
                tbItem1: "國際賽報名費", tbRemarks1: "大會團隊賽事報名、行政與公證文件規費",
                tbItem2: "單人赴日差旅費", tbRemarks2: "往返大阪廉航機票、展期住宿與當地交通配套",
                tbItem3: "GlowHit 研發與設備費", tbRemarks3: "ESP32 晶片、鋰電池、微動感測及 12 組拼接外殼零件打樣",
                tbItem4: "行銷與現場推廣雜支", tbRemarks4: "大會專屬宣傳手冊、A4 宣傳單、海報與展位裝潢材料物資",
                tbTotal: "總募資預算 (Total Ask)", tbTotalRemarks: "代表隊圓夢與創新方案產品化的關鍵第一步",
                slideOf: "投影片", slideOfMax: "共 5 頁"
            },
            en: {
                navHome: "Home", navProduct: "Product Specs", navSimulator: "Simulator", navScience: "Science Evidence", navAbout: "Pitch Deck", navTry: "Try Now",
                footerTitle: "GlowHit Smart Modular Agility Wall Project",
                footerCopyright: "© 2026 RoboRAVE Osaka World Championship Entrepreneur Team. All Rights Reserved.",
                footerLink1: "Hardware Details", footerLink2: "Scientific Papers", footerLink3: "Osaka Pitch Deck",
                // Home Page
                heroTitle: "Reaction at the Speed of Light.",
                heroSub: "An elegant, modular reactive workout wall. Melding professional athletic training with Apple-inspired home aesthetics.",
                exploreBtn: "Explore Hardware Specs",
                tryBtn: "Launch Online Demo",
                highlightTitle: "The Collision of Technology, Fitness & Aesthetics",
                highlightSportTitle: "Dynamic Exercise Training Mode",
                highlightSportDesc: "With low-latency radio frequency algorithms and ultra-responsive micro-sensing, enjoy an immersive workout system ideal for core fitness, agility jumps, and focus improvement.",
                highlightSportCTA: "Try Sport Simulator",
                highlightHomeTitle: "Ambient Smart Lighting Mode",
                highlightHomeDesc: "Once exercise is finished, transform GlowHit into a smart aesthetic lighting panel. Compatible with Siri and Apple Home to adjust RGB hue and color temperature.",
                highlightHomeCTA: "Tune Apple Home Color",
                legoTitle: "Based on modular, infinitely scalable",
                legoDesc: "Engineered with a LEGO-compatible base plate. Easily configure into honeycomb, matrix, or custom asymmetric layouts as your space and budget desire.",
                homekitTitle: "Seamless Apple Home Integration",
                homekitDesc: "When idle, it automatically transforms into ambient lighting. Supports Siri and Apple Home integration to seamlessly adjust RGB color and color temperature.",
                espTitle: "ESP32 Core Microprocessor",
                espDesc: "Equipped with a high-performance dual-mode communication chip, combined with a high-sensitivity micro-switch, it provides seamless impact sensing with millisecond-level perfect response.",
                modesTitle: "Four Immersive Play Modes",
                modeSpeed: "Light Speed",
                modeSpeedDesc: "Randomly ignites target lights to measure and track your reaction time down to the exact millisecond.",
                modeRhythm: "Acoustic Beat",
                modeRhythmDesc: "Syncs light targets to music rhythm, turning intensive agility training into a dynamic beat game.",
                modeColor: "Color Hunt",
                modeColorDesc: "Demands cognitive inhibition. Hit only selected colors under stress to exercise executive decision-making.",
                modeTimer: "Aura Score",
                modeTimerDesc: "Race against the clock to rack up points, syncing your score directly to our global CloudDB leaderboard.",
                
                // Product Page
                explodedTitle: "GlowHit Hardware Anatomy",
                explodedSub: "Clean aesthetic industrial architecture crafted for durable tactile feedback and brilliant ambient glows.",
                svgPlate: "Pentagonal Trigger Plate",
                svgDiffuser: "Translucent Light Guide",
                svgSwitches: "Micro switch",
                svgMCU: "ESP32 + WS2812B Mainboard",
                svgBattery: "2000mAh Protected Li-ion",
                svgLego: "Modular base",
                partPlate: "Pentagonal Press Plate",
                partPlateDesc: "Ergonomically designed floating trigger panel, ensuring even pressure distribution down to the switches.",
                partDiffuser: "Translucent Light Guide Cover",
                partDiffuserDesc: "Frosted acoustic lens diffusing the WS2812B RGB light into an elegant, non-glare volumetric glow.",
                partSwitches: "Micro-motion sensor",
                partSwitchesDesc: "High-sensitivity microswitches enable strikes with no blind spots and zero false alarms.",
                partMCU: "ESP32 controller chip",
                partMCUDesc: "Core computing hub, supporting Wi-Fi and Bluetooth Low Energy (BLE), with powerful expandability.",
                partBattery: "2000mAh Safety Li-ion Pack",
                partBatteryDesc: "Built-in protection circuit supporting 5V Type-C quick charging for all-day portability.",
                partLego: "LEGO Modular Chassis",
                partLegoDesc: "Clean industrial design allowing brick-lock quick-release assembly and structural chain expansions.",
                layoutTitle: "Spatial Adaptability: Infinite Layout Formations",
                layoutSub: "Rearrange the physical mesh structures in minutes to perfectly tailor to any professional routine or home boundary.",
                layoutHoneycomb: "Honeycomb Shape",
                layoutHoneycombDesc: "Dense arrangement ideal for hyper-intensive coordination drills and close-proximity tactile tasks.",
                layoutMatrix: "Symmetric Grid",
                layoutMatrixDesc: "Perfect symmetry providing standard conditions for cognitive classification and peak reflex tests.",
                layoutRandom: "Asymmetrical DIY Maze",
                layoutRandomDesc: "Breaks boundaries to match uneven domestic hallways, corners, or unique custom fitness environments.",
                
                // Simulator Page
                simTitle: "GlowHit Interactive Control Station",
                simDesc: "Experience the tactile joy of GlowHit right in your browser. Choose a mode below to test your reflexes.",
                tabSpeed: "Light Speed (Speed)",
                tabColor: "Inhibition (Color Match)",
                tabHome: "Apple Home Decor",
                scoreLabel: "SCORE",
                timeLabel: "REMAINING",
                reactLabel: "AVG REACT",
                startBtnText: "Start Reaction Test",
                stopBtnText: "Stop Test",
                homeTitle: "Apple Home Control Panel",
                homeHue: "Hue Spectrum",
                homeSat: "Color Saturation",
                homeBri: "Smart Brightness",
                homeTemp: "Color Temperature",
                powerMonitor: "2000mAh 5V Type-C rechargeable battery",

                powerDesc: "Powered by a 5V Type-C 2A rechargeable battery or industrial power supply. The following is a dynamic load simulation under 12 operating conditions.",
                currentLoad: "Current total grid current:",

                loadPercentLabel: "Safe load capacity (maximum supported 2000mA)",

                statusSafe: "Safe operating standards (grid status judgment)",

                statusLimit: "Grid protection (cold start protection limit)",
                alertEnd: "Test Finished!",
                alertScore: "Your Total Score: ",
                alertAvgReact: "Average Reaction Time: ",
                alertHits: "Total Valid Hits: ",
                ms: "ms",
                
                // Science Page
                scienceTitle: "Scientific Evidence of Agility Training",
                scienceIntro: "GlowHit's gamified movement paradigm is backed by international clinical research, helping to enhance executive functions, reduce fall risks, and boost neuroplasticity.",
                sci1Tag: "Neuroplasticity & Attentional Focus Control",
                sci1Title: "Attentional Control & Flow Experience",
                sci1Desc: "Published in Frontiers in Psychology (2025), this breakthrough study investigates how high-cognitive reactive exercises affect the human brain. Regular interaction with multi-sensory light target setups significantly strengthens an individual's 'Attentional Stability'. This is mediated by inducing deep 'Flow Experience' states during quick physical response tasks, helping the brain filter noise and sustain neural focus.",
                sci1Link: "Read Frontiers in Psychology (2025) Study",
                sci2Tag: "Proprioception & Senior Fall Prevention",
                sci2Title: "Choice Step Reaction Time (CSRT) Activation",
                sci2Desc: "Senior fall avoidance is highly correlated with Choice Step Reaction Time (CSRT). Training with interactive agility targets decreases the motor delay pathway, enabling rapid reflex posture adjustments.",
                sci2Link: "Read CSRT Fall Prevention Clinical Research (PMC)",
                sci3Tag: "Neuromotor Response & Visuomotor Integration",
                sci3Title: "Dual-Task Neuromotor Coordination (PMC12921918)",
                sci3Desc: "A latest clinical study indexed in PMC (PMC12921918) demonstrates that dual-task cognitive-motor drills combining visual search cues with tactile hit execution significantly optimize premotor reaction times, spatial attention parameters, and general hand-eye-body integration (Visuomotor Integration) across diverse cohort groups.",
                sci3Link: "Read PMC12921918 Agility & Coordination Literature",
                
                // Pitch Deck Page
                aboutTitle: "RoboRAVE Osaka 2026 Pitch Deck",
                aboutBrief: "Representing Taiwan in Osaka, Japan under the Entrepreneurial category. Bringing a revolutionary product that redefines the intersection of smart home design and health tech.",
                aboutTeam: "Pitch Team: RoboRAVE Taiwan | Representative: Yu-Heng Wu (+886 919-618-029)",
                budgetTitle: "Project Budget & Resource Allocation",
                milestoneTitle: "Milestone & Roadmap",
                milestone1: "2025/12 - Completed Gen-1 physical prototype, built robust ESP32 HomeSpan driver protocols.",
                milestone2: "2026/04 - Integrated touch capacitive controls, streamlined LEGO brick-chassis for modularity.",
                milestone3: "2026/08 - Competing in Osaka World Championship with a 12-module real-time interactive demo wall.",
                slide1Title: "1. Smart Modular Reaction Wall: Origin & Vision",
                slide1Desc: "In the fragmented urban era, physical activity and home interior styling have been drastically separated. GlowHit revives health with touch-based gamification. It is both a sports-grade reactive matrix and an Apple Home masterpiece.",
                slide2Title: "2. Technical Core: Deadzone-Free Low Latency",
                slide2Desc: "Embedded ESP32 master chips. We precision-integrated three 120° equidistant micro-switches under a floating pentagonal touch plate, ensuring flawless, millisecond-accurate hit captures.",
                slide3Title: "3. Smart Home: Seamless Apple Home Setup",
                slide3Desc: "During idle times, GlowHit lives as elegant architectural wall lights. Control color values, brightness, and warmth directly through the iOS Home app or Siri, ensuring expensive equipment never gathers dust.",
                slide4Title: "4. Power Safety: Travel Compliance & Dual Power Rails",
                slide4Desc: "A 12-module setup draws around 42W. Fully compliant with IATA flight security (up to 74Wh batteries). Paired with exhibition-grade AC power distribution, and featuring an active current-limiting protection mechanism to ensure grid supply safety even without external power banks.",
                slide5Title: "5. Market Scaling & Fundraising Commitment",
                slide5Desc: "With an affordable entry model, we plan to release dedicated mobile apps syncing real-time fitness scores to a global DB, proudly bringing Taiwan's makers onto the Osaka world stage.",
                thItem: "Item", thBudget: "Budget (NTD)", thRemarks: "Remarks",
                tbItem1: "International Registration", tbRemarks1: "Team registration fees, administration, and public notary documentation.",
                tbItem2: "Solo Travel & Accommodation", tbRemarks2: "Round-trip flights to Osaka, Japanese hotel stay, and local transport.",
                tbItem3: "GlowHit R&D / Equipment", tbRemarks3: "ESP32 microprocessors, WS2812B LEDs, Li-ion batteries, and 3D housing prints.",
                tbItem4: "Marketing & Booth Assembly", tbRemarks4: "Brochures, high-quality showcase posters, video editing, and booth setup.",
                tbTotal: "Total Funding Ask", tbTotalRemarks: "The pivotal step to empower youth maker innovation into real products.",
                slideOf: "Slide", slideOfMax: "of 5"
            },
            jp: {
                navHome: "ホーム", navProduct: "製品構造", navSimulator: "シミュレーター", navScience: "運動科学", navAbout: "起業提案", navTry: "体験する",
                footerTitle: "GlowHit スマートモジュール式光点反応壁プロジェクト",
                footerCopyright: "© 2026 RoboRAVE 大阪世界選手権 起業家部門代表チーム. 無断複写・転載を禁じます。",
                footerLink1: "ハードウェア詳細", footerLink2: "學術文献", footerLink3: "大阪世界大会計画書",
                // Home Page
                heroTitle: "光速の反応、スマートな定義。",
                heroSub: "プロの敏捷性トレーニングとスマートホームの美学を融合させた、モジュール式インタラクティブ・スポーツウォール。",
                exploreBtn: "內部構造を解剖する",
                tryBtn: "オンライン体験を開始",
                highlightTitle: "テクノロジー、フィットネス、空間の完美な交差点",
                highlightSportTitle: "動態的な敏捷性トレーニング",
                highlightSportDesc: "低遅延の無線信号與超敏感なマイクロスイッチで、手眼協調とフィットネスに最適な運動環境を提供します。",
                highlightSportCTA: "運動体験を開始する",
                highlightHomeTitle: "静的なインテリアスマート雰囲気ライト",
                highlightHomeDesc: "トレーニングが終われば、空間を美しく彩る間接照明に変身。Apple HomeアプリやSiriを通じて、色温度やRGBを無段階で調整可能。",
                highlightHomeCTA: "Apple Homeカラーを調整",
                legoTitle: "レゴ(LEGO)互換の無限拡張性",
                legoDesc: "レゴと100%互換のベースプレート構造。予算や空間に応じて、ハニカム状、マトリクス状、あるいは非対称など自由自在に配置可能。",
                homekitTitle: "Apple Home スマートエコシステムと連携",
                homekitDesc: "待機時は空間を演出するインテリジェントな雰囲気間接照明に変身。Siriやホームアプリを通じて、色温度やRGBを無段階で調整可能。",
                espTitle: "ESP32 超低遅延コントローラー",
                espDesc: "Wi-Fi/Bluetooth対応チップ。3つの120°等分配置マイクロスイッチが衝撃を確実に感知し、ミリ秒単位の超高速フィードバックを実現。",
                modesTitle: "4つの没入型インタラクティブモード",
                modeSpeed: "光速反応 (Speed)",
                modeSpeedDesc: "ランダムに点灯するターゲットを叩き、ミリ秒単位の物理的な反射神経スピードを測定・記録します。",
                modeRhythm: "リズム打撃 (Rhythm)",
                modeRhythmDesc: "音楽と運動を融合。リズムに合わせてターゲットが点灯し、退屈なフィットネスを楽しい音ゲーに変えます。",
                modeColor: "認知選択 (Color Match)",
                modeColorDesc: "高壓下の意思決定力。指定の色だけを狙、不要な動作を制限する脳トレ。ADHDなどの認知改善に。",
                modeTimer: "タイムトライアル",
                modeTimerDesc: "制限時間内に打撃数の極限に挑み、結果はCloudDBを通じてグローバルリーダーボードへ即時同期されます。",
                
                // Product Page
                explodedTitle: "GlowHit ハードウェア分解と工業設計",
                explodedSub: "極限までシンプルに、打撃に強い構造と滑らかな配光設計を兼ね備えた、モジュール式発光デバイス。",
                svgPlate: "中心五角形押圧板",
                svgDiffuser: "乳白色導光カバー",
                svgSwitches: "3方向 120° スイッチ",
                svgMCU: "ESP32 + WS2812B 統合メインボード",
                svgBattery: "2000mAh 保護回路内蔵リチウム",
                svgLego: "LEGO レゴ対応底板",
                partPlate: "中心五角形押壓板",
                partPlateDesc: "人間工学に基づいた独自のセンタートリガー。どの角度から叩いても均一に荷重を伝達します。",
                partDiffuser: "乳白色導光カバー",
                partDiffuserDesc: "WS2812Bの発光を美しく拡散させ、目に優しく温かみのある鮮やかなグラデーション光を演出。",
                partSwitches: "3方向高感度スイッチ",
                partSwitchesDesc: "120°間隔で配置された3つの超精密マイクロスイッチ。死角ゼロの打撃センシングを実現。",
                partMCU: "ESP32 制御コア基板",
                partMCUDesc: "超高速Wi-Fi/BLEを搭載したメインコア。OTAワレスアップデートによる機能拡張をサポート。",
                partBattery: "2000mAh 安全保護リチウム電池",
                partBatteryDesc: "充放電保護回路内蔵。5V Type-C急速充電対応で、コードレスのスマート配置を可能に。",
                partLego: "LEGO対応工業風基板",
                partLegoDesc: "しっかり固定できる頑丈なレゴ互換底板。道具なしでクイック着脱・連結連結が可能。",
                layoutTitle: "空間適応性：思いのままの配列配置",
                layoutSub: "壁のサイズや好みに合わせて、いつでも配置を自由にレイアウト。ハニカム、対称格子、不規則アートに対応。",
                layoutHoneycomb: "ハニカム状の配置",
                layoutHoneycombDesc: "隣接するセルが多く、至近距離でのスピーディーな連続打撃やアジリティトレーニングに最適。",
                layoutMatrix: "対称的な格子（マトリクス）",
                layoutMatrixDesc: "標準的でバランスに優れたレイアウト。認知的な反応時間テストの最適なベンチマーク環境。",
                layoutRandom: "ランダムなDIY迷路",
                layoutRandomDesc: "不規則な壁や狭い廊下など、家中の限られたスペースに散りばめてユニークなトレーニングを楽しめます。",
                
                // Simulator Page
                simTitle: "GlowHit インタラクティブ調控シミュレーター",
                simDesc: "GlowHitの洗練された触覚フィードバックをブラウザ上で再現。お好みのモードに切り替えて、反応速度を体験してください。",
                tabSpeed: "光速反応 (Speed)",
                tabColor: "認知選択 (Inhibition)",
                tabHome: "Apple Home デコ",
                scoreLabel: "スコア",
                timeLabel: "残り時間",
                reactLabel: "平均反応",
                startBtnText: "テストを開始する",
                stopBtnText: "テストを停止する",
                homeTitle: "Apple Home 連携コントロール",
                homeHue: "色相 (Hue)",
                homeSat: "彩度 (Saturation)",
                homeBri: "輝度 (Brightness)",
                homeTemp: "模擬色温度 (Color Temp)",
                powerMonitor: "2000mAh 5V Type-C充電式バッテリー",


                alertEnd: "テストが終了しました！",
                alertScore: "最終得点：",
                alertAvgReact: "平均反応速度：",
                alertHits: "有効打撃回数：",
                ms: "ミリ秒",
                
                // Science PagepowerMonitor: "2000mAh 5V Type-C充電式バッテリー",

                powerDesc: "5V Type-C 2A充電式バッテリーまたは産業用電源で駆動します。以下は12種類の動作条件における動的負荷シミュレーションです。",
                currentLoad: "現在のネットワーク電流:",
                loadPercentLabel: "安全負荷容量（最大2000mA対応）",
                statusSafe: "安全動作基準（系統状態判定）",
                statusLimit: "系統保護（コールドスタート保護制限）",
                scienceTitle: "運動科学と認知神経科学的アプローチ",
                scienceIntro: "GlowHitのゲーミフィケーション運動は、単なる運動不足解消に留まらず、認知能力向上や転倒予防、注意力の強化をサポートします。",
                sci1Tag: "神経可塑性とアテンションフォーカス制御",
                sci1Title: "注意制御力とフロー状態 (Attentional Control & Flow)",
                sci1Desc: "Frontiers in Psychology (2025) に掲載された最新研究は、認知的かつ物理的なアジリティ負荷を伴うリアクショントレーニングが脳機能へ及ぼす影響を解明しました。このような視覚・物理刺激に素早く対応する運動は、大脳の「注意安定性 (Attentional Stability)」を大幅に強化します。運動中に体験する「フロー状態 (Flow Experience)」が、神経フォーカスの安定に貢献していることが示されています。",
                sci1Link: "Frontiers in Psychology (2025) 学術論文を読む",
                sci2Tag: "固有受容感覚と転倒予防医学",
                sci2Title: "選択的ステッピング反応時間（CSRT）の短縮",
                sci2Desc: "高齢者の転倒回避力は選択的ステッピング反応時間（CSRT）と密接に関連します。GlowHitは空間把握能力を高め、脳から筋肉への指令伝達遅延を最小化することで転倒リスクを低下させます。",
                sci2Link: "CSRT臨床転倒リスク測定法に関する文献を読む (PMC)",
                sci3Tag: "神経筋肉反応と視覚アジリティシステム",
                sci3Title: "認知-運動デュアルタスク協調 (PMC12921918)",
                sci3Desc: "PMC医学データバンク (PMC12921918) に登録された最新研究によると、目標ターゲットの視覚的な「認知」と、三方向の高速「衝撃擊打」を組み合わせた統合デュアルタスク訓練は、運動前神経遅延（Premotor time）を著しく改善し、手眼調和、動作敏捷性、および妨害ノイズに対する選択的空間注意集中力を優位に向上させます。",
                sci3Link: "PMC12921918 敏捷性と感覚運動統合に関する文献を読む",
                
                // Pitch Deck Page
                aboutTitle: "2026 大阪世界大会 起業挑戦部門提案",
                aboutBrief: "スマートホームインテリアと運動科学がクロスオーバーした本製品で、台湾創客スピリットの最高峰を世界へ示します！",
                aboutTeam: "提案チーム：RoboRAVE 台灣代表チーム | 代表：呉禹衡 (+886 919-618-029)",
                budgetTitle: "資金調達計画および予算配分 (NTD)",
                milestoneTitle: "プロジェクトのマイルストーン",
                milestone1: "2025/12 - 第1世代プロトタイプ完成。ESP32によるHomeSpanのHomeKit接続完了。",
                milestone2: "2026/04 - キャパシティブタッチの導入、LEGO筐体を高度最適化。",
                milestone3: "2026/08 - 大阪世界大会に出場し、12台構成 of リアルタイム展示壁デモによるピッチ＆プロモーションを実施。",
                slide1Title: "1. スマート・リアクション・ウォール：起業精神と製品像",
                slide1Desc: "忙しい現代生活では、健康トレーニングと家庭用デザインとの調和が取れていません。GlowHitはゲーミフィケーションを通じて日常に運動をもたらし、美しいインテリジェント照明にもなります。",
                slide2Title: "2. 技術優位性：ミリ秒単位の超高速フィードバック",
                slide2Desc: "物理的打撃への確実な衝撃感知をESP32と3組の120°微動開關で実行。デッドゾーンを完全に排除したミリ秒レベルのトレーニングをお届けします。",
                slide3Title: "3. Apple Homeスマート統合：トレーニング器具の常時使用",
                slide3Desc: "トレーニングが終わればお洒落なライトに変身。SiriやiOSホームアプリを通じて簡単にカラーパレットを調光。トレーニング器具がほこりをかぶることはありません。",
                slide4Title: "4. 安全性設計：航空安検に合格＆過電流制限アルゴリズム",
                slide4Desc: "12台で最大消費電力42W。航空安全基準に適合した仕様。展示ブースではACアダプターによる集中給電を行うため、過電流によるダウンとは完全に無縁です。",
                slide5Title: "5. グローバル展開と市場コミットメント",
                slide5Desc: "手頃なエントリーモデルとCloudDBによる世界ランキングを組み合わせて独自の運動SNSを構築。大阪世界大会から未来のヘルステック市場を牽引します。",
                thItem: "項目", thBudget: "予算 (NTD)", thRemarks: "詳細仕様",
                tbItem1: "国際大会登録費", tbRemarks1: "世界大会チーム登録費用、管理費用、公証書類規費。",
                tbItem2: "渡航費・宿泊費", tbRemarks2: "大阪格安航空券、展示期間中の宿泊ホテル、現地交通費用。",
                tbItem3: "GlowHit 研究開発機材", tbRemarks3: "ESP32チップ、WS2812B幻彩LED、保護リチウム電池、筐体の3Dプロトタイプ材料。",
                tbItem4: "広報・ブース施工費用", tbRemarks4: "大会用パンフレット、製品デモ動画制作、ブース装飾材料。",
                tbTotal: "目標資金総額", tbTotalRemarks: "ユース創客代表チームが世界へと羽ばたく最初の支援要請です。",
                slideOf: "スライド", slideOfMax: "/ 全5ページ"
            }
        };

        function buildZhCnTranslations(source) {
            const charMap = {
                '體':'体','體':'体','綠':'绿','錄':'录','顯':'显','讀':'读','閱':'阅','環':'环','響':'响','裝':'装',
                '經':'经','濟':'济','擴':'扩','變':'变','廣':'广','斷':'断','衛':'卫','衛':'卫','愛':'爱','灣':'湾',
                '緣':'缘','線':'线','錶':'表','濾':'滤','處':'处','積':'积','規':'规','實':'实','響':'响',
                '專':'专','應':'应','聲':'声','隨':'随','覽':'览','區':'区','鄉':'乡','臺':'台','網':'网','證':'证',
                '觸':'触','術':'术','審':'审','領':'领','雕':'雕','輸':'输','鋪':'铺','鋼':'钢','鎖':'锁',
                '體':'体','頁':'页','錄':'录','線':'线','網':'网','葉':'叶','覽':'览','棒':'棒','測':'测','項':'项',
                '煩':'烦','樹':'树','潤':'润','靈':'灵','勝':'胜','憑':'凭','靈':'灵','顧':'顾','楊':'杨',
                '續':'续','難':'难','驗':'验','顏':'颜','習':'习','憶':'忆','頻':'频','麗':'丽','順':'顺',
                '緩':'缓','靜':'静','錄':'录','齊':'齐','綜':'综','纖':'纤','線':'线','隨':'随','螢':'萤','觸':'触',
                '響':'响','覺':'觉','觀':'观','護':'护','點':'点','燈':'灯','緊':'紧','織':'织','繞':'绕','軟':'软',
                '輕':'轻','軌':'轨','輔':'辅','辦':'办','載':'载','轉':'转','輝':'辉','農':'农','遺':'遗','遠':'远',
                '醜':'丑','鎮':'镇','鐵':'铁','關':'关','陣':'阵','陸':'陆','隊':'队','願':'愿','顯':'显','頓':'顿',
                '顏':'颜','頤':'颐','頻':'频','颱':'台','驗':'验','錄':'录','鐘':'钟','離':'离','韌':'韧','響':'响',
                '須':'须','顧':'顾','顯':'显','馳':'驰','驟':'骤','驅':'驱','盡':'尽','續':'续','變':'变'
            };
            const replaceText = (text) => text.replace(/[ - -]|[ -]/g, (char) => {
                return charMap[char] || char;
            });
            const replaceAll = (value) => {
                if (typeof value !== 'string') return value;
                let result = '';
                for (const ch of value) {
                    result += charMap[ch] || ch;
                }
                return result;
            };
            const result = {};
            for (const key in source) {
                result[key] = replaceAll(source[key]);
            }
            return result;
        }

        translations['zh-TW'] = translations.zh;
        translations['zh-CN'] = buildZhCnTranslations(translations.zh);
        translations['ja'] = translations.jp;

        // Spanish (es)
        translations['es'] = {
            // Navbar & Footer
            navHome: "Inicio", navProduct: "Producto", navSimulator: "Simulador", navScience: "Ciencia", navAbout: "Pitch", navTry: "Probar ahora",
            footerTitle: "GlowHit — Muro modular inteligente", footerCopyright: "© 2026 RoboRAVE. Todos los derechos reservados.",
            footerLink1: "Detalles de hardware", footerLink2: "Artículos científicos", footerLink3: "Pitch de Osaka",

            // Home
            heroTitle: "Reacción a la velocidad de la luz.",
            heroSub: "Un elegante muro reactivo modular que combina entrenamiento y estética doméstica.",
            exploreBtn: "Explorar hardware", tryBtn: "Probar demo",
            highlightTitle: "Tecnología, fitness y estética",
            highlightSportTitle: "Modo de entrenamiento dinámico",
            highlightSportDesc: "Mediante algoritmos RF de baja latencia y micro‑sensores ultra‑ágiles, ofrecemos una experiencia inmersiva de impacto y coordinación visomotora. Ideal para fitness diario, saltos de agilidad y mejora de la atención.",
            highlightSportCTA: "Iniciar simulador deportivo",
            highlightHomeTitle: "Modo de iluminación ambiental",
            highlightHomeDesc: "Al terminar el entrenamiento, con un solo botón se transforma en una elegante luminaria de pared. Se integra con Apple Home y Siri para ajustar sin interrupciones el color RGB y la temperatura de color.",
            highlightHomeCTA: "Ajustar color en Apple Home",
            legoTitle: "Escalabilidad modular",
            legoDesc: "Diseñado para ensamblaje modular: panal, matriz o configuraciones personalizadas.",

            // Product
            homekitTitle: "Integración con Apple Home",
            homekitDesc: "En reposo se transforma en la luz ambiental de la habitación, con ajuste fluido de tono y temperatura.",
            espTitle: "ESP32 — Núcleo de control",
            espDesc: "Soporta Wi‑Fi y BLE con microinterruptores de alta sensibilidad que ofrecen respuesta en milisegundos.",
            explodedTitle: "Anatomía del hardware GlowHit",
            explodedSub: "Estructura industrial minimalista y resistente, creada para módulos de detección robustos y una estética luminosa versátil.",
            svgPlate: "Placa de activación pentagonal", svgDiffuser: "Cubierta difusora opalina", svgSwitches: "3 microinterruptores de 120°", svgMCU: "ESP32 + WS2812B integrada", svgBattery: "Batería 2000mAh", svgLego: "Base modular",
            partPlate: "Placa de presión pentagonal", partPlateDesc: "Panel ergonómico que distribuye uniformemente la presión del impacto hacia los microinterruptores.",
            partDiffuser: "Cubierta difusora", partDiffuserDesc: "Material guía de luz translúcido que convierte la iluminación WS2812B en un brillo cálido, saturado y sin deslumbrar.",
            partSwitches: "Micro-sensores", partSwitchesDesc: "Microinterruptores de alta sensibilidad que garantizan detección sin puntos muertos ni falsas activaciones.",
            partMCU: "Controlador ESP32", partMCUDesc: "Unidad central con Wi‑Fi/BLE, diseñada para manejo de alta velocidad y expansión modular.",
            partBattery: "Batería 2000mAh", partBatteryDesc: "Protección integrada y carga rápida 5V Type-C para autonomía prolongada.",
            partLego: "Base modular", partLegoDesc: "Base industrial sólida con puntos de acoplamiento modulares para ensamblaje rápido sin tornillos.",

            // Layout
            layoutTitle: "Adaptabilidad espacial: múltiples configuraciones",
            layoutSub: "Cambia la disposición para ajustarla a cualquier entorno o rutina.",
            layoutHoneycomb: "Panales (Honeycomb)", layoutHoneycombDesc: "Alta densidad para entrenamiento de agilidad cercano.",
            layoutMatrix: "Matriz (Matrix)", layoutMatrixDesc: "Simetría para pruebas estandarizadas de reacción.",
            layoutRandom: "Distribución aleatoria (DIY)", layoutRandomDesc: "Flexible para paredes irregulares y diseños creativos.",

            // Modes
            modesTitle: "Cuatro modos inmersivos",
            modeSpeed: "Reacción ultrarrápida",
            modeSpeedDesc: "Enciende aleatoriamente puntos objetivo para medir y registrar tu tiempo de reacción con precisión de milisegundos.",
            modeRhythm: "Ritmo",
            modeRhythmDesc: "Sincroniza los objetivos con la música, convirtiendo el entrenamiento en un juego rítmico.",
            modeColor: "Búsqueda de color",
            modeColorDesc: "Exige inhibición cognitiva: golpea solo los colores indicados para entrenar el control ejecutivo.",
            modeTimer: "Contrarreloj",
            modeTimerDesc: "Desafía el reloj para acumular puntos dentro de un tiempo límite; los resultados se sincronizan con el leaderboard global.",

            // Simulator
            simTitle: "GlowHit estación de control interactivo", simDesc: "Reproducimos completamente en la web la retroalimentación física de GlowHit: elige un modo y prueba tu reflejo.",
            tabSpeed: "Reacción a la velocidad de la luz (Speed)", tabColor: "Reconocimiento de color (Inhibition)", tabHome: "Modo Apple Home",
            scoreLabel: "PUNTOS", timeLabel: "TIEMPO", reactLabel: "REACCIÓN PROM.",
            startBtnText: "Iniciar prueba de reacción", stopBtnText: "Detener prueba",
            homeTitle: "Control Apple Home", homeHue: "Matiz", homeSat: "Saturación", homeBri: "Brillo", homeTemp: "Temperatura de color",
            powerMonitor: "Batería recargable 2000mAh 5V Type‑C", powerDesc: "Simula el suministro de energía de 12 módulos con batería 5V Type‑C 2A o alimentación industrial centralizada.",
            currentLoad: "Corriente total de la red:", loadPercentLabel: "Margen seguro de carga del transformador (máx 2000mA)",
            statusSafe: "Operación segura (sistema estable)", statusLimit: "Protección de red activa (límite de enfriamiento habilitado)",

            // Science
            scienceTitle: "Evidencia científica del entrenamiento de agilidad",
            scienceIntro: "El enfoque gamificado de GlowHit no es solo entrenamiento físico; es una intervención de coordinación neuromuscular que activa la neuroplasticidad, reduce el riesgo de caídas y mejora la atención.",
            sci1Tag: "Neuroplasticidad y carga cognitiva", sci1Title: "Control atencional y experiencia de flujo (Attentional Control & Flow)",
            sci1Desc: "Publicado en Frontiers in Psychology (2025), un estudio reciente analiza cómo el entrenamiento reactivo con alta demanda cognitiva y agilidad física afecta el cerebro. La participación regular en tareas que requieren escaneo visual rápido y golpes físicos mejora significativamente la 'estabilidad atencional' (Attentional Stability). El mecanismo clave es la inducción de estados de 'Flow', que ayudan al cerebro a mantener un foco neural estable incluso bajo alta excitación.", sci1Link: "Leer estudio (Frontiers, 2025)",
            sci2Tag: "Propiocepción y prevención de caídas en mayores", sci2Title: "Tiempo de reacción de paso selectivo (Choice Step Reaction Time, CSRT)",
            sci2Desc: "La capacidad para evitar caídas y fracturas en personas mayores se correlaciona fuertemente con el CSRT. GlowHit puede reducir el retraso nervioso desde la señal visual hasta la acción en las extremidades inferiores (Premotor Time), activando respuestas del campo visual periférico y mejorando los ajustes posturales rápidos.", sci2Link: "Leer investigación CSRT (Evaluating Fall Risk en PMC)",
            sci3Tag: "Reactividad neuromuscular y coordinación visuomotora", sci3Title: "Coordinación neuromotora en tareas duales (Dual-Task Neuromotor Reactivity)",
            sci3Desc: "Un estudio indexado en PMC (PMC12921918) demuestra que entrenamientos dual‑task que combinan búsqueda visual con ejecución física de impactos en múltiples direcciones mejoran significativamente los tiempos de reacción premotor, la integración visuomotora y el control espacial de la atención frente a distracciones, tanto en atletas jóvenes como en usuarios generales.", sci3Link: "Leer PMC12921918",

            // Pitch Deck
            aboutTitle: "Pitch Deck — RoboRAVE Osaka 2026", aboutBrief: "Representando a Taiwán con un producto que cruza smart‑home y ciencia del deporte.",
            aboutTeam: "Equipo: RoboRAVE Taiwan | Contacto: Yu‑Heng Wu (+886 919‑618‑029)",
            budgetTitle: "Presupuesto & Recursos", milestoneTitle: "Hitos",
            milestone1: "2025/12 - Prototipo gen‑1 completo.", milestone2: "2026/04 - Integración táctil y optimización modular.", milestone3: "2026/08 - Demo en Osaka con 12 módulos.",
            slide1Title: "1. Muro modular inteligente: Origen & visión", slide1Desc: "GlowHit revive el ejercicio mediante gamificación y funciona también como luz decorativa.",
            slide2Title: "2. Ventaja técnica: baja latencia", slide2Desc: "ESP32 con 3 micro‑interruptores para captura confiable y sin deadzone.",
            slide3Title: "3. Smart Home: integración Apple Home", slide3Desc: "Se convierte en iluminación elegante controlable por Siri.",
            slide4Title: "4. Seguridad: cumplimiento y protección de corriente", slide4Desc: "12 módulos consumen ~42W; cumple normas de viaje y cuenta con protección activa de corriente.",
            slide5Title: "5. Escalado comercial", slide5Desc: "Plan para app con diario de entrenamiento, gráficas y leaderboard global.",
            thItem: "Ítem", thBudget: "Presupuesto", thRemarks: "Observaciones",
            tbItem1: "Registro internacional", tbRemarks1: "Tarifas de inscripción y documentación.", tbItem2: "Viaje y alojamiento", tbRemarks2: "Vuelos, hotel y transporte.",
            tbItem3: "R&D y equipamiento", tbRemarks3: "ESP32, LEDs, baterías y prototipos.", tbItem4: "Marketing y montaje", tbRemarks4: "Folletos, posters y stand.", tbTotal: "Total solicitado", tbTotalRemarks: "Financiación para el desarrollo inicial.",
            slideOf: "Diapositiva", slideOfMax: "de 5",

            // Misc / Alerts
            alertEnd: "¡Prueba finalizada!", alertScore: "Tu puntaje total:", alertAvgReact: "Tiempo promedio:", alertHits: "Impactos válidos:", ms: "ms"
        };

        // French (fr)
        translations['fr'] = {
            navHome: "Accueil", navProduct: "Spécifications", navSimulator: "Simulateur", navScience: "Science", navAbout: "Pitch", navTry: "Essayer",
            footerTitle: "GlowHit — Mur modulaire intelligent", footerCopyright: "© 2026 RoboRAVE. Tous droits réservés.",
            footerLink1: "Détails du matériel", footerLink2: "Articles scientifiques", footerLink3: "Pitch Osaka",
            heroTitle: "Réaction à la vitesse de la lumière.", heroSub: "Un mur réactif modulaire élégant pour l'entraînement et l'esthétique.",
            exploreBtn: "Explorer le matériel", tryBtn: "Lancer la démo",
            highlightTitle: "Technologie, fitness et esthétique", highlightSportTitle: "Mode d'entraînement dynamique",
            highlightSportDesc: "Algorithmes basse latence et micro-capteurs pour une expérience d'agilité immersive.", highlightSportCTA: "Essayer le simulateur sportif",
            highlightHomeTitle: "Mode éclairage ambiant", highlightHomeDesc: "Se transforme en lumière ambiante compatible Apple Home.", highlightHomeCTA: "Ajuster couleur Home",
            homekitTitle: "Intégration Apple Home", homekitDesc: "En veille, il devient un éclairage d'ambiance.",
            simTitle: "Station de contrôle GlowHit", simDesc: "Testez GlowHit dans votre navigateur.",
            tabSpeed: "Vitesse (Speed)", tabColor: "Inhibition (Color)", tabHome: "Apple Home",
            scoreLabel: "SCORE", timeLabel: "RELIQUE", reactLabel: "RÉAC. MOY.",
            startBtnText: "Démarrer le test", stopBtnText: "Arrêter",
            homeHue: "Teinte", homeSat: "Saturation", homeBri: "Luminosité", homeTemp: "Température",
            powerMonitor: "Batterie 2000mAh 5V Type-C", powerDesc: "Simulation de charge dynamique pour 12 modules.",
            currentLoad: "Courant total du réseau:", loadPercentLabel: "Capacité sûre (max 2000mA)",
            statusSafe: "Fonctionnement sûr", statusLimit: "Protection réseau activée",
            alertEnd: "Test terminé !", alertScore: "Votre score :", alertAvgReact: "Temps moyen :", alertHits: "Coups valides :", ms: "ms"
        };

        // German (de)
        translations['de'] = {
            navHome: "Start", navProduct: "Produkt", navSimulator: "Simulator", navScience: "Wissenschaft", navAbout: "Pitch", navTry: "Jetzt testen",
            footerTitle: "GlowHit – Intelligente modulare Wand", footerCopyright: "© 2026 RoboRAVE. Alle Rechte vorbehalten.",
            footerLink1: "Hardware-Details", footerLink2: "Wissenschaftliche Artikel", footerLink3: "Osaka Pitch",
            heroTitle: "Reaktion mit Lichtgeschwindigkeit.", heroSub: "Eine elegante modulare Reaktionswand für Training und Wohnästhetik.",
            exploreBtn: "Hardware erkunden", tryBtn: "Demo starten",
            highlightTitle: "Technologie, Fitness & Ästhetik", highlightSportTitle: "Dynamischer Trainingsmodus",
            highlightSportDesc: "Latenzarme Algorithmen und Mikrosensoren für ein immersives Agilitätstraining.", highlightSportCTA: "Sport-Simulator testen",
            highlightHomeTitle: "Ambient-Beleuchtungsmodus", highlightHomeDesc: "Wird zur Ambient-Beleuchtung, kompatibel mit Apple Home.", highlightHomeCTA: "Apple Home Farbe einstellen",
            homekitTitle: "Apple Home Integration", homekitDesc: "Im Leerlauf als Ambiente-Licht nutzbar.",
            simTitle: "GlowHit Steuerzentrale", simDesc: "Erlebe GlowHit im Browser.",
            tabSpeed: "Geschwindigkeit (Speed)", tabColor: "Hemmung (Color)", tabHome: "Apple Home",
            scoreLabel: "PUNKTE", timeLabel: "ZEIT", reactLabel: "Ø REAK.",
            startBtnText: "Test starten", stopBtnText: "Stopp",
            homeHue: "Farbton", homeSat: "Sättigung", homeBri: "Helligkeit", homeTemp: "Farbtemperatur",
            powerMonitor: "2000mAh 5V Type-C Akku", powerDesc: "Dynamische Lastsimulation für 12 Module.",
            currentLoad: "Aktuelle Netzstromstärke:", loadPercentLabel: "Sichere Kapazität (max 2000mA)",
            statusSafe: "Betriebssicher", statusLimit: "Netzschutz aktiv",
            alertEnd: "Test abgeschlossen!", alertScore: "Ihre Gesamtpunktzahl:", alertAvgReact: "Durchschnittszeit:", alertHits: "Gültige Treffer:", ms: "ms"
        };

        // Portuguese (pt)
        translations['pt'] = {
            navHome: "Início", navProduct: "Especificações", navSimulator: "Simulador", navScience: "Ciência", navAbout: "Pitch", navTry: "Experimentar",
            footerTitle: "GlowHit — Parede modular inteligente", footerCopyright: "© 2026 RoboRAVE. Todos os direitos reservados.",
            footerLink1: "Detalhes do hardware", footerLink2: "Artigos científicos", footerLink3: "Pitch Osaka",
            heroTitle: "Reação à velocidade da luz.", heroSub: "Uma parede reativa modular e elegante para treino e estética.",
            exploreBtn: "Explorar hardware", tryBtn: "Iniciar demo",
            highlightTitle: "Tecnologia, fitness e estética", highlightSportTitle: "Modo de treino dinâmico",
            highlightSportDesc: "Algoritmos de baixa latência e micro-sensores para treino de agilidade imersivo.", highlightSportCTA: "Testar simulador esportivo",
            highlightHomeTitle: "Modo de iluminação ambiente", highlightHomeDesc: "Converte-se em iluminação ambiente compatível com Apple Home.", highlightHomeCTA: "Ajustar cor Home",
            homekitTitle: "Integração Apple Home", homekitDesc: "Em repouso atua como luz ambiental.",
            simTitle: "Estação de controlo GlowHit", simDesc: "Experimente GlowHit no seu navegador.",
            tabSpeed: "Velocidade (Speed)", tabColor: "Inibição (Color)", tabHome: "Apple Home",
            scoreLabel: "PONTUAÇÃO", timeLabel: "TEMPO", reactLabel: "REAÇÃO MÉD.",
            startBtnText: "Iniciar teste", stopBtnText: "Parar",
            homeHue: "Matiz", homeSat: "Saturação", homeBri: "Brilho", homeTemp: "Temperatura",
            powerMonitor: "Bateria 2000mAh 5V Type-C", powerDesc: "Simulação de carga dinâmica para 12 módulos.",
            currentLoad: "Corrente total da rede:", loadPercentLabel: "Capacidade segura (máx 2000mA)",
            statusSafe: "Funcionamento seguro", statusLimit: "Proteção de rede activada",
            alertEnd: "Teste concluído!", alertScore: "Sua pontuação:", alertAvgReact: "Tempo médio:", alertHits: "Acertos válidos:", ms: "ms"
        };

        // Korean (ko)
        translations['ko'] = {
            navHome: "홈", navProduct: "제품", navSimulator: "시뮬레이터", navScience: "과학", navAbout: "제품 소개", navTry: "지금 체험하기",
            footerTitle: "GlowHit — 스마트 모듈형 벽", footerCopyright: "© 2026 RoboRAVE. 모든 권리 보유.",
            footerLink1: "하드웨어 세부 정보", footerLink2: "과학 논문", footerLink3: "오사카 프레젠테이션",

            // Home
            heroTitle: "초고속 반응",
            heroSub: "트레이닝과 홈 인테리어를 결합한 세련된 모듈형 반응형 벽",
            exploreBtn: "하드웨어 살펴보기", tryBtn: "데모 체험하기",
            highlightTitle: "기술, 피트니스, 공간의 완벽한 교차점",
            highlightSportTitle: "동적 운동 훈련 모드",
            highlightSportDesc: "저지연 RF 알고리즘과 초고감도 마이크로 센서를 통해 타격과 시각-운동 협응을 극대화한 몰입형 반응벽을 구현합니다. 일상적인 피트니스, 민첩성 점프, 집중력 향상에 이상적입니다.",
            highlightSportCTA: "스포츠 시뮬레이터 바로가기",
            highlightHomeTitle: "주변 조명 모드",
            highlightHomeDesc: "운동이 끝나면 버튼 하나로 우아한 벽 조명으로 전환됩니다. Apple Home 및 Siri와 완전히 연동되어 RGB 색상과 색온도를 매끄럽게 조절할 수 있습니다.",
            highlightHomeCTA: "Apple Home 색상 조정",
            legoTitle: "모듈식 확장성",
            legoDesc: "벌집형, 매트릭스형 또는 사용자 지정 구성 등 모듈식 조립을 위해 설계되었습니다.",

            // Product
            homekitTitle: "Apple Home 통합",
            homekitDesc: "대기 상태에서 환경 조명으로 자동 전환되며, 부드러운 색감과 색온도 조절 기능을 제공합니다.",
            espTitle: "ESP32 — 제어 코어",
            espDesc: "Wi-Fi 및 BLE를 지원하며, 고감도 마이크로 스위치를 통해 밀리초 단위 반응을 제공합니다.",
            explodedTitle: "GlowHit 하드웨어 구조",
            explodedSub: "견고한 센싱 모듈과 다기능 조명 디자인을 위해 설계된 미니멀하고 견고한 산업 구조입니다.",
            svgPlate: "오각형 트리거 플레이트", svgDiffuser: "오팔 디퓨저", svgSwitches: "3 x 120° 마이크로 스위치", svgMCU: "통합 ESP32 + WS2812B", svgBattery: "2000mAh 배터리", svgLego: "모듈식 베이스",
            partPlate: "오각형 압력판",
            partPlateDesc: "충격을 고르게 분산시키는 인체공학적 센터 트리거 패널입니다.",
            partDiffuser: "디퓨저",
            partDiffuserDesc: "WS2812B의 빛을 부드럽고 풍부하며 눈부심 없는 광원으로 변환하는 반투명 광가이드 소재입니다.",
            partSwitches: "마이크로 센서",
            partSwitchesDesc: "데드 스팟과 오작동 없이 정확한 감지를 보장하는 고감도 마이크로 스위치입니다.",
            partMCU: "ESP32 컨트롤러",
            partMCUDesc: "고속 처리와 모듈식 확장을 지원하는 Wi-Fi/BLE 기반 중앙 제어 장치입니다.",
            partBattery: "2000mAh 배터리",
            partBatteryDesc: "내장 보호 회로와 5V Type-C 고속 충전을 지원하여 긴 사용 시간을 제공합니다.",
            partLego: "모듈식 베이스",
            partLegoDesc: "나사 없이 빠르게 결합할 수 있는 모듈식 도킹 포인트를 갖춘 견고한 산업용 베이스입니다.",

            // Layout
            layoutTitle: "공간 적응성: 다양한 구성",
            layoutSub: "어떤 환경이나 루틴에도 맞도록 레이아웃을 자유롭게 변경하세요.",
            layoutHoneycomb: "허니콤",
            layoutHoneycombDesc: "근거리 민첩성 훈련을 위한 고밀도 배열입니다.",
            layoutMatrix: "매트릭스",
            layoutMatrixDesc: "표준화된 반응 시간 테스트를 위한 대칭 구조입니다.",
            layoutRandom: "랜덤 레이아웃(DIY)",
            layoutRandomDesc: "불규칙한 벽과 창의적인 공간에 유연하게 적용할 수 있습니다.",

            // Modes
            modesTitle: "네 가지 몰입형 인터랙티브 모드",
            modeSpeed: "초고속 반응",
            modeSpeedDesc: "무작위로 점아진 목표를 타격하여 밀리초 단위 반응 속도를 측정하고 기록합니다.",
            modeRhythm: "리듬 타격",
            modeRhythmDesc: "음악에 맞춰 목표를 동기화하여 운동을 리듬 게임으로 변환합니다.",
            modeColor: "색상 인식",
            modeColorDesc: "지정된 색상만 타격하도록 인지 억제력을 훈련합니다.",
            modeTimer: "시간 도전",
            modeTimerDesc: "제한된 시간 내에 최대 점수를 획득하기 위해 도전하며, 결과는 글로벌 리더보드에 실시간 동기화됩니다.",

            // Simulator
            simTitle: "GlowHit 스마트 제어 및 인터랙티브 시뮬레이터",
            simDesc: "웹에서 GlowHit의 물리적 피드백을 완벽하게 재현했습니다! 두 가지 인터랙티브 모드를 선택하고 반응 신경을 테스트해보세요.",
            tabSpeed: "초고속 반응 (Speed)",
            tabColor: "적색/청색 인식 (Inhibition)",
            tabHome: "Apple Home 모드",
            scoreLabel: "점수",
            timeLabel: "남은 시간",
            reactLabel: "평균 반응",
            startBtnText: "반응 테스트 시작 (Start Test)",
            stopBtnText: "테스트 중지 (Stop)",
            homeTitle: "Apple Home 연동 제어",
            homeHue: "彩光색상 (Hue)",
            homeSat: "색상 포화도 (Saturation)",
            homeBri: "스마트 밝기 (Brightness)",
            homeTemp: "색온도 시뮬레이션 (Color Temp)",
            powerMonitor: "2000mAh 5V Type-C 충전 배터리",
            powerDesc: "안정적인 5V Type-C 2A 충전 배터리 또는 산업용 전원을 사용합니다. 아래는 12개 모듈 동작 시 동적 부하 시뮬레이션입니다.",
            currentLoad: "현재 네트워크 총 전류:",
            loadPercentLabel: "변압기 부하 안전 마진 (최대 2000mA 수용)",
            statusSafe: "안전 작동 범위 (전원 상태 안정)",
            statusLimit: "전원 보호 중 (냉각 방호 제한 활성)",
            alertEnd: "테스트 완료!",
            alertScore: "총 점수:",
            alertAvgReact: "평균 반응 시간:",
            alertHits: "명중 타격 횟수:",
            ms: "밀리초",

            // Science Page
            scienceTitle: "반응력 훈련의 건강 과학 실증",
            scienceIntro: "GlowHit의 '건강 게이미피케이션'은 단순한 체능 훈련이 아니라, 뇌 신경을 활성화하고 낙상을 방지하며 집중력을 향상시키는 신경근육 협응 방안입니다.",
            sci1Tag: "신경 가소성과 인지 부하 제어",
            sci1Title: "주의력 제어와 심리 몰입 경험 (Attentional Control & Flow)",
            sci1Desc: "Frontiers in Psychology (2025)에 발표된 최신 연구는 높은 인지 및 물리적 민첩 부하를 갖는 반응 훈련이 뇌에 미치는 영향을 다룹니다. 연구에 따르면 빠른 시각 스캔과 물리적 타격이 필요한 이러한 종류의 운동에 규칙적으로 참여하면 뇌의 '주의력 안정성(Attentional Stability)'을 크게 향상시킵니다. 핵심 메커니즘은 운동 중 유도되는 '심리 몰입 경험(Flow Experience)'으로, 뇌가 고도의 흥분 상태에서도 신경 신호의 안정적인 집중을 유지하게 합니다.",
            sci1Link: "Frontiers in Psychology (2025) 주의력 연구 원문 읽기",
            sci2Tag: "균형 감각 및 노년층 낙상 예방 의학",
            sci2Title: "선택적 보행 반응 시간 (Choice Step Reaction Time)",
            sci2Desc: "노인의 불균형 방지, 낙상 방지 및 골절 예방 능력은 '선택적 보행 반응 시간(CSRT)'과 높은 상관 관계가 있습니다. GlowHit 반응 벽은 뇌의 시각 신호에서 하지 움직임으로의 신경 지연(Premotor Time)을 크게 단축하고 주변 시야 반응 능력을 활성화합니다.",
            sci2Link: "CSRT 노년층 낙상 예방 임상 문헌 읽기 (Evaluating Fall Risk in PMC)",
            sci3Tag: "신경근육 반응 및 손-눈 협응 민첩성",
            sci3Title: "이중 작업 신경근육 반응성 (Dual-Task Neuromotor Reactivity)",
            sci3Desc: "PMC 의료 연구 데이터베이스(PMC12921918)에 발표된 핸드볼 등 스포츠 항목의 최신 실증 연구에 따르면, 고감도 광점 반응 시스템을 사용하여 '시각 탐색'과 '3방향 트리거 물리적 타격'을 결합한 이중 작업(Dual-task) 인지 훈련을 수행하면 청소년 선수 및 일반 사용자의 운동 반응 시간, 손-눈 운동 협응(Visuomotor integration), 그리고 외부 간섭에 대한 공간 주의력 제어를 크게 개선할 수 있습니다.",
            sci3Link: "PMC12921918 민첩성 및 감각-운동 통합 문헌 원문 읽기",

            // Pitch Deck Page
            aboutTitle: "2026 오사카 세계 대회 창업 도전 제안",
            aboutBrief: "우리는 대만을 대표하여 일본 오사카로 가서, '스마트 홈'과 '스포츠 과학'을 결합한 이 혁신적인 솔루션으로 글로벌 최고의 메이커상을 경쟁합니다!",
            aboutTeam: "제안 단위: RoboRAVE 창업팀 | 연락처: 우유형 (0919-618-029)",
            budgetTitle: "오사카 출전 및 장비 개발 자금 계획",
            milestoneTitle: "프로젝트 마일스톤 및 개발 계획",
            milestone1: "2025/12 - 1세대 물리 프로토타입 제작 완료, ESP32 및 HomeSpan 통신 프로토콜 아키텍처 구축.",
            milestone2: "2026/04 - 터치 센싱 통합 도입, LEGO 빠른 분리 구조 최적화 완료, 2세대 휴대용 제어 허브 출시.",
            milestone3: "2026/08 - 오사카 현장 피치 및 12개 구성 디스플레이 벽 실제 체험 운영.",
            slide1Title: "1. 스마트 모듈식 광점 반응 벽: 기원과 비전",
            slide1Desc: "도시 단편화 시대에 운동과 가정 미학이 심각한 단절을 겪습니다. GlowHit은 게이미피케이션된 터치 피드백으로 건강을 다시 깨웁니다. 벽면의 극한 반응 경쟁장이자 Apple Home 생태계의 따뜻한 홈 분위기 스마트 조명입니다.",
            slide2Title: "2. 기술 우위: 데드 스팟 없음, 초저 지연 시스템",
            slide2Desc: "고성능 ESP32 통신 칩 내장. 우리는 120° 등분 3조 고정밀 마이크로 스위치와 커스텀 오각형 플로팅 패널을 정밀하게 설계했습니다. 어느 모서리를 두드리든 밀리초 단위 완벽한 전송을 보장합니다.",
            slide3Title: "3. 스마트 홈: Apple Home 완벽 통합",
            slide3Desc: "운동하지 않을 때 GlowHit은 세련된 환경 조명으로 생활에 통합됩니다. 사용자는 iPhone '홈' 앱 또는 Siri를 통해 따뜻한 색온도와 RGB 색상 분위기를 매끄럽게 조절할 수 있습니다. 비싼 운동 기구가 더 이상 먼지를 쌓지 않고 매일 따뜻한 모서리를 밝힙니다.",
            slide4Title: "4. 안전 보호: 행사장 출국 및 전원 과부하 소프트웨어 보호",
            slide4Desc: "12개 모듈 전체 전력은 약 42W입니다. 출국 시 74Wh 항공사 보안 기준을 완전히 충족합니다. 행사장 전용 AC 변압기 분기기와 함께. 우리는 주동 전류 제한 보호 메커니즘을 개발했으며, 모바일 배터리를 사용하지 않는 경우에도 완벽한 전원 공급 안전을 보장합니다.",
            slide5Title: "5. 상업 확장 전망 및 모금 약속",
            slide5Desc: "초고 C/P 값 하드웨어 스트라이킹 단계를 핵심으로 합니다. 향후 운동 로그, 데이터 차트 및 글로벌 순위를 결합한 전용 앱 출시를 계획하고 있습니다. 오사카 세계 대회에서 완벽한 12개 벽을 전시하여 대만 메이커 청년을 빛낼 것입니다!",
            thItem: "항목 (Item)", thBudget: "예산 배분 (Budget NTD)", thRemarks: "상세 설명 (Remarks)",
            tbItem1: "국제 대회 등록료", tbRemarks1: "대회 팀 경기 등록, 행정 및 공증 수수료",
            tbItem2: "개인 오사카 출장 비용", tbRemarks2: "오사카 왕복 저가 항공권, 전시 기간 숙박 및 현지 교통 지원",
            tbItem3: "GlowHit 개발 및 장비 비용", tbRemarks3: "ESP32 칩, 리튬 배터리, 마이크로 센서 및 12개 구성 케이스 부품 프로토타입",
            tbItem4: "마케팅 및 현장 프로모션 비용", tbRemarks4: "대회 전용 팜플렛, A4 전단지, 포스터 및 부스 장식 재료 물품",
            tbTotal: "총 모금 예산 (Total Ask)", tbTotalRemarks: "대표팀의 꿈 실현 및 혁신 솔루션 제품화의 핵심 첫 단계",
            slideOf: "슬라이드", slideOfMax: "총 5 페이지"
        };

        // Arabic (ar)
        translations['ar'] = {
            navHome: "الرئيسية", navProduct: "مواصفات المنتج", navSimulator: "المحاكاة", navScience: "الأدلة العلمية", navAbout: "عرض المشروع", navTry: "جرب الآن",
            footerTitle: "GlowHit — جدار تفاعلي ذكي", footerCopyright: "© 2026 RoboRAVE. كل الحقوق محفوظة.",
            footerLink1: "تفاصيل الأجهزة", footerLink2: "أوراق علمية", footerLink3: "عرض أوساكا",
            heroTitle: "تفاعل بسرعة الضوء.", heroSub: "جدار تفاعلي أنيق ومودولي للتمارين والجمال المنزلي.",
            exploreBtn: "استكشف الأجهزة", tryBtn: "تشغيل العرض",
            highlightTitle: "تقنية، لياقة، وجمال", highlightSportTitle: "وضع التدريب الديناميكي",
            highlightSportDesc: "خوارزميات منخفضة الكمون وحساسات دقيقة لتجربة تدريب غامرة.", highlightSportCTA: "جرب المحاكاة الرياضية",
            highlightHomeTitle: "وضع الإضاءة المحيطة", highlightHomeDesc: "يتحول إلى إضاءة متوافقة مع Apple Home.", highlightHomeCTA: "ضبط لون Apple Home",
            homekitTitle: "تكامل Apple Home", homekitDesc: "يعمل كمصباح محيطي عند الخمول.",
            simTitle: "محطة تحكم GlowHit", simDesc: "اختبر GlowHit في متصفحك.",
            tabSpeed: "السرعة (Speed)", tabColor: "الكبح (Color)", tabHome: "Apple Home",
            scoreLabel: "النقاط", timeLabel: "الوقت المتبقي", reactLabel: "متوسط الاستجابة",
            startBtnText: "ابدأ الاختبار", stopBtnText: "إيقاف",
            homeHue: "درجة اللون", homeSat: "التشبع", homeBri: "السطوع", homeTemp: "درجة الحرارة اللونية",
            powerMonitor: "بطارية 2000mAh 5V Type-C", powerDesc: "محاكاة الحمولة الديناميكية لتشغيل 12 وحدة.",
            currentLoad: "التيار الكلي للشبكة:", loadPercentLabel: "سعة آمنة (بحد أقصى 2000mA)",
            statusSafe: "تشغيل آمن", statusLimit: "حماية الشبكة مفعّلة",
            alertEnd: "انتهى الاختبار!", alertScore: "مجموع نقاطك:", alertAvgReact: "متوسط زمن الاستجابة:", alertHits: "إجمالي الضربات الصالحة:", ms: "ملّ\u200cس"
        };

        let currentLang = 'zh-TW';
        let isMobileMenuOpen = false;

        // 檢查所有 translations 完整性的工具（在瀏覽器 Console 執行）
        function verifyTranslations() {
            const baseKeyLang = translations['zh-TW'] ? 'zh-TW' : (translations['zh'] ? 'zh' : Object.keys(translations)[0]);
            const base = translations[baseKeyLang] || {};
            const keys = Object.keys(base);
            const report = {};
            Object.keys(translations).forEach(lang => {
                const t = translations[lang] || {};
                const missing = keys.filter(k => !(k in t));
                const identicalToBase = keys.filter(k => (k in t) && t[k] === base[k]);
                const identicalToEn = (translations['en']) ? keys.filter(k => (k in t) && t[k] === translations['en'][k]) : [];
                report[lang] = {
                    總字串數: Object.keys(t).length,
                    相對於_繁體缺少數: missing.length,
                    相對於_繁體缺少範例: missing.slice(0,10),
                    與繁體相同數: identicalToBase.length,
                    與繁體相同範例: identicalToBase.slice(0,10),
                    與英文相同數: identicalToEn.length,
                    與英文相同範例: identicalToEn.slice(0,10)
                };
            });
            console.group('Translations 驗證報告 (以繁體為基準)');
            console.log('基準語言:', baseKeyLang, '基準字串數:', keys.length);
            Object.keys(report).forEach(lang => {
                const r = report[lang];
                console.group(`語系: ${lang}`);
                console.log('總字串數:', r.總字串數);
                console.log('相對於繁體缺少數:', r.相對於_繁體缺少數);
                if (r.相對於_繁體缺少數) console.log('缺少範例:', r.相對於_繁體缺少範例);
                console.log('與繁體相同數:', r.與繁體相同數);
                if (r.與繁體相同數) console.log('與繁體相同範例:', r.與繁體相同範例);
                console.log('與英文相同數:', r.與英文相同數);
                if (r.與英文相同數) console.log('與英文相同範例:', r.與英文相同範例);
                console.groupEnd();
            });
            console.groupEnd();
            return report;
        }

        // 自動以英文為來源嘗試填補缺少的西班牙文翻譯（最佳化常見詞彙）
        function fillMissingSpanish() {
            if (!translations['es']) translations['es'] = {};
            const baseKeyLang = translations['zh-TW'] ? 'zh-TW' : (translations['zh'] ? 'zh' : Object.keys(translations)[0]);
            const base = translations[baseKeyLang] || {};
            const en = translations['en'] || {};
            const es = translations['es'];
            const filled = [];

            const dict = {
                'Home':'Inicio','Product':'Producto','Simulator':'Simulador','Science':'Ciencia','Pitch':'Pitch','Try':'Probar',
                'Explore':'Explorar','Launch':'Lanzar','Demo':'demo','Speed':'Velocidad','Color':'Color','Home':'Inicio',
                'Start':'Iniciar','Stop':'Detener','Score':'Puntaje','Remaining':'Tiempo restante','Average':'Promedio','ms':'ms',
                'Brightness':'Brillo','Saturation':'Saturación','Hue':'Tono','Temperature':'Temperatura','Battery':'Batería',
                'Safe':'Seguro','Protection':'Protección','Test':'Prueba','Simulator':'Simulador','Control':'Control',
                'Light':'Luz','Ambient':'Ambiental','Integration':'Integración','Integration with Apple Home':'Integración con Apple Home',
                'ESP32':'ESP32','Module':'Módulo','Modules':'Módulos','Layout':'Disposición','Matrix':'Matriz','Honeycomb':'Panales'
            };

            const translateEnToEs = (text) => {
                if (!text || typeof text !== 'string') return text;
                // quick replacements for parenthesized parts
                text = text.replace(/\(Speed\)/gi, '(Velocidad)');
                text = text.replace(/\(Color\)/gi, '(Color)');
                // token replacement
                Object.keys(dict).forEach(k => {
                    const v = dict[k];
                    const re = new RegExp('\\b' + k + '\\b', 'g');
                    text = text.replace(re, v);
                });
                // small phrase adjustments
                text = text.replace(/Powered by/gi, 'Alimentado por');
                text = text.replace(/Experience/gi, 'Experimente');
                text = text.replace(/Interactive Control Station/gi, 'Estación de control interactiva');
                return text;
            };

            Object.keys(base).forEach(k => {
                if (!(k in es) || !es[k]) {
                    let candidate = en[k] || base[k] || '';
                    let translated = translateEnToEs(candidate);
                    es[k] = translated;
                    filled.push({key: k, value: translated});
                }
            });

            console.group('Auto-fill Spanish');
            console.log('已填補項目數:', filled.length);
            console.table(filled.slice(0, 100));
            console.groupEnd();
            return filled;
        }

        // 行動端漢堡選單切換開關
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            const icon = document.getElementById('menuIcon');
            isMobileMenuOpen = !isMobileMenuOpen;
            
            if (isMobileMenuOpen) {
                menu.classList.remove('hidden');
                setTimeout(() => {
                    menu.classList.remove('-translate-y-8', 'opacity-0');
                    menu.classList.add('translate-y-0', 'opacity-100');
                }, 10);
                icon.setAttribute('data-lucide', 'x');
            } else {
                menu.classList.remove('translate-y-0', 'opacity-100');
                menu.classList.add('-translate-y-8', 'opacity-0');
                setTimeout(() => {
                    if (!isMobileMenuOpen) {
                        menu.classList.add('hidden');
                    }
                }, 300);
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        }

        // Custom High-Quality Synthetic Sounds
        let audioCtx = null;
        function playSound(type) {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            const now = audioCtx.currentTime;
            
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);

            if (type === 'success') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(523.25, now); // C5
                osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.15); // C6
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
            } else if (type === 'hit') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(880, now); // A5
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
                osc.start(now);
                osc.stop(now + 0.1);
            } else if (type === 'fail') {
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(150, now);
                osc.frequency.linearRampToValueAtTime(80, now + 0.25);
                gain.gain.setValueAtTime(0.2, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
            }
        }

        // Navigation Handler with visual active indicator
        function navigate(page) {
            window.scrollTo({ top: 0, behavior: 'instant' });
            
            // Set desktop nav active classes
            document.querySelectorAll('.nav-link').forEach(el => {
                el.classList.remove('text-black', 'font-semibold');
                el.classList.add('text-gray-500');
            });
            const activeNav = document.getElementById(`nav-${page}`);
            if (activeNav) {
                activeNav.classList.remove('text-gray-500');
                activeNav.classList.add('text-black', 'font-semibold');
            }

            // Set mobile drawer active classes
            document.querySelectorAll('.mob-nav-link').forEach(el => {
                el.classList.remove('text-black', 'font-semibold');
                el.classList.add('text-gray-500');
            });
            const activeMobNav = document.getElementById(`mob-nav-${page}`);
            if (activeMobNav) {
                activeMobNav.classList.remove('text-gray-500');
                activeMobNav.classList.add('text-black', 'font-semibold');
            }

            const app = document.getElementById('app');
            const t = translations[currentLang];

            // Global Navbar Dynamic I18N Text Update
            document.getElementById('nav-home').textContent = t.navHome;
            document.getElementById('nav-product').textContent = t.navProduct;
            document.getElementById('nav-simulator').textContent = t.navSimulator;
            document.getElementById('nav-science').textContent = t.navScience;
            document.getElementById('nav-about').textContent = t.navAbout;
            document.getElementById('globalCtaBtn').textContent = t.navTry;

            // Global Mobile Navbar Dynamic I18N Text Update
            document.getElementById('mob-nav-home').textContent = t.navHome;
            document.getElementById('mob-nav-product').textContent = t.navProduct;
            document.getElementById('mob-nav-simulator').textContent = t.navSimulator;
            document.getElementById('mob-nav-science').textContent = t.navScience;
            document.getElementById('mob-nav-about').textContent = t.navAbout;

            // Global Footer Dynamic I18N Text Update
            document.getElementById('footerTitle').textContent = t.footerTitle;
            document.getElementById('footerCopyright').textContent = t.footerCopyright;
            document.getElementById('footerLink1').textContent = t.footerLink1;
            document.getElementById('footerLink2').textContent = t.footerLink2;
            document.getElementById('footerLink3').textContent = t.footerLink3;

            switch(page) {
                case 'home':
                    renderHome(app, t);
                    break;
                case 'product':
                    renderProduct(app, t);
                    break;
                case 'simulator':
                    renderSimulator(app, t);
                    break;
                case 'science':
                    renderScience(app, t);
                    break;
                case 'about':
                    renderAbout(app, t);
                    break;
                default:
                    renderHome(app, t);
            }
            lucide.createIcons();
        }

        function changeLanguage() {
            currentLang = document.getElementById('langSelect').value;
            // Detect active page based on currently highlighted nav
            let activePage = 'home';
            document.querySelectorAll('.nav-link').forEach(el => {
                if (el.classList.contains('text-black')) {
                    activePage = el.id.replace('nav-', '');
                }
            });
            navigate(activePage);
        }

        // ================= PAGE RENDERING SCHEMES =================

        // 1. HOME PAGE
        function renderHome(app, t) {
            app.innerHTML = `
                <!-- Hero Section -->
                <section class="max-w-6xl mx-auto px-6 text-center pt-12 md:pt-20">
                    <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-black transition-all duration-700">
                        ${t.heroTitle}
                    </h1>
                    <p class="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        ${t.heroSub}
                    </p>
                    <div class="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <button onclick="navigate('simulator')" class="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium apple-btn-primary shadow-lg flex items-center justify-center space-x-2">
                            <span>${t.tryBtn}</span>
                            <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </button>
                        <button onclick="navigate('product')" class="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium apple-btn-secondary flex items-center justify-center">
                            ${t.exploreBtn}
                        </button>
                    </div>

                    <!-- Hero Visual Render (Animate Octagon Plate) -->
                    <div class="mt-16 relative flex justify-center items-center">
                        <div class="w-72 h-72 md:w-80 md:h-80 bg-gray-950 rounded-[4rem] octagon flex items-center justify-center shadow-2xl relative transition-all duration-500 hover:scale-105" id="heroPlate">
                            <!-- WS2812 Halo simulated ring -->
                            <div class="absolute inset-2 octagon border-4 border-dashed border-cyan-400 opacity-60 animate-spin" style="animation-duration: 25s"></div>
                            <div class="absolute inset-4 octagon border-4 border-cyan-500/80 blur-sm"></div>
                            
                            <!-- Five-axis floating sensor button -->
                            <div class="w-40 h-40 bg-gray-100 rounded-[2rem] pentagon flex items-center justify-center shadow-lg cursor-pointer transition-transform duration-100 active:scale-95 z-10" onclick="triggerHeroPress()">
                                <i data-lucide="zap" class="w-12 h-12 text-cyan-500 animate-pulse"></i>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Dual Mode Highlight Section -->
                <section class="max-w-6xl mx-auto px-6 mt-32">
                    <h2 class="text-3xl md:text-4xl font-bold text-center tracking-tight mb-16">${t.highlightTitle}</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        <div class="apple-card p-8 flex flex-col justify-between">
                            <div>
                                <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                                    <i data-lucide="activity" class="w-6 h-6 text-orange-500"></i>
                                </div>
                                <h3 class="text-2xl font-bold mb-3">${t.highlightSportTitle}</h3>
                                <p class="text-gray-500 leading-relaxed">${t.highlightSportDesc}</p>
                            </div>
                            <div class="mt-8 flex items-center space-x-2 text-orange-500 font-semibold text-sm cursor-pointer hover:underline" onclick="navigate('simulator')">
                                <span>${t.highlightSportCTA}</span>
                                <i data-lucide="chevron-right" class="w-4 h-4"></i>
                            </div>
                        </div>

                        <div class="apple-card p-8 flex flex-col justify-between">
                            <div>
                                <div class="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
                                    <i data-lucide="home" class="w-6 h-6 text-indigo-500"></i>
                                </div>
                                <h3 class="text-2xl font-bold mb-3">${t.highlightHomeTitle}</h3>
                                <p class="text-gray-500 leading-relaxed">${t.highlightHomeDesc}</p>
                            </div>
                            <div class="mt-8 flex items-center space-x-2 text-indigo-500 font-semibold text-sm cursor-pointer hover:underline" onclick="setHomeKitSimTab()">
                                <span>${t.highlightHomeCTA}</span>
                                <i data-lucide="chevron-right" class="w-4 h-4"></i>
                            </div>
                        </div>

                    </div>
                </section>

                <!-- Bento Grid Details -->
                <section class="max-w-6xl mx-auto px-6 mt-32">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="apple-card p-8 md:col-span-1">
                            <i data-lucide="blocks" class="w-8 h-8 text-blue-500 mb-4"></i>
                            <h4 class="text-lg font-bold mb-2">${t.legoTitle}</h4>
                            <p class="text-sm text-gray-500 leading-relaxed">${t.legoDesc}</p>
                        </div>
                        <div class="apple-card p-8 md:col-span-1">
                            <i data-lucide="smartphone" class="w-8 h-8 text-green-500 mb-4"></i>
                            <h4 class="text-lg font-bold mb-2">${t.homekitTitle}</h4>
                            <p class="text-sm text-gray-500 leading-relaxed">${t.homekitDesc}</p>
                        </div>
                        <div class="apple-card p-8 md:col-span-1">
                            <i data-lucide="cpu" class="w-8 h-8 text-purple-500 mb-4"></i>
                            <h4 class="text-lg font-bold mb-2">${t.espTitle}</h4>
                            <p class="text-sm text-gray-500 leading-relaxed">${t.espDesc}</p>
                        </div>
                    </div>
                </section>

                <!-- Four Modes Showroom -->
                <section class="max-w-6xl mx-auto px-6 mt-32">
                    <h2 class="text-3xl md:text-4xl font-bold text-center tracking-tight mb-16">${t.modesTitle}</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        <div class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
                            <div>
                                <div class="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center mb-4 text-cyan-500 font-bold">1</div>
                                <h5 class="font-bold text-lg mb-2">${t.modeSpeed}</h5>
                                <p class="text-sm text-gray-500 leading-relaxed">${t.modeSpeedDesc}</p>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
                            <div>
                                <div class="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center mb-4 text-pink-500 font-bold">2</div>
                                <h5 class="font-bold text-lg mb-2">${t.modeRhythm}</h5>
                                <p class="text-sm text-gray-500 leading-relaxed">${t.modeRhythmDesc}</p>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
                            <div>
                                <div class="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-4 text-indigo-500 font-bold">3</div>
                                <h5 class="font-bold text-lg mb-2">${t.modeColor}</h5>
                                <p class="text-sm text-gray-500 leading-relaxed">${t.modeColorDesc}</p>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
                            <div>
                                <div class="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mb-4 text-emerald-500 font-bold">4</div>
                                <h5 class="font-bold text-lg mb-2">${t.modeTimer}</h5>
                                <p class="text-sm text-gray-500 leading-relaxed">${t.modeTimerDesc}</p>
                            </div>
                        </div>

                    </div>
                </section>
            `;
        }

        function setHomeKitSimTab() {
            navigate('simulator');
            setTimeout(() => {
                setSimMode('home');
            }, 50);
        }

        // 2. PRODUCT SPEC & ANATOMY PAGE
        function renderProduct(app, t) {
            app.innerHTML = `
                <!-- Exploded Hardware Anatomy Section -->
                <section class="max-w-6xl mx-auto px-6 pt-12">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl md:text-5xl font-bold tracking-tight">${t.explodedTitle}</h2>
                        <p class="text-gray-500 mt-4 max-w-2xl mx-auto">${t.explodedSub}</p>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        <!-- High Quality SVG Exploded View Vector Illustration -->
                        <div class="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex justify-center">
                            <svg class="w-full max-w-md h-auto" viewBox="0 0 400 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <!-- Guide connection lines -->
                                <line x1="200" y1="50" x2="200" y2="480" stroke="#cbd5e1" stroke-dasharray="4 4" stroke-width="1.5"/>
                                
                                <!-- 1. Five-axis plate -->
                                <g transform="translate(0, 0)">
                                    <path d="M200 40 L260 70 L240 120 L160 120 L140 70 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
                                    <text x="200" y="90" font-family="system-ui" font-weight="600" font-size="11" fill="#475569" text-anchor="middle">${t.svgPlate}</text>
                                </g>

                                <!-- 2. Translucent cover -->
                                <g transform="translate(0, 90)">
                                    <path d="M200 60 L280 80 L280 110 L200 130 L120 110 L120 80 Z" fill="rgba(255,255,255,0.7)" stroke="#64748b" stroke-width="1.5"/>
                                    <text x="200" y="100" font-family="system-ui" font-weight="600" font-size="11" fill="#475569" text-anchor="middle">${t.svgDiffuser}</text>
                                </g>

                                <!-- 3. Micro Switches -->
                                <g transform="translate(0, 180)">
                                    <rect x="150" y="50" width="16" height="10" rx="2" fill="#0f172a"/>
                                    <rect x="234" y="50" width="16" height="10" rx="2" fill="#0f172a"/>
                                    <rect x="192" y="80" width="16" height="10" rx="2" fill="#0f172a"/>
                                    <text x="200" y="110" font-family="system-ui" font-weight="600" font-size="11" fill="#0284c7" text-anchor="middle">${t.svgSwitches}</text>
                                </g>

                                <!-- 4. ESP32 + LED PCB -->
                                <g transform="translate(0, 270)">
                                    <path d="M150 40 L250 40 L280 80 L250 120 L150 120 L120 80 Z" fill="#0f172a" stroke="#334155" stroke-width="2"/>
                                    <rect x="185" y="65" width="30" height="30" rx="3" fill="#334155" stroke="#475569" stroke-width="2"/>
                                    <circle cx="200" cy="80" r="12" fill="none" stroke="#22d3ee" stroke-width="2" stroke-dasharray="3 3"/>
                                    <text x="200" y="135" font-family="system-ui" font-weight="600" font-size="11" fill="#38bdf8" text-anchor="middle">${t.svgMCU}</text>
                                </g>

                                <!-- 5. Li-ion Battery -->
                                <g transform="translate(0, 390)">
                                    <rect x="150" y="10" width="100" height="40" rx="4" fill="#64748b" stroke="#475569" stroke-width="1.5"/>
                                    <rect x="160" y="15" width="80" height="30" rx="2" fill="#e2e8f0"/>
                                    <text x="200" y="34" font-family="system-ui" font-weight="700" font-size="11" fill="#475569" text-anchor="middle">${t.svgBattery}</text>
                                </g>

                                <!-- 6. Base Plate -->
                                <g transform="translate(0, 440)">
                                    <path d="M130 50 L270 50 L300 90 L270 130 L130 130 L100 90 Z" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
                                    <text x="200" y="95" font-family="system-ui" font-weight="600" font-size="11" fill="#94a3b8" text-anchor="middle">${t.svgLego}</text>
                                </g>
                            </svg>
                        </div>

                        <!-- Info details accordion style -->
                        <div class="space-y-6">
                            
                            <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4">
                                <div class="p-3 bg-blue-50 text-blue-500 rounded-xl">
                                    <i data-lucide="shield"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg">${t.partPlate}</h4>
                                    <p class="text-sm text-gray-500 mt-1 leading-relaxed">${t.partPlateDesc}</p>
                                </div>
                            </div>

                            <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4">
                                <div class="p-3 bg-amber-50 text-amber-500 rounded-xl">
                                    <i data-lucide="sun"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg">${t.partDiffuser}</h4>
                                    <p class="text-sm text-gray-500 mt-1 leading-relaxed">${t.partDiffuserDesc}</p>
                                </div>
                            </div>

                            <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4">
                                <div class="p-3 bg-red-50 text-red-500 rounded-xl">
                                    <i data-lucide="target"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg">${t.partSwitches}</h4>
                                    <p class="text-sm text-gray-500 mt-1 leading-relaxed">${t.partSwitchesDesc}</p>
                                </div>
                            </div>

                            <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4">
                                <div class="p-3 bg-emerald-50 text-emerald-500 rounded-xl">
                                    <i data-lucide="cpu"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg">${t.partMCU}</h4>
                                    <p class="text-sm text-gray-500 mt-1 leading-relaxed">${t.partMCUDesc}</p>
                                </div>
                            </div>

                            <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4">
                                <div class="p-3 bg-purple-50 text-purple-500 rounded-xl">
                                    <i data-lucide="battery-charging"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg">${t.partBattery}</h4>
                                    <p class="text-sm text-gray-500 mt-1 leading-relaxed">${t.partBatteryDesc}</p>
                                </div>
                            </div>

                            <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4">
                                <div class="p-3 bg-blue-50 text-blue-500 rounded-xl">
                                    <i data-lucide="blocks"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg">${t.partLego}</h4>
                                    <p class="text-sm text-gray-500 mt-1 leading-relaxed">${t.partLegoDesc}</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <!-- Configuration arrangements layout -->
                <section class="max-w-6xl mx-auto px-6 mt-32">
                    <div class="text-center mb-12">
                        <h3 class="text-2xl md:text-3xl font-bold">${t.layoutTitle}</h3>
                        <p class="text-gray-500 mt-2">${t.layoutSub}</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="apple-card p-6 text-center">
                            <h5 class="font-bold text-lg mb-3">${t.layoutHoneycomb}</h5>
                            <div class="w-full h-40 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                                <div class="grid grid-cols-3 gap-2 w-32">
                                    <div class="w-8 h-8 bg-orange-400 octagon mx-auto"></div>
                                    <div class="w-8 h-8 bg-orange-400 octagon mx-auto"></div>
                                    <div class="w-8 h-8 bg-orange-400 octagon mx-auto"></div>
                                    <div class="w-8 h-8 bg-orange-400 octagon mx-auto"></div>
                                    <div class="w-8 h-8 bg-orange-400 octagon mx-auto"></div>
                                    <div class="w-8 h-8 bg-orange-400 octagon mx-auto"></div>
                                </div>
                            </div>
                            <p class="text-xs text-gray-400">${t.layoutHoneycombDesc}</p>
                        </div>

                        <div class="apple-card p-6 text-center">
                            <h5 class="font-bold text-lg mb-3">${t.layoutMatrix}</h5>
                            <div class="w-full h-40 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                                <div class="grid grid-cols-3 gap-3 w-32">
                                    <div class="w-8 h-8 bg-blue-500 rounded-lg"></div>
                                    <div class="w-8 h-8 bg-blue-500 rounded-lg"></div>
                                    <div class="w-8 h-8 bg-blue-500 rounded-lg"></div>
                                    <div class="w-8 h-8 bg-blue-500 rounded-lg"></div>
                                    <div class="w-8 h-8 bg-blue-500 rounded-lg"></div>
                                    <div class="w-8 h-8 bg-blue-500 rounded-lg"></div>
                                </div>
                            </div>
                            <p class="text-xs text-gray-400">${t.layoutMatrixDesc}</p>
                        </div>

                        <div class="apple-card p-6 text-center">
                            <h5 class="font-bold text-lg mb-3">${t.layoutRandom}</h5>
                            <div class="w-full h-40 bg-gray-50 rounded-xl flex items-center justify-center mb-4 relative">
                                <div class="absolute top-4 left-6 w-8 h-8 bg-green-500 octagon"></div>
                                <div class="absolute bottom-6 right-8 w-8 h-8 bg-green-500 octagon"></div>
                                <div class="absolute top-12 right-12 w-8 h-8 bg-green-500 octagon"></div>
                                <div class="absolute bottom-4 left-10 w-8 h-8 bg-green-500 octagon"></div>
                            </div>
                            <p class="text-xs text-gray-400">${t.layoutRandomDesc}</p>
                        </div>
                    </div>
                </section>
            `;
        }

        // 3. INTERACTIVE SIMULATOR
        let gameInterval = null;
        let gameScore = 0;
        let gameTimeLeft = 30;
        let targetId = null;
        let targetColor = 'blue';
        let simMode = 'speed'; // 'speed', 'color', 'home'
        let speedTimer = 0;
        let reactionSum = 0;
        let totalHits = 0;

        function renderSimulator(app, t) {
            app.innerHTML = `
                <section class="max-w-4xl mx-auto px-6 pt-12">
                    <div class="text-center mb-10">
                        <h2 class="text-3xl md:text-5xl font-bold tracking-tight">${t.simTitle}</h2>
                        <p class="text-gray-500 mt-3">${t.simDesc}</p>
                    </div>

                    <!-- Simulator Control selector tabs -->
                    <div class="flex justify-center bg-gray-200 p-1.5 rounded-full mb-12 max-w-lg mx-auto">
                        <button onclick="setSimMode('speed')" id="tab-speed" class="flex-1 py-2 text-xs font-semibold rounded-full bg-white text-black shadow-sm transition-all">
                            ${t.tabSpeed}
                        </button>
                        <button onclick="setSimMode('color')" id="tab-color" class="flex-1 py-2 text-xs font-semibold rounded-full text-gray-500 transition-all">
                            ${t.tabColor}
                        </button>
                        <button onclick="setSimMode('home')" id="tab-home" class="flex-1 py-2 text-xs font-semibold rounded-full text-gray-500 transition-all">
                            ${t.tabHome}
                        </button>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        <!-- Left Panel: The Simulated Hardware Module/Wall -->
                        <div class="lg:col-span-7 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center">
                            
                            <!-- Main Simulated Multi-module Grid Wall -->
                            <div id="simulatedWall" class="grid grid-cols-3 gap-6 p-4 bg-gray-50 rounded-3xl border border-gray-200">
                                <!-- Generated Dynamically -->
                            </div>

                            <!-- Dashboard stats -->
                            <div id="gameDashboard" class="mt-8 w-full border-t border-gray-100 pt-6 grid grid-cols-3 gap-2 text-center text-xs">
                                <div>
                                    <p class="text-gray-400 font-medium" id="lblScore">${t.scoreLabel}</p>
                                    <p id="scoreVal" class="text-2xl font-bold text-black mt-1">0</p>
                                </div>
                                <div>
                                    <p class="text-gray-400 font-medium" id="lblTime">${t.timeLabel}</p>
                                    <p id="timeVal" class="text-2xl font-bold text-black mt-1">30s</p>
                                </div>
                                <div>
                                    <p class="text-gray-400 font-medium" id="lblReact">${t.reactLabel}</p>
                                    <p id="reactVal" class="text-2xl font-bold text-black mt-1">0ms</p>
                                </div>
                            </div>

                            <button id="startGameBtn" onclick="toggleGame()" class="mt-8 w-full py-3.5 rounded-full font-medium apple-btn-primary shadow-md">
                                ${t.startBtnText}
                            </button>
                        </div>

                        <!-- Right Panel: Smart Controller Panel / Apple Home Settings & Power Grid -->
                        <div class="lg:col-span-5 space-y-6">
                            
                            <!-- Apple Home controller panel -->
                            <div id="homeControlPanel" class="apple-card p-6 hidden">
                                <h4 class="font-bold text-lg mb-4 flex items-center space-x-2">
                                    <i data-lucide="home" class="w-5 h-5 text-indigo-500"></i>
                                    <span>${t.homeTitle}</span>
                                </h4>
                                <div class="space-y-6 text-sm">
                                    <!-- Hue Slider -->
                                    <div>
                                        <div class="flex justify-between mb-2">
                                            <span class="text-gray-500 font-medium">${t.homeHue}</span>
                                            <span id="hueText" class="font-bold">180°</span>
                                        </div>
                                        <input type="range" id="hueRange" min="0" max="360" value="180" class="w-full" oninput="updateHomeColor()">
                                    </div>

                                    <!-- Saturation Slider -->
                                    <div>
                                        <div class="flex justify-between mb-2">
                                            <span class="text-gray-500 font-medium">${t.homeSat}</span>
                                            <span id="satText" class="font-bold">85%</span>
                                        </div>
                                        <input type="range" id="satRange" min="0" max="100" value="85" class="w-full" oninput="updateHomeColor()">
                                    </div>

                                    <!-- Brightness Slider -->
                                    <div>
                                        <div class="flex justify-between mb-2">
                                            <span class="text-gray-500 font-medium">${t.homeBri}</span>
                                            <span id="briText" class="font-bold">60%</span>
                                        </div>
                                        <input type="range" id="briRange" min="0" max="100" value="60" class="w-full" oninput="updateHomeColor()">
                                    </div>

                                    <!-- Color Temp Slider -->
                                    <div>
                                        <div class="flex justify-between mb-2">
                                            <span class="text-gray-500 font-medium">${t.homeTemp}</span>
                                            <span id="tempText" class="font-bold">4500K</span>
                                        </div>
                                        <input type="range" id="tempRange" min="2700" max="6500" step="100" value="4500" class="w-full" oninput="updateHomeColor()">
                                    </div>
                                </div>
                            </div>

                            <!-- Live Branch Power Grid Monitor (Central AC 5V/10A System) -->
                            <div class="apple-card p-6">
                                <h4 class="font-bold text-lg mb-2 flex items-center space-x-2">
                                    <i data-lucide="zap" class="w-5 h-5 text-yellow-500"></i>
                                    <span>${t.powerMonitor}</span>
                                </h4>
                                <p class="text-xs text-gray-400 mb-4">${t.powerDesc}</p>
                                
                                <div class="space-y-4 text-xs">
                                    <div class="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                                        <span class="text-gray-500">${t.currentLoad}</span>
                                        <span id="currentVal" class="font-bold text-lg text-emerald-500">1320 mA</span>
                                    </div>

                                    <!-- Grid Bar Meter -->
                                    <div>
                                        <div class="flex justify-between mb-1">
                                            <span class="text-gray-400 font-medium">${t.loadPercentLabel}</span>
                                            <span id="loadPercentVal" class="font-bold">66%</span>
                                        </div>
                                        <div class="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                            <div id="loadProgressBar" class="h-full bg-emerald-500 transition-all duration-300" style="width: 66%"></div>
                                        </div>
                                    </div>

                                    <div class="flex items-center space-x-2 pt-2">
                                        <div id="protectionIndicator" class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                                        <span id="protectionText" class="font-semibold text-emerald-600">${t.statusSafe}</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            `;
            initSimWall();
            lucide.createIcons();
        }

        function setSimMode(mode) {
            simMode = mode;
            const t = translations[currentLang];
            document.querySelectorAll('[id^="tab-"]').forEach(btn => {
                btn.classList.remove('bg-white', 'text-black', 'shadow-sm');
                btn.classList.add('text-gray-500');
            });
            const activeTab = document.getElementById(`tab-${mode}`);
            if(activeTab) {
                activeTab.classList.add('bg-white', 'text-black', 'shadow-sm');
                activeTab.classList.remove('text-gray-500');
            }

            const startBtn = document.getElementById('startGameBtn');
            const homePanel = document.getElementById('homeControlPanel');
            const dash = document.getElementById('gameDashboard');

            // Reset Game state
            if(gameInterval) {
                clearInterval(gameInterval);
                gameInterval = null;
            }
            gameScore = 0;
            totalHits = 0;
            reactionSum = 0;
            gameTimeLeft = 30;
            targetId = null;

            if (mode === 'home') {
                if(startBtn) startBtn.classList.add('hidden');
                if(homePanel) homePanel.classList.remove('hidden');
                if(dash) dash.classList.add('opacity-40');
                initAmbientWall();
                updateHomeColor();
            } else {
                if(startBtn) {
                    startBtn.classList.remove('hidden');
                    startBtn.textContent = t.startBtnText;
                }
                if(homePanel) homePanel.classList.add('hidden');
                if(dash) dash.classList.remove('opacity-40');
                document.getElementById('scoreVal').textContent = '0';
                document.getElementById('timeVal').textContent = '30s';
                document.getElementById('reactVal').textContent = `0${t.ms}`;
                initSimWall();
            }
            lucide.createIcons();
        }

        function initSimWall() {
            const wall = document.getElementById('simulatedWall');
            if(!wall) return;
            wall.innerHTML = '';
            for(let i=0; i<9; i++) {
                wall.innerHTML += `
                    <div id="pad-${i}" onclick="hitPad(${i})" class="w-16 h-16 sm:w-20 sm:h-20 bg-gray-300 rounded-[1.5rem] octagon cursor-pointer flex items-center justify-center transition-all duration-100 shadow-inner hover:bg-gray-400">
                        <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-xl pentagon shadow-sm"></div>
                    </div>
                `;
            }
            updatePowerCalculation();
        }

        function initAmbientWall() {
            const wall = document.getElementById('simulatedWall');
            if(!wall) return;
            wall.innerHTML = '';
            for(let i=0; i<9; i++) {
                wall.innerHTML += `
                    <div id="pad-${i}" class="w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-[1.5rem] octagon flex items-center justify-center transition-all duration-300 shadow-md">
                        <div class="w-10 h-10 bg-gray-200 rounded-xl pentagon shadow-sm transition-all duration-300" id="inner-pad-${i}"></div>
                    </div>
                `;
            }
        }

        function toggleGame() {
            const startBtn = document.getElementById('startGameBtn');
            const t = translations[currentLang];
            if (gameInterval) {
                // Stop game
                clearInterval(gameInterval);
                gameInterval = null;
                startBtn.textContent = t.startBtnText;
                initSimWall();
            } else {
                // Start game
                gameScore = 0;
                gameTimeLeft = 30;
                totalHits = 0;
                reactionSum = 0;
                document.getElementById('scoreVal').textContent = '0';
                document.getElementById('timeVal').textContent = '30s';
                document.getElementById('reactVal').textContent = `0${t.ms}`;
                startBtn.textContent = t.stopBtnText;
                playSound('success');
                nextTarget();
                
                gameInterval = setInterval(() => {
                    gameTimeLeft--;
                    document.getElementById('timeVal').textContent = `${gameTimeLeft}s`;
                    if(gameTimeLeft <= 0) {
                        clearInterval(gameInterval);
                        gameInterval = null;
                        startBtn.textContent = t.startBtnText;
                        alertGameResult();
                    }
                }, 1000);
            }
        }

        function nextTarget() {
            if (targetId !== null) {
                const prevPad = document.getElementById(`pad-${targetId}`);
                if(prevPad) {
                    prevPad.style.backgroundColor = '#d1d5db';
                }
            }

            targetId = Math.floor(Math.random() * 9);
            const nextPad = document.getElementById(`pad-${targetId}`);
            
            if (simMode === 'speed') {
                targetColor = 'blue';
                if(nextPad) {
                    nextPad.style.backgroundColor = '#38bdf8';
                }
            } else if (simMode === 'color') {
                targetColor = Math.random() < 0.7 ? 'blue' : 'red';
                if(nextPad) {
                    nextPad.style.backgroundColor = targetColor === 'blue' ? '#38bdf8' : '#ef4444';
                }
            }
            speedTimer = performance.now();
            updatePowerCalculation();
        }

        function hitPad(id) {
            if (!gameInterval) return;
            if (id !== targetId) return;

            const duration = Math.round(performance.now() - speedTimer);
            const t = translations[currentLang];

            if (simMode === 'speed') {
                gameScore += 10;
                totalHits++;
                reactionSum += duration;
                playSound('hit');
                document.getElementById('scoreVal').textContent = gameScore;
                document.getElementById('reactVal').textContent = `${Math.round(reactionSum / totalHits)}${t.ms}`;
                nextTarget();
            } else if (simMode === 'color') {
                if (targetColor === 'blue') {
                    gameScore += 15;
                    totalHits++;
                    reactionSum += duration;
                    playSound('hit');
                } else {
                    gameScore = Math.max(0, gameScore - 20);
                    playSound('fail');
                }
                document.getElementById('scoreVal').textContent = gameScore;
                if(totalHits > 0) {
                    document.getElementById('reactVal').textContent = `${Math.round(reactionSum / totalHits)}${t.ms}`;
                }
                nextTarget();
            }
        }

        function alertGameResult() {
            playSound('success');
            const t = translations[currentLang];
            const avg = totalHits > 0 ? Math.round(reactionSum / totalHits) : 0;
            alert(`${t.alertEnd}\n${t.alertScore}${gameScore}\n${t.alertAvgReact}${avg} ${t.ms}\n${t.alertHits}${totalHits}`);
            initSimWall();
        }

        // Updated for 5V/10A central power adapter calculation rules
        function updatePowerCalculation() {
            let finalCurrent = 0;

            if (simMode === 'home') {
                const brightnessVal = parseInt(document.getElementById('briRange').value, 10);
                finalCurrent = Math.round(300 + brightnessVal * 6); // 基礎 300mA，亮度每增 1% +6mA
            } else {
                finalCurrent = 450; // 光速反應 / 互動訓練模式固定 450mA
            }
            const limitTriggered = finalCurrent > 2000; // Over safety margin of 2000mA capacity

            const curValText = document.getElementById('currentVal');
            const pBar = document.getElementById('loadProgressBar');
            const pPercent = document.getElementById('loadPercentVal');
            const pIndicator = document.getElementById('protectionIndicator');
            const pText = document.getElementById('protectionText');
            const t = translations[currentLang];

            if(curValText) {
                curValText.textContent = `${finalCurrent} mA`;
                // Percentage out of 2000mA max load capacity
                const percentage = Math.min(100, Math.round((finalCurrent / 2000) * 100));
                pPercent.textContent = `${percentage}%`;
                pBar.style.width = `${percentage}%`;

                if(limitTriggered) {
                    pBar.className = "h-full bg-orange-500 transition-all duration-300";
                    pIndicator.className = "w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse";
                    pText.textContent = t.statusLimit;
                    pText.className = "font-semibold text-orange-600";
                } else {
                    pBar.className = "h-full bg-emerald-500 transition-all duration-300";
                    pIndicator.className = "w-2.5 h-2.5 rounded-full bg-emerald-500";
                    pText.textContent = t.statusSafe;
                    pText.className = "font-semibold text-emerald-600";
                }
            }
        }

        function updateHomeColor() {
            const h = document.getElementById('hueRange').value;
            const s = document.getElementById('satRange').value;
            const b = document.getElementById('briRange').value;
            const temp = document.getElementById('tempRange').value;

            document.getElementById('hueText').textContent = `${h}°`;
            document.getElementById('satText').textContent = `${s}%`;
            document.getElementById('briText').textContent = `${b}%`;
            document.getElementById('tempText').textContent = `${temp}K`;

            for(let i=0; i<9; i++) {
                const inner = document.getElementById(`inner-pad-${i}`);
                const parent = document.getElementById(`pad-${i}`);
                if(inner && parent) {
                    const colorString = `hsl(${h}, ${s}%, ${b * 0.8}%)`;
                    inner.style.backgroundColor = colorString;
                    parent.style.boxShadow = `0 0 ${b * 0.3}px ${colorString}`;
                }
            }
            updatePowerCalculation();
        }

        // 4. SCIENTIFIC EVIDENCE SECTION
        function renderScience(app, t) {
            app.innerHTML = `
                <section class="max-w-5xl mx-auto px-6 pt-12">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl md:text-5xl font-bold tracking-tight">${t.scienceTitle}</h2>
                        <p class="text-gray-500 mt-4 max-w-2xl mx-auto">${t.scienceIntro}</p>
                    </div>

                    <div class="space-y-12">
                        
                        <!-- Block 1: Frontiers in Psychology (2025) -->
                        <div class="apple-card p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div class="md:col-span-8">
                                <span class="text-xs font-bold uppercase tracking-wider text-orange-500">${t.sci1Tag}</span>
                                <h3 class="text-2xl font-bold mt-2 mb-4">${t.sci1Title}</h3>
                                <p class="text-sm text-gray-500 leading-relaxed">${t.sci1Desc}</p>
                                <div class="mt-6">
                                    <a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1738888/full" target="_blank" class="text-xs font-semibold text-blue-600 hover:underline flex items-center space-x-1">
                                        <span>${t.sci1Link}</span>
                                        <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="md:col-span-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center justify-center">
                                <i data-lucide="brain-circuit" class="w-20 h-20 text-orange-500/85"></i>
                            </div>
                        </div>

                        <!-- Block 2: CSRT Fall Risk -->
                        <div class="apple-card p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div class="md:col-span-8">
                                <span class="text-xs font-bold uppercase tracking-wider text-emerald-500">${t.sci2Tag}</span>
                                <h3 class="text-2xl font-bold mt-2 mb-4">${t.sci2Title}</h3>
                                <p class="text-sm text-gray-500 leading-relaxed">${t.sci2Desc}</p>
                                <div class="mt-6">
                                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3506161/" target="_blank" class="text-xs font-semibold text-blue-600 hover:underline flex items-center space-x-1">
                                        <span>${t.sci2Link}</span>
                                        <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="md:col-span-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center justify-center">
                                <i data-lucide="activity" class="w-20 h-20 text-emerald-500/85"></i>
                            </div>
                        </div>

                        <!-- Block 3: PMC12921918 (Handball / Reactive Training) -->
                        <div class="apple-card p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div class="md:col-span-8">
                                <span class="text-xs font-bold uppercase tracking-wider text-purple-500">${t.sci3Tag}</span>
                                <h3 class="text-2xl font-bold mt-2 mb-4">${t.sci3Title}</h3>
                                <p class="text-sm text-gray-500 leading-relaxed">${t.sci3Desc}</p>
                                <div class="mt-6">
                                    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12921918/" target="_blank" class="text-xs font-semibold text-blue-600 hover:underline flex items-center space-x-1">
                                        <span>${t.sci3Link}</span>
                                        <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="md:col-span-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center justify-center">
                                <i data-lucide="eye" class="w-20 h-20 text-purple-500/85"></i>
                            </div>
                        </div>

                    </div>
                </section>
            `;
        }

        // 5. ABOUT TEAM / PITCH DECK PAGE
        let currentSlideIdx = 0;

        function renderAbout(app, t) {
            app.innerHTML = `
                <!-- Main Header -->
                <section class="max-w-5xl mx-auto px-6 pt-12">
                    <div class="text-center mb-12">
                        <span class="text-xs font-bold uppercase tracking-widest text-blue-600">Entrepreneurial Team Pitch</span>
                        <h2 class="text-3xl md:text-5xl font-bold tracking-tight mt-2">${t.aboutTitle}</h2>
                        <p class="text-gray-500 mt-4 max-w-2xl mx-auto">${t.aboutBrief}</p>
                        <p class="text-xs text-gray-400 mt-2">${t.aboutTeam}</p>
                    </div>

                    <!-- Slide Presentation interactive container -->
                    <div class="apple-card p-8 bg-gray-900 text-white rounded-[2rem] mb-12 relative overflow-hidden">
                        
                        <div class="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl"></div>
                        <div class="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl"></div>

                        <!-- Simulated Presentation Screen views -->
                        <div id="slideContent" class="min-h-[250px] flex flex-col justify-center transition-all duration-300">
                            <!-- Injected dynamically based on state -->
                        </div>

                        <!-- Presentation Controls -->
                        <div class="flex justify-between items-center border-t border-gray-800 pt-6 mt-8">
                            <span id="slideIndicator" class="text-xs text-gray-500 font-medium">Slide 1 of 5</span>
                            <div class="flex space-x-2">
                                <button onclick="changeSlide(-1)" class="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                                    <i data-lucide="chevron-left" class="w-5 h-5"></i>
                                </button>
                                <button onclick="changeSlide(1)" class="p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition">
                                    <i data-lucide="chevron-right" class="w-5 h-5"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Financial Breakdown Table -->
                    <div class="apple-card p-8">
                        <h3 class="text-2xl font-bold tracking-tight mb-6 flex items-center space-x-2">
                            <i data-lucide="badge-dollar-sign" class="w-6 h-6 text-emerald-500"></i>
                            <span>${t.budgetTitle}</span>
                        </h3>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr class="border-b border-gray-200 text-gray-400 font-medium">
                                        <th class="pb-3 pr-4">${t.thItem}</th>
                                        <th class="pb-3 px-4 text-right">${t.thBudget}</th>
                                        <th class="pb-3 pl-4">${t.thRemarks}</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-100 text-gray-700">
                                    <tr>
                                        <td class="py-3 pr-4 font-semibold">${t.tbItem1}</td>
                                        <td class="py-3 px-4 text-right font-semibold text-emerald-600">$25,000</td>
                                        <td class="py-3 pl-4 text-gray-400">${t.tbRemarks1}</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 pr-4 font-semibold">${t.tbItem2}</td>
                                        <td class="py-3 px-4 text-right font-semibold text-emerald-600">$35,000</td>
                                        <td class="py-3 pl-4 text-gray-400">${t.tbRemarks2}</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 pr-4 font-semibold">${t.tbItem3}</td>
                                        <td class="py-3 px-4 text-right font-semibold text-emerald-600">$40,000</td>
                                        <td class="py-3 pl-4 text-gray-400">${t.tbRemarks3}</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 pr-4 font-semibold">${t.tbItem4}</td>
                                        <td class="py-3 px-4 text-right font-semibold text-emerald-600">$37,000</td>
                                        <td class="py-3 pl-4 text-gray-400">${t.tbRemarks4}</td>
                                    </tr>
                                    <tr class="border-t-2 border-black font-bold">
                                        <td class="py-4 pr-4">${t.tbTotal}</td>
                                        <td class="py-4 px-4 text-right text-black text-lg">$137,000</td>
                                        <td class="py-4 pl-4 text-black">${t.tbTotalRemarks}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Roadmap milestone list -->
                    <div class="apple-card p-8 mt-12">
                        <h3 class="text-2xl font-bold tracking-tight mb-6 flex items-center space-x-2">
                            <i data-lucide="milestone" class="w-6 h-6 text-indigo-500"></i>
                            <span>${t.milestoneTitle}</span>
                        </h3>
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <div class="w-3.5 h-3.5 rounded-full bg-emerald-500 mt-1"></div>
                                <p class="text-sm text-gray-600 leading-relaxed">${t.milestone1}</p>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="w-3.5 h-3.5 rounded-full bg-emerald-500 mt-1"></div>
                                <p class="text-sm text-gray-600 leading-relaxed">${t.milestone2}</p>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="w-3.5 h-3.5 rounded-full bg-indigo-500 mt-1 animate-pulse"></div>
                                <p class="text-sm text-gray-600 font-semibold leading-relaxed">${t.milestone3}</p>
                            </div>
                        </div>
                    </div>

                </section>
            `;
            initSlide();
        }

        function initSlide() {
            currentSlideIdx = 0;
            renderSlide();
        }

        function changeSlide(direction) {
            currentSlideIdx = (currentSlideIdx + direction + 5) % 5;
            renderSlide();
        }

        function renderSlide() {
            const container = document.getElementById('slideContent');
            const indicator = document.getElementById('slideIndicator');
            if(!container) return;

            const t = translations[currentLang];
            let slideTitle = "";
            let slideDesc = "";
            let slideIcon = "sparkles";

            switch(currentSlideIdx) {
                case 0:
                    slideTitle = t.slide1Title;
                    slideDesc = t.slide1Desc;
                    slideIcon = "sparkles";
                    break;
                case 1:
                    slideTitle = t.slide2Title;
                    slideDesc = t.slide2Desc;
                    slideIcon = "cpu";
                    break;
                case 2:
                    slideTitle = t.slide3Title;
                    slideDesc = t.slide3Desc;
                    slideIcon = "home";
                    break;
                case 3:
                    slideTitle = t.slide4Title;
                    slideDesc = t.slide4Desc;
                    slideIcon = "shield";
                    break;
                case 4:
                    slideTitle = t.slide5Title;
                    slideDesc = t.slide5Desc;
                    slideIcon = "trending-up";
                    break;
            }

            container.innerHTML = `
                <div class="flex items-center space-x-3 mb-4">
                    <div class="p-2 bg-blue-500/10 text-blue-400 rounded-xl">
                        <i data-lucide="${slideIcon}" class="w-6 h-6"></i>
                    </div>
                    <h4 class="text-xl md:text-2xl font-bold tracking-tight text-white">${slideTitle}</h4>
                </div>
                <p class="text-sm md:text-base text-gray-400 leading-relaxed max-w-3xl mt-2">
                    ${slideDesc}
                </p>
            `;
            indicator.textContent = `${t.slideOf} ${currentSlideIdx + 1} ${t.slideOfMax}`;
            lucide.createIcons();
        }

        // Initialize App to Home
        window.onload = function() {

            navigate('home');
        };