from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from pathlib import Path

out=Path('Peaceful Living Growth Strategy.docx')
d=Document()
s=d.sections[0]
s.top_margin=s.bottom_margin=Inches(.7)
s.left_margin=s.right_margin=Inches(.75)
for name in ['Normal','Title','Subtitle','Heading 1','Heading 2']:
 st=d.styles[name]; st.font.name='Calibri'; st.font.color.rgb=RGBColor(0,0,0)
d.styles['Normal'].font.size=Pt(11)
d.styles['Normal'].paragraph_format.space_after=Pt(7)
d.styles['Heading 1'].font.size=Pt(16)
d.styles['Heading 2'].font.size=Pt(12)
def p(t): d.add_paragraph(t)
def h(t): d.add_heading(t,1)
def bullet(t): d.add_paragraph(t,'List Bullet')
def table(headers,rows):
 t=d.add_table(rows=1,cols=len(headers)); t.style='Table Grid'
 for c,x in zip(t.rows[0].cells,headers):
  c.text=x
  sh=OxmlElement('w:shd'); sh.set(qn('w:fill'),'E8EDF0'); c._tc.get_or_add_tcPr().append(sh)
  for r in c.paragraphs[0].runs:r.bold=True
 for row in rows:
  for c,x in zip(t.add_row().cells,row):c.text=x
 for row in t.rows:
  for c in row.cells:
   for par in c.paragraphs:
    par.paragraph_format.space_after=Pt(5)
    par.paragraph_format.space_before=Pt(5)
    for r in par.runs:r.font.size=Pt(10)
 tr=OxmlElement('w:tblHeader');t.rows[0]._tr.get_or_add_trPr().append(tr)
 d.add_paragraph()

d.add_heading('Peaceful Living Growth Strategy',0)
p('A 30 day plan for TikTok content and coloring book sales')
p('Prepared 6 October 2026')
p('Build a repeatable way to attract the right viewers, turn their interest into enquiries, and convert enquiries into profitable orders. The first month should identify a content format and an offer that work repeatedly before spending more to scale.')
h('What the evidence shows')
table(['Evidence','Implication'],[
['4.5 second average watch time on a 67.57 second video','That video struggled to hold attention. This does not establish how all future posts will perform.'],
['The reviewed bio led with digital detox without naming coloring books','Make the product immediately clear to a new visitor.'],
['Two editions and package options','Show buyers exactly what each option includes.'],
['Seven visible posts at the time of review','There is limited evidence about repeatable winning formats.'],
['Order counts, enquiries and margins are not yet recorded here','Sales performance cannot yet be diagnosed.']])
p('Watch time is one of several TikTok recommendation signals. No posting time, carousel order or retention threshold guarantees reach. Treat creative recommendations as tests rather than predictions.')
h('1 Make the brand promise specific')
p('Proposed positioning: Peaceful Living makes coloring books and packages for cozy time away from your phone.')
p('Use this idea consistently in the bio, demonstrations, packaging and product explanations. Start by testing young Nigerian adults interested in fashion, cozy activities and creative hobbies. This is a starting audience to validate through enquiries and purchases.')
d.add_page_break()
h('2 Make buying easy to understand')
p('Create one clear product menu and pin a video explaining it. For each edition and package, show:')
for x in ['Actual contents and current price.','Whether coloring supplies are included.','Available designs and edition choices.','Delivery areas, charges and expected timing.','One clear ordering route.']:bullet(x)
p('Test displaying prices openly so people can decide whether the offer fits before messaging. Feature one main package based on usefulness to beginners, stock availability and profit; keep the other options accessible.')
h('3 Give each post a job')
p('Publish four videos and one carousel weekly for four weeks, if that pace is manageable. This is a test schedule, not a platform requirement.')
table(['Weekly content','Example','Main measure'],[
['Two discovery videos','Satisfying coloring or a blank to finished reveal','Watch time, shares and profile visits'],
['One useful video','Three colors for the coffee page or a marker test on the actual paper','Saves, questions and follows'],
['One buying confidence video','Package walkthrough, edition comparison or genuine customer result','Enquiries and paid orders'],
['One carousel','Favorite pages, palettes or finished artwork','Saves and profile visits']])
p('Include founder stories, but show enough coloring that visitors understand what following the brand and buying the product will give them. Use genuine customer experiences only.')
h('4 Test openings deliberately')
p('In the first two weeks, make six demonstration videos in three pairs:')
for x in ['Two problem openings: Need something to do besides scrolling?','Two visual openings: coloring begins immediately.','Two project openings: Turning this page into a pink café.']:bullet(x)
p('Keep video length, filming quality and page complexity reasonably similar. Record results at 24 hours and seven days. Compare similar length videos, and repeat a promising approach across several posts before declaring it a winner. This is a practical test, not a perfectly controlled experiment.')
d.add_page_break()
h('5 Track the full path to a sale')
p('Record the weekly path: Views → profile visits → enquiries → paid orders → profit after costs.')
p('Ask buyers which post brought them to the brand. Record common questions and reasons enquiries do not become orders when people volunteer that information.')
table(['Observed pattern','Next action'],[
['Viewers leave early','Improve the opening, demonstration and pacing.'],
['People watch but rarely visit the profile','Make the product and reason to visit clearer.'],
['Profile visits produce few enquiries','Clarify the offer, price, delivery and ordering.'],
['Enquiries produce few paid orders','Investigate actual objections before changing the offer.'],
['Orders grow but profit stays low','Review package costs, pricing and fulfilment.']])
h('6 Build proof and distribution')
p('After real purchases, request honest feedback and permission to share customers’ colored pages. Turn recurring questions into videos.')
p('Once an offer starts converting, test a small collaboration with a Nigerian creator whose content fits books, art, cozy routines or lifestyle. Agree on deliverables and track resulting enquiries and paid orders. Follower count alone is not enough evidence of fit.')
p('Before paying for promotion, calculate profit per order after printing, supplies, packaging, payment fees and any delivery subsidy. Use that figure to set an affordable customer acquisition cost.')
h('30 day action checklist')
for x in ['Week 1: clarify the bio, product menu, prices, delivery information and ordering route; start the tracking record.','Week 2: complete the six opening tests and continue the weekly content mix.','Week 3: repeat promising formats, answer common questions and collect genuine customer feedback.','Week 4: review seven day results, paid orders and profit; choose which format and package to repeat.']:bullet(x)
h('Business information needed for the next decision')
p('Record edition and package contents, selling prices, cost per package, delivery coverage, enquiries and paid orders to date. These will reveal whether the priority is attention, the offer, purchasing confidence or pricing.')
p('Source: TikTok Help Center, How TikTok recommends content — https://support.tiktok.com/en/using-tiktok/exploring-videos/how-tiktok-recommends-content')
d.save(out)
print(out.resolve())
