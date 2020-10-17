--====================================================================================
-- #XenKnighT#7085 / https://discord.gg/XUck63E
--====================================================================================

ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)


function getFirstname(identifier)
    local result = MySQL.Sync.fetchAll("SELECT users.firstname FROM users WHERE users.identifier = @identifier", {
        ['@identifier'] = identifier
    })
    if result[1] ~= nil then
        return result[1].firstname
    end
    return nil
end

function getLastname(identifier)

    local result = MySQL.Sync.fetchAll("SELECT users.lastname FROM users WHERE users.identifier = @identifier", {
        ['@identifier'] = identifier
    })
    if result[1] ~= nil then
        return result[1].lastname
    end
    return nil
end

function getMeslek(identifier)

    local result = MySQL.Sync.fetchAll("SELECT users.job FROM users WHERE users.identifier = @identifier", {
        ['@identifier'] = identifier
    })
    if result[1] ~= nil then
        return result[1].job
    end
    return nil
end



function getPlayerID(source)
    local identifiers = GetPlayerIdentifiers(source)
    local player = getIdentifiant(identifiers)
    return player
end
function getIdentifiant(id)
    for _, v in ipairs(id) do
        return v
    end
end

RegisterCommand('bodyfix', function(source)
    TriggerEvent('gks_bodycam:onPlayerLoaded', source) 
end)

RegisterServerEvent('gks_bodycam:onPlayerLoaded')
AddEventHandler('gks_bodycam:onPlayerLoaded',function(source)
    local sourcePlayer = tonumber(source)
    local identifier = getPlayerID(sourcePlayer)
	local fst = getFirstname(identifier)
	local lst = getLastname(identifier)
	local mslk = getMeslek(identifier)
	TriggerClientEvent("gks_bodycam:firstname", sourcePlayer, fst)
	TriggerClientEvent("gks_bodycam:lastname", sourcePlayer, lst)
    TriggerClientEvent("gks_bodycam:meslek", sourcePlayer)
	TriggerClientEvent("gks_bodycam:mesleka", sourcePlayer, mslk)
end)


ESX.RegisterUsableItem('bodycam', function(source)
    local xPlayer = ESX.GetPlayerFromId(source)
    TriggerClientEvent('bodycam:use', source)
end)

--====================================================================================
-- #XenKnighT#7085 / https://discord.gg/XUck63E
--====================================================================================