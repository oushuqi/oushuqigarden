document.addEventListener("DOMContentLoaded", () => {
  const folders = document.querySelectorAll(".filetree-sidebar .foldername-wrapper");

  folders.forEach(folder => {
    const innerFolder = folder.nextElementSibling;
    if (innerFolder && innerFolder.classList.contains("inner-folder")) {
      // 初始化折叠样式
      innerFolder.style.maxHeight = "0";
      innerFolder.style.overflow = "hidden";
      innerFolder.style.transition = "max-height 0.3s ease";

      folder.addEventListener("click", () => {
        const isOpen = innerFolder.style.maxHeight !== "0px";

        // 关闭同级其他文件夹
        const siblingFolders = folder.parentElement.querySelectorAll(".inner-folder");
        siblingFolders.forEach(sib => {
          sib.style.maxHeight = "0";
        });

        // 切换当前文件夹
        if (!isOpen) {
          innerFolder.style.maxHeight = innerFolder.scrollHeight + "px";
        }
      });
    }
  });
});
