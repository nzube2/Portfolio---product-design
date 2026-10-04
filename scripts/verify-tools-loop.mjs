import puppeteer from 'puppeteer';
const b=await puppeteer.launch();const p=await b.newPage();
for(const width of [360,768,1440]) {
 await p.setViewport({width,height:900});await p.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle2'});await p.locator('.tools-section').scroll();await new Promise(r=>setTimeout(r,1700));
 console.log(await p.evaluate(()=>({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,animation:getComputedStyle(document.querySelector('.tools-track')).animationName,aligned:document.querySelector('.about-heading').getBoundingClientRect().left===document.querySelector('.about-text').getBoundingClientRect().left})));
 await p.locator('.tools-pause').click(); console.log('pause',await p.evaluate(()=>getComputedStyle(document.querySelector('.tools-track')).animationPlayState));
 if(width===360||width===1440)await p.screenshot({path:`artifacts/tools-loop-${width}.png`});
}
await p.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);await p.setViewport({width:360,height:900});await p.reload({waitUntil:'networkidle2'});console.log('reduced',await p.evaluate(()=>({animation:getComputedStyle(document.querySelector('.tools-track')).animationName,overflow:document.documentElement.scrollWidth>innerWidth})));
await b.close();
