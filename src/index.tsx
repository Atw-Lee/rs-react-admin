/*
 * @Author: atwlee
 * @Date: 2024-12-10 15:06:45
 * @LastEditors: atwlee
 * @LastEditTime: 2024-12-10 18:16:35
 * @Description: 
 * @FilePath: /rsbuild-project/src/index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import './main.css'

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
