document.addEventListener("DOMContentLoaded", () => {
    // 找到所有父文件夹元素
    const folders = document.querySelectorAll(".filetree-sidebar .foldername-wrapper");

    folders.forEach(folder => {
        folder.addEventListener("click", (e) => {
            e.stopPropagation(); // 阻止事件冒泡影响子文件夹

            const parent = folder.parentElement;

            // 自动识别折叠状态的类名
            const isOpenClass = Array.from(folder.classList).includes("is-open") ? "is-open" : "collapsed";

            // 关闭同级其他文件夹
            parent.querySelectorAll(".foldername-wrapper").forEach(sibling => {
                if (sibling !== folder) {
                    sibling.classList.remove(isOpenClass);
                }
            });

            // 切换自己状态
            folder.classList.toggle(isOpenClass);
        });
    });
});
