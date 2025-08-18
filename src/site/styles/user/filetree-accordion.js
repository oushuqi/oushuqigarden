document.addEventListener("DOMContentLoaded", () => {
  const folders = document.querySelectorAll(".filetree-sidebar .foldername-wrapper");

  folders.forEach(folder => {
    // 给每个有子文件夹的文件夹添加标记
    const innerFolder = folder.nextElementSibling;
    if (innerFolder && innerFolder.classList.contains("inner-folder")) {
      // 默认折叠
      innerFolder.style.display = "none";

      // 点击标题折叠/展开
      folder.addEventListener("click", () => {
        const isOpen = innerFolder.style.display === "block";

        // 先关闭同级所有子文件夹
        const siblingFolders = folder.parentElement.querySelectorAll(".inner-folder");
        siblingFolders.forEach(sib => {
          sib.style.display = "none";
        });

        // 再展开当前（如果之前是关闭的）
        if (!isOpen) {
          innerFolder.style.display = "block";
        }
      });
    }
  });
});
