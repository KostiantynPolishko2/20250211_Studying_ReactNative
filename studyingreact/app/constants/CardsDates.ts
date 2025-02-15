import { IWeaponsData } from "../components/WeaponsCard/WeaponsData"

export const models: string[] = ['ags-17', 'uag-40', 'mk-19'];

export const weapons: IWeaponsData[] = [
    {model: 'ags-17', name: 'granatomet', isVisible: true, price: 320000, weight: 18, description: 'Was started to use since 1971 year', image_path: ''},
    {model: 'uag-40', name: 'granatomet', isVisible: false, price: 360000, weight: 17, description: 'Was started to use since 2017 year', image_path: ''},
    {model: 'mk-19', name: 'granatomet', isVisible: true, price: 120000, weight: 32.7, description: 'Was started to use since 2022 year', image_path: ''}
]