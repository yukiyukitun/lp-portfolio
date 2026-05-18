// ============ Apply initial tweaks ============
function applyTweaks(t){
  document.documentElement.dataset.theme = t.theme;
  document.documentElement.dataset.fontpair = t.fontPair;
  document.documentElement.dataset.motion = t.motion;
  const hero = document.getElementById('hero');
  hero.dataset.layout = t.heroLayout;
  const frame = hero.querySelector('.hero-frame');
  const titleWrap = hero.querySelector('.hero-title-wrap');
  if(t.heroLayout === 'splitLeft'){
    frame.style.cssText = 'left:0; top:0; transform:none; width:50%; height:100%; aspect-ratio:auto;';
    titleWrap.style.paddingLeft = 'calc(50% + 60px)';
  } else if(t.heroLayout === 'minimalType'){
    frame.style.display = 'none';
    titleWrap.style.textAlign = 'center';
  } else {
    frame.style.cssText = '';
    titleWrap.style.cssText = '';
  }
  document.querySelectorAll('.tweaks .opts').forEach(g=>{
    g.querySelectorAll('button').forEach(b=>{
      b.classList.toggle('active', b.dataset.val === t[g.dataset.key]);
    });
  });
}
applyTweaks(TWEAKS);

// ============ Edit mode ============
window.addEventListener('message', (e)=>{
  if(!e.data || !e.data.type) return;
  if(e.data.type === '__activate_edit_mode') document.getElementById('tweaks').classList.add('visible');
  if(e.data.type === '__deactivate_edit_mode') document.getElementById('tweaks').classList.remove('visible');
});
window.parent.postMessage({type:'__edit_mode_available'}, '*');

document.querySelectorAll('.tweaks .opts button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const key = btn.parentElement.dataset.key;
    const val = btn.dataset.val;
    TWEAKS[key] = val;
    applyTweaks(TWEAKS);
    window.parent.postMessage({type:'__edit_mode_set_keys', edits:{[key]:val}}, '*');
  });
});

// ============ Loader ============
(function loader(){
  const el = document.getElementById('loader');
  const count = document.getElementById('loaderCount');
  let n = 0;
  const iv = setInterval(()=>{
    n += Math.floor(Math.random()*8)+3;
    if(n >= 100){ n = 100; clearInterval(iv); setTimeout(()=>{ el.classList.add('done'); document.getElementById('hero').classList.add('ready'); startScrambles(); }, 400); }
    count.textContent = String(n).padStart(3,'0');
  }, 80);
})();

// ============ Scroll reveal ============
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, {threshold:.12});
document.querySelectorAll('.reveal, .mask').forEach(el=>io.observe(el));

// ============ Text scramble ============
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz—·○◦';
function scramble(el){
  const final = el.dataset.scramble;
  let frame = 0;
  const queue = [...final].map((c)=>({from:'', to:c, start:Math.floor(Math.random()*20), end:Math.floor(Math.random()*20)+20}));
  function update(){
    let out = '', done = 0;
    for(let i=0;i<queue.length;i++){
      const {from, to, start, end} = queue[i];
      if(frame >= end){ done++; out += to; }
      else if(frame >= start){ out += chars[Math.floor(Math.random()*chars.length)]; }
      else out += from;
    }
    el.textContent = out;
    if(done < queue.length){ frame++; requestAnimationFrame(update); }
  }
  update();
}
function startScrambles(){
  if(document.documentElement.dataset.motion === 'low') return;
  document.querySelectorAll('[data-scramble]').forEach((el, i)=>{ setTimeout(()=>scramble(el), 400 + i*180); });
}

// ============ FAQ ============
document.querySelectorAll('.faq-q').forEach(q=>{
  q.addEventListener('click', ()=> q.parentElement.classList.toggle('open'));
});

// ============ Cursor ============
const cur = document.getElementById('cursor');
const dot = document.getElementById('cursorDot');
let mx=0,my=0, cx=0,cy=0;
window.addEventListener('mousemove', e=>{ mx=e.clientX; my=e.clientY; dot.style.transform=`translate(${mx}px, ${my}px) translate(-50%,-50%)`; });
(function raf(){ cx += (mx-cx)*.15; cy += (my-cy)*.15; cur.style.transform=`translate(${cx}px, ${cy}px) translate(-50%,-50%)`; requestAnimationFrame(raf); })();
document.querySelectorAll('a, button, .plan, .faq-q, .voice-card, .ingredient').forEach(el=>{
  el.addEventListener('mouseenter', ()=>cur.classList.add('hover'));
  el.addEventListener('mouseleave', ()=>cur.classList.remove('hover'));
});

// ============ Hero parallax ============
const heroFrame = document.querySelector('.hero-frame');
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', ()=>{
  if(document.documentElement.dataset.motion === 'low') return;
  const y = window.scrollY;
  if(y < window.innerHeight && heroFrame){
    heroFrame.style.transform = `translate(-50%, calc(-50% + ${y*0.25}px)) scale(${1 - y*0.0004})`;
    heroBg.style.transform = `translateY(${y*0.12}px)`;
  }
});

// ============ Hover distortion on journal cards ============
document.querySelectorAll('.journal-card').forEach(card=>{
  const cover = card.querySelector('.cover');
  card.addEventListener('mousemove', e=>{
    if(document.documentElement.dataset.motion === 'low') return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left)/r.width - .5;
    const y = (e.clientY - r.top)/r.height - .5;
    cover.style.transform = `scale(1.04) translate(${x*12}px, ${y*12}px)`;
  });
  card.addEventListener('mouseleave', ()=> cover.style.transform = '');
});

// ============ Plan selection ============
document.querySelectorAll('.plan').forEach(p=>{
  p.addEventListener('click', ()=>{
    document.querySelectorAll('.plan').forEach(x=>x.classList.remove('active'));
    p.classList.add('active');
  });
});
