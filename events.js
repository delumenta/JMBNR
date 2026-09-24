(function(){
const target=document.getElementById('events-list');if(!target)return;
const empty=target.innerHTML;
fetch('events.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('unavailable');return r.json()}).then(events=>{
 if(!Array.isArray(events)||!events.length)return;
 const upcoming=events.filter(e=>e&&typeof e.title==='string'&&typeof e.start==='string'&&!isNaN(Date.parse(e.start))&&Date.parse(e.start)>Date.now()).sort((a,b)=>Date.parse(a.start)-Date.parse(b.start));
 if(!upcoming.length)return;
 target.replaceChildren();upcoming.forEach(e=>{const row=document.createElement('article');row.className='event';const date=document.createElement('time');date.dateTime=e.start;date.textContent=new Intl.DateTimeFormat('en-SG',{dateStyle:'medium',timeStyle:'short',timeZone:'Asia/Singapore'}).format(new Date(e.start));const content=document.createElement('div');const title=document.createElement('h3');title.textContent=e.title;const desc=document.createElement('p');desc.textContent=typeof e.description==='string'?e.description:'';content.append(title,desc);row.append(date,content);if(typeof e.url==='string'&&/^https:\/\//.test(e.url)){const link=document.createElement('a');link.href=e.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent='Details ↗';row.append(link)}target.append(row)});
 }).catch(()=>{target.innerHTML=empty});
})();
