(() => {
  const products = {
    serum: { title: 'Dew Drop Serum', label: 'DAILY HYDRATION', price: 32, image: '../assets/demo-serum.jpg', alt: 'Amber glass skincare dropper bottle', text: 'A fictional sample product page to show how a real item can be presented. Replace this description with accurate ingredients, size, directions, and claims for your product.' },
    oil: { title: 'Quiet Glow Oil', label: 'NOURISHING FACE OIL', price: 38, image: '../assets/demo-skincare.jpg', alt: 'Minimal white skincare dropper bottle', text: 'A fictional sample product page to show the layout. Add your verified product details and photography before publishing a real store.' },
    cream: { title: 'Soft Focus Cream', label: 'BARRIER COMFORT', price: 42, image: '../assets/demo-cosmetics.jpg', alt: 'Unbranded skincare cream jar beside a plant', text: 'A fictional sample product page to show where product information, pricing, and purchase actions will appear.' },
    mist: { title: 'Evening Mist', label: 'CALMING ESSENCE', price: 26, image: '../assets/demo-perfume.jpg', alt: 'Clear glass dropper bottle', text: 'A fictional sample product page. Replace the placeholder text and price with details that accurately describe your real product.' },
  };
  const cart = new Map();
  const main = document.querySelector('.main-content');
  const originalMain = main.innerHTML;
  const toast = document.querySelector('.preview-toast');
  let toastTimer;
  const money = (amount) => new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' }).format(amount);
  const count = () => [...cart.values()].reduce((total, item) => total + item.quantity, 0);
  const updateCount = () => document.querySelectorAll('.preview-cart-count').forEach((node) => { node.textContent = count(); });
  const notify = (message) => { toast.textContent = message; toast.classList.add('is-visible'); window.clearTimeout(toastTimer); toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2400); };
  function renderProduct(id) {
    const item = products[id]; if (!item) return;
    main.innerHTML = `<a class="preview-back" href="#shop">← Back to the collection</a><section class="preview-product" aria-labelledby="product-title"><img class="preview-product__image" src="${item.image}" alt="${item.alt}" width="1000" height="1250"><div class="preview-product__details"><p class="featured-collection__eyebrow">${item.label}</p><h1 id="product-title">${item.title}</h1><p class="preview-product__price">${money(item.price)}</p><p>${item.text}</p><p>Sample image, fictional item and placeholder price. No real product is sold in this preview.</p><button class="button" type="button" data-add="${id}">Add to sample bag</button></div></section>`;
    window.scrollTo(0, 0);
  }
  function renderCart() {
    const entries = [...cart.entries()];
    const body = entries.length ? entries.map(([id, item]) => `<article class="preview-cart-row"><img src="${item.image}" alt="${item.alt}" width="84" height="104"><div style="flex:1"><strong>${item.title}</strong><p>${money(item.price)} · Qty ${item.quantity}</p></div><button type="button" data-remove="${id}">Remove</button></article>`).join('') : '<p>Your sample bag is empty.</p>';
    const total = entries.reduce((sum, [, item]) => sum + item.price * item.quantity, 0);
    main.innerHTML = `<section class="preview-cart"><p class="featured-collection__eyebrow">PREVIEW ONLY</p><h1>Your bag</h1>${body}<p><strong>Sample total: ${money(total)}</strong></p><button class="button" type="button" data-demo-checkout>Continue (demo only)</button><p>This is not a Shopify cart. No order or payment can be made here.</p><a href="#shop">Continue shopping</a></section>`;
    updateCount(); window.scrollTo(0, 0);
  }
  document.addEventListener('click', (event) => {
    const add = event.target.closest('[data-add]');
    if (add) { const id = add.dataset.add; const item = products[id]; if (!item) return; const existing = cart.get(id); cart.set(id, { ...item, quantity: (existing?.quantity ?? 0) + 1 }); updateCount(); notify(`${item.title} added to sample bag`); return; }
    const remove = event.target.closest('[data-remove]'); if (remove) { cart.delete(remove.dataset.remove); renderCart(); return; }
    if (event.target.closest('[data-demo-checkout]')) { notify('Demo only — connect a Shopify store to accept orders.'); return; }
    if (event.target.closest('.site-header__icon-link--cart')) { event.preventDefault(); renderCart(); return; }
    const link = event.target.closest('a[href^="#product-"]'); if (link) { event.preventDefault(); renderProduct(link.getAttribute('href').slice('#product-'.length)); }
  });
  window.addEventListener('hashchange', () => { const hash = location.hash; if (hash.startsWith('#product-')) renderProduct(hash.slice('#product-'.length)); else if (hash === '#cart') renderCart(); else if (main.innerHTML !== originalMain) { main.innerHTML = originalMain; window.scrollTo(0, 0); } });
  if (location.hash.startsWith('#product-')) renderProduct(location.hash.slice('#product-'.length)); else if (location.hash === '#cart') renderCart();
})();
