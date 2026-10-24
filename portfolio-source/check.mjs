// Run with: node check.mjs
import {readFileSync, existsSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {dirname, resolve} from 'node:path';
const root = dirname(fileURLToPath(import.meta.url));
const context = {window:{}};
runInNewContext(readFileSync(resolve(root,'dist/site-content.js'),'utf8'), context);
const data = context.window.PORTFOLIO;
assert(data.name && data.bio && data.projects.length, 'Required content is missing');
assert.equal(new Set(data.projects.map(p=>p.id)).size, data.projects.length, 'Project IDs must be unique');
for (const project of data.projects) {
  assert(project.name && project.problem && project.built && project.result);
  for (const shot of project.screenshots) {
    assert(shot.alt && shot.caption, 'Every screenshot needs accessible text');
    assert(existsSync(resolve(root,'dist',shot.src)), `Missing screenshot: ${shot.src}`);
  }
}
assert(readFileSync(resolve(root,'dist',data.resume.file)).subarray(0,5).toString()==='%PDF-', 'Resume must be a PDF');
for (const file of ['index.html','styles.css','app.js','assets/fonts/doto.ttf','assets/fonts/inter.ttf','assets/fonts/inter-semibold.ttf']) assert(existsSync(resolve(root,'dist',file)), `Missing file: ${file}`);
console.log(`OK: ${data.projects.length} projects, all screenshot files, fonts, resume, and required content.`);
