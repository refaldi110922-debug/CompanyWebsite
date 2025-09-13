// jalankan saat DOM siap
document.addEventListener('DOMContentLoaded', function() {

  // 1) Message Us form validation + show value
    const form = document.getElementById('messageForm');
    const output = document.getElementById('formOutput');
    if (form) {
        form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name  = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const msg   = document.getElementById('message').value.trim();

        if (!name || !email || !phone || !msg) {
            alert('Semua field harus diisi!');
            return;
        }
        // simple email check
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert('Format email tidak valid');
            return;
        }
        // phone check: digits and optional +
        if (!/^\+?\d{7,15}$/.test(phone)) {
            alert('Nomor telepon tidak valid (7-15 digit)');
            return;
        }

        // tampilkan hasil
        output.innerHTML = `
            <div class="result">
            <h3>Form Result</h3>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Message:</strong> ${escapeHtml(msg)}</p>
            </div>
        `;

        form.reset();
        });
    }

    // 2) mobile navbar toggle (simple)
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
        const shown = navList.style.display === 'flex';
        navList.style.display = shown ? 'none' : 'flex';
        });
    }
    });

    // helper untuk escape output (basic)
    function escapeHtml(text) {
    return text.replace(/[&<>"']/g, function(m) {
        return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m];
    });
}
