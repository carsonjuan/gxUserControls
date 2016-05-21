function SimpleHamburguesa($) {
    this.Animacion;
    this.Color;
    this.FondoCircular;

    this.show = function() {
            ///UserCodeRegionStart:[show] (do not remove this comment.)

            if (!this.IsPostBack) {
                var mi_id = this.ContainerName + '_hamburguesa'

                var boton_buffer = new gx.text.stringBuffer();
                boton_buffer.clear();


                boton_buffer.append('<button id="' + mi_id + '" type="button"  class="hamburger');

                if (this.FondoCircular == 's')
                    boton_buffer.append(' fondo-circular');

                boton_buffer.append(' ' + this.Animacion + '">');

                boton_buffer.append('<span class="hamburger-box"><span class="hamburger-inner"></span></span></button>');


                this.setHtml(boton_buffer.toString());

                document.getElementById(mi_id).onclick = this.Click;

                document.getElementById(mi_id).addEventListener("click", function() {
                    this.classList.toggle("is-active");
                }, false);

                jQuery('head').append('<style>.hamburger-inner, .hamburger-inner:before, .hamburger-inner:after{background-color: #' + this.Color.Hexa + ';}</style>');
            }
            ///UserCodeRegionEnd: (do not remove this comment.)
        }
        ///UserCodeRegionStart:[User Functions] (do not remove this comment.)


    ///UserCodeRegionEnd: (do not remove this comment.):
}