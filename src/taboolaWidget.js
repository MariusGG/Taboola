const api = 'https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init';

fetch(api)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  displayData(data.list);
})
.catch(function (err) {
  console.log("Something went wrong!", err);
});

const widgetDisplayBoard = document.querySelector('#taboola-widgets');
widgetDisplayBoard.className = 'row';
function findTag(tag) {
  return document.querySelector(tag);
}
function createTextNode(text) {
  return document.createTextNode(text);
}
function createHtmlTag(tag) {
  return document.createElement(tag);
}
function appendingHtmlTag(parentTag, childTag) {
  return parentTag.appendChild(childTag);
}
function addingUrl(tag, url) {
  return tag.href = url;
}

let header = findTag('header');
let createH1 = createHtmlTag('h1');
let title = createTextNode('Taboola Widget Glossary');
appendingHtmlTag(createH1, title);
createH1.className = 'pg-title';
appendingHtmlTag(header, createH1);

function displayData(data) {
  let collectedData = data;

  return collectedData.map((item) => {
    let container = createHtmlTag('div');
    container.className += "col-3x2";


    let img = createHtmlTag('a')
    addingUrl(img, item.url)
    img.innerHTML = `<img src="${item.thumbnail[0].url}"/>`
    appendingHtmlTag(container, img);

    let branding = createHtmlTag('a')
    addingUrl(branding, item.url)
    branding.innerHTML = `<h5 class="branding">${item.branding}</h5>`
    appendingHtmlTag(container, branding);

    let title = createHtmlTag('a')
    addingUrl(title, item.url)
    title.innerHTML = `<h3 class="title">${item.name}</h3>`
    appendingHtmlTag(container, title);

    appendingHtmlTag(widgetDisplayBoard, container);

  });
}
