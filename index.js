let buttons = {
    click: document.getElementById("click"),
    save: document.getElementById("save-btn"),
    reset: document.getElementById("refresh-btn")
}
let saveEl = document.getElementById("saved")
let countEl = document.getElementById("count-el")
let count = 0
let countStr = " "

buttons.click.addEventListener("click", function() {
    count += 1
    countEl.textContent = count
    console.log("The current number is: " + count)
})

buttons.save.addEventListener("click",function() {
    countStr = count + ", "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log("The item was saved.")
})

buttons.reset.addEventListener("click",function() {
    countStr = "reseted"
    saveEl.textContent = countStr
    countEl.textContent = 0
    count = 0
    saveEl.textContent = "Previous entered: "
    console.log("the items were reseted")
})
