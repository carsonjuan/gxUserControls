function BotonHtml5($)
{
	this.HtmlTag;
	this.HtmlTagCssClass;
	this.HtmlTagContenido;
	this.HtmlTagPosicion;
	this.HtmlTag2;
	this.HtmlTag2CssClass;
	this.HtmlTag2Contenido;
	this.HtmlTag2Posicion;
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
		
		var htmltag2_buffer = new gx.text.stringBuffer();
		htmltag2_buffer.clear();

		boton_buffer.append('<button id="' + mi_id + '" type="button" class="' + this.CssClass + '">');

		if(this.HtmlTag != 'ninguno') {
			htmltag_buffer.append('<' + this.HtmlTag + ' class="' + this.HtmlTagCssClass + '">');
			htmltag_buffer.append(this.HtmlTagContenido);
			htmltag_buffer.append('</'+ this.HtmlTag + '>');
		}
		
		if(this.HtmlTag2 != 'ninguno') {
			htmltag2_buffer.append('<' + this.HtmlTag2 + ' class="' + this.HtmlTag2CssClass + '">');
			htmltag2_buffer.append(this.HtmlTag2Contenido);
			htmltag2_buffer.append('</'+ this.HtmlTag2 + '>');
		}
		
		if(this.HtmlTag != 'ninguno' && this.HtmlTagPosicion == 'izquierda')
			boton_buffer.append(htmltag_buffer.toString());

		if(this.HtmlTag2 != 'ninguno' && this.HtmlTag2Posicion == 'izquierda')
			boton_buffer.append(htmltag2_buffer.toString());
		
		if(this.HtmlTagPosicion == 'izquierda')
			boton_buffer.append(' ');
					
		if(this.Contenido) {
			if((this.HtmlTag != 'ninguno' && this.HtmlTagPosicion == 'izquierda') || (this.HtmlTag2 != 'ninguno' && this.HtmlTag2Posicion == 'izquierda'))
				boton_buffer.append(' ');
				
			boton_buffer.append(this.Contenido);
			
			if((this.HtmlTag != 'ninguno' && this.HtmlTagPosicion == 'derecha') || (this.HtmlTag2 != 'ninguno' && this.HtmlTag2Posicion == 'derecha'))
				boton_buffer.append(' ');
		}
			
		if(this.HtmlTag != 'ninguno' && this.HtmlTagPosicion == 'derecha')
			boton_buffer.append(htmltag_buffer.toString());

		if(this.HtmlTag2 != 'ninguno' && this.HtmlTag2Posicion == 'derecha')
			boton_buffer.append(htmltag2_buffer.toString());

		boton_buffer.append('</button>');

		this.setHtml(boton_buffer.toString());

		document.getElementById(mi_id).onclick = this.Click;
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	///UserCodeRegionEnd: (do not remove this comment.):
}
