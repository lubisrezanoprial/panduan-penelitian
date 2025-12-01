// Fungsi untuk load komponen
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Load header dan footer saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header', '/components/header.html');
    loadComponent('footer', '/components/footer.html');
});
