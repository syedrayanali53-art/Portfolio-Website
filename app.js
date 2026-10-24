const data = window.PORTFOLIO;
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
// Only local assets and standard web/mail links can become clickable content.
const safeURL = (value, mail = false) => {
  if (!value) return '';
  try { const url = new URL(value, location.href); return (['http:', 'https:', 'file:'].includes(url.protocol) || (mail && url.protocol === 'mailto:')) ? value : ''; } catch { return ''; }
};
const tags = items => items.map(item => `<span class="tag">${escapeHTML(item)}</span>`).join('');
$$('[data-content]').forEach(el => { el.textContent = el.dataset.content.split('.').reduce((obj, key) => obj?.[key], data) || ''; });
$('#hero-name').innerHTML = `${escapeHTML(data.name.split(' ')[0]).toUpperCase()}<br>${escapeHTML(data.name.split(' ').slice(1).join(' ')).toUpperCase()}<span class="blue">.</span>`;
document.title = `${data.name} — Analytics & Systems`;
$$('.resume-download,.resume-view').forEach(link => { link.href = safeURL(data.resume.file); });
$('#interests').innerHTML = data.interests.map(item => `<span>${escapeHTML(item)}</span>`).join('');
$('#education-list').innerHTML = data.education.map(degree => `<article class="degree"><p class="degree-level mono">${escapeHTML(degree.level)}</p><h4>${escapeHTML(degree.program)}</h4><p class="degree-date">Expected ${escapeHTML(degree.graduation)}</p></article>`).join('');
$('#skills').innerHTML = data.skills.map(skill => `<article class="tile skill-tile reveal"><div class="tile-label mono">${escapeHTML(skill.subtitle)}<span class="blue">${escapeHTML(skill.number)}</span></div><h3>${escapeHTML(skill.title)}</h3><div class="tags">${tags(skill.items)}</div></article>`).join('');

