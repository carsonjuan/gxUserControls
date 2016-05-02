set rutaGx="C:\Program Files (x86)\Artech\GeneXus\GeneXusXEv3\Genexus.exe"

set nombreUC=SimpleMenu
set rutaGxUC="C:\Program Files (x86)\Artech\GeneXus\GeneXusXEv3\UserControls"
set rutaUCFuente="D:\projectos\gxUserControls"

xcopy /s /y %rutaUCFuente%\%nombreUC% %rutaGxUC%\%nombreUC%

%rutaGx% /install

timeout 3

%rutaGx%

pause