// screen change


let small = false
let big = false
function Changer() {
    if (window.innerWidth < 1024 && !small) {
        document.getElementById('side').classList.remove("translate-x-0")
        document.getElementById('side').classList.add("-translate-x-full")
        item2.classList.remove("hidden")
        console.log("kochick")
        small = true
        big = false
    }
    else if (window.innerWidth >= 1024 && !big) {
        document.getElementById('side').classList.add("translate-x-0")
        item2.classList.add("hidden")
        console.log("bozorg")
        small = false
        big = true
    }
}

window.addEventListener('resize', Changer)
document.addEventListener('DOMContentLoaded', Changer)

//side bar



var item = document.getElementById('item')
var item2 = document.getElementById('item2')
item.addEventListener('click', function () {
    var side = document.getElementById('side')
    var dark = document.getElementById('dark')
    if (side.classList.contains('-translate-x-full')) {
        side.classList.remove('-translate-x-full')
        side.classList.add('translate-x-0')
        dark.classList.remove("hidden")
    }
})
item2.addEventListener('click', function () {
    var side = document.getElementById('side')
    var dark = document.getElementById('dark')
    if (side.classList.contains('translate-x-0')) {
        side.classList.remove('translate-x-0')
        side.classList.add('-translate-x-full')
        dark.classList.add("hidden")
    }
})


//dark theme
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});