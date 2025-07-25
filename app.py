from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from datetime import datetime
import re

app = Flask(__name__)
CORS(app)  # 允許跨域請求

# 配置
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SENDER_EMAIL = "greetinitsdamian@gmail.com"  # 替換為您的 Gmail
SENDER_PASSWORD = "greetinitsdamian"  # 替換為您的應用密碼
RECIPIENT_EMAIL = "greetinitsdamian@gmail.com"

def validate_email(email):
    """驗證郵箱格式"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def send_email(name, email, message):
    """發送郵件"""
    try:
        # 創建郵件
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Portfolio Contact Form - {name}'
        msg['From'] = SENDER_EMAIL
        msg['To'] = RECIPIENT_EMAIL
        msg['Reply-To'] = email

        # HTML 郵件內容
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                    New Contact Form Submission
                </h2>
                
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong style="color: #1e40af;">Name:</strong> {name}</p>
                    <p><strong style="color: #1e40af;">Email:</strong> <a href="mailto:{email}">{email}</a></p>
                    <p><strong style="color: #1e40af;">Date:</strong> {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
                </div>
                
                <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
                    <h3 style="color: #1e40af; margin-top: 0;">Message:</h3>
                    <p style="white-space: pre-wrap;">{message}</p>
                </div>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                    <p style="color: #6b7280; font-size: 14px;">
                        This message was sent from your portfolio contact form.
                    </p>
                </div>
            </div>
        </body>
        </html>
        """

        # 添加 HTML 內容
        html_part = MIMEText(html_content, 'html')
        msg.attach(html_part)

        # 發送郵件
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.send_message(msg)
        server.quit()

        # 記錄成功提交
        log_entry = f"{datetime.now().strftime('%Y-%m-%d %H:%M:%S')} - Contact form submitted by: {name} ({email})\n"
        with open('contact_log.txt', 'a', encoding='utf-8') as f:
            f.write(log_entry)

        return True
    except Exception as e:
        print(f"Email sending error: {e}")
        return False

@app.route('/contact', methods=['POST', 'OPTIONS'])
def contact():
    """處理聯絡表單提交"""
    if request.method == 'OPTIONS':
        # 處理預檢請求
        response = jsonify({'status': 'ok'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        return response

    try:
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'Invalid JSON data'}), 400

        # 獲取表單數據
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        message = data.get('message', '').strip()

        # 驗證必填欄位
        if not name or not email or not message:
            return jsonify({'error': 'Missing required fields'}), 400

        # 驗證郵箱格式
        if not validate_email(email):
            return jsonify({'error': 'Invalid email format'}), 400

        # 防止垃圾郵件 - 檢查訊息長度
        if len(message) > 2000:
            return jsonify({'error': 'Message too long'}), 400

        # 發送郵件
        if send_email(name, email, message):
            return jsonify({
                'success': True,
                'message': 'Message sent successfully'
            })
        else:
            return jsonify({'error': 'Failed to send email'}), 500

    except Exception as e:
        print(f"Contact form error: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/')
def index():
    """提供主頁"""
    return app.send_static_file('index.html')

@app.route('/<path:filename>')
def static_files(filename):
    """提供靜態文件"""
    return app.send_static_file(filename)

if __name__ == '__main__':
    # 開發模式
    app.run(debug=True, host='0.0.0.0', port=5000) 