'use strict';
const data = window.PORTFOLIO;
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const safeURL = (value, mail = false) => {
  if (!value) return '';
  try {
    const url = new URL(value, location.href);
    return (['http:', 'https:', 'file:'].includes(url.protocol) || (mail && url.protocol === 'mailto:')) ? value : '';
  } catch { return ''; }
};
const tags = items => items.map(item => '<span class="tag">' + escapeHTML(item) + '</span>').join('');
const sentence = value => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
const cleanCaption = value => value.replace(/ · /g, ' / ');
$$('[data-content]').forEach(el => {
  el.textContent = cleanCaption(el.dataset.content.split('.').reduce((obj, key) => obj?.[key], data) || '');
});
const nameParts = data.name.split(' ');
$('#hero-name').innerHTML = escapeHTML(nameParts.shift()) + '<br>' + escapeHTML(nameParts.join(' ')) + '.';
document.title = data.name + ' | Analytics & Systems';
$$('.resume-download,.resume-view').forEach(link => { link.href = safeURL(data.resume.file); });
$('#interests').innerHTML = data.interests.map(item => '<span>' + escapeHTML(item) + '</span>').join('');
$('#education-list').innerHTML = data.education.map(degree => '<article class="degree"><p class="degree-level">' + escapeHTML(sentence(degree.level)) + '</p><h4>' + escapeHTML(degree.program) + '</h4><p class="degree-date">Expected ' + escapeHTML(degree.graduation) + '</p></article>').join('');
$('#skills').innerHTML = data.skills.map(skill => '<article class="skill-tile"><h3>' + escapeHTML(skill.title) + '</h3><div class="tags">' + tags(skill.items) + '</div></article>').join('');
const cardMarkup = (p, index) => '<span class="card-copy"><span class="card-name">' + escapeHTML(p.name) + '</span><span class="card-category">' + escapeHTML(sentence(p.category.replace(' / ', ' and '))) + '</span><span class="card-brief">' + escapeHTML(p.brief) + '</span><span class="card-open">Read case study</span></span>' + (index === 0 ? '<span class="card-art"><img src="' + escapeHTML(safeURL(p.screenshots[0].src)) + '" alt="' + escapeHTML(p.screenshots[0].alt) + '" loading="lazy" width="1440" height="900"></span>' : '');
$('#project-grid').innerHTML = data.projects.map((p, i) => '<button type="button" class="project-card" data-project="' + i + '" aria-label="Open project ' + escapeHTML(p.number) + ': ' + escapeHTML(p.name) + '" aria-haspopup="dialog">' + cardMarkup(p, i) + '</button>').join('');
$('#experience-list').innerHTML = data.experience.map(item => '<article class="experience-card"><p class="experience-dates">' + escapeHTML(item.dates) + '</p><h3>' + escapeHTML(item.role) + '</h3><p class="experience-org">' + escapeHTML(item.organization) + '</p><ul>' + item.bullets.map(bullet => '<li>' + escapeHTML(bullet) + '</li>').join('') + '</ul></article>').join('');
const icons = {
  email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4"/>',
  github: '<path d="M9 19c-5 1-5-2-7-2m14 5v-4a3.5 3.5 0 0 0-1-3c4-.4 6-2 6-5a5 5 0 0 0-1.3-3.4 5 5 0 0 0-.1-3.6s-1.4-.4-4.2 1.6a14 14 0 0 0-7 0C5.6 2.6 4.2 3 4.2 3a5 5 0 0 0-.1 3.6A5 5 0 0 0 3 10c0 3 2 4.6 6 5a3.5 3.5 0 0 0-1 3v4"/>'
};
$('#contact-links').innerHTML = ['email', 'linkedin', 'github'].map(key => {
  const label = {email:'Email', linkedin:'LinkedIn', github:'GitHub projects'}[key];
  const url = safeURL(key === 'email' && data.links[key] ? 'mailto:' + data.links[key] : data.links[key], true);
  const content = '<svg viewBox="0 0 24 24" aria-hidden="true">' + icons[key] + '</svg><span><span class="link-label">' + label + '</span><span class="link-note">' + (url ? key === 'email' ? escapeHTML(data.links[key]) : 'Let’s connect' : 'Link to be added') + '</span></span>';
  return url ? '<a class="contact-link" href="' + escapeHTML(url) + '" ' + (key !== 'email' ? 'target="_blank" rel="noopener noreferrer"' : '') + '>' + content + '</a>' : '<button class="contact-link" disabled>' + content + '</button>';
}).join('');
const projectDialog = $('#project-dialog');
const imageDialog = $('#image-dialog');
let activeCard;
function openProject(index, card) {
  if (projectDialog.open) return;
  const p = data.projects[index];
  activeCard = card;
  const gallery = p.screenshots.map((shot, i) => '<button type="button" data-screenshot="' + i + '" aria-label="Enlarge: ' + escapeHTML(shot.caption) + '"><img src="' + escapeHTML(safeURL(shot.src)) + '" alt="' + escapeHTML(shot.alt) + '" loading="lazy"><span class="gallery-caption">' + escapeHTML(cleanCaption(shot.caption)) + '</span></button>').join('');
  $('#project-detail').innerHTML = '<header class="detail-header"><h2 id="project-dialog-title">' + escapeHTML(p.name) + '</h2><p class="mono">' + escapeHTML(sentence(p.category)) + '</p><p>' + escapeHTML(p.brief) + '</p></header><div class="detail-grid"><div><section class="detail-block"><h3>The problem</h3><p>' + escapeHTML(p.problem) + '</p></section><section class="detail-block"><h3>What I built</h3><p>' + escapeHTML(p.built) + '</p></section><section class="detail-block"><h3>Tools used</h3><div class="tags">' + tags(p.tools) + '</div></section></div><section class="detail-result"><h3>The result</h3><div class="metric">' + escapeHTML(p.metric) + '</div><div class="metric-label">' + escapeHTML(sentence(p.metricLabel)) + '</div><p>' + escapeHTML(p.result) + '</p><p class="result-note">' + escapeHTML(p.resultNote) + '</p></section></div><h3 class="gallery-heading">A closer look</h3><div class="gallery">' + gallery + '</div><div class="detail-bottom">' + (safeURL(p.link) ? '<a class="button primary" href="' + escapeHTML(safeURL(p.link)) + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(p.linkLabel) + '</a>' : '<span class="unavailable">Live project link to be added</span>') + '<span class="mono">Escape to return to projects</span></div>';
  projectDialog.showModal();
  document.body.classList.add('modal-open');
  $('#project-detail').scrollTop = 0;
  $$('[data-screenshot]', projectDialog).forEach(button => button.addEventListener('click', () => {
    const shot = p.screenshots[Number(button.dataset.screenshot)];
    $('#enlarged-image').src = safeURL(shot.src);
    $('#enlarged-image').alt = shot.alt;
    $('#image-caption').textContent = cleanCaption(shot.caption);
    imageDialog.showModal();
  }));
}
function closeProject() { if (projectDialog.open) projectDialog.close(); }
$$('[data-project]').forEach(card => card.addEventListener('click', () => openProject(Number(card.dataset.project), card)));
$('.close-button', projectDialog).addEventListener('click', closeProject);
projectDialog.addEventListener('click', event => { if (event.target === projectDialog) closeProject(); });
projectDialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  activeCard?.focus({preventScroll:true});
});
$('.close-button', imageDialog).addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('click', event => { if (event.target === imageDialog) imageDialog.close(); });
if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) $$('nav a').forEach(link => {
      const active = link.hash === '#' + entry.target.id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
  }), {rootMargin:'-15% 0px -65% 0px'});
  $$('main > section').forEach(section => navObserver.observe(section));
}
