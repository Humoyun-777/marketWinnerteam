let currentLanguage = 'uz';
        let currentCategory = 'all';
        let cartItems = [];

        const translations = {
            uz: {
                search: 'Qidiruv...',
                all: 'Hammasi',
                electronics: 'Elektronika',
                fashion: 'Kiyim',
                home: 'Uy mollari',
                books: 'Kitoblar',
                sports: 'Sport',
                addCart: 'Savatchaga qo\'shish',
                noProducts: '❌ Mahsulot topilmadi',
                myCart: '🛍️ Mening Savatim',
                empty: 'Savat bo\'sh',
                total: 'Jami:',
                checkout: 'Buyurtmani tasdiqlash',
                remove: 'O\'chirish'
            },
            ru: {
                search: 'Поиск...',
                all: 'Все',
                electronics: 'Электроника',
                fashion: 'Одежда',
                home: 'Товары для дома',
                books: 'Книги',
                sports: 'Спорт',
                addCart: 'Добавить в корзину',
                noProducts: '❌ Продукт не найден',
                myCart: '🛍️ Моя корзина',
                empty: 'Корзина пуста',
                total: 'Всего:',
                checkout: 'Оформить заказ',
                remove: 'Удалить'
            },
            en: {
                search: 'Search...',
                all: 'All',
                electronics: 'Electronics',
                fashion: 'Fashion',
                home: 'Home',
                books: 'Books',
                sports: 'Sports',
                addCart: 'Add to Cart',
                noProducts: '❌ Product not found',
                myCart: '🛍️ My Cart',
                empty: 'Cart is empty',
                total: 'Total:',
                checkout: 'Checkout',
                remove: 'Remove'
            }
        };

        const products = [
    { id: 1, name: 'iPhone 15 Pro Max', price: 1499, category: 'electronics', rating: 4.9, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQWQkDGYb_VDrNkqhJji-2uU7J_WJuAMn-lR7F3mr9C-T10VZkmaiZTS2JyELLzU9RaE4e6wAi3JAxny0wAPOtGNVRvBDsC9gnPPYB8ZAcaYWBLpFldkt6brR0aYi45Zajt-nkGyKU&usqp=CAc', desc: 'Eng yangi iPhone' },
    { id: 2, name: 'Sony WH-1000XM5', price: 349, category: 'electronics', rating: 4.8, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR0vLfAiEZccrDzl6RUMKPQnqiYlj-eBGfZo4glcMoZP13wgrzvZvAgeEYCQJ0hmIm3EpH10m7tMnK-qI02ekdAwVLpvLyyKTSr47TleMNYW6Ve9N9oavFdOFW4sv1q2q3V&usqp=CAc', desc: 'Sifatli ovoz' },
    { id: 3, name: 'Nike Air Force 1', price: 120, category: 'fashion', rating: 4.7, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcROU_cVkMvz5TlOH07scbI0Nv1DBoEdtqQTWow2sjweO3me6V5kywy1hvPKglyAhat_r1654JSRYcksCSNJooORFVn3-ZRNMM76-W8-Jnky-4_vIYc&usqp=CAc', desc: 'Klassik poyabzal' },
    { id: 4, name: 'Adidas T-Shirt', price: 45, category: 'fashion', rating: 4.6, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRf1VtU-CXChHBFa3mhksqGlALqizeWzGe0CHYzp27gAq5JYjKOF6Mkm9_xQAk7q9HkXpSUqPeCGhSFxeD31ZEWb4_rzVIkplLMD66afuQQuH65W60_N99zK8kQGA&usqp=CAc', desc: 'Qulay kiyim' },
    { id: 5, name: 'Kitchen Blender Pro', price: 89, category: 'home', rating: 4.5, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSsZYVCUREGvQzq1cMA7zO2n-XbSKGnNlAqC7D2WT0_RGSsie7CZUioovbYuFzy08YpiRyQaaIqld1nEpPeEJT-vwlJUGTLm5LDkHLP_C4kOESUn4kdTWzJdehcbrhsP43KQbFbKZQ4&usqp=CAc', desc: 'Uyda foydalanish' },
    { id: 6, name: 'Premium Bed Sheets', price: 65, category: 'home', rating: 4.4, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSCKnvSN1z6uC_9aCMPG4WifDhipTiUoGxCJVOUt-MpZHvRaOEs5M_z-3iXzJF-Cg_RjioHKwa2MiZnNTrSc_eYeWtxYhG4J1j4YRaJ0Zk&usqp=CAc', desc: 'Yumshoq to\'qima' },
    { id: 7, name: 'JavaScript Guide', price: 29, category: 'books', rating: 4.9, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQCUmbAOLkdIITj-u3xJjdKoCNAc0_nZngJ1qNKsMP9xx4v_qZnAMDTlAJpALBCI3UR67WkeVPwW8FahHH-2Y5QxfzdxwQAU1fB0rKMnzcFn6EDZ0WdGLeH1jX4og&usqp=CAc', desc: 'Bilim kitob' },
    { id: 8, name: 'Yoga Mat Premium', price: 55, category: 'sports', rating: 4.6, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcREfwMWJb0bUOWTcW8IJuHIi0ErPiRxeTmHg4yrl3Vl8BEyzr3x5ZHbsWhCFIHOXrhyRvkCgXQMJYWENXKuSlS31uPtxRvtmH7yDhZ13GrOlCW-QxoEqD9cyh2tpFbnqGpnCcQdwB8&usqp=CAc', desc: 'Sport uchun' },
    { id: 9, name: 'Apple Watch Ultra', price: 799, category: 'electronics', rating: 4.8, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjLUTUJBuG6JWOw7gGz3-viSPldHBgTo_j8HEmZUAp0vqdAOs_WI95uhZ7wUNIUXPt2aB5cvRSaPsTeUIJM1ecqMGm-07WI_jL56q801n304myfTnjKzKiSuXU5Z8pcXLlVnYIsJo&usqp=CAc', desc: 'Aqlli soat' },
    { id: 10, name: 'Winter Jacket', price: 189, category: 'fashion', rating: 4.7, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS6pYHEcc8wqwDUqmxAeqEnVL11SjcRrym4iq5GAb7VeBYwQ2KYoyNvpt3URM7BB5Ln12fcAKTzhXOVba3ApKXVDgkEzXpZcdIhbZSDF0Lm9Q9dq9_KTds2CVYQgZHWNFq5OxfcXA&usqp=CAc', desc: 'Qishki shoxob' },
    { id: 11, name: 'Coffee Maker', price: 75, category: 'home', rating: 4.5, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTDV19wBRZG-CmHgnyZTUUsD194ofjtfjiyQJt4zcig_DjnXRGNiXzQq1LYRRSCLYHpXuoa0aRCNGkbHgD_Al7H0GdCLbqKFo-n1KVI4ONrfBQwrgiB44b55AqaiFJNTfU2cg&usqp=CAc', desc: 'Kofe uchun' },
    { id: 12, name: 'Dumbbell Set 20kg', price: 150, category: 'sports', rating: 4.8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYo8GIiJXN7fnrSqfuvXZHngRGkx606SSZ5g&s', desc: 'Fitnes uchun' },
    { id: 13, name: 'Samsung 4K TV', price: 599, category: 'electronics', rating: 4.7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR1iu-7ZNRhTcgS0083lZt8VV7RYtEOWBUBw&s', desc: 'Sifatli ekran' },
    { id: 14, name: 'Polo Shirt', price: 52, category: 'fashion', rating: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8K3Y5Oi5FFqA7IkUL06kX77Sc9wu4sdyurA&s', desc: 'Rasmiy kiyim' },
    { id: 15, name: 'Microwave Oven', price: 120, category: 'home', rating: 4.4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsEAQhWVMczilWu2aBqoGeey9RxQBOacCfdQ&s', desc: 'Tez tayyorlash' },
    { id: 16, name: 'Running Shoes', price: 95, category: 'sports', rating: 4.6, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS2RjP342bazffh1FTBFPyorI0rlW71x0dW9z6UEADnE_tJby_6VuV6KBZHW2RfAJ-GhlYfBRmFTDjf9z-Zv9GQqR_fqAbBZtUBmXIS7kRk&usqp=CAc', desc: 'Yugurish uchun' },
    { id: 17, name: 'MacBook Pro 14"', price: 1999, category: 'electronics', rating: 4.9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTamPCyPzpy0E8kMDUJYOUGlaSt50RDXBQtww&s', desc: 'Kuchli laptop' },
    { id: 18, name: 'Jeans Slim Fit', price: 79, category: 'fashion', rating: 4.7, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS5_TwL60GPCC8r5M_FAVZmVl3Q23XjxKspnvM8mu3Ppq2M3ygXOGGJeD3FQFMH2nfaPmA0P6Mm6o1bOLyOxM7CVPa71rA_O9mfEaZ7FkzQI8BXKr9sU1IzAg&usqp=CAc', desc: 'Qulay jins' },
    { id: 19, name: 'Vacuum Cleaner', price: 299, category: 'home', rating: 4.6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfc5EdRLS5sS5QJYGGkvAMP9CN_SnuUQauRQ&s', desc: 'Tozalash mashinasi' },
    { id: 20, name: 'Basketball Premium', price: 65, category: 'sports', rating: 4.7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-fZNdmRGScePKV7Pnf-UvGV1rWrUHm1c6RA&s', desc: 'Sifatli to\'p' },
    { id: 21, name: 'iPad Pro 12.9"', price: 1099, category: 'electronics', rating: 4.8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCcbLy_YZQuq_FoyESWdkT38JlTdr0rOkXg&s', desc: 'Katta tableta' },
    { id: 22, name: 'Designer Handbag', price: 249, category: 'fashion', rating: 4.8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp9nrEnvJA5lxIyWUfqsBhAFFBGFY48p5HwA&s', desc: 'Oqota sumka' },
    { id: 23, name: 'Air Purifier', price: 199, category: 'home', rating: 4.6, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSOXyxFELCq3y8k2amG3Q-s9u17h8zlOINWoORqYaY941UZFPooJHAqO0mV35uwHgcz4_zRDk-hdM6a9IVqOnh-2WQ-YlRCEo12WuYbDgVWF9O5e6r3Jz9Mbes&usqp=CAc', desc: 'Hava tozalash' },
    { id: 24, name: 'Tennis Racket', price: 145, category: 'sports', rating: 4.7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnMx1Iy5UG7-n40a-t4o-fFZCgvllcjGCMA&s', desc: 'Tennis uchun' },
    { id: 25, name: 'Canon EOS R5', price: 3299, category: 'electronics', rating: 4.9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwRqwrqhkCswMnCVIBD-gdXX_gTq7VlFGKTg&s', desc: 'Professional kamera' },
    { id: 26, name: 'Leather Belt', price: 49, category: 'fashion', rating: 4.6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tEi31mYHwAVQtuS1fYoTuFiMLj4Jnsg29Q&s', desc: 'Sifatli belt' },
    { id: 27, name: 'Dishwasher', price: 449, category: 'home', rating: 4.7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7b-rA8bi3HEqJ3sdSotY1dtxH5hHJtlqBJw&s', desc: 'Idish yuvish' },
    { id: 28, name: 'Swimming Goggles', price: 35, category: 'sports', rating: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjeoX76LOT_6VQH5m37qXbZtRx2hLzVEqlw&s', desc: 'Suzish uchun' },
    { id: 29, name: 'Samsung Galaxy S24', price: 999, category: 'electronics', rating: 4.8, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRQvgVzYHNtEUk4J-ZP8-9xR7V0Nu_ENRP1GMrUhdSTle2I7Gt2ijqc8-5Mk5_iS2CnFInIXZus-WwwEIbR5Uf7W6Tg3BHowUeiNHM3QX0&usqp=CAc', desc: 'Yangi telefon' },
    { id: 30, name: 'Wool Sweater', price: 89, category: 'fashion', rating: 4.7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-t6PN6fO69FHzvl0tR7XV5Pew7JqR9pJ7w&s', desc: 'Iliq kiyim' },
    { id: 31, name: 'Refrigerator', price: 899, category: 'home', rating: 4.8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9i8yIBsQypjNzexk0ofIC2-zSiMybew5dkQ&s', desc: 'Sovutgich' },
    { id: 32, name: 'Hiking Boots', price: 165, category: 'sports', rating: 4.8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTik5nG93-3Up24QanB_mlkvzpAr60JpsBpwA&s', desc: 'Turizmga' },
    { id: 33, name: 'AirPods Pro Max', price: 549, category: 'electronics', rating: 4.9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXWSygxKBBVuDrKBLDCOV1qeDzG4SWyZY2g&s', desc: 'Premium quloq' },
    { id: 34, name: 'Summer Dress', price: 59, category: 'fashion', rating: 4.6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSywsQ4L3TTSjMGQ_yAd9z8EwnBnddBnwghdA&s', desc: 'Yozgi ko\'ylak' },
    { id: 35, name: 'Washing Machine', price: 549, category: 'home', rating: 4.7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnZtYujMGhNVUBqUunxk1EDnAp6JMHqHupg&s', desc: 'Kiyim yuvish' },
    { id: 36, name: 'Golf Set', price: 399, category: 'sports', rating: 4.7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ygv54kvsUwyNFDvEvBgdzelw92tfpBhHdw&s', desc: 'Golf uchun' },
];

        function renderProducts(productsToRender = products) {
            const grid = document.getElementById('productsGrid');
            const noProducts = document.getElementById('noProducts');

            if (productsToRender.length === 0) {
                grid.innerHTML = '';
                noProducts.style.display = 'block';
                return;
            }

            noProducts.style.display = 'none';
            grid.innerHTML = productsToRender.map(p => `
                <div class="product-card">
                   <img src="${p.image}" alt="${p.name}">
                    <div class="product-info">
                        <div class="product-name">${p.name}</div>
                        <div class="product-desc">${p.desc}</div>
                        <div class="product-rating">
                            <span class="stars">${'⭐'.repeat(Math.floor(p.rating))}</span>
                            <span class="rating-text">(${p.rating})</span>
                        </div>
                        <div class="product-footer">
                            <div class="product-price">$${p.price}</div>
                            <button class="heart-btn" onclick="toggleHeart(this)">🤍</button>
                        </div>
                        <button class="add-cart-btn" onclick="addToCart(${p.id})">${translations[currentLanguage].addCart}</button>
                    </div>
                </div>
            `).join('');
        }

        function filterProducts() {
            const search = document.getElementById('searchInput').value.toLowerCase();
            const filtered = products.filter(p => 
                (p.name.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search)) &&
                (currentCategory === 'all' || p.category === currentCategory)
            );
            renderProducts(filtered);
        }

        function filterByCategory(cat) {
            currentCategory = cat;
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            event.target.classList.add('active');
            filterProducts();
        }

        function sortProducts(type) {
            let sorted = [...products];
            if (type === 'price') {
                sorted.sort((a, b) => a.price - b.price);
            } else if (type === 'rating') {
                sorted.sort((a, b) => b.rating - a.rating);
            }
            renderProducts(sorted);
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            cartItems.push(product);
            updateCartCount();
            alert(`✅ ${product.name} savatchaga qo'shildi!`);
        }

        function updateCartCount() {
            document.getElementById('cartCount').textContent = cartItems.length;
        }

        function removeFromCart(index) {
            cartItems.splice(index, 1);
            renderCart();
            updateCartCount();
        }

        function renderCart() {
            const cartItemsDiv = document.getElementById('cartItems');
            const cartSummaryDiv = document.getElementById('cartSummary');

            if (cartItems.length === 0) {
                cartItemsDiv.innerHTML = `<div class="cart-empty">${translations[currentLanguage].empty}</div>`;
                cartSummaryDiv.innerHTML = '';
                return;
            }

            cartItemsDiv.innerHTML = cartItems.map((item, index) => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price}</div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})">${translations[currentLanguage].remove}</button>
                </div>
            `).join('');

            const total = cartItems.reduce((sum, item) => sum + item.price, 0);
            cartSummaryDiv.innerHTML = `
                <div class="cart-summary">
                    <div class="cart-summary-row">
                        <span>Mahsulotlar:</span>
                        <span>${cartItems.length}</span>
                    </div>
                    <div class="cart-summary-row">
                        <span>${translations[currentLanguage].total}</span>
                        <span>$${total.toFixed(2)}</span>
                    </div>
                </div>
                <button class="checkout-btn" onclick="checkout()">${translations[currentLanguage].checkout}</button>
            `;
        }

        function openCart() {
            renderCart();
            document.getElementById('cartModal').classList.add('active');
        }

        function closeCart() {
            document.getElementById('cartModal').classList.remove('active');
        }

        function checkout() {
            if (cartItems.length === 0) {
                alert(translations[currentLanguage].empty);
                return;
            }
            const total = cartItems.reduce((sum, item) => sum + item.price, 0);
            alert(`✅ Buyurtma qabul qilindi!\nJami: $${total.toFixed(2)}\n\nRahmat!`);
            cartItems = [];
            updateCartCount();
            closeCart();
        }

        function toggleHeart(btn) {
            btn.textContent = btn.textContent === '🤍' ? '❤️' : '🤍';
        }

        function changeLanguage(lang) {
            currentLanguage = lang;
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            event.target.classList.add('active');
            document.getElementById('searchInput').placeholder = translations[lang].search;
            renderProducts();
            if (document.getElementById('cartModal').classList.contains('active')) {
                renderCart();
            }
        }

        window.onclick = function(event) {
            const modal = document.getElementById('cartModal');
            if (event.target === modal) {
                closeCart();
            }
        }

        renderProducts();
        const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const BOT_TOKEN = "BU_YERGA_TOKEN_QOYASAN";
const CHAT_ID = "SENING_CHAT_ID"; // @userinfobot dan olasan

app.post("/sendOrder", async (req, res) => {
    const { text } = req.body;

    try {
        await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: text
        });

        res.json({ ok: true });
    } catch (err) {
        console.log(err);
        res.json({ ok: false });
    }
});

app.listen(3000, () => console.log("✅ Server ishga tushdi: 3000")); 