#!/usr/bin/env python3
"""
Static File Server
用於測試靜態文件的簡單 HTTP 服務器
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

def start_static_server():
    """啟動靜態文件服務器"""
    
    # 檢查 static 目錄是否存在
    static_dir = Path('static')
    if not static_dir.exists():
        print("❌ Error: static/ 目錄不存在！")
        print("   請確認所有文件都在 static/ 目錄中")
        return
    
    # 檢查 index.html 是否存在
    index_file = static_dir / 'index.html'
    if not index_file.exists():
        print("❌ Error: static/index.html 不存在！")
        print("   請確認 index.html 文件在 static/ 目錄中")
        return
    
    # 檢查是否在正確的目錄
    if not os.path.exists('index.html'):
        print("❌ Error: index.html 不存在！")
        print("   請確認 index.html 文件在當前目錄中")
        return
    
    # 設置端口
    PORT = 8000
    
    # 創建服務器
    Handler = http.server.SimpleHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print("🚀 Starting Static File Server...")
            print("📁 Serving files from: current directory")
            print("🌐 Server URL: http://localhost:8000")
            print("📧 Contact form: Formspree (no backend needed)")
            print("\n⚠️  Remember to:")
            print("   1. Update YOUR_FORM_ID in index.html")
            print("   2. Register at https://formspree.io/")
            print("   3. Get your form ID and replace it")
            print("\n" + "="*50)
            print("Press Ctrl+C to stop the server")
            print("="*50)
            
            # 自動打開瀏覽器
            webbrowser.open(f'http://localhost:{PORT}')
            
            # 啟動服務器
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n🛑 Server stopped by user")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Error: Port {PORT} is already in use")
            print("   Try using a different port or stop the existing server")
        else:
            print(f"❌ Error: {e}")
    except Exception as e:
        print(f"❌ Unexpected error: {e}")

if __name__ == '__main__':
    start_static_server() 