# 林書弘 - 個人作品集網站

一個響應式的個人作品集網站，使用 HTML、CSS、JavaScript 和 Formspree 聯絡表單。

## 功能特色

- 🌐 **響應式設計** - 支援桌面、平板和手機
- 🌍 **多語言支援** - 中文、英文、韓文
- 📧 **聯絡表單** - Formspree 免費服務處理
- 🎨 **現代化 UI** - 使用 Tailwind CSS
- ⚡ **快速載入** - 優化的效能
- 📱 **行動友善** - 觸控優化的介面

## 技術棧

### 前端
- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (ES6+)
- Font Awesome 圖標

### 聯絡表單
- Formspree (免費第三方服務)
- 無需後端服務器
- 自動郵件發送

## 快速開始

### 1. 複製專案

```bash
git clone <your-repo-url>
cd profolio_damian
```

### 2. 設置 Formspree 聯絡表單

1. **註冊 Formspree 帳號**
   - 前往 [Formspree](https://formspree.io/) 註冊免費帳號
   - 創建新的表單並獲取表單 ID

2. **更新表單 ID**
   - 在 `index.html` 中找到聯絡表單
   - 將 `YOUR_FORM_ID` 替換為您的實際表單 ID

### 3. 啟動本地服務器

```bash
python start_static.py
```

或使用 Python 內建服務器：

```bash
python -m http.server 8000
```

### 4. 訪問網站

打開瀏覽器訪問：http://localhost:8000

## 專案結構

```
profolio_damian/
├── index.html         # 主頁面
├── styles.css         # 自定義樣式
├── script.js          # JavaScript 功能
├── image.jpg          # 個人照片
├── start_static.py    # 靜態文件服務器
├── deploy.md          # 部署說明
├── README.md          # 專案說明
└── app.py             # Flask 後端 (可選)
```

## 功能說明

### 多語言切換
- 支援中文、英文、韓文
- 即時切換，無需重新載入頁面
- 所有內容都會自動翻譯

### 聯絡表單
- 使用 Formspree 免費服務
- 完整的表單驗證
- 防止垃圾郵件保護
- 自動郵件發送到您的郵箱

### 響應式設計
- 桌面版：完整功能展示
- 平板版：適中的佈局
- 手機版：觸控優化

## 部署選項

### 1. 本地開發
```bash
python start_static.py
```

### 2. GitHub Pages 部署 (推薦)
- 上傳到 GitHub 倉庫
- 啟用 GitHub Pages
- 免費託管，自動部署

### 3. 其他靜態託管
- **Netlify**: 免費靜態網站託管
- **Vercel**: 快速部署平台
- **Firebase Hosting**: Google 的靜態託管服務

## 自定義配置

### 修改個人資訊
編輯 `index.html` 中的內容：
- 個人資料
- 工作經驗
- 技能專長
- 專案作品

### 修改樣式
編輯 `styles.css` 來自定義：
- 顏色主題
- 字體樣式
- 動畫效果

### 修改功能
編輯 `script.js` 來調整：
- 語言翻譯
- 動畫效果
- 表單處理

## 故障排除

### 常見問題

1. **聯絡表單無法發送**
   - 確認已正確設置 Formspree 表單 ID
   - 檢查 Formspree 帳號是否正常
   - 確認表單欄位名稱正確

2. **靜態文件無法載入**
   - 確認所有文件都在根目錄中
   - 檢查文件權限
   - 清除瀏覽器快取

3. **語言切換不工作**
   - 確認 script.js 文件已正確載入
   - 檢查瀏覽器控制台錯誤

## 貢獻

歡迎提交 Issue 和 Pull Request！

## 授權

MIT License

## 聯絡

- 電子郵件：greetinitsdamian@gmail.com
- GitHub：https://github.com/itsdamian

---

**注意**：請記得更新 `index.html` 中的 Formspree 表單 ID 才能正常使用聯絡表單功能。 