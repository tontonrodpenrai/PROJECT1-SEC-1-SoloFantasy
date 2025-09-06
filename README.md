# PROJECT1-SEC-1-Solo Fantasy
| รหัสนักศึกษา    | ชื่อ               | GitHub Username | Week#1 | Week#2 | Week#3 | Week#4 | Week#5 | สัดส่วนการทำงาน |
| :---       	  | :---              | :---            | :--- | :---   | :---   | :---   | :---   | :--- |
| `65130500019` | ณัฐภัทร ถาวร        | Jy98Prem2547    | เสนอเกมที่จะทำ,คิด idea เกม turn base | หา Reference เกม และทำ Figma | สร้าง UI turn และ stage , เพิ่ม (logic เปลี่ยน turn และ stage , เปลี่ยน boss , reset hp และ sta ของ hero และ boss เวลาเปลี่ยน stage , เพิ่ม settimeout) ใน Function attackBoss และ attackHero | ยังไม่มีงานที่ได้รับมอบหมายใน week4 | เพิ่ม popup tutorial,แก้ไขรูปภาพใน tutorial | 20%
| `66130500048` | นนทรัตน์ ธนพิพัฒน์ชัย | Naynay00066     | เสนอเกมที่จะทำ,คิด idea เกม turn base | หาโทนสีของเกมและ font ของเกม ทำfigmaให้เห็นภาพรวมของเกม | สร้าง UI หลอด hp สำหรับ boss และ hero , สร้าง UI attack button , สร้าง function attackBoss และใส่ logic boss attack hero กับ hero attack boss ทำให้หลอดเลือด hp ลด | ทำ v-bind เปลี่ยนรูปตัวละคร selectedCharacter ในหน้า gamePlay และ เปลี่ยนรูป Boss ตาม Stage | อธิบายรายการฟีเจอร์ความสามารถของแอปพลิเคชั่นใน README.md, เพิ่มคู่มือการใช้งานแอปพลิเคชันสำหรับผู้ใช้งานใน README.md, เพิ่มคลิปสาธิต features ของแอปพลิเคชันใน README.md , แก้bug function attackBoss และ skillBoss ว่าห้ามทำงานถ้า heroSta น้อยกว่า atkUsage และ skillUsage และทำให้ปุ่ม atk และ skill disable ถ้า heroSta น้อยกว่า atkUsage และ skillUsage , เพิ่มเงื่อนไข popup lose เมื่อ heroSta น้อยกว่า atkUsage และ skillUsage และจำนวน potion เท่ากับ 0 | 20%
| `66135000064` | พนิตพิชา รังกูล      | tontonrodpenrai | เสนอเกมที่จะทำ,คิด idea เกม turn base | หาelementรูปที่จะประกอบในเกมและ ทำfigmaให้เห็นภาพรวมของเกม | ปรับหน้าUI Start GameและSelect Character ต่อจากเพื่อน, เพิ่มตัวแปร bossCharacter เก็บข้อมูลบอส 3 สเตจ, ขยายตัวแปร characters ให้มี atkUsage, skillUsage, และ weakness ของตัวละคร, สร้าง UI แสดงค่า HP และ Stamina(selectedCharacter) และบอส (currentBoss), และเพิ่มตัวแปร heroSta กับ heroMaxSta สำหรับใช้ในฟังก์ชัน attackBoss() เพื่อตรวจสอบและลด Stamina เมื่อโจมตี | ทำให้แสดงdialog actionที่เกิดขึ้นของตัวละครและทำPopup Win/Lose ที่จะขึ้นก็ต่อเมื่อจบStageนั้นๆ เพิ่มfunction(goToNextStage, addLog, showNextLog) มีการรวมfunctionของการresetตัวละครมาอยู่ในfunction goToNextStage | แก้Popup winเมื่อชนะในstageสุดท้าย จะไม่แสดงปุ่มให้ไปstageต่อไปอีกและใส่iconเกม ปรับค่าatk,skill เพิ่มความสมดุลของเกม | 20%
| `66130500084` | สุกฤษฏิ์ อรียเวโรจน์   | Markpppp        | เสนอเกมที่จะทำ,คิด idea เกม turn base | หารูปภาพประกอบของตัวละครและ หารูปภาพหน้าเลือกตัวละครก่อนเข้าเกม | ทำส่วน State ของหน้า Setting, เขียนฟังก์ชันที่เกี่ยวข้องกับ Setting, ทำส่วนของโครงหน้าUi ของ Setting, ทำหน้าต่างป๊อปอัป Settings, เขียน css ของSetting เล็กน้อยเพื่อความสวยงาม และ ทำส่วนที่เกี่ยวข้องกับ Setting ทั้งหมด| ทำหน้าที่สร้างฟังก์ชันและการทำงานเกี่ยวกับPotionในการฟื้นฟูHPและSTA, ทำ Ui เกี่ยวกับ Potion ทำส่วนต่างๆที่เกี่ยวข้องทั้งหมดของ Potion, แก้ไขบัคที่เวลาผู้เล่นชนะครบ3ด่านแล้วกดย้อนกลับไปหน้าเลือกตัวละครใหม่จะทำให้ปุ่มสกิลมันหาย หรือ disable | ทำหน้าที่ที่ได้รับมอบมายเสร็จเรียบร้อยแล้ว | 20%
| `66130500128` | อัครวิทย์ พงษ์พิศาล   | Akharawit128    | เสนอเกมที่จะทำ,คิด idea เกม turn base | หารูปภาพพื้นหลังของเกมในแต่ละฉากและรูปitemในเกม | ทำ LandingPage, หน้าเลือกตัวละคร, ทำ functionชื่อ selectedCharacter และเพิ่ม การตกแต่ง ui ต่างๆเช่น สีเวลาเลือกตัว เป็นต้น | ทำ fuction skillBoss | ช่วยเพื่อนแก้ bug function attackBoss และ skillBoss ว่าห้ามทำงานถ้า heroSta น้อยกว่า atkUsage และ skillUsage และทำให้ปุ่ม atk และ skill disable ถ้า heroSta น้อยกว่า atkUsage และ skillUsage  |20%


