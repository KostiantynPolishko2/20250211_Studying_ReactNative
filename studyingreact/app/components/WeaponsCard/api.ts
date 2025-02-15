import { IWeaponsData } from "./WeaponsData"

export const fetchWeapon = (model: string, weapons: IWeaponsData[]):IWeaponsData | null => {
    const size = weapons.length;
    const _model = model.toLocaleLowerCase();

    for(let i = 0; i < size; i++)
        if(_model === weapons[i].model.toLocaleLowerCase())
            return weapons[i];
        
    return null;
}