// 购物车数据
let cart = [];

// 显示提示框
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // 1.5秒后移除提示
    setTimeout(() => {
        document.body.removeChild(toast);
    }, 1500);
}

// 添加到购物车
function addToCart(product) {
    // 检查商品是否已在购物车中
    const existingItem = cart.find(item => item.name === product.name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showToast('已添加到购物车');
}

// 更新购物车显示
function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    const totalAmount = document.getElementById('total-amount');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <div class="quantity-control">
                <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                <input type="number" class="quantity-input" value="${item.quantity}" 
                    min="1" onchange="updateQuantityInput(${index}, this.value)">
                <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
            </div>
            <span>¥${(item.price * item.quantity).toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">删除</button>
        `;
        cartItems.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    totalAmount.textContent = `¥${total.toFixed(2)}`;
}

// 更新商品数量
function updateQuantity(index, change) {
    const newQuantity = cart[index].quantity + change;
    if (newQuantity > 0) {
        cart[index].quantity = newQuantity;
        updateCartDisplay();
    }
}

// 通过输入框更新数量
function updateQuantityInput(index, value) {
    const quantity = parseInt(value);
    if (quantity > 0) {
        cart[index].quantity = quantity;
        updateCartDisplay();
    }
}

// 从购物车移除
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

// 修改打印订单事件处理
document.getElementById('print-order').addEventListener('click', () => {
    const modal = document.getElementById('orderModal');
    const receiptBody = modal.querySelector('.receipt-body');
    const dateElem = modal.querySelector('.receipt-date');
    
    // 设置当前日期和时间
    const now = new Date();
    dateElem.textContent = now.toLocaleString();
    
    // 生成订单内容
    let receiptContent = '';
    cart.forEach(item => {
        receiptContent += `
            <div class="receipt-item">
                <span>${item.name} x${item.quantity}</span>
                <span>¥${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `;
    });
    
    // 添加总计
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    receiptContent += `
        <div class="receipt-total">
            <span>总计</span>
            <span>¥${total.toFixed(2)}</span>
        </div>
    `;
    
    receiptBody.innerHTML = receiptContent;
    modal.style.display = 'block';
});

// 关闭模态框
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('orderModal').style.display = 'none';
});

// 点击模态框外部关闭
window.addEventListener('click', (event) => {
    const modal = document.getElementById('orderModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// 修改打印小票按钮为复制小票
document.getElementById('printReceiptBtn').addEventListener('click', () => {
    // 生成要复制的文本内容
    const now = new Date();
    let copyContent = `【kk妹手作订单】\n`;
    copyContent += `下单时间：${now.toLocaleString()}\n`;
    copyContent += `------------------------\n`;
    
    // 添加商品列表
    cart.forEach(item => {
        copyContent += `${item.name} x${item.quantity}  ¥${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    copyContent += `------------------------\n`;
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    copyContent += `总计：¥${total.toFixed(2)}\n`;
    copyContent += `\n请将订单发送给商家哦 ~`;

    // 复制到剪贴板
    navigator.clipboard.writeText(copyContent).then(() => {
        // 修改按钮文字和样式以提示成功
        const btn = document.getElementById('printReceiptBtn');
        const originalText = btn.textContent;
        btn.textContent = '复制成功！';
        btn.style.backgroundColor = '#28a745';
        
        // 显示提示框
        const modal = document.getElementById('orderModal');
        const tipDiv = document.createElement('div');
        tipDiv.className = 'copy-tip';
        tipDiv.textContent = '订单已复制，快去发给商家吧 ~';
        modal.querySelector('.modal-content').appendChild(tipDiv);
        
        // 3秒后恢复按钮原样
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = '#4CAF50';
            tipDiv.remove();
        }, 3000);
    }).catch(err => {
        alert('复制失败，请重试');
        console.error('复制失败:', err);
    });
});

// 为所有加入购物车按钮添加点击事件
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const product = {
                name: productCard.querySelector('h3').textContent,
                price: parseFloat(productCard.querySelector('.price').textContent.replace('¥', '')),
                description: productCard.querySelector('.description').textContent
            };
            
            addToCart(product);
        });
    });
});

// 更新购物车显示样式
const cartStyles = `
    .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid #ddd;
        margin-bottom: 0.5rem;
    }
    
    .cart-item button {
        background-color: #dc3545;
        margin-left: 1rem;
    }
    
    .cart-item button:hover {
        background-color: #c82333;
    }
`;

// 添加样式到页面
const styleSheet = document.createElement("style");
styleSheet.textContent = cartStyles;
document.head.appendChild(styleSheet);

// Tab 切换功能
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabId) {
        // 移除所有活动状态
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // 添加新的活动状态
        const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
        const activeContent = document.getElementById(tabId);
        
        activeButton.classList.add('active');
        activeContent.classList.add('active');
    }

    // 添加点击事件监听
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
}); 