// script.js
// Google Ads Conversion Tracking

// ========== Google Ads Conversion Tracking ==========

// Track conversion event
function trackConversion(eventName, eventParams) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventParams);
    }
}

// Extract product name from WhatsApp URL
function extractProductName(url) {
    const match = url.match(/text=.*?عن\s+(.+?)(?:$|&)/);
    if (match) {
        return decodeURIComponent(match[1].replace(/\+/g, ' '));
    }
    return '';
}

// WhatsApp Click Handler
function handleWhatsAppClick(event, buttonId, originalUrl) {
    event.preventDefault();
    
    const productName = extractProductName(originalUrl);
    
    // Track the event
    trackConversion('whatsapp_click', {
        'send_to': 'AW-17929209756',
        'button_id': buttonId,
        'product_name': productName || 'general'
    });
    
    // Also track for TikTok if available
    if (typeof ttq !== 'undefined') {
        ttq.track('Contact', {
            content_name: productName || 'WhatsApp Contact',
            content_type: 'whatsapp'
        });
    }
    
    // Redirect to thank you page
    const thankYouUrl = 'thank-you.html?type=whatsapp&dest=' + encodeURIComponent(originalUrl) + '&product=' + encodeURIComponent(productName || '');
    window.location.href = thankYouUrl;
}

// Phone Click Handler
function handlePhoneClick(event, buttonId) {
    event.preventDefault();
    
    // Track the event
    trackConversion('phone_click', {
        'send_to': 'AW-17929209756',
        'button_id': buttonId
    });
    
    // Also track for TikTok if available
    if (typeof ttq !== 'undefined') {
        ttq.track('Contact', {
            content_name: 'Phone Call',
            content_type: 'phone'
        });
    }
    
    // Redirect to thank you page
    const thankYouUrl = 'thank-you.html?type=phone&dest=tel:01125655647';
    window.location.href = thankYouUrl;
}

// Initialize conversion tracking for all buttons
function initConversionTracking() {
    // WhatsApp buttons configuration
    var whatsappButtons = [
        { id: 'wa-btn-header', selector: '#wa-btn-header' },
        { id: 'wa-btn-hero', selector: '#wa-btn-hero' },
        { id: 'wa-btn-white-shark', selector: '#wa-btn-white-shark' },
        { id: 'wa-btn-huawei-quad', selector: '#wa-btn-huawei-quad' },
        { id: 'wa-btn-golden-shark', selector: '#wa-btn-golden-shark' },
        { id: 'wa-btn-quad-silver', selector: '#wa-btn-quad-silver' },
        { id: 'wa-btn-wingstel', selector: '#wa-btn-wingstel' },
        { id: 'wa-btn-triple-display', selector: '#wa-btn-triple-display' },
        { id: 'wa-btn-five-band', selector: '#wa-btn-five-band' },
        { id: 'wa-btn-genuinetek-silver', selector: '#wa-btn-genuinetek-silver' },
        { id: 'wa-btn-genuinetek-gold', selector: '#wa-btn-genuinetek-gold' },
        { id: 'wa-btn-golden-classic', selector: '#wa-btn-golden-classic' },
        { id: 'wa-btn-contact', selector: '#wa-btn-contact' }
    ];

    // Phone buttons configuration
    var phoneButtons = [
        { id: 'phone-btn-header', selector: '#phone-btn-header' },
        { id: 'phone-btn-contact', selector: '#phone-btn-contact' }
    ];

    // Attach event listeners to WhatsApp buttons
    whatsappButtons.forEach(function(btn) {
        var element = document.querySelector(btn.selector);
        if (element) {
            element.addEventListener('click', function(e) {
                handleWhatsAppClick(e, btn.id, element.href);
            });
        }
    });

    // Attach event listeners to Phone buttons
    phoneButtons.forEach(function(btn) {
        var element = document.querySelector(btn.selector);
        if (element) {
            element.addEventListener('click', function(e) {
                handlePhoneClick(e, btn.id);
            });
        }
    });

    console.log('Conversion tracking initialized');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConversionTracking);
} else {
    initConversionTracking();
}
