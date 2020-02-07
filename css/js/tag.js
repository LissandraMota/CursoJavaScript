const colors = {
    p: "#8B008B",
    div: "#FF1493",
    span: "#FA8072",
    section: "#FF00FF",
    ul: "#BA55D3",
    ol: "#DA70D6",
    header: "#C71585",
    nav: "#DB7093",
    main: "#9932CC",
    footer: "#F08080",
    form: 	"#D8BFD8",
    body: "	#DC143C",
    padrao:"#FFC0CB",
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll(".tag").forEach(box => {
    const tagName = box.tagName.toLowerCase()

    box.style.borderColor = colors.get(tagName)

    if(!box.classList.contains("nolabel")) {
        const label = document.createElement("label")
        label.style.background = colors.get(tagName)
        label.innerHTML = tagName
        box.insertBefore(label, box.childNodes[0])
    }
})