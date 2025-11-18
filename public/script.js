// Get elements
const btnFull = document.getElementById("btn-full");
const btnVeg = document.getElementById("btn-veg");
const btnCats = document.getElementById("btn-cats");
const output = document.getElementById("output");

// Format price
function formatPrice(amount){
  return `₹${amount}`;
}

// Render menu items
function renderMenu(items){
  if(!items || items.length === 0){
    output.innerHTML = '<p>No items found.</p>';
    return;
  }

  output.innerHTML = items.map(item => `
    <article class="menu-item">
      <div class="item-head">
        <div>
          <div class="item-name">${item.name}</div>
          <div class="category">${item.category}</div>
        </div>
        <div style="text-align:right">
          <div class="price">${formatPrice(item.price)}</div>
          <div class="badge ${item.isVegetarian ? 'veg' : 'nonveg'}">
            ${item.isVegetarian ? 'Vegetarian' : 'Non-Veg'}
          </div>
        </div>
      </div>
      <p style="margin-top:8px;">${item.description}</p>
    </article>
  `).join('');
}

// Render categories
function renderCategories(data){
  if(!data || !data.categories || data.categories.length === 0){
    output.innerHTML = '<p>No categories found.</p>';
    return;
  }

  output.innerHTML = `
    <div class="categories-list">
      ${data.categories.map(c => `
        <div class="category-card">
          <strong>${c.name}</strong> — ${c.itemCount} item(s)
        </div>
      `).join('')}
    </div>
  `;
}

// Fetch data helper
async function fetchAndRender(path, renderer){
  try {
    output.innerHTML = '<p>Loading...</p>';
    const res = await fetch(path);
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    renderer(data);
  } catch(err){
    console.error(err);
    output.innerHTML = '<p class="error">Failed to fetch data. Please try again.</p>';
  }
}

// Button events
btnFull.addEventListener('click', () => fetchAndRender('/menu', renderMenu));
btnVeg.addEventListener('click', () => fetchAndRender('/menu/vegetarian', renderMenu));
btnCats.addEventListener('click', () => fetchAndRender('/menu/categories', renderCategories));

// Auto-load full menu
fetchAndRender('/menu', renderMenu);
