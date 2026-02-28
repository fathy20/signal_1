# Implementation Plan: Product Pages

## Overview

This implementation plan converts the current single-page product display into a WooCommerce-style product catalog system. The approach is to first create the product pages directory and individual HTML files for each product, then modify the main catalog page to make product cards clickable, and finally add necessary CSS styling for the new components.

## Tasks

- [ ] 1. Create products directory and file structure
  - Create a "products" directory in the project root
  - Verify the directory is created successfully
  - _Requirements: 8.1_

- [ ] 2. Extract product data from index.html
  - Parse the existing product cards in index.html
  - Extract product information: name, image path, network support, description, features, WhatsApp message
  - Create a data structure or JSON object containing all 10 products
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_

- [ ] 3. Create product page template structure
  - [ ] 3.1 Create the first product page (white-shark-tri-band.html) as a template
    - Copy the header and navigation from index.html
    - Add breadcrumb navigation component
    - Add back button component
    - Create product details section with hero layout
    - Add features section
    - Add specifications section (conditional)
    - Add WhatsApp CTA button
    - Copy the footer from index.html
    - Link to ../styles.css and ../script.js
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 5.1, 5.3, 6.1, 8.4, 8.5, 9.3, 9.4_
  
  - [ ]* 3.2 Write property test for product page content completeness
    - **Property 4: Product Page Content Completeness**
    - **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.7**
  
  - [ ]* 3.3 Write property test for content ordering
    - **Property 6: Product Page Content Ordering**
    - **Validates: Requirements 4.1**

- [ ] 4. Add SEO metadata to product page template
  - [ ] 4.1 Add unique title tag with product name
    - Format: "[Product Name] - Antwave"
    - _Requirements: 7.1_
  
  - [ ] 4.2 Add meta description with product details
    - Include product name and key features
    - _Requirements: 7.2_
  
  - [ ] 4.3 Add meta keywords tag
    - Include relevant product and network keywords
    - _Requirements: 7.3_
  
  - [ ] 4.4 Add Open Graph tags for social sharing
    - Add og:title, og:description, og:type, og:image tags
    - Use product image URL for og:image
    - _Requirements: 7.4, 7.5_
  
  - [ ]* 4.5 Write property test for SEO metadata
    - **Property 12: Page Title Format**
    - **Property 13: Meta Description Presence**
    - **Property 14: Meta Keywords Presence**
    - **Property 15: Open Graph Tags Completeness**
    - **Validates: Requirements 7.1, 7.2, 7.3, 7.4, 7.5**

- [ ] 5. Generate remaining product pages
  - [ ] 5.1 Create huawei-quad-band.html with product-specific data
    - Use template structure from white-shark-tri-band.html
    - Replace product name, image, description, features, WhatsApp message
    - _Requirements: 8.1, 8.2, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_
  
  - [ ] 5.2 Create golden-shark.html with product-specific data
    - _Requirements: 8.1, 8.2, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_
  
  - [ ] 5.3 Create quad-band-silver.html with product-specific data
    - _Requirements: 8.1, 8.2, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_
  
  - [ ] 5.4 Create wingstel-triband-jaguar.html with product-specific data
    - _Requirements: 8.1, 8.2, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_
  
  - [ ] 5.5 Create triple-display-repeater.html with product-specific data
    - _Requirements: 8.1, 8.2, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_
  
  - [ ] 5.6 Create five-band-repeater.html with product-specific data
    - _Requirements: 8.1, 8.2, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_
  
  - [ ] 5.7 Create genuinetek-silver.html with product-specific data
    - _Requirements: 8.1, 8.2, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_
  
  - [ ] 5.8 Create genuinetek-gold.html with product-specific data
    - Note: This product has no description in the original, handle gracefully
    - _Requirements: 8.1, 8.2, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_
  
  - [ ] 5.9 Create golden-classic.html with product-specific data
    - _Requirements: 8.1, 8.2, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_
  
  - [ ]* 5.10 Write property test for product file existence and naming
    - **Property 17: Product File Existence and Naming**
    - **Validates: Requirements 8.1, 8.2**
  
  - [ ]* 5.11 Write property test for data preservation
    - **Property 21: Product Data Preservation**
    - **Validates: Requirements 10.1, 10.2, 10.3, 10.4, 10.5, 10.6**

