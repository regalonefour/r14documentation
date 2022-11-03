"use strict";(self.webpackChunkr_14_documentation=self.webpackChunkr_14_documentation||[]).push([[354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,v=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return n?i.createElement(v,a(a({ref:t},h),{},{components:n})):i.createElement(v,a({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3,title:"Vehicle Tampers/Fingerprints",description:"qb-garages by default"},a="Setting up Vehicle Tampers/Fingerprints",c={unversionedId:"r14-evidence/Setting Up Subsystems/vehicletampers",id:"r14-evidence/Setting Up Subsystems/vehicletampers",title:"Vehicle Tampers/Fingerprints",description:"qb-garages by default",source:"@site/docs/r14-evidence/Setting Up Subsystems/vehicletampers.md",sourceDirName:"r14-evidence/Setting Up Subsystems",slug:"/r14-evidence/Setting Up Subsystems/vehicletampers",permalink:"/r14documentation/r14-evidence/Setting Up Subsystems/vehicletampers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/r14-evidence/Setting Up Subsystems/vehicletampers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Vehicle Tampers/Fingerprints",description:"qb-garages by default"},sidebar:"tutorialSidebar",previous:{title:"Breathalyzer",permalink:"/r14documentation/r14-evidence/Setting Up Subsystems/breathalyzer"},next:{title:"Drug Testing",permalink:"/r14documentation/r14-evidence/Setting Up Subsystems/drugtesting"}},s={},l=[],h={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-vehicle-tampersfingerprints"},"Setting up Vehicle Tampers/Fingerprints"),(0,r.kt)("h1",{id:"out-of-the-box"},"Out of the Box"),(0,r.kt)("p",null,"Because r14-evidence adds the functionality for police to check a vehicle for signs of tampering and search them for\nfingerprints, we must add the proper event triggers to our vehicle keys script. An edit of qb-vehiclekeys (current as of 10/30/22)\nis available from the discord for those who use the default resource, but if you use modified version or a third-party\nscript you can use the following guide to enable vehicle tampering and vehicle fingerprint evidence on your server."),(0,r.kt)("h1",{id:"how-to-create-a-vehicle-tamper"},"How to Create A Vehicle Tamper"),(0,r.kt)("p",null,"To create a vehicle tampering, you only need to trigger a server event with a boolean argument in the first position\nand the (properly trimmed) string of the vehicle's plate. There are two types of vehicle tamperings you can trigger\nin r14-evidence, an exterior lock tamper which indicates the vehicle was forcibly entered, and an ignition tamper which\nindicates the vehicle was forcibly started. Before we look at how to edit our resource, lets look at how we trigger these\nevents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title='r14-evidence Exterior Tamper Event'",title:"'r14-evidence",Exterior:!0,Tamper:!0,"Event'":!0},"TriggerServerEvent('evidence:server:SetExteriorTamper', boolean, plate) -- from client-side\n\nTriggerEvent('evidence:server:SetExteriorTamper', boolean, plate) -- from server-side\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title='r14-evidence Ignition Tamper Event'",title:"'r14-evidence",Ignition:!0,Tamper:!0,"Event'":!0},"TriggerServerEvent('evidence:server:SetIgnitionTamper', boolean, plate) -- from client-side\n\nTriggerEvent('evidence:server:SetIgnitionTamper', boolean, plate) -- from server-side\n")),(0,r.kt)("p",null,"To create an exterior tamper, we need to trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"'evidence:server:SetExteriorTamper'")," with a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\nand the plate of the vehicle in question. To ensure that we are properly matching the plate to the ones we search using\nthe Inspect Vehicle or Evidence Sweep job functions, we should use the built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"QBCore.Functions.GetPlate()")," function to find\nthe plate text of the vehicle instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetPlate()")," native due to its automatic trimming function which formats\nplates less than 8 characters."),(0,r.kt)("h1",{id:"how-to-create-a-vehicle-fingerprint"},"How to Create A Vehicle Fingerprint"),(0,r.kt)("p",null,"To create a vehicle fingerprint, you must trigger the following server networked event with the plate of the vehicle you\nwant to create a fingerprint in, and a string that describes the location of the fingerprint on or in the vehicle. It is\nimportant not to trigger this from the server side as the script will not be able to use the event source to find a Citizen ID. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title='r14-evidence Vehicle Fingerprint Event'",title:"'r14-evidence",Vehicle:!0,Fingerprint:!0,"Event'":!0},"TriggerServerEvent('evidence:server:CreateCarFingerprint', plate, location)\n")),(0,r.kt)("p",null,"As with our tampering events, it is important that we either use qb-core's built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"QBCore.Functions.GetPlate()")," function or\nif we must use the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetPlate()")," native that we use a plate trimming function to properly add whitespace to plate strings of\nless than eight charactgers. "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Never make changes to ",(0,r.kt)("strong",{parentName:"p"},"ANY")," script without making a backup first, you never know what might happen!")),(0,r.kt)("h1",{id:"integrating-a-third-party-script"},"Integrating A Third Party Script"),(0,r.kt)("p",null,"In order to modify an older version of qb-vehiclekeys, or to add functionality to a third-party script, we must look\nat the code and determine the point at which the player attempts to forcibly enter or start the vehicle and add an event\ntrigger there. To give a generalized guide of how to do this, we will look at qb-vehiclekeys and look for the best place to\nadd these event triggers."),(0,r.kt)("p",null,"Because we want to only create a tamper when the player has attempted to enter the vehicle, we will want to look for the code\nthat allows a player to break into a vehicle. By default in qb-vehiclekeys, a player can usually only do this by using a lockpick\nto attempt to break into a locked vehicle. We can find our starting point by simply searching the client/main.lua and server/main.lua\nfor the term lockpick. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title='qb-vehiclekeys Client-side Networked Event Handler'",title:"'qb-vehiclekeys","Client-side":!0,Networked:!0,Event:!0,"Handler'":!0},"RegisterNetEvent('lockpicks:UseLockpick', function(isAdvanced)\n    LockpickDoor(isAdvanced)\nend)\n")),(0,r.kt)("p",null,"The first result for the term lockpick leads us to this event handler, but if we want to be sure of what triggers this event, we\ncan perform a search of our server files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title='qb-smallresources Server-side Useable Item Function'",title:"'qb-smallresources","Server-side":!0,Useable:!0,Item:!0,"Function'":!0},'QBCore.Functions.CreateUseableItem("lockpick", function(source, item)\n    local Player = QBCore.Functions.GetPlayer(source)\n    TriggerClientEvent("lockpicks:UseLockpick", source, false)\nend)\n')),(0,r.kt)("p",null,"If you use qb-smallresources, your serach should show you that the ",(0,r.kt)("inlineCode",{parentName:"p"},"QBCore.Functions.CreateUseableItem()")," for the lockpick item\ntriggers this event whenever a player uses the lockpick item. With this information, we can now follow the code and inspect the\nfunction found in the event handler."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title='qb-vehiclekeys Client-side Lockpickdoor Function'",title:"'qb-vehiclekeys","Client-side":!0,Lockpickdoor:!0,"Function'":!0},"function LockpickDoor(isAdvanced)\n    local ped = PlayerPedId()\n    local pos = GetEntityCoords(ped)\n    local vehicle = QBCore.Functions.GetClosestVehicle()\n\n    if vehicle == nil or vehicle == 0 then return end\n    if HasKeys(QBCore.Functions.GetPlate(vehicle)) then return end\n    if #(pos - GetEntityCoords(vehicle)) > 2.5 then return end\n    if GetVehicleDoorLockStatus(vehicle) <= 0 then return end\n\n    usingAdvanced = isAdvanced\n    Config.LockPickDoorEvent()\nend\n")),(0,r.kt)("p",null,"When we look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"LockpickDoor()")," function, we find the code which checks if we are near a vehicle, if we\nhave the keys for it, and if the vehicle is locked before executing the function contained in the config that triggers the\nlockpicking minigame. We can then find the callback which is executed by qb-lockpick below this in the following function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title='qb-vehiclekeys Client-side Lockpick Callback Function' showLineNumbers",title:"'qb-vehiclekeys","Client-side":!0,Lockpick:!0,Callback:!0,"Function'":!0,showLineNumbers:!0},'function LockpickFinishCallback(success)\n    local vehicle = QBCore.Functions.GetClosestVehicle()\n\n    local chance = math.random()\n    // highlight-start\n    if success then\n        TriggerServerEvent(\'hud:server:GainStress\', math.random(1, 4))\n        lastPickedVehicle = vehicle\n\n        if GetPedInVehicleSeat(vehicle, -1) == PlayerPedId() then\n            TriggerServerEvent(\'qb-vehiclekeys:server:AcquireVehicleKeys\', QBCore.Functions.GetPlate(vehicle))\n        else\n            QBCore.Functions.Notify(Lang:t("notify.vlockpick"), \'success\')\n            TriggerServerEvent(\'qb-vehiclekeys:server:setVehLockState\', NetworkGetNetworkIdFromEntity(vehicle), 1)\n        end\n\n    else\n        TriggerServerEvent(\'hud:server:GainStress\', math.random(1, 4))\n        AttemptPoliceAlert("steal")\n    end\n    //highlight-end\n\n    if usingAdvanced then\n        if chance <= Config.RemoveLockpickAdvanced then\n            TriggerServerEvent("qb-vehiclekeys:server:breakLockpick", "advancedlockpick")\n        end\n    else\n        if chance <= Config.RemoveLockpickNormal then\n            TriggerServerEvent("qb-vehiclekeys:server:breakLockpick", "lockpick")\n        end\n    end\nend\n')),(0,r.kt)("p",null,"Here, we can see that in this callback function, if the pick is successful it will then check if the ped is nearby the vehicle or sitting\nin it. Because this function is only triggered when the lockpicking minigame is completed, this is an appropriate place to add the tampering\nand fingerprint triggers. Rather than placing it within the conditional statement starting at ",(0,r.kt)("inlineCode",{parentName:"p"},"Line 5"),", we can use the some of the logic\nthis function and add it above the if this if statement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title='Modified qb-vehiclekeys Client-side Lockpick Callback Function' showLineNumbers",title:"'Modified","qb-vehiclekeys":!0,"Client-side":!0,Lockpick:!0,Callback:!0,"Function'":!0,showLineNumbers:!0},"function LockpickFinishCallback(success)\n    local vehicle = QBCore.Functions.GetClosestVehicle()\n\n    //highlight-start\n    if GetPedInVehicleSeat(vehicle, -1) == PlayerPedId() then\n        TriggerServerEvent('evidence:server:SetIgnitionTamper', true, QBCore.Functions.GetPlate(vehicle))\n        if QBCore.Functions.IsWearingGloves and not QBCore.Functions.IsWearingGloves() then\n            TriggerServerEvent('evidence:server:CreateCarFingerprint', QBCore.Functions.GetPlate(vehicle), \"Vehicle Ignition\")\n        end\n    else\n        if QBCore.Functions.IsWearingGloves and not QBCore.Functions.IsWearingGloves() then\n            TriggerServerEvent('evidence:server:CreateCarFingerprint', QBCore.Functions.GetPlate(vehicle), \"Exterior Locks\")\n        end\n        TriggerServerEvent('evidence:server:SetExteriorTamper', true, QBCore.Functions.GetPlate(vehicle))\n    end\n    //highlight-end\n\n    local chance = math.random()\n    if success then\n        TriggerServerEvent('hud:server:GainStress', math.random(1, 4))\n        lastPickedVehicle = vehicle\n\n        if GetPedInVehicleSeat(vehicle, -1) == PlayerPedId() then\n            TriggerServerEvent('qb-vehiclekeys:server:AcquireVehicleKeys', QBCore.Functions.GetPlate(vehicle))\n        else\n            QBCore.Functions.Notify(Lang:t(\"notify.vlockpick\"), 'success')\n            TriggerServerEvent('qb-vehiclekeys:server:setVehLockState', NetworkGetNetworkIdFromEntity(vehicle), 1)\n        end\n\n    else\n        TriggerServerEvent('hud:server:GainStress', math.random(1, 4))\n        AttemptPoliceAlert(\"steal\")\n    end\n\n    if usingAdvanced then\n        if chance <= Config.RemoveLockpickAdvanced then\n            TriggerServerEvent(\"qb-vehiclekeys:server:breakLockpick\", \"advancedlockpick\")\n        end\n    else\n        if chance <= Config.RemoveLockpickNormal then\n            TriggerServerEvent(\"qb-vehiclekeys:server:breakLockpick\", \"lockpick\")\n        end\n    end\nend\n")),(0,r.kt)("p",null,"Because this event already contains code that checks if the player is attempting to lockpick the ignition or the exterior\ndoor, we can reuse this code and create a new block at ",(0,r.kt)("inlineCode",{parentName:"p"},"Line 4")," at the beginning of the callback function. We can then\nadd our tampering events in the if/else portion of this statement, and add some additional logic to check if our ped is wearing\ngloves to determine whether or not we create a vehcile fingerprint. The final thing we need to do is add our location to our\nfingerprints, marking the ones from a driver as being on the vehicle's ignition, and the other on the vehicle's exterior locks!"))}d.isMDXComponent=!0}}]);