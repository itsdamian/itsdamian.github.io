# 林書弘 - 個人履歷網站

一個現代化、響應式的個人履歷網站，支援中英韓三種語言。

## 🌟 特色功能

- **多語言支援** - 中文、英文、韓文三種語言切換
- **響應式設計** - 適配桌面、平板、手機等各種設備
- **現代化UI** - 使用 Tailwind CSS 的簡約現代設計
- **平滑動畫** - 滾動動畫和互動效果
- **SEO 優化** - 搜尋引擎友好的結構
- **無障礙設計** - 支援鍵盤導航和螢幕閱讀器

## 📁 專案結構

```
profolio/
├── index.html          # 主要HTML文件
├── styles.css          # 自訂CSS樣式
├── script.js           # JavaScript功能
└── README.md           # 專案說明文件
```

## 🚀 快速開始

### 本地開發

1. 下載或克隆專案到本地
2. 使用任何本地伺服器開啟 `index.html`
   - 使用 VS Code 的 Live Server 擴展
   - 或使用 Python: `python -m http.server 8000`
   - 或使用 Node.js: `npx serve .`

### GitHub Pages 部署

1. 將專案推送到 GitHub 倉庫
2. 進入倉庫設定 (Settings)
3. 找到 "Pages" 選項
4. 選擇 "Deploy from a branch"
5. 選擇 `main` 分支和 `/ (root)` 資料夾
6. 點擊 "Save"

您的網站將在 `https://yourusername.github.io/your-repo-name` 上線。

## 🎨 自訂指南

### 更新個人資訊

編輯 `index.html` 文件中的以下部分：

1. **基本資訊** - 姓名、職稱、聯絡方式
2. **工作經驗** - 公司、職位、期間、成就
3. **技能專長** - 技術技能和熟練程度
4. **專案作品** - 重要專案和作品集
5. **教育背景** - 學歷和畢業專案

### 修改樣式

編輯 `styles.css` 文件來自訂：

- 顏色主題
- 字體樣式
- 動畫效果
- 響應式斷點

### 新增語言

在 `script.js` 的 `translations` 物件中新增語言：

```javascript
const translations = {
    // 現有語言...
    'new_lang': {
        'nav.about': '翻譯文字',
        // 其他翻譯...
    }
};
```

然後在 HTML 中新增語言切換按鈕。

### 更新照片

1. 將您的專業照片命名為 `profile.jpg` 或 `profile.png`
2. 放置在專案根目錄
3. 在 `index.html` 中更新圖片路徑：

```html
<img src="profile.jpg" alt="林書弘" class="w-64 h-64 rounded-full object-cover">
```

## 📱 響應式設計

網站已針對以下設備進行優化：

- **桌面** (1200px+) - 完整佈局
- **平板** (768px - 1199px) - 調整後的網格佈局
- **手機** (< 768px) - 單欄佈局，折疊式導航

## 🔧 技術棧

- **HTML5** - 語義化標記
- **CSS3** - 現代化樣式和動畫
- **Tailwind CSS** - 實用優先的CSS框架
- **JavaScript (ES6+)** - 互動功能和語言切換
- **Font Awesome** - 圖示庫

## 🌐 瀏覽器支援

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 授權

此專案採用 MIT 授權條款。

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request 來改善這個專案。

## 📞 聯絡資訊

- **姓名**: 林書弘
- **Email**: greetinitsdamian@gmail.com
- **電話**: +886 978 609 130
- **GitHub**: [github.com/itsdamian](https://github.com/itsdamian)
- **所在地**: New Taipei City, Taiwan

---

© 2025 林書弘. 保留所有權利。 