--====================================================================================
-- #XenKnighT#7085 / https://discord.gg/XUck63E
--====================================================================================
ESX = nil

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
    Citizen.Wait(0)
  end
  
 	while ESX.GetPlayerData().job == nil do
		Citizen.Wait(10)
	end

	ESX.PlayerData = ESX.GetPlayerData()
end)

RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function(xPlayer)
	ESX.PlayerData = sourcePlayer
end)

RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(job)
    ESX.PlayerData.job = job
end)

AddEventHandler('onClientResourceStart', function(res)
  DoScreenFadeIn(300)
  if res == "gks_bodycam" then
    TriggerServerEvent('gks_bodycam:onPlayerLoaded', GetPlayerServerId(PlayerId()))
    Citizen.Wait(120000)
    TriggerServerEvent('gks_bodycam:onPlayerLoaded', GetPlayerServerId(PlayerId()))
  end
end)

RegisterNetEvent("gks_bodycam:mesleka")
AddEventHandler("gks_bodycam:mesleka", function(mesleka)
  SendNUIMessage({event = 'updateMyMesleka', mesleka = mesleka})
end)

RegisterNetEvent("gks_bodycam:firstname")
AddEventHandler("gks_bodycam:firstname", function(_firstname)
  firstname = _firstname
  SendNUIMessage({event = 'updateMyFirstname', firstname = firstname})
end)

RegisterNetEvent("gks_bodycam:lastname")
AddEventHandler("gks_bodycam:lastname", function(_lastname)
  lastname = _lastname
  print("test5")
  SendNUIMessage({event = 'updateMyListname', lastname = lastname})
end)

RegisterNetEvent("gks_bodycam:meslek")
AddEventHandler("gks_bodycam:meslek", function(_meslek)
  meslek = _meslek
  SendNUIMessage({event = 'updateMyMeslek', meslek = ESX.PlayerData.job.grade_label})
end)


RegisterCommand('bodycamac', function(source, args, raw)
     if ESX.PlayerData.job.name == 'police' or ESX.PlayerData.job.name == 'ambulance' then

	SendNUIMessage({show = true})
	
	else
		TriggerEvent('notification', 'Yetkiniz yok!', 1)
	end
end)

RegisterCommand('bodycamkapat', function(source, args, raw)
	SendNUIMessage({show = false})	
end)

RegisterNetEvent('bodycam:use')
AddEventHandler('bodycam:use', function(prop_name)
  ExecuteCommand('bodycamac')
end)



--====================================================================================
-- #XenKnighT#7085 / https://discord.gg/XUck63E
--====================================================================================