// Small native SVG illustrations: no image library or animation dependency.
function dottedArt(kind) {
  let dots = '';
  for (let row = 0; row < 21; row++) for (let col = 0; col < 31; col++) {
    const x = col * 8 + 10, y = row * 8 + 10, dx = col - 15, dy = row - 10;
    let on = false, accent = false;
    if (kind === 'dispatch') {
      on = (Math.abs(dy) < 1.5 && Math.abs(dx) < 11) || (dx > 3 && Math.abs(Math.abs(dy) - (11 - dx)) < 1.4) || (dx < -6 && Math.abs(dy) < 5 && Math.abs(dy) > 3);
      accent = dx > 6;
    } else if (kind === 'tableau') {
      on = (dx > -10 && dx < -6 && dy > 0 && dy < 8) || (dx > -4 && dx < 0 && dy > -4 && dy < 8) || (dx > 2 && dx < 6 && dy > -8 && dy < 8) || (dx > 8 && dx < 12 && dy > -1 && dy < 8);
      accent = dx > 2 && dx < 6;
    } else {
      on = (Math.abs(dx) < 9 && Math.abs(dy) > 6 && Math.abs(dy) < 9) || (Math.abs(dx) > 7 && Math.abs(dx) < 10 && Math.abs(dy) < 8) || (dx > -5 && dx < 0 && Math.abs(dy - dx - 3) < 1.4) || (dx >= 0 && dx < 7 && Math.abs(dy + dx - 2) < 1.4);
      accent = Math.abs(dx) < 6 && Math.abs(dy) < 6;
    }
    dots += `<circle cx="${x}" cy="${y}" r="${on ? 2.35 : .7}" fill="${on ? accent ? '#2357f5' : 'currentColor' : 'currentColor'}" opacity="${on ? 1 : .12}"/>`;
  }
  return `<svg viewBox="0 0 260 180" fill="none" aria-hidden="true">${dots}</svg>`;
}
const corner = p => `<span class="card-corner"><span class="rank">${escapeHTML(p.number)}</span><span class="suit" aria-hidden="true">${escapeHTML(p.suit)}</span></span>`;
const cardMarkup = p => `<span class="card-top">${corner(p)}</span><span class="card-art">${dottedArt(p.id)}</span><span class="card-name">${escapeHTML(p.name)}</span><span class="card-bottom"><span class="card-open" aria-hidden="true">↗</span>${corner(p)}</span>`;
$('#project-grid').innerHTML = data.projects.map((p, i) => `<button class="project-card" data-project="${i}" aria-label="Open project ${escapeHTML(p.number)}: ${escapeHTML(p.name)}" aria-haspopup="dialog">${cardMarkup(p)}</button>`).join('');
$('#experience-list').innerHTML = data.experience.map(item => `<article class="experience-card reveal"><p class="experience-dates">${escapeHTML(item.dates)}</p><h3>${escapeHTML(item.role)}</h3><p class="experience-org">${escapeHTML(item.organization)}</p><ul>${item.bullets.map(bullet => `<li>${escapeHTML(bullet)}</li>`).join('')}</ul></article>`).join('');
const icons = {
  email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4"/>',
  github: '<path d="M9 19c-5 1-5-2-7-2m14 5v-4a3.5 3.5 0 0 0-1-3c4-.4 6-2 6-5a5 5 0 0 0-1.3-3.4 5 5 0 0 0-.1-3.6s-1.4-.4-4.2 1.6a14 14 0 0 0-7 0C5.6 2.6 4.2 3 4.2 3a5 5 0 0 0-.1 3.6A5 5 0 0 0 3 10c0 3 2 4.6 6 5a3.5 3.5 0 0 0-1 3v4"/>'
};
$('#contact-links').innerHTML = ['email', 'linkedin', 'github'].map(key => {
  const label = {email:'Email', linkedin:'LinkedIn', github:'GitHub projects'}[key];
  const url = safeURL(key === 'email' && data.links[key] ? `mailto:${data.links[key]}` : data.links[key], true);
  const content = `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[key]}</svg><span><span class="link-label">${label}</span><span class="link-note">${url ? key === 'email' ? escapeHTML(data.links[key]) : 'LET’S CONNECT' : 'LINK TO BE ADDED'}</span></span><span class="arrow" aria-hidden="true">↗</span>`;
  return url ? `<a class="contact-link" href="${escapeHTML(url)}" ${key !== 'email' ? 'target="_blank" rel="noopener noreferrer"' : ''}>${content}</a>` : `<button class="contact-link" aria-disabled="true" data-placeholder="${label}">${content}</button>`;
}).join('');
let toastTimer;
$$('[data-placeholder]').forEach(button => button.addEventListener('click', () => { const toast = $('.toast'); toast.textContent = `${button.dataset.placeholder} link is a placeholder for this design preview.`; toast.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 3500); }));

