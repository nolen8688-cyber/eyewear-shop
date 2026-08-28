# 建德眼鏡

眼鏡行官方網站，純 HTML / CSS / JavaScript 靜態網站（無後端）。

## 網站架構

| 頁面 | 檔案 | 內容 |
|---|---|---|
| 首頁 | `index.html` | 品牌形象、精選商品、最新消息預覽 |
| 最新消息 | `news.html` | 圖文消息列表 |
| 商品專區 | `products.html` | 產品介紹、分類篩選、人氣好評 |
| 優惠活動 | `promotions.html` | 促銷活動、會員專屬優惠（UI 預留，未接後端） |
| 聯絡我們 | `contact.html` | 客服資訊、線上客服表單 |
| 常見問題 | `faq.html` | 購物流程、線上購物指南、支付方式、配送與退換貨政策 |

會員登入／註冊功能本階段未開發，優惠活動頁的「會員專屬」區塊僅為 UI 預留位置。

## 本機預覽

純靜態網站，用瀏覽器打開 `index.html` 即可預覽；若要讓頁面間的 fetch/連結行為與正式環境一致，建議啟動簡易伺服器：

```bash
python3 -m http.server 8000
```

再瀏覽 `http://localhost:8000`。

## 開發流程（Git Flow）

本專案採用 Git Flow 分支策略：

- `main`：正式上線版本
- `develop`：開發整合分支
- `feature/*`：個別功能開發分支，完成後合併回 `develop`
- `release/*`：發布前整合測試分支
- `hotfix/*`：正式版緊急修復分支

## 目錄結構

```
eyewear-shop/
├── index.html
├── news.html
├── products.html
├── promotions.html
├── contact.html
├── faq.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
```
