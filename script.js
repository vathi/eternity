
$(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    const realm = params.get("realm") === "hell" ? "hell" : "heaven";

    const divisions = {
        heaven: {
            division: "DIVISION 001",
            heading: "Join the<br><em>divine.</em>",
            description: "A peaceful eternity awaits. Become part of the celestial workforce and let your kindness shine forever.",
            title: "Celestial Application",
            testimony: "YOUR GREATEST ACT OF KINDNESS",
            motivation: "WHY DO YOU DESERVE A PLACE IN HEAVEN?",
            image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=850&q=85",
            positions: [
                "Guardian Angel",
                "Keeper of the Stars",
                "Cloud Architect",
                "Celestial Ambassador",
                "Heavenly Musician"
            ],
            success: "Your application to Heaven has been received. The celestial department will consider your soul when your earthly journey naturally ends."
        },
        hell: {
            division: "DIVISION 666",
            heading: "Embrace the<br><em>inferno.</em>",
            description: "Not everyone is made for the clouds. Join the underworld's most ambitious workforce and make eternity unforgettable.",
            title: "Infernal Application",
            testimony: "CONFESS YOUR MOST NOTORIOUS SIN",
            motivation: "WHY DOES YOUR SOUL BELONG IN HELL?",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=850&q=85",
            positions: [
                "Flame Curator",
                "Chaos Coordinator",
                "Underworld Concierge",
                "Infernal Strategist",
                "Demon Relations Manager"
            ],
            success: "Your application to Hell has been received. The infernal department will consider your soul when your earthly journey naturally ends."
        }
    };

    const selected = divisions[realm];

    if ($("#applicationForm").length) {
        $("body").addClass("realm-" + realm);

        $("#divisionLabel").text(selected.division);
        $("#formHeading").html(selected.heading);
        $("#formDescription").text(selected.description);
        $("#applicationTitle").text(selected.title);
        $("#testimonyLabel").text(selected.testimony);
        $("#motivationLabel").text(selected.motivation);
        $("#formImage").attr("src", selected.image);

        document.title = selected.title + " — Eternity";

        selected.positions.forEach(function (position) {
            $("#role").append(
                $("<option></option>")
                    .val(position)
                    .text(position)
            );
        });

        $("#applicationForm").on("submit", function (event) {
            event.preventDefault();

            if (!this.checkValidity()) {
                this.reportValidity();
                return;
            }

            window.location.href = "success.html?realm=" + realm;
        });
    }

    if ($(".success-page").length) {
        $("body").addClass("realm-" + realm);
        $("#successDescription").text(selected.success);
    }

    $(".realm-card").on("mouseenter", function () {
        $(this).find(".realm-action span").css({
            transform: "translate(4px, -4px)",
            transition: "transform 0.3s ease"
        });
    });

    $(".realm-card").on("mouseleave", function () {
        $(this).find(".realm-action span").css({
            transform: "translate(0, 0)"
        });
    });
});