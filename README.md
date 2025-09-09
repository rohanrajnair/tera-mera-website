# Tera Mera Restaurant Website

A beautiful, responsive website for Tera Mera - an elevated Bombay street snacks restaurant in Brooklyn. The website features a chic design inspired by the restaurant's unique aesthetic with teal, gold, and orange color schemes, Bombay-inspired patterns, and modern functionality.

## 🍽️ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Aesthetics**: Chic design with Bombay-inspired motifs and patterns
- **Interactive Elements**: Smooth animations, hover effects, and mobile navigation
- **Complete Menu Display**: All menu items with prices and descriptions
- **Business Information**: Hours, contact details, and location
- **Social Media Integration**: Instagram link for latest updates
- **Performance Optimized**: Fast loading with optimized animations

## 🎨 Design Elements

### Color Palette
- **Teal Primary**: #008080 (inspired by the restaurant's exterior)
- **Gold Accent**: #d4af37 (from the restaurant's lettering)
- **Orange Highlight**: #e67e22 (complementary accent color)
- **Cream Background**: #fdf6e3 (warm, inviting background)

### Typography
- **Headings**: Playfair Display (elegant serif font)
- **Body Text**: Inter (clean, modern sans-serif)

### Bombay-Inspired Motifs
- Rotating star/floral motifs (✦) throughout the site
- Subtle dot patterns in the hero section
- Traditional Indian-inspired decorative elements

## 📁 Project Structure

```
tera-mera-website/
├── index.html                    # Main HTML file
├── package.json                  # Node.js dependencies and scripts
├── .gitignore                    # Git ignore rules
├── README.md                     # Project documentation
├── PHOTO_SETUP.md               # Photo organization guide
└── assets/                      # All static assets
    ├── css/                     # Stylesheets
    │   ├── main.css            # Main stylesheet (imports all modules)
    │   ├── base.css            # Base styles and CSS variables
    │   ├── layout.css          # Layout and section styles
    │   ├── components.css      # Component-specific styles
    │   └── utilities.css       # Utility classes and responsive design
    ├── js/                      # JavaScript modules
    │   ├── main.js             # Main application entry point
    │   ├── navigation.js       # Navigation functionality
    │   ├── animations.js       # Animation and interaction effects
    │   └── utils.js            # Utility functions and helpers
    └── images/                  # Image assets
        ├── logo-clean.png      # Restaurant logo
        ├── food.jpg            # Food photography
        ├── cheers.jpg          # Restaurant atmosphere
        ├── exterior-*.jpg      # Restaurant exterior photos
        ├── interior-*.jpg      # Restaurant interior photos
        ├── patio-*.jpg         # Patio and outdoor seating
        ├── sisters*.jpg        # Team photos
        ├── tera_mera_menu_*.jpg # Menu pages
        └── *.png               # Decorative elements and patterns
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Node.js (optional, for development tools)
- Git (optional, for version control)

### Installation

1. **Clone or Download**: Get the website files to your local machine
   ```bash
   git clone https://github.com/tera-mera/website.git
   cd tera-mera-website
   ```

2. **Install Dependencies** (Optional):
   ```bash
   npm install
   ```

3. **Development Server**:
   ```bash
   # Using npm scripts
   npm run dev
   
   # Or using the start script
   npm start
   
   # Or manually with http-server
   npx http-server -p 3000 -o
   ```

4. **Open in Browser**: Simply open `index.html` in your web browser, or visit `http://localhost:3000` if using a development server

## 🛠️ Customization

### Updating Content

#### Menu Items
Edit the menu section in `index.html`:
```html
<div class="menu-item">
    <div class="item-header">
        <h4>Dish Name</h4>
        <span class="price">$XX</span>
    </div>
    <p>Dish description goes here</p>
</div>
```

#### Business Information
Update the following sections in `index.html`:
- **Hours**: Modify the `hours-grid` section
- **Contact**: Update phone number and address in the contact section
- **Instagram**: Change the Instagram handle in the contact section

#### About Section
Edit the chef/story content in the `about-text` div.

### Styling Changes

#### Colors
Modify the CSS custom properties in `assets/css/base.css`:
```css
:root {
    --teal-primary: #00936E;
    --gold-primary: #d4af37;
    --orange-primary: #ff6b35;
    /* ... other colors */
}
```

#### Fonts
Change the Google Fonts import in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap" rel="stylesheet">
```

#### Component Styles
- **Navigation**: Edit `assets/css/components.css` for navbar styles
- **Layout**: Modify `assets/css/layout.css` for section layouts
- **Utilities**: Add custom utility classes in `assets/css/utilities.css`

### Adding Images

1. **Add images** to the `assets/images/` folder
2. **Update the HTML** to reference your images:
   ```html
   <img src="assets/images/your-image.jpg" alt="Description" />
   ```
3. **Update CSS** if using background images:
   ```css
   background-image: url('../images/your-image.jpg');
   ```

### JavaScript Customization

- **Navigation**: Modify `assets/js/navigation.js` for menu behavior
- **Animations**: Edit `assets/js/animations.js` for scroll effects
- **Utilities**: Add helper functions in `assets/js/utils.js`
- **Main App**: Customize the main application logic in `assets/js/main.js`

## 📱 Mobile Responsiveness

The website is fully responsive and includes:
- Mobile-first navigation with hamburger menu
- Responsive grid layouts
- Optimized typography for all screen sizes
- Touch-friendly interactive elements

## 🚀 Development Scripts

```bash
# Start development server with live reload
npm run dev

# Start simple HTTP server
npm start

# Build optimized production files
npm run build

# Lint JavaScript files
npm run lint

# Format code with Prettier
npm run format
```

## 🌐 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload your website files
3. Go to Settings > Pages
4. Select source branch and save

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.` (root)
4. Deploy automatically on push

### Traditional Web Hosting
1. Run `npm run build` to create optimized files
2. Upload all files to your web server
3. Ensure `index.html` is in the root directory
4. Test all functionality

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact Information

For website support or customization requests, please contact the development team.

## 📄 License

This website is created specifically for Tera Mera restaurant. All rights reserved.

## 🎯 Future Enhancements

Potential additions for future updates:
- Online ordering system
- Photo gallery of dishes
- Customer reviews section
- Blog/news section
- Newsletter signup
- Reservation system
- Multi-language support

## 🐛 Troubleshooting

### Common Issues

1. **Fonts not loading**: Check your internet connection and ensure Google Fonts is accessible
2. **Animations not working**: Ensure JavaScript is enabled in your browser
3. **Mobile menu not working**: Check that all JavaScript files are properly loaded
4. **Styling issues**: Clear your browser cache and refresh the page

### Performance Tips

- Optimize images before uploading
- Minimize HTTP requests
- Use a CDN for external resources
- Enable browser caching on your server

---

**Tera Mera** - From Bombay to Brooklyn 🌟
*Elevated Bombay Street Snacks* 