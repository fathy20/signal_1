# Design Document: Product Pages

## Overview

This design document outlines the technical approach for converting the current single-page product display into a WooCommerce-style product catalog system. The solution will create individual HTML pages for each of the 10 products while maintaining the existing design language and user experience.

The system will transform existing product cards into clickable navigation elements and generate dedicated product pages with comprehensive product information, maintaining consistency with the current Antwave website design.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        index.html                            │
│  ┌────────────────────────────────────────────────────┐    │
│  │         Product Catalog Section                     │    │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐        │    │
│  │  │ Product  │  │ Product  │  │ Product  │        │    │
│  │  │  Card 1  │  │  Card 2  │  │  Card 3  │  ...   │    │
│  │  │(Clickable)│  │(Clickable)│  │(Clickable)│       │    │
│  │  └────┬─────┘  └────┬─────┘  └────┬─────┘        │    │
│  └───────┼─────────────┼─────────────┼───────────────┘    │
└──────────┼─────────────┼─────────────┼────────────────────┘
           │             │             │
           ▼             ▼             ▼
    ┌──────────┐  ┌──────────┐  ┌──────────┐
    │ products/│  │ products/│  │ products/│
    │  white-  │  │  huawei- │  │  golden- │
    │  shark.  │  │  quad.   │  │  shark.  │
    │  html    │  │  html    │  │  html    │
    └──────────┘  └──────────┘  └──────────┘
```

### Directory Structure

```
project-root/
├── index.html                    # Main page with product catalog
├── styles.css                    # Shared stylesheet
├── script.js                     # Shared JavaScript
├── assets/                       # Images and media
│   ├── logo.png
│   ├── white_shark_new.png
│   ├── HUAWEI QUAD.png
│   └── ...
└── products/                     # Product pages directory (NEW)
    ├── white-shark-tri-band.html
    ├── huawei-quad-band.html
    ├── golden-shark.html
    ├── quad-band-silver.html
    ├── wingstel-triband-jaguar.html
    ├── triple-display-repeater.html
    ├── five-band-repeater.html
    ├── genuinetek-silver.html
    ├── genuinetek-gold.html
    └── golden-classic.html
```

## Components and Interfaces

### 1. Product Card Component (Modified)

The existing product cards will be wrapped in anchor tags to enable navigation.

**Current Structure:**
```html
<div class="product-card">
  <div class="product-image-wrapper">...</div>
  <div class="product-content">...</div>
</div>
```

**Modified Structure:**
```html
<a href="products/[product-slug].html" class="product-card-link">
  <div class="product-card">
    <div class="product-image-wrapper">...</div>
    <div class="product-content">...</div>
  </div>
</a>
```

**CSS Additions:**
```css
.product-card-link {
  text-decoration: none;
  display: block;
  color: inherit;
}

.product-card {
  cursor: pointer;
  transition: var(--transition);
}

.product-card:hover {
  transform: translateY(-15px) scale(1.02);
}
```

### 2. Product Page Template

Each product page will follow a consistent template structure:

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <!-- Meta tags with product-specific information -->
  <title>[Product Name] - Antwave</title>
  <meta name="description" content="[Product description]">
  <!-- Shared styles -->
  <link rel="stylesheet" href="../styles.css">
</head>
<body>
  <!-- Shared header/navigation -->
  <header>...</header>
  
  <!-- Breadcrumb navigation -->
  <nav class="breadcrumb">...</nav>
  
  <!-- Product details section -->
  <section class="product-details">
    <div class="product-hero">
      <div class="product-image-large">...</div>
      <div class="product-info">
        <h1>[Product Name]</h1>
        <span class="network-badge">[2G/3G/4G/5G]</span>
        <div class="product-description-full">...</div>
        <a href="..." class="whatsapp-cta">...</a>
      </div>
    </div>
    
    <div class="product-features-section">...</div>
    <div class="product-specs-section">...</div>
  </section>
  
  <!-- Shared footer -->
  <footer>...</footer>
  
  <!-- Shared scripts -->
  <script src="../script.js"></script>
</body>
</html>
```

