<?xml version='1.0'?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxml="urn:schemas-microsoft-com:xslt" xmlns:gx="urn:shemas-artech-com:gx" exclude-result-prefixes="msxml gx" xmlns:gxca="urn:GXControlAdap">

	<xsl:output method="html"/>

	<xsl:template match="/">
		<xsl:apply-templates select="/GxControl"/>
	</xsl:template>

	<xsl:template match="GxControl">

		<xsl:choose>

			<xsl:when test="@type = 'SimpleBoton'">
				<xsl:call-template name="RenderSimpleBoton"/>
			</xsl:when>
		</xsl:choose>
	</xsl:template>

	<!-- SimpleBoton design render -->
	<!-- ///////////////////  Implement your render here  ///////////////////-->

	<xsl:template name="RenderSimpleBoton">
		<div atomicselection="true">

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

			<table cellSpacing="0" cellPadding="0">

				<xsl:call-template name="MiEstilo"/>
				<tbody>
					<tr>
						<td containerId="ContainerGx"></td>
					</tr>
				</tbody>
			</table>
		</div>

	</xsl:template>

	<!-- Helpers Templates -->

	<xsl:template name="AddStyleAttribute">

		<xsl:variable name="Style">
			<xsl:text>width: 45; height: 45;</xsl:text>
			<xsl:text>border-style: solid;	border-width: 0px;</xsl:text>
		</xsl:variable>

		<xsl:attribute name="style">
			<xsl:value-of select="$Style"/>
		</xsl:attribute>
	</xsl:template>

	<xsl:template name="MiEstilo">

		<xsl:variable name="Style">
			<xsl:text>width: </xsl:text>
			<xsl:text>100</xsl:text>
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
