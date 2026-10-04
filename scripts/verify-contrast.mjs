import puppeteer from 'puppeteer';import fs from 'node:fs';
const browser=await puppeteer.launch({headless:true});const report=[];
try{for(const route of ['/','/case-studies/markettrack','/case-studies/guidely','/case-studies/thermal','/case-studies/portfolio']){
 const page=await browser.newPage();await page.setViewport({width:1440,height:900});await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);await page.goto('http://127.0.0.1:4173'+route,{waitUntil:'networkidle2'});
 const fails=await page.evaluate(()=>{
  const rgb=s=>(s.match(/[\d.]+/g)||[]).map(Number);const lum=c=>c.slice(0,3).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0);
  const fails=[];const seen=new Set();
  for(const el of document.querySelectorAll('main p,main h1,main h2,main h3,main h4,main span,main a,header a,main li,main summary,main button')){
   if(!el.textContent.trim()||!el.getClientRects().length)continue;const style=getComputedStyle(el);if(style.visibility==='hidden'||style.opacity==='0')continue;let parent=el;let bg;let complex=false;
   while(parent){const st=getComputedStyle(parent);if(st.backgroundImage!=='none')complex=true;const col=rgb(st.backgroundColor);if(col[3]===1){bg=col;break;}parent=parent.parentElement;}
   if(!bg||complex)continue;const color=rgb(style.color);const ratio=(Math.max(lum(color),lum(bg))+.05)/(Math.min(lum(color),lum(bg))+.05);const large=parseFloat(style.fontSize)>=24||(parseFloat(style.fontSize)>=18.66&&parseInt(style.fontWeight)>=700);const key=`${style.color}/${bg}/${style.fontSize}`;
   if(ratio<(large?3:4.5)&&!seen.has(key)){seen.add(key);fails.push({class:el.className,text:el.textContent.slice(0,70),color:style.color,bg,ratio:+ratio.toFixed(2),size:style.fontSize});}
  }return fails;
 });report.push({route,fails});await page.close();}
 console.log(JSON.stringify(report,null,2));fs.writeFileSync('artifacts/contrast-report.json',JSON.stringify(report,null,2));
}finally{await browser.close();}
