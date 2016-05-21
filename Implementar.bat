echo off

set rutaGx="C:\Program Files (x86)\Artech\GeneXus\GeneXusXEv3\Genexus.exe"

set nombresUC=SimpleHamburguesa SimpleBoton SimpleMenu SimpleScrollBar
set rutaGxUC="C:\Program Files (x86)\Artech\GeneXus\GeneXusXEv3\UserControls"
set rutaUCFuente="D:\projectos\gxUserControls"

for %%a in (%nombresUC%) do (
   echo xcopy /s /y %rutaUCFuente%\%nombreUC% %rutaGxUC%\%%a
)

echo Instalando
%rutaGx% /install

echo Abriendo Genxus
%rutaGx%
