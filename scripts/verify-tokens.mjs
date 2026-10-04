import fs from 'node:fs';import postcss from 'postcss';
const files=['src/styles/base.css','src/styles/layout.css','src/styles/components.css','src/styles/animations.css','src/components/Experience.css','src/components/MoreOfMyWorks.css','src/pages/GuidelyCaseStudy.css','src/pages/ThermalCaseStudy.css','src/pages/PortfolioCaseStudy.css'];const fails=[];
for(const file of files)postcss.parse(fs.readFileSync(file,'utf8')).walkDecls(d=>{if(/#[0-9a-f]{3,8}\b|rgba?\(/i.test(d.value)||(d.prop==='font-size'&&/\d+(px|rem)/.test(d.value))||(/^(margin|padding|gap)(-|$)/.test(d.prop)&&/\d+(px|rem)/.test(d.value)))fails.push(file+': '+d.toString());});
console.log('Hard-coded CSS color/font-size/spacing violations:',fails.length);if(fails.length){console.log(fails);process.exitCode=1;}
