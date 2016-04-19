function MenuMagico($)
{
	this.Width;
	this.Height;
	this.Titulo;
	this.Menu;

	// Databinding for property Menu
	this.SetMenu = function(data)
	{
		///UserCodeRegionStart:[SetMenu] (do not remove this comment.)
		this.Menu = data;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property Menu
	this.GetMenu = function()
	{
		///UserCodeRegionStart:[GetMenu] (do not remove this comment.)
		return this.Menu;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)
		if (!this.IsPostBack)
		{
			var buffer = new gx.text.stringBuffer();
			buffer.clear();

			// abro
			buffer.append('<div id="' + this.ControlName + '" class="MenuMagico">');
			buffer.append('	<ul class="sidebar-menu">');

			// titulo
			if(this.Title)
				buffer.append('		<li class="header">' + this.Title + '</li>');

			// menu
			var htmlMenu = this.generarMenu(this.Menu);
			buffer.append(htmlMenu);

			// cierro
			buffer.append('	</ul>');
			buffer.append('</div>');
			this.setHtml(buffer.toString());

			$.CarsonMobi.menu.crear('.MenuMagico');
		}

		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)

	this.Expandir = function() {
		$.CarsonMobi.menu.expandir();
	}
	this.Contraer = function() {
		$.CarsonMobi.menu.contraer();
	}

	this.menuBuffer = new gx.text.stringBuffer();
	this.menuBuffer.clear();

	this.generarMenu = function(data){
		var i = 0;
    for (i = 0; data[i] != undefined; i++) {
        if (data[i].Items != undefined && data[i].Items.toString() != "") {
            this.menuBuffer.append('		<li class="treeview">');
						this.menuBuffer.append('			<a href="#"><i class="' + data[i].Icono + '"></i> <span>'+ data[i].Titulo + '</span> <i class="fa fa-angle-left pull-right"></i></a>');
						this.menuBuffer.append('			<ul class="treeview-menu">');
            this.generarMenu(data[i].Items);
            this.menuBuffer.append('			</ul>');
            this.menuBuffer.append('		</li>');
        } else {
            this.menuBuffer.append('		<li>');
						this.menuBuffer.append('			<a href="' + ((data[i].Link) ? data[i].Link : '#') + '" ><i class="' + data[i].Icono + '"></i> <span>' + data[i].Titulo + '</span></a>');
            this.menuBuffer.append('		</li>');
        }
    }
    return this.menuBuffer;
	}

	///UserCodeRegionEnd: (do not remove this comment.):
}
