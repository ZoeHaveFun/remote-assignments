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
  for (let i = 0; i < data.length; i++) {
    let tr = document.createElement("tr")
    let template = `
      <th>${data[i].name}</th>
      <th>${data[i].price}</th>
      <th>${data[i].description}</th>
    `
    tr.insertAdjacentHTML("afterbegin", template)
    document.querySelector("tbody").appendChild(tr)
  }
}