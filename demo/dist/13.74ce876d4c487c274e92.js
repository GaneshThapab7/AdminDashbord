(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{mQXO:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),e=function(){},t=u("XCoW"),b=u("Z4Ub"),o=function(){function l(){}return l.prototype.ngAfterViewInit=function(){Prism.highlightAll()},l}(),i=a.Ja({encapsulation:2,styles:[],data:{}});function r(l){return a.cb(0,[(l()(),a.La(0,0,null,null,16,"mk-box",[["header","Configuring Layout"]],null,null,null,t.b,t.a)),a.Ka(1,4374528,null,4,b.a,[a.h,a.x,a.B],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),a.Za(335544320,1,{boxHeaderDirective:0}),a.Za(335544320,2,{boxFooterDirective:0}),a.Za(335544320,3,{boxContentDirective:0}),a.Za(335544320,4,{boxToolsDirective:0}),(l()(),a.La(6,0,null,3,1,"p",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["If can use the layout components or just use the presentation components of angular-admin-lte."])),(l()(),a.La(8,0,null,3,1,"p",[],null,null,null,null,null)),(l()(),a.bb(-1,null,[" If you chose to use the layout you will need to:"])),(l()(),a.La(10,0,null,3,6,"ol",[],null,null,null,null,null)),(l()(),a.La(11,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Create a layout configuration file."])),(l()(),a.La(13,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Import the layout module and provide the layout configuration in your main app module."])),(l()(),a.La(15,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Update the main app view."])),(l()(),a.La(17,0,null,null,8,"mk-box",[["header","Configuration File"]],null,null,null,t.b,t.a)),a.Ka(18,4374528,null,4,b.a,[a.h,a.x,a.B],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),a.Za(335544320,5,{boxHeaderDirective:0}),a.Za(335544320,6,{boxFooterDirective:0}),a.Za(335544320,7,{boxContentDirective:0}),a.Za(335544320,8,{boxToolsDirective:0}),(l()(),a.La(23,0,null,3,2,"pre",[],null,null,null,null,null)),(l()(),a.La(24,0,null,null,1,"code",[["class","language-typescript"],["ngNonBindable",""]],null,null,null,null,null)),(l()(),a.bb(-1,null,["export var adminLteConf = {\n  skin: 'blue',\n  ...\n  sidebarLeftMenu: [\n    {label: 'Start', route: '/', iconClasses: 'fa fa-th'},\n    ...\n  ]\n};\n"])),(l()(),a.La(26,0,null,null,8,"mk-box",[["header","Import Conf And Module"]],null,null,null,t.b,t.a)),a.Ka(27,4374528,null,4,b.a,[a.h,a.x,a.B],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),a.Za(335544320,9,{boxHeaderDirective:0}),a.Za(335544320,10,{boxFooterDirective:0}),a.Za(335544320,11,{boxContentDirective:0}),a.Za(335544320,12,{boxToolsDirective:0}),(l()(),a.La(32,0,null,3,2,"pre",[],null,null,null,null,null)),(l()(),a.La(33,0,null,null,1,"code",[["class","language-typescript"]],null,null,null,null,null)),(l()(),a.bb(-1,null,["import { adminLteConf } from './admin-lte.conf';   //Import the layout configuration.\nimport { LayoutModule } from 'angular-admin-lte';   //Import the layout module.\n\n@NgModule({\n  imports: [\n    ...\n    LayoutModule.forRoot(adminLteConf),   //Provide the configuration to the layout module.\n  ],\n  ...\n})\nexport class AppModule {}\n"])),(l()(),a.La(35,0,null,null,8,"mk-box",[["header","App view HTML"]],null,null,null,t.b,t.a)),a.Ka(36,4374528,null,4,b.a,[a.h,a.x,a.B],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),a.Za(335544320,13,{boxHeaderDirective:0}),a.Za(335544320,14,{boxFooterDirective:0}),a.Za(335544320,15,{boxContentDirective:0}),a.Za(335544320,16,{boxToolsDirective:0}),(l()(),a.La(41,0,null,3,2,"pre",[],null,null,null,null,null)),(l()(),a.La(42,0,null,null,1,"code",[["class","language-html"]],null,null,null,null,null)),(l()(),a.bb(-1,null,["<mk-layout-wrapper>\n  <mk-layout-sidebar-right>\n    Sidebar right HTML\n  </mk-layout-sidebar-right>\n  <mk-layout-header>\n    <mk-layout-header-logo>Logo HTML</mk-layout-header-logo>\n    <mk-layout-header-logo-mini>Logo Mini HTML</mk-layout-header-logo-mini>\n    Header HTML\n  </mk-layout-header>\n  <mk-layout-sidebar-left>\n    Sidebar left HTML (just above menu)\n  </mk-layout-sidebar-left>\n  <mk-layout-content>\n    <router-outlet></router-outlet>\n  </mk-layout-content>\n  <mk-layout-footer>\n    <mk-layout-footer-left>\n      Footer left HTML\n    </mk-layout-footer-left>\n    <mk-layout-footer-right>\n      Footer right HTML\n    </mk-layout-footer-right>\n  </mk-layout-footer>\n</mk-layout-wrapper>\n"])),(l()(),a.La(44,0,null,null,88,"mk-box",[["contentStyleClasses","table-responsive"],["header","Configuration properties"]],null,null,null,t.b,t.a)),a.Ka(45,4374528,null,4,b.a,[a.h,a.x,a.B],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),a.Za(335544320,17,{boxHeaderDirective:0}),a.Za(335544320,18,{boxFooterDirective:0}),a.Za(335544320,19,{boxContentDirective:0}),a.Za(335544320,20,{boxToolsDirective:0}),(l()(),a.La(50,0,null,3,82,"table",[["class","table table-bordered table-hover"]],null,null,null,null,null)),(l()(),a.La(51,0,null,null,81,"tbody",[],null,null,null,null,null)),(l()(),a.La(52,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),a.La(53,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Name"])),(l()(),a.La(55,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Type"])),(l()(),a.La(57,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Default"])),(l()(),a.La(59,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Description"])),(l()(),a.La(61,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),a.La(62,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["skin"])),(l()(),a.La(64,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["string ('blue' | 'black' | 'purple' | 'green' | 'red' | 'yellow' | 'blue-light' | 'black-light' | 'purple-light' | 'green-light' | 'red-light' | 'yellow-light')"])),(l()(),a.La(66,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["'blue'"])),(l()(),a.La(68,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Set the theme skin."])),(l()(),a.La(70,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),a.La(71,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["isSidebarLeftCollapsed"])),(l()(),a.La(73,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["boolean"])),(l()(),a.La(75,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["false"])),(l()(),a.La(77,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Defines if the sidebar left is collapsed."])),(l()(),a.La(79,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),a.La(80,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["isSidebarLeftExpandOnOver"])),(l()(),a.La(82,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["boolean"])),(l()(),a.La(84,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["false"])),(l()(),a.La(86,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Define if sidebar left expand on mouse over."])),(l()(),a.La(88,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),a.La(89,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["isSidebarLeftMini"])),(l()(),a.La(91,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["boolean"])),(l()(),a.La(93,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["false"])),(l()(),a.La(95,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Define if sidebar left minified is visible."])),(l()(),a.La(97,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),a.La(98,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["sidebarRightSkin"])),(l()(),a.La(100,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["string ('dark' | 'light')"])),(l()(),a.La(102,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["'dark'"])),(l()(),a.La(104,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Set the sidebar right skin."])),(l()(),a.La(106,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),a.La(107,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["isSidebarRightCollapsed"])),(l()(),a.La(109,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["boolean"])),(l()(),a.La(111,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["true"])),(l()(),a.La(113,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Defines if the sidebar right is collapsed."])),(l()(),a.La(115,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),a.La(116,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["isSidebarRightOverContent"])),(l()(),a.La(118,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["boolean"])),(l()(),a.La(120,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["true"])),(l()(),a.La(122,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Defines if sidebar right slide over content."])),(l()(),a.La(124,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),a.La(125,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["layout"])),(l()(),a.La(127,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["string ('normal' | 'boxed' | 'fixed')"])),(l()(),a.La(129,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["'normal'"])),(l()(),a.La(131,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Define the layout style."])),(l()(),a.La(133,0,null,null,84,"mk-box",[["header","Layout setters"]],null,null,null,t.b,t.a)),a.Ka(134,4374528,null,4,b.a,[a.h,a.x,a.B],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),a.Za(335544320,21,{boxHeaderDirective:0}),a.Za(335544320,22,{boxFooterDirective:0}),a.Za(335544320,23,{boxContentDirective:0}),a.Za(335544320,24,{boxToolsDirective:0}),(l()(),a.La(139,0,null,3,78,"table",[["class","table table-bordered table-hover"]],null,null,null,null,null)),(l()(),a.La(140,0,null,null,77,"tbody",[],null,null,null,null,null)),(l()(),a.La(141,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(142,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Name"])),(l()(),a.La(144,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Parameters"])),(l()(),a.La(146,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Description"])),(l()(),a.La(148,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(149,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["sidebarLeftCollapsed()"])),(l()(),a.La(151,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["boolean"])),(l()(),a.La(153,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Programmatically set if sidebar left is collapsed."])),(l()(),a.La(155,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(156,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["sidebarLeftExpandOnOver()"])),(l()(),a.La(158,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["boolean"])),(l()(),a.La(160,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Programmatically set if sidebar left expand on over."])),(l()(),a.La(162,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(163,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["sidebarLeftExpandOnOver()"])),(l()(),a.La(165,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["boolean"])),(l()(),a.La(167,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Programmatically set if sidebar left expand on over."])),(l()(),a.La(169,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(170,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["setSidebarRightSkin()"])),(l()(),a.La(172,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["'dark' | 'light'"])),(l()(),a.La(174,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Programmatically defines sidebar right skin."])),(l()(),a.La(176,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(177,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["sidebarLeftMini()"])),(l()(),a.La(179,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["boolean"])),(l()(),a.La(181,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Programmatically set if sidebar left collapsed is visible."])),(l()(),a.La(183,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(184,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["sidebarRightCollapsed()"])),(l()(),a.La(186,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["boolean"])),(l()(),a.La(188,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Programmatically set if sidebar right is collapsed."])),(l()(),a.La(190,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(191,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["sidebarRightOverContent()"])),(l()(),a.La(193,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["boolean"])),(l()(),a.La(195,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Programmatically set if sidebar right slide over content."])),(l()(),a.La(197,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(198,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["setSidebarLeftMenu()"])),(l()(),a.La(200,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Array"])),(l()(),a.La(202,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Update sidebar right menu."])),(l()(),a.La(204,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(205,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["setLayout()"])),(l()(),a.La(207,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["string"])),(l()(),a.La(209,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Update layout style."])),(l()(),a.La(211,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(212,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["setSkin()"])),(l()(),a.La(214,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["string"])),(l()(),a.La(216,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Update theme skin."])),(l()(),a.La(218,0,null,null,70,"mk-box",[["header","Layout subscriptions"]],null,null,null,t.b,t.a)),a.Ka(219,4374528,null,4,b.a,[a.h,a.x,a.B],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),a.Za(335544320,25,{boxHeaderDirective:0}),a.Za(335544320,26,{boxFooterDirective:0}),a.Za(335544320,27,{boxContentDirective:0}),a.Za(335544320,28,{boxToolsDirective:0}),(l()(),a.La(224,0,null,3,64,"table",[["class","table table-bordered table-hover"]],null,null,null,null,null)),(l()(),a.La(225,0,null,null,63,"tbody",[],null,null,null,null,null)),(l()(),a.La(226,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(227,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Name"])),(l()(),a.La(229,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Parameters"])),(l()(),a.La(231,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Description"])),(l()(),a.La(233,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(234,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["isSidebarLeftCollapsed"])),(l()(),a.La(236,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Observable<boolean>"])),(l()(),a.La(238,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Subscribe to sidebar left collapse status."])),(l()(),a.La(240,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(241,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["isSidebarLeftExpandOnOver"])),(l()(),a.La(243,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Observable<boolean>"])),(l()(),a.La(245,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Subscribe to sidebar left expand on over status."])),(l()(),a.La(247,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(248,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["isSidebarLeftMini"])),(l()(),a.La(250,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Observable<boolean>"])),(l()(),a.La(252,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Subscribe to sidebar left mini status."])),(l()(),a.La(254,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(255,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["sidebarRightSkin"])),(l()(),a.La(257,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Observable<string>"])),(l()(),a.La(259,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Subscribe to sidebar right skin."])),(l()(),a.La(261,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(262,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["isSidebarRightCollapsed"])),(l()(),a.La(264,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Observable<boolean>"])),(l()(),a.La(266,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Subscribe to sidebar right collapsed status."])),(l()(),a.La(268,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(269,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["isSidebarRightOverContent"])),(l()(),a.La(271,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Observable<Array>"])),(l()(),a.La(273,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Subscribe to sidebar right over content status."])),(l()(),a.La(275,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(276,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["layout"])),(l()(),a.La(278,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Observable<string>"])),(l()(),a.La(280,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Subscribe to layout style changes."])),(l()(),a.La(282,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),a.La(283,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["skin"])),(l()(),a.La(285,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Observable<string>"])),(l()(),a.La(287,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.bb(-1,null,["Subscribe to theme skin changes."]))],function(l,n){l(n,1,0,"Configuring Layout",!1,!1),l(n,18,0,"Configuration File",!1,!1),l(n,27,0,"Import Conf And Module",!1,!1),l(n,36,0,"App view HTML",!1,!1),l(n,45,0,"Configuration properties",!0,!1),l(n,134,0,"Layout setters",!1,!1),l(n,219,0,"Layout subscriptions",!1,!1)},null)}var d=a.Ha("app-configuration",o,function(l){return a.cb(0,[(l()(),a.La(0,0,null,null,1,"app-configuration",[],null,null,null,r,i)),a.Ka(1,4243456,null,0,o,[],null,null)],null,null)},{},{},[]),s=u("Ip0R"),L=u("ZYCi"),c=function(){},h=u("JIW3"),p=u("o6r0"),m=u("cdJr");u.d(n,"ConfigurationModuleNgFactory",function(){return f});var f=a.Ia(e,[],function(l){return a.Sa([a.Ta(512,a.j,a.X,[[8,[d]],[3,a.j],a.v]),a.Ta(4608,s.l,s.k,[a.s,[2,s.q]]),a.Ta(1073742336,s.b,s.b,[]),a.Ta(1073742336,L.r,L.r,[[2,L.w],[2,L.p]]),a.Ta(1073742336,c,c,[]),a.Ta(1073742336,h.a,h.a,[]),a.Ta(1073742336,p.a,p.a,[]),a.Ta(1073742336,m.a,m.a,[]),a.Ta(1073742336,e,e,[]),a.Ta(1024,L.n,function(){return[[{path:"",component:o}]]},[])])})}}]);