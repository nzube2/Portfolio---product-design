import puppeteer from 'puppeteer';
const browser=await puppeteer.launch({headless:true});
try {
 const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const width of [360,768,1024,1440]) {
  await page.setViewport({width,height:900});await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle2'});await new Promise(r=>setTimeout(r,1800));
  console.log(JSON.stringify(await page.evaluate(()=>({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,photo:document.querySelector('.hero-portrait img').naturalWidth,stamp:document.querySelector('.hero-stamp').textContent.trim(),animation:getComputedStyle(document.querySelector('.hero-stamp')).animationIterationCount,workTop:document.querySelector('.project-card').getBoundingClientRect().top}))));
  if(width===360||width===1440)await page.screenshot({path:`artifacts/portrait-hero-${width}.png`});
 }
 await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);
 console.log('Reduced motion:',await page.$eval('.hero-stamp',e=>({animation:getComputedStyle(e).animationName,opacity:getComputedStyle(e).opacity})));
 console.log('Page errors:',errors);
}finally {await browser.close();}
