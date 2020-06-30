let Books = {};

async function loadJSON(localUrl)
{
  //Todo: Address the security risk of someone using an attack vector against the method
   const escapedUrl = encodeURIComponent(localUrl)
   const response = await fetch(escapedUrl);
  // console.log(data);
  return await response.json();

}

function loadTemplate(books,templateID,DOMTargetElement)
{
  const templateElement = document.getElementById(templateID);
  const templateSource = templateElement.innerHTML;

  const template = Handlebars.compile(templateSource);

  const compiledHtml = template(books);
  DOMTargetElement.innerHTML = compiledHtml;
}





export { loadJSON , loadTemplate};


