# Implementation Plan: Google Ads Tracking Integration

## Overview

This implementation plan outlines the steps to integrate Google Ads tracking code into the Antwave website. The integration involves inserting the provided Google tag (gtag.js) code into the `<head>` section of the `index.html` file, followed by verification testing to ensure correct implementation.

## Tasks

- [x] 1. Insert Google Ads tracking code into index.html
  - Open the `index.html` file in the root directory
  - Locate the `<head>` section
  - Find the insertion point after the Open Graph meta tags (after `<meta property="og:image" content="assets/logo.png">`)
  - Insert the complete Google Ads tracking code block (both the external script tag and inline initialization script)
  - Ensure proper indentation matches the existing HTML structure
  - Save the file
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.4, 4.1, 4.2, 4.3_

- [ ]* 2. Create HTML structure verification tests
  - [ ]* 2.1 Write test to verify external script tag presence
    - Parse the index.html file
    - Verify script tag exists with src="https://www.googletagmanager.com/gtag/js?id=AW-17929209756"
    - Verify async attribute is present on the script tag
    - Verify script tag is located within the head section
    - **Example 1: External Script Tag Presence**
    - **Validates: Requirements 1.1, 1.2, 2.1**
  
  - [ ]* 2.2 Write test to verify inline script structure
    - Parse the index.html file
    - Extract inline script content
    - Verify dataLayer initialization statement exists
    - Verify gtag function definition exists
    - Verify gtag('js', new Date()) call exists
    - Verify gtag('config', 'AW-17929209756') call exists
    - Verify statements appear in correct order
    - **Example 2: Inline Script Structure**
    - **Validates: Requirements 1.3, 1.4, 1.5, 1.6, 4.3**
  
  - [ ]* 2.3 Write test to verify tracking ID consistency
    - Parse the index.html file
    - Extract tracking ID from external script src URL
    - Extract tracking ID from inline script config call
    - Verify both IDs are exactly "AW-17929209756"
    - **Example 3: Tracking ID Consistency**
    - **Validates: Requirements 4.1**

- [ ]* 3. Create placement and content verification tests
  - [ ]* 3.1 Write test to verify script placement
    - Parse the HTML document structure
    - Verify tracking scripts are within head element
    - Verify scripts appear after meta tags
    - Verify scripts appear before closing head tag
    - **Example 4: Script Placement**
    - **Validates: Requirements 2.1, 2.2**
  
  - [ ]* 3.2 Write test to verify code integrity
    - Extract inline script content
    - Compare against expected Google template
    - Verify exact match with no modifications
    - **Example 5: Code Integrity**
    - **Validates: Requirements 2.4, 4.2**
  
  - [ ]* 3.3 Write test to verify script size constraint
    - Extract inline script content
    - Calculate byte size
    - Verify size is less than 1024 bytes (1KB)
    - **Example 6: Script Size Constraint**
    - **Validates: Requirements 6.2**

- [ ] 4. Checkpoint - Ensure all tests pass
  - Run all verification tests
  - Fix any issues found
  - Ensure HTML is valid
  - Ask the user if questions arise

- [ ] 5. Manual verification and browser testing
  - Open index.html in Chrome browser
  - Open browser developer tools (F12)
  - Check Console tab for any JavaScript errors
  - Check Network tab to verify gtag.js loads successfully
  - Repeat testing in Firefox, Safari, and Edge browsers
  - Verify no errors occur in any browser
  - _Requirements: 5.1, 5.4_

- [ ] 6. Final checkpoint - Deployment readiness
  - Verify all automated tests pass
  - Verify manual browser testing completed successfully
  - Confirm tracking code matches Google's template exactly
  - Ensure HTML file is ready for deployment
  - Ask the user if questions arise

## Notes

- Tasks marked with `*` are optional testing tasks and can be skipped for faster deployment
- The core implementation (Task 1) is the only required task for basic functionality
- Testing tasks provide verification but are not strictly necessary if manual verification is performed
- After deployment, use Google Tag Assistant browser extension to verify tracking is working
- Monitor Google Ads account to confirm tag shows as "Active"
- The tracking code should not be modified from Google's provided version
