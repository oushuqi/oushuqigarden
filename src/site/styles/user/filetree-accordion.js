document.addEventListener("DOMContentLoaded", () => {
    const folderWrappers = document.querySelectorAll(".filetree-sidebar .foldername-wrapper");

    // 默认折叠所有子文件夹
    folderWrappers.forEach(wrapper => {
        const innerFolder = wrapper.querySelector(".inner-folder");
        if (innerFolder) innerFolder.style.display = "none";
    });

    // 如果有当前激活笔记，展开其路径
    const activeNote = document.querySelector(".filetree-sidebar .notelink.active-note");
    if (activeNote) {
        let parent = activeNote.parentElement;
        while (parent && parent.classList.contains("filetree-sidebar")) {
            const folderWrapper = parent.querySelector(".foldername-wrapper");
            const innerFolder = parent.querySelector(".inner-folder");
            if (innerFolder) innerFolder.style.display = "block";
            parent = parent.parentElement;
        }
    }

    // 点击事件处理
    folderWrappers.forEach(wrapper => {
        wrapper.addEventListener("click", (e) => {
            e.stopPropagation(); // 阻止事件冒泡

            const parent = wrapper.parentElement;
            const innerFolder = wrapper.querySelector(".inner-folder");
            if (!innerFolder) return;

            // 手风琴逻辑：关闭同级其他文件夹
            Array.from(parent.children).forEach(sibling => {
                if (sibling !== wrapper) {
                    const sibInner = sibling.querySelector(".inner-folder");
                    if (sibInner) sibInner.style.display = "none";
                }
            });

            // 切换当前文件夹显示/隐藏
            innerFolder.style.display = innerFolder.style.display === "block" ? "none" : "block";
        });
    });
});
