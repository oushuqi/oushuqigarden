document.addEventListener("DOMContentLoaded", () => {
  // 只折叠有父文件夹的 inner-folder
  document.querySelectorAll(".filetree-sidebar .foldername-wrapper .inner-folder").forEach(inner => {
    inner.style.display = "none";
  });

  const folders = document.querySelectorAll(".filetree-sidebar .foldername-wrapper");

  folders.forEach(folder => {
    folder.addEventListener("click", e => {
      e.stopPropagation();

      const inner = folder.querySelector(".inner-folder");
      if (!inner) return; // 没有子文件夹就直接返回

      const parent = folder.parentElement;

      // 只折叠同级的 inner-folder，而不是顶层文件夹
      Array.from(parent.children).forEach(sib => {
        if (sib !== folder && sib.classList.contains("foldername-wrapper")) {
          const sibInner = sib.querySelector(".inner-folder");
          if (sibInner) sibInner.style.display = "none";
        }
      });

      // 切换当前文件夹
      inner.style.display = (inner.style.display === "block") ? "none" : "block";
    });
  });
});