- [ ] 6. Checkpoint - Verify all product pages are created
  - Ensure all 10 product HTML files exist in products/ directory
  - Verify each page has correct product data
  - Check that all pages load without errors
  - Ask the user if questions arise

- [ ] 7. Add CSS styling for product pages
  - [ ] 7.1 Add breadcrumb navigation styles to styles.css
    - Style breadcrumb container, list, links, and separators
    - Make breadcrumb sticky below header
    - _Requirements: 5.3_
  
  - [ ] 7.2 Add back button styles to styles.css
    - Style back button with icon and hover effects
    - _Requirements: 5.1_
  
  - [ ] 7.3 Add product details page styles to styles.css
    - Style product hero section (image + info side-by-side)
    - Style product title, network badges, description
    - Style WhatsApp CTA button
    - Make layout responsive (stack on mobile)
    - _Requirements: 3.8, 3.9_
  
  - [ ] 7.4 Add product features section styles to styles.css
    - Style features list with icons
    - Add proper spacing and visual hierarchy
    - _Requirements: 4.3_
  
  - [ ] 7.5 Add product specifications table styles to styles.css
    - Style specifications table with alternating rows
    - Make table responsive on mobile
    - _Requirements: 3.6_
  
  - [ ] 7.6 Add network badges styles to styles.css
    - Style 2G/3G/4G/5G badges with colors
    - Add hover effects
    - _Requirements: 3.3_

- [ ] 8. Modify product cards in index.html to be clickable
  - [ ] 8.1 Wrap each product card in an anchor tag
    - Add href pointing to products/[product-slug].html
    - Maintain existing product card structure
    - _Requirements: 2.1_
  
  - [ ] 8.2 Add CSS for product card links
    - Style .product-card-link to remove default link styling
    - Add cursor pointer to product cards
    - Enhance hover effect with slight scale transform
    - _Requirements: 2.2, 2.3_
  
  - [ ]* 8.3 Write property test for product card navigation
    - **Property 2: Product Card Navigation**
    - **Validates: Requirements 2.1**
  
  - [ ]* 8.4 Write property test for product card structure
    - **Property 1: Product Card Structure Completeness**
    - **Validates: Requirements 1.5**
  
  - [ ]* 8.5 Write property test for keyboard accessibility
    - **Property 3: Product Card Keyboard Accessibility**
    - **Validates: Requirements 2.4, 2.5**

- [ ] 9. Implement breadcrumb and back button navigation
  - [ ] 9.1 Verify breadcrumb links point to correct URLs
    - Home link: ../index.html
    - Products link: ../index.html#products
    - Current product name (no link)
    - _Requirements: 5.3, 5.4, 5.5_
  
  - [ ] 9.2 Verify back button points to catalog
    - Back button href: ../index.html#products
    - _Requirements: 5.2_
  
  - [ ]* 9.3 Write property test for breadcrumb navigation
    - **Property 9: Breadcrumb Navigation Structure**
    - **Validates: Requirements 5.3, 5.4, 5.5**
  
  - [ ]* 9.4 Write property test for back button
    - **Property 8: Back Button Presence and Target**
    - **Validates: Requirements 5.1, 5.2**

- [ ] 10. Implement and verify WhatsApp links
  - [ ] 10.1 Ensure WhatsApp links have correct format
    - URL: https://wa.me/201125655647?text=[encoded message]
    - Message format: "أريد الاستفسار عن [Product Name]"
    - Properly encode Arabic text in URL
    - _Requirements: 6.1, 6.2, 6.3_
  
  - [ ] 10.2 Add target="_blank" to WhatsApp links
    - Ensure links open in new tab
    - _Requirements: 6.4_
  
  - [ ] 10.3 Verify WhatsApp button displays icon and text
    - Icon: message-circle (Feather icon)
    - Text: "اطلب الآن عبر واتساب"
    - _Requirements: 6.5_
  
  - [ ]* 10.4 Write property test for WhatsApp link completeness
    - **Property 10: WhatsApp Link Completeness**
    - **Property 11: WhatsApp Link Target Attribute**
    - **Validates: Requirements 6.1, 6.2, 6.3, 6.4, 6.5**

