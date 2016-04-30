<?xml version='1.0'?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxml="urn:schemas-microsoft-com:xslt"
	xmlns:gx="urn:shemas-artech-com:gx"
	exclude-result-prefixes="msxml gx"
	xmlns:gxca="urn:GXControlAdap">
  <xsl:output method="html"/>
  <xsl:template match="/" >
    <xsl:apply-templates select="/GxControl"/>
  </xsl:template>
  <xsl:template match="GxControl">
    <xsl:choose>
      <xsl:when test="@type = 'SimpleBoton'">
        <xsl:call-template name="RenderSimpleBoton"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <!-- BotonHtml5 design render -->
  <!-- ///////////////////  Implement your render here  ///////////////////-->
  <xsl:template name="RenderSimpleBoton">
     <table cellSpacing="0" cellPadding="0" background="">
      <xsl:call-template name="AddTableStyleAttribute"/>
      <tbody>
              <tr>
          <td>
            <span>
              <xsl:call-template name="AddStyleAttribute"/>
			  <img>
				<xsl:attribute name="src">
				<xsl:value-of select="gxca:GetMyPath()"/>
				<xsl:text>\simpleboton_render.png</xsl:text>
				</xsl:attribute>
				<xsl:call-template name="AddStyleAttribute"/>
			  </img>
            </span>
          </td>
        </tr>
        <tr>
        <td containerId="ContainerGx">
		
        </td>
        </tr>
      </tbody>
    </table>

  </xsl:template>


  <!-- Helpers Templates -->

  <xsl:template name="AddStyleAttribute" >
    <xsl:variable name="Style">
      <xsl:text>width: </xsl:text>
      <xsl:text>45</xsl:text>
      <xsl:text>; </xsl:text>
      <xsl:text>height: </xsl:text>
      <xsl:text>45</xsl:text>
      <xsl:text>; </xsl:text>
      <xsl:text>border-style: solid;	border-width: 0px;</xsl:text>
    </xsl:variable>
    <xsl:attribute name="style">
      <xsl:value-of select="$Style"/>
    </xsl:attribute>
  </xsl:template>
  <xsl:template name="AddTableStyleAttribute" >
    <xsl:variable name="Style">
      <xsl:text>width: </xsl:text>
      <xsl:text>45</xsl:text>
      <xsl:text>; </xsl:text>
      <xsl:text>height: </xsl:text>
      <xsl:text>100</xsl:text>
      <xsl:text>; </xsl:text>
      <xsl:text>border-style: solid;	border-width: 1px;</xsl:text>
    </xsl:variable>
    <xsl:attribute name="style">
      <xsl:value-of select="$Style"/>
    </xsl:attribute>
  </xsl:template>
</xsl:stylesheet>
