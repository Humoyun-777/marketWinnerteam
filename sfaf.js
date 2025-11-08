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
            { id: 1, name: 'iPhone 15 Pro Max', price: 1499, category: 'electronics', rating: 4.9, image: '📱', desc: 'Eng yangi iPhone' },
            { id: 2, name: 'Sony WH-1000XM5', price: 349, category: 'electronics', rating: 4.8, image: '🎧', desc: 'Sifatli ovoz' },
            { id: 3, name: 'Nike Air Force 1', price: 120, category: 'fashion', rating: 4.7, image: '👟', desc: 'Klassik poyabzal' },
            { id: 4, name: 'Adidas T-Shirt', price: 45, category: 'fashion', rating: 4.6, image: '👕', desc: 'Qulay kiyim' },
            { id: 5, name: 'Kitchen Blender Pro', price: 89, category: 'home', rating: 4.5, image: '🥤', desc: 'Uyda foydalanish' },
            { id: 6, name: 'Premium Bed Sheets', price: 65, category: 'home', rating: 4.4, image: '🛏️', desc: 'Yumshoq to\'qima' },
            { id: 7, name: 'JavaScript Guide', price: 29, category: 'books', rating: 4.9, image: '📚', desc: 'Bilim kitob' },
            { id: 8, name: 'Yoga Mat Premium', price: 55, category: 'sports', rating: 4.6, image: '🧘', desc: 'Sport uchun' },
            { id: 9, name: 'Apple Watch Ultra', price: 799, category: 'electronics', rating: 4.8, image: '⌚', desc: 'Aqlli soat' },
            { id: 10, name: 'Winter Jacket', price: 189, category: 'fashion', rating: 4.7, image: '🧥', desc: 'Qishki shoxob' },
            { id: 11, name: 'Coffee Maker', price: 75, category: 'home', rating: 4.5, image: '☕', desc: 'Kofe uchun' },
            { id: 12, name: 'Dumbbell Set 20kg', price: 150, category: 'sports', rating: 4.8, image: '💪', desc: 'Fitnes uchun' },
            { id: 13, name: 'Samsung 4K TV', price: 599, category: 'electronics', rating: 4.7, image: '📺', desc: 'Sifatli ekran' },
            { id: 14, name: 'Polo Shirt', price: 52, category: 'fashion', rating: 4.5, image: '👔', desc: 'Rasmiy kiyim' },
            { id: 15, name: 'Microwave Oven', price: 120, category: 'home', rating: 4.4, image: '🍕', desc: 'Tez tayyorlash' },
            { id: 16, name: 'Running Shoes', price: 95, category: 'sports', rating: 4.6, image: '🏃', desc: 'Yugurish uchun' }
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
                    <div class="product-image">${p.image}</div>
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