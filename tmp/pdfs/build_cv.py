from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
import pypdfium2 as pdfium

out=Path('output/pdf/Valentina_Molokwu_CV_UX_UI_Designer.pdf')
out.parent.mkdir(parents=True,exist_ok=True)
styles={
 'name':ParagraphStyle('name',fontName='Helvetica-Bold',fontSize=20,leading=24,alignment=TA_CENTER,textColor=HexColor('#17324d')),
 'role':ParagraphStyle('role',fontName='Helvetica',fontSize=11,leading=15,alignment=TA_CENTER),
 'contact':ParagraphStyle('contact',fontName='Helvetica',fontSize=9,leading=13,alignment=TA_CENTER),
 'head':ParagraphStyle('head',fontName='Helvetica-Bold',fontSize=10,leading=13,spaceBefore=11,spaceAfter=5,textColor=HexColor('#17324d')),
 'body':ParagraphStyle('body',fontName='Helvetica',fontSize=9.3,leading=13),
 'job':ParagraphStyle('job',fontName='Helvetica-Bold',fontSize=9.5,leading=13,spaceAfter=3),
 'bullet':ParagraphStyle('bullet',fontName='Helvetica',fontSize=9.3,leading=13,leftIndent=10,firstLineIndent=-8,spaceAfter=3),
}
story=[]
def p(text,kind='body'):story.append(Paragraph(text,styles[kind]))
def bullet(text):p('- '+text,'bullet')
p('Valentina Nzube Molokwu','name')
p('Product Designer | UI/UX &amp; Mobile App Design','role')
p('nzubemolokwu5@gmail.com | <link href="https://www.linkedin.com/in/valentina-molokwu-730236278/">LinkedIn</link> | <link href="https://portfolio-seven-mocha-46.vercel.app/">Portfolio</link>','contact')
p('PROFESSIONAL SUMMARY','head')
p('Product Designer with 2+ years of UX/product design experience and a Software Engineering background. Designs web and mobile products from user flows and wireframes through high-fidelity UI, interactive prototypes and usability testing. Independently designed and implemented an actively used inventory, sales and expense management system. Combines Figma, interaction design and AI-assisted prototyping with experience leading design in a five-person academic project team and presenting and defending project decisions.')
p('CORE SKILLS','head')
p('<b>Design:</b> UI/UX Design, Mobile App Design, Interaction Design, User Flows, Information Architecture, Wireframing, High-Fidelity UI, Prototyping, Design Systems, Usability Testing, Accessibility, HCI')
p('<b>Tools &amp; Technologies:</b> Figma, Adobe Photoshop, Claude, Claude Code, HTML, CSS, JavaScript')
p('<b>Collaboration &amp; Delivery:</b> Design-to-Developer Handoff, Team Collaboration, Project Presentations, AI-Assisted Prototyping, Design-to-Code Workflows')
p('WORK EXPERIENCE','head')
p('Product Designer | Ifythel Lights and Accessories <font face="Helvetica"> | Jun 2023 - Oct 2025</font>','job')
bullet('Owned the design and implementation of a business operations system for inventory, sales and expense management, transitioning a small business from paper records to digital workflows.')
bullet('Mapped user flows, created wireframes and high-fidelity UI, developed interactive prototypes, and translated design specifications into a working product using AI-assisted development tools.')
bullet('Conducted usability testing and iterated on user needs, adding SKU search, manual inventory entry and sales editing. The system is actively used for day-to-day business operations.')
bullet('Led UX and interface design for the company landing-page website, with a focus on SEO.')
p('SELECTED PRODUCT DESIGN PROJECTS','head')
p('Guidely | Mobile Campus Companion App <font face="Helvetica"> | 2024 - 2025</font>','job')
p('<i>Final-year project | Team of five</i>')
bullet('Led UI/UX design within a five-person team for a mobile app improving access to campus events and resources at Nile University.')
bullet('Designed guest and student access modes, interest-based event recommendations, error and success states, and a virtual tour feature.')
bullet('Presented and defended the final-year project, explaining design decisions and making the case for the proposed solution.')
bullet('Conducted usability testing across 17 test cases, with all cases passing.')
story.append(Spacer(1,5))
p('Thermal | AI Music Discovery Concept <font face="Helvetica"> | 2025 - Present</font>','job')
bullet('Designed UI/UX for an independent music discovery web app concept using a temperature-based interaction model to express user mood and energy.')
p('EDUCATION','head')
p('BSc Software Engineering | Nile University of Nigeria <font face="Helvetica"> | Oct 2025</font>','job')
p('First Class Honours | CGPA: 4.75/5.0 | Top 10 Graduating Student | Dean\'s List')
p('Relevant coursework: Human-Computer Interaction, Artificial Intelligence')
doc=SimpleDocTemplate(str(out),pagesize=A4,rightMargin=39,leftMargin=39,topMargin=30,bottomMargin=30)
doc.build(story)
pdf=pdfium.PdfDocument(str(out))
print('Pages:',len(pdf))
for i in range(len(pdf)):
 pdf[i].render(scale=1.5).to_pil().save(f'tmp/pdfs/cv-preview-{i+1}.png')
print(out.resolve())