# ฟีเจอร์ความสามารถของเกม SoloFantacy และคำอธิบาย
1. **หน้า Home** <br>
คำอธิบาย: ผู้เล่นสามารถเข้าสู่เกมหรือดู Tutorial ได้จากหน้าแรก 
2. **ระบบ Tutorial** <br>
คำอธิบาย: แนะนำผู้เล่นเกี่ยวกับขั้นตอนการเล่นเกม ตั้งแต่การเลือกตัวละคร การต่อสู้ เมนูเกม และเงื่อนไขชนะ/แพ้
3. **เลือกตัวละคร (Select Character)** <br>
คำอธิบาย: ผู้เล่นสามารถเลือกตัวละครที่ต้องการเล่น แต่ละตัวมีค่าสถานะต่าง ๆ เช่น HP, STA, ATK, SKILL จะมีการไฮไลท์ตัวละครที่เลือก และมีปุ่ม Select เพื่อไปยังหน้า Gameplay
4. **ระบบ Attack ในหน้า Gameplay** <br>
คำอธิบาย: เมื่อกดปุ่มนี้ HP ของBoss จะลดลง ผู้เล่นสามารถใช้ Attack ได้หากมี STA เพียงพอ หาก STA ไม่เพียงพอ ปุ่มนี้จะ disable
5. **ระบบ Skill ในหน้า Gameplay** <br>
คำอธิบาย: เมื่อกดปุ่มนี้ hp ของBoss จะลดลง ผู้เล่นสามารถใช้ Skill ได้หากมี STA เพียงพอ หาก STA ไม่เพียงพอ ปุ่มนี้จะ disable , Skill ใช้ทำความเสียหายสูงกว่าการโจมตีปกติ , Skill ใช้แล้วต้องรออีก 2 Turn ถัดไปจึงสามารถใช้ได้อีกครั้ง
6. **ระบบ Potion ในหน้า Gameplay** <br>
คำอธิบาย: Potion ฟื้นฟู HP 40% ของ Max HP และฟื้นฟู STA 30 หน่วย , มีจำนวนจำกัด (เริ่มต้น 3 ขวด), ปุ่มจะ disable หากผู้เล่นใช้ Potion หมด
7. **ระบบแสดง Turn ในหน้า Gameplay** <br>
คำอธิบาย: แสดง Turn ปัจจุบัน , สลับรอบผู้เล่นและ Boss อัตโนมัติ , ถ้ายังไม่ถึง turn ของผู้เล่น ปุ่ม ATK,SKILL,POTION จะ disable ไม่สามารถกดได้
8. **ระบบ Stage ในหน้า Gameplay** <br>
คำอธิบาย : แสดง Stage 1-3 พร้อมชื่อและรูปภาพ Boss , เมื่อชนะ Stage จะสามารถไป Stage ถัดไปได้ , รีเซ็ต HP/STA ของผู้เล่นในแต่ละ Stage
9. **เงื่อนไขชนะ / แพ้** <br>
คำอธิบาย: ชนะเมื่อ บอส HP = 0 , แพ้เมื่อ ผู้เล่น HP = 0 หรือ STA < atkUsage/skillUsage และ Potion = 0 , แสดงหน้าต่าง Win / Lose ซึ่งในหน้าต่าง Win จะมีปุ่มให้กดเพื่อเล่นใน Stage ถัดไปด้วย แต่ถ้าอยู่ Stage สุดท้ายปุ่มจะหายไป 
10. **ระบบ Setting ในหน้า Gameplay** <br>
คำอธิบาย: ผู้เล่นสามารถเปิดเมนู Setting ระหว่างเล่นเกมโดยใน Setting จะประกอบด้วย ปุ่มกลับไปหน้า Home,ปุ่มกลับไปหน้า Select Character,ปุ่มปิด Setting
11. **ระบบ Log การต่อสู้ ในหน้า Gameplay** <br>
คำอธิบาย: ข้อความแสดง action ต่างๆของผู้เล่นและ Boss แบบต่อเนื่องเรียลไทม์

