---
{"dg-publish":true,"dg-home":true,"dg-pinned":true,"dg-show-backlinks":"false","permalink":"/HOME/","pinned":true,"tags":["gardenEntry"],"dgShowBacklinks":"false","dgPassFrontmatter":true,"noteIcon":""}
---

# Hi, there
![IMG_0647.png](/img/user/IMG_0647.png)

*<生命是一场奇遇，我希望你永远超级幸福。>*
__________________________________



| File | Last Modified |
| ---- | ------------- |

{ .block-language-dataview}


```dataviewjs

// ===== 配置区 =====
const targetFolder = "2.2-Cards";  // 目标文件夹
const maxNotes = 20;                // 最近编辑的笔记数量
const maxTags = 15;                 // 显示最多标签数量
const minFrequency = 1;             // 标签最低出现次数
const columns = 3;                   // 表格列数

// ===== 1. 获取最近笔记 =====
const recentPages = dv.pages(`"${targetFolder}"`)
    .sort(p => p.file.mtime, 'desc')
    .limit(maxNotes);

// ===== 2. 统计标签频次 =====
const tagCount = {};
recentPages.forEach(page => {
    // 兼容 YAML 标签和正文标签
    const tags = page.file.tags || [];
    tags.forEach(tag => {
        const cleanTag = tag.replace(/^#/, ''); // 去掉 #
        tagCount[cleanTag] = (tagCount[cleanTag] || 0) + 1;
    });
});

// ===== 3. 筛选并排序 =====
const sortedTags = Object.entries(tagCount)
    .filter(([_, count]) => count >= minFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxTags)
    .map(([tag, count]) => `${tag} (${count})`);

// ===== 4. 按列分组 =====
const chunkArray = (array, size) => {
    const rows = [];
    for (let i = 0; i < array.length; i += size) {
        rows.push(array.slice(i, i + size));
    }
    if (rows.length > 0) {
        const lastRow = rows[rows.length - 1];
        while (lastRow.length < size) lastRow.push("");
    }
    return rows;
};
const tagColumns = chunkArray(sortedTags, columns);

// ===== 5. 渲染表格 =====
if (sortedTags.length > 0) {
    dv.paragraph(`**最近 ${maxNotes} 篇笔记的高频标签：**`);
    dv.table([], tagColumns);
} else {
    dv.paragraph("⚠️ 目标文件夹中未找到符合条件的标签");
}

