import puppeteer from 'puppeteer';import fs from 'node:fs';
const browser=await puppeteer.launch({headless:true});const checks=[];const assert=(name,pass)=>{checks.push({name,pass});if(!pass)throw Error(name);};
try {
 const page=await browser.newPage();await page.setViewport({width:360,height:800});await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);await page.goto('http://127.0.0.1:4173',{waitUntil:'networkidle2'});
 await page.keyboard.press('Tab');assert('Skip link is the first keyboard target',await page.evaluate(()=>document.activeElement.className==='skip-link'));
 await page.keyboard.press('Enter');assert('Skip link reaches main',await page.evaluate(()=>document.activeElement.id==='main-content'));
 await page.click('.menu-toggle');assert('Mobile menu announces expanded state',await page.$eval('.menu-toggle',e=>e.getAttribute('aria-expanded')==='true'));
 await page.keyboard.press('Escape');assert('Escape closes menu and returns focus',await page.evaluate(()=>document.activeElement.className==='menu-toggle'&&document.activeElement.getAttribute('aria-expanded')==='false'));
 await page.click('.menu-toggle');await page.click('#mobile-navigation a[href="/#about"]');assert('Selecting an anchor closes mobile menu',await page.$eval('.menu-toggle',e=>e.getAttribute('aria-expanded')==='false'));
 assert('Reduced motion disables hero entrance',await page.$eval('.display-text',e=>getComputedStyle(e).animationName==='none'));
 await page.goto('http://127.0.0.1:4173/case-studies/thermal',{waitUntil:'networkidle2'});assert('Reduced motion prevents decorative video playback',await page.$$eval('video',videos=>videos.every(v=>v.paused)));
 await page.goto('http://127.0.0.1:4173',{waitUntil:'networkidle2'});await page.click('.project-link');await page.waitForSelector('.portfolio-hero-heading');assert('Project link reaches preserved route',page.url().includes('/case-studies/markettrack'));
 await page.click('.portfolio-next');await page.waitForSelector('.guidely-hero-heading');assert('Next-project navigation works',page.url().includes('/case-studies/guidely'));
 await page.goto('http://127.0.0.1:4173',{waitUntil:'networkidle2'});await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'no-preference'}]);await page.reload({waitUntil:'networkidle2'});
 await page.$eval('.project-card:nth-child(2)',e=>e.scrollIntoView());await new Promise(r=>setTimeout(r,800));assert('Project reveal becomes visible',await page.$eval('.project-card:nth-child(2)',e=>!e.classList.contains('reveal-pending')));
 await page.evaluate(()=>scrollTo(0,0));await new Promise(r=>setTimeout(r,200));assert('Reveals remain visible after leaving viewport',await page.$eval('.project-card:nth-child(2)',e=>!e.classList.contains('reveal-pending')));
 console.log(JSON.stringify(checks,null,2));fs.writeFileSync('artifacts/interaction-report.json',JSON.stringify(checks,null,2));
}finally{await browser.close();}
