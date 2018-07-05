const content = require('./content');
const util = require('./util');

const {
  prismThemesUrl,
  prismThemes,
  headContent,
  contactDetails,
  networkDetails,
  summaryContent,
  experiences
} = content;
const {
  changeThemeLink,
  asideItemBuilder,
  contentBuilder,
  experienceBuilder
} = util;

const asideContacts = asideItemBuilder(contactDetails, 'Contact Details');
const asideNetwork = asideItemBuilder(networkDetails, 'Dev Network Details');
const summary = contentBuilder(summaryContent, 'p');
let x = '';

experiences.forEach(item => {
  const temp = experienceBuilder(item)
  x = x.concat(temp);
})


const body = `
  <aside class="content__aside">
    ${asideContacts}
    ${asideNetwork}
  </aside>
  <main class="content">
    <section class="content">
      <h2>Summary</h2>
      ${summary}
    </section>
    ${x}
  </main>`;
    
document.addEventListener('DOMContentLoaded', function contentLoaded() {

  (function() {
    changeThemeLink(prismThemesUrl, prismThemes);
  })();

  document.getElementById('content').innerHTML = headContent.concat(body);
});