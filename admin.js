// Admin Portal Dedicated Script (admin.js)

const ADMIN_USERNAME = "hassaan";
const ADMIN_PASSWORD = "zunain";

let currentLanguage = localStorage.getItem("desi_dasterkhwan_lang") || "ur";
let savedFeedbacks = JSON.parse(localStorage.getItem("desi_dasterkhwan_feedbacks") || "[]");

function isAdminLoggedIn() {
    return sessionStorage.getItem("desi_admin_logged_in") === "true";
}

function handleAdminLogin(e) {
    e.preventDefault();
    const userInput = document.getElementById("admin-user");
    const passInput = document.getElementById("admin-pass");
    if (!userInput || !passInput) return;
    
    const enteredUser = userInput.value.trim();
    const enteredPass = passInput.value.trim();
    const isUrdu = currentLanguage === "ur";

    if (enteredUser.toLowerCase() === ADMIN_USERNAME.toLowerCase() && enteredPass === ADMIN_PASSWORD) {
        sessionStorage.setItem("desi_admin_logged_in", "true");
        renderAdminPortal();
    } else {
        const errEl = document.getElementById("admin-login-err");
        if (errEl) {
            errEl.style.display = "block";
            errEl.innerText = isUrdu ? "غلط یوزر نیم یا پاس ورڈ!" : "Incorrect Username or Password!";
        }
    }
}

function handleAdminLogout() {
    sessionStorage.removeItem("desi_admin_logged_in");
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

function renderAdminPortal() {
    updateLanguageUI();
    const appEl = document.getElementById("admin-app");
    if (!appEl) return;

    const isUrdu = currentLanguage === "ur";
    savedFeedbacks = JSON.parse(localStorage.getItem("desi_dasterkhwan_feedbacks") || "[]");

    if (!isAdminLoggedIn()) {
        appEl.innerHTML = `
            <div class="admin-portal-card" style="max-width:480px;">
                <div class="admin-login-box">
                    <div class="admin-login-header">
                        <i class="fas fa-user-shield admin-login-icon"></i>
                        <h2>${isUrdu ? "ایڈمن پورٹل لاگ ان" : "Admin Portal Login"}</h2>
                        <p>${isUrdu ? "صارفین کی رائے دیکھنے کے لیے اپنے کریڈینشلز درج کریں۔" : "Enter admin username & password to access portal."}</p>
                    </div>
                    
                    <form id="admin-login-form" class="admin-login-form">
                        <div class="form-group">
                            <label for="admin-user">${isUrdu ? "یوزر نیم (Username)" : "Username"}</label>
                            <input type="text" id="admin-user" required placeholder="${isUrdu ? 'یوزر نیم درج کریں...' : 'Enter username...'}" class="form-control" value="hassaan">
                        </div>
                        <div class="form-group">
                            <label for="admin-pass">${isUrdu ? "پاس ورڈ (Password)" : "Password"}</label>
                            <input type="password" id="admin-pass" required placeholder="••••••••" class="form-control" value="zunain">
                        </div>
                        <button type="submit" class="btn-submit-admin-login">
                            <i class="fas fa-right-to-bracket"></i> ${isUrdu ? "لاگ ان کریں" : "Login to Admin"}
                        </button>
                        <div id="admin-login-err" class="admin-login-err" style="display:none; margin-top:12px;"></div>
                    </form>
                </div>
            </div>
        `;
        const form = document.getElementById("admin-login-form");
        if (form) form.addEventListener("submit", handleAdminLogin);
        return;
    }

    // Dashboard View
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

    appEl.innerHTML = `
        <div class="admin-portal-card">
            <div class="admin-dashboard">
                <div class="admin-dash-header">
                    <div>
                        <h2><i class="fas fa-user-shield"></i> ${isUrdu ? "ایڈمن ڈیش بورڈ" : "Admin Dashboard"}</h2>
                        <p>${isUrdu ? "تمام کسٹمر فید بیک اور پورٹل کا انتظامی کنٹرول" : "Overview of customer feedback and application stats"}</p>
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

                <div class="admin-feedbacks-section">
                    <div class="admin-sec-header">
                        <h3><i class="fas fa-comment-dots"></i> ${isUrdu ? "صارفین کی رائے کی فہرست" : "Customer Feedbacks List"}</h3>
                        ${totalFeedbacks > 0 ? `<button onclick="clearAllFeedbacks()" class="btn-clear-all"><i class="fas fa-trash"></i> ${isUrdu ? 'تمام حذف کریں' : 'Clear All'}</button>` : ''}
                    </div>
                    <div class="admin-feedbacks-list">
                        ${feedbackRowsHtml}
                    </div>
                </div>
            </div>
        </div>
    `;
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