const projectDialog = $('#project-dialog'), shell = $('.project-shell'), imageDialog = $('#image-dialog');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let activeCard, activeProject, closing = false, expansionTimer;
function expandedBounds() {
  const width = Math.min(940, innerWidth - (innerWidth < 600 ? 20 : 64));
  const height = Math.min(810, innerHeight - (innerWidth < 600 ? 28 : 64));
  return {left:(innerWidth - width) / 2, top:(innerHeight - height) / 2, width, height};
}
function setBounds(rect) { for (const key of ['left', 'top', 'width', 'height']) shell.style[key] = `${rect[key]}px`; }
function openProject(index, card) {
  if (projectDialog.open || closing) return;
  activeCard = card; activeProject = data.projects[index]; const p = activeProject;
  $('.modal-back').innerHTML = card.innerHTML;
  $('#project-detail').innerHTML = `<header class="detail-header"><span class="mono"><span class="blue">${escapeHTML(p.number)}</span> / ${escapeHTML(p.category)}</span><h2 id="project-dialog-title">${escapeHTML(p.name)}</h2><p>${escapeHTML(p.brief)}</p></header><div class="detail-grid"><div><section class="detail-block"><h3>01 / THE PROBLEM</h3><p>${escapeHTML(p.problem)}</p></section><section class="detail-block"><h3>02 / WHAT I BUILT</h3><p>${escapeHTML(p.built)}</p></section><section class="detail-block"><h3>03 / TOOLS USED</h3><div class="tags">${tags(p.tools)}</div></section></div><section class="detail-result"><div class="metric">${escapeHTML(p.metric)}</div><div class="metric-label">${escapeHTML(p.metricLabel)}</div><h3>04 / THE RESULT</h3><p>${escapeHTML(p.result)}</p><p class="result-note">${escapeHTML(p.resultNote)}</p></section></div><h3 class="gallery-heading">05 / A CLOSER LOOK <span class="muted">— CLICK TO ENLARGE</span></h3><div class="gallery">${p.screenshots.map((shot,i) => `<button data-screenshot="${i}" aria-label="Enlarge: ${escapeHTML(shot.caption)}"><img src="${escapeHTML(safeURL(shot.src))}" alt="${escapeHTML(shot.alt)}"><span class="gallery-caption">${escapeHTML(shot.caption)} <span aria-hidden="true">↗</span></span></button>`).join('')}</div><div class="detail-bottom">${safeURL(p.link) ? `<a class="button primary" href="${escapeHTML(safeURL(p.link))}" target="_blank" rel="noopener noreferrer">${escapeHTML(p.linkLabel)} ↗</a>` : '<span class="unavailable">LIVE PROJECT LINK · TO BE ADDED</span>'}<span class="mono">ESC TO RETURN TO THE DECK</span></div>`;
  setBounds(card.getBoundingClientRect());
  shell.classList.remove('flipped', 'expanded');
  projectDialog.showModal(); document.body.classList.add('modal-open');
  $('#project-detail').scrollTop = 0;
  card.style.visibility = 'hidden';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (!projectDialog.open || closing) return;
    shell.classList.add('flipped');
    expansionTimer = setTimeout(() => { if (!closing) { setBounds(expandedBounds()); shell.classList.add('expanded'); } }, reducedMotion.matches ? 0 : 180);
  }));
  $$('[data-screenshot]', projectDialog).forEach(button => button.addEventListener('click', () => {
    const shot = p.screenshots[Number(button.dataset.screenshot)];
    $('#enlarged-image').src = safeURL(shot.src); $('#enlarged-image').alt = shot.alt; $('#image-caption').textContent = shot.caption;
    imageDialog.showModal();
  }));
}
function closeProject() {
  if (closing || !projectDialog.open) return;
  closing = true; clearTimeout(expansionTimer);
  shell.classList.remove('expanded'); setBounds(activeCard.getBoundingClientRect());
  setTimeout(() => shell.classList.remove('flipped'), reducedMotion.matches ? 0 : 140);
  setTimeout(() => {
    projectDialog.close(); document.body.classList.remove('modal-open'); activeCard.style.visibility = ''; activeCard.focus({preventScroll:true}); closing = false;
  }, reducedMotion.matches ? 0 : 650);
}
$$('[data-project]').forEach(card => card.addEventListener('click', () => openProject(Number(card.dataset.project), card)));
$('.close-button', projectDialog).addEventListener('click', closeProject);
projectDialog.addEventListener('cancel', event => { event.preventDefault(); closeProject(); });
projectDialog.addEventListener('click', event => { if (event.target === projectDialog) closeProject(); });
$('.close-button', imageDialog).addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('click', event => { if (event.target === imageDialog) imageDialog.close(); });
addEventListener('resize', () => { if (projectDialog.open && !closing) setBounds(expandedBounds()); });

if ('IntersectionObserver' in window) {
  if (!reducedMotion.matches) document.documentElement.classList.add('js-motion');
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), {threshold:.06});
  $$('.reveal').forEach(el => revealObserver.observe(el));
  const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) $$('nav a').forEach(link => { const active = link.hash === `#${entry.target.id}`; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  }), {rootMargin:'-15% 0px -65% 0px'});
  $$('main>section').forEach(section => navObserver.observe(section));
}
