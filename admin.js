// Admin Portal Dedicated Script (admin.js)

// Retrieve custom admin credentials if set, or default to hassaan / zunain
function getAdminCredentials() {
    const custom = JSON.parse(localStorage.getItem("desi_admin_creds") || "null");
    if (custom && custom.username && custom.password) {
        return custom;
    }
    return { username: "hassaan", password: "zunain" };
}

let currentLanguage = localStorage.getItem("desi_dasterkhwan_lang") || "ur";
let savedFeedbacks = JSON.parse(localStorage.getItem("desi_dasterkhwan_feedbacks") || "[]");
let failedAttempts = parseInt(sessionStorage.getItem("desi_admin_failed_attempts") || "0");

function isAdminLoggedIn() {
    return sessionStorage.getItem("desi_admin_logged_in") === "true";
}

function checkLockout() {
    const lockoutUntil = parseInt(localStorage.getItem("desi_admin_lockout_until") || "0");
    if (Date.now() < lockoutUntil) {
        const remainingSecs = Math.ceil((lockoutUntil - Date.now()) / 1000);
        return remainingSecs;
    }
    return 0;
}

function handleAdminLogin(e) {
    e.preventDefault();
    const isUrdu = currentLanguage === "ur";
    const errEl = document.getElementById("admin-login-err");

    // Check Lockout
    const remainingSecs = checkLockout();
    if (remainingSecs > 0) {
        if (errEl) {
            errEl.style.display = "block";
            errEl.innerText = isUrdu ? 
                `🔒 حد سے زیادہ غلط کوششیں! پورٹل ${remainingSecs} سیکنڈ کے لیے لاک ہے۔` : 
                `🔒 Too many failed attempts! Portal locked for ${remainingSecs} seconds.`;
        }
        return;
    }

    const userInput = document.getElementById("ad_usr_field");
    const passInput = document.getElementById("ad_pwd_field");
    if (!userInput || !passInput) return;
    
    const enteredUser = userInput.value.trim();
    const enteredPass = passInput.value.trim();
    const creds = getAdminCredentials();

    if (enteredUser.toLowerCase() === creds.username.toLowerCase() && enteredPass === creds.password) {
        sessionStorage.setItem("desi_admin_logged_in", "true");
        sessionStorage.setItem("desi_admin_failed_attempts", "0");
        localStorage.removeItem("desi_admin_lockout_until");
        renderAdminPortal();
    } else {
        failedAttempts++;
        sessionStorage.setItem("desi_admin_failed_attempts", failedAttempts.toString());
        
        if (failedAttempts >= 3) {
            // Lockout for 3 minutes (180,000 ms)
            const lockUntil = Date.now() + 180000;
            localStorage.setItem("desi_admin_lockout_until", lockUntil.toString());
            sessionStorage.setItem("desi_admin_failed_attempts", "0");
            if (errEl) {
                errEl.style.display = "block";
                errEl.innerText = isUrdu ? 
                    "🔒 3 بار غلط لاگ ان! پورٹل 3 منٹ کے لیے لاک کر دیا گیا ہے۔" : 
                    "🔒 3 failed login attempts! Portal locked for 3 minutes.";
            }
        } else {
            if (errEl) {
                errEl.style.display = "block";
                errEl.innerText = isUrdu ? 
                    `غلط یوزر نیم یا پاس ورڈ! (باقیماندہ کوششیں: ${3 - failedAttempts})` : 
                    `Incorrect Username or Password! (${3 - failedAttempts} attempts remaining)`;
            }
        }
    }
}

function handleAdminLogout() {
    sessionStorage.removeItem("desi_admin_logged_in");
    renderAdminPortal();
}

function updateAdminCredentials(e) {
    e.preventDefault();
    const newUser = document.getElementById("new-admin-user").value.trim();
    const newPass = document.getElementById("new-admin-pass").value.trim();
    const isUrdu = currentLanguage === "ur";

    if (!newUser || !newPass) {
        alert(isUrdu ? "برائے مہربانی نیا یوزر نیم اور پاس ورڈ درج کریں!" : "Please enter both new username and password!");
        return;
    }

    localStorage.setItem("desi_admin_creds", JSON.stringify({ username: newUser, password: newPass }));
    alert(isUrdu ? "✅ ایڈمن کریڈینشلز کامیابی سے اپ ڈیٹ ہو گئے۔" : "✅ Admin credentials updated successfully!");
    renderAdminPortal();
}

