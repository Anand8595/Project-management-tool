/ Example: Simple task status toggle
document.querySelectorAll('.task-item').forEach(task => {
    task.addEventListener('click', () => {
        task.classList.toggle('completed');
    });
});