function SimpleBoton($)
{
	this.CssClassBoton;
	this.CssClassBotonSeleccionado;
	this.CssClassBurbuja;
	this.CssClassIcono;
	this.CantidadBurbuja;
	this.ToolTip;

	this.Id;
	
	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)

		this.Id = this.ContainerName + '_SimpleBoton'

		if (!this.IsPostBack)
		{
			this.crearControl();
			this.dibujarBurbuja();
		}	
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	
	this.crearControl = function()
	{
		var dropdown_container = this.ContainerName + '_DropdownContainer';
		var boton_buffer = new gx.text.stringBuffer();
		boton_buffer.clear();
		
		boton_buffer.append('<div class="btn-group">');
		boton_buffer.append('<button id="' + this.Id + '" type="button" class="' + this.CssClassBoton + '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">');
		
		boton_buffer.append('<span class="' + this.CssClassIcono + '"></span>');
		boton_buffer.append('</button>');
		boton_buffer.append('<ul class="dropdown-menu pull-right NssClassBotonMenuOpciones" role="menu" > <li>');
		boton_buffer.append('<div id="' + dropdown_container + '"></div>');
		boton_buffer.append('</li> </ul>');
		
		boton_buffer.append('</div>');
		
		
		this.setHtml(boton_buffer.toString());
		
		var childContainer = this.getChildContainer("ContainerGx");
		gx.fn.setVisible(childContainer,1);
		gx.dom.el(dropdown_container).appendChild(childContainer);
		
		document.getElementById(this.Id).onclick = this.Click;
	}
	
	this.dibujarBurbuja = function()
	{
		var id_burbuja = this.ContainerName + '_Burbuja';
		var boton_burbuja = new gx.text.stringBuffer();
		if(this.CantidadBurbuja && this.CantidadBurbuja > 0)
			boton_burbuja.append('<span id="' + id_burbuja + '" class="' + this.CssClassBurbuja + '">' + this.CantidadBurbuja + '</span>');
		
		$("#" + id_burbuja).remove();
		$("#" + this.Id).append(boton_burbuja.toString());
	}

	this.SetCantidadEnBurbuja = function(cantidad)
	{
		this.CantidadEnBurbuja = cantidad;
		this.dibujarBurbuja();
	}
	
	///UserCodeRegionEnd: (do not remove this comment.):
}
