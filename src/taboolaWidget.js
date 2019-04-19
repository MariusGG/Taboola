//ADDING H1 FOR A TITLE
let getTaboolaWidgets = document.querySelector('#taboola-widgets').children;

for(i = 0; i < getTaboolaWidgets.length; i++) {
  let x = getTaboolaWidgets[i].children;
  for(e = 0; e < x.length; e++){
      let createTitle = document.createElement('h1');
      let createBranding = document.createElement('p');
      createTitle.setAttribute('class', 'title');
      createBranding.setAttribute('class', 'brand');
      (x[e].append(createTitle, createBranding ));
    }
  }
  //
  // for(i = 0; i < getTaboolaWidgets.length; i++) {
  //   let x = getTaboolaWidgets[i].children;
  //   for(e = 0; e < x.length; e++){
  //       let createTitle = document.createElement('h');
  //       createTitle.setAttribute("class", "title");
  //       (x[e].appendChild(createTitle));
  //     }
  //   }