### 3. Breadcrumb Navigation Component

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol class="breadcrumb-list">
    <li><a href="../index.html">الرئيسية</a></li>
    <li><a href="../index.html#products">المنتجات</a></li>
    <li aria-current="page">[Product Name]</li>
  </ol>
</nav>
```

**CSS:**
```css
.breadcrumb {
  background: var(--light-bg);
  padding: 20px 0;
  position: sticky;
  top: 70px;
  z-index: 100;
}

.breadcrumb-list {
  display: flex;
  list-style: none;
  gap: 10px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.breadcrumb-list li:not(:last-child)::after {
  content: '◀';
  margin-right: 10px;
  color: var(--text-gray);
}

.breadcrumb-list a {
  color: var(--primary-blue);
  text-decoration: none;
  transition: var(--transition);
}

.breadcrumb-list a:hover {
  color: var(--primary-orange);
}
```

### 4. Product Details Section

```html
<section class="product-details">
  <div class="container">
    <!-- Back Button -->
    <a href="../index.html#products" class="back-button">
      <i data-feather="arrow-right"></i>
      العودة للمنتجات
    </a>
    
    <!-- Product Hero -->
    <div class="product-hero">
      <div class="product-image-large">
        <img src="../assets/[product-image].png" alt="[Product Name]">
      </div>
      
      <div class="product-info">
        <h1 class="product-title">[Product Name]</h1>
        <div class="network-badges">
          <span class="badge">2G</span>
          <span class="badge">3G</span>
          <span class="badge">4G</span>
        </div>
        
        <div class="product-description-full">
          <h2>الوصف</h2>
          <p>[Full description]</p>
        </div>
        
        <a href="https://wa.me/201125655647?text=..." class="whatsapp-cta">
          <i data-feather="message-circle"></i>
          اطلب الآن عبر واتساب
        </a>
      </div>
    </div>
    
    <!-- Features Section -->
    <div class="product-features-detailed">
      <h2>المميزات</h2>
      <ul class="features-list">
        <li><i data-feather="check-circle"></i> [Feature 1]</li>
        <li><i data-feather="check-circle"></i> [Feature 2]</li>
        ...
      </ul>
    </div>
    
    <!-- Specifications Section (if available) -->
    <div class="product-specifications">
      <h2>المواصفات التقنية</h2>
      <table class="specs-table">
        <tr>
          <th>التغطية</th>
          <td>100-150 متر مربع</td>
        </tr>
        <tr>
          <th>الترددات المدعومة</th>
          <td>[Frequency details]</td>
        </tr>
        ...
      </table>
    </div>
  </div>
</section>
```

## Data Models

### Product Data Structure

Each product contains the following information:

```javascript
{
  id: "white-shark-tri-band",
  name: "White Shark Tri-Band",
  slug: "white-shark-tri-band",
  image: "assets/white_shark_new.png",
  networkSupport: ["2G", "3G", "4G"],
  shortDescription: "2G / 3G / 4G",
  fullDescription: "يغطي الجهاز 100-150 متر مربع بالهوائي الواحد، مع توسيع التغطية بزيادة الهوائيات لضمان اتصال مستقر في كل أنحاء المكان.",
  features: [
    "يدعم 3 ترددات مختلفة",
    "تغطية قوية ومستقرة",
    "شاشة عرض ذكية"
  ],
  specifications: {
    coverage: "100-150 متر مربع",
    frequencies: "2G / 3G / 4G",
    display: "شاشة عرض ذكية"
  },
  whatsappMessage: "أريد الاستفسار عن White Shark"
}
```

### Product List

The complete list of 10 products:

1. **white-shark-tri-band** - White Shark Tri-Band (2G/3G/4G)
2. **huawei-quad-band** - Huawei Quad Band High Power (2G/3G/4G/5G)
3. **golden-shark** - Golden Shark High Power (2G/3G)
4. **quad-band-silver** - Quad Band Silver (2G/3G/4G)
5. **wingstel-triband-jaguar** - Wingstel Triband Jaguar (2G/3G/4G)
6. **triple-display-repeater** - Triple Display Repeater (2G/3G/4G)
7. **five-band-repeater** - Five Band Repeater (2G/3G/4G/5G)
8. **genuinetek-silver** - Genuinetek Silver (2G)
9. **genuinetek-gold** - Genuinetek Gold (2G/3G/4G)
10. **golden-classic** - Golden Classic (2G/3G)

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property Reflection

After analyzing all acceptance criteria, I've identified several areas where properties can be consolidated:

**Redundancy Analysis:**

1. **Product Page Content Properties (3.1-3.7)**: These can be combined into a single comprehensive property that validates all required content elements are present.

2. **WhatsApp Link Properties (6.1-6.5)**: These can be consolidated into one property that validates the complete WhatsApp link structure including phone number, message format, and button display.

3. **Navigation Link Properties (5.2, 5.4, 5.5)**: These are all testing that links point to correct URLs and can be combined into a breadcrumb navigation property.

4. **Data Preservation Properties (10.1-10.6)**: These all test that original data is preserved and can be combined into a single round-trip property.

5. **File Structure Properties (8.1, 8.2)**: These can be combined into a single property about file naming and organization.

6. **Relative Path Properties (8.4, 8.5)**: These can be combined into a single property about resource linking.

**Properties to Keep Separate:**
- Product card structure (1.5) - validates catalog page
- Product card navigation (2.1) - validates clickability
- Product card accessibility (2.4, 2.5) - validates keyboard navigation
- Content ordering (4.1) - validates DOM structure
- Conditional specifications (4.5) - validates conditional logic
- SEO metadata (7.1-7.6) - each validates different metadata aspects
- Consistent header/footer (9.3, 9.4) - validates template consistency

### Correctness Properties

Property 1: Product Card Structure Completeness
*For any* product card in the catalog, the HTML SHALL contain an image element, a product name element, and network support information.
**Validates: Requirements 1.5**

Property 2: Product Card Navigation
*For any* product card in the catalog, clicking the card SHALL navigate to a URL in the format "products/[product-slug].html".
**Validates: Requirements 2.1**

Property 3: Product Card Keyboard Accessibility
*For any* product card in the catalog, the card SHALL be wrapped in or contain a focusable anchor element that is accessible via keyboard navigation.
**Validates: Requirements 2.4, 2.5**

Property 4: Product Page Content Completeness
*For any* product page, the HTML SHALL contain all required elements: product image, product name as h1, network support badges, full description, features list, and WhatsApp contact button.
**Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.7**

Property 5: Conditional Specifications Display
*For any* product page, IF the product has specifications in the data model, THEN the specifications section SHALL be present in the HTML; IF the product has no specifications, THEN the specifications section SHALL NOT be present.
**Validates: Requirements 3.6, 4.5**

Property 6: Product Page Content Ordering
*For any* product page, the DOM elements SHALL appear in the following order: image, name heading, network support, description, features, specifications (if present), contact button.
**Validates: Requirements 4.1**

Property 7: Feature Items Icon Presence
*For any* feature item in a product page features list, the item SHALL contain an icon element (feather icon or SVG).
**Validates: Requirements 4.3**

Property 8: Back Button Presence and Target
*For any* product page, there SHALL be a back button or link element that points to "../index.html#products".
**Validates: Requirements 5.1, 5.2**

Property 9: Breadcrumb Navigation Structure
*For any* product page, the breadcrumb navigation SHALL contain three items in order: "Home" linking to "../index.html", "Products" linking to "../index.html#products", and the product name as the current page.
**Validates: Requirements 5.3, 5.4, 5.5**

Property 10: WhatsApp Link Completeness
*For any* product page, the WhatsApp link SHALL have href="https://wa.me/201125655647?text=أريد الاستفسار عن [Product Name]", SHALL contain an icon element, and SHALL display the text "اطلب الآن".
**Validates: Requirements 6.1, 6.2, 6.3, 6.5**

Property 11: WhatsApp Link Target Attribute
*For any* product page, the WhatsApp link SHALL have target="_blank" or rel="noopener" to open in a new tab.
**Validates: Requirements 6.4**

Property 12: Page Title Format
*For any* product page, the title tag SHALL contain text in the format "[Product Name] - Antwave".
**Validates: Requirements 7.1**

Property 13: Meta Description Presence
*For any* product page, there SHALL be a meta description tag containing the product name and at least one feature.
**Validates: Requirements 7.2**

Property 14: Meta Keywords Presence
*For any* product page, there SHALL be a meta keywords tag with relevant product keywords.
**Validates: Requirements 7.3**

Property 15: Open Graph Tags Completeness
*For any* product page, the HTML head SHALL contain Open Graph meta tags for og:title, og:description, og:type, and og:image.
**Validates: Requirements 7.4, 7.5**

Property 16: Semantic HTML5 Usage
*For any* product page, the HTML SHALL use semantic HTML5 elements including article, section, and header tags.
**Validates: Requirements 7.6**

Property 17: Product File Existence and Naming
*For all* 10 products, there SHALL exist an HTML file in the "products/" directory with a filename in kebab-case format matching the product name.
**Validates: Requirements 8.1, 8.2**

Property 18: Relative Resource Paths
*For any* product page, all links to CSS, JavaScript, and image files SHALL use relative paths starting with "../".
**Validates: Requirements 8.4, 8.5**

Property 19: Consistent Header Structure
*For any* product page, the header HTML structure SHALL match the header structure in index.html (same navigation, logo, and mobile menu).
**Validates: Requirements 9.3**

Property 20: Consistent Footer Structure
*For any* product page, the footer HTML structure SHALL match the footer structure in index.html.
**Validates: Requirements 9.4**

Property 21: Product Data Preservation
*For any* product, all data from the original catalog (name, image path, description, features, network support, WhatsApp message) SHALL be preserved exactly in the corresponding product page.
**Validates: Requirements 10.1, 10.2, 10.3, 10.4, 10.5, 10.6**

## Error Handling

### Missing Product Data

**Scenario:** A product is missing required data fields (name, image, description).

**Handling:**
- During page generation, validate that all required fields are present
- If a required field is missing, log an error and skip that product
- Provide clear error messages indicating which product and which field is missing

### Invalid File Paths

**Scenario:** Image paths or resource paths are incorrect or files don't exist.

**Handling:**
- Validate that all referenced image files exist in the assets directory
- Use relative paths consistently to avoid broken links
- Include fallback alt text for images in case they fail to load

### Broken Navigation Links

**Scenario:** Links between pages are incorrect or point to non-existent pages.

**Handling:**
- Validate all internal links during build/generation
- Ensure all product slugs are correctly generated and match filenames
- Test navigation paths before deployment

### WhatsApp Link Encoding

**Scenario:** Arabic text in WhatsApp messages may not encode properly in URLs.

**Handling:**
- Use proper URL encoding (encodeURIComponent) for Arabic text in WhatsApp message parameters
- Test WhatsApp links on mobile devices to ensure proper message display
- Provide fallback phone number link if WhatsApp fails

### Responsive Layout Issues

**Scenario:** Product pages may not display correctly on certain screen sizes.

**Handling:**
- Use the same responsive CSS framework as the main site
- Test on multiple device sizes (mobile, tablet, desktop)
- Ensure images scale properly and don't overflow containers
- Use CSS Grid and Flexbox with proper fallbacks

## Testing Strategy

### Dual Testing Approach

This feature requires both unit tests and property-based tests to ensure comprehensive coverage:

**Unit Tests** will focus on:
- Specific examples of product page generation
- Edge cases (products with/without specifications)
- Integration between catalog and product pages
- WhatsApp link encoding with Arabic characters

**Property-Based Tests** will focus on:
- Universal properties that hold for all 10 products
- HTML structure validation across all product pages
- Link integrity across all navigation elements
- Data preservation from catalog to product pages

### Property-Based Testing Configuration

We will use a property-based testing library appropriate for HTML/JavaScript testing:
- For Node.js environment: **fast-check** library
- Each property test will run a minimum of 100 iterations
- Each test will be tagged with a comment referencing the design property

**Example Test Tag Format:**
```javascript
// Feature: product-pages, Property 4: Product Page Content Completeness
// For any product page, the HTML SHALL contain all required elements
```

### Test Categories

**1. HTML Structure Tests (Property-Based)**
- Validate that all product pages contain required HTML elements
- Validate semantic HTML5 usage
- Validate proper nesting and structure

**2. Navigation Tests (Property-Based)**
- Validate all product cards link to correct product pages
- Validate breadcrumb navigation on all product pages
- Validate back buttons point to correct URLs

**3. Data Integrity Tests (Property-Based)**
- Validate all product data is preserved from catalog to product pages
- Validate WhatsApp links contain correct phone numbers and messages
- Validate image paths are correct and consistent

**4. SEO Metadata Tests (Property-Based)**
- Validate all product pages have proper title tags
- Validate meta descriptions and keywords
- Validate Open Graph tags for social sharing

**5. Accessibility Tests (Unit Tests)**
- Test keyboard navigation on product cards
- Test screen reader compatibility
- Test focus management

**6. Integration Tests (Unit Tests)**
- Test clicking product card navigates to product page
- Test back button returns to catalog
- Test WhatsApp link opens correctly

**7. Responsive Design Tests (Manual/Visual)**
- Test layout on mobile devices
- Test layout on tablets
- Test layout on desktop screens
- Verify images scale properly

### Testing Tools

- **HTML Validation:** W3C HTML Validator or html-validate
- **Property Testing:** fast-check (JavaScript)
- **DOM Testing:** jsdom or Cheerio for parsing HTML
- **Link Checking:** Custom scripts to validate all internal links
- **Accessibility:** axe-core or pa11y for automated accessibility testing

### Test Execution Strategy

1. **During Development:**
   - Run property tests on each product page as it's created
   - Validate HTML structure immediately
   - Check links and navigation

2. **Before Deployment:**
   - Run full test suite on all 10 product pages
   - Validate all links are working
   - Check responsive design on multiple devices
   - Validate SEO metadata

3. **Post-Deployment:**
   - Verify all pages load correctly
   - Test WhatsApp links on actual mobile devices
   - Check Google Search Console for any crawl errors

## Implementation Notes

### CSS Additions Required

New CSS classes will be added to styles.css for product pages:

```css
/* Product Card Link Wrapper */
.product-card-link { ... }

/* Breadcrumb Navigation */
.breadcrumb { ... }
.breadcrumb-list { ... }

/* Product Details Page */
.product-details { ... }
.back-button { ... }
.product-hero { ... }
.product-image-large { ... }
.product-info { ... }
.product-title { ... }
.network-badges { ... }
.badge { ... }
.product-description-full { ... }
.whatsapp-cta { ... }
.product-features-detailed { ... }
.product-specifications { ... }
.specs-table { ... }
```

### JavaScript Additions

Minimal JavaScript changes required:
- Feather icons initialization (already present)
- Smooth scroll for anchor links (already present)
- Mobile menu functionality (already present)

### SEO Considerations

Each product page will include:
- Unique title tag with product name
- Meta description with product details
- Meta keywords relevant to the product
- Open Graph tags for social media sharing
- Semantic HTML5 structure
- Proper heading hierarchy (h1 for product name)
- Alt text for all images

### Performance Considerations

- Reuse existing CSS and JavaScript files (no duplication)
- Optimize product images (already in assets directory)
- Use relative paths to enable browser caching
- Minimize HTTP requests by sharing resources
- Consider lazy loading for product images if needed

### Maintenance Considerations

- Product data should be centralized (consider JSON file for future)
- Template structure should be consistent across all product pages
- CSS classes should be reusable and semantic
- Adding new products should follow the same pattern
- Documentation should include instructions for adding new products
