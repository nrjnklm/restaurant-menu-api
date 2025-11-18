const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


// In-memory menu data
const menu = [
{
id: 1,
name: 'Margherita Pizza',
category: 'Main Course',
price: 350,
isVegetarian: true,
description: 'Classic pizza with tomato, basil and mozzarella.'
},
{
id: 2,
name: 'Butter Chicken',
category: 'Main Course',
price: 420,
isVegetarian: false,
description: 'Creamy tomato gravy with tender chicken pieces.'
},
{
id: 3,
name: 'Paneer Tikka',
category: 'Appetizer',
price: 240,
isVegetarian: true,
description: 'Grilled marinated cottage cheese with spices.'
},
{
id: 4,
name: 'Garlic Bread',
category: 'Appetizer',
price: 150,
isVegetarian: true,
description: 'Toasted bread with garlic butter and herbs.'
},
{
id: 5,
name: 'Gulab Jamun',
category: 'Dessert',
price: 120,
isVegetarian: true,
description: 'Soft milk dumplings soaked in sugar syrup.'
},
{
id: 6,
name: 'Fish Curry',
category: 'Main Course',
price: 380,
isVegetarian: false,
description: 'Spicy coastal-style fish curry served with rice.'
}
];


// Middleware: serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));


// GET /menu - return all menu items
app.get('/menu', (req, res) => {
res.json(menu);
});


// GET /menu/vegetarian - return only vegetarian items
app.get('/menu/vegetarian', (req, res) => {
const veg = menu.filter(item => item.isVegetarian === true);
res.json(veg);
});


// GET /menu/categories - return unique categories with item counts
app.get('/menu/categories', (req, res) => {
const counts = menu.reduce((acc, item) => {
acc[item.category] = (acc[item.category] || 0) + 1;
return acc;
}, {});


const categories = Object.keys(counts).map(name => ({ name, itemCount: counts[name] }));


res.json({ categories });
});


// Start server
app.listen(PORT, () => {
console.log(`Server started on http://localhost:${PORT}`);
});