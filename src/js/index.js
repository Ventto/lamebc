window.addEventListener('load', function () {
    // =-----------------------[ SELECTIONS
    // =--------[ HEADER
    var menuVertical = document.getElementById("menu-vertical");
    // =--------[ VEHICULE TYPE
    var choice_type_auto = document.getElementById("choice-type-moto");
    var choice_type_auto = document.getElementById("choice-type-auto");
    var choice_type_handicape = document.getElementById("choice-type-handicape");
    // =--------[ PERMIS MOTO
    var pm_section = document.getElementById("permis-moto");
    var pm_titles = pm_section.getElementsByClassName("permis-titles")[0].getElementsByTagName("h1");

    var pm_choices_wrapper = pm_section
        .getElementsByClassName("choices-wrapper")[0];
    var pm_choice_2wheels = pm_choices_wrapper
        .getElementsByClassName("choice-permis-2wheels")[0];
    var pm_choice_moto = pm_choices_wrapper
        .getElementsByClassName("choice-permis-moto")[0];
    var pm_details_wrapper = pm_section
        .getElementsByClassName("permis-details-wrapper")[0];
    var pm_details = pm_details_wrapper
        .querySelectorAll('[class^=permis-]');
    // Buttons
    var pm_choices_wrapper_links = pm_choices_wrapper
        .querySelectorAll('[class^=permis-]');
    var pm_choice_moto_btn = pm_choice_2wheels
        .getElementsByClassName("moto-btn")[0];
    var pm_restart_btn = pm_section
        .getElementsByClassName("restart-btn")[0];
    // =--------[ PERMIS AUTO
    var pa_section = document.getElementById("permis-auto");
    var pa_titles = pa_section.getElementsByClassName("permis-titles")[0].getElementsByTagName("h1");
    var pa_choices_wrapper = pa_section
        .getElementsByClassName("choices-wrapper")[0];
    var pa_details_wrapper = pa_section.getElementsByClassName("permis-details-wrapper")[0]
    var pa_details = pa_details_wrapper
    .querySelectorAll('[class^=permis-]');
    // Buttons
    var pa_choices_wrapper_links = pa_choices_wrapper
        .querySelectorAll('[class^=permis-]');
    var pa_restart_btn = pa_section
        .getElementsByClassName("restart-btn")[0];

    // =-----------------------[ INIT ]
    pa_section.style.display = "block";
    pm_section.style.display = "none";


    var pa_reset_section = function (e) {
        // Hide
        pa_details_wrapper.style.display = "none";
        pa_restart_btn.style.display = "none";
        [].forEach.call(pa_titles, function (elt, i, arr) {
            elt.style.display = "none";
        });
        // Change title
        pa_titles[0].style.display = "block";
        // Show choices
        pa_choices_wrapper.style.display = "inline-block";
    };
    var pm_reset_section = function (e) {
        // Hide
        pm_details_wrapper.style.display = "none";
        pm_choice_moto.style.display = "none";
        pm_restart_btn.style.display = "none";
        [].forEach.call(pm_titles, function (elt, i, arr) {
            elt.style.display = "none";
        });
        // Change title
        pm_titles[0].style.display = "block";
        /* Show choices 2wheels */
        pm_choices_wrapper.style.display = "inline-block";
        pm_choice_2wheels.style.display = "inline-block";
    };

    pa_reset_section(null);
    pm_reset_section(null);

    // DEBUG
    pa_details_wrapper.style.display = "inline-block";
    pa_choices_wrapper.style.display = "none";

    // =-----------------------[ EVENTS ]
    // =--------[ HEAEDER
    document.getElementById("menu-trigger").onclick = function (e) {
        if (hasClass(menuVertical, "hide"))
            menuVertical.className = removeClass(menuVertical, 'hide');
        else
            menuVertical.className = menuVertical.className + " hide";

        /* FIXME:
         *  Event Click sur le menu vertical, si click alors on le cache
         *  Event Click sur header-wrap, si click alors on le cache
         *  Event Click sur le reste de la page, si click alors on le cache
         */
    };

    // =--------[ VEHICULE TYPE
    // Link towars the permis <auto|moto> choices sections
    [].forEach.call(document.querySelectorAll('[class^=type-]'),
            function (elt, i, arr) {
                elt.onclick = function (e) {
                    if (elt.className[5] === 'a')
                    {
                        pa_reset_section(null);
                        pa_section.style.display = "block";
                        pm_section.style.display = "none";
                    }
                    else {
                        pm_reset_section(null);
                        pa_section.style.display = "none";
                        pm_section.style.display = "block";
                    }
                }
            }
            );

    // =--------[ PERMIS MOTO
    // Link towards the details section
    [].forEach.call(pm_choices_wrapper_links,
            function (l_elt, l_i, l_arr) {
                l_elt.onclick = function (e) {
                    // Hide
                    pm_choices_wrapper.style.display = "none";
                    // Change title
                    [].forEach.call(pm_titles,
                            function (t_elt, t_i, t_arr) {
                                t_elt.style.display = (hasClass(t_elt, l_elt.className)) ? "block" : "none";
                            }
                            );
                    /* Show details */
                    pm_details_wrapper.style.display = "inline-block";
                    [].forEach.call(pm_details,
                            function (d_elt, d_i, d_arr) {
                                d_elt.style.display = (hasClass(d_elt, l_elt.className)) ? "block" : "none";
                            }
                            );
                    pm_choice_moto_btn.style.display = "block";
                    pm_restart_btn.style.display = "inline-block";
                };
            }
    );
    // Restart button "autre permis 2-roues"
    pm_restart_btn.onclick = pm_reset_section;
    // Link towars the permis moto section
    pm_choice_moto_btn.onclick = function (e) {
        // Hide
        pm_choice_2wheels.style.display = "none";
        [].forEach.call(pm_titles, function (elt, i, arr) {
            elt.style.display = "none";
        });
        // Change title
        pm_titles[1].style.display = "block";
        /* Show choices moto */
        pm_choice_moto.style.display = "block";
        pm_restart_btn.style.display = "inline-block";
    };

    // =--------[ PERMIS AUTO
    // Link towards the details section
    [].forEach.call(pa_choices_wrapper_links,
            function (l_elt, l_i, l_arr) {
                l_elt.onclick = function (e) {
                    // Hide
                    pa_choices_wrapper.style.display = "none";
                    // Change title
                    [].forEach.call(pa_titles,
                            function (t_elt, t_i, t_arr) {
                                t_elt.style.display = (hasClass(t_elt, l_elt.className)) ? "block" : "none";
                            }
                            );
                    /* Show details */
                    pa_details_wrapper.style.display = "inline-block";
                    [].forEach.call(pa_details,
                            function (d_elt, d_i, d_arr) {
                                d_elt.style.display = (hasClass(d_elt, l_elt.className)) ? "block" : "none";
                            }
                            );
                    pa_restart_btn.style.display = "inline-block";
                };
            }
    );
    // Restart button "autre permis 2-roues"
    pa_restart_btn.onclick = pa_reset_section;
}); // windows.onload
