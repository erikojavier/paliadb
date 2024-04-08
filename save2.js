const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    const key = `checkbox-${checkbox.id}`;

    const checkedState = localStorage.getItem(key);

    if (checkedState === 'true') {
        checkbox.checked = true;
    }

    checkbox.addEventListener('change', function() {
        localStorage.setItem(key, checkbox.checked);
    });
});