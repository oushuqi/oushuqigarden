document.addEventListener("DOMContentLoaded", () => {
    // 找到所有父文件夹标题
    const folderHeaders = document.querySelectorAll(".filetree-sidebar .foldername-wrapper");

    folderHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const subFolder = header.nextElementSibling;
            
            if (!subFolder || !subFolder.classList.contains("inner-folder")) return;

            // 手风琴：关闭同级其他展开的子文件夹
            const siblings = Array.from(header.parentElement.children)
                                  .filter(el => el !== subFolder && el.classList.contains("inner-folder"));
            siblings.forEach(sib => sib.classList.remove("open"));

            // 切换当前点击的子文件夹
            subFolder.classList.toggle("open");
        });
    });
});
