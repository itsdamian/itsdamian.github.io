#!/usr/bin/env python3
"""
Portfolio Website Server
啟動個人作品集網站的 Python 服務器
"""

import os
import sys
from app import app

if __name__ == '__main__':
    print("🚀 Starting Portfolio Website Server...")
    print("📧 Contact form backend: Python Flask")
    print("🌐 Server will be available at: http://localhost:5000")
    print("📝 Contact form endpoint: http://localhost:5000/contact")
    print("\n⚠️  Remember to:")
    print("   1. Update SENDER_EMAIL and SENDER_PASSWORD in app.py")
    print("   2. Enable 2FA on your Gmail account")
    print("   3. Generate an App Password for this application")
    print("\n" + "="*50)
    
    # 檢查是否在 static 目錄中
    if not os.path.exists('static/index.html'):
        print("❌ Error: static/index.html not found!")
        print("   Make sure all files are in the static/ directory")
        sys.exit(1)
    
    # 啟動服務器
    app.run(debug=True, host='0.0.0.0', port=5000) 