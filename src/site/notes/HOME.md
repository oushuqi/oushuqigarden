```dataview
// ==== 配置 ====
const targetTag = "#Note";          // 要查询的标签
const publishFlag = "dg-publish";   // 发布标识字段
const limit = 15;                   // 显示的最大条目数

// ==== 获取文件：按最后编辑时间倒序 + 限制数量 ====
const pages = dv.pages(targetTag)
    .where(p => p[publishFlag] === true)               // 筛选已发布
    .sort(p => p.file.mtime, 'desc')                   // 按最后编辑时间倒序
    .limit(limit);                                     // 限制数量

// ==== 标签过滤（可选功能，按需取消调用） ====
const filterAndFormatTags = (tags) => {
    if (!tags) return "";
    const filtered = tags.filter(tag =>
        !tag.startsWith("#Note") &&
        !tag.endsWith("#Area") &&
        !tag.endsWith("#Post") &&
        !tag.endsWith("#Ref") &&
        !tag.includes("/#Note")
    );
    return filtered.join(", ");
};

// ==== 构建表格数据 ====
const data = pages.map(p => [
    p.file.link,                                       // 笔记链接
    // filterAndFormatTags(p.file.tags),               // 标签列（可选，按需启用）
    dv.date(p.file.mtime).toISODate()                  // 最后编辑时间
]);

// ==== 渲染表格（无标签列版本） ====
dv.table(
    ["Note", "Updated"],                               // 表头
    data
);

// ==== 添加紧凑样式 ====
dv.el("style", `
.dataview.table-view-table th:nth-child(2),
.dataview.table-view-table td:nth-child(2) {
    width: 25%;          /* 固定日期列宽度 */
    text-align: right;   /* 日期右对齐 */
}
`);

```