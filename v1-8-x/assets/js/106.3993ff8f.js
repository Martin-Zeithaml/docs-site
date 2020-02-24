(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{329:function(e,t,s){"use strict";s.r(t);var a=s(3),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"installing-the-zowe-started-task-zwesvstc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-zowe-started-task-zwesvstc"}},[e._v("#")]),e._v(" Installing the Zowe started task (ZWESVSTC)")]),e._v(" "),s("p",[e._v("Zowe has a number of runtimes on z/OS: the z/OS Service microservice server, the Zowe Application Server, and the Zowe API Mediation Layer microservices. A single PROCLIB "),s("code",[e._v("ZWESVSTC")]),e._v(" is used to start all of these microservices.  This member is installed by Zowe into the data set SAMPLIB "),s("code",[e._v("SZWESAMP")]),e._v(" during the installation or either a convenience build or SMP/E.  This topic describes how to configure the z/OS runtime in order to launch the Zowe started task.")]),e._v(" "),s("h2",{attrs:{id:"step-1-copy-the-proclib-member-zwesvstc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-copy-the-proclib-member-zwesvstc"}},[e._v("#")]),e._v(" Step 1: Copy the PROCLIB member ZWESVSTC")]),e._v(" "),s("p",[e._v("When the Zowe runtime is launched, it is run under a z/OS started task (STC) with the PROCLIB member named "),s("code",[e._v("ZWESVSTC")]),e._v(". A sample PROCLIB is created during installation into the PDS SZWESAMP. To launch Zowe as a started task, you must copy the member "),s("code",[e._v("ZWESVSTC")]),e._v(" to a PDS that is in the proclib concatenation path.")]),e._v(" "),s("p",[e._v("If your site has your own technique for PROCLIB creation, you may follow this and copy the "),s("code",[e._v("ZWESVSTC")]),e._v(" as-is.  If you want to create a pipeline or automate the PROCLIB copying, you can use a convenience script "),s("code",[e._v("zowe-install-proc.sh")]),e._v(" that is provided in the "),s("code",[e._v("<ROOT_DIR>/scripts/utils")]),e._v(" folder.")]),e._v(" "),s("p",[e._v("The script "),s("code",[e._v("zowe-install-proc.sh")]),e._v(" has two arguments:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("First Parameter")]),e._v("=Source PDS Prefix")]),e._v(" "),s("p",[e._v("Dataset prefix of the source PDS where "),s("code",[e._v(".SZWESAMP(ZWESVSTC)")]),e._v(" was installed into.")]),e._v(" "),s("p",[e._v("For an installation from a convenience build, this will be the value of the "),s("code",[e._v("-h")]),e._v(" argument when "),s("code",[e._v("zowe-install.sh")]),e._v(" was executed.")]),e._v(" "),s("p",[e._v("For an SMP/E installation, this will be the value of "),s("code",[e._v("$datasetPrefixIn")]),e._v(" in the member "),s("code",[e._v("AZWE001.F1(ZWE3ALOC)")]),e._v(".")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Second Parameter")]),e._v("=Target PROCLIB PDS")]),e._v(" "),s("p",[e._v("Target PROCLIB PDS where ZWESVSTC will be placed. If parameter is omitted, the script scans the JES PROCLIB concatenation path and uses the first data set where the user has write access")]),e._v(" "),s("p",[s("strong",[e._v("Example")])]),e._v(" "),s("p",[e._v("Executing the command "),s("code",[e._v("zowe-install-proc.sh MYUSERID.ZWE USER.PROCLIB")]),e._v(" copies the PDS member "),s("code",[e._v("MYUSERID.ZWE.SZWESAMP(ZWESVSTC)")]),e._v(" to "),s("code",[e._v("USER.PROCLIB(ZSWESAMP)")])])])]),e._v(" "),s("h2",{attrs:{id:"step-2-configure-zwesvstc-to-run-under-the-correct-user-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-configure-zwesvstc-to-run-under-the-correct-user-id"}},[e._v("#")]),e._v(" Step 2: Configure ZWESVSTC to run under the correct user ID")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("ZWESVSTC")]),e._v(" must be configured as a started task (STC) under the ZWESVUSR user ID with the administrator user ID of ZWEADMIN.  The commands to create the user ID and group is supplied in the PDS member "),s("code",[e._v("ZWESECUR")]),e._v(", see "),s("router-link",{attrs:{to:"/user-guide/configure-zos-system.html"}},[e._v("Configuring the z/OS system for Zowe")]),e._v(".  To associate the "),s("code",[e._v("ZWESVSTC")]),e._v(" started task with the user ID and group see "),s("router-link",{attrs:{to:"/user-guide/configure-zos-system.html"}},[e._v("Configuring a z/OS system for Zowe")]),e._v(".  This step will be done once per z/OS environment by a system programmer who has sufficient security privileges.")],1),e._v(" "),s("h2",{attrs:{id:"step-3-launch-the-zwesvstc-started-task"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-launch-the-zwesvstc-started-task"}},[e._v("#")]),e._v(" Step 3: Launch the ZWESVSTC started task")]),e._v(" "),s("p",[e._v("You can launch the Zowe started task in two ways.")]),e._v(" "),s("h3",{attrs:{id:"option-1-starting-zowe-from-a-uss-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#option-1-starting-zowe-from-a-uss-shell"}},[e._v("#")]),e._v(" Option 1: Starting Zowe from a USS shell")]),e._v(" "),s("p",[e._v("To launch the "),s("code",[e._v("ZWESVSTC")]),e._v(" started task, run the "),s("code",[e._v("zowe-start.sh")]),e._v(" script from a USS shell.  This reads the configuration values from the "),s("code",[e._v("zowe-instance.env")]),e._v(" file in the Zowe instance directory.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd <ZOWE_INSTANCE_DIR>/bin\n./zowe-start.sh\n")])])]),s("p",[e._v("where,")]),e._v(" "),s("p",[s("em",[e._v("<ZOWE_INSTANCE_DIR>")]),e._v(" is the directory where you set the instance directory to. This script starts "),s("code",[e._v("ZWESVSTC")]),e._v(" for you so you do not have to log on to TSO and use SDSF.")]),e._v(" "),s("h3",{attrs:{id:"option-2-starting-zowe-with-a-s-tso-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#option-2-starting-zowe-with-a-s-tso-command"}},[e._v("#")]),e._v(" Option 2: Starting Zowe with a "),s("code",[e._v("/S")]),e._v(" TSO command")]),e._v(" "),s("p",[e._v("You can use SDSF to start Zowe.")]),e._v(" "),s("p",[e._v("If you issue the SDSF command "),s("code",[e._v("/S ZWESVSTC")]),e._v(", it will fail because the script needs to know the instance directory containing the configuration details.")]),e._v(" "),s("p",[e._v("If you have a default instance directory you want you always start Zowe with, you can tailor the JCL member "),s("code",[e._v("ZWESVSTC")]),e._v(" at this line")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("//ZWESVSTC   PROC INSTANCE='{{instance_directory}}'\n")])])]),s("p",[e._v("to replace the "),s("code",[e._v("instance_directory")]),e._v(" with the location of the Zowe instanceDir that contains the configurable Zowe instance directory.")]),e._v(" "),s("p",[e._v("If the JCL value "),s("code",[e._v("instance-directory")]),e._v(" is not specified in the JCL, in order to start the Zowe server from SDSF, you will need to add the "),s("code",[e._v("INSTANCE")]),e._v(" parameter on the START command when you start Zowe in SDSF:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/S ZWESVSTC,INSTANCE='$ZOWE_INSTANCE_DIR',JOBNAME='ZWEXSV'\n")])])]),s("p",[e._v("The "),s("code",[e._v("JOBNAME='ZWEXSV'")]),e._v(" is optional and the started task will operate correctly without it, however having it specified ensures that the address spaces will be prefixed with "),s("code",[e._v("ZWEXSV")]),e._v(" which makes them easier to find in SDSF or locate in RMF records.")]),e._v(" "),s("h2",{attrs:{id:"stopping-the-zwesvstc-proc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stopping-the-zwesvstc-proc"}},[e._v("#")]),e._v(" Stopping the ZWESVSTC PROC")]),e._v(" "),s("p",[e._v("To stop the Zowe server, the ZWESVSTC PROC needs to be ended. Run the "),s("code",[e._v("zowe-stop.sh")]),e._v(" script at the Unix Systems Services command prompt that is in the zowe instance directory used to start the Zowe started task:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd $ZOWE_INSTANCE_DIR/bin\n./zowe-stop.sh\n")])])]),s("p",[e._v("where "),s("em",[e._v("<ZOWE_INSTANCE_DIR>")]),e._v(" is the directory where you set the instance directory to.")]),e._v(" "),s("p",[e._v("When you stop ZWESVSTC, you might get the following error message:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IEE842I ZWESVSTC DUPLICATE NAME FOUND- REENTER COMMAND WITH 'A='\n")])])]),s("p",[e._v("This error results when there is more than one started task named ZWESVSTC. To resolve the issue, stop the required ZWESVSTC instance by issuing the following commands:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/C ${ZOWE_PREFIX}${ZOWE_INSTANCE}SV,A=asid\n")])])]),s("p",[e._v("Where "),s("em",[e._v("ZOWE_PREFIX")]),e._v(" and "),s("em",[e._v("ZOWE_INSTANCE")]),e._v(" are specified in your configuration (and default to ZWE and 1) and you can obtain the "),s("em",[e._v("asid")]),e._v(" from the value of "),s("code",[e._v("A=asid")]),e._v(" when you issue the following commands:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/D A,${ZOWE_PREFIX}${ZOWE_INSTANCE}SV\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);