# CANAL DETECTIVE — นักสืบคลองบางมด

ทุกสายน้ำมีเรื่องราว ทุกการเปลี่ยนแปลงมีเบาะแส

เว็บไซต์: https://kitidech-chan.github.io/CANAL-DETECTIVE/

## พัฒนาในเครื่อง

ใช้ Node.js 22 ขึ้นไป

```sh
npm ci
npm run dev
```

เปิด URL ที่ Vite แสดงใน Terminal โดยซอร์ส HTML อยู่ที่ `src/index.html` และแอปเริ่มที่ `src/main.tsx` เว็บนี้ไม่ต้องใช้ API key

## อัปเดตเว็บบน GitHub Pages

```sh
npm run build:pages
```

จากนั้น commit และ push ซอร์สที่แก้ พร้อม `index.html`, `site-assets/` และ `.nojekyll` ไปยัง `main` GitHub Pages จะเผยแพร่จาก branch `main` และโฟลเดอร์ `/` ตามการตั้งค่าเดิม

`index.html` ที่รากโปรเจกต์เป็นไฟล์ที่ build แล้ว ให้แก้ HTML ต้นฉบับใน `src/index.html` ส่วน `node_modules/`, `dist/` และไฟล์ `.env` จะไม่ถูกนำขึ้น GitHub