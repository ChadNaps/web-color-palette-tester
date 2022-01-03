function setTheme(themeName, color_pallet) {
    localStorage.setItem('theme', themeName);
    localStorage.setItem('color_pallet', color_pallet);
    document.documentElement.className = themeName + " " + color_pallet;
}
// function to toggle between light and dark theme
function toggleTheme() {
    let theme = localStorage.getItem('theme');
    let pallet = localStorage.getItem('color_pallet');
    if (theme === 'theme-dark'){
        setTheme('theme-light', pallet);
    }
    else {
        setTheme('theme-dark', pallet);
    }
}

function setColor() {
    let selected_color = document.getElementById("color-selector").value
    let theme = localStorage.getItem('theme');
    setTheme(theme, selected_color);
}


// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem("color_pallet") == null){
        localStorage.setItem("color_pallet", "theme_1")
    }
    let pallet = localStorage.getItem("color_pallet");
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark', pallet);
    }
    else {
        setTheme('theme-light', pallet);
    }
})();

function lstrip(string, chars) {
    let regex = new RegExp("^" + chars);
    return string.replace(regex, "");
};

// Generate drop-down list for theme selector
let css_rule_list = document.styleSheets[2].cssRules // the index that contains themes.css
let color_picker_dropdown = document.getElementById("color-selector");

for (let i = 0; i < css_rule_list.length; i++) {
    let color = lstrip(css_rule_list[i].selectorText, "html.")
    let option = document.createElement("option");
    option.value = color;
    option.text = color;
    color_picker_dropdown.appendChild(option);
}
