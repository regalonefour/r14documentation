"use strict";(self.webpackChunkr_14_documentation=self.webpackChunkr_14_documentation||[]).push([[499],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=s(t),u=r,v=f["".concat(c,".").concat(u)]||f[u]||h[u]||a;return t?i.createElement(v,o(o({ref:n},d),{},{components:t})):i.createElement(v,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={sidebar_position:6,title:"Updating qb-vehiclekeys",description:"Adding support for the police slim jim."},o=void 0,l={unversionedId:"r14-evidence/Installation/qbvehiclekeys",id:"r14-evidence/Installation/qbvehiclekeys",title:"Updating qb-vehiclekeys",description:"Adding support for the police slim jim.",source:"@site/docs/r14-evidence/Installation/qbvehiclekeys.md",sourceDirName:"r14-evidence/Installation",slug:"/r14-evidence/Installation/qbvehiclekeys",permalink:"/r14documentation/r14-evidence/Installation/qbvehiclekeys",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/r14-evidence/Installation/qbvehiclekeys.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Updating qb-vehiclekeys",description:"Adding support for the police slim jim."},sidebar:"tutorialSidebar",previous:{title:"Updating qb-smallresources",permalink:"/r14documentation/r14-evidence/Installation/qbsmallresources"},next:{title:"Updating Vehicle Database",permalink:"/r14documentation/r14-evidence/Installation/sql"}},c={},s=[{value:"Preconfigured Client File",id:"preconfigured-client-file",level:2}],d={toc:s};function h(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Included in our resource is an access tool item that allows police to unlock vehicle doors without generating stolen vehicle alerts, it does\nhowever, require an edit to be made to our qb-vehiclekeys resource to function properly. To enable its functionality, we only need to add\na single network event to our ",(0,r.kt)("inlineCode",{parentName:"p"},"qb-vehiclekeys/client/main.lua")," anywhere in the resource so that the ",(0,r.kt)("inlineCode",{parentName:"p"},"lastPickedVehicle")," variable will\nbe set correctly to allow a player to access a vehicle they do not have keys for. "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Never make changes to ",(0,r.kt)("strong",{parentName:"p"},"ANY")," script without making a backup first, you never know what might happen!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title='Custom qb-vehiclekeys Networked Event Handler' showLineNumbers",title:"'Custom","qb-vehiclekeys":!0,Networked:!0,Event:!0,"Handler'":!0,showLineNumbers:!0},"RegisterNetEvent('qb-vehiclekeys:client:UpdateLastPicked', function(entity)\n    lastPickedVehicle = entity\nend) \n")),(0,r.kt)("p",null,"If you use a third-party vehicle keys script, you will either need to reach out to the developer or attempt to examine the code yourself\nto enable the functionality of the access tool. "),(0,r.kt)("h2",{id:"preconfigured-client-file"},"Preconfigured Client File"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This code is current as of 10/31/2022, it will not contain updates more recent than this, and may not be compatible with older version of qb-vehiclekeys!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title='Modified qb-vehiclekeys/client/main.lua' showLineNumbers",title:"'Modified","qb-vehiclekeys/client/main.lua'":!0,showLineNumbers:!0},"-----------------------\n----   Variables   ----\n-----------------------\nlocal QBCore = exports['qb-core']:GetCoreObject()\nlocal KeysList = {}\n\nlocal isTakingKeys = false\nlocal isCarjacking = false\nlocal canCarjack = true\nlocal AlertSend = false\nlocal lastPickedVehicle = nil\nlocal usingAdvanced = false\nlocal IsHotwiring = false\n\n-----------------------\n----   Threads     ----\n-----------------------\n\nCreateThread(function()\n    while true do\n        local sleep = 1000\n        if LocalPlayer.state.isLoggedIn then\n            sleep = 100\n\n            local ped = PlayerPedId()\n            local entering = GetVehiclePedIsTryingToEnter(ped)\n            local carIsImmune = false\n            if entering ~= 0 and not isBlacklistedVehicle(entering) then\n                sleep = 2000\n                local plate = QBCore.Functions.GetPlate(entering)\n\n                local driver = GetPedInVehicleSeat(entering, -1)\n                for _, veh in ipairs(Config.ImmuneVehicles) do\n                    if GetEntityModel(entering) == joaat(veh) then\n                        carIsImmune = true\n                    end\n                end\n                -- Driven vehicle logic\n                if driver ~= 0 and not IsPedAPlayer(driver) and not HasKeys(plate) and not carIsImmune then\n                    if IsEntityDead(driver) then\n                        if not isTakingKeys then\n                            isTakingKeys = true\n\n                            TriggerServerEvent('qb-vehiclekeys:server:setVehLockState', NetworkGetNetworkIdFromEntity(entering), 1)\n                            QBCore.Functions.Progressbar(\"steal_keys\", Lang:t(\"progress.takekeys\"), 2500, false, false, {\n                                disableMovement = false,\n                                disableCarMovement = true,\n                                disableMouse = false,\n                                disableCombat = true\n                            }, {}, {}, {}, function() -- Done\n                                TriggerServerEvent('qb-vehiclekeys:server:AcquireVehicleKeys', plate)\n                                isTakingKeys = false\n                            end, function()\n                                isTakingKeys = false\n                            end)\n                        end\n                    elseif Config.LockNPCDrivingCars then\n                        TriggerServerEvent('qb-vehiclekeys:server:setVehLockState', NetworkGetNetworkIdFromEntity(entering), 2)\n                    else\n                        TriggerServerEvent('qb-vehiclekeys:server:setVehLockState', NetworkGetNetworkIdFromEntity(entering), 1)\n                        TriggerServerEvent('qb-vehiclekeys:server:AcquireVehicleKeys', plate)\n\n                        --Make passengers flee\n                        local pedsInVehicle = GetPedsInVehicle(entering)\n                        for _, pedInVehicle in pairs(pedsInVehicle) do\n                            if pedInVehicle ~= GetPedInVehicleSeat(entering, -1) then\n                                MakePedFlee(pedInVehicle)\n                            end\n                        end\n                    end\n                -- Parked car logic\n                elseif driver == 0 and entering ~= lastPickedVehicle and not HasKeys(plate) and not isTakingKeys then\n                    if Config.LockNPCParkedCars then\n                        TriggerServerEvent('qb-vehiclekeys:server:setVehLockState', NetworkGetNetworkIdFromEntity(entering), 2)\n                    else\n                        TriggerServerEvent('qb-vehiclekeys:server:setVehLockState', NetworkGetNetworkIdFromEntity(entering), 1)\n                    end\n                end\n            end\n\n            -- Hotwiring while in vehicle, also keeps engine off for vehicles you don't own keys to\n            if IsPedInAnyVehicle(ped, false) and not IsHotwiring then\n                sleep = 1000\n                local vehicle = GetVehiclePedIsIn(ped)\n                local plate = QBCore.Functions.GetPlate(vehicle)\n\n                if GetPedInVehicleSeat(vehicle, -1) == PlayerPedId() and not HasKeys(plate) and not isBlacklistedVehicle(vehicle) and not AreKeysJobShared(vehicle) then\n                    sleep = 0\n\n                    local vehiclePos = GetOffsetFromEntityInWorldCoords(vehicle, 0.0, 1.0, 0.5)\n                    DrawText3D(vehiclePos.x, vehiclePos.y, vehiclePos.z, Lang:t(\"info.skeys\"))\n                    SetVehicleEngineOn(vehicle, false, false, true)\n\n                    if IsControlJustPressed(0, 74) then\n                        Hotwire(vehicle, plate)\n                    end\n                end\n            end\n\n            if Config.CarJackEnable and canCarjack then\n                local playerid = PlayerId()\n                local aiming, target = GetEntityPlayerIsFreeAimingAt(playerid)\n                if aiming and (target ~= nil and target ~= 0) then\n                    if DoesEntityExist(target) and IsPedInAnyVehicle(target, false) and not IsEntityDead(target) and not IsPedAPlayer(target) then\n                        local targetveh = GetVehiclePedIsIn(target)\n                        for _, veh in ipairs(Config.ImmuneVehicles) do\n                            if GetEntityModel(targetveh) == joaat(veh) then\n                                carIsImmune = true\n                            end\n                        end\n                        if GetPedInVehicleSeat(targetveh, -1) == target and not IsBlacklistedWeapon() then\n                            local pos = GetEntityCoords(ped, true)\n                            local targetpos = GetEntityCoords(target, true)\n                            if #(pos - targetpos) < 5.0 and not carIsImmune then\n                                CarjackVehicle(target)\n                            end\n                        end\n                    end\n                end\n            end\n        end\n        Wait(sleep)\n    end\nend)\n\nfunction isBlacklistedVehicle(vehicle)\n    local isBlacklisted = false\n    for _,v in ipairs(Config.NoLockVehicles) do\n        if GetHashKey(v) == GetEntityModel(vehicle) then\n            isBlacklisted = true\n            break;\n        end\n    end\n    if Entity(vehicle).state.ignoreLocks or GetVehicleClass(vehicle) == 13 then isBlacklisted = true end\n    return isBlacklisted\nend\n\n-----------------------\n---- Client Events ----\n-----------------------\n\nRegisterKeyMapping('togglelocks', Lang:t(\"info.tlock\"), 'keyboard', 'L')\nRegisterCommand('togglelocks', function()\n    ToggleVehicleLocks(GetVehicle())\nend)\n\nRegisterKeyMapping('engine', Lang:t(\"info.engine\"), 'keyboard', 'G')\nRegisterCommand('engine', function()\n    TriggerEvent(\"qb-vehiclekeys:client:ToggleEngine\")\nend)\n\nAddEventHandler('onResourceStart', function(resourceName)\n    if resourceName == GetCurrentResourceName() and QBCore.Functions.GetPlayerData() ~= {} then\n        GetKeys()\n    end\nend)\n\n-- Handles state right when the player selects their character and location.\nRegisterNetEvent('QBCore:Client:OnPlayerLoaded', function()\n    GetKeys()\nend)\n\n-- Resets state on logout, in case of character change.\nRegisterNetEvent('QBCore:Client:OnPlayerUnload', function()\n    KeysList = {}\nend)\n\nRegisterNetEvent('qb-vehiclekeys:client:AddKeys', function(plate)\n    KeysList[plate] = true\n\n    local ped = PlayerPedId()\n    if IsPedInAnyVehicle(ped, false) then\n        local vehicle = GetVehiclePedIsIn(ped)\n        local vehicleplate = QBCore.Functions.GetPlate(vehicle)\n\n        if plate == vehicleplate then\n            SetVehicleEngineOn(vehicle, false, false, false)\n        end\n    end\nend)\n\nRegisterNetEvent('qb-vehiclekeys:client:RemoveKeys', function(plate)\n    KeysList[plate] = nil\nend)\n\nRegisterNetEvent('qb-vehiclekeys:client:ToggleEngine', function()\n    local EngineOn = GetIsVehicleEngineRunning(GetVehiclePedIsIn(PlayerPedId()))\n    local vehicle = GetVehiclePedIsIn(PlayerPedId(), true)\n    if HasKeys(QBCore.Functions.GetPlate(vehicle)) then\n        if EngineOn then\n            SetVehicleEngineOn(vehicle, false, false, true)\n        else\n            SetVehicleEngineOn(vehicle, true, false, true)\n        end\n    end\nend)\n\nRegisterNetEvent('qb-vehiclekeys:client:GiveKeys', function(id)\n    local targetVehicle = GetVehicle()\n\n    if targetVehicle then\n        local targetPlate = QBCore.Functions.GetPlate(targetVehicle)\n        if HasKeys(targetPlate) then\n            if id and type(id) == \"number\" then -- Give keys to specific ID\n                GiveKeys(id, targetPlate)\n            else\n                if IsPedSittingInVehicle(PlayerPedId(), targetVehicle) then -- Give keys to everyone in vehicle\n                    local otherOccupants = GetOtherPlayersInVehicle(targetVehicle)\n                    for p=1,#otherOccupants do\n                        TriggerServerEvent('qb-vehiclekeys:server:GiveVehicleKeys', GetPlayerServerId(NetworkGetPlayerIndexFromPed(otherOccupants[p])), targetPlate)\n                    end\n                else -- Give keys to closest player\n                    GiveKeys(GetPlayerServerId(QBCore.Functions.GetClosestPlayer()), targetPlate)\n                end\n            end\n        else\n            QBCore.Functions.Notify(Lang:t(\"notify.ydhk\"), 'error')\n        end\n    end\nend)\n\nRegisterNetEvent('lockpicks:UseLockpick', function(isAdvanced)\n    LockpickDoor(isAdvanced)\nend)\n\nRegisterNetEvent('qb-vehiclekeys:client:UpdateLastPicked', function(entity)\n    lastPickedVehicle = entity\nend) \n\n-- Backwards Compatibility ONLY -- Remove at some point --\nRegisterNetEvent('vehiclekeys:client:SetOwner', function(plate)\n    TriggerServerEvent('qb-vehiclekeys:server:AcquireVehicleKeys', plate)\nend)\n-- Backwards Compatibility ONLY -- Remove at some point --\n\n-----------------------\n----   Functions   ----\n-----------------------\n\nfunction GiveKeys(id, plate)\n    local distance = #(GetEntityCoords(PlayerPedId()) - GetEntityCoords(GetPlayerPed(GetPlayerFromServerId(id))))\n    if distance < 1.5 and distance > 0.0 then\n        TriggerServerEvent('qb-vehiclekeys:server:GiveVehicleKeys', id, plate)\n    else\n        QBCore.Functions.Notify(Lang:t(\"notify.nonear\"),'error')\n    end\nend\n\nfunction GetKeys()\n    QBCore.Functions.TriggerCallback('qb-vehiclekeys:server:GetVehicleKeys', function(keysList)\n        KeysList = keysList\n    end)\nend\n\nfunction HasKeys(plate)\n    return KeysList[plate]\nend\nexports('HasKeys', HasKeys)\n\nfunction loadAnimDict(dict)\n    while (not HasAnimDictLoaded(dict)) do\n        RequestAnimDict(dict)\n        Wait(0)\n    end\nend\n\nfunction GetVehicleInDirection(coordFromOffset, coordToOffset)\n    local ped = PlayerPedId()\n    local coordFrom = GetOffsetFromEntityInWorldCoords(ped, coordFromOffset.x, coordFromOffset.y, coordFromOffset.z)\n    local coordTo = GetOffsetFromEntityInWorldCoords(ped, coordToOffset.x, coordToOffset.y, coordToOffset.z)\n\n    local rayHandle = CastRayPointToPoint(coordFrom.x, coordFrom.y, coordFrom.z, coordTo.x, coordTo.y, coordTo.z, 10, PlayerPedId(), 0)\n    local _, _, _, _, vehicle = GetShapeTestResult(rayHandle)\n    return vehicle\nend\n\n-- If in vehicle returns that, otherwise tries 3 different raycasts to get the vehicle they are facing.\n-- Raycasts picture: https://i.imgur.com/FRED0kV.png\nfunction GetVehicle()\n    local vehicle = GetVehiclePedIsIn(PlayerPedId())\n\n    local RaycastOffsetTable = {\n        { ['fromOffset'] = vector3(0.0, 0.0, 0.0), ['toOffset'] = vector3(0.0, 20.0, -10.0) }, -- Waist to ground 45 degree angle\n        { ['fromOffset'] = vector3(0.0, 0.0, 0.7), ['toOffset'] = vector3(0.0, 10.0, -10.0) }, -- Head to ground 30 degree angle\n        { ['fromOffset'] = vector3(0.0, 0.0, 0.7), ['toOffset'] = vector3(0.0, 10.0, -20.0) }, -- Head to ground 15 degree angle\n    }\n\n    local count = 0\n    while vehicle == 0 and count < #RaycastOffsetTable do\n        count = count + 1\n        vehicle = GetVehicleInDirection(RaycastOffsetTable[count]['fromOffset'], RaycastOffsetTable[count]['toOffset'])\n    end\n\n    if not IsEntityAVehicle(vehicle) then vehicle = nil end\n    return vehicle\nend\n\nfunction AreKeysJobShared(veh)\n    local vehName = GetDisplayNameFromVehicleModel(GetEntityModel(veh))\n    local vehPlate = QBCore.Functions.GetPlate(veh)\n    local jobName = QBCore.Functions.GetPlayerData().job.name\n    local onDuty = QBCore.Functions.GetPlayerData().job.onduty\n    for job, v in pairs(Config.SharedKeys) do\n        if job == jobName then\n        if Config.SharedKeys[job].requireOnduty and not onDuty then return false end\n        for _, vehicle in pairs(v.vehicles) do\n            if string.upper(vehicle) == string.upper(vehName) then\n            if not HasKeys(vehPlate) then\n                TriggerServerEvent(\"qb-vehiclekeys:server:AcquireVehicleKeys\", vehPlate)\n            end\n            return true\n            end\n            end\n        end\n    end\n    return false\nend\n\nfunction ToggleVehicleLocks(veh)\n    if veh then\n        if not isBlacklistedVehicle(veh) then\n            if HasKeys(QBCore.Functions.GetPlate(veh)) or AreKeysJobShared(veh) then\n                local ped = PlayerPedId()\n                local vehLockStatus = GetVehicleDoorLockStatus(veh)\n\n                loadAnimDict(\"anim@mp_player_intmenu@key_fob@\")\n                TaskPlayAnim(ped, 'anim@mp_player_intmenu@key_fob@', 'fob_click', 3.0, 3.0, -1, 49, 0, false, false, false)\n\n                TriggerServerEvent(\"InteractSound_SV:PlayWithinDistance\", 5, \"lock\", 0.3)\n\n                NetworkRequestControlOfEntity(veh)\n                if vehLockStatus == 1 then\n                    TriggerServerEvent('qb-vehiclekeys:server:setVehLockState', NetworkGetNetworkIdFromEntity(veh), 2)\n                    QBCore.Functions.Notify(Lang:t(\"notify.vlock\"), \"primary\")\n                else\n                    TriggerServerEvent('qb-vehiclekeys:server:setVehLockState', NetworkGetNetworkIdFromEntity(veh), 1)\n                    QBCore.Functions.Notify(Lang:t(\"notify.vunlock\"), \"success\")\n                end\n\n                SetVehicleLights(veh, 2)\n                Wait(250)\n                SetVehicleLights(veh, 1)\n                Wait(200)\n                SetVehicleLights(veh, 0)\n                Wait(300)\n                ClearPedTasks(ped)\n            else\n                QBCore.Functions.Notify(Lang:t(\"notify.ydhk\"), 'error')\n            end\n        else\n            TriggerServerEvent('qb-vehiclekeys:server:setVehLockState', NetworkGetNetworkIdFromEntity(veh), 1)\n        end\n    end\nend\n\nfunction GetOtherPlayersInVehicle(vehicle)\n    local otherPeds = {}\n    for seat=-1,GetVehicleModelNumberOfSeats(GetEntityModel(vehicle))-2 do\n        local pedInSeat = GetPedInVehicleSeat(vehicle, seat)\n        if IsPedAPlayer(pedInSeat) and pedInSeat ~= PlayerPedId() then\n            otherPeds[#otherPeds+1] = pedInSeat\n        end\n    end\n    return otherPeds\nend\n\nfunction GetPedsInVehicle(vehicle)\n    local otherPeds = {}\n    for seat=-1,GetVehicleModelNumberOfSeats(GetEntityModel(vehicle))-2 do\n        local pedInSeat = GetPedInVehicleSeat(vehicle, seat)\n        if not IsPedAPlayer(pedInSeat) and pedInSeat ~= 0 then\n            otherPeds[#otherPeds+1] = pedInSeat\n        end\n    end\n    return otherPeds\nend\n\nfunction IsBlacklistedWeapon()\n    local weapon = GetSelectedPedWeapon(PlayerPedId())\n    if weapon ~= nil then\n        for _, v in pairs(Config.NoCarjackWeapons) do\n            if weapon == GetHashKey(v) then\n                return true\n            end\n        end\n    end\n    return false\nend\n\nfunction LockpickDoor(isAdvanced)\n    local ped = PlayerPedId()\n    local pos = GetEntityCoords(ped)\n    local vehicle = QBCore.Functions.GetClosestVehicle()\n\n    if vehicle == nil or vehicle == 0 then return end\n    if HasKeys(QBCore.Functions.GetPlate(vehicle)) then return end\n    if #(pos - GetEntityCoords(vehicle)) > 2.5 then return end\n    if GetVehicleDoorLockStatus(vehicle) <= 0 then return end\n\n    usingAdvanced = isAdvanced\n    Config.LockPickDoorEvent()\nend\n\nfunction LockpickFinishCallback(success)\n    local vehicle = QBCore.Functions.GetClosestVehicle()\n\n    local chance = math.random()\n    if success then\n        TriggerServerEvent('hud:server:GainStress', math.random(1, 4))\n        lastPickedVehicle = vehicle\n\n        if GetPedInVehicleSeat(vehicle, -1) == PlayerPedId() then\n            TriggerServerEvent('qb-vehiclekeys:server:AcquireVehicleKeys', QBCore.Functions.GetPlate(vehicle))\n        else\n            QBCore.Functions.Notify(Lang:t(\"notify.vlockpick\"), 'success')\n            TriggerServerEvent('qb-vehiclekeys:server:setVehLockState', NetworkGetNetworkIdFromEntity(vehicle), 1)\n        end\n\n    else\n        TriggerServerEvent('hud:server:GainStress', math.random(1, 4))\n        AttemptPoliceAlert(\"steal\")\n    end\n\n    if usingAdvanced then\n        if chance <= Config.RemoveLockpickAdvanced then\n            TriggerServerEvent(\"qb-vehiclekeys:server:breakLockpick\", \"advancedlockpick\")\n        end\n    else\n        if chance <= Config.RemoveLockpickNormal then\n            TriggerServerEvent(\"qb-vehiclekeys:server:breakLockpick\", \"lockpick\")\n        end\n    end\nend\n\nfunction Hotwire(vehicle, plate)\n    local hotwireTime = math.random(Config.minHotwireTime, Config.maxHotwireTime)\n    local ped = PlayerPedId()\n    IsHotwiring = true\n\n    SetVehicleAlarm(vehicle, true)\n    SetVehicleAlarmTimeLeft(vehicle, hotwireTime)\n    QBCore.Functions.Progressbar(\"hotwire_vehicle\", Lang:t(\"progress.hskeys\"), hotwireTime, false, true, {\n        disableMovement = true,\n        disableCarMovement = true,\n        disableMouse = false,\n        disableCombat = true\n    }, {\n        animDict = \"anim@amb@clubhouse@tutorial@bkr_tut_ig3@\",\n        anim = \"machinic_loop_mechandplayer\",\n        flags = 16\n    }, {}, {}, function() -- Done\n        StopAnimTask(ped, \"anim@amb@clubhouse@tutorial@bkr_tut_ig3@\", \"machinic_loop_mechandplayer\", 1.0)\n        TriggerServerEvent('hud:server:GainStress', math.random(1, 4))\n        if (math.random() <= Config.HotwireChance) then\n            TriggerServerEvent('qb-vehiclekeys:server:AcquireVehicleKeys', plate)\n        else\n            QBCore.Functions.Notify(Lang:t(\"notify.fvlockpick\"), \"error\")\n        end\n        Wait(Config.TimeBetweenHotwires)\n        IsHotwiring = false\n    end, function() -- Cancel\n        StopAnimTask(ped, \"anim@amb@clubhouse@tutorial@bkr_tut_ig3@\", \"machinic_loop_mechandplayer\", 1.0)\n        IsHotwiring = false\n    end)\n    SetTimeout(10000, function()\n        AttemptPoliceAlert(\"steal\")\n    end)\n    IsHotwiring = false\nend\n\nfunction CarjackVehicle(target)\n    if not Config.CarJackEnable then return end\n    isCarjacking = true\n    canCarjack = false\n    loadAnimDict('mp_am_hold_up')\n    local vehicle = GetVehiclePedIsUsing(target)\n    local occupants = GetPedsInVehicle(vehicle)\n    for p=1,#occupants do\n        local ped = occupants[p]\n        CreateThread(function()\n            TaskPlayAnim(ped, \"mp_am_hold_up\", \"holdup_victim_20s\", 8.0, -8.0, -1, 49, 0, false, false, false)\n            PlayPain(ped, 6, 0)\n        end)\n        Wait(math.random(200,500))\n    end\n    -- Cancel progress bar if: Ped dies during robbery, car gets too far away\n    CreateThread(function()\n        while isCarjacking do\n            local distance = #(GetEntityCoords(PlayerPedId()) - GetEntityCoords(target))\n            if IsPedDeadOrDying(target) or distance > 7.5 then\n                TriggerEvent(\"progressbar:client:cancel\")\n            end\n            Wait(100)\n        end\n    end)\n    QBCore.Functions.Progressbar(\"rob_keys\", Lang:t(\"progress.acjack\"), Config.CarjackingTime, false, true, {}, {}, {}, {}, function()\n        local hasWeapon, weaponHash = GetCurrentPedWeapon(PlayerPedId(), true)\n        if hasWeapon and isCarjacking then\n            local carjackChance\n            if Config.CarjackChance[tostring(GetWeapontypeGroup(weaponHash))] then\n                carjackChance = Config.CarjackChance[tostring(GetWeapontypeGroup(weaponHash))]\n            else\n                carjackChance = 0.5\n            end\n            if math.random() <= carjackChance then\n                local plate = QBCore.Functions.GetPlate(vehicle)\n                    for p=1,#occupants do\n                        local ped = occupants[p]\n                        CreateThread(function()\n                        TaskLeaveVehicle(ped, vehicle, 0)\n                        PlayPain(ped, 6, 0)\n                        Wait(1250)\n                        ClearPedTasksImmediately(ped)\n                        PlayPain(ped, math.random(7,8), 0)\n                        MakePedFlee(ped)\n                    end)\n                end\n                TriggerServerEvent('hud:server:GainStress', math.random(1, 4))\n                TriggerServerEvent('qb-vehiclekeys:server:AcquireVehicleKeys', plate)\n            else\n                QBCore.Functions.Notify(Lang:t(\"notify.cjackfail\"), \"error\")\n                MakePedFlee(target)\n                TriggerServerEvent('hud:server:GainStress', math.random(1, 4))\n            end\n            isCarjacking = false\n            Wait(2000)\n            AttemptPoliceAlert(\"carjack\")\n            Wait(Config.DelayBetweenCarjackings)\n            canCarjack = true\n        end\n    end, function()\n        MakePedFlee(target)\n        isCarjacking = false\n        Wait(Config.DelayBetweenCarjackings)\n        canCarjack = true\n    end)\nend\n\nfunction AttemptPoliceAlert(type)\n    if not AlertSend then\n        local chance = Config.PoliceAlertChance\n        if GetClockHours() >= 1 and GetClockHours() <= 6 then\n            chance = Config.PoliceNightAlertChance\n        end\n        if math.random() <= chance then\n           TriggerServerEvent('police:server:policeAlert', Lang:t(\"info.palert\") .. type)\n        end\n        AlertSend = true\n        SetTimeout(Config.AlertCooldown, function()\n            AlertSend = false\n        end)\n    end\nend\n\nfunction MakePedFlee(ped)\n    SetPedFleeAttributes(ped, 0, 0)\n    TaskReactAndFleePed(ped, PlayerPedId())\nend\n\nfunction DrawText3D(x, y, z, text)\n    SetTextScale(0.35, 0.35)\n    SetTextFont(4)\n    SetTextProportional(1)\n    SetTextColour(255, 255, 255, 215)\n    SetTextEntry(\"STRING\")\n    SetTextCentre(true)\n    AddTextComponentString(text)\n    SetDrawOrigin(x, y, z, 0)\n    DrawText(0.0, 0.0)\n    local factor = (string.len(text)) / 370\n    DrawRect(0.0, 0.0 + 0.0125, 0.017 + factor, 0.03, 0, 0, 0, 75)\n    ClearDrawOrigin()\nend\n")))}h.isMDXComponent=!0}}]);