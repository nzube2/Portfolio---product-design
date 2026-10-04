import puppeteer from 'puppeteer';
import fs from 'node:fs';
fs.mkdirSync('artifacts',{recursive:true});
const browser=await puppeteer.launch({headless:true});
const report=[];
try {
 for(const route of ['/', '/case-studies/markettrack','/case-studies/guidely','/case-studies/thermal','/case-studies/portfolio']) {
  for(const width of [360,768,1024,1440]) {
   const page=await browser.newPage(); const errors=[];page.on('pageerror',e=>errors.push(e.message));
   await page.setViewport({width,height:900});await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);await page.goto('http://127.0.0.1:4173'+route,{waitUntil:'networkidle2'});await page.waitForSelector('h1');await page.evaluate(()=>document.fonts.ready);
   await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,30));}window.scrollTo(0,0);});
   const result=await page.evaluate(()=>({title:document.title,h1:document.querySelectorAll('h1').length,overflow:document.documentElement.scrollWidth>innerWidth,missingDimensions:[...document.images].filter(i=>!i.hasAttribute('width')||!i.hasAttribute('height')).map(i=>i.className),brokenImages:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src),outside:[...document.querySelectorAll('main *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+2||r.left < -2)&&getComputedStyle(e).position!=='absolute';}).slice(0,8).map(e=>e.className)}));
   report.push({route,width,...result,errors});
   if(width===360||width===1440){await page.screenshot({path:`artifacts/viewport-${route==='/'?'home':route.split('/').at(-1)}-${width}.png`});await page.screenshot({path:`artifacts/${route==='/'?'home':route.split('/').at(-1)}-${width}.png`,fullPage:true});}
   await page.close();
  }
 }
 console.log(JSON.stringify(report,null,2));fs.writeFileSync('artifacts/responsive-report.json',JSON.stringify(report,null,2));
}finally{await browser.close();}