# คู่มือการเล่นเกม SoloFantacy
![HomeExplain](https://github.com/tontonrodpenrai/PROJECT1-SEC-1-SoloFantasy/blob/4809dbbc6efefdc7f8b283e3010e6f78f51d697b/public/images/tutorial/text.png)
![SelectCharExplain](https://github.com/tontonrodpenrai/PROJECT1-SEC-1-SoloFantasy/blob/1228957ebadea8701ff4191bab4805d650d750a4/public/images/tutorial/selectCharacters.png)
![GameplayExplain](https://github.com/tontonrodpenrai/PROJECT1-SEC-1-SoloFantasy/blob/4809dbbc6efefdc7f8b283e3010e6f78f51d697b/public/images/tutorial/stage.png)
![SettingExplain](https://github.com/tontonrodpenrai/PROJECT1-SEC-1-SoloFantasy/blob/4809dbbc6efefdc7f8b283e3010e6f78f51d697b/public/images/tutorial/menu.png)
![NextStageExplain](https://github.com/tontonrodpenrai/PROJECT1-SEC-1-SoloFantasy/blob/4809dbbc6efefdc7f8b283e3010e6f78f51d697b/public/images/tutorial/nextStage.png)
![LosePopup](https://github.com/tontonrodpenrai/PROJECT1-SEC-1-SoloFantasy/blob/4809dbbc6efefdc7f8b283e3010e6f78f51d697b/public/images/tutorial/lose.png)
![WinPopup](https://github.com/tontonrodpenrai/PROJECT1-SEC-1-SoloFantasy/blob/4809dbbc6efefdc7f8b283e3010e6f78f51d697b/public/images/tutorial/win.png)

# วีดีโอสาธิตฟีเจอร์เกม Solofantacy
(https://drive.google.com/file/d/1f87AhqqojmX8MCkCFuisNqreT939Gq4L/view?usp=sharing)

# แรงบันดาลใจในการพัฒนาแอปพลิเคชัน
**เกมTWOM: The World of Magic** <br>
ได้แรงบันดาลใจในส่วนของธีมเกมเป็นแฟนตาซีและภาพpixel โดยมีตัวละครที่สามารถเลือกเล่นได้ 3 คลาส: นักรบ เรนเจอร์ นักมายากล ล่าบอสมอนสเตอร์ด้วยทักษะที่หลากหลายสำหรับแต่ละคลาส <br>
**เกมPokemon** <br>
ได้แรงบันดาลใจในส่วนของรูปแบบการเล่นเป็น Turn-Based สลับกันโจมตีระหว่างฝั่งตรงข้ามกับฝั่งผู้เล่น ซึ่งหน้าgame playจะจัดวางรูปแบบคล้ายคลึงกับPokemon Gen 1 ในปี 1996
