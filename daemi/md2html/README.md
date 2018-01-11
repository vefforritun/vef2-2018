# Unnið með skrár

Fjórar mismunandi leiðir að sama markmiði: lesa skrá sem inniheldur markdown, breyta því í HTML og vista í nýrri skrá. Lesið er úr `test.md`, því efni breytt í Markdown með [markdown-it](), vistað í skjalið `test.html` og skrifað í console.

Keyrt með:

```
> npm install
> node md2html-sync.js
> node md2html-callbacks.js
> node md2html-promises.js
> node md2html-async-await.js
```

Í öllum dæmum vantar alla villumeðhöndlun.

[Yfirferð á dæmum í fyrirlestri](https://www.youtube.com/watch?v=fMh7m6LC3Ec).

1. [md2html-sync.js](./md2html-sync.js) – Skrár lesnar og skrifaðar _synchronously_, þetta er sísta leiðin og ætti almennt **ekki** að vera notuð
2. [md2html-callbacks.js](./md2html-callbacks.js) –
3. [md2html-promises.js](./md2html-promises.js) –
4. [md2html-async-await.js](./md2html-async-await.js) –

Með `async` og `await` getum við skrifað kóða sem svipar mjög til þess hvernig við skrifum synchronous kóða.
