function BotonHtml5($)
{
	this.HtmlTag;
	this.HtmlTagCssClass;
	this.HtmlTagContenido;
	this.HtmlTagPosicion;
	this.Width;
	this.Height;
	this.Contenido;
	this.CssClass;

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)

		var mi_id = this.ContainerName + '_Html5Button'

		var boton_buffer = new gx.text.stringBuffer();
		boton_buffer.clear();

		var htmltag_buffer = new gx.text.stringBuffer();
		htmltag_buffer.clear();

		boton_buffer.append('<button id="' + mi_id + '" type="button" class="' + this.CssClass + '">');

		if(this.HtmlTag != 'ninguno') {
			htmltag_buffer.append('<' + this.HtmlTag + ' class="' + this.HtmlTagCssClass + '">');
			htmltag_buffer.append(this.HtmlTagContenidos);
			htmltag_buffer.append('</'+ this.HtmlTag + '>');

			if(this.HtmlTagPosicion == 'izquierda')
				boton_buffer.append(htmltag_buffer.toString());

			if(this.Contenido) {
				if(this.HtmlTagPosicion == 'izquierda')
					boton_buffer.append(' ');

				boton_buffer.append(this.Contenido);

				if(this.HtmlTagPosicion == 'derecha')
					boton_buffer.append(' ');
			}
			
			if(this.HtmlTagPosicion == 'derecha')
					boton_buffer.append(htmltag_buffer.toString());

		} else {
			boton_buffer.append(this.Contenido);
		}

		boton_buffer.append('</button>');

		this.setHtml(boton_buffer.toString());

		document.getElementById(mi_id).onclick = this.Click;
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	///UserCodeRegionEnd: (do not remove this comment.):
}
