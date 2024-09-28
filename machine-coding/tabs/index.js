document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active tag from buttons and panels
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
            });
            //Add active to clicked button and associated panel
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add("active");
        });
    });
})