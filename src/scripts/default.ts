// Toggle dialog based on data-target attribute
const targets = document.querySelectorAll("[data-target]")
targets.forEach(function (target) {
    target.addEventListener("click", function () {
        const attr = target.getAttribute("data-target")
        if (!attr) throw new Error("Please specify a data-target")

        const element = document.getElementById(attr)
        if(!element) throw new Error("Element matching data-target could not be found")
        element.classList.toggle("hidden")
    })
})