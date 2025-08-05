// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="index.html">Have you read the Manual?</a></li><li class="chapter-item "><a href="responsibilities.html">Responsibilities</a></li><li class="chapter-item "><a href="management.html">Management</a></li><li class="chapter-item affix "><li class="part-title">Guides</li><li class="chapter-item "><a href="laser_engravers.html">Laser Engravers</a></li><li class="chapter-item "><a href="Lobo_CNC/Lobo_CNC_Mill.html">Lobo CNC Mill</a></li><li class="chapter-item "><a href="Torchmate/Torchmate_Plasma_Table.html">Torchmate Plasma Table</a></li><li class="chapter-item affix "><li class="part-title">Maintenance</li><li class="chapter-item "><a href="electrical.html">Electrical</a></li><li class="chapter-item "><a href="air_compressor.html">Air Compressor</a></li><li class="chapter-item "><a href="fire_permit.html">Annual Fire Permit</a></li><li class="chapter-item "><a href="first_aid.html">First Aid Supplies</a></li><li class="chapter-item affix "><li class="part-title">Processes</li><li class="chapter-item "><a href="onboarding.html">Onboarding New Members</a></li><li class="chapter-item "><a href="waivers.html">Liability Waivers</a></li><li class="chapter-item "><a href="editing.html">Updating this Manual</a></li><li class="chapter-item "><a href="legal_management.html">Management Responsibilities</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item "><a href="minutes/index.html">Meeting Minutes</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="minutes/2025-08-04-Member_Meeting.html">2025-08-04</a></li><li class="chapter-item "><a href="minutes/2025-02-03-Member_Meeting.html">2025-02-03</a></li><li class="chapter-item "><a href="minutes/2025-01-06-Board_Meeting.html">2025-01-06 (Board)</a></li><li class="chapter-item "><a href="minutes/2025-01-06-Member_Meeting.html">2025-01-06</a></li><li class="chapter-item "><a href="minutes/2024-12-02-Board_Meeting.html">2024-12-02 (Board)</a></li><li class="chapter-item "><a href="minutes/2024-12-02-Member_Meeting.html">2024-12-02</a></li><li class="chapter-item "><a href="minutes/2024-10-07-Member_Meeting.html">2024-10-07</a></li><li class="chapter-item "><a href="minutes/2024-09-09-Member_Meeting.html">2024-09-09</a></li><li class="chapter-item "><a href="minutes/2024-08-05-Member_Meeting.html">2024-08-05</a></li><li class="chapter-item "><a href="minutes/2024-06-03-Board_Meeting.html">2024-06-03 (Board)</a></li><li class="chapter-item "><a href="minutes/2024-06-03-Member_Meeting.html">2024-06-03</a></li><li class="chapter-item "><a href="minutes/2024-04-01-Member_Meeting.html">2024-04-01</a></li><li class="chapter-item "><a href="minutes/2024-03-04-Board_Meeting.html">2024-03-04 (Board)</a></li><li class="chapter-item "><a href="minutes/2023-12-04-Member_Meeting.html">2023-12-04</a></li><li class="chapter-item "><a href="minutes/2023-11-06-Board_Meeting.html">2023-11-06 (Board)</a></li><li class="chapter-item "><a href="minutes/2023-11-06-Member_Meeting.html">2023-11-06</a></li><li class="chapter-item "><a href="minutes/2023-10-02-Member_Meeting.html">2023-10-02</a></li><li class="chapter-item "><a href="minutes/2023-09-04-Member_Meeting.html">2023-09-04</a></li><li class="chapter-item "><a href="minutes/2023-08-07-Member_Meeting.html">2023-08-07</a></li><li class="chapter-item "><a href="minutes/2023-07-10-Member_Meeting.html">2023-07-10</a></li><li class="chapter-item "><a href="minutes/2023-06-05-Member_Meeting.html">2023-06-05</a></li><li class="chapter-item "><a href="minutes/2023-01-15-Board_Meeting.html">2023-01-15 (Board)</a></li><li class="chapter-item "><a href="minutes/2022-12-06-Member_Meeting.html">2022-12-06</a></li><li class="chapter-item "><a href="minutes/2022-11-07-Member_Meeting.html">2022-11-07</a></li><li class="chapter-item "><a href="minutes/2022-02-07-Member_Meeting.html">2022-02-07</a></li><li class="chapter-item "><a href="minutes/2021-12-06-Member_Meeting.html">2021-12-06</a></li><li class="chapter-item "><a href="minutes/2021-11-01-Member_Meeting.html">2021-11-01</a></li><li class="chapter-item "><a href="minutes/2021-10-04-Member_Meeting.html">2021-10-04</a></li><li class="chapter-item "><a href="minutes/2021-09-06-Member_Meeting.html">2021-09-06</a></li><li class="chapter-item "><a href="minutes/2021-09-01-Board_Meeting.html">2021-09-01 (Board)</a></li><li class="chapter-item "><a href="minutes/2021-07-05-Member_Meeting.html">2021-07-05</a></li><li class="chapter-item "><a href="minutes/2021-06-07-Member_Meeting.html">2021-06-07</a></li><li class="chapter-item "><a href="minutes/2021-05-03-Member_Meeting.html">2021-05-03</a></li><li class="chapter-item "><a href="minutes/2021-04-19-Member_Meeting.html">2021-04-19</a></li><li class="chapter-item "><a href="minutes/2021-03-15-Member_Meeting.html">2021-03-15</a></li><li class="chapter-item "><a href="minutes/2020-11-16-Member_Meeting.html">2020-11-16</a></li><li class="chapter-item "><a href="minutes/2020-10-19-Member_Meeting.html">2020-10-19</a></li><li class="chapter-item "><a href="minutes/2020-08-17-Member_Meeting.html">2020-08-17</a></li><li class="chapter-item "><a href="minutes/2020-07-06-Member_Meeting.html">2020-07-06</a></li><li class="chapter-item "><a href="minutes/2020-05-05-Member_Meeting.html">2020-05-05</a></li><li class="chapter-item "><a href="minutes/2020-04-30-Member_Meeting.html">2020-04-30</a></li><li class="chapter-item "><a href="minutes/2019-08-05-Member_Meeting.html">2019-08-05</a></li><li class="chapter-item "><a href="minutes/2019-06-03-Member_Meeting.html">2019-06-03</a></li><li class="chapter-item "><a href="minutes/2019-04-01-Member_Meeting.html">2019-04-01</a></li><li class="chapter-item "><a href="minutes/2019-02-04-Member_Meeting.html">2019-02-04</a></li><li class="chapter-item "><a href="minutes/2019-01-07-Member_Meeting.html">2019-01-07</a></li><li class="chapter-item "><a href="minutes/2018-08-08-Member_Meeting.html">2018-08-08</a></li><li class="chapter-item "><a href="minutes/2018-03-01-Member_Meeting.html">2018-03-01</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
