document.addEventListener("DOMContentLoaded", () => {
    const folderWrappers = document.querySelectorAll(".filetree-sidebar .foldername-wrapper");

    folderWrappers.forEach(wrapper => {
        wrapper.addEventListener("click", (e) => {
            e.stopPropagation(); // 阻止事件冒泡

            const parent = wrapper.parentElement;
            const innerFolder = wrapper.querySelector(".inner-folder");

            if (!innerFolder) return;

            // 手风琴逻辑：关闭同级其他文件夹
            parent.querySelectorAll(".foldername-wrapper").forEach(sibling => {
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
