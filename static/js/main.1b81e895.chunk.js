(this["webpackJsonpluiz-gonzaga-filho-html-cv-resume"]=this["webpackJsonpluiz-gonzaga-filho-html-cv-resume"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(13),r=a.n(o),l=(a(20),a(21),a(22),a(6)),s=a(7),c=a(9),d=a(8),m=a(5),u=a(2),h=a(1),p=a(10),g=(a(28),(new Date).getFullYear()-2003);m.b.add(h.j,h.f,p.a,p.b,p.c,h.c,h.d);var v=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data.name,t=this.props.data.location,a=this.props.data.contact,n=this.props.data.introduction;return n[0]=n[0].replace("{{CAREER_TIME}}",g),n=n.map((function(e,t){return i.a.createElement("p",{key:t},e)})),i.a.createElement("header",{id:"hcard-Luiz-Gonzaga-dos-Santos-Filho",className:"vcard"},i.a.createElement("h1",{className:"fn n"},i.a.createElement("span",{className:"given-name"},e.first," "),i.a.createElement("span",{className:"additional-name"},e.middle," "),i.a.createElement("span",{className:"family-name"},e.last)),i.a.createElement("main",null,i.a.createElement("aside",null,i.a.createElement("section",{className:"contacts"},i.a.createElement("div",{className:"contact adr"},i.a.createElement(u.a,{icon:h.j,fixedWidth:!0}),i.a.createElement("span",{className:"locality"},t.city),i.a.createElement("span",null,", "),i.a.createElement("span",{className:"country-name"},t.country)),i.a.createElement("div",{className:"contact website"},i.a.createElement(u.a,{icon:h.f,fixedWidth:!0}),i.a.createElement("span",null,i.a.createElement("a",{className:"url",href:a.url.href},a.url.display))),i.a.createElement("div",{className:"contact mail"},i.a.createElement(u.a,{icon:h.d,fixedWidth:!0}),i.a.createElement("span",null,i.a.createElement("a",{className:"email",href:"mailto:"+a.email},a.email))),i.a.createElement("div",{className:"linkedin"},i.a.createElement(u.a,{icon:p.b,fixedWidth:!0}),i.a.createElement("a",{className:"url",href:a.linkedin.href},a.linkedin.display)),i.a.createElement("div",{className:"twitter"},i.a.createElement(u.a,{icon:p.c,fixedWidth:!0}),i.a.createElement("a",{className:"url",href:a.twitter.href},a.twitter.display)),i.a.createElement("div",{className:"speakerdeck"},i.a.createElement(u.a,{icon:h.c,fixedWidth:!0}),i.a.createElement("a",{className:"url",href:a.speakerdeck.href},a.speakerdeck.display)),i.a.createElement("div",{className:"github"},i.a.createElement(u.a,{icon:p.a,fixedWidth:!0}),i.a.createElement("a",{className:"url",href:a.github.href},a.github.display)))),n))}}]),a}(n.Component),f=a(4);m.b.add(h.i);var E=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e="h".concat(this.props.level),t=this.props.id||this.props.children.trim().toLowerCase().replace(/\s/g,"-"),a="#".concat(t),n=i.a.createElement("a",{class:"header-link",href:a},i.a.createElement(u.a,{icon:h.i,fixedWidth:!0}));return i.a.createElement(e,{id:t},n,this.props.children)}}]),a}(n.Component);a(29);m.b.add(h.l,h.p,h.o,f.a,f.c,h.m,f.b,h.k);var y=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data.softwareEngineering.map((function(e,t){var a=e.keywords.map((function(e,t){return i.a.createElement("span",{className:"keyword",key:t},e)})),n=e.description.map((function(e,t){return i.a.createElement("p",{key:t},e)}));return i.a.createElement("div",{className:"xp",key:t},i.a.createElement("aside",{className:"grid-container"},i.a.createElement("div",{className:"job-data icon-grid-container"},i.a.createElement(u.a,{icon:f.c,fixedWidth:!0}),i.a.createElement("span",null,e.startDate," \u2013 ",e.endDate),i.a.createElement(u.a,{icon:f.a,fixedWidth:!0}),i.a.createElement("span",{className:"org"},e.company),i.a.createElement(u.a,{icon:h.p,fixedWidth:!0}),i.a.createElement("span",null,e.position)),i.a.createElement("div",{className:"job-keywords icon-grid-container"},i.a.createElement(u.a,{icon:h.l,fixedWidth:!0}),i.a.createElement("span",null,a))),i.a.createElement("article",null,i.a.createElement("div",{className:"description"},n)))})),t=this.props.data.teacherOrSpeaker.map((function(e,t){var a=[].concat(e.title).map((function(e,t){return i.a.createElement("div",{className:"title icon-grid-container",key:t},i.a.createElement(u.a,{icon:h.k,fixedWidth:!0}),i.a.createElement("span",null,e))}));return i.a.createElement("article",{className:"talk",key:t},i.a.createElement("div",{className:"period icon-grid-container"},i.a.createElement(u.a,{icon:f.b,fixedWidth:!0}),i.a.createElement("span",null,e.date," \u2013 ",e.location)),i.a.createElement("div",{className:"event icon-grid-container"},i.a.createElement(u.a,{icon:h.m,fixedWidth:!0}),i.a.createElement("span",null,e.venue)),a)})),a=this.props.data.volunteer.map((function(e,t){var a=e.keywords.map((function(e,t){return i.a.createElement("span",{className:"keyword",key:t},e)}));return i.a.createElement("div",{className:"volunteer xp",key:t},i.a.createElement("div",{className:"job-data"},i.a.createElement("div",{className:"period icon-grid-container"},i.a.createElement(u.a,{icon:f.c,fixedWidth:!0}),i.a.createElement("span",null,e.date," \u2013 ",e.location)),i.a.createElement("div",{className:"company icon-grid-container"},i.a.createElement(u.a,{icon:f.a,fixedWidth:!0}),i.a.createElement("span",{className:"org"},e.organization)),i.a.createElement("div",{className:"position icon-grid-container"},i.a.createElement(u.a,{icon:h.o,fixedWidth:!0}),i.a.createElement("span",null,e.position))),i.a.createElement("div",{className:"job-keywords icon-grid-container"},i.a.createElement(u.a,{icon:h.l,fixedWidth:!0}),i.a.createElement("div",null,a)))}));return i.a.createElement("section",null,i.a.createElement(E,{level:"2"},"Experiences"),i.a.createElement(E,{level:"3"},"Software Engineering"),i.a.createElement("div",null,e,i.a.createElement(E,{level:"3",id:"speaking-or-teaching"},"As a speaker or teacher"),i.a.createElement("div",{className:"grid-container"},t),i.a.createElement(E,{level:"3"},"Volunteer Work"),i.a.createElement("p",{className:"summary"},"Volunteer work ignited in me the caring for people: be them the ones we are the doing the work for, or my colleagues. It also taught me to value and dedicate my time for something else than money, for something that would do (or be) good for someone besides myself."),i.a.createElement("p",{className:"summary"},"You can check my open source contributions at ",i.a.createElement("span",{className:"org"},i.a.createElement("a",{href:"https://github.com/lfilho"},"github.com/lfilho")),"."),i.a.createElement("div",{className:"grid-container"},a)))}}]),a}(n.Component);a(30);m.b.add(h.e,f.b,h.n,h.g,h.b,f.d);var b=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.academyCourses.map((function(e,t){return i.a.createElement("div",{className:"academy-course icon-grid-container",key:t},i.a.createElement(u.a,{icon:h.e,fixedWidth:!0}),i.a.createElement("span",null,e.title),i.a.createElement(u.a,{icon:f.b,fixedWidth:!0}),i.a.createElement("span",null,e.date),i.a.createElement(u.a,{icon:h.n,fixedWidth:!0}),i.a.createElement("span",null,e.school," \u2013 ",e.location),e.info.map((function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{icon:h.g,fixedWidth:!0}),i.a.createElement("span",null,e))})))})),a=e.relevantCourses.map((function(e,t){return i.a.createElement("div",{className:"course icon-grid-container",key:t},i.a.createElement(u.a,{icon:h.b}),i.a.createElement("span",null,e.title),i.a.createElement("br",null),i.a.createElement("small",null,e.school,"; ",e.duration,"h \u2014 ",e.date))})),n=Math.round(e.relevantCourses.reduce((function(e,t){return e+t.duration}),0)),o=e.relevantEvents.map((function(e,t){return i.a.createElement("div",{className:"event icon-grid-container",key:t},i.a.createElement(u.a,{icon:h.b}),i.a.createElement("span",null,e.title),i.a.createElement("br",null),i.a.createElement("small",null,e.location,"; ",e.date))}));return i.a.createElement("section",null,i.a.createElement(E,{level:"2"},"Education"),i.a.createElement("div",{className:"academy-courses grid-container"},t),i.a.createElement(E,{level:"3",id:"relevant-courses"},"Relevant courses taken",i.a.createElement("small",null,i.a.createElement(u.a,{icon:f.d,flip:"horizontal"}),a.length," courses on software, entrepreneurship, leadership and self development with a total of ~",n," hours")),i.a.createElement("div",{className:"courses grid-container"},a),i.a.createElement(E,{level:"3",id:"relevant-events"},"Relevant events attended",i.a.createElement("small",null,i.a.createElement(u.a,{icon:f.d,flip:"horizontal"}),o.length," events on technology and entrepreneurship in different cities and countries")),i.a.createElement("div",{className:"events grid-container"},o))}}]),a}(n.Component);m.b.add(h.b);var S=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data.map((function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{icon:h.b}),i.a.createElement("span",null,e))}));return i.a.createElement("section",null,i.a.createElement(E,{level:"2"},"Certifications and Noteworthy achievements"),i.a.createElement("div",{className:"noteworthy icon-grid-container"},e))}}]),a}(n.Component);m.b.add(h.h);var w=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data.map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement(u.a,{icon:h.h}),i.a.createElement("span",null," ",e.name," \u2014 ",e.level))}));return i.a.createElement("section",null,i.a.createElement(E,{level:"2"},"Languages"),i.a.createElement("div",{className:"languages grid-container"},e))}}]),a}(n.Component),k=a(14),C=a.n(k);a(31);m.b.add(h.b,h.a,f.d);var I,D,G,B,A,N,M=function(e,t){return i.a.createElement("div",{className:"book icon-grid-container",key:t},i.a.createElement(u.a,{icon:h.b}),i.a.createElement("span",null,e.title,i.a.createElement("em",null,e.subtitle)),i.a.createElement("br",null),i.a.createElement("small",null,e.author))},T=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data.books,t=e.software.map(M),a=e.softSkills.map(M);this.props.data.freeTime.map((function(e,t){return i.a.createElement("p",{key:t,className:"first"},C.a.autolink(e,{target:"_blank",key:"link".concat(t)}))}));return i.a.createElement("section",null,i.a.createElement(E,{level:"2",id:"not-so-off-topics"},i.a.createElement("span",null,"(The not so)")," Off topics",i.a.createElement("small",null,i.a.createElement(u.a,{icon:f.d,flip:"horizontal"}),"Some other things that help shaping the professional I am")),i.a.createElement(E,{level:"3"},"Relevant content"),i.a.createElement(E,{level:"4",id:"relevant-content-software-development"},i.a.createElement(u.a,{icon:h.a}),"Software Development",i.a.createElement("small",null,i.a.createElement(u.a,{icon:f.d,flip:"horizontal"}),t.length," books on programming languages, techniques and tools")),i.a.createElement("div",{className:"books grid-container"},t),i.a.createElement(E,{level:"4",id:"relevant-content-entrepreneurship"},i.a.createElement(u.a,{icon:h.a}),"Soft Skills",i.a.createElement("small",null,i.a.createElement(u.a,{icon:f.d,flip:"horizontal"}),a.length," books on leadership, culture, productivity, entrepreneurship and management")),i.a.createElement("div",{className:"books grid-container"},a))}}]),a}(n.Component),z={header:{name:{first:"Luiz",middle:"Gonzaga",last:"dos Santos Filho"},location:{city:"Vancouver",country:"Canada"},contact:{phone:{raw:"",formatted:""},url:{href:"https://luiz.dev",display:"www.luiz.dev"},email:"lfilho@gmail.com",linkedin:{href:"https://linkedin.com/in/luizgonzaga",display:"/luizgonzaga"},twitter:{href:"https://twitter.com/luizmarelo",display:"/luizmarelo"},speakerdeck:{href:"https://speakerdeck.com/lfilho",display:"/lfilho"},github:{href:"https://github.com/lfilho",display:"/lfilho"}},introduction:["A people first geek with {{CAREER_TIME}}+ years of building software and leading teams in different countries and company sizes.","Alongside my technical education, I make sure not forget about the softer skills such as a better and more effective communication, my ability to lead and to mentor. Whether as a developer, team leader or manager, one can expect me to wholly understand a team's mindset, needs and expectations.","I constantly invest in my improvement with books, articles, podcasts, courses, side projects, attending and also speaking at conferences...","My perennial goal is to imbue purpose in everything I do, contributing more directly to our society and helping people in any way I can."]},experiences:{softwareEngineering:[{startDate:"Feb 2021",endDate:"present",company:"Coursera",position:"Software Development Manager",keywords:["e-Learning","education","aws"],description:["After a good run in AWS, I'm honored to work for a B-Corporation, focused in education. I'm leading development in their Enterprise front and am sure I'll have a great time here."]},{startDate:"Sep 2017",endDate:"present",company:"Amazon / AWS",position:"Software Development Manager III",keywords:["Payment Services","AWS","Route 53","Agile","People Management","Delivery Management","Risk Management"],description:["I've managed two teams of 6-10 people and got promoted to Software Development Manager III. I was responsible for hiring, long term roadmap planning, people allocation, performance management, team process and the general software life cycle.","I've delivered amazon.com.tr (Amazon Turkey) payments integration. The project involved collaboration and coordination with different teams, partners and vendors in different countries.","While in AWS, I have started a team from ground up, hiring 7 engineers. Responsible for building the new generation of Route53's User Experience with measurable operational, accessibility and usability improvements. I have launched two world-wide projects and expanded our presence to multiple new partitions and regions.","As a hiring manager I have improved Route53's sourcing efficiency by ~32% and the diversity of our candidate pool increased by ~11%.","I've also become a certified Cultural Competences for Teams instructor, increasing inclusiveness and diversity awareness to the many teams that took the training."]},{startDate:"Apr 2016",endDate:"Feb 2017",company:"Brandwatch",position:"Team Lead & Senior Developer",keywords:["Node","Javascript","Require","Backbone","Underscore","HTML 5","CSS 3","Highcharts","jQuery","Mustache","BDD","Jasmine","Phantom","REST","Scrum","GitHub","JIRA"],description:["After a great experience back in Brazil, I return to Brandwatch Berlin to a bigger office, bigger team and bigger responsibilities. Big refactorings, legacy codebase evolution and maintainability improvements where my main focus besides regular feature development and bug fixing. After 8 months in the job I was trusted to be the team lead and help the team continue to move forward."]},{startDate:"Apr 2015",endDate:"Apr 2015",company:"X-Team (Remote)",position:"Full stack developer",keywords:["Node","Javascript","React","Flux","LevelDB","Tape","Highcharts","jQuery","BPM"],description:["Hired by the awesome remote company X-Team to help researching, planning and developing the next phase of X-Labs (open source community) and other internal projects. Great team, expert people, cool tech and tools."]},{startDate:"Jun 2014",endDate:"Mar 2016",company:"DataEasy",position:"Software Development Manager",keywords:["Scrum","XP","Kanban","SemVer","BPM","Software Testing","Freetest","Testlink","DevOps","Jenkins","Continuous Integration","Shell Scripting","Java EE","Maven","GitHub","New Relic","Node","Docker","Management"],description:["DataEasy believed in me to manage all their software development teams and I'm happy to have greatly boosted their software quality, development process and the overall culture of the company in many creative and interesting ways.","More than methodologies and tools, the most important part of a team is the people on it. Through regular \"one-on-one\" meetings I could closely track each team member's improvement and satisfaction, align their goals with the company's and exchange feedback. This personal and constant interaction kept me grounded and real; it gave me both the confidence to carry on from the positive feedbacks I get and the opportunity to learn, adapt and shift directions otherwise."]},{startDate:"Apr 2013",endDate:"Nov 2013",company:"Brandwatch",position:"Senior Developer",keywords:["Node","Javascript","Require","Backbone","Underscore","HTML 5","CSS 3","Highcharts","jQuery","Mustache","BDD","Jasmine","Phantom","REST","Scrum","GitHub","JIRA"],description:["BW has a fun and modern mindset and a great agile environment with an even greater team: strongly test and code review oriented, we had an enforced culture towards performance, clean and maintainable code.","I developed the frontend of their main product with occasional work in the API layer."]},{startDate:"Apr 2012",endDate:"Mar 2013",company:"Content Fleet",position:"Team Lead & Senior Developer",keywords:["Node","MongoDB","Javascript","Require","Backbone","Underscore","HTML 5","CSS 3","Highcharts","jQuery","REST","Scrum","SVN","Shell Script","Pivotal Tracker"],description:["I'm grateful for CF taking me all the way from Brazil to Germany. I payed the investment with hard work, features shipped in record time and some innovations to their development process.","After 4 months I was trusted with the position of Frontend Team Lead and Senior Developer."]},{startDate:"Fev 2007",endDate:"Mar 2012",company:"Goi\xe1s State Government",position:"Full Stack Developer",keywords:["Java EE","Velocity","SQL","HTML","Javascript","jQuery","CSS 3","SVN","UX"],description:["While in university I passed a State Government public contest that granted me an official place in the public service. I worked with the Human Resource system that run for the entire state.","During this period I was able to become a Certified Java Programmer. But after I graduated I felt the need to learn and challenge myself more, so I decided to abdicate my public service seat in order to seek self-realization."]},{startDate:"2004",endDate:"2005",company:"DR Sistemas & Interagi",position:"Trainee Developer",keywords:["Java EE","Struts","Hibernate","SQL","JSP","PHP","MySQL","HTML","CSS","SVN","CVS"],description:["Interagi and DR were where I had my internships - 6 months each.","At Interagi I put my initial, self-learned PHP knowledge to test and improved it. I learned from great people how to work in a team and care for customer satisfaction.","DR Sistemas was an important software factory where I learned about the enterprise world and well-modularized code."]},{startDate:"Jan 2003",endDate:"Dec 2014",company:"Freelancer",position:"Software Developer & Consultant",keywords:["12 Factor Apps","Web Development","Team Coaching","Individual Coaching","Agile Methodologies","Web Languages","Web Services","REST","Software Testing","Software Quality","Continuous Integration"],description:["Some companies I have consulted for:","Vega Sistemas, Goi\xe2nia, Brazil \u2014 Consultancy on migrating a desktop application to web platform. Tech, tools and paradigms shift.","SENAC Goi\xe1s, Goi\xe2nia, Brazil \u2014 Consultancy on web development, best practices, productivity tools, agile methodologies and comparison of dynamic versus compiled languages.","Federal University of Goi\xe1s \u2014 Development of the Public contest (Vestibular) system and website."]}],teacherOrSpeaker:[{date:"26 Oct 2018",location:"Berlin, Germany",venue:"Amazon",title:"Debugging Complex Things"},{date:"03 Mar 2017",location:"Berlin, Germany",venue:"EuroStaff Group",title:"Debugging Complex Things"},{date:"08 Nov 2016",location:"Berlin, Germany",venue:"Brandwatch",title:"Debugging Complex Things"},{date:"18 Feb 2016",location:"Goi\xe2nia, Brazil",venue:"DataEasy Ltda",title:'"Areas of Responsibility Model"'},{date:"05 Feb 2016",location:"Goi\xe2nia, Brazil",venue:"DataEasy Ltda",title:'"SMART Goals"'},{date:"20 Nov 2015",location:"Goi\xe2nia, Brazil",venue:"DataEasy Ltda",title:'"12 Factor Apps"'},{date:"30 Oct 2015",location:"Goi\xe2nia, Brazil",venue:"DataEasy Ltda",title:'"Developing Peopleware"'},{date:"17 Oct 2015",location:"Goi\xe2nia, Brazil",venue:"IV JoinCommunity",title:'"Developing Peopleware"'},{date:"17 Oct 2015",location:"Goi\xe2nia, Brazil",venue:"IV JoinCommunity",title:'"IoT: Introducing Tessel"'},{date:"16 Sep 2015",location:"Goi\xe2nia, Brazil",venue:"GOJS 7min.js",title:'"Meteor.js"'},{date:"01 Sep 2015",location:"Goi\xe2nia, Brazil",venue:"Federal University of Goi\xe1s",title:'"Developing a career"'},{date:"14 Ago 2015",location:"Goi\xe2nia, Brazil",venue:"Pontifical Catholic University of Goi\xe1s",title:'"Developing Peopleware"'},{date:"08 Jun 2015",location:"Goi\xe2nia, Brazil",venue:"Federal University of Goi\xe1s",title:'"Programming Languages"'},{date:"20 Mar 2015",location:"Goi\xe2nia, Brazil",venue:"Federal University of Goi\xe1s",title:'"Software Engineering at DataEasy"'},{date:"31 May 2014",location:"Goi\xe2nia, Brazil",venue:"III Join Community",title:'"Modern JS: from Coder to Shareholder"'},{date:"29 Mar 2014",location:"Goi\xe2nia, Brazil",venue:"I Workshop GOJS",title:'"Javascript Promises"'},{date:"Jul 2014",location:"Goi\xe2nia, Brazil",venue:"DataEasy Brown Bag Sessions",title:['"Introduction to Agile Methodologies"','"Git & GitHub basics"']},{date:"14 Nov 2013",location:"Goi\xe2nia, Brazil",venue:"Absolut Software - 12minutes.me",title:'"Cultural Intelligence and the Connection Economy"'},{date:"17 and 18 Feb 2011",location:"Goi\xe2nia, Brazil",venue:"SEBRAE",title:'"How tango can make you a better (business) man"'},{date:"09 Apr 2011",location:"Itapuranga, Brazil",venue:"I LatAm Free Software Installation Festival (FLISOL)",title:'"Entrepreneurship with free software"'},{date:"Ago 2011",location:"Goi\xe2nia, Brazil",venue:"Computer, Electrical and Civil Engineering graduation",title:"Graduation Ceremony Speech"},{date:"Ago 2009",location:"Goi\xe2nia, Brazil",venue:"VI Goi\xe1s Forum of Free Software (FGSL)",title:'"Introduction to Ruby Language"'},{date:"June 2009",location:"Goi\xe2nia, Brazil",venue:"Goi\xe1s State Government",title:"LibreOffice instructor"}],volunteer:[{date:"2014; 2015",location:"Goi\xe2nia, Brazil",organization:"Join Community",position:"Co-organizer & speaker",keywords:["Javascript","Node","Talks","Community events","Leadership","Career"]},{date:"2012; 2014",location:"Goi\xe2nia, Brazil",organization:"Napoleon Hill Institute's Master Mind",position:"Lead auxiliary instructor",keywords:["Leadership","Public Speaking","Coaching","Effective Communication","Time managing"]},{date:"2008 \u2013 2011",location:"Goi\xe2nia, Brazil",organization:"Grupo Arte Nascente (GAN)",position:"Actor & Web Developer",keywords:["PHP","NGO","Art","Theater","Communication","Non-for profit"]},{date:"2006 \u2013 2015",location:"Goi\xe2nia, Brazil",organization:"Zapt Arteatral",position:"Actor, Web Developer, President, Artistic Director & Communication Coordinator",keywords:["PHP","Art","Theater","Communication","Non-for profit"]},{date:"2007 \u2013 2009",location:"Goi\xe2nia, Brazil",organization:"AIESEC Brazil / GO",position:"Marketing, Communication & Information Management teams",keywords:["Marketing","Public Relations","External Communication","Internal Communication"]},{date:"2000 \u2013 2008",location:"Goi\xe2nia, Brazil",organization:"Mocidade Esp\xedrita Andr\xe9 Luiz",position:"Coordinator, Speaker & Member",keywords:["Spiritualism","Leadership","Events"]}]},education:{academyCourses:[{title:"Business Process Management, MBA",date:"Dec 2017",school:"IT Management Institute (IGTI)",location:"Brazil",info:[]},{title:"Computer Engineering, Bachelor",date:"Jun 2011",school:"Federal University of Goi\xe1s",location:"Brazil",info:["Extra studies on Software Engineering","Relative average grade: 85%"]},{title:"Computer Science, Visiting Student",date:"2010/1",school:"Saint Mary's University",location:"Canada",info:["2nd round on Trumped Competition","Emerging Leaders of America Scholarship"]}],relevantCourses:[{title:"Developing on AWS",school:"AWS Training Center",date:"May 2020",duration:32},{title:"Architecting on AWS",school:"AWS Training Center",date:"April 2020",duration:32},{title:"DevSecOps on AWS",school:"AWS Training Center",date:"Feb 2020",duration:32},{title:"Search Inside Yourself Leadership Program",school:"SYILI, LEAD & Google",date:"Sep 2016",duration:15},{title:"React.js with Flux",school:"FrontendMasters",date:"Jun 2016",duration:4.5},{title:"Kick Off Koa.js",school:"NodeSchool",date:"Oct 2015",duration:4},{title:"Learn Sass",school:"NodeSchool",date:"Sep 2015",duration:2},{title:"Learn Generators",school:"NodeSchool",date:"Sep 2015",duration:1},{title:"WebRTC Fundamentals",school:"PluralSight",date:"Aug 2015",duration:1.66},{title:"Level DB",school:"NodeSchool",date:"Apr 2015",duration:4},{title:"Business Process Management (BPM)",school:"BP Company; 16h",date:"2014",duration:16},{title:"Freetest (TMMi based)",school:"Federal University of Goi\xe1s",date:"2014",duration:100},{title:"Startup Engineering",school:"Stanford / Coursera",date:"2013",duration:70},{title:"Projects on Carbon Credits",school:"Efici\xeancia Institute",date:"2012",duration:20},{title:"Leadership, Interpersonal Intelligence and Effective Communication",school:"Napoleon Hill Institute's Master Mind",date:"2011",duration:48},{title:"Empretec Seminar",school:"SEBRAE",date:"2011",duration:60},{title:"Immersion Behavior Driven Development",school:"e-Genial",date:"2010",duration:12},{title:"Immersion Ruby on Rails",school:"e-Genial",date:"2010",duration:12},{title:"Java Web",school:"SENAI FATESG",date:"2007",duration:95},{title:"Software Development Process",school:"Government School",date:"2007",duration:40},{title:"Linux (basic, intermediate, advanced)",school:"3Way Networks",date:"2006",duration:40},{title:"Web accessibility; XSLT; Tableless",school:"At\xedpico",date:"2005",duration:20},{title:"Information Systems workshop",school:"UFG",date:"2004",duration:32},{title:"Advanced Adobe Flash and Actionscript",school:"SENAC",date:"2004",duration:56},{title:"Graphic Projects workshop",school:"SENAC",date:"2003",duration:4},{title:"Web Design",school:"SENAC",date:"2002",duration:120},{title:"Programming logic",school:"SENAC",date:"2001-2002",duration:90}],relevantEvents:[{title:"WebDevCon",location:"Seattle, USA",date:"16-19 Apr 2019"},{title:"AWS Console Unconf",location:"Seattle, USA",date:"29-30 Jan 2019"},{title:"Web Summit",location:"Lisbon, Portugal",date:"7-10 Nov 2016"},{title:"CodeMotion Conf",location:"Berlin, Germany",date:"24-25 Oct 2016"},{title:"TEDx Goi\xe2nia",location:"Goi\xe2nia, Brazil",date:"21 Oct 2015"},{title:"4th Join Community",location:"Goi\xe2nia, Brazil",date:"16-17 Oct 2015"},{title:"AndYet Conf",location:"Richland, USA",date:"06-08 Oct 2015"},{title:"Google Developers Group DevFest 2014",location:"Goi\xe2nia, Brazil",date:"17 Sep 2014"},{title:"3rd Join Community",location:"Goi\xe2nia, Brazil",date:"30-31 Mai 2014"},{title:"Analyzing network vulnerabilities",location:"Goi\xe2nia, Brazil",date:"26 Apr 2014"},{title:"19th Convendas (Sales congress)",location:"Goi\xe2nia, Brazil",date:"15 Mar 2014"},{title:"JSConf.eu",location:"Berlin, Germany",date:"14-15 Sep 2013"},{title:"Reject.js",location:"Berlin, Germany",date:"12 Sep 2013"},{title:"Ruby Conf Brazil",location:"S\xe3o Paulo, Brazil",date:"3-4 Nov 2011"},{title:"International Conf of Innovative Cities",location:"Curitiba, Brazil",date:"17-20 Mai 2011"},{title:"I LatAm Free Software Installation Festival",location:"Itapuranga, Brazil",date:"9 Apr 2011"},{title:"X Software Engineering Journey of Goi\xe1s",location:"Goi\xe2nia, Brazil",date:"24, 25 Sep 2010"},{title:"VIII Software Engineering Journey of Goi\xe1s",location:"Goi\xe2nia, Brazil",date:"3,4 Oct 2008"},{title:"I IT Governance Seminar",location:"Goi\xe2nia, Brazil",date:"31 Mar 2008"},{title:"Java: JEDI Initiative",location:"Goi\xe2nia, Brazil",date:"Sep 2007"},{title:"II Goi\xe1s Forum of Free Software",location:"Goi\xe2nia, Brazil",date:"1 Oct 2005"},{title:"IBM: Migrating and developing for Linux",location:"Goi\xe2nia, Brazil",date:"18 May 2005"},{title:"I LatAm Free Software Installation Festival",location:"Goi\xe2nia, Brazil",date:"2 Apr 2005"},{title:"I Electric and Computer Engineering Week",location:"Goi\xe2nia, Brazil",date:"8-12 Nov 2004"},{title:"II Java Gyn",location:"Goi\xe2nia, Brazil",date:"15 July 2004"},{title:"IX Web Design Meeting",location:"Bras\xedlia, Brazil",date:"15 Jul 2004"},{title:"I National IT Congress",location:"Goi\xe2nia, Brazil",date:"May 2004"}]},languages:[{name:"Portuguese",level:"Native"},{name:"English",level:"Fluent"},{name:"German & Spanish",level:"Basic"}],noteworthy:["AWS Certified Cloud Practitioner; Nov 2018",'"MasterMind Commender and Class\' Name" title on MasterMind training in Leadership, Interpersonal Intelligence and Effective Communication; 2011','"Best presentation" prize on MasterMind training in Leadership, Interpersonal Intelligence and Effective Communication; 2011','"Self Overcoming" prize on Empretec Entrepreneurship Seminar; 2011',"IELTS (International English Language Testing System), 8 points in 2017 (89%)","KITE (Kaplan International Tools for English), C2 Level - Proficient (564 points) in 2015","TOEFL (Test of English as a Foreign Language), 108 points in 2011 (90%); 103 points in 2009 (86%)","Sun Certified Java Programmer (SCJP) for the Java 5 Platform; 2008"],offTopic:{books:{software:[{title:"Mastering Vim",author:"Jovica Ilic"},{title:"Shape Up",author:"Ryan Singer"},{title:"The End of Privacy",author:"B.J. Mendelson"},{title:"The Tao of Tmux and Terminal Tricks",author:"Tony Narlock"},{title:"InnerSource: ",subtitle:"Keys to collaboration and productivity inside your company",author:"Andy Oram"},{title:"Webpack from apprentice to master",author:"Juno Veps\xe4l\xe4inen"},{title:"Clean Code",author:"Robert C. Martin"},{title:"Getting Started with Meteor.js",author:"Isaac Strack"},{title:"Practical VIM",author:"Drew Neil"},{title:"Pro Git",author:"Scott Chacon"},{title:"Developing Backbone Applications",author:"Addy Osmani"},{title:"Javascript - The Good Parts",author:"Douglas Crockford"},{title:"Code Simplicity",author:"Max Kanata-Alexander"},{title:"The Node Beginner Book",author:"Manuel Kiessling"},{title:"Learn Rails 3 by example",author:"Michael Hartl"},{title:"Agile web development with Rails 2",author:"Dave Thomas, David Heinemeier Hanson"},{title:"Rework",author:"Jason Fried, David Heinemeier Hanson"},{title:"Rails for Java Developers",author:"Stuart Halloway, Justin Gehtlan"},{title:"Getting Real",author:"37 Signals"},{title:"Head First: Servlets & JSP",author:"Kathy Sierra, Bryan Basham, Bert Bates"},{title:"Head First: Design Patterns",author:"E. Freeman, E. Robson, B. Bates, K. Sierra"},{title:"Regular Expressions",author:"Aur\xe9lio Marinho Vargas"},{title:"Java: How to Program",author:"Deitel"}],softSkills:[{title:"Find Your Why",author:"Simon Sinek, David Mead & Peter Docker"},{title:"The Infinite Game",author:"Simon Sinek"},{title:"Man's Search for Meaning",author:"Viktor E. Frankl"},{title:"Thinking, Fast and Slow",author:"Daniel Kahneman"},{title:"The Subtle Art of Not Giving a F*ck: ",subtitle:"A Counterintuitive Approach to Living a Good Life",author:"Mark Manson"},{title:"It Doesn't have to be Crazy at Work",author:"Jason Fried, David Heinemeier Hansson"},{title:"Dare to Lead: ",subtitle:"Brave work. Tough conversations. Whole hearts.",author:"Bren\xe9 Brown"},{title:"The Coaching Habit: ",subtitle:"Say Less, Ask More & Change the Way Your Lead Forever",author:"Michael Bungay Stanier"},{title:"The First 90 Days: ",subtitle:"Critical Success Strategies for New Leaders at All Levels",author:"Michael D. Watkins"},{title:"Collective Intelligence: ",subtitle:"Mankind's Emerging World in Cyberspace",author:"Pierre L\xe9vy"},{title:"The Checklist Manifesto: ",subtitle:"How to get things right",author:"Atul Gawande"},{title:"Start With Why: ",subtitle:"How great leaders inspire everyone to take action",author:"Simon Sinek"},{title:"Moral Tribes: ",subtitle:"Emotion, reason and the gap between us and them",author:"Joshua Greene"},{title:"Drive: ",subtitle:"The surprising truth about what motivates us",author:"Daniel H. Pink"},{title:"The Power of Habit",author:"Charles Duhigg"},{title:"Difficult Conversations",author:"Douglas Stone, Sheila Heen, Bruce Patton"},{title:"Leading Snowflakes: ",subtitle:"The Engineering Manager Handbook",author:"Oren Ellenbogen"},{title:"Managing Oneself",author:"Peter Drucker"},{title:"The soul of leadership",author:"Deepak Chopra"},{title:"Managing Humans",author:"Michael Lopp"},{title:"The Purpose Economy",author:"Aaron Hurst"},{title:"7 Spiritual Laws of Success",author:"Deepak Chopra"},{title:"Leading with Cultural Intelligence",author:"David Livermore, PhD"},{title:"Times' Triad",author:"Christian Barbosa"},{title:"The Power of Vulnerability",author:"Bren\xe9 Brown, PhD"},{title:"A Leader's Diary",author:"Luciano Pires"},{title:"Disguised Opportunities",author:"Carlos Domingos"},{title:"Leader with a Master Mind",author:"Jamil Albuquerque"},{title:"The Icarus Deception: ",subtitle:"How High Will You Fly",author:"Seth Godin"},{title:"Tribes: ",subtitle:"We need you to guide us",author:"Seth Godin"},{title:"Startup",author:"Jessica Livingston"},{title:"Do The Work",author:"Steven Pressfield"},{title:"The Dip",author:"Seth Godin"},{title:"V is for Vulnerable: ",subtitle:"Life outside the comfort zone",author:"Seth Godin"},{title:"Anything You Want",author:"Derek Sivers"},{title:"What is Your Legacy? ",subtitle:"Provocative Thoughts About Ethics, Leadership and Management",author:"Mario Sergio Cortella"},{title:"The Entrepreneur's Guide to Customer Development",author:"Brant Cooper"},{title:"The Monk and the Executive",author:"James C. Hunter"},{title:"The Triumph's Law for the 21st century",author:"Napoleon Hill, Jamil Albuquerque"},{title:"The Art of Dealing With People",author:"Jamil Albuquerque"},{title:"How to Grow a Business",author:"Eric Crowell"},{title:"Getting Things Done",author:"David Allen"}]},freeTime:["I'm launching a nonprofit & open source initiative with a friend: https://konsilos.com"]}},L=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{id:"page-wrapper"},i.a.createElement(v,{data:z.header}),i.a.createElement(y,{data:z.experiences}),i.a.createElement(b,{data:z.education}),i.a.createElement(S,{data:z.noteworthy}),i.a.createElement(w,{data:z.languages}),i.a.createElement(T,{data:z.offTopic}))}}]),a}(n.Component);I=window,D=document,G="script",B="ga",I.GoogleAnalyticsObject=B,I.ga=I.ga||function(){(I.ga.q=I.ga.q||[]).push(arguments)},I.ga.l=1*new Date,A=D.createElement(G),N=D.getElementsByTagName(G)[0],A.async=1,A.src="https://www.google-analytics.com/analytics.js",N.parentNode.insertBefore(A,N),window.ga("create","UA-61383393-1","auto");var W=function(){return window.ga("send","pageview")};r.a.render(i.a.createElement(L,null),document.getElementById("root")),W()}],[[15,1,2]]]);
//# sourceMappingURL=main.1b81e895.chunk.js.map