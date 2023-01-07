window.addEventListener('DOMContentLoaded', () => {

    const btnElementCode = `<li class="list-inline-item" id="theme-toggle">
                                <a href="javascript:void(0)">
                                    <i class="fas fa-sun fa-fw" id="dark-mode-toggle"></i>
                                    <i class="fas fa-moon fa-fw" id="light-mode-toggle"></i>
                                </a>
                            </li>`;

    document.querySelector('.docs-top-utilities ul').insertAdjacentHTML('afterbegin', btnElementCode);

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});