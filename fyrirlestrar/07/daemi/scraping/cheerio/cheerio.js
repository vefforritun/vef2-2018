const cheerio = require('cheerio');

const html = `
  <div class="foo">
    <ul>
      <li>foo!</li>
      <li>bar?</li>
      <li>baz</li>
    </ul>
    <div>div!</div>
    <p>Fyrsta p</p>
    <p>Annað p</p>
  </div>
`;

const $ = cheerio.load(html);

const li = $('ul > li:nth-child(2)');
console.log(li.text());

const p = $('div.foo').find('div').next('p');
console.log(p.text());

const lis = $('.foo ul li');
lis.each((i, el) => {
  const li = $(el);
  console.log(`<li> nr. ${i} = ${li.text()}`);
});
