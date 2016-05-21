function SimpleScrollBar($) {
    this.ControlHtmlId;

    // Databinding for property ControlHtmlId
    this.SetControlHtmlId = function(data) {
        ///UserCodeRegionStart:[SetMenu] (do not remove this comment.)
        this.ControlHtmlId = data;
        ///UserCodeRegionEnd: (do not remove this comment.)
    }

    // Databinding for property ControlHtmlId
    this.GetControlHtmlId = function() {
        ///UserCodeRegionStart:[GetMenu] (do not remove this comment.)
        return this.ControlHtmlId;
        ///UserCodeRegionEnd: (do not remove this comment.)
    }


    this.show = function() {
            ///UserCodeRegionStart:[show] (do not remove this comment.)

            var id = '#' + this.ControlHtmlId;

            if (!this.IsPostBack) {
                gx.evt.on_ready(window, function() {
                    $(id).perfectScrollbar();
                });
            } else {
                gx.evt.on_ready(window, function() {
                    $(id).perfectScrollbar('update');

                });
            }


            ///UserCodeRegionEnd: (do not remove this comment.)
        }
        ///UserCodeRegionStart:[User Functions] (do not remove this comment.)

    ///UserCodeRegionEnd: (do not remove this comment.):
}
