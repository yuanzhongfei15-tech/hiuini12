let currentPoem = null;
let currentCategory = 'all';
let meaningVisible = false;

function init() {
    loadRandomPoem();
    renderPoemsList();
    setupEventListeners();
    checkThemePreference();
}

function setupEventListeners() {
    document.getElementById('randomBtn').addEventListener('click', loadRandomPoem);
    document.getElementById('meaningBtn').addEventListener('click', toggleMeaning);
    document.getElementById('copyBtn').addEventListener('click', copyPoem);
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderPoemsList();
        });
    });
}

function getFilteredPoems() {
    if (currentCategory === 'all') {
        return poemsData;
    }
    return poemsData.filter(p => p.category === currentCategory);
}

function loadRandomPoem() {
    const filtered = getFilteredPoems();
    const randomIndex = Math.floor(Math.random() * filtered.length);
    currentPoem = filtered[randomIndex];
    updatePoemDisplay();
    meaningVisible = false;
    document.getElementById('poemMeaning').style.display = 'none';
}

function updatePoemDisplay() {
    document.getElementById('poemText').textContent = currentPoem.text;
    document.getElementById('poemAuthor').textContent = `—— ${currentPoem.author}`;
    document.getElementById('meaningText').textContent = currentPoem.meaning;
}

function toggleMeaning() {
    meaningVisible = !meaningVisible;
    const meaningEl = document.getElementById('poemMeaning');
    if (meaningVisible) {
        meaningEl.style.display = 'block';
    } else {
        meaningEl.style.display = 'none';
    }
}

function copyPoem() {
    const text = `${currentPoem.text}\n${currentPoem.author}`;
    navigator.clipboard.writeText(text).then(() => {
        showToast('已复制到剪贴板');
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('已复制到剪贴板');
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

function checkThemePreference() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
    }
}

function renderPoemsList() {
    const list = document.getElementById('poemsList');
    const filtered = getFilteredPoems();
    list.innerHTML = filtered.map(poem => `
        <div class="poem-item" data-id="${poem.id}">
            <div class="poem-item-text">${poem.text}</div>
            <div class="poem-item-author">—— ${poem.author}</div>
            <span class="poem-item-category">${getCategoryName(poem.category)}</span>
        </div>
    `).join('');

    document.querySelectorAll('.poem-item').forEach(item => {
        item.addEventListener('click', () => {
            const id = parseInt(item.dataset.id);
            currentPoem = poemsData.find(p => p.id === id);
            updatePoemDisplay();
            meaningVisible = false;
            document.getElementById('poemMeaning').style.display = 'none';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function getCategoryName(category) {
    const names = {
        'tang-song': '唐诗宋词',
        'ancient': '古风文案',
        'solar': '节气诗词',
        'beautiful': '唯美短句'
    };
    return names[category] || category;
}

document.addEventListener('DOMContentLoaded', init);
