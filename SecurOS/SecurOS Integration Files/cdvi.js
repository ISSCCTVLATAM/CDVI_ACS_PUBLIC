function cdviLoad(o)
{
    if(o.system.type == "CDVI_D" || o.system.type == "CDVI_D")
        o.image = "acs/AMAG_DOOR.png"
    else if(o.system.type == "CDVI_R" || o.system.type == "CDVI_R")
        o.image = "acs/AMAG_READER.png"
    
    o.drag = o.system.type + ":" + o.system.id
}
 
function cdviUpdate(o)
{
    o.name = o.system.name
    o.state = o.system.stateName
    o.blinking = o.system.blinking
}

function cdviMenuFilter(o, action)
{
    return o.system.rights >= 2;
}
 
cdvi = { load: cdviLoad, update: cdviUpdate, menuFilter: cdviMenuFilter }
 
Map.registerType("CDVI_D", cdvi)
Map.registerType("CDVI_R", cdvi)