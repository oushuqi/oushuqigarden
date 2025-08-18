document.addEventListener("DOMContentLoaded", function () {
    const filetree = document.querySelector(".filetree-sidebar");

    if (!filetree) return;

    // 获取所有一级文件夹 wrapper
    const topFolders = filetree.querySelectorAll(":scope > .foldername-wrapper");

    topFolders.forEach(folder => {
        folder.addEventListener("click", function (e) {
            e.stopPropagation(); // 阻止冒泡

            const innerFolder = folder.querySelector(".inner-folder");
            const isActive = folder.classList.contains("active");

            // 关闭同级其他已打开的文件夹
            topFolders.forEach(f => {
                if (f !== folder) {
                    f.classList.remove("active");
                    const inner = f.querySelector(".inner-folder");
                    if (inner) inner.style.display = "none";
                }
            });

            // 切换当前点击的文件夹
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
