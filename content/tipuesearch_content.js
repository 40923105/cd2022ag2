var tipuesearch = {"pages": [{'title': 'About', 'text': '組長： \n 40923105 吳芷萱. \n 組員： \n 40923102 王悅禎 \n 40923104 江宜珊 \n 40923106 巫翊婕 \n 49023107 李宛諭 \n 40923110 林芳羽 \n 40923121 \n 40923153 \n', 'tags': '', 'url': 'About.html'}, {'title': '每周討論', 'text': '大組每兩周討論一次 \n', 'tags': '', 'url': '每周討論.html'}, {'title': 'W2', 'text': '分組的 txt 檔： "cd2022_w4_grp.txt" \n # grp_2a_old.py\nstudList = "cd2022_w4_grp.txt"\ncourTitle = "cd2022"\n \n# group title initial\ngrpTitle = studList[:6] + "ag"\n \n# student Account and github Account as inputs\ndef perWeb(s, g):\n    pSite = "<a href=\\"https://" + g + ".github.io/" + courTitle + "\\">" + s + " web</a>"\n    print(pSite)\n \ndef perRepo(s, g):\n    pSite = "<a href=\\"https://github.com/" + g + "/" + courTitle + "\\">" + s + " repo</a>"\n    print(pSite)\n     \ndef grpWeb(s, g, ord):\n    pSite = "<a href=\\"https://" + g + ".github.io/" + grpTitle + str(ord) + "\\">grp web</a>"\n    print(pSite)\n     \ndef grpRepo(s, g, ord):\n    pSite = "<a href=\\"https://github.com/" + g + "/" + grpTitle + str(ord) + "\\">grp repo</a>"\n    print(pSite)\n \n# open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-8" is needed\nwith open(studList) as fh:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = fh.readlines()\n \ngrpCount = 0\nfor i in range(len(data)):\n    # grpCount is the group order\n    grpCount = grpCount + 1\n    group = data[i].rstrip("\\n").split("\\t")\n    # use filter to remove vacant string eleament\n    # use [1:] to remove first element\n    group = list(filter(None, group))[1:]\n    print(grpTitle + str(grpCount) + "<br />")\n    for j in range(0, len(group), 2):\n        # s is the student number\n        s = group[j]\n        # g is the github account\n        g = group[j+1]\n        perWeb(s, g)\n        print("|")\n        perRepo(s, g)\n        print("|")\n        grpWeb(s, g, grpCount)\n        print("|")\n        grpRepo(s, g, grpCount)\n        print("<br />") \n cd2022ag1   40923101 web  |  40923101 repo  |  grp web  |  grp repo     40923103 web  |  40923103 repo  |  grp web  |  grp repo     40923108 web  |  40923108 repo  |  grp web  |  grp repo     40923119 web  |  40923119 repo  |  grp web  |  grp repo     40923137 web  |  40923137 repo  |  grp web  |  grp repo     40923154 web  |  40923154 repo  |  grp web  |  grp repo     40923156 web  |  40923156 repo  |  grp web  |  grp repo     40971134 web  |  40971134 repo  |  grp web  |  grp repo    cd2022ag2   40923102 web  |  40923102 repo  |  grp web  |  grp repo     40923104 web  |  40923104 repo  |  grp web  |  grp repo     40923105 web  |  40923105 repo  |  grp web  |  grp repo     40923106 web  |  40923106 repo  |  grp web  |  grp repo     40923107 web  |  40923107 repo  |  grp web  |  grp repo     40923110 web  |  40923110 repo  |  grp web  |  grp repo     40923121 web  |  40923121 repo  |  grp web  |  grp repo     40923153 web  |  40923153 repo  |  grp web  |  grp repo    cd2022ag3   40923109 web  |  40923109 repo  |  grp web  |  grp repo     40923111 web  |  40923111 repo  |  grp web  |  grp repo     40923114 web  |  40923114 repo  |  grp web  |  grp repo     40923115 web  |  40923115 repo  |  grp web  |  grp repo     40923122 web  |  40923122 repo  |  grp web  |  grp repo     40923129 web  |  40923129 repo  |  grp web  |  grp repo     40923146 web  |  40923146 repo  |  grp web  |  grp repo     40923148 web  |  40923148 repo  |  grp web  |  grp repo    cd2022ag4   40923116 web  |  40923116 repo  |  grp web  |  grp repo     40923124 web  |  40923124 repo  |  grp web  |  grp repo     40923125 web  |  40923125 repo  |  grp web  |  grp repo     40923126 web  |  40923126 repo  |  grp web  |  grp repo     40923127 web  |  40923127 repo  |  grp web  |  grp repo     40923128 web  |  40923128 repo  |  grp web  |  grp repo     40923138 web  |  40923138 repo  |  grp web  |  grp repo     40923143 web  |  40923143 repo  |  grp web  |  grp repo    cd2022ag5   40923123 web  |  40923123 repo  |  grp web  |  grp repo     40923131 web  |  40923131 repo  |  grp web  |  grp repo     40923133 web  |  40923133 repo  |  grp web  |  grp repo     40923134 web  |  40923134 repo  |  grp web  |  grp repo     40923135 web  |  40923135 repo  |  grp web  |  grp repo     40923139 web  |  40923139 repo  |  grp web  |  grp repo     40923142 web  |  40923142 repo  |  grp web  |  grp repo     40923151 web  |  40923151 repo  |  grp web  |  grp repo    cd2022ag6   40923113 web  |  40923113 repo  |  grp web  |  grp repo     40923130 web  |  40923130 repo  |  grp web  |  grp repo     40923140 web  |  40923140 repo  |  grp web  |  grp repo     40923144 web  |  40923144 repo  |  grp web  |  grp repo     40923145 web  |  40923145 repo  |  grp web  |  grp repo     40923149 web  |  40923149 repo  |  grp web  |  grp repo     40923150 web  |  40923150 repo  |  grp web  |  grp repo     40923152 web  |  40923152 repo  |  grp web  |  grp repo    cd2022ag7   40823132 web  |  40823132 repo  |  grp web  |  grp repo     40823143 web  |  40823143 repo  |  grp web  |  grp repo     40923117 web  |  40923117 repo  |  grp web  |  grp repo     40923118 web  |  40923118 repo  |  grp web  |  grp repo     40923120 web  |  40923120 repo  |  grp web  |  grp repo     40923136 web  |  40923136 repo  |  grp web  |  grp repo     40923147 web  |  40923147 repo  |  grp web  |  grp repo     40923157 web  |  40923157 repo  |  grp web  |  grp repo \n', 'tags': '', 'url': 'W2.html'}, {'title': '建立倉儲', 'text': '先建立一個名稱為 cd2022 空倉儲 \n cd tmp\ngit clone --recurse-submodules repo.git\ncd cd2022\ngit submodule add https://github.com/mdecourse/cmsimde.git cmsimde \n 接著到近端的 cmsimde > up_dir 全選複製到近端倉儲 \n \n 再至 cmsimde 將以下檔案拉至近端倉儲 \n \n 更新 cmsimde \n cd tmp\ncd cd2022\ncd cmsimde\ngit pull origin master \n 更新後從 cmsimde>up_dir 把更新後的檔案拉進近端倉儲 \n \n', 'tags': '', 'url': '建立倉儲.html'}, {'title': '建立小組 大組倉儲', 'text': '1.先到小組的 github 網站，按 Fork，複製小組網址 \n 2.開啟 cmd \n 打上 \n \n cd tmp\ngit clone --recurse-submodules 小組網址.git \n \n 3.接著建立一個小組的token \n \n \n', 'tags': '', 'url': '建立小組 大組倉儲.html'}, {'title': '遇到的問題-1', 'text': 'Q： \n \n A：這個是未設置 token 所以要去 Github 的設定裡去設定 token 然後把\xa0 personal access token\xa0 複製貼上至近端倉儲下的 config 裡 \n <<<<<<< HEAD \n', 'tags': '', 'url': '遇到的問題-1.html'}, {'title': 'W4', 'text': 'NX Tutorial 1，操作 Wink \n 操作範例零件下載： https://drive.google.com/drive/folders/1aVgB5smkumviEXuhUJ8BHgiekm7ICoip?usp=sharing \n ======= \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W3', 'text': '參考影片1： \n NX Tutorial 1 \n https://www.youtube.com/watch?v=GUaa97tALxE&list=PLzEsJue49U_EMMv0eBo8MNJjJOq_WHCrl&index=2 \n >>>>>>> 5d415c72ffff21cc3656028a84d25a4203b6d0ff \n \n 操作範例零件下載： \n https://drive.google.com/drive/folders/1aVgB5smkumviEXuhUJ8BHgiekm7ICoip?usp=sharing \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n -------------------------- \n 參考影片2： \n TECH 4472 - Homework 01 \n https://www.youtube.com/watch?v=6CtAJe9acr4&list=PLzEsJue49U_EMMv0eBo8MNJjJOq_WHCrl&index=2&t=269s \n \n 操作範例零件下載： \n https://drive.google.com/file/d/1WM55lwriLFrs-CPSK0V5zpg55Kzp44Hm/view?usp=sharing \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n ---------------------------- \n', 'tags': '', 'url': 'W3.html'}, {'title': '遇到的問題-2', 'text': '在 28000@192.168.56.3 開頭打上 REM 變成註解。 \n \n', 'tags': '', 'url': '遇到的問題-2.html'}, {'title': 'W6', 'text': '建立 blog 遇到的問題 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W8', 'text': '分配繪圖軟體 \n Solvespace：40923105、40923107 \n NX 12：40923102、40923110 \n Onshape：40923104、40923106 \n \n 全部圖檔 \n \n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W11', 'text': '', 'tags': '', 'url': 'W11.html'}, {'title': 'w11s1', 'text': '40923107 心得： \n 第八週開始畫 uarm 零件及組合圖， 我被分配到 Solvespace 的繪圖軟體，之前因為沒使用過這款軟體，所以剛開始畫得很卡，現在有比較熟悉，已經了解 在繪製任何草圖前，要先 sketch in new work plane\xa0 選擇座標平面，或定義三軸座標的零件任意處(可點一個面、2或3條軸)，以及長料方式。但在組合的部分還不熟悉。另外已會用SSH 協定, 參與組長帳號下的分組倉儲內容協同編輯，並解決產生的衝突。 \n 40923105 心得 : \n 被分配至 Solvespace，剛開始使用時，覺得很難用，不知道怎麼標註也不知道怎麼去約束其線條，但有上網去學習怎麼使用 slovespace 裡的繪製零件以及組裝零件，現在用起來沒有以前那麼卡了，可是還是不太清楚旁邊的小黑框怎麼使用，目前還在摸索中；現在也把大組倉儲跟個人倉儲由 token 更改為 ssh，並嘗試解決衝突。 \n \n 遇到的問題：組長和組員同時用 cms 編輯網頁，組員 Pull new request 後 merge 失敗。 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w11s1.html'}, {'title': 'w11s2', 'text': '', 'tags': '', 'url': 'w11s2.html'}, {'title': 'w11s3', 'text': '', 'tags': '', 'url': 'w11s3.html'}, {'title': 'uarm', 'text': '全部圖檔 \n NX12 組合 \n \n \n \n \n \n \n Solvespace組合 \n \n \n', 'tags': '', 'url': 'uarm.html'}, {'title': '期末考週', 'text': '4.XML UI slider 控制 \n \n 心得 \n 40923105： 自己在做 slider 控制前三軸的時候，剛開始排列零件的時候都沒問題，可是當他在跑程式時我的軸會整個脫離起飛，剛開始想說嘗試不同的排列去跑可是也都一樣，最後我去改零件的重量，才不會起飛脫離，去年在做 mearm 的時候也一樣，都會不正常的旋轉起飛。 \n 40923107：這題因為第十六週有練習過，過程比較順利。操作過程中，有時會忘記要先啟動模擬再連線，因此在會議中示範操作並提醒大家。 \n 40923110：第四題的題目是把我們繪製好的uarm組立件丟到 CoppeliaSim ，然後使用XML UI slider 的控制功能操作 uarm 機械手臂，這個功能可以讓我們知道 uarm 機械手臂前三軸各轉了多少度。 \n 5.加入 suctionPad 零件，以手動操控或程式操控的方式，控制 block 方塊零件取放模擬 \n \n 心得 \n 40923105： 有時用鍵盤控制沒辦法動，可是重新開啟 coppeliasim 後又可以用鍵盤控制了，已經好幾次都這樣了，可是一直找不到原因，今天剛做完時就發生這個問題，那時候重開兩次都不會動，直接被嚇死，可是重開第三次的時候就可以了。 \n 40923107：從前幾週學習取放模擬到現在，也練習很多次，已經非常熟悉，所以示範操作過程也很順利。 \n 40923110：第五題的題目是要在我們丟到 CoppeliaSim 的 uarm 機械手臂加入 suctionPad 和block 方塊，我們這一組是利用鍵盤控制 uarm 機械手臂，並讓 uarm 機械手臂取放方塊。在第16週使用鍵盤操作老師給的機械手臂檔案的時候鍵盤一開始都能操控，但到中途不論怎麼按鍵盤它都呈現靜止狀態，重開 CoppeliaSim 好幾次鍵盤都處於無法操控的狀態，所以就嘗試重新下載檔案,但每一次操作的過程中都還是會中途無法操控 \n 6.以跨網路 Python remote API 的方式，控制圖形介面 slider 前三軸轉動(操控者-7號 被操控者-5號) \n \n 心得 \n 40923105：與7號在使用 VPN 連線時，因為防火牆的關係導致我與7號一直無法連線，崩潰了很久，也嘗試過交換操控者與被操控者的身分，操控者要把\xa0 uarm_tkinter_control.py 裡的第 61行 裡的 IP 位置改成被操控者的 IP 位置， 想說是不是這題真的廢了，結果最後發現是我的防火牆忘記關，最後雖然連線了，但她在操控時我這裡的 uarm 沒辦法動， 結果是我 coppeliasim UI 介面的程式打 joint123 但零件那邊打 motor123，最後都有修改回來了，成功大結局！ \n 40923107：這題在操作上遇到比較多困難。 一開始操控者(組員40923107)在連線被操控者(組長40923105) 的 vpn 時，因為防毒軟體防火牆的關係，連線好幾次都失敗，好險最後有發現防火牆的問題。 再來是 IP 位址的設定，操控者需要修改串流伺服器對應的IP位址，改成被操控者筆電的 IP。最後，被操控者要先啟動模擬並打開瀏覽器端，操控者再執行 uarm_tkinter_control.py，被操控者就可在瀏覽器端，透過網際介面觀看 uarm 模擬。過程中我們了解到虛實整合的重要性，像現在這種網路時代再加上疫情，這樣的跨網路交流更是重要。', 'tags': '', 'url': '期末考週.html'}]};