function deleteFeedbackItem(index) {
    const isUrdu = currentLanguage === "ur";
    if (confirm(isUrdu ? 'کیا آپ اس رائے کو حذف کرنا چاہتے ہیں؟' : 'Are you sure you want to delete this feedback?')) {
        savedFeedbacks.splice(index, 1);
        localStorage.setItem("desi_dasterkhwan_feedbacks", JSON.stringify(savedFeedbacks));
        renderAdminPortal();
    }
}

function clearAllFeedbacks() {
    const isUrdu = currentLanguage === "ur";
    if (confirm(isUrdu ? 'کیا آپ تمام تاثرات کو حذف کرنا چاہتے ہیں؟' : 'Are you sure you want to delete ALL feedbacks?')) {
        savedFeedbacks = [];
        localStorage.setItem("desi_dasterkhwan_feedbacks", JSON.stringify(savedFeedbacks));
        renderAdminPortal();
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
}

function updateLanguageUI() {
    const isUrdu = currentLanguage === "ur";
    document.documentElement.dir = isUrdu ? "rtl" : "ltr";
    if (isUrdu) {
        document.documentElement.classList.add("ur-lang");
    } else {
        document.documentElement.classList.remove("ur-lang");
    }

    const langBtnText = document.getElementById("lang-btn-text");
    if (langBtnText) langBtnText.innerText = isUrdu ? "English" : "اردو";

    const backHomeText = document.getElementById("back-home-text");
    if (backHomeText) backHomeText.innerText = isUrdu ? "اصلی ویب سائٹ" : "Main Website";

    const logoText = document.getElementById("logo-text");
    if (logoText) logoText.innerHTML = isUrdu ? 'دیسی <span>دسترخوان</span> <small style="font-size:0.5em; opacity:0.8; color:var(--color-primary);">ایڈمن</small>' : 'Desi <span>Dasterkhwan</span> <small style="font-size:0.5em; opacity:0.8; color:var(--color-primary);">Admin</small>';
}

let userHasTypedUser = false;
let userHasTypedPass = false;

window.onUserTypedField = function(fieldType) {
    if (fieldType === 'user') userHasTypedUser = true;
    if (fieldType === 'pass') userHasTypedPass = true;
};

// Security Loop: Every 40ms, if user has NOT physically typed on their keyboard, wipe browser autofills!
setInterval(() => {
    if (!isAdminLoggedIn()) {
        const u = document.getElementById("ad_usr_field");
        const p = document.getElementById("ad_pwd_field");
        if (u && !userHasTypedUser && u.value !== "") {
            u.value = "";
        }
        if (p && !userHasTypedPass && p.value !== "") {
            p.value = "";
        }
    }
}, 40);

function renderAdminPortal() {
    updateLanguageUI();
    const appEl = document.getElementById("admin-app");
    if (!appEl) return;

    // Reset user typing flags on fresh render
    userHasTypedUser = false;
    userHasTypedPass = false;

    const isUrdu = currentLanguage === "ur";
    savedFeedbacks = JSON.parse(localStorage.getItem("desi_dasterkhwan_feedbacks") || "[]");

    if (!isAdminLoggedIn()) {
        const lockoutRemaining = checkLockout();
        appEl.innerHTML = `
            <div class="admin-portal-card" style="max-width:480px;">
                <div class="admin-login-box">
                    <div class="admin-login-header">
                        <i class="fas fa-shield-halved admin-login-icon" style="color:var(--color-primary);"></i>
                        <h2>${isUrdu ? "ایڈمن پورٹل لاگ ان" : "Admin Portal Login"}</h2>
                        <p>${isUrdu ? "صرف ایڈمن کے لیے۔ لاگ ان کرنے کے لیے یوزر نیم اور پاس ورڈ درج کریں۔" : "Authorized Admin access only. Enter your credentials to login."}</p>
                    </div>
                    
                    <div id="admin-login-form" class="admin-login-form">
                        <div class="form-group">
                            <label for="ad_usr_field"><i class="fas fa-user"></i> ${isUrdu ? "یوزر نیم (Username)" : "Username"}</label>
                            <input type="text" id="ad_usr_field" name="q_search_usr" required placeholder="${isUrdu ? 'اپنا یوزر نیم درج کریں...' : 'Enter your username...'}" class="form-control" autocomplete="off" value="" oninput="onUserTypedField('user')" onkeydown="if(event.key==='Enter') document.getElementById('btn-admin-submit-trigger').click()">
                        </div>
                        <div class="form-group">
                            <label for="ad_pwd_field"><i class="fas fa-key"></i> ${isUrdu ? "پاس ورڈ (Password)" : "Password"}</label>
                            <input type="text" id="ad_pwd_field" name="q_search_pwd" required placeholder="••••••••" class="form-control" autocomplete="off" value="" style="-webkit-text-security: disc; text-security: disc;" oninput="onUserTypedField('pass')" onkeydown="if(event.key==='Enter') document.getElementById('btn-admin-submit-trigger').click()">
                        </div>
                        <button type="button" id="btn-admin-submit-trigger" onclick="handleAdminLogin(event)" class="btn-submit-admin-login">
                            <i class="fas fa-right-to-bracket"></i> ${isUrdu ? "سیکیور لاگ ان" : "Secure Admin Login"}
                        </button>
                        <div id="admin-login-err" class="admin-login-err" style="${lockoutRemaining > 0 ? 'display:block;' : 'display:none;'} margin-top:14px;">
                            ${lockoutRemaining > 0 ? (isUrdu ? `🔒 پورٹل ${lockoutRemaining} سیکنڈ کے لیے لاک ہے۔` : `🔒 Portal locked for ${lockoutRemaining}s.`) : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    // Authenticated Dashboard View
    const totalFeedbacks = savedFeedbacks.length;
    let avgRating = 5;
    if (totalFeedbacks > 0) {
        const sum = savedFeedbacks.reduce((acc, curr) => acc + parseInt(curr.rating || 5), 0);
        avgRating = (sum / totalFeedbacks).toFixed(1);
    }

    let feedbackRowsHtml = "";
    if (totalFeedbacks === 0) {
        feedbackRowsHtml = `<div class="no-data-msg">${isUrdu ? 'ابھی تک کوئی کسٹمر رائے موصول نہیں ہوئی۔' : 'No customer feedback received yet.'}</div>`;
    } else {
        savedFeedbacks.forEach((fb, idx) => {
            const starsCount = parseInt(fb.rating || 5);
            const stars = "★".repeat(starsCount) + "☆".repeat(5 - starsCount);
            feedbackRowsHtml += `
                <div class="admin-feedback-item">
                    <div class="admin-fb-header">
                        <div>
                            <h4>${escapeHtml(fb.name)} <span class="fb-email">(${escapeHtml(fb.email)})</span></h4>
                            <span class="fb-date"><i class="far fa-calendar-alt"></i> ${fb.date}</span>
                        </div>
                        <div class="admin-fb-actions">
                            <span class="fb-stars" style="color:var(--color-primary); font-size:1.1rem;">${stars}</span>
                            <button type="button" onclick="deleteFeedbackItem(${idx})" class="btn-delete-fb" title="Delete">
                                <i class="fas fa-trash-alt"></i> ${isUrdu ? 'حذف کریں' : 'Delete'}
                            </button>
                        </div>
                    </div>
                    <p class="admin-fb-text">${escapeHtml(fb.comments)}</p>
                </div>
            `;
        });
    }

    const currentCreds = getAdminCredentials();

    appEl.innerHTML = `
        <div class="admin-portal-card">
            <div class="admin-dashboard">
                <div class="admin-dash-header">
                    <div>
                        <h2><i class="fas fa-user-shield"></i> ${isUrdu ? "ایڈمن ڈیش بورڈ" : "Admin Dashboard"}</h2>
                        <p>${isUrdu ? "خوش آمدید! تمام کسٹمر فید بیکس اور پورٹل مینیج کریں" : "Welcome Admin! Manage customer feedbacks & settings"}</p>
                    </div>
                    <div style="display:flex; gap:10px;">
                        <a href="index.html" class="btn-admin-logout" style="text-decoration:none; background:var(--color-bg); color:var(--color-text-primary); border-color:var(--color-border);">
                            <i class="fas fa-home"></i> ${isUrdu ? "اصلی سائٹ" : "Main Site"}
                        </a>
                        <button onclick="handleAdminLogout()" class="btn-admin-logout">
                            <i class="fas fa-sign-out-alt"></i> ${isUrdu ? "لاگ آؤٹ" : "Logout"}
                        </button>
                    </div>
                </div>

                <div class="admin-stats-grid">
                    <div class="stat-card">
                        <i class="fas fa-comments stat-icon"></i>
                        <div>
                            <span class="stat-num">${totalFeedbacks}</span>
                            <span class="stat-label">${isUrdu ? "کل رائے" : "Total Feedbacks"}</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-star stat-icon"></i>
                        <div>
                            <span class="stat-num">${avgRating} ★</span>
                            <span class="stat-label">${isUrdu ? "اوسط ریٹنگ" : "Average Rating"}</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-utensils stat-icon"></i>
                        <div>
                            <span class="stat-num">60</span>
                            <span class="stat-label">${isUrdu ? "کل ریسپیز" : "Total Recipes"}</span>
                        </div>
                    </div>
                </div>

                <div class="admin-feedbacks-section" style="margin-bottom:40px;">
                    <div class="admin-sec-header">
                        <h3><i class="fas fa-comment-dots"></i> ${isUrdu ? "صارفین کی رائے کی فہرست" : "Customer Feedbacks List"}</h3>
                        ${totalFeedbacks > 0 ? `<button onclick="clearAllFeedbacks()" class="btn-clear-all"><i class="fas fa-trash"></i> ${isUrdu ? 'تمام حذف کریں' : 'Clear All'}</button>` : ''}
                    </div>
                    <div class="admin-feedbacks-list">
                        ${feedbackRowsHtml}
                    </div>
                </div>

                <!-- Admin Security Credentials Update Box -->
                <div class="admin-security-card" style="background:var(--color-bg); border:1px solid var(--color-border); padding:24px; border-radius:18px;">
                    <h3 style="margin-top:0; font-family:var(--font-heading); font-size:1.3rem; color:var(--color-text-primary);">
                        <i class="fas fa-user-lock" style="color:var(--color-primary); margin-right:8px;"></i> 
                        ${isUrdu ? "ایڈمن لاگ ان کریڈینشلز تبدیل کریں" : "Update Admin Login Credentials"}
                    </h3>
                    <form id="update-creds-form" style="display:flex; flex-wrap:wrap; gap:16px; align-items:flex-end;">
                        <div class="form-group" style="flex:1; min-width:200px; margin:0;">
                            <label for="new-admin-user">${isUrdu ? "نیا یوزر نیم" : "New Username"}</label>
                            <input type="text" id="new-admin-user" required placeholder="${isUrdu ? 'نیا یوزر نیم لکھیں...' : 'Enter new username...'}" class="form-control">
                        </div>
                        <div class="form-group" style="flex:1; min-width:200px; margin:0;">
                            <label for="new-admin-pass">${isUrdu ? "نیا پاس ورڈ" : "New Password"}</label>
                            <input type="password" id="new-admin-pass" required placeholder="••••••••" class="form-control">
                        </div>
                        <button type="submit" class="btn-primary" style="padding:12px 24px;">
                            <i class="fas fa-save"></i> ${isUrdu ? "محفوظ کریں" : "Save Credentials"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;

    const credsForm = document.getElementById("update-creds-form");
    if (credsForm) credsForm.addEventListener("submit", updateAdminCredentials);
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    renderAdminPortal();

    const langBtn = document.getElementById("lang-toggle-btn");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentLanguage = currentLanguage === "en" ? "ur" : "en";
            localStorage.setItem("desi_dasterkhwan_lang", currentLanguage);
            renderAdminPortal();
        });
    }
});
