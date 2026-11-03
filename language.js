(() => {
  const TEXT = {
  "三氏國際商城": "Three Clans International Mall",
  "三氏國際商城 LOGO": "Three Clans International Mall Logo",
  "測試版提示": "DEMO VERSION",
  "商品價格與部分規格尚待填寫；目前訂單、設定與照片預覽只存在此瀏覽器，尚未連接真正的收款、雲端訂單或照片上傳服務。": "Product prices and some specifications are still pending. Orders, settings, and photo previews are stored only in this browser. Live payments, cloud orders, and photo uploads are not connected.",
  "商城首頁": "Store Home",
  "生活居家": "Home & Living",
  "收藏收納": "Collectibles & Storage",
  "穿搭配件": "Apparel & Accessories",
  "特色設計": "Featured Designs",
  "商品設定": "Product Settings",
  "購物車": "Cart",
  "把喜歡的圖片，變成專屬於你的商品。": "Turn the images you love into products made just for you.",
  "購物須知": "Shopping Guide",
  "客製流程": "How to Order",
  "常見問題": "FAQ",
  "服務提醒": "Important Notes",
  "下單前請確認圖片授權、尺寸、材質、價格及交期。": "Before ordering, confirm image permissions, size, materials, price, and production time.",
  "此版本為可測試的前端原型。": "This is a front-end demo prototype.",
  "回商城首頁": "Back to Store Home",
  "把喜歡的圖片，": "Turn your favorite images",
  "專屬商品。": "products made just for you.",
  "照片海報、抱枕、毛毯、門簾、穿搭配件與收藏用品。挑選喜歡的商品，打造屬於自己的風格與回憶。": "Explore photo posters, pillows, blankets, curtains, apparel, and collector accessories. Choose your favorites and create your own style and memories.",
  "探索所有商品": "Explore All Products",
  "了解客製流程": "How Customization Works",
  "✦ 專屬你的創意": "Your Ideas, Your Style",
  "個人化商品": "Personalized Products",
  "讓喜歡的圖案展現你的風格": "Show your style with designs you love",
  "多種品項選擇": "Many Products to Choose From",
  "居家、穿搭、收藏一次探索": "Explore home, fashion, and collectibles",
  "紀念與送禮靈感": "Gift & Keepsake Ideas",
  "為每一份想法找到商品": "Find a product for every idea",
  "探索客製化商品": "Explore Personalized Products",
  "先看商品影片，再進入詳情確認規格、客製方式與訂購資訊。": "Watch the product video, then check specifications, customization options, and ordering details.",
  "搜尋商品名稱或用途": "Search by product or use",
  "找不到符合的商品": "No matching products found",
  "請試試其他關鍵字或選擇「全部商品」。": "Try another keyword or select “All Products.”",
  "從一張圖片，開始專屬創作。": "Start creating something special from one image.",
  "每個商品可設定適用的圖片、尺寸、材質與訂購規格。尚未確認的商品資訊會清楚標示，避免誤會。": "Each product can have its own image, size, material, and ordering options. Unconfirmed details are clearly marked to avoid confusion.",
  "選擇商品": "Choose a Product",
  "確認規格": "Confirm Specifications",
  "提交訂購": "Place an Order",
  "簡單四步驟": "Four Easy Steps",
  "客製商品下單前，請先確認商品規格及圖片授權。": "Before ordering a personalized product, confirm the specifications and image permissions.",
  "挑選商品": "Choose a Product",
  "打開商品頁，觀看影片與了解用途。": "Open the product page to watch the video and learn more.",
  "確認客製規格": "Confirm Customization",
  "選擇規格並預覽要使用的圖片；正式上傳功能需連接後端。": "Choose your options and preview your image. Live uploads require a connected backend.",
  "填寫訂購資料": "Enter Order Details",
  "確認數量、聯絡方式、配送方式與備註。": "Confirm quantity, contact details, shipping method, and notes.",
  "確認訂單": "Review Your Order",
  "此測試版會在本機保存測試訂單；正式收款前需完成金流串接。": "This demo saves test orders locally. Payment processing must be connected before accepting real payments.",
  "商品價格為什麼顯示待設定？": "Why does the product price say “To Be Set”?",
  "目前未收到供應商完整報價，請從右上角「商品設定」填入售價後，網站才會顯示正式價格。": "Supplier pricing has not been finalized. Enter a price in “Product Settings” at the top right to display it on the site.",
  "選擇的照片會送到店家嗎？": "Will my selected photo be sent to the store?",
  "目前只是前端預覽測試，照片不會上傳到店家。正式營運需建立安全的檔案上傳及訂單管理服務。": "This demo only previews the photo locally; it is not uploaded to the store. A secure upload and order-management service is required for live operation.",
  "現在可以線上付款嗎？": "Can I pay online now?",
  "尚未串接金流，所以不能真正收款。此版本只測試商品選擇、購物車及訂購資料流程。": "Payment processing is not connected, so real payments are unavailable. This version only tests product selection, the cart, and order details.",
  "可以使用任何圖片嗎？": "Can I use any image?",
  "請使用自己拍攝、自己創作或已取得合法授權的圖片，避免侵害他人著作權、肖像權或商標權。": "Use photos you took, artwork you created, or images you are authorized to use. Do not infringe copyright, personality rights, or trademarks.",
  "▶ 觀看商品影片": "▶ Watch Product Video",
  "客製商品": "Personalized Product",
  "商品詳情": "Product Details",
  "加入購物車": "Add to Cart",
  "價格待設定": "Price To Be Confirmed",
  "價格待確認": "Price To Be Confirmed",
  "已加入購物車": "Added to cart",
  "預設": "Default",
  "首頁": "Home",
  "商品示意圖": "Product Preview",
  "商品介紹影片｜可按播放查看你提供的產品展示內容": "Product video | Press play to view the product demonstration video.",
  "商品價格已設定，實際運費與製作費以結帳前確認為準。": "The product price is set. Shipping and production costs will be confirmed before checkout.",
  "目前價格尚未設定。可先建立詢價／測試訂單；正式開賣前請在「商品設定」填入報價。": "The price has not been set. You may create a quote request/test order. Enter the price in Product Settings before launching.",
  "商品尺寸": "Size",
  "材質規格": "Material",
  "客製方式": "Customization",
  "製作／交期": "Production / Lead Time",
  "待確認": "To be confirmed",
  "待填入供應商交期": "Enter supplier lead time",
  "商品規格／款式": "Product Option / Style",
  "標準規格（下單前確認）": "Standard option (confirm before ordering)",
  "數量": "Quantity",
  "件": "item(s)",
  "客製需求／圖案備註（選填）": "Customization Request / Design Notes (Optional)",
  "例如：預計使用的照片、裁切方向、印製位置或其他需求": "E.g. photo to use, crop direction, print placement, or other requests",
  "選擇圖片（本機預覽測試）": "Choose Image (Local Preview Only)",
  "請選擇 JPG、PNG 或 WebP 圖片。此版本只在本機預覽，並不會傳送到商家。": "Choose a JPG, PNG, or WebP image. This version only previews it locally; the image is not sent to the seller.",
  "所選圖片預覽": "Selected Image Preview",
  "下單前請確認照片擁有合法使用權。此測試版不會真正收款，也不會自動傳送訂單給商家；未填寫的尺寸、材質、價格與交期需先向供應商確認。": "Before ordering, ensure you have permission to use the photo. This demo does not process payments or send orders to the seller. Confirm any missing size, material, price, and lead-time details with the supplier.",
  "立即訂購／詢價": "Order Now / Request a Quote",
  "商品介紹": "Product Description",
  "適合個人收藏、生活佈置或紀念送禮。請依商品設定確認規格、可印製範圍及生產要求；印製顏色可能因螢幕、材質與印刷方式而有所差異。": "Suitable for collecting, home décor, and commemorative gifts. Check product settings for specifications, printable areas, and production requirements. Printed colors may vary by screen, material, and printing method.",
  "購物車還是空的": "Your cart is empty",
  "看看有哪些商品能把你的創意變成日常用品。": "Explore products that bring your ideas into everyday life.",
  "前往挑選商品": "Browse Products",
  "我的購物車": "My Cart",
  "請確認商品、數量及客製需求。標示「價格待設定」的商品會作為詢價項目，不代表已確認售價。": "Review products, quantities, and customization requests. Items marked “Price To Be Confirmed” are quote requests, not confirmed prices.",
  "規格：": "Option: ",
  "客製備註：": "Customization notes: ",
  "未填寫": "Not provided",
  "已選圖片：": "Selected image: ",
  "（未上傳）": "(not uploaded)",
  "移除": "Remove",
  "訂單摘要": "Order Summary",
  "商品數量": "Quantity",
  "商品小計": "Subtotal",
  "部分商品待報價": "Some items need a quote",
  "運費": "Shipping",
  "結帳前確認": "To be confirmed at checkout",
  "目前至少一款商品尚未設定售價，提交後仍需人工確認報價。": "At least one item has no price yet. A manual quote will be needed after submission.",
  "此金額為商品小計，運費及其他費用尚未計算。": "This is the product subtotal only; shipping and other fees are not included.",
  "繼續購物": "Continue Shopping",
  "請填寫聯絡方式及配送資訊。送出後目前只會在此瀏覽器建立測試訂單，不會自動通知商家或扣款。": "Enter your contact and shipping details. Submission creates a test order in this browser only; it will not notify the seller or charge you.",
  "聯絡與配送資料": "Contact & Shipping Details",
  "姓名／收件人 *": "Name / Recipient *",
  "請填寫姓名": "Enter your name",
  "聯絡電話 *": "Phone Number *",
  "電子郵件（選填）": "Email (Optional)",
  "配送方式 *": "Shipping Method *",
  "請選擇配送方式": "Select a shipping method",
  "宅配（運費待確認）": "Home delivery (shipping fee to be confirmed)",
  "超商取貨（需確認商品尺寸與平台支援）": "Convenience-store pickup (subject to size and platform support)",
  "其他／與賣家確認": "Other / confirm with seller",
  "配送地址／取貨備註 *": "Shipping Address / Pickup Notes *",
  "請填寫可聯絡的配送資訊": "Enter shipping details where you can be reached",
  "整筆訂單備註（選填）": "Order Notes (Optional)",
  "例如希望聯絡的時段、分批寄送需求": "E.g. preferred contact time or split-shipment request",
  "我已確認商品內容與圖片使用權，並了解此頁為測試版本，送出不代表已付款或正式成立製作訂單。*": "I have reviewed the product details and image rights, and understand this is a demo. Submission does not mean payment or a confirmed production order. *",
  "送出測試訂單／詢價單": "Submit Test Order / Quote Request",
  "請勿在此測試網站輸入信用卡資料或其他不必要的敏感資訊。": "Do not enter credit-card details or other unnecessary sensitive information on this demo site.",
  "你的商品": "Your Items",
  "待報價": "Quote Required",
  "正式營運前還需要：安全的照片上傳儲存、商家訂單後台、訂單通知、付款金流、配送及退換貨流程。": "Before launch, you will need secure image storage, an order-management dashboard, order notifications, payment processing, shipping, and returns workflows.",
  "返回購物車修改": "Return to Cart",
  "測試訂單已建立": "Test Order Created",
  "表單已在目前瀏覽器建立測試記錄。": "A test record has been created in this browser.",
  "這不代表賣家已收到訂單，也沒有完成付款。": "This does not mean the seller received the order, and no payment was made.",
  "訂單編號：": "Order ID: ",
  "商品項目：": "Items: ",
  "聯絡人：": "Contact: ",
  "訂單狀態：": "Order Status: ",
  "金額：": "Amount: ",
  "下載這筆測試訂單 JSON": "Download This Test Order as JSON",
  "返回商城": "Return to Store",
  "要開始真正接單，下一步要把訂單儲存到雲端並串接通知與金流服務。": "To accept real orders, connect cloud order storage, notifications, and a payment provider.",
  "找不到這個頁面": "Page Not Found",
  "請返回商城首頁繼續探索。": "Return to the store homepage to continue browsing.",
  "回首頁": "Back to Home",
  "已匯出目前瀏覽器內的測試訂單": "Test orders from this browser have been exported",
  "已匯出商品設定": "Product settings exported",
  "商品設定與訂單匯出": "Product Settings & Order Export",
  "LOCAL SETUP": "LOCAL SETUP",
  "設定會儲存在目前瀏覽器。這不會自動更新其他裝置，也不會把顧客訂單傳給你。正式營運前需串接雲端資料庫與訂單通知。": "Settings are saved in this browser only. They do not sync to other devices or send customer orders to you. Connect a cloud database and order notifications before launch.",
  "匯出測試訂單 JSON": "Export Test Orders JSON",
  "匯出商品設定 JSON": "Export Product Settings JSON",
  "匯入商品設定": "Import Product Settings",
  "還原預設": "Reset Defaults",
  "目前瀏覽器內的測試訂單": "Test Orders in This Browser",
  "售價（台幣；空白代表待報價）": "Price (TWD; leave blank for quote)",
  "例如 350": "e.g. 350",
  "尺寸規格": "Size Specifications",
  "填入供應商尺寸": "Enter supplier size",
  "填入供應商材質": "Enter supplier material",
  "照片／圖案／位置等": "Photo / design / placement, etc.",
  "可選規格（逗號分隔）": "Options (comma-separated)",
  "例如：A款, B款, L, XL": "e.g. Option A, Option B, L, XL",
  "例如 5–7 個工作天": "e.g. 5–7 business days",
  "儲存商品": "Save Product",
  "已儲存 ✓": "Saved ✓",
  "設定會儲存在目前瀏覽器": "Settings are saved in this browser",
  "目前沒有測試訂單。送出結帳表單後會顯示於這裡（只限這個瀏覽器）。": "No test orders yet. Orders submitted through checkout will appear here (in this browser only).",
  "確定將商品設定還原為預設內容？已設定的價格與規格會被清除。": "Reset all product settings to defaults? Saved prices and specifications will be cleared.",
  "已還原預設商品設定": "Product settings restored to defaults",
  "商品設定已儲存在本機": "Product settings saved locally",
  "商品設定匯入完成": "Product settings imported",
  "匯入失敗：請選擇有效的商品設定 JSON": "Import failed: please choose a valid product settings JSON file",
  "聯絡電話": "Phone",
  "測試／待人工確認": "Demo / Awaiting Manual Review",
  "A3 客製化海報": "Custom A3 Poster",
  "把喜歡的圖片變成牆上的主角。適合房間佈置、收藏畫面與個人風格展示。": "Turn your favorite image into wall art. Great for room decor, display pieces, and expressing your personal style.",
  "A3（依供應商規格確認）": "A3 (confirm final specifications with the supplier)",
  "紙材／印刷規格待確認": "Paper and printing specifications to be confirmed",
  "A4 客製化掛報": "Custom A4 Wall Poster",
  "把手機裡的照片變成可以展示的掛報，為房間留下一個專屬角落。": "Turn a photo on your phone into a display poster and create a special corner in your room.",
  "A4（依供應商規格確認）": "A4 (confirm final specifications with the supplier)",
  "六芒星能量坐墊": "Six-Pointed Star Numerology Cushion",
  "結合六芒星視覺與個人數字概念，打造具有個人風格的坐墊設計。": "A personalized cushion design combining six-pointed-star visuals with an individual number concept.",
  "40 × 40 cm（依影片標示；下單前請確認）": "40 × 40 cm (shown in the video; confirm before ordering)",
  "布料／填充物待確認": "Fabric and filling to be confirmed",
  "數字或圖案客製，流程待設定": "Custom numbers or artwork; process to be confirmed",
  "小卡收藏卡冊": "Photocard Collector Binder",
  "讓喜愛的小卡整齊收納、方便展示，為收藏建立自己的整理方式。": "Keep your favorite photocards neatly stored and easy to display with an organized collection system.",
  "尺寸與容量待確認": "Size and capacity to be confirmed",
  "封面／內頁材質待確認": "Cover and page materials to be confirmed",
  "依實際款式選擇": "Choose from available styles",
  "PP 小卡連身收藏袋": "PP Photocard Storage Sleeve",
  "小卡收納整理好幫手，讓收藏更整齊，也更容易攜帶與整理。": "A handy way to keep photocards organized and make your collection easier to carry and sort.",
  "PP（依商品影片名稱；詳情待供應商確認）": "PP (based on the product video title; confirm details with the supplier)",
  "客製化方形照片抱枕": "Custom Square Photo Pillow",
  "將喜歡的照片或圖案變成方形抱枕，適合居家擺設與紀念送禮。": "Turn a favorite photo or design into a square pillow for home decor or a meaningful gift.",
  "客製化法蘭絨毛毯": "Custom Flannel Blanket",
  "把喜歡的照片或圖案印製在毛毯上，打造自己的居家風格與紀念用品。": "Print a favorite photo or design on a blanket to create personalized home decor or a keepsake.",
  "尺寸選項待確認": "Available sizes to be confirmed",
  "法蘭絨（依商品名稱；具體成分待確認）": "Flannel (based on the product name; exact composition to be confirmed)",
  "客製化浴巾": "Custom Bath Towel",
  "將個人喜歡的圖案融入日常用品，打造更有個人特色的浴巾。": "Bring a favorite design into your everyday routine with a personalized bath towel.",
  "纖維成分與克重待確認": "Fiber content and fabric weight to be confirmed",
  "圖案印製，規格待確認": "Printed design; specifications to be confirmed",
  "客製化純棉短袖 T 恤": "Custom Cotton T-Shirt",
  "把自己的圖案或設計穿出門，適合個人穿搭、團體活動與紀念用途。": "Wear your own artwork or design. Great for personal style, group events, and commemorative wear.",
  "尺寸／版型待確認": "Sizes and fit to be confirmed",
  "純棉（依商品名稱；比例待確認）": "Cotton (based on the product name; exact percentage to be confirmed)",
  "圖案／印製位置待確認": "Artwork and print placement to be confirmed",
  "客製化長形抱枕": "Custom Long Pillow",
  "長形抱枕搭配喜歡的圖片，讓房間、床鋪或休息角落更有個人風格。": "Add your favorite image to a long pillow and bring personal style to your bedroom, bed, or relaxation space.",
  "客製化門簾": "Custom Printed Door Curtain",
  "用喜歡的圖片為空間增添風格，讓房間入口也能展現個人特色。": "Add a favorite image to your space and give your doorway a more personal look.",
  "尺寸／安裝方式待確認": "Size and installation method to be confirmed",
  "布料待確認": "Fabric to be confirmed",
  "圖片印製": "Image printing",
  "客製化黑肩購物袋": "Custom Black Shoulder Tote Bag",
  "把喜歡的圖片帶著走，成為日常外出與收納時的個人風格配件。": "Carry your favorite image with you in a personalized bag for everyday outings and storage.",
  "尺寸／容量待確認": "Size and capacity to be confirmed",
  "客製化商品商城": "Personalized Product Store",
  "變成": "into ",
  "© 三氏國際商城｜客製化商品商城": "© Three Clans International Mall | Personalized Products",
  "客製化商品展示": "Personalized product display",
  "語言切換": "Language selector",
  "語言": "Language",
  "照片／圖片印製": "Photo/image printing",
  "開啟選單": "Open menu",
  "你的瀏覽器不支援影片播放。": "Your browser does not support video playback.",
  "分類": "Category",
  "合計": "Total",
  "探索所有商品　↗": "Explore All Products ↗",
  "商品影片": "Product Videos",
  "三氏商品介紹影片": "San Shi Product Videos",
  "觀看你提供的 YouTube 影片播放清單，認識商品與展示內容。": "Watch the YouTube playlist you provided to learn about products and see demonstrations.",
  "在 YouTube 開啟完整播放清單 ↗": "Open the full playlist on YouTube ↗",
  "三氏國際商城商品影片播放清單": "San Shi International Mall Product Video Playlist",
  "影片由 YouTube 播放，需要網路連線。因目前提供的是整份播放清單，個別商品尚未逐支對應到指定影片。": "Videos are streamed by YouTube and require an internet connection. The supplied link is a playlist, so individual videos have not yet been mapped to specific products.",
  "商品介紹影片播放清單｜可在播放器中切換清單內的影片。": "Product video playlist | Use the player to switch between videos in the playlist.",
  "選擇商品圖片": "Choose Product Image",
  "恢復預設圖片": "Restore Default Image",
  "目前使用現有圖片": "Current image in use",
  "可上傳 JPG、PNG 或 WebP；圖片會縮小後保存在這台裝置的瀏覽器。其他訪客不會自動同步。": "Upload JPG, PNG, or WebP. The image is resized and saved in this device's browser; other visitors will not see it automatically.",
  "正在處理圖片…": "Processing image…",
  "已選擇圖片（按「儲存商品」後生效）": "Image selected (click Save Product to apply)",
  "已選擇預設圖片（按「儲存商品」後生效）": "Default image selected (click Save Product to apply)",
  "圖片已儲存（本機）": "Image saved locally",
  "圖片未更新": "Image not changed",
  "請使用 JPG、PNG 或 WebP 圖片": "Please use a JPG, PNG, or WebP image",
  "圖片檔案需小於 12MB": "Image file must be smaller than 12 MB",
  "無法讀取圖片": "Unable to read image",
  "圖片格式無法讀取": "This image format could not be read",
  "目前瀏覽器無法處理圖片": "This browser cannot process the image",
  "圖片處理失敗": "Image processing failed",
  "儲存空間不足。請改用較小的圖片，或匯出商品設定備份後再試。": "Not enough browser storage. Try a smaller image or export a product-settings backup and try again.",
  "商品資料與圖片已儲存在本機": "Product details and image saved locally",

  "每支影片都已對應到指定商品，點選商品卡可查看規格與該商品影片。": "Each video is matched to its product. Select a product card to view its specifications and video.",
  "影片對應商品：": "Video for product: ",
  "查看商品與規格": "View product and specifications",
  "在 YouTube 觀看此影片 ↗": "Watch this video on YouTube ↗",
  "本影片對應商品：": "This video matches: ",
  "壓克力鑰匙扣": "Acrylic Keychain",
  "客製壓克力鑰匙扣，可依供應商提供的尺寸與普通／鐳射款式選擇；正式售價與規格下單前待確認。": "Custom acrylic keychain with sizes and standard or laser-style options subject to supplier confirmation. Final price and specifications must be confirmed before ordering.",
  "4／5／6／7 cm（以供應商實際規格為準）": "4 / 5 / 6 / 7 cm (confirm final specifications with the supplier)",
  "壓克力": "Acrylic",
  "普通款／鐳射款；圖案印製規格待確認": "Standard / laser styles; printing specifications to be confirmed",
  "小卡連身收藏袋": "Photocard Storage Sleeve",
  "已將 13 支影片分別對應至商品。": "All 13 videos have been mapped to their respective products.",
  "在 YouTube 開啟完整播放清單 ↗": "Open the full playlist on YouTube ↗",
  "商品圖片預設使用對應影片的縮圖；可在「商品設定」更換成正式商品照片。": "Product images default to matching video thumbnails. Replace them with actual product photos in Product Settings.",
  "普通款 4 cm": "Standard 4 cm",
  "普通款 5 cm": "Standard 5 cm",
  "普通款 6 cm": "Standard 6 cm",
  "普通款 7 cm": "Standard 7 cm",
  "鐳射款 4 cm": "Laser 4 cm",
  "鐳射款 5 cm": "Laser 5 cm",
  "鐳射款 6 cm": "Laser 6 cm",
  "鐳射款 7 cm": "Laser 7 cm"
};
  // Catalog V1.9: register English names, descriptions, and all imported category labels before building reverse lookup.
  for (const p of (window.CUSTOM_PRODUCTS || [])) {
    if (p.name && p.enName) TEXT[p.name] = p.enName;
    if (p.description && p.enDescription) TEXT[p.description] = p.enDescription;
    if (p.category && p.enCategory) TEXT[p.category] = p.enCategory;
  }
  TEXT['全部商品'] = 'All Products';
  TEXT['多規格原表價（幣別待確認）'] = 'Multiple catalogue prices (currency unconfirmed)';
  TEXT['原表價依規格確認（幣別待確認）'] = 'Catalogue price to be confirmed (currency unconfirmed)';
  TEXT['價格待確認'] = 'Price to be confirmed';
  TEXT['原始目錄規格／價格（'] = 'Catalogue specifications / prices (';
  TEXT['選擇圖片'] = 'Choose image';
  TEXT['全部分類'] = 'All categories';
  TEXT['顯示更多商品'] = 'Show more products';
  TEXT['原始目錄內容'] = 'Original catalogue details';
  const REVERSE = Object.create(null);
  Object.entries(TEXT).forEach(([zh, en]) => { if (!(en in REVERSE)) REVERSE[en] = zh; });
  REVERSE['All Products'] = '全部商品';
  REVERSE['Multiple catalogue prices (currency unconfirmed)'] = '多規格原表價（幣別待確認）';
  REVERSE['Price to be confirmed'] = '價格待確認';
  window.SANSI_PRODUCT_EN = {
    'a3-poster': 'Custom A3 Poster Turn your favorite image into wall art. Great for room decor, display pieces, and expressing your personal style. Home & Living',
    'a4-poster': 'Custom A4 Wall Poster Turn a photo on your phone into a display poster and create a special corner in your room. Home & Living',
    'six-star-cushion': 'Six-Pointed Star Numerology Cushion A personalized cushion design combining six-pointed-star visuals with an individual number concept. Featured Designs',
    'photocard-binder': 'Photocard Collector Binder Keep your favorite photocards neatly stored and easy to display with an organized collection system. Collectibles & Storage',
    'photocard-sleeve': 'Photocard Storage Sleeve A handy way to keep photocards organized and make your collection easier to carry and sort. Collectibles & Storage',
    'square-pillow': 'Custom Square Photo Pillow Turn a favorite photo or design into a square pillow for home decor or a meaningful gift. Home & Living',
    'flannel-blanket': 'Custom Flannel Blanket Print a favorite photo or design on a blanket to create personalized home decor or a keepsake. Home & Living',
    'bath-towel': 'Custom Bath Towel Bring a favorite design into your everyday routine with a personalized bath towel. Home & Living',
    'cotton-tshirt': 'Custom Cotton T-Shirt Wear your own artwork or design. Great for personal style, group events, and commemorative wear. Apparel & Accessories',
    'long-pillow': 'Custom Long Pillow Add your favorite image to a long pillow and bring personal style to your bedroom, bed, or relaxation space. Home & Living',
    'door-curtain': 'Custom Printed Door Curtain Add a favorite image to your space and give your doorway a more personal look. Home & Living',
    'black-tote': 'Custom Black Shoulder Tote Bag Carry your favorite image with you in a personalized bag for everyday outings and storage. Apparel & Accessories',
    'acrylic-keychain': 'Acrylic Keychain Custom acrylic keychain with sizes and standard or laser-style options. Featured Designs'
  };
  const LANG_KEY = 'sansi_store_language_v1';
  let language = localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'zh';
  const langSelect = document.getElementById('languageSelect');
  const zhMeta = '三氏國際商城：客製化商品：照片海報、抱枕、毛毯、門簾、服飾與收藏收納用品。';
  const enMeta = 'Three Clans International Mall: personalized products including photo posters, pillows, blankets, curtains, apparel, and collector accessories.';
  const zhTitle = '三氏國際商城｜客製化商品商城';
  const enTitle = 'Three Clans International Mall | Personalized Products';
  function translateString(value) {
    if (typeof value !== 'string') return value;
    const trimmed = value.trim();
    if (!trimmed) return value;
    if (language === 'en' && trimmed.endsWith('商品示意圖')) {
      const baseName = trimmed.slice(0, -5);
      const enName = TEXT[baseName];
      if (enName) return value.replace(trimmed, `${enName} product preview`);
    }
    if (language === 'zh' && trimmed.endsWith(' product preview')) {
      const baseName = trimmed.slice(0, -16);
      const zhName = REVERSE[baseName];
      if (zhName) return value.replace(trimmed, `${zhName}商品示意圖`);
    }
    const qtyEn = trimmed.match(/^(\d+) 件$/);
    if (language === 'en' && qtyEn) return value.replace(trimmed, `${qtyEn[1]} item${Number(qtyEn[1]) === 1 ? '' : 's'}`);
    const qtyZh = trimmed.match(/^(\d+) items?$/i);
    if (language === 'zh' && qtyZh) return value.replace(trimmed, `${qtyZh[1]} 件`);
    const translated = language === 'en' ? TEXT[trimmed] : REVERSE[trimmed];
    if (!translated) return value;
    const lead = value.match(/^\s*/)?.[0] || '';
    const trail = value.match(/\s*$/)?.[0] || '';
    return lead + translated + trail;
  }
  function translateNode(node) {
    if (!node) return;
    if (node.nodeType === Node.TEXT_NODE) {
      const translated = translateString(node.nodeValue);
      if (translated !== node.nodeValue) node.nodeValue = translated;
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (node.matches?.('[data-no-translate]')) return;
    for (const attr of ['placeholder','title','aria-label','alt']) {
      if (node.hasAttribute?.(attr)) {
        const oldValue = node.getAttribute(attr);
        const newValue = translateString(oldValue);
        if (newValue !== oldValue) node.setAttribute(attr, newValue);
      }
    }
    if (node.tagName === 'META' && node.name === 'description') node.content = language === 'en' ? enMeta : zhMeta;
    for (const child of node.childNodes) translateNode(child);
  }
  function applyLanguage() {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-Hant';
    document.title = language === 'en' ? enTitle : zhTitle;
    translateNode(document.body);
    if (langSelect) langSelect.value = language;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = language === 'en' ? enMeta : zhMeta;
  }
  if (langSelect) {
    langSelect.value = language;
    langSelect.addEventListener('change', () => {
      language = langSelect.value === 'en' ? 'en' : 'zh';
      localStorage.setItem(LANG_KEY, language);
      applyLanguage();
    });
  }
  applyLanguage();
  const observer = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'characterData') translateNode(record.target);
      else if (record.type === 'attributes') translateNode(record.target);
      else record.addedNodes.forEach(translateNode);
    }
  });
  observer.observe(document.body, {subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['placeholder','title','aria-label','alt']});
  window.SansiLanguage = { get current() { return language; }, set(value) { language = value === 'en' ? 'en' : 'zh'; localStorage.setItem(LANG_KEY, language); applyLanguage(); } };
})();
