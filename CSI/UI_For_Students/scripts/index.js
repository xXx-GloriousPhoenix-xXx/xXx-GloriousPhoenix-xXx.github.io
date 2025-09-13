const tabList = document.getElementById("tab-list");
const tabContent = document.getElementById("tab-content");

const tabsQuantity = 3;

window.addEventListener("load", () => {
    for (let i = 0; i < tabsQuantity; i++) {
        const tab = document.createElement("button");
        tab.classList.add("tab");
        tab.innerText = `Tab ${i + 1}`;
        tab.dataset.index = i;
        tab.addEventListener("click", e => {
            const index = e.target.dataset.index;
            loadTabContent(index);
        });
        tabList.appendChild(tab);
    }
    loadTabContent(0);
})
const loadTabContent = (index) => {
    tabContent.innerHTML = `Content for Tab ${parseInt(index) + 1}`;
}