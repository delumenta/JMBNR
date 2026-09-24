(async function(){
  const mount=document.getElementById('site-header');if(!mount)return;
  try{
    const response=await fetch('header.html');if(!response.ok)throw new Error('Header unavailable');
    mount.innerHTML=await response.text();
    const current=location.pathname.split('/').pop()||'index.html';
    const page=current==='academy.html'?'activities.html':current;
    mount.querySelectorAll('.global-navigation a').forEach(link=>{
      const target=link.getAttribute('href');
      if(target===page||(target==='member.html'&&['login.html','pending.html'].includes(page)))link.setAttribute('aria-current','page');
    });
    const button=mount.querySelector('.global-menu');const nav=mount.querySelector('.global-navigation');
    button.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close menu':'Open menu');
    });
    nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open menu')}});
  }catch(error){
    mount.innerHTML='<nav class="global-header global-fallback" aria-label="Main navigation"><a href="index.html">JMBNR</a><a href="activities.html">Activities</a><a href="operations.html">Operations</a><a href="join.html">Join</a><a href="member.html">Member sign in</a></nav>';
  }
})();
