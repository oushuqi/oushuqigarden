```dataview 
>>LIST 
>>Where date(today) - file.mtime <= dur(3 day) 
>>SORT file.mtime DESC 
>>LIMIT 5 
>
>>[!note]+近日新建
>>dataview
>>LIST
>>Where date(today) - file.ctime <= dur(5 day) 
>>SORT file.ctime DESC 
>>LIMIT 5 

什么什么
---

```