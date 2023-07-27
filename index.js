let saveEl = document.getElementById("saved")
let countEl = document.getElementById("count-el")


let count = 0

function clicked() {
    count += 1
    countEl.textContent = count
    console.log("The current number is: " + count)
}

let countStr = " "

function save() {
    countStr = count + ", "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log("The item was saved.")
}

function reset() {
    countStr = "reseted"
    saveEl.textContent = countStr
    countEl.textContent = 0
    count = 0
    saveEl.textContent = "Previous entered: "
    console.log("the items were reseted")
}
