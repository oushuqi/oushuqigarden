document.querySelectorAll('.foldername-wrapper').forEach(folder => {
  folder.addEventListener('click', (e) => {
    // 阻止点击子文件触发父折叠
    if(e.target.classList.contains('notelink')) return;

    // 关闭同级其他文件夹
    document.querySelectorAll('.foldername-wrapper').forEach(f => {
      if (f !== folder) f.classList.remove('active');
    });

    // 切换当前文件夹
    folder.classList.toggle('active');
  });
});
