# GitHub Pages 部署指南

## 步驟 1: 建立 GitHub 倉庫

1. 前往 [GitHub](https://github.com) 並登入您的帳號
2. 點擊右上角的 "+" 按鈕，選擇 "New repository"
3. 倉庫名稱建議使用：`portfolio` 或 `resume`
4. 選擇 "Public" (GitHub Pages 需要公開倉庫)
5. 不要勾選 "Add a README file" (我們已經有了)
6. 點擊 "Create repository"

## 步驟 2: 上傳檔案到 GitHub

### 方法 A: 使用 GitHub Desktop (推薦)

1. 下載並安裝 [GitHub Desktop](https://desktop.github.com/)
2. 登入您的 GitHub 帳號
3. 點擊 "Clone a repository from the Internet"
4. 選擇您剛建立的倉庫
5. 選擇本地儲存位置
6. 將所有專案檔案複製到該資料夾
7. 在 GitHub Desktop 中提交變更並推送到 GitHub

### 方法 B: 使用 Git 命令列

```bash
# 初始化 Git 倉庫
git init

# 新增所有檔案
git add .

# 提交變更
git commit -m "Initial commit: Personal portfolio website"

# 新增遠端倉庫 (替換 YOUR_USERNAME 和 YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 推送到 GitHub
git push -u origin main
```

### 方法 C: 直接上傳 (最簡單)

1. 在您的 GitHub 倉庫頁面
2. 點擊 "uploading an existing file"
3. 拖拽所有專案檔案到上傳區域
4. 點擊 "Commit changes"

## 步驟 3: 啟用 GitHub Pages

1. 在您的 GitHub 倉庫頁面
2. 點擊 "Settings" 標籤
3. 在左側選單中找到 "Pages"
4. 在 "Source" 部分：
   - 選擇 "Deploy from a branch"
   - Branch 選擇 "main"
   - Folder 選擇 "/ (root)"
5. 點擊 "Save"

## 步驟 4: 等待部署

- GitHub Pages 通常需要 1-5 分鐘來部署您的網站
- 您可以在 "Pages" 設定頁面看到部署狀態
- 部署完成後，您會看到一個綠色的勾號

## 步驟 5: 訪問您的網站

您的網站將在以下網址上線：
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

例如，如果您的 GitHub 用戶名是 `itsdamian`，倉庫名是 `portfolio`，那麼網址就是：
```
https://itsdamian.github.io/portfolio
```

## 自訂網域 (可選)

如果您有自己的網域，可以：

1. 在 "Pages" 設定頁面
2. 在 "Custom domain" 欄位輸入您的網域
3. 點擊 "Save"
4. 在您的網域提供商處設定 DNS 記錄

## 更新網站

每次您修改檔案後：

### 使用 GitHub Desktop:
1. 在 GitHub Desktop 中會看到變更
2. 輸入提交訊息
3. 點擊 "Commit to main"
4. 點擊 "Push origin"

### 使用命令列:
```bash
git add .
git commit -m "Update website content"
git push
```

### 直接上傳:
1. 在 GitHub 倉庫頁面編輯檔案
2. 或重新上傳修改後的檔案

## 故障排除

### 網站無法顯示
- 確認倉庫是公開的
- 檢查檔案名稱是否正確 (index.html 必須在根目錄)
- 等待幾分鐘讓部署完成

### 樣式或功能異常
- 檢查瀏覽器開發者工具中的錯誤訊息
- 確認所有檔案都已上傳
- 清除瀏覽器快取

### 語言切換不工作
- 確認 script.js 檔案已正確上傳
- 檢查瀏覽器控制台是否有 JavaScript 錯誤

## 進階設定

### 自動部署
您可以設定 GitHub Actions 來自動部署：

1. 在 `.github/workflows/` 資料夾建立部署腳本
2. 設定觸發條件 (例如推送到 main 分支)
3. 自動建置和部署您的網站

### SEO 優化
- 在 `index.html` 的 `<head>` 部分新增 meta 標籤
- 新增 Open Graph 標籤用於社群媒體分享
- 建立 sitemap.xml 檔案

### 效能優化
- 壓縮圖片檔案
- 使用 CDN 載入外部資源
- 啟用瀏覽器快取

---

## 聯絡支援

如果您在部署過程中遇到問題，可以：

1. 檢查 [GitHub Pages 文件](https://pages.github.com/)
2. 在 GitHub 社群論壇尋求協助
3. 聯絡我：greetinitsdamian@gmail.com

祝您部署順利！ 🚀 