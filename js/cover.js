function handleCoverClick(pageId) {
    // ซ่อนหน้าปก
    document.getElementById('cover-page').style.display = 'none';
    // เปลี่ยนไปยังหน้าที่ต้องการ
    goToPage(pageId);
}

function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        updateNavUnderline();
        checkFooterVisibility();
    }
}
