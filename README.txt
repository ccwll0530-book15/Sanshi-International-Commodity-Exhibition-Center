# 三氏國際商城：Supabase 雲端訂單串接檔案

## 這次修改
- `app.js`：將結帳送出改為呼叫 Supabase Edge Function `create-order`。
- `supabase-config.js`：填入 Supabase Project URL 與 Publishable key。
- `index.html`：加入設定檔載入順序，並更新測試版說明。

## 安裝步驟
1. 先備份原本網站的 `app.js` 與 `index.html`。
2. 將本資料夾內 `app.js`、`index.html` 上傳並取代網站同名檔案。
3. 將 `supabase-config.js` 新增到與 `index.html`、`app.js` 相同的根目錄。
4. 編輯 `supabase-config.js`：
   - `url` 填 Supabase Project URL（例如 `https://你的專案ID.supabase.co`）。
   - `publishableKey` 填 `sb_publishable_` 開頭的 Publishable key。
5. 不要把 `sb_secret_`、`service_role` 或資料庫密碼放進任何前端檔案。
6. 重新部署網站，使用測試資料送出一筆訂單，再到 Supabase Table Editor → `public.orders` 確認新增資料。

## 注意
- 本版本所有訂單會先設定為 `quote_pending`，`subtotal` 為空值，因為目前還沒有可信任的雲端商品價格資料表；不要把瀏覽器傳入的價格當作實際應收金額。
- 客製圖片目前仍只預覽於顧客瀏覽器，訂單只保存圖片檔名，不會保存圖片本身。
- 「商品設定」視窗內的舊本機測試訂單區不會顯示雲端訂單；下一階段會建立獨立、需登入的商家訂單管理後台。
- `create-order` 目前是可公開呼叫的接單端點，正式公開前應加上防機器人驗證、速率限制及重複送單保護。
