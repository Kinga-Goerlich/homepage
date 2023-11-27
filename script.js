{
    const toggle = () => {
        const body = document.querySelector;
        const themeName = document.querySelector(".themeName");

        body.classList.themeName("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", toggle);

    };

    init();
}