ajax("https://appworks-school.github.io/Remote-Aassigiment-Data/products", (response) =>render(response))

function ajax(src, callback) {
  const request = new XMLHttpRequest()
  request.onreadystatechange = () => {
    if (request.readyState === 4 ){
      callback(JSON.parse(request.responseText))
    }
  }
  request.open("GET", src)
  request.send()
}

function render(data) {
  data.forEach(item => {
    let tr = document.createElement("tr")
    let template = `
      <th>${item.name}</th>
      <th>${item.price}</th>
      <th>${item.description}</th>
    `
    tr.insertAdjacentHTML("afterbegin", template)
    document.querySelector("tbody").appendChild(tr)
  });
}