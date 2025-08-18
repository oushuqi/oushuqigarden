document.addEventListener("DOMContentLoaded", () => {
  const folders = document.querySelectorAll(".filetree-sidebar .foldername-wrapper");

  folders.forEach((folder) => {
    folder.addEventListener("click", (e) => {
      e.stopPropagation(); // 防止冒泡影响父文件夹

      const parent = folder.parentElement; // 同级文件夹容器
      const siblings = Array.from(parent.children).filter(
        (child) => child !== folder && child.classList.contains("foldername-wrapper")
      );

      // 折叠同级其他文件夹
      siblings.forEach((sib) => {
        sib.classList.remove("expanded");
        const inner = sib.querySelector(".inner-folder");
        if (inner) inner.style.display = "none";
      });

      // 切换当前文件夹展开状态
      const innerFolder = folder.querySelector(".inner-folder");
      if (innerFolder) {
        const isExpanded = folder.classList.toggle("expanded");
        innerFolder.style.display = isExpanded ? "block" : "none";
      }
    });
  });
});
