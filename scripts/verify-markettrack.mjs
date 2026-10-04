import puppeteer from 'puppeteer';
const b=await puppeteer.launch();const p=await b.newPage();const errors=[];p.on('pageerror',e=>errors.push(e.message));
for(const width of [360,768,1024,1440]) {
 await p.setViewport({width,height:1000});await p.goto('http://127.0.0.1:4173/case-studies/markettrack',{waitUntil:'networkidle2'});
 console.log(await p.evaluate(()=>({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,h1:document.querySelectorAll('h1').length,sections:document.querySelectorAll('.mt-section').length,images:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).length})));
 if(width===360||width===1440)await p.screenshot({path:`artifacts/markettrack-redesign-${width}.png`});
}
await p.locator('a[href="#problem"]').click();await new Promise(r=>setTimeout(r,800));console.log('anchor',await p.evaluate(()=>document.querySelector('#problem').getBoundingClientRect().top));console.log('errors',errors);await b.close();
