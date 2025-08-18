document.addEventListener("DOMContentLoaded", function () {
    const filetree = document.querySelector(".filetree-sidebar");

    if (!filetree) return;

    // 获取所有文件夹 wrapper
    const folders = filetree.querySelectorAll(".foldername-wrapper");

    folders.forEach(folder => {
        folder.addEventListener("click", function (e) {
            e.stopPropagation(); // 防止事件冒泡

            const currentlyOpen = filetree.querySelector(".foldername-wrapper.active");
            const isActive = folder.classList.contains("active");

            // 关闭其他已打开的文件夹
            if (currentlyOpen && currentlyOpen !== folder) {
                currentlyOpen.classList.remove("active");
                const inner = currentlyOpen.querySelector(".inner-folder");
                if (inner) inner.style.display = "none";
            }

            // 切换当前点击的文件夹
            const innerFolder = folder.querySelector(".inner-folder");
            if (innerFolder) {
                if (isActive) {
                    innerFolder.style.display = "none";
                    folder.classList.remove("active");
                } else {
                    innerFolder.style.display = "block";
                    folder.classList.add("active");
                }
            }
        });
    });
});
