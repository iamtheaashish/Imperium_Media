// Consultation modal logic
const consultationModal = document.getElementById('consultationModal');
const consultationForm = document.getElementById('consultationForm');
const consultationSuccess = document.getElementById('consultationSuccess');

const openModal = () => {
    consultationModal.classList.add('is-open');
    consultationModal.setAttribute('aria-hidden', 'false');
    const firstInput = consultationModal.querySelector('input');
    if (firstInput) {
        firstInput.focus();
    }
};

const closeModal = () => {
    consultationModal.classList.remove('is-open');
    consultationModal.setAttribute('aria-hidden', 'true');
    consultationSuccess.textContent = '';
    consultationForm.reset();
};

document.querySelectorAll('[data-open-modal="consultation"]').forEach(button => {
    button.addEventListener('click', openModal);
});

document.querySelectorAll('[data-close-modal="consultation"]').forEach(button => {
    button.addEventListener('click', closeModal);
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && consultationModal.classList.contains('is-open')) {
        closeModal();
    }
});

consultationForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(consultationForm);
    const ownerName = formData.get('ownerName')?.toString().trim() || '';
    const businessName = formData.get('businessName')?.toString().trim() || '';
    const businessLocation = formData.get('businessLocation')?.toString().trim() || '';
    const phoneNumber = formData.get('phoneNumber')?.toString().trim() || '';
    const ownerEmail = formData.get('ownerEmail')?.toString().trim() || '';
    const socialLink = formData.get('socialLink')?.toString().trim() || '';

    const subject = `Consultation Request - ${businessName || 'New Lead'}`;
    const bodyLines = [
        `Owner Name: ${ownerName}`,
        `Business Name: ${businessName}`,
        `Business Location: ${businessLocation}`,
        `Phone Number: ${phoneNumber}`,
        `Email Address: ${ownerEmail}`,
        `Social Media Link: ${socialLink || 'N/A'}`,
        '',
        'Please reply directly to the email address above.'
    ];

    const mailtoLink = `mailto:theimperiummedia@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailtoLink;
    consultationSuccess.textContent = 'Thanks! Your email app should open to send the request.';
});

// Add scroll animation for service cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});
