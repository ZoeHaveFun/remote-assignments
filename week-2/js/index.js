window.onload = function () {
  const h1Text = document.querySelector("h1")
  const hamburger = document.querySelector(".icon")
  const closeBtn = document.querySelector("#closeBtn")
  const sideMenu = document.querySelector("#sideMenu")
  const callAction = document.querySelector("button")

  max(array1)
  calculate(args2)
  avg(data)
  twoSum(nums, target)

  //監聽事件
  h1Text.addEventListener("click", () => {
    h1Text.textContent = "Have a Good Time!"
  })
  hamburger.addEventListener("click", () => {
    sideMenu.style.display = "block"
  })
  closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none"
  })
  callAction.addEventListener("click", () => {
    const main = document.querySelector("#main")
    const children = main.children.length
    let template = "";
    for (let i = children + 1; i < children + 5; i++) {
      template += `<article><h4>Content Box ${i}</h4></article>`
    }
    main.insertAdjacentHTML("beforeend", template)
  })
}