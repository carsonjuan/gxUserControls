function SimpleMenu($)
{
	this.Id;
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
			
			this.Id = this.ControlName + '_SimpleMenu'
			// abro
			buffer.append('<nav class="SimpleMenuSidebarNav">');
			buffer.append('	<ul class="metismenu" id="' + this.Id + '">');


			// menu
			var htmlMenu = this.generarMenu(this.Menu);
			buffer.append(htmlMenu);

			// cierro
			buffer.append('	</ul>');
			buffer.append('</nav>');
			this.setHtml(buffer.toString());
			
			$("#"+ this.Id).metisMenu();
			
		}

		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)

	this.menuBuffer = new gx.text.stringBuffer();
	this.menuBuffer.clear();

	this.generarMenu = function(data){
		var i = 0;
		for (i = 0; data[i] != undefined; i++) {
			if (data[i].Items != undefined && data[i].Items.toString() != "") {
				this.menuBuffer.append('		<li class="">');
				this.menuBuffer.append('			<a href="' + ((data[i].Link) ? data[i].Link : '#') + '" aria-expanded="false">');
				if(data[i].Icono) {
					this.menuBuffer.append('				<span class="SimpleMenuItemIcono ' + data[i].Icono + '"></span>');
					this.menuBuffer.append('				<span class="SimpleMenuItem">' + ((data[i].Titulo) ? data[i].Titulo : '') + '</span>');
					this.menuBuffer.append('				<span class="glyphicon SimpleMenuExpandir"></span></a>');
				} else {
					this.menuBuffer.append(((data[i].Titulo) ? data[i].Titulo : ''));
					this.menuBuffer.append('<span class="glyphicon SimpleMenuExpandir"></span></a>');
				}
				this.menuBuffer.append('			<ul aria-expanded="false" class="collapse">');
				this.generarMenu(data[i].Items);
				this.menuBuffer.append('			</ul>');
				this.menuBuffer.append('		</li>');
			} else {
				this.menuBuffer.append('		<li>');
				this.menuBuffer.append('			<a href="' + ((data[i].Link) ? data[i].Link : '#') + '" aria-expanded="false" onclick="' + this.me() + '.SimpleMenuOnClick(\'' + data[i].Id + '\');">');
				if(data[i].Icono) {
					this.menuBuffer.append('				<span class="SimpleMenuItemIcono ' + data[i].Icono + '"></span>');
					this.menuBuffer.append('				<span class="SimpleMenuItem">' + ((data[i].Titulo) ? data[i].Titulo : '') + '</span></a>');
				} else {
					this.menuBuffer.append(((data[i].Titulo) ? data[i].Titulo : '') + '</a>');
				}
				this.menuBuffer.append('		</li>');
			}
		}
		return this.menuBuffer;
	}
	
	this.SimpleMenuOnClick = function(id) {
		if (typeof(this.OnClick) == 'function') {
			//this.SelectedItem.Id = id;
			
			this.OnClick();
		}
	}

	///UserCodeRegionEnd: (do not remove this comment.):
}
