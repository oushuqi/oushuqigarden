document.querySelectorAll('.foldername-wrapper').forEach(folder => {
    folder.addEventListener('click', () => {
        const parent = folder.parentElement;
        // 关闭同级的其它文件夹
        parent.querySelectorAll('.foldername-wrapper').forEach(sibling => {
            if (sibling !== folder) {
                sibling.classList.remove('open'); // 假设原本展开是靠 'open' 类控制
            }
        });
        // 切换当前点击文件夹的展开状态
        folder.classList.toggle('open');
    });
});