- [ ] 11. Verify semantic HTML and accessibility
  - [ ] 11.1 Ensure product pages use semantic HTML5 elements
    - Use article, section, header tags appropriately
    - Use proper heading hierarchy (h1 for product name)
    - _Requirements: 7.6_
  
  - [ ] 11.2 Add alt text to all product images
    - Use product name as alt text
    - _Requirements: 3.1_
  
  - [ ]* 11.3 Write property test for semantic HTML usage
    - **Property 16: Semantic HTML5 Usage**
    - **Validates: Requirements 7.6**

- [ ] 12. Verify consistent header and footer across pages
  - [ ] 12.1 Check that all product pages have identical header
    - Same logo, navigation links, mobile menu
    - _Requirements: 9.3_
  
  - [ ] 12.2 Check that all product pages have identical footer
    - Same copyright, developer credit, contact info
    - _Requirements: 9.4_
  
  - [ ]* 12.3 Write property test for header consistency
    - **Property 19: Consistent Header Structure**
    - **Validates: Requirements 9.3**
  
  - [ ]* 12.4 Write property test for footer consistency
    - **Property 20: Consistent Footer Structure**
    - **Validates: Requirements 9.4**

- [ ] 13. Verify relative paths for all resources
  - [ ] 13.1 Check CSS and JS links use relative paths
    - CSS: ../styles.css
    - JS: ../script.js
    - _Requirements: 8.4, 8.5_
  
  - [ ] 13.2 Check image paths use relative paths
    - Images: ../assets/[image-name].png
    - _Requirements: 8.4_
  
  - [ ]* 13.3 Write property test for relative resource paths
    - **Property 18: Relative Resource Paths**
    - **Validates: Requirements 8.4, 8.5**

- [ ] 14. Handle conditional specifications display
  - [ ] 14.1 Implement logic to show/hide specifications section
    - Show specifications section only if product has specs data
    - Hide section completely if no specs available
    - _Requirements: 3.6, 4.5_
  
  - [ ]* 14.2 Write property test for conditional specifications
    - **Property 5: Conditional Specifications Display**
    - **Validates: Requirements 3.6, 4.5**

- [ ] 15. Verify feature items have icons
  - [ ] 15.1 Ensure all feature list items have checkmark icons
    - Use Feather icons (check-circle)
    - Initialize icons with feather.replace()
    - _Requirements: 4.3_
  
  - [ ]* 15.2 Write property test for feature icons
    - **Property 7: Feature Items Icon Presence**
    - **Validates: Requirements 4.3**

- [ ] 16. Final checkpoint - Test all functionality
  - Test clicking product cards navigates to product pages
  - Test back button returns to catalog
  - Test breadcrumb navigation works correctly
  - Test WhatsApp links open correctly with pre-filled messages
  - Test responsive layout on mobile, tablet, and desktop
  - Verify all images load correctly
  - Verify all 10 product pages are accessible
  - Run all property-based tests
  - Ask the user if questions arise

- [ ] 17. Validate HTML and check for errors
  - [ ]* 17.1 Run HTML validation on all product pages
    - Use W3C validator or html-validate
    - Fix any validation errors
    - _Requirements: 7.6_
  
  - [ ]* 17.2 Check for broken links
    - Verify all internal links work
    - Verify all image paths are correct
    - _Requirements: 8.4_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties across all 10 products
- Unit tests validate specific examples and edge cases
- The implementation follows a logical order: create structure → add content → add styling → add interactivity → verify
- Arabic text in WhatsApp URLs must be properly encoded using encodeURIComponent
- The genuinetek-gold product has no description in the original HTML, so handle this edge case gracefully
- All product pages share the same CSS and JavaScript files to maintain consistency and reduce duplication
