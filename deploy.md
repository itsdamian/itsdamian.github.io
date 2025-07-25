# 部署說明

## Formspree 聯絡表單設置 (推薦 - 最簡單)

### 1. 註冊 Formspree 帳號

1. **前往 [Formspree](https://formspree.io/) 註冊免費帳號**
2. **創建新的表單**
   - 點擊 "New Form"
   - 輸入表單名稱（如：Portfolio Contact）
   - 選擇接收郵件的郵箱地址

3. **獲取表單 ID**
   - 創建完成後，您會得到一個表單 ID
   - 格式類似：`xrgjqjqj`

4. **更新 HTML 代碼**
   - 在 `static/index.html` 中找到聯絡表單
   - 將 `YOUR_FORM_ID` 替換為您的實際表單 ID：
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### 2. 測試表單

1. **本地測試**
   ```bash
   # 使用 Python 簡單服務器
   cd static
   python -m http.server 8000
   ```

2. **訪問網站**
   - 打開瀏覽器訪問：http://localhost:8000
   - 測試聯絡表單功能

### 3. 部署到 GitHub Pages

1. **上傳到 GitHub**
   ```bash
   git add .
   git commit -m "Add portfolio website with Formspree contact form"
   git push origin main
   ```

2. **啟用 GitHub Pages**
   - 在 GitHub 倉庫設定中啟用 Pages
   - 選擇 main 分支作為來源

3. **訪問您的網站**
   - 您的網站將在 `https://yourusername.github.io/your-repo-name` 上線

## 其他部署方案

### 方案一：Python Flask 後端 (進階)

### 1. 安裝 Python 依賴

```bash
pip install -r requirements.txt
```

### 2. 設置 Gmail 應用密碼

1. **啟用 Gmail 兩步驟驗證**
   - 前往 [Google Account Settings](https://myaccount.google.com/security)
   - 啟用「兩步驟驗證」

2. **生成應用密碼**
   - 在安全設定中找到「應用程式密碼」
   - 選擇「其他」並輸入名稱（如：Portfolio Website）
   - 複製生成的 16 位密碼

3. **更新 app.py 配置**
   ```python
   SENDER_EMAIL = "your-email@gmail.com"  # 替換為您的 Gmail
   SENDER_PASSWORD = "your-app-password"  # 替換為您的應用密碼
   ```

### 3. 啟動服務器

```bash
python run.py
```

或

```bash
python app.py
```

### 4. 訪問網站

- 網站地址：http://localhost:5000
- 聯絡表單 API：http://localhost:5000/contact

## 其他部署方案

### 方案一：EmailJS (最簡單)

1. **註冊 EmailJS 帳號**
   - 前往 [EmailJS](https://www.emailjs.com/) 註冊免費帳號
   - 免費版每月可發送 200 封郵件

2. **設置 Email Service**
   - 在 EmailJS 控制台添加 Email Service
   - 支援 Gmail、Outlook、Yahoo 等
   - 記錄下 Service ID

3. **創建 Email Template**
   - 創建新的 Email Template
   - 使用以下變數：
     - `{{from_name}}` - 發送者姓名
     - `{{from_email}}` - 發送者郵箱
     - `{{message}}` - 訊息內容
   - 記錄下 Template ID

4. **獲取 Public Key**
   - 在 EmailJS 控制台找到 Public Key

5. **更新 JavaScript 代碼**
   - 在 `script.js` 中替換以下值：
     ```javascript
     emailjs.init("YOUR_PUBLIC_KEY"); // 替換為您的 Public Key
     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // 替換 Service ID 和 Template ID
     ```

### 方案二：Netlify Forms (免費託管)

1. **部署到 Netlify**
   - 將網站部署到 Netlify
   - Netlify 自動處理表單提交

2. **更新表單 HTML**
   ```html
   <form name="contact" method="POST" data-netlify="true">
     <input type="hidden" name="form-name" value="contact" />
     <!-- 其他表單欄位 -->
   </form>
   ```

3. **設置通知**
   - 在 Netlify 控制台設置表單通知
   - 可發送到郵箱或 Slack

### 方案三：自建後端 API

1. **PHP 後端 (推薦給您)**
   ```php
   <?php
   header('Content-Type: application/json');
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: POST');
   header('Access-Control-Allow-Headers: Content-Type');
   
   if ($_SERVER['REQUEST_METHOD'] === 'POST') {
       $data = json_decode(file_get_contents('php://input'), true);
       
       $name = $data['name'] ?? '';
       $email = $data['email'] ?? '';
       $message = $data['message'] ?? '';
       
       // 驗證
       if (empty($name) || empty($email) || empty($message)) {
           http_response_code(400);
           echo json_encode(['error' => 'Missing required fields']);
           exit;
       }
       
       // 發送郵件
       $to = 'greetinitsdamian@gmail.com';
       $subject = 'Portfolio Contact Form - ' . $name;
       $headers = "From: $email\r\n";
       $headers .= "Reply-To: $email\r\n";
       $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
       
       $emailBody = "
       <h3>New Contact Form Submission</h3>
       <p><strong>Name:</strong> $name</p>
       <p><strong>Email:</strong> $email</p>
       <p><strong>Message:</strong></p>
       <p>" . nl2br($message) . "</p>
       ";
       
       if (mail($to, $subject, $emailBody, $headers)) {
           echo json_encode(['success' => true]);
       } else {
           http_response_code(500);
           echo json_encode(['error' => 'Failed to send email']);
       }
   }
   ?>
   ```

2. **更新前端 JavaScript**
   ```javascript
   fetch('/contact.php', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({
           name: formData.get('name'),
           email: formData.get('email'),
           message: formData.get('message')
       })
   })
   .then(response => response.json())
   .then(data => {
       if (data.success) {
           alert('Message sent successfully!');
           form.reset();
       } else {
           alert('Failed to send message: ' + data.error);
       }
   })
   .catch(error => {
       alert('Error: ' + error.message);
   });
   ```

## 推薦方案

對於您的個人作品集網站，我推薦使用 **EmailJS**，因為：
- 設置簡單，無需後端服務器
- 免費版足夠個人使用
- 可靠且安全
- 支援多種郵件服務

## 安全注意事項

1. **防止垃圾郵件**
   - 添加 reCAPTCHA
   - 實施速率限制
   - 驗證郵箱格式

2. **數據保護**
   - 不要在前端暴露敏感信息
   - 使用 HTTPS
   - 實施適當的 CORS 設置

## 測試

部署後請測試：
1. 表單驗證是否正常
2. 郵件是否能正確發送
3. 錯誤處理是否完善
4. 多語言支持是否正常 