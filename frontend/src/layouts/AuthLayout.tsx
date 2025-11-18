// frontend/src/layouts/AuthLayout.tsx
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-surface-base relative overflow-hidden">
      {/* 背景裝飾：利用絕對定位的漸層圓球，增加視覺豐富度 */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-DEFAULT/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* 主要內容容器 */}
      <div className="w-full max-w-md px-4 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-content-primary mb-2">
            {title || 'Welcome Back'}
          </h1>
          {subtitle && (
            <p className="text-content-secondary text-sm">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* 這裡會插入 LoginPage 或 SignupPage 的卡片內容 */}
        {children}
        
        {/* 版權宣告或額外連結 */}
        <div className="mt-8 text-center text-xs text-content-muted">
          &copy; {new Date().getFullYear()} Online Editor. All rights reserved.
        </div>
      </div>
    </div>
  );
}